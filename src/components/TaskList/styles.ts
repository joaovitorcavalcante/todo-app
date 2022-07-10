import styled, { css } from 'styled-components';

type ContentFooterItemProps = {
  isActive: boolean;
};

type ContentItem = {
  isActive: boolean;
};

type ContentBodyItemProps = {
  isClicked?: boolean;
};

export const Container = styled.main``;

export const ContentBody = styled.ul`
  list-style: none;

  margin-top: 1.6rem;
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 376px) {
    margin-top: 2.4rem;
  }
`;

export const ContentBodyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 376px) {
    padding: 2rem 2.4rem;
  }
`;

export const ContentBodyItem = styled.div<ContentBodyItemProps>`
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.166667px;

  color: ${({ theme }) => theme.colors.label};

  ${({ isClicked, theme }) =>
    isClicked &&
    css`
      cursor: pointer;

      @media (min-width: 376px) {
        :hover {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    `}

  @media (min-width: 376px) {
    font-size: 1.4rem;
    line-height: 1.4rem;
    letter-spacing: -0.19px;

    display: flex;
    justify-content: space-between;
  }
`;

export const ContentItems = styled.div<ContentBodyItemProps>`
  display: none;

  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.166667px;

  color: ${({ theme }) => theme.colors.label};

  ${({ isClicked, theme }) =>
    isClicked &&
    css`
      cursor: pointer;

      @media (min-width: 376px) {
        :hover {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    `}

  @media (min-width: 376px) {
    font-size: 1.4rem;
    line-height: 1.4rem;
    letter-spacing: -0.19px;

    display: flex;
    justify-content: space-between;
  }
`;

export const ContentItem = styled.p<ContentItem>`
  font-weight: bold;
  cursor: pointer;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.labelActive};
    `}
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

  @media (min-width: 376px) {
    display: none;
  }
`;

export const ContentFooterItem = styled.p<ContentFooterItemProps>`
  font-weight: bold;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.labelActive};
    `}
`;

export const Legend = styled.p`
  margin: 4rem 0rem 7.2rem;

  font-size: 1.4rem;
  letter-spacing: -0.19px;
  text-align: center;

  color: ${({ theme }) => theme.colors.label};

  @media (min-width: 376px) {
    margin-top: 4.9rem 0 5.2rem;
    font-size: 1.4rem;
  }
`;
