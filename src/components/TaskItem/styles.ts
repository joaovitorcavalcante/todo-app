import styled, { css } from 'styled-components';

type TaskDescriptionProps = {
  isCompleted: boolean;
};

type TaskCheckIconProps = {
  isCompleted: boolean;
};

export const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 1.6rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  :last-child {
    border-bottom: none;
  }
`;

export const CheckIcon = styled.div<TaskCheckIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;

  background-color: inherit;

  ${({ isCompleted, theme }) =>
    isCompleted &&
    css`
      background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
    `}
`;

export const Description = styled.p<TaskDescriptionProps>`
  flex-grow: 1;

  margin-left: 1.2rem;

  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.166667px; /* Figma tá maluco */

  ${({ isCompleted, theme }) =>
    isCompleted &&
    css`
      color: ${theme.colors.textCompleted};
      text-decoration-line: line-through;
    `}
`;

export const RemoveIcon = styled.img`
  width: 12px;
  height: 12px;
`;
