import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Importa os icones
import { AiFillEye, AiFillBook, AiFillSketchCircle } from 'react-icons/ai';
import { IconType } from 'react-icons';

import Footer from '../../components/Footer';

import { Cover, Purpose, Info, InfoItem, Team, TeamItem } from './styles';

// Set states (need the "interface" due to typescript)
interface teamInfo {
  name: string;
  job: string;
  image: string;
}

interface enterpriseInfo {
  title: string;
  Icon: IconType;
  text: string;
}

interface aboutResponse {
  missao: string;
  visao: string;
  valores: string;
}

const About: React.FC = () => {
  const [team, setTeam] = useState<teamInfo[]>([]);
  const [info, setInfo] = useState<enterpriseInfo[]>([]);

  // Receive the json information
  useEffect(() => {
    fetch('/data/team.json')
      .then((response) => response.json())
      .then((response) => {
        setTeam(response);
      });
  }, []);

  useEffect(() => {
    fetch('/data/about.json')
      .then((response) => response.json())
      .then((response: aboutResponse) => {
        setInfo([
          {
            title: 'Visão',
            Icon: AiFillEye,
            text: response.missao,
          },
          {
            title: 'Missão',
            Icon: AiFillBook,
            text: response.visao,
          },
          {
            title: 'Valores',
            Icon: AiFillSketchCircle,
            text: response.valores,
          },
        ]);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Quem Somos - Modelo</title>
        <meta name="description" content="Descrição da página." />
      </Helmet>
      <Cover>
        <div>
          <strong>QUEM SOMOS?</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            imperdiet nec erat eget ultricies. Integer massa quam, blandit vel
            augue vitae, lacinia feugiat sem. Vivamus pharetra lectus at sapien
            vestibulum, a auctor odio euismod.
          </p>
        </div>
      </Cover>
      <Purpose>
        <main>
          <strong>Propósito</strong>
          <p>
            Integer ac tortor elementum, tristique purus quis, consectetur sem.
            In hac habitasse platea dictumst. Sed a massa sem. Curabitur
            lobortis vestibulum risus, congue ultrices magna dignissim ac.
          </p>
        </main>
      </Purpose>
      <Info>
        {/* List mission, vision, values */}
        <main>
          <div>
            {info.map((item) => (
              <InfoItem key={item.title}>
                <item.Icon size={25} />
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </InfoItem>
            ))}
          </div>
        </main>
      </Info>
      <Team>
        {/* List the members from Caltech */}
        <main>
          <h1>NOSSO TIME</h1>
          <section>
            {team.map((member) => (
              <TeamItem
                className="container"
                src={member.image}
                key={member.name}
              >
                <div title={member.name} className="image" />
                <div className="overlay">
                  <strong>{member.job}</strong>
                  <span>{member.name}</span>
                </div>
              </TeamItem>
            ))}
          </section>
        </main>
      </Team>
      <Footer />
    </>
  );
};

export default About;
