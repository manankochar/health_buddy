import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const routine1 =
{
  title: "ok",
  image: "../media/man-meditating.png",
  link: "/topics/managing-mindfullness"
}
const routine2 = {
  title: "ok",
  image: "../media/image copy 12.png",
  link: "/topics/managing-mindfullness"
}
const routine3 = {
  title: "ok",
  image: "../media/image copy 14.png",
  link: "/topics/managing-mindfullness"
}
function Routine() {
  return (
    <div class="container my-5 p-5">
      <h1 class="text-center section-heading text-muted">Mindfulness Practices to Incorporate into Your Daily Routine</h1>


      <div class="row content-section mt-5">
        <div class="col-md-6 d-flex align-items-center">
          <div className='w-50%'>
            <h3>Mindful Breathing
            </h3>
            <p>How it works: Focus on your breath as it moves in and out of your body. Notice the sensation of the air entering your nostrils, filling your lungs, and then gently exhaling.</p> 
            <p>
            When to do it: Anytime you feel overwhelmed or stressed. Even a minute of mindful breathing can bring calm and focus. 
             </p>
             <p>
             Focus on the Present Moment: Mindful breathing helps anchor your attention in the present. By focusing on your breath, you can temporarily let go of past regrets or future worries, fostering a sense of calm and clarity.
             </p>
             <p>
             Improves Emotional Regulation: Regular practice of mindful breathing can improve your ability to manage emotions. It activates the parasympathetic nervous system, which helps to lower stress levels and reduces anxiety by slowing your heart rate.
             </p>
             
            
              </div>
        </div>
        <div class="col-md-6 image-container">
          {/* img */}
          <img
            src={routine1.image}
            className="img-fluid rounded"
            alt={routine1.title}
            style={{ maxHeight: '80%', objectFit: 'cover', marginLeft: '80px' }}

          />
        </div>
      </div>


      <div class="row content-section">
        <div class="col-md-6 image-container">
          {/* img */}
          <img
            src={routine2.image}
            className="img-fluid rounded"
            alt={routine2.title}
            style={{ maxHeight: '400px', objectFit: 'cover', marginBottom: '70px' }}
          />


        </div>
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h3>How to Stick to Your Mindfulness Routine</h3>
            <p>
              <li>
              Start Small: Incorporate just one or two practices to begin with, such as mindful breathing or stretching. As you become more comfortable, you can add more techniques.
              </li>
              <li>Set Reminders: Use reminders on your phone or sticky notes to prompt you to practice mindfulness throughout the day.

              </li>
              <li>
              Consistency Over Perfection: You don’t have to be perfect. Even brief moments of mindfulness, like a single deep breath, can have a positive effect.
              </li>
              <li>
              Create a Routine: Try to incorporate mindfulness into your morning or evening routines or during specific daily tasks, like brushing your teeth or making your bed.
              </li>
              <li>
              Set Realistic Goals: Start small by setting achievable goals for your mindfulness practice. Instead of aiming for long sessions right away, begin with just a few minutes each day. Gradually increasing the time will make it easier to maintain consistency without feeling overwhelmed.
              </li>
              <li>
              Create a Dedicated Space: Having a specific spot for your mindfulness practice can help establish a routine. This space should be quiet, comfortable, and free from distractions, allowing you to focus and build a habit over time.
              </li>
             </p>
            
          </div>
        </div>
      </div>


      <div class="row content-section">
        <div class="col-md-6 d-flex align-items-center mt-5">
          <div>
            <h3>Key Nutrients for Mental Health</h3>
            <p>
              <ul>
                <li>
                Omega-3 Fatty Acids: Found in fish, flaxseeds, and walnuts, omega-3s are essential for brain function. Studies have shown that they can help reduce symptoms of depression and anxiety.
                </li>
                <li>B Vitamins: B vitamins, particularly B6, B12, and folate, play a role in producing brain chemicals that affect mood. Deficiencies in these vitamins have been linked to depression and cognitive decline.</li>
                <li>Vitamin D: Known as the “sunshine vitamin,” vitamin D supports brain function. Low levels of vitamin D have been associated with mood disorders, including depression.</li>
                <li>Magnesium: Magnesium helps regulate the body’s stress-response system and is involved in neurotransmitter function. Magnesium-rich foods like leafy greens, nuts, and seeds may help ease symptoms of anxiety.</li>
                <li>
                Zinc: This mineral, found in foods like pumpkin seeds, beans, and meat, is involved in neurotransmitter regulation. Zinc deficiency has been associated with increased anxiety and depressive symptoms.
                </li>
                <li>
                Amino Acids: Proteins, made up of amino acids, are vital for producing neurotransmitters. For instance, tryptophan (found in turkey, eggs, and cheese) is a precursor to serotonin, a neurotransmitter that stabilizes mood.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="col-md-6 image-container mt-5 p-5">
          <img
            src={routine3.image}
            className="img-fluid rounded"
            alt={routine3.title}
            style={{ maxHeight: '100%', objectFit: 'cover',  }}
          />

        </div>
      </div>
    </div>

  );
}

export default Routine;
