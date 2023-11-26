import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"
import { StackTypes } from '../../Routes/Routes'

export const FinalInsurance = () =>{

    const navitation = useNavigation<StackTypes>()

    const onHandleNavigationLogin = () => navitation.navigate('Login')

    return(
        <View style={Styles.container}>
            <View>
                <Text>
                    Hello World Final Insurance!
                </Text>
            </View>
            <View>
                <View>
                    <TouchableOpacity style={Styles.styleButton} onPress={onHandleNavigationLogin}/>
                </View>
            </View>
        </View>
    )
}