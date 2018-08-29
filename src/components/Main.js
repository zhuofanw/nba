import React from 'react';
import nba from 'nba';
import {Profile} from "./Profile"
import {DataViewContainer} from "./DataViewContainer"
import {SearchBar} from "./SearchBar"

export class Main extends React.Component{
    state = {
        playerId: nba.findPlayer("Stephen Curry").playerId,
        playerInfo: {}
    }
    componentDidMount() {
        const playerId = nba.findPlayer("Stephen Curry").playerId;
        nba.stats.playerInfo({PlayerID: playerId}).then((response) => {
            //commonPlayerInfo[0]
            //playerHeadlineStats[0]
            const playerInfo = Object.assign(
                {}, response.commonPlayerInfo[0], response.playerHeadlineStats[0]
            );

            this.setState({
                playerInfo
            });
        })
    }
    render(){
        console.log(this.state.playerInfo);
        return(
            <div className="main">
                <SearchBar/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerId}/>
                </div>
            </div>
        );
    }
}