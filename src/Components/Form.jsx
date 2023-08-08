import React from "react";

const Form = (props) => {
    
   

    return (

        <form >

        <label htmlFor="isim">İsim</label>
        <hr />
        <input id="isim" type="text" />
        <hr />
        <label htmlFor="email">Email</label>
        <hr />
        <input id="email" type="email" />
        <hr />
        <label htmlFor="rol">Rol</label>
        <hr />
        <input id="rol" type="text" />
        <button type="submit">Gönder</button>

        </form>

    )

}


export default Form;