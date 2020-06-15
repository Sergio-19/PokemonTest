import React from 'react';
import './app.scss';
import {MainContext} from './context/MainContext'
import {connect} from 'react-redux'
import { Layout } from './components/layout/Layout';
import {getPokemons} from './redux/actionCreators/main'
import { getImages } from './redux/actionCreators/images';
import { showNavHandler, hideNavHandler } from './redux/actionCreators/nav';
import { getItem } from './redux/actionCreators/item';



class App extends React.Component{



componentDidMount(){
  this.props.getPokemons()
  this.props.getImages()

}


  render(){

    return(
      <MainContext.Provider value = {{state: this.props}}> 
        <Layout/>
      </MainContext.Provider>
    )
  }
}


function mapStateToProps(state){
  return{
    pokemons: state.main.pokemons,
    loading: state.main.loading,
    images: state.images.images,
    isOpen: state.nav.isOpen,
    name: state.item.name,
    height: state.item.height,
    weight: state.item.weight,
    abilities: state.item.abilities,
    types: state.item.types,
    itemLoading: state.item.itemLoading

  }
}

function mapDispatchToProps(dispatch){
  return{

    getPokemons: ()=> dispatch(getPokemons()),
    getImages: ()=> dispatch(getImages()),
    showNav: ()=> dispatch(showNavHandler()),
    hideNav: ()=> dispatch(hideNavHandler()),
    getItem: (url)=> dispatch(getItem(url))
  

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App) 
