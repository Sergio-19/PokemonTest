import React, {useContext} from 'react'
import './list.scss'
import { MainContext } from '../../context/MainContext';
import {NavLink} from 'react-router-dom'


export const List = () =>{

   const url = 'https://pokeapi.co/api/v2/pokemon/'

    const {state} = useContext(MainContext)

    function descrHandler(url){
        state.getItem(url)
        state.hideNav()
    }
    return(
        <div className = 'list'>
        <h2>Pokemons List</h2>
        <ul>
        {Object.keys(state.pokemons).map((pokemon, index)=>{
            return(
                <li key = {index}
                onClick = {()=> descrHandler(`${url}${index + 1}`)}
                
                ><NavLink to = {`/item/${state.pokemons[pokemon].name}`}>{state.pokemons[pokemon].name}</NavLink></li>
                )})
                }
                </ul>
                </div>
    )
}