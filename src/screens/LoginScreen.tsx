import { View } from "react-native";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

type Props = {};

const LoginScreen = (props: Props) => {
  const login = () => {
    console.log("Login");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-full gap-y-4 p-1">
        <Input testID="username" placeholder="Username" />
        <Input
          testID="password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button testID="login" title="Login" />
      </View>
    </View>
  );
};

export default LoginScreen;
