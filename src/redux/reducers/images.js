import { FETCH_IMAGES } from "../actionTypes";

const initialState = {
    images: ''
}


export default function images(state = initialState, action){
    switch(action.type){
        case FETCH_IMAGES:
        return{
            ...state,
            images: action.payload
        }

        default:
        return state
    }
}