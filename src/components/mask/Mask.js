import React, {useContext} from 'react'
import './mask.scss'
import { MainContext } from '../../context/MainContext';


export const Mask = () =>{

    const {state} = useContext(MainContext)

    const cls = ['mask']

    if(state.isOpen){
        cls.push('maskShow')
    }

    return(
        <div className = {cls.join(' ')}></div>
    )
}