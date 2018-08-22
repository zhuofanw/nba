import React from 'react';
import nba from 'nba';
import {Profile} from "./Profile"
import {ShotChart} from "./ShotChart"

export class Main extends React.Component{
    componentDidMount(){
        nba.findPlayer("Stephen Curry");

    }
    render(){
        return(
            <div className={"main"}>
                <Profile/>
                <ShotChart playerId={201939}/>
            </div>
        );
    }
}