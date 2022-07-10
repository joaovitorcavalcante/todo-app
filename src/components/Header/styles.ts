import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4.8rem;

  @media (min-width: 376px) {
    margin-top: 8.1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  letter-spacing: 1rem;
  text-transform: uppercase;

  @media (min-width: 376px) {
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: 1.5rem;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  cursor: pointer;

  @media (min-width: 376px) {
    width: 2.511rem;
    height: 2.6rem;
  }
`;
