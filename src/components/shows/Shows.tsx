import React from 'react';
import * as firebase from '../../firebase/firebase';
import * as S from './Shows.styles';

interface Message {
  location: string;
  title: string;
}

export default () => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const initialQuery = firebase
      .shows()
      .orderBy('date', 'desc')
      .limit(5);

    initialQuery.onSnapshot(snapshots => {
      const messages: any = [];

      snapshots.forEach(doc => messages.push({ ...doc.data() }));

      setMessages(messages);
    });
  });

  return messages ? (
    <S.Shows>
      {messages.map((message: Message) => (
        <div key={message.location}>
          <S.Title>{message.title}</S.Title>
          <S.Location>{message.location}</S.Location>
        </div>
      ))}
    </S.Shows>
  ) : null;
};
