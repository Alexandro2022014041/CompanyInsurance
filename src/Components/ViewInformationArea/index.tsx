import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './styles';

type Props = {
    Text: string
    Value: any
    CoinSymbol: string
}

export const ViewInformationArea = (props: Props) => {
    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>{props.Text}</Text>
            <View style={Styles.symbolCoin}>
                <Text style={Styles.text}>{props.CoinSymbol}</Text>
                <View style={Styles.numberCoin}>
                    <Text style={Styles.text}>{props.Value}</Text>  
                </View>
            </View>
        </View>
    )

};
