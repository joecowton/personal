import React from 'react';
import Animation from './components/animation/container/Container';
import { Helmet } from 'react-helmet';

import * as S from './App.styles';
import Menu from './components/menu/Menu';

function App() {
  return (
    <S.App>
      <Helmet>
        <title>Joe Cowton</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <S.AnimationWrapper>
        <Animation />
      </S.AnimationWrapper>
      <S.AppWrapper>
        <Menu />
      </S.AppWrapper>
    </S.App>
  );
}

export default App;
