import React from 'react';
import './App.css';

import Form from './components/Form/Form'
import AdList from './components/AdList/AdList';

import Context from './context'

function App() {
  const [ads, setAds] = React.useState([]);

  function addAd({ title, text, phone, city }) {
    if (!text) {
      text = 'Нет описания';
    }

    if (!city) {
      city = 'не указан';
    }

    setAds([{ id: Math.floor(Math.random() * 10), title, text, phone, city }, ...ads]);
  }

  function removeAd(id) {
    setAds(ads.filter((ad) => ad.id !== id));
  }

  return (
    <Context.Provider value={{ removeAd }}>
      <div className="App">
        <Form onCreate={addAd} />
        <AdList ads={ads} />
      </div>
    </Context.Provider>
  );
}

export default App;
