import React from 'react'
import Anxiety from './Anxiety'
import Sleep from './Sleep'
import MediaCard from './MediaCard'



function Blog() {
  return (
    <div className='container my-5 p-5'>
      <h1 className='text-center text-muted mb-5'>Our Top Blogs</h1>
      <div className='d-flex gap-5 justify-content-between my-5'>
      <MediaCard
      image='.media/med.png'
      title='yo'
      link='/anxiety'
      content='dihi'
      />
      <MediaCard
      image='.media/med.png'
      title='yoIKJHI'
      link='/anxiety'
      content='dihi'
      />
      
      <MediaCard
      image='.media/med.png'
      title='yo'
      link='/blog/anxiety'
      content='dihi'
      />
      </div>

      <div className='d-flex gap-5 justify-content-between my-5'>
      <MediaCard
      image='.media/med.png'
      title='yo'
      link='/blog/anxiety'
      content='dihi'
      />
      <MediaCard
      image='.media/med.png'
      title='yo'
      link='/blog/anxiety'
      content='dihi'
      />
      
      <MediaCard
      image='.media/med.png'
      title='yo'
      link='/blog/anxiety'
      content='dihi'
      />
      </div>

    </div>
  )
}

export default Blog