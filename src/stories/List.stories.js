import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { object, text, color, boolean, select } from '@storybook/addon-knobs';
import Button from '../components/Button';
import {BufferView} from './decorators';
import List from '../components/List';
const colors = {
    primary:'primary',
    border:'border',
    white:'white',
    gray:'gray',
    error:'error',
    success:'success',
    transparent:'transparent'
};
storiesOf('List', module)
    .addDecorator(BufferView)
    .add('default', () => (
        <List/>
    ));
