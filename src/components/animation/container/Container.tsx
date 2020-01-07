import React from 'react';
import Row from '../row/Row';

import * as S from './Container.styles';

export default () => {
  const [top, setTop] = React.useState(0);
  const [active, setActive] = React.useState(true);
  const topRef = React.useRef(top);
  topRef.current = top;

  React.useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        if (topRef.current < 80) setTop(topRef.current + 0.1);
        else setTop(0);
      }, 50);
      return () => clearTimeout(timer);
    }
  });

  return (
    <S.Wrapper onClick={() => setActive(!active)}>
      <Row height={70} top={top} opacity={1}></Row>
      <Row height={10} top={top - 10} opacity={0.8}></Row>
    </S.Wrapper>
  );
};
