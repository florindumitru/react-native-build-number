# react-native-build-number
A simple way to automatically increase a build number (version) for React Native !


## Install
`npm install react-native-build-number`

or

`yarn add react-native-build-numbe `

## Setup
In your package.json file add (below version):

`"build": 1,`

In your package.json file, in scripts change "start" with:

`"start": "react-native-build-number && react-native start",`

##Read build number
```javascript
import packageJson from './your-path/package.json';
console.log(packageJson.build)
```

Every time you run npm start the build number will increase !
