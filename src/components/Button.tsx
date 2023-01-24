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
