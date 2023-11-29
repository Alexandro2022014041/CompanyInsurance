import { useNavigation } from "@react-navigation/native"
import { useState, createContext, useEffect } from "react"
import { StackTypes } from "../Routes/Routes"
import { Float } from "react-native/Libraries/Types/CodegenTypes"

export const UtilsContext = createContext({})

export const UtilsProvider = ({children}: any) =>{

    const navigation                          = useNavigation<StackTypes>()
    const [user, setUser]                     = useState<string>('')
    const [passwd, setPasswd]                 = useState<string>('')
    const [age, setAge]                       = useState<number>(0)
    const [car, setCar]                       = useState<string>('')
    const [carAge, setCarAge]                 = useState<number>(0)
    const [baseUserAge, setBaseUserAge]       = useState<Float>(0)
    const [baseCarAge, setBaseCarAge]         = useState<Float>(0)
    const [totalInsurance, setTotalInsurance] = useState<Float>(0)
    const [isDiscount, setIsDiscount]         = useState<boolean>(false)  
    const [carBase, setCarBase]               = useState<Float>(0)
    const [carValue, setCarValue]             = useState<Float>(0)
    const [cpf, setCpf]                       = useState<number>(0.00)
    const [dollar, setDollar]                 = useState<number>(0)

    function signIn (user: string, passwd: string){
        if(user !== '' && passwd !== ''){
            setUser(user)
            setPasswd(passwd)
            navigation.navigate('PersonalData')
        }
    } 

    function toPageCarData (age: string, cpf: string){
        if(age !== '' && cpf !== ''){
            setAge(parseInt(age))
            setCpf(parseFloat(cpf))
            navigation.navigate('CarData')
        }
    } 

    function toPageFinalInsurance(car: string, carAge: string, carValue: string){
        if(car !== '' && carAge !== ''){
            setCar(car)
            setCarAge(parseInt(carAge))
            setCarValue(parseInt(carValue))
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

    const AgeInsuranceCalculate = (isDollar: boolean) =>{
        var calc: Float
        calc = 0
        if(age <= 22){
            calc = (carBase * 20) / 100
        }else if(age > 22 && age < 29){
            calc = (carBase * 18) / 100
        }else if(age >= 29){
            calc = (carBase * 15) / 100
        }

        if(isDollar == true){
            calc = calc / dollar
            Math.round(calc)
            console.log('base idade motorista:' + baseUserAge)            
            console.log(calc)
        }

        setBaseUserAge(calc)
        return calc
    }

    const carBaseCalculate = (isDollar: boolean) =>{
        var calc: Float
        calc = 0
        if(carValue > 100000){
            calc = 2000
        }else if(carValue >= 50000 && carValue < 100000){
            calc = 1500
        }else {
            calc = 1000
        }

        if(isDollar == true){
            calc = calc / dollar
            Math.round(calc)
            console.log('base idade carro:' + baseCarAge)
            console.log(calc)
        }

        setCarBase(calc)
        return calc
    }

    const carInsuranceCalculate = (isDollar: boolean) =>{
        var calc: Float
        calc = 0
        setIsDiscount(false)
        if(carAge <= 2000){
            calc = (carBase * 30) / 100
        }else if(carAge > 2000  && carAge < 2010){
            calc = (carBase * 15) / 100
        }else if(carAge > 2010   && carAge < 2016){
            calc = 0
        }else if(carAge >= 2016 ){
            calc = ((carBase * 10) / 100) * -1
            setIsDiscount(true)
        }

        if(isDollar == true){
            calc = calc / dollar
            Math.round(calc)
            console.log(calc)
        }

        setBaseCarAge(calc)   
        return calc
    }

    const TotalInsurance = (isDollar: boolean) => {
        var calcBase = carBaseCalculate(isDollar)
        var ageCalcInsurance = AgeInsuranceCalculate(isDollar)
        var carCalcInsurance = carInsuranceCalculate(isDollar)
        console.log(calcBase + ', ' + ageCalcInsurance + ','  + carCalcInsurance)

        setTotalInsurance(calcBase + 
                          ageCalcInsurance + 
                          carCalcInsurance)
    }

    useEffect(() => {
        fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
          .then(response => response.json())
          .then(data => {
            console.log("Taxa de câmbio obtida com sucesso:", data?.USDBRL?.bid);
            setDollar(data?.USDBRL?.bid);
          })
          .catch(error => {
            console.error("Erro ao obter a taxa de câmbio:", error);
          });
      });

    return <UtilsContext.Provider value={({user,
                                           age,
                                           car,
                                           baseUserAge,
                                           baseCarAge,
                                           totalInsurance,
                                           carBase,
                                           isDiscount,
                                           cpf,  
                                           signIn, 
                                           forgotPasswd,
                                           toPageCarData,
                                           toLogin,
                                           toPageFinalInsurance,
                                           toPersonalData,
                                           TotalInsurance})}>
                {children}
           </UtilsContext.Provider>
}