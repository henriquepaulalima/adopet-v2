import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

export default function Login() {
  return (
    <div>
      <div className={styles.main_text__container}>
        <img src="/assets/img/Logo-03.png" alt="Logo Adopet" />
        <p>Já tem conta? Faça seu login:</p>
      </div>
      <form className={styles.main_form}>
        <div className={styles.form_item__container}>
          <label>
            Email
            <input id="email" type="text" placeholder="Escolha seu melhor email" name="email_text" />
          </label>
          <small></small>
        </div>
        <div className={styles.form_item__container}>
          <label>
            Senha
            <input id="password" type="password" placeholder="Crie uma senha" name="password_text" title="Sua senha deve conter no mínimo 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número" />
          </label>
          <small></small>
          <p className={styles.forgot_password}>Esqueci minha senha</p>
        </div>
        <Link to="/home">
          <button type="submit">Entrar</button>
        </Link>
      </form>
    </div>
  );
}
