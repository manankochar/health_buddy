import React from 'react';

const articles = [
    {
        id: 1,
        title: "5 Ways to Manage Anxiety & Depression",
        excerpt: "Discover effective techniques to reduce anxiety and improve mental well-being.",
        image: "./media/anxiety1.png",
        link: "/anxiety"
    },
    {
        id: 2,
        title: "Importance of Sleep for Mental Health",
        excerpt: "Learn why good sleep is crucial for maintaining mental health.",
        image: "./media/sleep.png",
        link: "/sleep"
    },
    {
        id: 3,
        title: "Mindfulness Practices to Incorporate into Your Daily Routine",
        excerpt: "Start practicing mindfulness for simple daily habits.",
        image: "./media/med1.png",
        link: "/mindfulness-practices"
    }
];

function FeaturedArticles() {
    return (
        <div className="container my-5">
            <h2 className="text-center text-muted mb-4">Featured Articles</h2>
            <div className="row">
                {articles.map(article => (
                    <div className="col-md-4" key={article.id}>
                        <div className="card mb-4 shadow-sm"
                            style={{
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                cursor: 'default'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                                e.currentTarget.style.zIndex = '10';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.zIndex = '1';
                            }}>
                            <img 
                                src={article.image} 
                                className="card-img-top" 
                                alt={article.title} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.excerpt}</p>
                                <a href={article.link} className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedArticles;
