import {
  Container,
  Avatar,
  Name,
  Specialist
} from "./Doctor.styles";

export type DoctorProps = {
  nick: string;
  specialist: string;
};

export function Doctor({ nick, specialist }: DoctorProps) {
  return (
    <Container href={`https://github.com/${nick}`}>
      <Avatar src={`https://github.com/${nick}.png`} />
      <Name>
        { nick }
      </Name>

      <Specialist>
        { specialist }
      </Specialist>
    </Container>
  );
}