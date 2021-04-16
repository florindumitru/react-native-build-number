# react-native-build-number
A simple way to automatically increase a build number (version) for React Native !


## Install
`npm i react-native-build-number`

or

`yarn add react-native-build-number`

## Setup
In your app.json file add (below displayName):

`"build": 1,`

In your app.json file, in scripts change "start" with:

`"start": "react-native-build-number && react-native start",`

## Read build number
```javascript
import appJson from './your-th/app.json';
console.log(appJson.build)
```

Every time you run "npm start" the build number will increase !
