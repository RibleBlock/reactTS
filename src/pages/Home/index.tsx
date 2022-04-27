import React, { useState } from 'react';

import { Container, InputList, ButtonAdd } from './Home.styles';

import { Tweet } from '../../components';

export function Home() {
  const [currentName, setCurrentName] = useState<string>('');
  const [tweets, setTweets] = useState<string[]>([]);

  function createTweet() {
    setTweets([...tweets, currentName])
  }

  return (

    <Container> {/* <-- div */}
    <div>
      <InputList
        type="text"
        placeholder='Digite aqui...'
        onChange={e => setCurrentName(e.target.value)}
      />
      <ButtonAdd
        onClick={createTweet}
      >
        Adicionar Tweet
      </ButtonAdd>

      {
        tweets.map(tweet => (
            <Tweet text={tweet} />
        ))
      }
    </div>
    </Container>
  );
}
