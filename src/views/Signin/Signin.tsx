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
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState<boolean | null>(null);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const verifyEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

  const switchShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
      setPasswordInputType('password');
    } else {
      setShowPassword(true);
      setPasswordInputType('text');
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitLoading(true);

    verifyEmail();
    verifyName();
    verifyPassword();

    if (isEmailValid && isNameValid && isPasswordValid) {
      setIsSubmitValid(true);
      setIsSubmitLoading(true);
      setTimeout(() => {
        setIsSubmitLoading(false);
        setIsSubmitSuccessful(true);
        setTimeout(() => {
          navigate('/home');
        }, 1000)
      }, 3000);
    } else {
      setIsSubmitValid(false);
      setIsSubmitLoading(false);
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
            <div className={styles.input_with_icon__container}>
              <input
                type={passwordInputType}
                placeholder="Crie uma senha"
                title='A senha deve conter 1 letra, 1 número, 1 caractere especial e pelo menos 8 caracteres'
                onChange={handlePasswordInputChange}
                onBlur={verifyPassword}
                value={password}
                className={classNames({
                  [styles.error]: isPasswordValid === false
                })}
                required
              />
              <i onClick={switchShowPassword} className='material-icons'>
                {showPassword ? 'visibility_off' : 'visibility'}
              </i>
            </div>
          </label>
        </div>
        <button type="submit">
          {(() => {
            if (isSubmitLoading) {
              return <div><i className='material-icons loading-icon'>loop</i></div>;
            } else if (isSubmitSuccessful) {
              return <i className='material-icons'>check</i>;
            } else {
              return 'Cadastrar';
            }
          })()}
        </button>
        {isSubmitValid === false ? <small>Algo está errado, verifique se todos os campos estão corretos</small> : ''}
      </form>
    </div>
  );
}
