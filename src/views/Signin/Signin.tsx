import { Link } from 'react-router-dom';
import styles from './Signin.module.scss';

export default function Signin() {
  return (
    <div className={styles.main__container}>
      <div className={styles.signin__container}>
        <img src="assets/img/Logo-03.png" alt="Logo Adopet" />
        <p>Ainda não tem cadastro?</p>
        <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      </div>
      <form className={styles.form__container}>
        <div className={styles.form_field__container}>
          <label>
            Email
            <input type="text" placeholder="Escolha seu melhor email" />
          </label>
          <small></small>
        </div>
        <div className={styles.form_field__container}>
          <label>
            Nome
            <input type="text" placeholder="Digite seu nome completo" />
          </label>
          <small></small>
        </div>
        <div className={styles.form_field__container}>
          <label>
            Senha
            <input type="password" placeholder="Crie uma senha" />
          </label>
          <small></small>
        </div>
        <div className={styles.form_field__container}>
          <label>
            Confirmar senha
            <input type="password" placeholder="Repita a senha criada acima" />
          </label>
          <small></small>
        </div>
        <Link to="/home">
          <button type="submit">Cadastrar</button>
        </Link>
      </form>
    </div>
  );
}
