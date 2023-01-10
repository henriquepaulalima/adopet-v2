import { useNavigate } from 'react-router-dom';
import styles from './Pet.module.scss';
import pets from '../../../data/pets.json';
import message_icon from './assets/ícone_mensagem.png';
import { PetType } from '../../../types/pet';

type Props = typeof pets[0];

export default function Pet(pet: Props) {
  const { name, age, size, behavior, location, img } = pet;
  const navigate = useNavigate();

  function navigateToContact(pet: PetType) {
    navigate(`/contact-owner/${pet.id}`, { state: { pet } });
  }

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
          <p
            onClick={() => navigateToContact(pet)}
          >Falar com responsável</p>
        </div>
      </div>
    </div>
  );
}
