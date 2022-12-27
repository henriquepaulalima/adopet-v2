import { Link } from 'react-router-dom';
import styles from './Pet.module.scss';
import pets from '../pets.json';
import message_icon from './assets/ícone_mensagem.png';

type Props = typeof pets[0];

export default function Pet(props: Props) {
  const { id, name, age, size, behavior, location, img } = props;

  return (
    <div className={styles.pet_card__container}>
      <div className={styles.pet_img__container}>
        <img src={img} alt={`Foto ${name}`} />
      </div>
      <div className={styles.pet_info__container}>
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{size}</p>
        <p>{behavior}</p>
        <address>{location}</address>
        <div className={styles.pet_info_contact__container}>
          <img src={message_icon} alt="Ícone da mensagem" />
          <Link to={`/contact-owner/${id.toString()}`}>
            <p>Falar com responsável</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
