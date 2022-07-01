/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import listasync from './components/asynclist';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => listasync);
