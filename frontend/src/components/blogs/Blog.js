import React from 'react'
import Anxiety from './Anxiety'
import Sleep from './Sleep'
import Depression from './depression'
import MediaCard from './MediaCard'
import Diet from './Diet'
import Stigma from './stigma'







function Blog() {
  return (

    <div className='container my-5 p-5'>
      <h1 className='text-center text-muted mb-5'>Our Top Blogs</h1>
      <div className='d-flex gap-5 justify-content-between my-5'>
      <MediaCard
      image='../media/6437.jpg'
      title='5 Ways to Manage Anxiety & Depression'
      link='/anxiety'
      content='Discover effective techniques to reduce anxiety and improve mental well-being.'
      />
      <MediaCard
      image='../media/image copy 5.png'
      title='Understanding and Managing Depression'
      link='/depression'
      content='Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. '
      />
      
      <MediaCard
      image='../media/image copy 2.png'
      title='Importance of Sleep for Mental Health'
      link='/sleep'
      content='Learn why good sleep is crucial for maintaining mental health'
      />
        </div>
      <div className='d-flex gap-5 justify-content-between my-5'>
      <MediaCard
      image='../media/med.jpg'
      title='Mindfulness Practices to Incorporate into Your Daily Routine'
      link='/anxiety'
      content='Start practicing mindfulness with these simple daily habits.'
      />
      <MediaCard
      image='../media/image copy 9.jpg'
      title='Understanding Mental Health: Breaking the Stigma'
      link='/stigma'
      content='Mental health has become an increasingly significant topic in today’s world, yet misconceptions and stigmas still surround it. '
      />
      
      <MediaCard
      image='../media/image copy 10.png'
      title='The Role of Diet and Nutrition in Mental Health'
      link='/diet'
      content='A healthy, well-balanced diet can help us think clearly and feel more alert'
      />
      </div>

    
    </div>
  )
}

export default Blog