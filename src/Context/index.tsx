import { useNavigation } from "@react-navigation/native"
import { useState, createContext } from "react"
import { StackTypes } from "../Routes/Routes"

export const UtilsContext = createContext({})

export const UtilsProvider = ({children}: any) =>{

    const navitation = useNavigation<StackTypes>()
    const [user, setUser] = useState<string>('')
    const [passwd, setPasswd] = useState<string>('')

    const signIn = (user: string, passwd: string) =>{
        if(user !== '' && passwd !== ''){
            setUser(user)
            setPasswd(passwd)
            navitation.navigate('PersonalData')
        }
    } 

    const forgotPasswd = () => navitation.navigate('ForgotPasswd')

    return <UtilsContext.Provider value={({user, 
                                           signIn, 
                                           forgotPasswd})}>
                {children}
           </UtilsContext.Provider>
}