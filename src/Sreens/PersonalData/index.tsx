import { Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"
import { UseUtilsContext } from '../../hooks'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ViewFormatInputArea, ViewInputArea } from '../../Components/viewInputArea'
import { LineButton, MajorButton } from '../../Components/Buttons'

export const PersonalData = () =>{

    const {user, toPageCarData, toLogin}: any = UseUtilsContext()
    const [age, setAge] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')

    const SetAge = (value: string) => setAge(value)
    const SetCpf = (value: string) => setCpf(value)

    const handleCarData = () => toPageCarData(age, cpf)
    const handleLogin = () => toLogin()

    return(
        <LinearGradient style={Styles.container} colors={['#5374B6', '#B6535300']}> 
            <View style={Styles.boxMainText}>
                <Text style={Styles.mainText}> SIMULACAR </Text>
            </View>
            <View style={Styles.boxMiddleText}>
                <Text style={Styles.middleText}> Olá {user}, vamos realizar uma simulação para um seguro. </Text>
            </View>
            <View>
                <View style={Styles.boxInputs}>
                    <View>
                        <Text style={Styles.textAge}>Qual sua Idade?</Text>
                    </View>
                    <View>
                        <ViewInputArea TextPlaceHolder='Idade'
                                       SecureText={false}
                                       BoardType='numeric'
                                       Value={age}
                                       onChange={(e) => SetAge(e)}/>
                    </View>
                    <View>
                        <Text style={Styles.textAge}>Qual o seu CPF?</Text>
                    </View>
                    <View>
                        <ViewFormatInputArea TextPlaceHolder='CPF'
                                             MaskTypeInput='cpf'                                
                                             Value={cpf}
                                             onChange={(e) => SetCpf(e)}/>
                    </View>
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonLogin}>
                    <MajorButton 
                        TextButton='Próximo' 
                        onEvent={handleCarData}
                    />                     
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonFogotPasswd}>
                    <LineButton
                        TextButton='Voltar' 
                        onEvent={handleLogin}
                    /> 
                </View>
            </View>
        </LinearGradient>
    )
}