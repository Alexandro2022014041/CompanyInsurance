import { Text, View } from "react-native"
import { Styles } from "./styles"
import { UseUtilsContext } from '../../hooks'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ViewFormatInputArea, ViewInputArea } from '../../Components/viewInputArea'
import { LineButton, MajorButton } from '../../Components/Buttons'

export const PersonalData = () =>{

    const {user, age, cpf, setAge, setCpf, toPageCarData, toLogin}: any = UseUtilsContext()


    return(
        <LinearGradient style={Styles.container} colors={['#5374B6', '#f4b4b4']}> 
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
                                  
                                       onChange={(e) => setAge(e)}/>
                    </View>
                    <View>
                        <Text style={Styles.textAge}>Qual o seu CPF?</Text>
                    </View>
                    <View>
                        <ViewFormatInputArea TextPlaceHolder='CPF'
                                             MaskTypeInput='cpf'                                
                                             
                                             onChange={(e) => setCpf(e)}/>
                    </View>
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonLogin}>
                    <MajorButton 
                        TextButton='Próximo' 
                        onEvent={toPageCarData}
                    />                     
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonFogotPasswd}>
                    <LineButton
                        TextButton='Voltar' 
                        onEvent={toLogin}
                    /> 
                </View>
            </View>
        </LinearGradient>
    )
}