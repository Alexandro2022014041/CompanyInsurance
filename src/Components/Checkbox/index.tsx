import BouncyCheckbox  from "react-native-bouncy-checkbox"

type Props = {
    onChange: (value: boolean) => {}
}

export const CheckBox = (props: Props) =>{
    return <BouncyCheckbox
                isChecked={false}
                size={20}
                fillColor="#01633D"
                unfillColor="#FFF"
                text="Converter para Dolar"
                iconStyle={{ borderRadius: 6 }}    
                innerIconStyle={{ borderWidth: 1, borderRadius: 6 }}
                textStyle={{
                    textDecorationLine: 'none',
                    right: 10
                }}
                onPress={props.onChange}
            />
}