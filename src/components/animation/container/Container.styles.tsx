import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.black};
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: relative;
  overflow-y: hidden;
  overflow-x: visible;
`;
