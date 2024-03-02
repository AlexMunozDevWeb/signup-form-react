import { useState } from 'react';
// import viteLogo from '/vite.svg';
import './App.css';
import HeaderForm from './assets/components/HeaderForm';
import Card from './assets/components/Card';
import Form from './assets/components/Form';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <section className='main-container'>
        <div className="content">
          <HeaderForm />
          <Card />
          <Form />
        </div>
      </section>
    </>
  )

}

export default App
