
import { Text } from './Tweet.styles';

type TweetProps = {
  text: string
};

export function Tweet({ text }: TweetProps) {
  return (
    <Text>{text}</Text>
  );
}