import { useNavigation } from "@react-navigation/native"
import { useState, createContext } from "react"
import { StackTypes } from "../Routes/Routes"

export const UtilsContext = createContext({})

export const UtilsProvider = ({children}: any) =>{

    const navitation = useNavigation<StackTypes>()
    const [user, setUser] = useState<string>('')
    const [passwd, setPasswd] = useState<string>('')
    const [age, setAge] = useState<number>(0)

    function signIn (user: string, passwd: string){
        if(user !== '' && passwd !== ''){
            setUser(user)
            setPasswd(passwd)
            navitation.navigate('PersonalData')
        }
    } 

    function toPageCarData (age: number){
        if(age !== 0){
            setAge(age)
            navitation.navigate('CarData')
        }
    } 

    function toPageFinalInsurance(){
        navitation.navigate('FinalInsurance')
    }

    function toLogin (){
        navitation.navigate('Login')
    }

    function forgotPasswd () {
        navitation.navigate('ForgotPasswd')
    }

    return <UtilsContext.Provider value={({user,
                                           age,  
                                           signIn, 
                                           forgotPasswd,
                                           toPageCarData,
                                           toLogin,
                                           toPageFinalInsurance})}>
                {children}
           </UtilsContext.Provider>
}