# About

This project is a simple example of how to use the [Maestro](https://maestro.mobile.dev/) to test your mobile application.

# Getting Started

There are some prerequisites that you need to install before running the Maestro.
## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)


## Installing the Maestro

To install the Maestro, run the following command:

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```
### **Running the tests**

Before running the tests, you need to install the dependencies for iOS:

```bash
brew tap facebook/fb
brew install facebook/fb/idb-companion
```

To run the tests, run the following command:

```bash
maestro test your-flow.yaml
```

## Creating a flow 

To create a flow, you need to create a YAML file with the following structure:

```yaml
appId: com.example.app
---
- openLink: exp://127.0.0.1:19000
```

The first line is the application identifier, and the second line is the URL to open the application becuse the app is running on the Expo.

## Tapping on an element

There are two ways to tap on an element:

- With the element's text

```yaml
- tapOn: login
```

- With the element's accessibility identifier

```yaml
- tapOn:
    id: "login"
```

**Notes:**

- Please check the [testID on React Native documentation](https://reactnative.dev/docs/view#testid) to know how to add an accessibility identifier to your element.

- For more information about TapOn, you can check the [Maestro documentation](https://maestro.mobile.dev/reference/tap-on-view).


## Input Text

To input text, you need to use the following syntax:

```yaml
- inputText: "maestro"
```

## Login Flow

To run the login flow, run the following command:

```bash
maestro test flows/login.yaml
```
### React Native Code:

```ts
const LoginScreen = (props: Props) => {
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
```

### Login Yaml:

```yaml
appId: com.example.app
---
- openLink: exp://127.0.0.1:19000
- tapOn:
    id: "username"
- inputText: "maestro"
- tapOn:
    id: "password"
- inputText: "12345678"
- tapOn:
    id: "login"
```

## Running the Login Test on iOS

```bash
Running on iPhone 11 - iOS 16.0 - 2DBFC5E7-FAE6-4B2A-BD9B-D9D7EDF22C7B      
                                                                            
 ║                                                                          
 ║  > Flow                                                                  
 ║                                                                          
 ║    ✅  Open exp://127.0.0.1:19000                                        
 ║    ✅  Tap on id: username                                               
 ║    ✅  Input text maestro                                                
 ║    ✅  Tap on id: password                                               
 ║    ✅  Input text 12345678                                               
 ║    ✅  Tap on id: login                                                  
```

## Running the Login Test on Android 

```bash
Running on emulator-5554                
                                        
 ║                                      
 ║  > Flow                              
 ║                                      
 ║    ✅  Open exp://127.0.0.1:19000    
 ║    ✅  Tap on id: username           
 ║    ✅  Input text maestro            
 ║    ✅  Tap on id: password           
 ║    ✅  Input text 12345678           
 ║    ✅  Tap on id: login              
```

## Run a nested flow

To run a nested flow, you need to use the following syntax:

```yaml
- runFlow: newTask.yaml # <-- Run commands from "Login.yaml"
```

## Run a Nested Flow with condition

To run a nested flow with condition, you need to use the following syntax:

```yaml
- runFlow:
    when:
      visible:
        text: "Login"
        index: 1
    file: login.yaml
```
The above example will run the login flow if the text "Login" is visible on the screen.

## Repeat a flow

To repeat a flow, you need to use the following syntax:

```yaml
- repeat:
    times: 3
    commands:
      - runFlow: deleteTask.yaml
```

The above example will run the delete task flow three times.

## Example Videos:

- This video presents the main flow which logs in to the app, creates three tasks, and then deletes them.

### Android
https://user-images.githubusercontent.com/53280610/215272118-a0c9d55e-c948-48a6-af41-ddd966b5985a.mov

### iOS
https://user-images.githubusercontent.com/53280610/215272186-b53cdbec-eb30-4c80-96e3-6a9237566bc5.mov



- Second video presents the main flow which skips the login flow and then creates three tasks, and then deletes them.
### Android
https://user-images.githubusercontent.com/53280610/215272260-eb2856aa-44b7-4249-87c1-35c3a5614102.mov

### iOS
https://user-images.githubusercontent.com/53280610/215272266-8cf2eb79-bcfb-45a6-8ff5-6f23076b0250.mov


## Conclusion

In this article, we learned how to create a flow to test a React Native application using Maestro. We also learned how to run the tests on iOS and Android. We also learned how to run a nested flow and how to repeat a flow.

## Thanks

Thanks for reading this article. If you have any questions, please feel free to reach out to me on Twitter [@rasitcolakel](https://twitter.com/rasitcolakel) or on [GitHub](https://github.com/rasitcolakel).

## Resources

- [Maestro Documentation](https://maestro.mobile.dev/)