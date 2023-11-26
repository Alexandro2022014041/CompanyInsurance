import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles } from './styles';

type Props = {
    TextButton: string
    onEvent: () => void
}

export const MajorButton: React.FC<Props> = (props: Props) => {
    return (
        <TouchableOpacity style={Styles.styleGreenButton} onPress={props.onEvent}>
            <Text style={Styles.styleTextGreenButton}>{props.TextButton}</Text>
        </TouchableOpacity>
    )            
}


export const LineButton: React.FC<Props> = (props: Props) => {
    return(
        <TouchableOpacity style={Styles.styleBlueButton} onPress={props.onEvent}>
            <Text style={Styles.styleTextBlueButton}>{props.TextButton}</Text>
        </TouchableOpacity>
    )
}