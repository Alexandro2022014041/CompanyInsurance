import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container:{
        width: 345,
        height: 48,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    text:{
        color:'#1A254E',
        fontSize: 18
    },
    symbolCoin:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 120,
        height: 50
    },
    numberCoin:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 90,
        height: 50
    }
})