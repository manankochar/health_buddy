import React from 'react'
import MediaCard from './MediaCard'

function Blog() {
  const spotlightTopic = {
    title: "Understanding and Managing Depression",
    description:
      "Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. It's important to recognize the symptoms and know that there are effective treatments available.",
    image: "./media/depression.png",
    link: "/depression",
  };

  return (
    <>
     <div className='container my-5 p-5'>
        <h1 className='text-center text-muted mb-5'>Our Top Blogs</h1>
        <div className='row'>
          <div className='col-md-4 mb-4 d-flex'>
            <MediaCard
              image='../media/6437.jpg'
              title='5 Ways to Manage Anxiety & Depression'
              link='/anxiety'
              content='Discover effective techniques to reduce anxiety and improve mental well-being.'
            />
          </div>
          <div className='col-md-4 mb-4 d-flex'>
            <MediaCard
              image='../media/image copy 5.png'
              title='Understanding and Managing Depression'
              link='/depression'
              content='Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities.'
            />
          </div>
          <div className='col-md-4 mb-4 d-flex'>
            <MediaCard
              image='../media/image copy 2.png'
              title='Importance of Sleep for Mental Health'
              link='/sleep'
              content='Learn why good sleep is crucial for maintaining mental health'
            />
          </div>
        </div>
        
        <div className='row'>
          <div className='col-md-4 mb-4 d-flex'>
            <MediaCard
              image='../media/med.jpg'
              title='Mindfulness Practices to Incorporate into Your Daily Routine'
              link='/routine'
              content='Start practicing mindfulness with these simple daily habits.'
            />
          </div>
          <div className='col-md-4 mb-4 d-flex'>
            <MediaCard
              image='../media/image copy 9.jpg'
              title='Understanding Mental Health: Breaking the Stigma'
              link='/stigma'
              content='Mental health has become an increasingly significant topic in today’s world, yet misconceptions and stigmas still surround it.'
            />
          </div>
          <div className='col-md-4 mb-4 d-flex'>
            <MediaCard
              image='../media/image copy 10.png'
              title='The Role of Diet and Nutrition in Mental Health'
              link='/diet'
              content='A healthy, well-balanced diet can help us think clearly and feel more alert'
            />
          </div>
        </div>
      </div>

      <div
        className="container p-5 my-5"
        style={{
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.zIndex = "10";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0px 0px rgba(0, 0, 0, 0)";
          e.currentTarget.style.zIndex = "1";
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>{spotlightTopic.title}</h2>
            <p>{spotlightTopic.description}</p>
            <a href={spotlightTopic.link} className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="col-md-4">
            <img
              src={spotlightTopic.image}
              className="img-fluid rounded"
              alt={spotlightTopic.title}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
