import { useNavigate, useParams } from 'react-router-dom';
import styles from './Contact.module.scss';
import pets from '../../data/pets.json';
import { useState } from 'react';
import classNames from 'classnames';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal/Modal';
import img from './assets/Ilustração-01.png';
import InputMask from 'react-input-mask';

export default function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState<boolean | null>(null);
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const [isMessageValid, setIsMessageValid] = useState<boolean | null>(null);
  const [isSubmitValid, setIsSubmitValid] = useState<boolean | null>(null);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const { isOpen, toggle } = useModal()

  const { id } = useParams();
  const pet = pets.find(petItem => petItem.id === Number(id));

  const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }

  const handleMessageInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const verifyName = () => {
    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (!nameRegex.test(name)) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  }


  const verifyPhone = () => {
    const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;

    if (!phoneRegex.test(phone)) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  }

  const verifyMessage = () => {
    const messageRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (!messageRegex.test(message)) {
      setIsMessageValid(false);
    } else {
      setIsMessageValid(true);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitLoading(true);

    verifyName();
    verifyPhone();
    verifyMessage();

    if (isNameValid && isPhoneValid && isMessageValid) {
      setIsSubmitValid(true);
      setIsSubmitLoading(true);
      setTimeout(() => {
        setIsSubmitLoading(false);
        setIsSubmitSuccessful(true);
        setTimeout(() => {
          toggle();
        }, 1000)
      }, 3000);
    } else {
      setIsSubmitValid(false);
      setIsSubmitLoading(false);
    }
  }

  const closeModal = () => {
    toggle();
    navigate('/home');
  }

  if (!pet) {
    return (
      <></>
    );
  }

  return (
    <>
      <div className={styles.main_contact__container}>
        <div className={styles.pet__container}>
          <div>
            <img className={styles.pet__img} src={pet.img} alt={`Foto ${pet.name}`} />
          </div>
          <div className={styles.pet_info__container}>
            <h3>{pet.name}</h3>
            <div className={styles.pet_info__subinfo}>
              <p>{pet.age}</p>
              <p>{pet.size}</p>
              <p>{pet.behavior}</p>
            </div>
            <address>{pet.location}</address>
          </div>
        </div>
        <div className={styles.contact_form__container}>
          <div className={styles.contact_form__title_container}>
            <p>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
          </div>
          <form
            className={styles.contact_form__input_list_container}
            onSubmit={handleSubmit}
          >
            <div className={styles.contact_form__input_container}>
              <label>
                Nome
                <input
                  type='text'
                  name='name'
                  placeholder="Insira seu nome completo"
                  onChange={handleNameInputChange}
                  onBlur={verifyName}
                  value={name}
                  className={classNames({
                    [styles.error]: isNameValid === false
                  })}
                  required
                />
              </label>
            </div>
            <div className={styles.contact_form__input_container}>
              <label>
                Telefone
                <InputMask
                  mask='(99) 99999-9999'
                  value={phone}
                  type='text'
                  placeholder="Insira seu telefone e/ou whatsapp"
                  onChange={handlePhoneInputChange}
                  onBlur={verifyPhone}
                  className={classNames({
                    [styles.error]: isPhoneValid === false
                  })}
                  required
                />
              </label>
            </div>
            <div className={styles.contact_form__input_container}>
              <label>
                Mensagem
                <textarea
                  placeholder="Escreva sua mensagem"
                  onChange={handleMessageInputChange}
                  onBlur={verifyMessage}
                  value={message}
                  className={classNames({
                    [styles.error]: isMessageValid === false
                  })}
                  required
                />
              </label>
            </div>
            <button type="submit">
              {(() => {
                if (isSubmitLoading) {
                  return <div><i className='material-icons loading-icon'>loop</i></div>;
                } else if (isSubmitSuccessful) {
                  return <i className='material-icons'>check</i>;
                } else {
                  return 'Cadastrar';
                }
              })()}
            </button>
            {isSubmitValid === false ? <small>Algo está errado, verifique se todos os campos estão corretos</small> : ''}
          </form>
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className={styles.modal__container}>
          <h1>Obrigado por fazer o bem!</h1>
          <p>Sua mensagem foi enviada para o dono do pet e em breve iremos te atualizar sobre o status da sua adoção.</p>
          <img src={img} alt="Ilustração animais" />
          <button onClick={closeModal}>Entendido</button>
        </div>
      </Modal>
    </>
  );
}