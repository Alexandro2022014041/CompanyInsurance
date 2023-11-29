import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container:{
        flex: 1,
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
    BoxMainResults:{
        top: 20,
        width: 345,
        height: 260,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    BoxViewResult:{
        width: 345,
        height: 170,
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 3
    },
    mainText:{
        color: '#FFF',
        fontSize: 36
    },
    boxMiddleText:{
        width: 340,
        height: 46,
        marginTop: 100,
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
        marginTop: 90,
        gap: 10,
        width: 340,
        height: 50
    },
    boxButtonFogotPasswd:{
        marginTop: 60,
        gap: 10,
        width: 340,
        height: 28
    },
    checkBox:{
        top: 50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
    }
})

