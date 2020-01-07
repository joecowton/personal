import React from 'react';
import * as S from './Column.styles';

interface Props {
  color: string;
  length: number;
  top: number;
  active: boolean;
}

export default ({ color, length, top, active }: Props) => {
  const multiplier = active ? 5 : 1;

  const columnStyles = {
    width: `${(top / 10) * (length * multiplier)}%`
  };

  return <S.Column style={columnStyles} color={color}></S.Column>;
};
