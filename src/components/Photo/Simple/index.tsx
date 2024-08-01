import React from 'react';
import personalPhoto from '../../../assets/img/foto personal bg azul centrada.png';
import './style.scss';

export default function SimplePhoto() {
  return (
    <div className="simple-photo-wrapper">
      <img id="original-photo" src={personalPhoto} alt="Federico Reina's photo" />
    </div>
  );
}
