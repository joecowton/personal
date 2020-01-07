import styled from 'styled-components/macro';

export const App = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const AppWrapper = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}

  width: 100%;
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  right: 0;
`;
