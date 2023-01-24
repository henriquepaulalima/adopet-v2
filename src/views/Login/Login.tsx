import { useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
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

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const verifyEmail = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
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
    verifyPassword();

    if (isEmailValid && isPasswordValid) {
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
    <div>
      <div className={styles.main_text__container}>
        <img src="/assets/img/Logo-03.png" alt="Logo Adopet" />
        <p>Já tem conta? Faça seu login:</p>
      </div>
      <form 
        className={styles.main_form}
        onSubmit={handleSubmit}
      >
        <div className={styles.form_item__container}>
          <label>
            Email
            <input
              id="email"
              type="text"
              placeholder="Escolha seu melhor email"
              name="email_text"
              onChange={handleEmailInputChange}
              onBlur={verifyEmail}
              value={email}
              className={classNames({
                [styles.error]: isEmailValid === false
              })}
              required
            />
          </label>
          <small></small>
        </div>
        <div className={styles.form_item__container}>
          <label>
            Senha
            <div className={styles.input_with_icon__container}>
              <input
                id="password"
                type={passwordInputType}
                placeholder="Crie uma senha"
                name="password_text"
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
          <small></small>
        </div>
        <button type="submit">
          {(() => {
            if (isSubmitLoading) {
              return <div><i className='material-icons loading-icon'>loop</i></div>;
            } else if (isSubmitSuccessful) {
              return <i className='material-icons'>check</i>;
            } else {
              return 'Entrar';
            }
          })()}
        </button>
        {isSubmitValid === false ? <small>Algo está errado, verifique se todos os campos estão corretos</small> : ''}
      </form>
    </div>
  );
}
