import {combineReducers} from 'redux'
import main from './main'
import images from './images'
import nav from './nav'

export default combineReducers({
  main, images, nav
})