import styled from "styled-components";

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

export const ListSpecialist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
`;