import React from 'react';
import Header from './components/header/Header';
import { Helmet } from 'react-helmet';

import * as S from './App.styles';

function App() {
  return (
    <S.App>
      <Helmet>
        <title>Joe Cowton</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Header />
    </S.App>
  );
}

export default App;
