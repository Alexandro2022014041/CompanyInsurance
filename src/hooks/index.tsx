import { useContext } from 'react'
import { UtilsContext } from "../Context"

export const UseUtilsContext = () =>{
    const context = useContext(UtilsContext)

    if(context === undefined){
        throw Error('Não está dentro do contexto')
    }
    return context
}