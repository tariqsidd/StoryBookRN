import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';

const Button = ({
                    color='primary',
                    label,
                    onPress,
                    style,
                    textColor = '#ffffff',
                    fill = false,
                    ...rest
                }) => {
    return(
        <TouchableOpacity
            {...rest}
            onPress={onPress}
            activeOpacity={0.75}>
            <View style={[s.wrapper, { backgroundColor: colors[color] }, style]}>
                <Text style={[s.label, { color: textColor }]}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default Button;

const s = StyleSheet.create({
    wrapper: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
    },
});
