import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import './layout.scss'
import { Nav } from '../nav/Nav';
import { Mask } from '../mask/Mask';
import { Home } from '../home/Home';
import { MainContext } from '../../context/MainContext';
import { Loader } from '../loader/Loader';
import { Description } from '../description/Description';


export const Layout = () =>{

        const {state} = useContext(MainContext)


    return(

        
        <div className = 'layout'>

        {state.loading ? <React.Fragment><Nav/>
            <Mask />
            <div className = 'container'>
                <div className = 'content'>
                 <Switch>
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/item/' component = {Description}/>
                </Switch>
                
                </div>

               

            </div> </React.Fragment> : <Loader/>
        }
            



        </div>
    )
}