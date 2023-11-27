import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"
import { StackTypes } from '../../Routes/Routes'
import { LinearGradient } from 'expo-linear-gradient'
import { ViewInputArea } from '../../Components/viewInputArea'
import { LineButton, MajorButton } from '../../Components/Buttons'
import { useState } from 'react'
import { UseUtilsContext } from '../../hooks'

export const CarData = () =>{
    const navitation = useNavigation<StackTypes>()
    const {user, toPageCarData, toLogin}: any = UseUtilsContext()
    const [age, setAge] = useState<string>('')

    const SetAge = (value: string) => setAge(value)

    const handleCarData = () => toPageCarData(age)
    const handleLogin = () => toLogin

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
                        <Text style={Styles.textAge}>Qual Sua Idade?</Text>
                    </View>
                    <View>
                        <ViewInputArea TextPlaceHolder='Idade'
                                       SecureText={false}
                                       Value={age}
                                       onChange={(e) => SetAge(e)}/>
                    </View>
                    <View>     
                        {/* <ViewInputArea SecureText={true} 
                                    TextPlaceHolder='Senha'
                                    Value={passwd}
                                    onChange={}/>           */}
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