import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const anxiety1 =
{
  title: "What is Anxiety?",
  image: "../media/freepik.png",
  link: "/topics/managing-anxiety"
}
const anxiety2 = {
  title: "What are the Symptoms of Anxiety?",
  image: "../media/4283206.png",
  link: "/topics/managing-anxiety"
}
const anxiety3 = {
  title: "How to Manage Anxiety?",
  image: "../media/unhappy-teenager-guy.jpg",
  link: "/topics/managing-anxiety"
}
function Anxiety() {
  return (
    <div class="container my-5 p-5">
      <h1 class="text-center section-heading text-muted">5 Ways to Manage Anxiety & Depression</h1>


      <div class="row content-section mt-5 p-5">
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h3>What is Anxiety Disorder?</h3>
            <p>It’s normal to feel anxious about moving to a new place, starting a new job, or taking a test. This type of anxiety is unpleasant, but it may motivate you to work harder and do a better job. Ordinary anxiety is a feeling that comes and goes but doesn’t interfere with your everyday life.
            </p>
            <p>
              In the case of an anxiety disorder, the feeling of fear may be with you all the time. It’s intense and sometimes debilitating.
            </p>
            <p>
              This type of anxiety may cause you to stop doing things you enjoy. For example, it may prevent you from entering an elevator, crossing the street, or even leaving your home in extreme cases. If left untreated, the anxiety will keep getting worse.
            </p>
          </div>
        </div>
        <div class="col-md-6 image-container">
          {/* img */}
          <img
            src={anxiety1.image}
            className="img-fluid rounded"
            alt={anxiety1.title}
            style={{ maxHeight: '100%', objectFit: 'cover' }}

          />
        </div>
      </div>


      <div class="row content-section">
        <div class="col-md-6 image-container">
          {/* img */}
          <img
            src={anxiety2.image}
            className="img-fluid rounded"
            alt={anxiety2.title}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />


        </div>
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h3>Symptoms of Anxiety Disorders</h3>
            <p>Anxiety feels different depending on the person experiencing it. Feelings can range from butterflies in your stomach to a racing heart. You might feel out of control like there’s a disconnect between your mind and body.
            </p>
            <p>
              Symptoms of anxiety can include:
              <ul>
                <li>anxious thoughts or beliefs that are difficult to control</li>
                <li>restlessness</li>
                <li>trouble concentrating</li>
                <li>difficulty falling asleep</li>
                <li>unexplained aches and pains</li>
                <li>irritability</li>

              </ul>
            </p>
          </div>
        </div>
      </div>


      <div class="row content-section">
        <div class="col-md-6 d-flex align-items-center mt-5">
          <div>
            <h3>What are treatments for anxiety?</h3>
            <p>
              Treatment for anxiety falls into three categories:
              <ul>
                <li>
                  Psychotherapy. Therapy can include cognitive behavioral therapy and exposure response prevention.
                </li>
                <li>Medication. Doctors prescribe antianxiety and antidepressant drugs.</li>
                <li>Complemental health techniques. Mindfulness, yoga, and self-management strategies such as stress management are ways to treat your anxiety using alternative methods.</li>
                <li>Meeting with a therapist or psychologist can help you learn tools to use and strategies to cope with stress when it occurs.</li>
                <li>Cognitive Behavioral Therapy (CBT): This is one of the most effective treatments for anxiety and depression. It involves identifying and challenging negative thought patterns and behaviors, and replacing them with more positive ones.</li>
              </ul>

            </p>
          </div>
        </div>
        <div class="col-md-6 image-container mt-5 p-5">
          <img
            src={anxiety3.image}
            className="img-fluid rounded"
            alt={anxiety3.title}
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />

        </div>
      </div>
    </div>

  );
}

export default Anxiety;
