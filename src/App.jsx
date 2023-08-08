import './App.css';
import React, { useState } from 'react';
import Form from './Components/Form';

function App() {
  const arrayMembers = [
    { isim: "Burak", email: "burakcevizli@gmail.com", rol: "Fullstack Developer" },
    { isim: "Ali", email: "aliköksel@gmail.com", rol: "Frontend Developer" },
    { isim: "Veli", email: "velikaymak@gmail.com", rol: "Backend Developer" },
    { isim: "Süleyman", email: "süleymansoylu@gmail.com", rol: "Jr.Tester" },
  ];

  const [members, setMembers] = useState(arrayMembers);

  const addMembers = (member) => {
    setMembers([...members, member]);
  };


  
  return (
    <div className="App">
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.isim} ------ {member.rol}
          </li>
        ))}
      </ul>
      <Form addMembers={addMembers} />
    </div>
  );
}

export default App;
