import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { object, text, color, select } from '@storybook/addon-knobs';
import Button from '../components/Button';
import {BufferView} from './decorators';
const colors = {
    primary:'primary',
    border:'border',
    white:'white',
    gray:'gray',
    error:'error',
    success:'success',
    transparent:'transparent'
};
storiesOf('Button', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <Button
            onPress={action('onPress')}
            label={text('label', 'Button label')}
            style={object('style')}
            textColor={color('textColor', '#ffffff')}
            color={select('color', colors)}
        />
    ));
