import React, { useContext } from 'react';

import Context from '../../context'

import './AdItem.css'

function AdItem({ ad }) {
  const { removeAd } = useContext(Context)

  return (
    <div className="ad-item">
      <button onClick={() => removeAd(ad.id)}>Удалить</button>
      <h2 className="ad-item__title">{ad.title}</h2>
      <p className="ad-item__text">{ad.text}</p>
      <h3 className="ad-item__phone">Телефон: {ad.phone}</h3>
      <h4 className="ad-item__city">Город: {ad.city}</h4>
    </div>
  )
}

export default AdItem;