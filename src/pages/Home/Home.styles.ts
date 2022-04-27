import styled from "styled-components"; // Importando o styled do styled-components

export const Container = styled.div`  // Criando um componente chamado Container que é uma 'div'
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8.4rem 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  /**
    $ {} - Template strings - para usar variaveis normalmente
    () => - arrow function
    {} - Abre as chaves de novo para desestruturar o theme do ThemeProvider que foi passado no App.tsx
  */
  `;

export const InputList = styled.input`  // Criando um componente chamado InputList que é uma 'input'
width: 100%;
font-size: 1.6rem;
margin: 1rem 0;
padding: 6px 12px;
border: .1rem solid #000;
`;

export const ButtonAdd = styled.button`  // Criando um componente chamado ButtonAdd que é uma 'button'
  width: 100%;
  font-size: 1.6rem;
  padding: 6px 12px;
  color: #fff;
  background-color: ${({ theme }) => theme.COLORS.BUTTONSUBMIT};
`;
