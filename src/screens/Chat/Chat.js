import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../../firebase';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = firestore.collection('chatMessages')
      .orderBy('timestamp')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(data);
      });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      await firestore.collection('chatMessages').add({
        text: newMessage,
        timestamp: new Date(),
        sender: auth.currentUser.uid,
       
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map(message => (
          <div
            key={message.id}
            className={`message ${message.sender === auth.currentUser.uid ? 'sent' : 'received'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
