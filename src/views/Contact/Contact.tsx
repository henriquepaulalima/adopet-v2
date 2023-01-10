import { useParams } from 'react-router-dom';
import styles from './Contact.module.scss';
import pets from '../../data/pets.json';

export default function Contact() {
  const { id } = useParams();
  const pet = pets.find(petItem => petItem.id === Number(id));

  if (!pet) {
    return(
      <></>
    );
  }

  return (
    <div>
      <div>
        <div>
          <img src={pet.img} alt={`Foto ${pet.name}`} />
        </div>
        <div className={styles.pet_info__container}>
          <h3>{pet.name}</h3>
          <p>{pet.age}</p>
          <p>{pet.size}</p>
          <p>{pet.behavior}</p>
          <address>{pet.location}</address>
        </div>
      </div>
      <div>
        <div>
          <p>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
        </div>
        <form>
          <div>
            <label >
              Nome
              <input placeholder="Insira seu nome completo"></input>
            </label>
            <small></small>
          </div>
          <div>
            <label>
              Telefone
              <input placeholder="Insira seu telefone e/ou whatsapp"></input>
            </label>
            <small></small>
          </div>
          <div>
            <label>
              Nome do animal
              <input placeholder="Por qual animal você se interessou?"></input>
            </label>
            <small></small>
          </div>
          <div>
            <label>
              Mensagem
              <textarea placeholder="Escreva sua mensagem"></textarea>
            </label>
            <small></small>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}
