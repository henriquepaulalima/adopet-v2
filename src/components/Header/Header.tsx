import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav className={styles.header__container}>
        <div className={styles.header__controls}>
          <img
            src="/assets/img/Logo-02.png"
            className={styles.brand__icon}
            alt="Ícone do Adopet"
          />
          <img
            src="/assets/img/Casa.png"
            className={styles.home__icon}
            alt="Ícone de casa"
          />
          <img
            src="/assets/img/Mensagens.png"
            className={styles.message__icon}
            alt="Ícone de mensagens"
          />
        </div>
        <div>
          <img
            src="/assets/img/Usuário.png"
            className={styles.user__icon}
            alt="Ícone dos usuários"
          />
        </div>
      </nav>
    </header>
  );
}
