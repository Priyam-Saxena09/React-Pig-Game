import React, { Component } from "react"
import Image1 from "../Images/dice-1.png"
import Image2 from "../Images/dice-2.png"
import Image3 from "../Images/dice-3.png"
import Image4 from "../Images/dice-4.png"
import Image5 from "../Images/dice-5.png"
import Image6 from "../Images/dice-6.png"
import "./Controls.css"
class Controls extends Component{
    render(){
    let dicenum = this.props.dicenum
    let img = <img className="mb-4" src = {Image1} alt="Dice" />
    if(dicenum)
    {
    img = dicenum===1?<img className="mb-4" src = {Image1} alt="Dice" />:
         (dicenum===2?<img className="mb-4" src = {Image2} alt="Dice" />:
         (dicenum===3?<img className="mb-4" src = {Image3} alt="Dice" />:
         (dicenum===4?<img className="mb-4" src = {Image4} alt="Dice" />:
         (dicenum===5?<img className="mb-4" src = {Image5} alt="Dice" />:
         (dicenum===6?<img className="mb-4" src = {Image6} alt="Dice" />:null))))) 
    }
         const style = {
            "background-color":"cyan"
         }
    
    return (
        <div class="d-flex flex-column bd-highlight mb-1 mr-5 ml-5" style={style}>
            <div class="p-2 bd-highlight"><button type="button" class="btn btn-outline-success mb-5" onClick={this.props.newgame}>New Game</button></div>
            <div>{img}</div>
            <div class="p-2 bd-highlight"><button type="button" class="btn btn-outline-success mb-2" onClick={this.props.rolldice} disabled={this.props.winner}>Roll</button></div>
            <div class="p-2 bd-highlight"><button type="button" class="btn btn-outline-success" onClick={this.props.hold} disabled={this.props.winner}>Hold</button></div>
        </div>
    )
    }
}

export default Controls