import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPlayers } from '../../actions/basketActions';
import PlayerItem from './PlayerItem';

const PlayerListModal = ({ players, setPlayers }) => {
  useEffect(() => {
    const data = sessionStorage.getItem('Players');
    setPlayers(JSON.parse(data));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    sessionStorage.setItem('Players', JSON.stringify(players));
  });

  return (
    <div id="players-modal" className="modal">
      <div className="modal-content">
        <h4>Lista de Jugadores</h4>
        <ul className="collection">
          {players.length === 0 ? (
            <h4
              style={{
                margin: '25px 25px',
                fontSize: '25px',
                textAlign: 'center',
              }}
            >
              {' '}
              No hay jugadores registrados{' '}
            </h4>
          ) : (
            players.map((p) => <PlayerItem player={p} key={p.legajo} />)
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  players: state.basket.players,
});

export default connect(mapStateToProps, { setPlayers })(PlayerListModal);
