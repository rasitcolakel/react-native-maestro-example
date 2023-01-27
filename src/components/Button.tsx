import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import React from "react";

type Props = TouchableOpacityProps & {
  title: string;
};

// This component takes a title prop and shows it as the text of the button.
// If no title prop is provided, it renders its children.
const Button = (props: Props) => {
  return (
    <TouchableOpacity className="bg-blue-500 p-2 rounded-md w-full" {...props}>
      {props?.title ? (
        <Text className="text-white text-center">{props.title}</Text>
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

export default Button;
