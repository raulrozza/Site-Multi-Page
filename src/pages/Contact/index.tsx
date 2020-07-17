import React, { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet';

// Email send
import emailjs from 'emailjs-com';

import { FormStyle } from './styles';
// Footer
import Footer from '../../components/Footer';

// Contact image
import placeholder from '../../assets/img/logo_big.png';

interface messageStatus {
  message: string;
  class: string;
}

const Home: React.FC = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const [messageStatus, setMessageStatus] = useState<messageStatus | null>(
    null,
  );

  // Input
  const [inputErrorName, setInputErrorName] = useState(false);
  const [inputErrorEmail, setInputErrorEmail] = useState(false);
  const [inputErrorPhone, setInputErrorPhone] = useState(false);
  const [inputErrorHowMeet, setInputErrorHowMeet] = useState(false);

  const [newName, SetNewName] = useState('');
  const [newEmail, SetNewEmail] = useState('');
  const [newPhone, SetNewPhone] = useState('');
  const [newMessage, SetNewMessage] = useState('');
  const [newHowMeet, SetNewHowMeet] = useState('');

  // O event: FormEvent<HTMLFontElement> - Used for the page not to reload when the form is sent

  async function handleNewForm(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setDisabledButton(true);

    if (!newName) setInputErrorName(true);

    if (!newEmail) setInputErrorEmail(true);

    if (!newPhone) setInputErrorPhone(true);

    if (!newHowMeet) setInputErrorHowMeet(true);

    if (!newName || !newEmail || !newPhone || !newHowMeet) {
      setDisabledButton(false);
      return;
    }

    try {
      // Setting sending email
      const templateFileds = {
        reply_to: newEmail,
        from_name: newName,
        whatsapp: newPhone,
        message: newMessage,
        how_meet: newHowMeet,
      };

      await emailjs.send(
        'gmail',
        process.env.REACT_APP_EMAILJS_TEMPLATE || '',
        templateFileds,
        process.env.REACT_APP_EMAILJS_USER,
      );

      // Resetting inputs
      SetNewName('');
      SetNewEmail('');
      SetNewPhone('');
      SetNewMessage('');
      SetNewHowMeet('');

      // Resetting the error variables
      setInputErrorName(false);
      setInputErrorEmail(false);
      setInputErrorPhone(false);
      setInputErrorHowMeet(false);

      setMessageStatus({
        message: 'Mensagem enviada com sucesso!',
        class: 'sent',
      });
    } catch (error) {
      setMessageStatus({
        message: 'Houve um erro. Tente novamente mais tarde',
        class: 'error',
      });
    }
    setTimeout(() => setMessageStatus(null), 5000);
    setDisabledButton(false);
  }

  return (
    <>
      <Helmet>
        <title>Contato - Modelo</title>
        <meta name="description" content="Descrição da página." />
      </Helmet>
      <FormStyle
        hasErrorName={Boolean(inputErrorName)}
        hasErrorEmail={Boolean(inputErrorEmail)}
        hasErrorPhone={Boolean(inputErrorPhone)}
        hasErrorHowMeet={Boolean(inputErrorHowMeet)}
      >
        <main>
          <section>
            <p>
              Proin at accumsan sapien. Nulla tortor leo, rhoncus at dignissim
              ac, scelerisque a nisi.
            </p>
            <img src={placeholder} alt="Imagem de Contato" />
          </section>
          <form onSubmit={handleNewForm}>
            <header>
              <strong>Vamos marcar um horário para conversar? </strong>
              <span>
                Preencha o formulário abaixo que entraremos em contato com você.
              </span>
            </header>

            <div>
              <span>Nome*</span>
              <input
                className="name input"
                value={newName}
                onChange={(event) => SetNewName(event.target.value)}
                type="text"
              />

              <span>E-mail*</span>
              <input
                className="email input"
                value={newEmail}
                onChange={(event) => SetNewEmail(event.target.value)}
                type="email"
              />
              <span>Telefone*</span>
              <input
                className="phone input"
                value={newPhone}
                onChange={(event) => SetNewPhone(event.target.value)}
                type="tel"
              />

              <span>Mensagem</span>
              <textarea
                className="input"
                value={newMessage}
                onChange={(event) => SetNewMessage(event.target.value)}
              />
              <span>Como nos conheceu?*</span>
              <select
                className="input"
                value={newHowMeet}
                onChange={(event) => SetNewHowMeet(event.target.value)}
              >
                <option value="0">Selecione</option>
                <option value="Anúncio">Anúncio - Facebook/Instagram</option>
                <option value="Facebook">Rede Social</option>
                <option value="Campanha de E-mail">Campanha de E-mail</option>
                <option value="Matérial do Blog">Matérial do Blog</option>
                <option value="Recomentadação">Recomendação</option>
                <option value="Google">Google</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <button
              type="submit"
              className={messageStatus ? messageStatus.class : ''}
              disabled={disabledButton}
            >
              {messageStatus ? messageStatus.message : 'Enviar'}
            </button>
          </form>
        </main>
      </FormStyle>
      <Footer />
    </>
  );
};

export default Home;
