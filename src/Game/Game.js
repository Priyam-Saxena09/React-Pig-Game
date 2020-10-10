import React, { Component } from "react"
import Aux from "../Auxilary/Auxilary"
import Player from "../Player/Player"
import Controls from "../Controls/Controls"
import classes from "./Game.css"

class Game extends Component{
    state = {
        player1:{
            total:0,
            round:0
        },
        player2:{
            total:0,
            round:0
        },
        chance:"Player-1",
        dicenum:0,
        winner:false
    }

    rolldice = () => {
        let num = (Math.floor(Math.random()*6))+1
        if(this.state.chance==="Player-1")
        {
            if(num===1)
            {
                let updateone = {...this.state.player1}
                updateone.round=0;
                this.setState({player1:updateone,chance:"Player-2",dicenum:num})
            }
            else
            {
                let updateone = {...this.state.player1}
                updateone.round+=num;
                this.setState({player1:updateone,dicenum:num})
            }
        }
        else
        {
            if(num===1)
            {
                let updateone = {...this.state.player2}
                updateone.round=0;
                this.setState({player2:updateone,chance:"Player-1",dicenum:num})
            }
            else
            {
                let updateone = {...this.state.player2}
                updateone.round+=num;
                this.setState({player2:updateone,dicenum:num})
            }
        }
    }

    hold = () => 
    {
        if(this.state.chance==="Player-1")
        {     
            let updateone = {...this.state.player1}
            updateone.total+=updateone.round;
            updateone.round=0;
            if(updateone.total>=50)
            {
                this.setState({player1:updateone,winner:true})
            }
            else
            {
                this.setState({player1:updateone,chance:"Player-2"})
            }            
        }
        else
        {
            let updateone = {...this.state.player2}
            updateone.total+=updateone.round;
            updateone.round=0;
            if(updateone.total>=50)
            {
                this.setState({player2:updateone,winner:true})
            }
            else
            {
                this.setState({player2:updateone,chance:"Player-1"})
            }            
        }
    }

    newgame = () =>
    {
        let updateone1 = {...this.state.player1}
        let updateone2 = {...this.state.player2}
        updateone1.total=0;
        updateone1.round=0;
        updateone2.total=0;
        updateone2.round=0;
        this.setState({player1:updateone1,player2:updateone2,chance:"Player-1",dicenum:0,winner:false})
    }
    render(){
        let h = `Turn:${this.state.chance}`
        let style = null
        if(this.state.winner)
        {
            h=`Winner:${this.state.chance}`
            style = {
                "text-shadow":"3px 3px cyan"
            }
        }
        return(
            <Aux>
                <h1 className={classes.h}>Welcome To The-Pig-Game</h1>
            <div className={classes.Game}>
                <h1 className={classes.h1} style={style}>{h}</h1>
            <div className="d-flex flex-row border border-success justify-content-center align-items-center mt-5">
            <Player name="Player-1" total={this.state.player1.total} round={this.state.player1.round} />
            <Controls rolldice={this.rolldice} dicenum={this.state.dicenum} hold={this.hold} winner={this.state.winner} newgame={this.newgame}/>
            <Player name="Player-2" total={this.state.player2.total} round={this.state.player2.round} />
            </div>
            </div>
            </Aux>
        )
    }
}

export default Game