import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"
import { StackTypes } from '../../Routes/Routes'
import { UseUtilsContext } from '../../hooks'

export const PersonalData = () =>{

    
    const navitation = useNavigation<StackTypes>()
    const {user}: any = UseUtilsContext()

    const onHandleNavigationCarData = () => navitation.navigate('CarData')

    return(
        <View style={Styles.container}>
            <View>
                <Text>   
                    Hello World Personal Data!
                </Text>
            </View>
            <View>
                <View>
                    <TouchableOpacity style={Styles.styleButton} onPress={onHandleNavigationCarData}/>
                    <Text>
                        {user}
                    </Text>
                </View>
            </View>
        </View>
    )
}