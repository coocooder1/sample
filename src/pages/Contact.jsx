import React,{useState} from 'react'
import './Contact.css'
import {ContactInfo} from '../components/ContactInfo'
import { Form } from 'react-bootstrap'
import axios from 'axios';
function Contact() {
    const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    phone:'',
    date:'',
    message: ''
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3001/api/form', formData);
    console.log('Form submitted successfully:', response.data);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '',  message: '' });
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to submit form: ' + error.message); // 输出具体错误信息
  }
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
              <Form.Control type="text" id="firsname" name="firstname" value={formData.firstname}
onChange={handleChange}
            required>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='last-name'>Last Name</Form.Label>
              <Form.Control type="text" name="lastname" value={formData.lastname}
onChange={handleChange}
            required>
              </Form.Control>              
              </div>              
            </Form.Group>
            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='email-address'>Email</Form.Label>
              <Form.Control type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
              <Form.Control type='tel' name='phone'value={formData.phone}
            onChange={handleChange}
            required >
              </Form.Control>              
              </div>              
            </Form.Group>

            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='date'>Date</Form.Label>
              <Form.Control type='date' name='date' value={formData.date}
            onChange={handleChange}
            required>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='guests-number'>Number of Guests</Form.Label>
              <Form.Control type='number' id='guests-number'>
              </Form.Control>              
              </div>              
            </Form.Group>

             <Form.Group className='row mb-3'>
              
              <Form.Label htmlFor='comments'>Comments</Form.Label>
              <Form.Control name="message"
            value={formData.message}
            onChange={handleChange}
            required>
              </Form.Control>              
                    
            </Form.Group>
            <button type='submit ' className='btn btn-success btn-lg
            '>Submit</button>

          </Form>
          
        </div>

      </div>
      
     
    </div>
  )
}

export default Contact