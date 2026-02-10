import React, { useEffect, useState} from "react";
import {io} from "socket.io-client"
// useState is re-render if any data change it , auto to render .
// useEffect like listining event when filled data auto using useEffect to re-render again
const socket = io('http://localhost:3000');

interface Message 
{
  id : number,
  sender : string,
  content : string,
  createdAt : string,
}


function App() {
  const [message, setMessage] = useState<any[]>([]); // pre-allocation with array and accepted any types object with initialise empty array
  const [input , setInput] = useState(''); // created type input as string 
  // what how understansd [variable read only, function the only way to change variable]
  const [username , setUsername] = useState('User_' + Math.floor(Math.random() * 100));


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
    if (!input.trim()) return ;
    socket.emit('send_message', {sender : username, content : input});
    setInput('');
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>NestJS + Drizzle Chat</h2>
      <p>Logged in as: <b>{username}</b></p>
      
      <div style={{ 
        border: '1px solid #ddd', 
        height: '300px', 
        overflowY: 'scroll', 
        padding: '10px',
        background: '#f9f9f9',
        borderRadius: '8px'
      }}>
        {message.map((m) => (
          <div key={m.id} style={{ marginBottom: '10px' }}>
            <small style={{ color: '#888' }}>[{new Date(m.createdAt).toLocaleTimeString()}]</small>
            <br />
            <strong>{m.sender}:</strong> {m.content}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '10px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{ padding: '8px', width: '250px' }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 15px', marginLeft: '5px' }}>Send</button>
      </div>
    </div>
  );
}

export default App;