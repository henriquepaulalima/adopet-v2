import styles from './Welcome.module.scss';

export default function Welcome() {
  return (
    <div className={styles.main_container}>
      <img src="/assets/img/Logo-02.png" alt="Logo Adopet" />
      <h1>Boas-vindas!</h1>
      <p>Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!</p>
      <div className={styles.buttons_container}>
        <button>Já tenho conta</button>
        <button>Quero me cadastrar</button>
      </div>
      <div className={styles.ilustration_container}>
        <img src="/assets/img/Ilustração-01.png" alt="Ilustração da página principal" />
      </div>
    </div>
  );
}
