import React, { useState } from 'react';

import { Container, Text } from './Home.styles';

import { Tweet } from '../../components';

export function Home() {
  const [currentName, setCurrentName] = useState<string>('');
  const [tweets, setTweets] = useState<string[]>([]);

  function createTweet() {
    setTweets([...tweets, currentName])
  }

  return (

    <Container>
    <div>
      <input
        type="text"
        placeholder='Digite aqui...'
        onChange={e => setCurrentName(e.target.value)}
      />
      <button
        onClick={createTweet}
        style={{
          backgroundColor: '#8257e6',
          padding: '6px 12px',
          color: '#fff'
        }}
      >
        Adicionar Tweet
      </button>

      {
        tweets.map(tweet => (
          <Text>
            <Tweet text={tweet} />
          </Text>
        ))
      }
    </div>
    </Container>
  );
}
