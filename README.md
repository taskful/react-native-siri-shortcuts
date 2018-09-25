# React Native Siri Shortcuts &middot;  [![npm version](https://badge.fury.io/js/react-native-siri-shortcuts.svg)](https://badge.fury.io/js/react-native-siri-shortcuts)

NSUserActivity for React Native

---

# Setup

Install module locally.

```sh
$ npm install --save react-native-siri-shortcuts
```

Link using react-native [cli](https://www.npmjs.com/package/react-native-cli).

```sh
$ react-native link react-native-siri-shortcuts
```

Declare the activity types that your app supports by including the [NSUserActivityTypes](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW28) key in its Info.plist file.


# Sample usage

```js
import RNSiriShortcuts from 'react-native-siri-shortcuts';

...

componentDidMount() {
  RNSiriShortcuts.createActivity({
    activityType: 'com.company.app.activity',
    eligibleForSearch: true,
    eligibleForPrediction: true,
    title: 'Title of Activity',
  });
}
```

---

## License

React Native is [MIT licensed](./LICENSE).

React Native documentation is [Creative Commons licensed](./LICENSE-docs).
