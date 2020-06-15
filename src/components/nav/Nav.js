import React, {useContext} from 'react'
import './nav.scss'
import {NavLink} from 'react-router-dom'
import { MainContext } from '../../context/MainContext';


export const Nav = () =>{

    const {state} = useContext(MainContext)


    return(
        <div className = 'navWrapper'>
            
            <div className = 'nav' 
                  style = {{width: !state.isOpen ? '0px' : '100%'}}>

            <div className = 'navHead'>
                <i className = 'fa fa-times' 
                   onClick = {state.hideNav}
                   style = {{display: state.isOpen ? "block" : 'none'}}
                   />
            </div>

            <div className = 'navBar'
                 style = {{display: state.isOpen ? "block" : 'none'}}   
            >
                <ul>
                    <li onClick = {state.hideNav}><NavLink to = "/">Главная</NavLink></li>
                    <li onClick = {state.hideNav}><a href = "">GitHub...</a></li>

                </ul>
            </div>

            
            
            </div>

            <div 
                className = 'navArrow'
                style = {{display: !state.isOpen ? "block" : 'none'}}  
            
            >
            <i className="fa fa-arrow-right" 
                aria-hidden="true"
                onClick = {state.showNav}
                style = {{display: !state.isOpen ? "block" : 'none'}}  
                ></i>
            </div>  
        </div>
        
    )
}