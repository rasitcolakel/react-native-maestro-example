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