import { useNavigate } from 'react-router-dom';
import styles from './Signin.module.scss';
import React, { useState } from 'react';
import classNames from 'classnames';

export default function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordConfirmatonValid, setIsPasswordConfirmationValid] = useState<boolean | null>(null);
  const [isSubmitValid, setIsSubmitValid] = useState<boolean | null>(null);


  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handlePasswordConfirmationInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(event.target.value);
  }

  const verifyEmail = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  }

  const verifyName = () => {
    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (!nameRegex.test(name)) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  }

  const verifyPassword = () => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }

  const verifyPasswordConfirmation = () => {
    const passwordConfirmationRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordConfirmationRegex.test(passwordConfirmation)) {
      setIsPasswordConfirmationValid(false);
    } else {
      setIsPasswordConfirmationValid(true);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    verifyEmail();
    verifyName();
    verifyPassword();
    verifyPasswordConfirmation();

    if (isEmailValid !== true && isNameValid !== true && isPasswordValid !== true && isPasswordConfirmatonValid !== true) {
      if (password !== passwordConfirmation) {
        setIsSubmitValid(false);
      } else {
        setIsSubmitValid(true);
        navigate('/home');
        // REVIEW VALIDATION
      }
    }
  }

  return (
    <div className={styles.main__container}>
      <div className={styles.signin__container}>
        <img src="assets/img/Logo-03.png" alt="Logo Adopet" />
        <p>Ainda não tem cadastro?</p>
        <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      </div>
      <form
        className={styles.form__container}
        onSubmit={handleSubmit}
      >
        <div className={styles.form_field__container}>
          <label>
            Email
            <input
              type="email"
              placeholder="Escolha seu melhor email"
              onChange={handleEmailInputChange}
              onBlur={verifyEmail}
              value={email}
              className={classNames({
                [styles.error]: isEmailValid === false
              })}
              required
            />
          </label>
        </div>
        <div className={styles.form_field__container}>
          <label>
            Nome
            <input
              type="text"
              placeholder="Digite seu nome completo"
              onChange={handleNameInputChange}
              onBlur={verifyName}
              value={name}
              className={classNames({
                [styles.error]: isNameValid === false
              })}
              required
            />
          </label>
        </div>
        <div className={styles.form_field__container}>
          <label>
            Senha
            <input
              type="password"
              placeholder="Crie uma senha"
              onChange={handlePasswordInputChange}
              onBlur={verifyPassword}
              value={password}
              className={classNames({
                [styles.error]: isPasswordValid === false
              })}
              required
            />
          </label>
        </div>
        <div className={styles.form_field__container}>
          <label>
            Confirmar senha
            <input
              type="password"
              placeholder="Repita a senha criada acima"
              onChange={handlePasswordConfirmationInputChange}
              onBlur={verifyPasswordConfirmation}
              value={passwordConfirmation}
              className={classNames({
                [styles.error]: isPasswordConfirmatonValid === false
              })}
              required
            />
          </label>
        </div>
        <button type="submit">Cadastrar</button>
        {isSubmitValid === false ? <small>Algo está errado, verifique se todos os campos estão corretos</small> : ''}
      </form>
    </div>
  );
}
