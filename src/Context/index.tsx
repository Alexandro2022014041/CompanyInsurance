import { useNavigation } from "@react-navigation/native"
import { useState, createContext, useEffect } from "react"
import { StackTypes } from "../Routes/Routes"
import { Float } from "react-native/Libraries/Types/CodegenTypes"

export const UtilsContext = createContext({})

export const UtilsProvider = ({children}: any) =>{

    const navigation                          = useNavigation<StackTypes>()
    const [user, setUser]                     = useState<string>('Alex')
    const [passwd, setPasswd]                 = useState<string>('123456')
    const [age, setAge]                       = useState<number>(0)
    const [car, setCar]                       = useState<string>('323232')
    const [carAge, setCarAge]                 = useState<number>(0)
    const [baseUserAge, setBaseUserAge]       = useState<Float>(0)
    const [baseCarAge, setBaseCarAge]         = useState<Float>(0)
    const [totalInsurance, setTotalInsurance] = useState<Float>(0)
    const [isDiscount, setIsDiscount]         = useState<boolean>(false)  
    const [carBase, setCarBase]               = useState<Float>(0)
    const [carValue, setCarValue]             = useState<Float>(0)
    const [cpf, setCpf]                       = useState<number>(99999999999)
    const [dollar, setDollar]                 = useState<number>(0)

    function signIn (){
        if(user !== '' && passwd !== ''){
            navigation.navigate('PersonalData')
        }
    } 

    function toPageCarData (){
        if(age !== 0 && cpf !== 0){
            navigation.navigate('CarData')
        }
    } 

    function toPageFinalInsurance(){
        if(car !== '' && carAge !== 0 && carValue !== 0){
            TotalInsurance(false)
            navigation.navigate('FinalInsurance')
        }
    }

    function toLogin (){
        navigation.navigate('Login')
    }

    function forgotPasswd () {
        navigation.navigate('ForgotPasswd')
    }

    function toPersonalData () {
        navigation.navigate('PersonalData')
    }

    const AgeInsuranceCalculate = (isDollar: boolean, base: number) =>{
        let calc: Float = 0
        let auxCalc: Float = 0

        if(age <= 22){
            calc = (base * 20) / 100
        }else if(age > 22 && age < 29){
            calc = (base * 18) / 100
        }else if(age >= 29){
            calc = (base * 15) / 100
        }
        
        auxCalc = calc
        calc = 0

        if(isDollar){
            calc = auxCalc / dollar
        }
        calc = auxCalc
        setBaseUserAge(calc)
        return calc
    }

    const carBaseCalculate = (isDollar: boolean) =>{
        let calc: Float = 0
        let auxCalc = parseFloat(carValue.toString().replace('R$', '').replace('.', ''))
        if(auxCalc > 100000){
            calc = 2000
        }else if(auxCalc >= 50000 && auxCalc < 100000){
            calc = 1500
        }else {
            calc = 1000
        }

        if(isDollar){
            calc = calc / dollar
        }

        setCarBase(calc)
        return calc
    }

    const carInsuranceCalculate = (isDollar: boolean ,  base: number) =>{
        let calc: Float = 0
        let auxCalc: Float = 0
   
        setIsDiscount(false)
        if(carAge <= 2000){
            calc = (base * 30) / 100
        }else if(carAge > 2000  && carAge < 2010){
            calc = (base * 15) / 100
        }else if(carAge > 2010   && carAge < 2016){
            calc = 0
        }else if(carAge >= 2016 ){
            calc = ((base * 10) / 100) * -1
            setIsDiscount(true)
        }
        auxCalc = calc
        calc = 0
        if(isDollar == true){
            calc = auxCalc / dollar
           
        }
        calc = auxCalc
        setBaseCarAge(calc)   
        return calc
    }

    const TotalInsurance = async (isDollar: boolean) => {
        var calcBase = await carBaseCalculate(isDollar)
        var ageCalcInsurance = await AgeInsuranceCalculate(isDollar, calcBase)
        var carCalcInsurance =  await carInsuranceCalculate(isDollar, calcBase)

        setTotalInsurance(calcBase + 
                          ageCalcInsurance + 
                          carCalcInsurance)
    }

    const clearConstants = () =>{
        setUser('')         
        setPasswd('')                 
        setCar('')          
        setAge(0) 
        setCarAge(0)        
        setBaseUserAge(0)   
        setBaseCarAge(0)    
        setTotalInsurance(0)
        setIsDiscount(false)
        setCarBase(0)       
        setCarValue(0)      
        setCpf(0)           
        setDollar(0)        
    }

    useEffect(() => {
        fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
          .then(response => response.json())
          .then(data => {
            setDollar(data?.USDBRL?.bid);
          })
          .catch(error => {
            console.error("Erro ao obter a taxa de câmbio:", error);
          })
      }, [])

    return <UtilsContext.Provider value={({user,
                                           age,
                                           car,
                                           baseUserAge,
                                           baseCarAge,
                                           totalInsurance,
                                           carBase,
                                           carAge,
                                           isDiscount,
                                           cpf,  
                                           setPasswd,
                                           setUser,
                                           signIn, 
                                           setAge,
                                           setCpf,
                                           setCar, setCarAge, setCarValue,
                                           forgotPasswd,
                                           toPageCarData,
                                           toLogin,
                                           toPageFinalInsurance,
                                           toPersonalData,
                                           TotalInsurance,
                                           clearConstants})}>
                {children}
           </UtilsContext.Provider>
}