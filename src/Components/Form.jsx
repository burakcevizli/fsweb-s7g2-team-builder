import React, { useState } from "react";

const Form = (props) => {
  const [isim, setİsim] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    if (id === "isim") {
      setİsim(value);
    } else if (id === "email") {
      setEmail(value);
    } else {
      setRol(value);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newMember = { isim: isim, email: email, rol: rol };
    props.addMembers(newMember);

    setİsim("");
    setEmail("");
    setRol("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="isim">İsim</label>
      <hr />
      <input id="isim" type="text" value={isim} onChange={onChangeHandler} />
      <hr />
      <label htmlFor="email" value={email}>
        Email
      </label>
      <hr />
      <input id="email" type="email" onChange={onChangeHandler} />
      <hr />
      <label htmlFor="rol">Rol</label>
      <hr />
      <input id="rol" type="text" onChange={onChangeHandler} />
      <button type="submit">Gönder</button>
    </form>
  );
};

export default Form;
