import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav className={styles.header__container}>
        <div className={styles.header__controls}>
          <Link to="/">
            <img
              src="/assets/img/Logo-02.png"
              className={styles.brand__icon}
              alt="Ícone do Adopet"
            />
          </Link>
          <Link to="/home">
            <img
              src="/assets/img/Casa.png"
              className={styles.home__icon}
              alt="Ícone de casa"
            />
          </Link>
        </div>
        <div>
          <img
            src="/assets/img/Usuário.png"
            className={styles.user__icon}
            alt="Ícone dos usuários"
          />
        </div>
      </nav>
    </header >
  );
}
