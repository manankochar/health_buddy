import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const sleep1 = {
    title: "Importance of Sleep",
    image: "./media/image copy 2.png",
    link: "/topics/sleep"
}
const sleep2 = {
    title: "Ways To Improve Both Sleep and Mental Health",
    image: "./media/image copy 4.png",
    link: "/topics/sleep-disorders"
}
const sleep3 = {
    title: "Physical health benefits",
    image: "./media/image copy 4.jpg",
    link: "/topics/sleep-and-mental-health"
}

function Sleep() {
    return (
        <div class="container my-5">
            <h1 class="text-center section-heading text-muted">Importance of Sleep for Mental Health</h1>


            <div class="row content-section p-5">
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <h3>Sleep and Mental Health</h3>
                        <p>Brain activity fluctuates during sleep, increasing and decreasing during different sleep stages that make up the sleep cycle. Each stage plays a role in brain health, allowing activity in different parts of the brain to ramp up or down and enabling better thinking, learning, and memory. Research has also uncovered that brain activity during sleep has profound effects on emotional and mental health.
                        </p>
                        <p>
                            The way that sleep and mental health are intertwined becomes even more apparent by reviewing what is known about how sleep is tied to a number of specific mental health conditions and neurodevelopmental disorders.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 image-container">
                    <img src={sleep1.image} alt="Sleep" class="img-fluid" style={{maxHeight: '300px',marginTop:'20px',marginLeft: '50px'}}/>
                </div>
            </div>


            <div class="row content-section">
                <div class="col-md-6 image-container">
                    <img
                        src={sleep2.image}
                        className="img-fluid rounded"
                        alt={sleep2.title}
                        style={{ maxHeight: '700px', objectFit: 'cover',maxWidth: '500px',marginTop: '80px' }}
                    />


                </div>
                <div class="col-md-6 d-flex align-items-center mt-5">
                    <div>
                        <h3>Ways To Improve Both Sleep and Mental Health</h3>
                        <p>This multifaceted relationship between sleep and mental health makes for complex connections between sleep and psychiatric disorders, but it also means that treatment for both issues can go hand-in-hand. Steps to improve sleep may even form part of a preventive mental health strategy.
                        </p>
                        <p>
                            Cognitive Behavioral Therapy:
                            <ul>
                                <li>
                                    Cognitive behavioral therapy (CBT) describes a type of counseling known as talk therapy. It works by examining patterns of thinking and working to reformulate negative thoughts in new ways.
                                </li>
                                <li>A large clinical trial also showed that CBT-I could reduce symptoms of many mental health conditions, improving emotional well-being and decreasing psychotic episodes. </li>
                            </ul>
                            Improve Sleep Habits:
                            <ul>
                                <li>
                                    Having a set bedtime and maintaining a steady sleep schedule

                                </li>
                                <li>Dimming lights and putting away electronic devices for an hour or more before bed
                                </li>
                                <li>Maximizing comfort and support from your mattress, pillows, and bedding</li>
                            </ul>

                        </p>
                    </div>
                </div>
            </div>


            <div class="row content-section my-5">
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <h3>Physical health benefits</h3>
                        <p>
                            Heart and circulatory system:
                            <ul>
                                <li>When you fall asleep and enter non-REM sleep, your blood pressure and heart rate fall. During sleep, your parasympathetic system controls your body, and your heart does not work as hard as it does when you are awake. During REM sleep and when waking, your sympathetic system is activated, increasing your heart rate and blood pressure to the usual levels when you are awake and relaxed. A sharp increase in blood pressure and heart rate upon waking has been linked to angina, or chest pain, and heart attacks.

                                </li>
                                <li>When you sleep, your body repairs and regenerates damaged cells, builds bone and muscle
                                </li>
                            </ul>
                            Metabolism and sleep:
                            <ul>
                                <li>The way your body handles fat varies according to various circadian clocks, including those in the liver, fat, and muscle. For example, the circadian clocks make sure that your liver is prepared to help digest fats at appropriate times. Your body may handle fat differently if you eat at unusual times.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="col-md-6 image-container">

                <img
                        src={sleep3.image}
                        className="img-fluid rounded"
                        alt={sleep3.title}
                        style={{ maxHeight: '400px', objectFit: 'cover',marginLeft: '50px',marginTop: '15px' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sleep;