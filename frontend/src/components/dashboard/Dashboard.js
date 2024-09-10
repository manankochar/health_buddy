import React from 'react'
import { TestGraph } from './TestGraph'


function Dashboard() {
  return (
    <div className='container'>
        <div className='row d-flex align-item-center text-center my-5'>
            <div className='col'>
                h
            </div>
            <div className='col'>
                h
            </div>
            <div className='col'>
               h 
            </div>
            <div className='col'>
               h 
            </div>
        </div>
        <div className='row d-flex align-item-center text-center my-5'>
            <div className='col-md-8'>
            <TestGraph/>
            </div>
            <div className='col-md-4'>
                <TestGraph/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard