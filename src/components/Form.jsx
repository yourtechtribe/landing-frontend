import { useState } from 'react';
import axios from 'axios';
import './Form.css';
import {  collection, addDoc } from 'firebase/firestore';
import db from '../../firestoreconfig';

// Obtén una instancia de Firestore

export default function Form() {
    const [responseMessage, setResponseMessage] = useState("");
    const [mail, setMail] = useState('');
    const [succes,setSucces]=useState(false)

    async function submit(e) {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "mails"), {
              email: mail,
            });
            setSucces(true)
            setTimeout(()=>{
                setSucces(false)
            },5000)
            
          } catch (error) {
            console.error("Error al enviar el correo electrónico:", error);
            return false;
          }
    }

    return (
        <div id='footer' className='flex flex-col items-center justify-center'>
        <form 
        onSubmit={submit} 
        className="wrapp-formulario w-96  bg-white p-10 rounded-lg shadow-md"
    >
        <h3 className='mensaje text-center mb-4'>
            Danos tu mail para recibir más información
        </h3>
        <label className="w-full mb-4">
            <input
                placeholder='Introduce tu mail'
                type="text"
                name="email"
                autoComplete="email"
                value={mail}
                onChange={e => setMail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </label>
        <button
            type="submit"
            className="btn-enviar w-full text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
        >
            ¡Entérate primero!
        </button>
        
    </form>
    <p className={`succesMessage text-center w-72  rounded text-center p-1 mt-4 text-white font-bold ${succes ? 'succesMessageVisible' : 'succesMessageClosed'}`}>
     Gracias por tu interés, en breves nos pondremos en contacto contigo
    </p>
    </div>
    
    );
}
