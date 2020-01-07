import styled from 'styled-components';

export const Column = styled.div<{}>`
  height: 100%;
  transform-origin: 0 0;
  transition: 0.3s ease-out;
  background-color: ${({ color }) => color};
  transform-origin: 0 0;
  transition: 0.3s ease-out;
  opacity: ${Math.random() * (0.8 - 0.5) + 0.8};

  &:hover {
    transform: scaleX(2);
  }
`;
