import React from 'react';

import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      text: '',
      phone: '',
      city: '',
      btnClass: 'form__button',
      submitting: null,
      cities: ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний Новгород'],
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.checkInputValidity = this.checkInputValidity.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();

    this.onCreate(this.state);

    this.setState({
      title: '',
      text: '',
      phone: '',
      city: ''
    });
  }

  checkInputValidity() {
    if (this.state.title.length  && this.state.phone.length && (!this.state.city || this.state.cities.some((city) => city === this.state.city))) {
      this.setState({ btnClass: 'form__button form__button_is-active', submitting: true });
    } else {
      this.setState({ btnClass: 'form__button', submitting: null });
    }
  }

  render() {
    this.onCreate = this.props.onCreate;

    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h1 className="form__header">Объявление</h1>
        <input className="form__input"
          placeholder="Заголовок"
          value={this.state.title}
          onChange={(evt) => this.setState({ title: evt.target.value }, () => this.checkInputValidity())}
          maxLength="140"
          required />
        <span className="form__error"></span>
        <textarea className="form__input form__input_textarea"
          placeholder="Текст объявления"
          value={this.state.text}
          onChange={(evt) => this.setState({ text: evt.target.value }, () => this.checkInputValidity())}
          maxLength="300" />
        <span className="form__error"></span>
        <input className="form__input"
          placeholder="Телефон"
          value={this.state.phone}
          onChange={(evt) => this.setState({ phone: evt.target.value }, () => this.checkInputValidity())}
          required />
        <span className="form__error"></span>
        <input className="form__input"
          placeholder="Город"
          value={this.state.city}
          onChange={(evt) => this.setState({ city: evt.target.value }, () => this.checkInputValidity())} />
        <span className="form__error"></span>
        <button className={this.state.btnClass} disabled={this.state.submitting ? null : true}>Создать</button>
      </form>
    );
  }
}

export default Form;