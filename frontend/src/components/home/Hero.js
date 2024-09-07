import React from 'react';
import Button from '@mui/material/Button';

function Hero() {
  return (
    <div className='container'>
      <div className='row align-items-center' style={{ minHeight: '85vh' }}>
        <div className='col-md-6 text-center'>
          <img src='./media/1.png' width={"80%"} alt="Mental Health Illustration" />
        </div>
        <div className='col-md-6 text-center'>
          <div className='p-4 m-4'>
            <h3>YOUR MENTAL</h3>
            <h1>HEALTH MATTERS</h1>
            <div className='d-flex justify-content-center mt-3'>
              <Button color="secondary" variant="text" size="large" className='mx-2' href='/quiz'>Take a quiz</Button>
              <Button color="secondary" variant="text" size="large" className='mx-2' href='/blog'>Know more</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-muted text-center' style={{ marginTop: '-40px', paddingBottom: '20px' }}>
        <span>Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.</span>
      </div>
    </div>
  );
}

export default Hero;
