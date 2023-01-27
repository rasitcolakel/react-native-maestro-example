import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../components/Input";

type Task = {
  id: number;
  title: string;
};

type Props = {};

const HomeScreen = (props: Props) => {
  const [newTask, setNewTask] = React.useState<string>("");
  const [taskList, setTaskList] = React.useState<Task[]>([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ]);

  const addTask = () => {
    // random number between 0 and 1000
    const id = Math.floor(Math.random() * 1000);
    const task = {
      id,
      title: newTask,
    };
    setTaskList([task, ...taskList]);
    setNewTask("");
  };

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  const renderNewTask = React.useMemo(() => {
    return (
      <View className="flex-row items-center justify-between bg-white shadow-md rounded-md p-2 mb-2">
        <Input
          className="border-2 border-gray-300 rounded-md p-2 mr-2 flex-1"
          testID="newTask"
          placeholder="New task"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity
          className="bg-green-500 p-2 rounded-md"
          testID="addTask"
          onPress={addTask}
          disabled={newTask.length === 0}
        >
          <Text className="text-white">Add</Text>
        </TouchableOpacity>
      </View>
    );
  }, [newTask]);

  const renderTaskList = React.useMemo(() => {
    return taskList.map((task) => (
      <Task key={task.id} task={task} delete={deleteTask} />
    ));
  }, [taskList]);

  return (
    <View className="py-4">
      <Text className="text-2xl text-center">Today's tasks</Text>
      <View className="p-2">{renderNewTask}</View>
      <View className="p-2">{renderTaskList}</View>
    </View>
  );
};

type TaskProps = {
  task: Task;
  delete: (id: number) => void;
};

// This component renders a task item.
// It takes a task object as a prop.
// It also takes a delete function as a prop.
// The delete function takes a task id as a parameter.
// When the delete button is pressed, the delete function is called with the task id.

const Task = React.memo((props: TaskProps): React.ReactElement => {
  console.log("tas", props.task);
  return (
    <View className="flex-row items-center justify-between bg-white shadow-md rounded-md p-2 mb-2">
      <Text>{props.task.title}</Text>
      <TouchableOpacity
        className="bg-red-500 p-2 rounded-md"
        testID={`delete-${props.task.id}`}
        onPress={() => props.delete(props.task.id)}
      >
        <Text className="text-white">Delete</Text>
      </TouchableOpacity>
    </View>
  );
});

export default HomeScreen;
