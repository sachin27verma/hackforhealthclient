'use client';
import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const socket = io('http://localhost:8000');

export default function ChatBox() {
  const [room, setRoom] = useState('');
  const [code, setCode] = useState(false);
  const [roomcode, setRoomCode] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = async () => {
    try {
      // Generate a 6-digit random code
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      // Send the code via email
      await fetch('/api/sendcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: "Secret Room Code for Chat",
          toEmail: 'sk.sachin9128@gmail.com',
          otpText: result,
        }),
      });

      setRoomCode(result);
      setCode(true);

    } catch (error) {
      console.log("Error sending the room code", error);
    }
  };

  useEffect(() => {
    socket.on('receive-message', (messageData) => {
      setChat((prevChat) => [...prevChat, messageData]);
      setMessageCount((prevCount) => prevCount + 1);
    });

    socket.on('typing', (status) => {
      setIsTyping(status);
    });

    return () => {
      socket.off('receive-message');
      socket.off('typing');
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
      socket.emit('typing', false);
    }
  };

  const endChat = () => {
    socket.emit('leave-room', currentRoom);
    setRoom('');
    setRoomCode('');
    setMessage('');
    setChat([]);
    setCurrentRoom(null);
    setIsJoined(false);
    setCode(false);
    setMessageCount(0);
    setIsTyping(false);
  };

  const handleTyping = () => {
    if (message !== '') {
      socket.emit('typing', true);
    } else {
      socket.emit('typing', false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-[#00bfae] to-[#004d99] min-h-screen">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleClick}
            className="bg-[#00897b] text-white p-3 rounded-md font-bold hover:bg-[#00796b] transition duration-200"
          >
            {code ? 'Regenerate Room Code' : 'Get Room Code'}
          </button>

          {code && (
            <div className="mt-3">
              <span className="inline-block text-center text-white bg-[#6a1b9a] p-1 rounded-md">
                {roomcode}
              </span>
              <span className="ml-2 text-gray-600">Copy and paste the code</span>
            </div>
          )}
        </div>

        

        {!isJoined && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Room ID"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-[#3b82f6] mb-2"
            />
            <button
              onClick={joinRoom}
              className="w-full bg-[#3b82f6] text-white py-2 rounded-lg hover:bg-[#2563eb] transition duration-200"
            >
              Join Room
            </button>
          </div>
        )}
      </div>


      {isJoined && (
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-semibold mb-4 text-[#3b82f6]">Room: {currentRoom}</h1>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                handleTyping();
              }}
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:border-[#3b82f6] mr-2"
            />
            <button
              onClick={sendMessage}
              className="bg-[#1d4ed8] text-white py-2 px-4 rounded-lg hover:bg-[#1e40af] transition duration-200"
            >
              Send
            </button>
          </div>
          <div className="overflow-y-auto max-h-96 w-full">
            <h2 className="text-lg font-semibold mb-2 text-[#3b82f6]">Chat ({messageCount})</h2>
            {chat.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.id === socket.id ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-end mb-2 max-w-xs ${msg.id === socket.id ? 'ml-auto justify-end' : 'mr-auto justify-start'}`}
              >
                <div
                  className={`p-3 rounded-lg break-words ${msg.id === socket.id ? 'bg-[#4f46e5] text-white' : 'bg-[#e5e7eb] text-[#1f2937]'}`}
                >
                  {msg.message}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="text-gray-500">Someone is typing...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
