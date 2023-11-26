import React from 'react';
import { TextInput } from 'react-native';
import { Styles } from './styles';

type Props = {
    Inform: string
    SecureText: boolean
    setInform: any
}

export const ViewInformationArea = (props: Props) => {
    return <TextInput 
                style={Styles.container} 
                placeholder={props.Inform}
                secureTextEntry={props.SecureText}
                onChange={props.setInform}>
           </TextInput>

};
