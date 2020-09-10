import React from 'react';

import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      text: '',
      phone: '',
      city: ''
    };

    this.submitHandler = this.submitHandler.bind(this);
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

  render() {
    this.onCreate = this.props.onCreate;

    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h1 className="form__header">Объявление</h1>
        <input className="form__input"
          placeholder="Заголовок"
          value={this.state.title}
          onChange={(evt) => this.setState({title: evt.target.value})} />
        <span className="form__error"></span>
        <textarea className="form__input form__input_textarea"
          placeholder="Текст объявления"
          value={this.state.text}
          onChange={(evt) => this.setState({text: evt.target.value})} />
        <span className="form__error"></span>
        <input className="form__input"
          placeholder="Телефон" 
          value={this.state.phone}
          onChange={(evt) => this.setState({phone: evt.target.value})} />
        <span className="form__error"></span>
        <input className="form__input"
        placeholder="Город"
        value={this.state.city}
          onChange={(evt) => this.setState({city: evt.target.value})} />
        <span className="form__error"></span>
        <button className="form__button form__button_is-active">Создать</button>
      </form>
    );
  }
}

export default Form;