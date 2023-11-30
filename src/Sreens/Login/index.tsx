import { useEffect, useState } from 'react'
import { Text, View } from "react-native"
import { Styles } from "./styles"
import { LineButton, MajorButton } from '../../Components/Buttons'
import { ViewInputArea } from '../../Components/viewInputArea'
import { LinearGradient } from 'expo-linear-gradient'
import { UseUtilsContext } from '../../hooks'

export const Login = () =>{

    const {signIn,
           forgotPasswd,
           setPasswd, setUser, passwd, user,
           clearConstants}: any = UseUtilsContext() 


    const handleForgotPasswd = () => forgotPasswd()

    useEffect(() => {
        clearConstants()
    }, [])

    return(
        <LinearGradient style={Styles.container} colors={['#5374B6', '#f4b4b4']}> 
            <View style={Styles.boxMainText}>
                <Text style={Styles.mainText}> SIMULACAR </Text>
            </View>
            <View>
                <View style={Styles.boxInputs}>
                    <View>
                        <ViewInputArea SecureText={false} 
                                    TextPlaceHolder='Usuario'
                                    Value={user}
                                    onChange={(e) => setUser(e)}/>
                    </View>
                    <View>     
                        <ViewInputArea SecureText={true} 
                                    TextPlaceHolder='Senha'
                                    Value={passwd}
                                    onChange={(e) => setPasswd(e)}/>          
                    </View>
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonLogin}>
                    <MajorButton 
                        TextButton='Logar' 
                        onEvent={() => signIn()}
                    />                     
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonFogotPasswd}>
                    <LineButton
                        TextButton='Esqueci minha senha' 
                        onEvent={handleForgotPasswd}
                    /> 
                </View>
            </View>
        </LinearGradient>
    )
}