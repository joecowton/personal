import React from 'react';
import * as S from './Row.styles';
import Column from '../column/Column';

const colors: string[] = ['white', 'black', 'white', 'black'];

function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface Props {
  height: number;
  top: number;
  opacity: number;
}

export default ({ height, top, opacity }: Props) => {
  const length = Math.round(Math.random() * 8);

  const [active, setActive] = React.useState();

  const shuffledColors = shuffle(colors);
  const slicedColors = shuffledColors.slice(length);

  const rowStyles = {
    top: `${top * 10}px`,
    height: `${height * 10}px`,
    opacity: opacity
  };

  return (
    <S.Row
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={rowStyles}
    >
      {slicedColors.map((color, i) => (
        <Column
          key={i}
          color={color}
          length={length + 1}
          active={active}
          top={top}
        />
      ))}
    </S.Row>
  );
};
