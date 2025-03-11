import React from 'react'
import Label from '../components/Label'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  // const [formData, setFormData] = useState({
  //   password: 'hello',
  //   email: 'hello@mail.com'
  // });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const logInData = {email, password};
    console.log('Submit data:', logInData);
    // Performing form submission actions here
  };
  return (
    <div className='wrapper vh-100 vw-100 bg-primary d-lg-flex gap-0'>
      <aside className='side-hero w-25'>
      </aside>
      <main className='addUser w-75 d-flex flex-column justify-content-center align-items-center'>
        <h1>Login</h1>
        <form className='addUserForm d-flex flex-column border border-0 p-5 rounded-4 w-75 bg-light bg-opacity-25 shadow' onSubmit={handleSubmit}>
          <section className='inputGroup d-flex flex-column'>
            <Label
            text='Email Address'
            forAtt='user-email'
            />
            <FormInput
            type='email'
            id='user-email'
            placeholder='test@mail.com'
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
            <Button
            type='submit'
            text='Login'
            styleClass='bg-primary text-light border border-0 rounded-2 py-2 px-3 my-2'/>
          </section>
        </form>
        <Link
        className='align-self-lg-start mt-3 ms-3 fw-bold text-decoration-none'
        to='/sign-up'>
          Register here
        </Link>
      </main>
    </div>
  )
}

export default Login
