import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  ${props => props.theme.gridStyles.getColStyles(0, 0, 4)}
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  flex: 1;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 16px 0;
`;

export const MenuInner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Routes = styled.div``;

export const StyledLink = styled(NavLink)`
  padding: 4px 0;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }
`;
