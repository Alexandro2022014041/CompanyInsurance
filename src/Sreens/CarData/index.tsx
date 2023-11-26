import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"
import { StackTypes } from '../../Routes/Routes'

export const CarData = () =>{

    const navitation = useNavigation<StackTypes>()

    const onHandleNavigationFinalInsurance = () => navitation.navigate('FinalInsurance')

    return(
        <View style={Styles.container}>
            <View>
                <Text>
                    Hello World Car Data!
                </Text>
            </View>
            <View>
                <View>
                    <TouchableOpacity style={Styles.styleButton} onPress={onHandleNavigationFinalInsurance}/>
                </View>
            </View>
        </View>
    )
}