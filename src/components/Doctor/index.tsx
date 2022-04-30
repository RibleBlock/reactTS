import {
  Container,
  Avatar,
  Name,
  Specialist
} from "./Doctor.styles";

export type DoctorProps = {
  nick: string;
  name: string;
  location: string;
};

export function Doctor({ nick, name, location }: DoctorProps) {
  return (
    <Container href={`https://github.com/${nick}`}>
      <Avatar src={`https://github.com/${nick}.png`} />
      <Name>
        { nick }
      </Name>

      <Specialist>
        { name }
      </Specialist>
      <Specialist>
        { location }
      </Specialist>
    </Container>
  );
}