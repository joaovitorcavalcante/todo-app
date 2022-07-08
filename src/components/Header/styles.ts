import styled from 'styled-components';

export const Container = styled.header`
  max-width: 325px;
  margin-top: 4.8rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  letter-spacing: 1 rem;
  text-transform: uppercase;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
