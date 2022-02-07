/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

let RegisteredApp = App;
RegisteredApp = __DEV__ ? require('./storybook').default : App;

AppRegistry.registerComponent(appName, () => RegisteredApp);
