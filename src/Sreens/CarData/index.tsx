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
    const {user, toPageFinalInsurance, toPersonalData}: any = UseUtilsContext()

    const [car, setCar]                         = useState<string>('')
    const [carYear, setCarYear]                 = useState<string>('')
    const [carValue, setCarValue]               = useState<string>('')
    const [carLicensePlate, setCarLicensePlate] = useState<string>('') 

    const SetCar             = (value: string) => setCar(value)  
    const SetCarYear         = (value: string) => setCarYear(value)
    const SetCarValue        = (value: string) => setCarValue(value)
    const SetCarLicensePlate = (value: string) => setCarLicensePlate(value)

    const handleFinalInsurance = () => toPageFinalInsurance(car, carYear, carValue, carLicensePlate)
    const handlePersonalData   = () => toPersonalData()

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
                        <Text style={Styles.textAge}>Qual é o seu carro?</Text>
                    </View>                    
                    <View>
                        <ViewInputArea TextPlaceHolder='Carro'
                                       SecureText={false}
                                       Value={car}
                                       onChange={(e) => SetCar(e)}/>
                    </View>
                    <View>
                        <Text style={Styles.textAge}>Qual O ano do seu carro?</Text>
                    </View>
                    <View>     
                        <ViewInputArea TextPlaceHolder='Ano'
                                       SecureText={false} 
                                       BoardType='numeric'
                                       Value={carYear}
                                       onChange={(e) => SetCarYear(e)}/>          
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
                            Value={carValue}
                            onChange={(e) => SetCarValue(e)}
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
                            onChange={(e) => SetCarLicensePlate(e)}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonLogin}>
                    <MajorButton 
                        TextButton='Próximo' 
                        onEvent={handleFinalInsurance}
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