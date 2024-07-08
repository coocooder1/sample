import React,{useEffect, useState} from 'react'
import { collection,getDocs,addDoc } from 'firebase/firestore';
import { db } from './firebase';
import './Form2.css'
function Form2() {
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
    <div className="grid-container">
      <p>姓名</p>
      <input className='item1' placeholder='Name...' onChange={(event) => {
        setNewName(event.target.value)
      }}></input>
      <p>信箱</p>
      <input className='item2' type='email' onChange={(event) => {
        setNewEmail(event.target.value)
      }}></input>
      <p>人數</p>
      <input className='item3' type='number' onChange={(event) => {
        setNewNumber(event.target.value)
      }}></input>
      <p>留言</p>
      <input className='item4' type='text' onChange={(event) => {
        setNewMessage(event.target.value)
      }}></input>
      <tr></tr>
      <button onClick={createForm}>Create Form</button>

      {forms.map((form) => {
        return (
          <div>
            {""}
            <h1>Name: {form.name}</h1>
            <h1>email: {form.email}</h1>
            <h2>留言區:{form.message}</h2>
          </div>
        )

      })}

  
    </div>
  )
}

export default Form2