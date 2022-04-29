import React, { useState } from 'react';

import { Header, ListSpecialist } from './Catalog.styles';

import { Doctor } from '../../components';
import { DoctorProps } from '../../components/Doctor';

export function Catalog() {
  const [specialists, setSpecialist] = useState<DoctorProps[]>([
    { nick: 'Xar0p', specialist: 'Programmer' },
    { nick: 'Ribleblock', specialist: 'Programmer' },
    { nick: 'Gabas', specialist: 'Programmer' },
    { nick: 'mkbrito', specialist: 'Programmer' },
    { nick: 'luca', specialist: 'Programmer' },
    { nick: 'Kreppy', specialist: 'Teacher' },
    { nick: 'rafaballerini', specialist: 'Programmer' },
  ]);

  return (
    <>
      <Header>
        <h2>Specialists!</h2>
      </Header>

      <ListSpecialist>
        {
          specialists.map((atual, i) => (
            <Doctor
              key={i}
              nick={atual.nick}
              specialist={atual.specialist}
            />
          ))
        }
      </ListSpecialist>
    </>
  );
}