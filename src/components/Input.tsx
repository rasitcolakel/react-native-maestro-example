import { View, Text, TextInputProps, TextInput } from "react-native";
import React from "react";

type Props = TextInputProps;

// Creates a new input component that has a border and rounded corners
const Input = (props: Props) => {
  return (
    <TextInput
      className="border-2 border-gray-300 rounded-md p-2 w-full"
      {...props}
    />
  );
};

export default Input;
