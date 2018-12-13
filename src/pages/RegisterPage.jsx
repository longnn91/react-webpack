import React, { Component } from 'react';
import { login } from 'actions/authAction';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState(
      {[name]: value, error: null});
  }

  handleSubmit(e) {
    e.preventDefault();
      const { username, password } = this.state;
      if (username && password) {
        login({username, password}, this.props.history).catch(err => {
          if (err.response && err.response.status === 403) {
              this.setState({ error: err.response.data.msg });
          }
        });
      }
  }

  render(){
    const { username, password, error } = this.state;
    return (
      <div className="main main--center">
          <section className="section-login form">
            <form className="form__login form--vertical" onSubmit={this.handleSubmit}>
              <div className="form__header">
                <span className="form__header__title">Register Form</span>
                <span className="form__header__close-button"></span>
              </div>
              <div className="form__main">
                <p className="form__input-label">Email</p>
                <input type="text" className="form__input" placeholder="Please input email" name="username" value={username} onChange={this.handleChange} />
                <p className="form__input-label">Password</p>
                <input type="password" className="form__input" placeholder="Please input password" name="password" value={password} onChange={this.handleChange} />
                <p className="form__input-label">Confirm password</p>
                <input type="password" className="form__input" placeholder="Please input confirm password" name="confirm_password" value={password} onChange={this.handleChange} />
                <input type="submit" className="form__button mgt-30" value="Register" />
              </div>
            </form>
          </section>
      </div>
    )
  }
}
