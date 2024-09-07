import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const stigma1 =
{
    title: "What is ",
    image: "../media/image copy 11.png",
    link: "diet"
}
const stigma2 = {
    title: "What is dieting?",
    image: "../media/image copy.png",
    link: "/topics/managing-anxiety"
}
const stigma3 = {
    title: "How to Manage diet?",
    image: "../media/image copy 14.png",
    link: "/topics/managing-anxiety"
}
function Stigma() {
    return (
        <div class="container my-5 p-5">
            <h1 class="text-center section-heading text-muted">Understanding Mental Health: Breaking the Stigma</h1>


            <div class="row content-section mt-5">
                <div class="col-md-6 d-flex align-items-center">
                    <div className='w-50%'>
                        <h3>The Impact of Stigma
                        </h3>
                        <p>
                            Stigma involves negative attitudes or discrimination against someone based on distinguishing characteristics like mental health conditions. Many individuals with mental health issues avoid seeking help due to the fear of being judged, misunderstood, or marginalized.
                        </p>
                        <p>
                            Some effects of stigma include:
                            <ul>
                                <li>	Isolation: Individuals may feel alone and avoid social interactions due to fears of rejection or judgment.</li>
                                <li>Shame and Guilt: People often feel ashamed of their condition, as if they are to blame for their mental health struggles.</li>
                                <li>Barriers to Treatment: Due to fear of being stigmatized, many avoid or delay seeking help, which can worsen their condition.</li>
                            </ul>

                        </p>

                    </div>
                </div>
                <div class="col-md-6 image-container">
                    {/* img */}
                    <img
                        src={stigma1.image}
                        className="img-fluid rounded"
                        alt={stigma1.title}
                        style={{ maxHeight: '80%', objectFit: 'cover', marginLeft: '80px' }}

                    />
                </div>
            </div>


            <div class="row content-section">
                <div class="col-md-6 image-container">
                    {/* img */}
                    <img
                        src={stigma2.image}
                        className="img-fluid rounded"
                        alt={stigma2.title}
                        style={{ maxHeight: '400px', objectFit: 'cover', marginBottom: '70px' }}
                    />


                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <div>
                        <h3>Breaking the Stigma: Steps to Take</h3>
                        <p>
                            <ol>
                                <li>Education and Awareness: The more we educate ourselves and others about mental health, the more we can dispel myths and break down stereotypes. Learning about the various mental health conditions and their causes can foster empathy and understanding.
                                </li>

                                <li>
                                    Open Conversations: Encouraging open discussions about mental health, both in personal and public spaces, helps normalize the subject. Talking about mental health with friends, family, or colleagues can create a supportive environment for those who need help.</li>
                                <li>
                                    Language Matters: Using non-stigmatizing language is key. Avoid terms like “crazy” or “insane” when discussing mental health. Choose language that is respectful and empathetic.</li>
                            </ol>
                        </p>

                    </div>
                </div>
            </div>


            <div class="row content-section">
                <div class="col-md-6 d-flex align-items-center mt-5">
                    <div>
                        <h3>Mental Health and Emotional Well-being in the Workplace</h3>
                        <p>
                            <ul>
                                <li>
                                    Signs of burnout and workplace stress.</li>
                                <li>	How employers can promote mental health.</li><li>Vitamin D: Known as the “sunshine vitamin,” vitamin D supports brain function. Low levels of vitamin D have been associated with mood disorders, including depression.</li>
                                <li>Mental health days: Why they matter.</li><li>
                                    Creating a mentally healthy workplace culture.</li>
                                <li>
                                    Addressing workplace harassment and its impact on mental health. </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="col-md-6 image-container mt-5 p-5">
                    <img
                        src={stigma3.image}
                        className="img-fluid rounded"
                        alt={stigma3.title}
                        style={{ maxHeight: '100%', objectFit: 'cover', }}
                    />

                </div>
            </div>
        </div>

    );
}

export default Stigma;
