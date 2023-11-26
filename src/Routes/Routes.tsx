import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Login } from "../Sreens/Login"
import { PersonalData } from "../Sreens/PersonalData"
import { CarData } from "../Sreens/CarData"
import { FinalInsurance } from "../Sreens/FinalInsurance"
import { ForgotPasswd } from "../Sreens/ForgotPasswd"

const { Navigator, Screen } = createNativeStackNavigator()

type StackNavigation = {
    Login : undefined
    PersonalData : undefined
    CarData : undefined
    FinalInsurance : undefined
    ForgotPasswd : undefined 
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export const Routes = () =>{
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="PersonalData" component={PersonalData}/>
            <Screen name="CarData" component={CarData}/>
            <Screen name="FinalInsurance" component={FinalInsurance}/>
            <Screen name="ForgotPasswd" component={ForgotPasswd}/>
        </Navigator>
    )
}