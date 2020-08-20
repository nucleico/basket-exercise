import React from 'react'
import { connect } from "react-redux"
import { deletePlayer } from "../../actions/basketActions"

const PlayerItem = ({player, deletePlayer}) => {
    return (
        <div>
           <li className="collection-item">
            <div>
                <strong>Nombre: </strong> {player.nombre} - <strong>Legajo: </strong> {player.legajo}
                <a href="#!" className="secondary-content">
                <i onClick={e => deletePlayer(player.legajo)} className="material-icons grey-text">delete</i>
                </a>
            </div>            
        </li>
        </div>
    )
}

export default connect(null, { deletePlayer })(PlayerItem)
