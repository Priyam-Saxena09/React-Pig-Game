import React from "react"
import "./Player.css"
const player = (props) => {
    return (
        <div class="d-flex flex-column bd-highlight mb-5 mr-5 ml-5">
            <div class="p-2 bd-highlight mb-4"><h2 className="display-2">{props.name}</h2></div>
            <div class="p-2 bd-highlight mb-4"><h2 className="display-3">{props.total}</h2></div>
            <div class="p-2 bd-highlight mb-4"><i>Each Round Point</i></div>
            <div class="p-2 bd-highlight"><b className="display-4">{props.round}</b></div>
        </div>
    )
}

export default player