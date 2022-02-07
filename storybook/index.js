import { AppRegistry } from 'react-native';
import { loadStories } from './storyLoader';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  // require('../src/stories/Button.stories');
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
