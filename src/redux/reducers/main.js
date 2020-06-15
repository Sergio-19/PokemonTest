import { FETCH_POKEMONS } from "../actionTypes";

const initialState = {
    pokemons: ''
}


export default function main(state = initialState, action){

    switch(action.type){
       case FETCH_POKEMONS:
       return{
           ...state,
           pokemons: action.payload
       }


        default:
        return state
    }
}