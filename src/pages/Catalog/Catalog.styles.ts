import styled, { css } from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.TEXT_SECUNDARY};

  > h2::after {
    content: '';
    display: block;
    width: 100%;
    height: .2rem;
    margin: .8rem 0;
    background-color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  }

  > h2 {
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  }
`;

export const formComp = css`
  display: block;
  padding: 0.5rem;
  font-size: 1.4rem;
  margin: 1rem auto;

  & + button {

  }
  `;

export const InputReq = styled.input`${formComp}`;
export const Button = styled.button`${formComp}`;

export const ListSpecialist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
`;