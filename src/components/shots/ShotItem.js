import React from 'react';
import { connect } from 'react-redux';
import { deleteShot } from '../../actions/basketActions';

const ShotItem = ({ shot, deleteShot }) => {
  return (
    <div className="collection-item shotContainer">
      <div className="shotList">
        <span style={{ marginRight: '20px' }} className="black-text">
          <strong>Jugador: </strong> {shot.shooter}
        </span>
        <span style={{ marginRight: '20px' }} className="black-text">
          <strong>Distancia: </strong> {shot.distance}
        </span>
        <strong>Anotó: </strong>{' '}
        <i
          style={{ marginRight: '20px' }}
          className={`black-text ${
            shot.scored === 'No' ? 'fas fa-times' : 'fas fa-check'
          }`}
        />
        <span className="black-text">
          <strong>Posición: </strong> {shot.position}
        </span>
        <a
          href="#!"
          style={{ marginRight: '25px' }}
          className="secondary-content"
        >
          <i
            onClick={(e) => deleteShot(shot.id)}
            className="material-icons grey-text"
          >
            delete
          </i>
        </a>
      </div>
    </div>
  );
};

export default connect(null, { deleteShot })(ShotItem);
