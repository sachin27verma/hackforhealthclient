'use client'
import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';




const socket = io('https://websocket-server-sepia.vercel.app');

export default function ChatBox() {
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    socket.on('receive-message', (messageData) => {
      setChat((prevChat) => [...prevChat, messageData]);
    });

    return () => {
      socket.off('receive-message');
    };
  }, []);

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join-room', room);
      setCurrentRoom(room);
      setIsJoined(true);
    }
  };

  const sendMessage = () => {
    if (message !== '' && currentRoom !== null) {
      const messageData = { room: currentRoom, message, id: socket.id };

      socket.emit('message', messageData);
      setChat((prevChat) => [...prevChat, messageData]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        {isJoined ? (
          <>
            <h1 className="text-2xl font-semibold mb-4 text-indigo-600">Room: {currentRoom}</h1>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 mr-2"
              />
              <button
                onClick={sendMessage}
                className="bg-indigo-800 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Send
              </button>
            </div>
            <div className="overflow-y-auto max-h-96 w-full">
              <h2 className="text-lg font-semibold mb-2 text-indigo-600">Chat</h2>
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.id === socket.id ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end mb-2 max-w-xs ${msg.id === socket.id ? 'ml-auto justify-end' : 'mr-auto justify-start'}`}
                >
                  {/* <span className="bg-gray-900 text-white rounded-full p-3">
                    {msg.id === socket.id ? 'You' : 'Oth'}
                  </span> */}
                  <div className={`ml-2 p-3 rounded-lg break-words ${msg.id === socket.id ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                    {msg.message}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Room ID"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300"
            />
            <button
              onClick={joinRoom}
              className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Join Room
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
