import { useNavigation } from '@react-navigation/native'
import { Text, View } from "react-native"
import { Styles } from "./styles"
import { StackTypes } from '../../Routes/Routes'
import { LinearGradient } from 'expo-linear-gradient'
import { ViewInputArea, ViewFormatInputArea } from '../../Components/viewInputArea'
import { LineButton, MajorButton } from '../../Components/Buttons'
import { useState } from 'react'
import { UseUtilsContext } from '../../hooks'

export const CarData = () =>{
    const {user, car, setCar, carAge, setCarAge, carValue, setCarValue,  toPageFinalInsurance, toPersonalData}: any = UseUtilsContext()

   
    const [carLicensePlate, setCarLicensePlate] = useState<string>('') 



    const handlePersonalData   = () => toPersonalData()

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
                        <Text style={Styles.textAge}>Qual é o seu carro?</Text>
                    </View>                    
                    <View>
                        <ViewInputArea TextPlaceHolder='Carro'
                                       SecureText={false}
                                 
                                       onChange={(e) => setCar(e)}/>
                    </View>
                    <View>
                        <Text style={Styles.textAge}>Qual O ano do seu carro?</Text>
                    </View>
                    <View>     
                        <ViewInputArea TextPlaceHolder='Ano'
                                       SecureText={false} 
                                       BoardType='numeric'
                               
                                       onChange={(e) => setCarAge(e)}/>          
                    </View>
                    <View>
                        <Text style={Styles.textAge}>Qual O valor do seu carro?</Text>
                    </View>
                    <View>     
                        <ViewFormatInputArea 
                            MaskTypeInput='money'
                            MaskOptionsInput={{
                                mask: '0.00'
                            }}
                            TextPlaceHolder='R$ '
                         
                            onChange={(e) => setCarValue(e)}
                        />
                    </View>
                    <View>
                        <Text style={Styles.textAge}>Qual a placa do seu carro?</Text>
                    </View>
                    <View>     
                        <ViewFormatInputArea 
                            MaskTypeInput='custom'
                            MaskOptionsInput={{
                                mask: 'AAA-9999',
                                translation:{
                                    A: value => value.toUpperCase()
                                }
                            }}
                            TextPlaceHolder='Placa'
                            Value={carLicensePlate}
                            onChange={(e) => setCarLicensePlate(e)}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonLogin}>
                    <MajorButton 
                        TextButton='Próximo' 
                        onEvent={toPageFinalInsurance}
                    />                     
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonFogotPasswd}>
                    <LineButton
                        TextButton='Voltar' 
                        onEvent={handlePersonalData}
                    /> 
                </View>
            </View>
        </LinearGradient>
    )
}