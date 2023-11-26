import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './Routes';
import { UtilsProvider } from '../Context'

export const UseRoutes = () =>{
    return(
        <NavigationContainer>
            <UtilsProvider>
                <Routes/>               
            </UtilsProvider>
        </NavigationContainer>
    )
}