<h1> About </h1>

This project is a simple example of how to use the [Maestro](https://maestro.mobile.dev/) to test your mobile application.

<h1> Getting Started </h1>

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)


## Installing the Maestro

To install the Maestro, run the following command:

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```
<h3><b>Running the tests</b></h3>

Before running the tests, you need to install the dependencies for iOS:

```bash
brew tap facebook/fb
brew install facebook/fb/idb-companion
```

To run the tests, run the following command:

```bash
maestro test your-flow.yaml
```

<h2> Creating a flow </h2>

To create a flow, you need to create a YAML file with the following structure:

```yaml
appId: com.example.app
---
- openLink: exp://127.0.0.1:19000
```

The first line is the application identifier, and the second line is the URL to open the application becuse the app is running on the Expo.

<h2> Tapping on an element </h2>

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


<h2> Input Text </h2>

To input text, you need to use the following syntax:

```yaml
- inputText: "maestro"
```

<h2> Login Flow </h2>

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

<h2> Running the Login Test on iOS </h2>

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

<h2> Running the Login Test on Android </h2>

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