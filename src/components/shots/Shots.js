import React from 'react';
import { connect } from 'react-redux';
import ShotItem from './ShotItem';

const Shots = ({ shots }) => {
  return (
    <div>
      <ul className="collection with-header">
        <li
          style={{ backgroundColor: 'lightblue' }}
          className="collection-header"
        >
          <h4 className="center">Información sobre disparos</h4>
        </li>
        {shots.length === 0 ? (
          <p className="center">No hay tiros para mostrar</p>
        ) : (
          shots.map((shot) => <ShotItem shot={shot} key={shot.id} />)
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shots: state.basket.shots,
});

export default connect(mapStateToProps)(Shots);
