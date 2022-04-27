import styled from "styled-components"; // Importando o styled do styled-components

export const Container = styled.div`  // Criando um componente chamado Container que é uma 'div'
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputList = styled.input`  // Criando um componente chamado InputList que é uma 'input'
width: 100%;
font-size: 1.6rem;
padding: 6px 12px;
border: .1rem solid #000;
`;

export const ButtonAdd = styled.button`  // Criando um componente chamado ButtonAdd que é uma 'button'
  width: 100%;
  font-size: 1.6rem;
  padding: 6px 12px;
  color: #fff;
  background-color: #8257e6;
`;

export const Text = styled.p` // Criando um componente chamado Text que é uma tag 'p'
  font-size: 48px;
`;