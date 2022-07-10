import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 4rem;
`;

export const Content = styled.div`
  display: flex;

  padding: 1.4rem 2rem;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 376px) {
    padding: 2rem 2.4rem;
  }
`;

export const CheckIcon = styled.div`
  width: 2.2rem;
  height: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;

  background-color: inherit;

  @media (min-width: 376px) {
    width: 2.4rem;
    height: 2.2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  margin-left: 1.2rem;

  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.166667px; /* identical to box height */

  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.label};
    opacity: 1; /* Firefox */
  }

  @media (min-width: 376px) {
    margin-left: 2.4rem;

    font-size: 1.8rem;
    line-height: 1.8rem;
    letter-spacing: -0.25px; /* identical to box height */
  }
`;
