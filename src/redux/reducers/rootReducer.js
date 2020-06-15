import {combineReducers} from 'redux'
import main from './main'
import images from './images'
import nav from './nav'
import item from './item'

export default combineReducers({
  main, images, nav, item
})