import styled, { css } from 'styled-components';

type ContentFooterItemProps = {
  isActive: boolean;
};

export const Container = styled.main``;

export const ContentBody = styled.ul`
  list-style: none;

  margin-top: 1.6rem;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentBodyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ContentBodyItem = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.166667px;

  color: ${({ theme }) => theme.colors.label};
`;

export const ContentFooter = styled.footer`
  display: flex;
  justify-content: space-around;

  padding: 1.5rem 8rem;
  margin-top: 1.6rem;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.colors.shadow};

  font-size: 1.4rem;
  line-height: 1.4rem;
  letter-spacing: -0.194444px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.label};
`;

export const ContentFooterItem = styled.p<ContentFooterItemProps>`
  font-weight: bold;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.labelActive};
    `}
`;
