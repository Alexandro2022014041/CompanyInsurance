import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"
import { StackTypes } from '../../Routes/Routes'
import { LinearGradient } from 'expo-linear-gradient'

export const ForgotPasswd = () =>{

    const navitation = useNavigation<StackTypes>()

    const onHandleNavigationLogin = () => navitation.navigate('Login')

    return(
        <LinearGradient style={Styles.container} colors={['#5374B6', '#B6535300']}>
            <View>
                <Text>
                    Hello World Forgot Password!
                </Text>
            </View>
            <View>
                <View>
                    <TouchableOpacity style={Styles.styleButton} onPress={onHandleNavigationLogin}/>
                </View>
            </View>
        </LinearGradient>
    )
}