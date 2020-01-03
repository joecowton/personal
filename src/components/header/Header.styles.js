import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/media';

const glitch = keyframes`
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -3px);
    }
    60% {
      transform: translate(3px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    to {
      transform: translate(0);
    }
  `;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  position: relative;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${props => props.theme.fonts.title};
  text-transform: uppercase;
  font-size: 9rem;
  text-decoration: none;
  text-transform: uppercase;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  letter-spacing: 5px;
  font-size: 3em;
  text-align: center;

  &::before,
  &::after {
    display: block;
    content: 'hello world';
    text-transform: uppercase;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &::after {
    color: #f0f;
    z-index: -2;
  }
  &::before {
    color: #0ff;
    z-index: -1;
  }

  &::before {
    animation: ${glitch} 0.3s linear infinite;
  }
  &::after {
    animation: ${glitch} 0.3s linear infinite;
  }

  @media ${device.md} {
    font-size: 12em;
  }
`;
