import React from 'react'
import './Signup.css'
import Label from '../components/Label'
import FormInput from '../components/FormInput'
import { useState } from 'react'
import Button from '../components/Button'
import axios from 'axios'

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const signUpData = {name, email, password};
    console.log('Submit data:', signUpData);
    // Performing form submission actions here
    axios.post('https://cyrilyoruba.juadebgabriel.com/register_admin', signUpData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div className='wrapper vh-100 vw-100 bg-primary d-lg-flex gap-0'>
      <aside className='side-hero w-25'>
      </aside>
      <main className='addUser w-75 d-flex flex-column justify-content-center align-items-center'>
        <h1>Register</h1>
        <form className='addUserForm d-flex flex-column border border-0 p-5 rounded-4 w-75 bg-light bg-opacity-25 shadow' onSubmit={handleSubmit}>
          <section className='inputGroup d-flex flex-column'>
            <Label
            text='Name'
            forAtt='user-name'
            />
            <FormInput
            type='text'
            id='user-name'
            placeholder='Enter Name'
            name='User Name'
            value={name}
            styleClass='bg-white border border-0 rounded-2 py-2 px-3 my-3'
            changeFunct={e => setName(e.target.value)}
            />
          </section>
          <section className='inputGroup d-flex flex-column'>
            <Label
            text='Email Address'
            forAtt='user-email'
            />
            <FormInput
            type='email'
            id='user-email'
            placeholder='Enter Email Address'
            name='User Email'
            value={email}
            styleClass='bg-white border border-0 rounded-2 py-2 px-3 my-3'
            changeFunct={e => setEmail(e.target.value)}
            />
          </section>
          <section className='inputGroup d-flex flex-column'>
            <Label
            text='Password'
            forAtt='user-password'
            />
            <FormInput
            type='password'
            id='user-password'
            placeholder='Enter Password'
            name='User password'
            value={password}
            styleClass='bg-white border border-0 rounded-2 py-2 px-3 my-3'
            changeFunct={e => setPassword(e.target.value)}
            />
          </section>
          <section className='inputGroup d-flex flex-column'>
            <Label
            text='Confirm Password'
            forAtt='confirm-password'
            />
            <FormInput
            type='password'
            id='confirm-password'
            placeholder='Confirm Password'
            value={confirmPassword}
            styleClass='bg-white border border-0 rounded-2 py-2 px-3 my-3'
            changeFunct={e => setConfirmPassword(e.target.value)}
            />
          </section>
          <section className='inputGroup d-flex flex-column'>
            <Button type='submit' text='Create Account' styleClass='bg-primary text-light border border-0 rounded-2 py-2 px-3 my-2'/>
          </section>
          {/* <p>{name}, {email}, {password}, {confirmPassword}</p>; */}
        </form>
      </main>
    </div>
  )
}

export default Signup
