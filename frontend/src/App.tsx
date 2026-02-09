import React, {use, useEffect, useState} from "react";
import {io} from "socket.io-client"
// useState is re-render if any data change it , auto to render .
// useEffect like listining event when filled data auto using useEffect to re-render again
const socket = io('http://localhost:3000');

function App() {
  const [message, setMessage] = useState<any[]>([]); // pre-allocation with array and accepted any types object with initialise empty array
  const [input , setInput] = useState(''); // created type input as string 
  // what how understansd [variable read only, function the only way to change variable]

  useEffect (() => {
    socket.on('message_history', (history) => {
      setMessage(history);
    });

    socket.on('reveived_message', (msg) => {
      setMessage((prev) => [...prev, msg]);
    });
    return () => {
      socket.off('reveived_message');
      socket.off('message_history');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', {sender : 'User1', content : input});
    setInput('');
  }

  return (
    <div style={{ padding: '20px'}}>
      <h2>Simple Chat</h2>
      <div style={{border : '1px solid #ccc' , height: '200px' , overflow : 'scroll'}}>
        {message.map((m, i) => (
          <p key={i}><b>{m.sender}:</b>{m.content}</p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;