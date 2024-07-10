import React,{useState} from 'react'
import './Contact.css'
import {ContactInfo} from '../components/ContactInfo'
import { Form } from 'react-bootstrap'

import { collection,addDoc } from 'firebase/firestore';

import { db } from '../firebase';
function Contact() {
  
  const [newfirstname, setFirstName] =useState("")
  const [newlastname, setLastName] = useState("")
  const [newemail, setEmail] = useState("")
  const [newphone, setPhone] = useState("")
  const [newdata, setData] = useState("")
  const [newmessage, setMessage] = useState("")
  const formssCollectionRef = collection(db,"forms1")


  const createForm = async () => {
    await addDoc(formssCollectionRef, {firstname: newfirstname,
      lastname: newlastname, email:newemail, number:newphone, data:newdata, message:newmessage})
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    if (newfirstname.trim() === '' || newlastname.trim() === '' || newemail.trim() === '' || newphone.trim() === '') {
      alert('請輸入有效內容！');
      return;
    }
    // 在這裡可以處理表單提交的邏輯，比如發送請求或者其他操作
    console.log('提交的值：', newfirstname);
    setFirstName(''); // 清空輸入框
  };



  
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Contact</h1>

        </div>
      </header>
      <div className='container my-5'>
        <div className='col-lg-12 d-flex align-item-center justify-content-center'>
          <ContactInfo/>
        </div>
        <div className='col-lg-12 d-flex justify-content-center'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='first-name'>First Name</Form.Label>
              <Form.Control type="text"   onChange={(event) => {
        setFirstName(event.target.value)
      }}>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='last-name'>Last Name</Form.Label>
              <Form.Control type="text"   onChange={(event) => {
        setLastName(event.target.value)
      }}>
              </Form.Control>              
              </div>              
            </Form.Group>
            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='email-address'>Email</Form.Label>
              <Form.Control type="email"
            name="email"
            onChange={(event) => {
        setEmail(event.target.value)
      }}>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
              <Form.Control type='tel' name='phone' onChange={(event) => {
        setPhone(event.target.value)
      }}>
              </Form.Control>              
              </div>              
            </Form.Group>

            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='date'>Date</Form.Label>
              <Form.Control type='date' name='date' onChange={(event) => {
        setData(event.target.value)
      }}>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='guests-number'>Number of Guests</Form.Label>
              <Form.Control type='number' id='guests-number'>
              </Form.Control>              
              </div>              
            </Form.Group>

             <Form.Group className='row mb-3'>
              
              <Form.Label htmlFor='comments'>備註</Form.Label>
              <Form.Control name="message"
            onChange={(event) => {
        setMessage(event.target.value)
      }}>
              </Form.Control>              
                    
            </Form.Group>
            </Form>
            

          
          
        </div>
        <button className='btn' type='submit ' onClick={createForm}>Submit</button>

      </div>
      
     
    </div>
  )
}

export default Contact