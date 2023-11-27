import { TextInput } from "react-native"
import { Styles } from "./styles"




type Props = {
    SecureText: boolean
    TextPlaceHolder: string
    Value: any
    onChange: (value: any) => void
}

export const ViewInputArea = (props: Props) =>{
    return <TextInput style={Styles.container}
                      value={props.Value}  
                      secureTextEntry={props.SecureText}
                      placeholder={props.TextPlaceHolder}
                      onChangeText={props.onChange}/>
}