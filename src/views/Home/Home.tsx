import styles from './Home.module.scss';
import { useState } from 'react';
import petsList from './pets.json';
import Pet from './Pet/Pet';

export default function Home() {
  const [pets, setPets] = useState(petsList);

  return (
    <div>
      <div className={styles.home_title__container}>
        <p>Olá! Veja os amigos disponíveis para adoção!</p>
      </div>
      <div className={styles.pets_list__container}>
        {pets.map(pet => (
          <Pet
            key={pet.id}
            {...pet}
          />
        ))}
      </div>
    </div>
  );
}
