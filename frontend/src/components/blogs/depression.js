import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Depression1 = {
    title: "Importance of depression",
    image: "./media/image copy 5.png",
    link: "/topics/sleep"
}
const Depression2 = {
    title: "Ways To Improve depression",
    image: "./media/image copy 6.png",
    link: "/topics/sleep-disorders"
}
const Depression3 = {
    title: "Physical health benefits",
    image: "./media/image copy 7.png",
    link: "/topics/"
}

function Depression() {
    return (
        <div class="container my-5">
            <h1 class="text-center section-heading text-muted">Understanding and Managing Depression</h1>


            <div class="row content-section p-5">
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <h3>What is Depression?</h3>
                        <p>Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. It's important to recognize the symptoms and know that there are effective treatments available.

                        </p>
                        <p>
                        It can lead to a variety of emotional and physical problems. While it's normal to feel sad sometimes, depression requires that symptoms occur for most of the day, nearly every day, for more than two weeks. </p>
                    </div>
                </div>
                <div class="col-md-6 image-container">
                    <img src={Depression1.image} alt="Sleep" class="img-fluid" style={{ maxHeight: '500px', marginTop: '20px', marginLeft: '50px' }} />
                </div>
            </div>


            <div class="row content-section">
                <div class="col-md-6 image-container">
                    <img
                        src={Depression2.image}
                        className="img-fluid rounded"
                        alt={Depression2.title}
                        style={{ maxHeight: '700px', objectFit: 'cover', maxWidth: '500px', marginTop: '50px', marginLeft: '70px' }}
                    />


                </div>
                <div class="col-md-6 d-flex align-items-center mt-4">
                    <div>
                        <h3>Ways To Manage Depression</h3>
                        <p>
                            <ul>
                                <li>Self-care: Try to keep up with activities you enjoy, eat regular meals, and get enough sleep.</li>
                                <li>
                                Connect with others: Talk to people you trust about how you're feeling, and maintain connections with friends and family.
                                </li>
                                <li>Seek professional help: A medical professional can help you find the right treatment, which may include psychotherapy, medication, or brain stimulation therapy</li>
                                <li>
                                Be patient: It can take time to see results from treatment, and you may need to try more than one approach.
                                </li>
                                <li>
                                Avoid substances: Be mindful of your alcohol consumption. Alcohol is a depressant and can be a potent trigger to low mood, especially in individuals prone to depression. 

                                </li>
                            </ul>
                                </p>
                        
                    </div>
                </div>
            </div>


            <div class="row content-section my-5">
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <h3>Symptoms and patterns</h3>
                        <p>
                        During a depressive episode, a person experiences a depressed mood (feeling sad, irritable, empty). They may feel a loss of pleasure or interest in activities.
                        </p>
                        <p>
                        Other symptoms are also present, which may include:


                            <ul>
                                <li>poor concentration

                                </li>
                                <li>feelings of excessive guilt or low self-worth</li>
                                <li>hopelessness about the future</li>
                                <li>thoughts about dying or suicide</li>
                                <li>feeling very tired or low in energy.</li>

                            </ul>
                            
                        </p>
                    </div>
                </div>
                <div class="col-md-6 image-container">

                    <img
                        src={Depression3.image}
                        className="img-fluid rounded"
                        alt={Depression3.title}
                        style={{ maxHeight: '400px', objectFit: 'cover', marginLeft: '50px', marginTop: '15px' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Depression;