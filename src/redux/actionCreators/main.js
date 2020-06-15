
import { FETCH_POKEMONS } from '../actionTypes';




export function getPokemons(){
    return async (dispatch) =>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response)=>{
          response.json()
          .then((response)=>{
            dispatch(fetchPokemons(response.results))
          })
        })
    }
}


export function fetchPokemons(pokemons){
    return{
        type: FETCH_POKEMONS,
        payload: pokemons
    }
}


export function proverka(){
    console.log('work')
}