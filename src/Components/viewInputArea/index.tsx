import { KeyboardTypeOptions, TextInput } from "react-native"
import { Styles } from "./styles"
import { TextInputMask, TextInputMaskTypeProp, TextInputMaskOptionProp} from "react-native-masked-text"


type PropsInputArea = {
    SecureText?: boolean
    TextPlaceHolder?: string
    Value?: string
    BoardType?: KeyboardTypeOptions | undefined
    onChange?: (value: any) => void
}

export const ViewInputArea: React.FC<PropsInputArea> = (props: PropsInputArea) =>{
    return <TextInput style={Styles.container}
                      value={props.Value}  
                      keyboardType={props.BoardType}
                      secureTextEntry={props.SecureText}
                      placeholder={props.TextPlaceHolder}
                      onChangeText={props.onChange}
            />
}

type PropsMaskInputArea = {
    TextPlaceHolder?: string
    Value?: string
    onChange?: (value: any) => void
    MaskTypeInput: TextInputMaskTypeProp
    MaskOptionsInput?: TextInputMaskOptionProp
}

export const ViewFormatInputArea: React.FC<PropsMaskInputArea> = (props: PropsMaskInputArea) => {
    return <TextInputMask style={Styles.container}
                          placeholder={props.TextPlaceHolder}
                          type={props.MaskTypeInput}
                          options={props.MaskOptionsInput}
                          value={props.Value}  
                          onChangeText={props.onChange}
            />
}