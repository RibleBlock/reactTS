import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header, InputReq, Button, ListSpecialist } from './Catalog.styles';

import { Doctor } from '../../components';
import { DoctorProps } from '../../components/Doctor';

type User = {
  login: string;
  name: string;
  location: string;
  message?: string;
};

export function Catalog() {
  const [nick, setNick] = useState<string>('');
  const [specialists, setSpecialist] = useState<DoctorProps[]>([]);

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${nick}`);
      const data = await response.json() as User;

      if(response.status === 404) throw new Error('Usuário nao encontrado.');

      setSpecialist([{
        nick: data.login,
        name: data.name,
        location: data.location
      }, ...specialists])
    } catch (error) {
      console.warn('ERROR!!  ' + error);
    }
  }

  return (
    <>
      <Header>
        <h2>Specialists!</h2>
      </Header>

      <InputReq
        type="text"
        onChange={e => setNick(e.target.value)}
      />
      <Button onClick={e => fetchData()}>
        ENVIAR
      </Button>

      <ListSpecialist>
        {
          specialists.map((atual, i) => (
            <Doctor
              key={i}
              nick={atual.nick}
              name={atual.name}
              location={atual.location}
            />
          ))
        }
      </ListSpecialist>
    </>
  );
}