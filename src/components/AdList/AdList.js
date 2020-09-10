import React from 'react';
import AdItem from '../AdItem/AdItem'

import './AdList.css'

function AdList({ ads }) {
  function renderList() {
    return ads.map((ad) => {
      return <AdItem ad={ad} key={ad.id} />
    })
  }

  return (
    <div className="ad-list">
      {ads.length ? renderList() : <p>Пока что объявлений нет! ;(</p>}
    </div>
  )
}

export default AdList;