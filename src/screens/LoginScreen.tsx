import { View } from "react-native";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = (props: Props) => {
  const login = () => {
    console.log("Login clicked");
    props.navigation.push("Home");
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
        <Button testID="loginButton" title="Login" onPress={login} />
      </View>
    </View>
  );
};

export default LoginScreen;
