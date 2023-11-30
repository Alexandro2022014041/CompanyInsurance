import { Text, View } from "react-native"
import { Styles } from "./styles"
import { LinearGradient } from 'expo-linear-gradient'
import { UseUtilsContext } from '../../hooks'
import { ViewInformationArea } from "../../Components/ViewInformationArea"
import { LineButton, MajorButton } from "../../Components/Buttons"
import { useEffect, useState } from "react"
import { CheckBox } from "../../Components/Checkbox"

export const FinalInsurance = () =>{

    const {user, 
           car, 
           toLogin, 
           toPageCarData, 
           totalInsurance, 
           baseUserAge, 
           baseCarAge, 
           isDiscount,
           carBase,
           TotalInsurance
        }: any = UseUtilsContext()

    const [discount, setDiscount]     = useState<string>('')
    const [coinSymbol, setCoinSymbol] = useState<string>('R$')

    const handleLogin = () => toLogin()
    const handlePageCarData = () => toPageCarData()

    const handleCheckBox = (value: boolean) => {
        TotalInsurance(value)
        setCoinSymbol('R$')
        if(value){
            setCoinSymbol('$')
        }
    }

    useEffect(() =>{
        if (isDiscount == true){
            setDiscount('DESCONTO: ')
            setCoinSymbol('$')
        }
    },[])


    return(
        <LinearGradient style={Styles.container} colors={['#5374B6', '#f4b4b4']}>
            <View style={Styles.boxMainText}>
                <Text style={Styles.mainText}> SIMULACAR </Text>
            </View>
            <View style={Styles.boxMiddleText}>
                <Text style={Styles.middleText}> Olá {user},  fizemos um orçamento para seu veiculo {car}.. </Text>
            </View>
            <View style={Styles.BoxMainResults}>
                <View style={Styles.BoxViewResult}>
                    <ViewInformationArea Text="Base" CoinSymbol={coinSymbol} Value={carBase.toFixed(2)}/>
                    <ViewInformationArea Text="Por Idade" CoinSymbol={coinSymbol} Value={baseUserAge.toFixed(2)}/>
                    <ViewInformationArea Text="Por ano" CoinSymbol={coinSymbol} Value={discount + baseCarAge.toFixed(2)}/>
                </View>                 
                <View>
                    <ViewInformationArea Text="Total" CoinSymbol={coinSymbol} Value={totalInsurance.toFixed(2)}/>
                </View>
            </View>
            <View style={Styles.checkBox}>
                <CheckBox 
                    onChange={async (e) => handleCheckBox(e)}
                />
            </View>
            <View>
                <View style={Styles.boxButtonLogin}>
                    <MajorButton
                        TextButton='Próximo' 
                        onEvent={handleLogin}
                    />                     
                </View>
            </View>
            <View>
                <View style={Styles.boxButtonFogotPasswd}>
                    <LineButton
                        TextButton='Voltar' 
                        onEvent={handlePageCarData}
                    /> 
                </View>
            </View>
        </LinearGradient>
    )
}