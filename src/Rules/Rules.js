import React from 'react'
import Aux from "../Auxilary/Auxilary"
const rules = () => {
    return (
        <Aux>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
                Rules
            </button>


            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="staticBackdropLabel">Rules of Pig Game</h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>1.It's a two Player Game and Player-1 has the first chance to play.</p>
                            <p>2.Each Player has to press the Roll button to play.If he get 1,then then the round point becomes 0 and 
                                other player will get the chance.Otherwise,number on dice is added to round point and he can continue to play.</p>
                            <p>3.If a player wants to add the round point in final point,he has to press the Hold button.
                                Point is added and other player will get the chance.</p>
                            <p>4.Player who score the 50 points first will be the WINNER.</p>
                            <p>5.For starting a new game,Press the New Game button</p>    
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default rules