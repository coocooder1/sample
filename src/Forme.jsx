import React, {useState, useEffect} from 'react'
import './Forme.css'

import { collection,getDocs,addDoc } from 'firebase/firestore';

import { db } from './firebase';

function Forme() {
  const [newName, setNewName] = useState("");
  const [newemail, setNewEmail] = useState('');
  const [newnumber, setNewNumber] = useState('');
  const [newmessage, setNewMessage] = useState('');
  const [forms,setForms] =useState([])
  const formsCollectionRef = collection(db,"forms")

  const createForm = async () => {
    await addDoc(formsCollectionRef, {name: newName, email:newemail, number:newnumber,message:newmessage})
  };


  useEffect(() => {
    const getForms= async () => {
      const data = await getDocs(formsCollectionRef);
      setForms(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    
    };
    getForms();
  })
  
  
   
  return (
    <div className='form'>
      <div className='container mt-5'>
        <h3>表單</h3>
          <input type='text'  placeholder='Your Name' onChange={(event) => {
        setNewName(event.target.value)
      }}></input>
          <input type='email'  placeholder='Email' onChange={(event) => {
        setNewEmail(event.target.value)
      }}></input>
          <input type='text' placeholder='Phone Number' onChange={(event) => {
        setNewNumber(event.target.value)
        }}></input>
          <input type='text' placeholder='Enter Your Message' onChange={(event) => {
        setNewMessage(event.target.value)
      }}></input>
          <tr></tr>
      <button className='button' onClick={createForm}>Create Form</button>
    


              

        {forms.map((form) => {
        return (
          <div className='message1'>
           <div className='name'>
   
       
            <h2>留言區:
              <div className='message2'>{form.message}</div>
              </h2>
            </div>
          </div>
        )

      })}
      </div>            
    </div>
    
  )
}

export default Forme