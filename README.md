##Requirements

1. You need to have Node.js and npm (Node Package Manager) installed on your development machine. You can download them from https://nodejs.org/.
2. I have used Expo for development, So Expo is Recommended.
  ```sh
  npm i expo
  ```
3. You should have Git installed on your machine. You can download Git from https://git-scm.com/.

## Installation

Clone the repo

```sh
git clone https://github.com/Rishi-Sudhakar/reactnativetest.git
```
This will clone the repo to the default directory of the Terminal.

Now do,
```
cd reactnativetest
```
This will locate the project directory.

I haven't included the node_modules package along with the repo, So they have to be installed manually.

```
npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens
```
Now as the Modules are added, you can start running the program,

```sh
npm start
```
This will automatically start with expo, and you will be provided with options on the screen.

You can just use expo go app (android), or camera app in ios.

If you want the program to run locally in the machine (Android/iOS Virtual Machine), you can click a (For android), It will automatically open the Android VM in Android studio, or i for iOS which will open iPhone simulator in Xcode (This, However would require a Macintosh device)

For testing, you have to first install test modules

```sh
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
```

As you can see I have used Jest for testing.

Now, You can run 
```sh
npm test
```
for testing purposes.
(I have made LoginScreen.test.js for testing, so it will be tested)
