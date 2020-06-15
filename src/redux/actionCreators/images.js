
import { FETCH_IMAGES } from '../actionTypes';

export function getImages(){
    return async (dispatch)=>{
        fetch('https://pokemon-371d3.firebaseio.com/pokemons.json')
        .then((response)=>{
          response.json()
          .then((response)=>{
            dispatch(fetchImages(response))
          })

        })
     }
}

export function fetchImages(images){
    return{
        type: FETCH_IMAGES,
        payload: images
    }
}