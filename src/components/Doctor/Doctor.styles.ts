import styled, { css } from "styled-components";

export const Specialist = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Name = styled.p`
  margin-top: .8rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  transition: 2s;
`;

export const Container = styled.a.attrs({
  // Aqui dentro vai os atributos da <tag> //
  /* href: "https://github.com/ribleblock", */
  target: "_blank"
  // //
})`
  text-decoration: none;
  width: 20rem;
  padding: 2.2rem;
  border-radius: .7rem;
  background-color: ${({ theme }) => theme.COLORS.INFO};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover > ${Avatar} {
    transform: scale(1.2);
  }
`;
