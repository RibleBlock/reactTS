import {
  Container,
  Avatar,
  Name,
  Specialist
} from "./Doctor.styles";

export function Doctor() {
  return (
    <Container>
      <Avatar src="https://github.com/ribleblock.png" />
      <Name>
        Riquelme Aparecido
      </Name>

      <Specialist>
        Programmer
      </Specialist>
    </Container>
  );
}