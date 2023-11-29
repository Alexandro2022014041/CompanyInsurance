import { useState } from 'react'
import { Text, View } from "react-native"
import { Styles } from "./styles"
import { LineButton, MajorButton } from '../../Components/Buttons'
import { ViewInputArea } from '../../Components/viewInputArea'
import { LinearGradient } from 'expo-linear-gradient'
import { UseUtilsContext } from '../../hooks'

export const Login = ({navigation, routes}: any) =>{

    const {signIn,
           forgotPasswd}: any = UseUtilsContext() 

    const [user, setUser] = useState<string>('')
    const [passwd, setPasswd] = useState<string>('')

    const SetUser = (value: string) => setUser(value)
    const SetPasswd = (value: string) => setPasswd(value)

    const handleLogin = () => signIn(user, passwd)
    const handleForgotPasswd = () => forgotPasswd()

    return(
        <LinearGradient style={Styles.container} colors={['#5374B6', '#B6535300']}> 
            <View style={Styles.boxMainText}>
                <Text style={Styles.mainText}> SIMULACAR </Text>
            </View>
            <View>
                <View style={Styles.boxInputs}>
                    <View>
                        <ViewInputArea SecureText={false} 
                                    TextPlaceHolder='Usuario'
                                    Value={user}
                                    onChange={(e) => SetUser(e)}/>
                    </View>
                    <View>     
                        <ViewInputArea SecureText={true} 
                                    TextPlaceHolder='Senha'
                                    Value={passwd}
                                    onChange={(e) => SetPasswd(e)}/>          
                    </View>
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonLogin}>
                    <MajorButton 
                        TextButton='Logar' 
                        onEvent={handleLogin}
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