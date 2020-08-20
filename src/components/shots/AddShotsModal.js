import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addShot } from '../../actions/basketActions';
import { v4 as uuidv4 } from 'uuid';

const AddShotsModal = ({ addShot, players }) => {
  const [shooter, setShooter] = useState('');
  const [distance, setDistance] = useState('');
  const [scored, setScored] = useState('');
  const [position, setPosition] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const shot = { shooter, distance, scored, position, id };

    if (shooter !== '' && distance !== '' && scored !== '' && position !== '') {
      addShot(shot);
      setShooter('');
      setDistance('');
      setScored('');
      setPosition('');
    } else {
      alert('Complete todos los campos');
    }
  };

  return (
    <div id="add-shot-modal" className="modal">
      <div className="modal-content">
        <h4 style={{ marginBottom: '30px', fontSize: '25px' }}>
          {' '}
          Agregar Tiro
        </h4>

        <div className="row">
          <label htmlFor="shooter">Tirador</label>
          <select
            style={{ backgroundColor: 'transparent', border: 'none' }}
            className="browser-default"
            onChange={(e) => setShooter(e.target.value)}
            value={shooter}
            name="shooter"
            id="shooter"
          >
            <option value="" disabled>
              Seleccionar
            </option>
            {players !== null &&
              players.map((p) => <option key={p.legajo}>{p.nombre}</option>)}
          </select>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="number"
              htmlFor="distance"
              name="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              min="0"
            />
            <label htmlFor="distance" className="active">
              Distancia
            </label>
          </div>
        </div>

        <div className="row">
          <label htmlFor="scored">Acierto</label>
          <select
            style={{ backgroundColor: 'transparent', border: 'none' }}
            className="browser-default"
            onChange={(e) => setScored(e.target.value)}
            value={scored}
            name="scored"
            id="scored"
            required
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="row">
          <label htmlFor="position">Posición</label>
          <select
            style={{ backgroundColor: 'transparent', border: 'none' }}
            className="browser-default"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            name="position"
            id="position"
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="Punta Derecha">Punta Derecha</option>
            <option value="Punta Izquierda">Punta Izquierda</option>
            <option value="Lado Izquierdo">Lado Izquierdo</option>
            <option value="Lado Derecho">Lado Derecho</option>
            <option value="Frente">Frente</option>
          </select>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Confirmar
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  players: state.basket.players,
});

export default connect(mapStateToProps, { addShot })(AddShotsModal);
