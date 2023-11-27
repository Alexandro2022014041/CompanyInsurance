import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 60,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    boxMainText:{
        marginTop: 60,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    mainText:{
        color: '#FFF',
        fontSize: 36
    },
    boxMiddleText:{
        width: 340,
        height: 46,
        marginTop: 150,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    middleText:{
        color: '#FFF',
        fontSize: 18
    },
    boxInputs:{
        marginTop: 50,
        height: 130,
        width: 353,
        justifyContent: "center"
    },
    textAge:{
        color: '#FFFFFF',
        fontSize: 15
    },
    styleButton:{
        width:250,
        height:60,
        borderRadius: 5
    },
    boxButtonLogin:{
        marginTop: 50,
        gap: 10,
        width: 340,
        height: 50
    },
    boxButtonFogotPasswd:{
        marginTop: 100,
        gap: 10,

        width: 340,
        height: 28
    }
})