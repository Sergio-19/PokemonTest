import React, {useContext} from 'react'
import './description.scss'
import { Loader } from '../loader/Loader';
import { MainContext } from '../../context/MainContext';
import {NavLink} from 'react-router-dom'


export const Description = () =>{

    const {state} = useContext(MainContext)


console.log(state.abilities)


    return(
        <div className = 'descrPage'>
        {
            state.itemLoading ? 
            <div className = 'descrPageContent'>
            
                <div className = 'descrPageContentImg'>
                <img src = {state.images[state.name]}  alt = {state.name}/>
                
                </div>
                <div className = 'descriptionTxt'>
                <div className = 'descrPageContentName'>
                    <h2>{state.name}</h2>
                </div>

                <div className = 'characteristics'>
                    <ul>
                        <li> <p>height - {state.height}</p></li>
                        <li> <p>weight - {state.weight}</p></li>
                    </ul>
                    <p className = 'types'>
                    type of pokemon:&nbsp; 

                    {Object.keys(state.types).map((type, i)=>{
                        return(
                            <React.Fragment key = {i}>
                          <strong key = {i}>{state.types[type].type.name}</strong>&nbsp;<br/>       
                            </React.Fragment>
                           
                        )
                       
                    })}
                    

                    </p>
                
                </div>

                <div className = 'abilities'>

                       <p className = 'types'>
                    abilities:&nbsp; 

                    {Object.keys(state.abilities).map((type, i)=>{
                        return(
                            <React.Fragment key = {i}>
                          <strong key = {i}>{state.abilities[type].ability.name}</strong>&nbsp;<br/>       
                            </React.Fragment>
                           
                        )
                       
                    })}
                    

                    </p> 



                
                </div>

                <div className = 'goHome'>

                <div className = 'btn'>
                <NavLink to = '/'>
                Главная
                </NavLink> </div>
                </div>

                

                
                
                
                </div>


            
            
            </div>

            : <Loader/>
        }

        
            
        
        </div>
    )
}