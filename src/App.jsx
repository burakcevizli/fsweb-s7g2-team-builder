import './App.css';
import React, { useState } from 'react';
import Form from './Components/Form';

function App() {
  const arrayMembers = [
    { id: 1, isim: "Burak", email: "burakcevizli@gmail.com", rol: "Fullstack Developer" },
    { id: 2, isim: "Ali", email: "aliköksel@gmail.com", rol: "Frontend Developer" },
    { id: 3, isim: "Veli", email: "velikaymak@gmail.com", rol: "Backend Developer" },
    { id: 4, isim: "Süleyman", email: "süleymansoylu@gmail.com", rol: "Jr.Tester" },
  ];

  const [members, setMembers] = useState(arrayMembers);

  const addMembers = (member) => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <ul>
        {members.map((member) => (
          <ol key={member.id}>
            {member.isim} ------ {member.rol}
          </ol>
        ))}
      </ul>
      <Form addMembers={addMembers} />
    </div>
  );
}

export default App;
