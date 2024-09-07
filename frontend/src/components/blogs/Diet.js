import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const diet1 =
{
  title: "What is Dieting?",
  image: "../media/image copy 15.png",
  link: "diet"
}
const diet2 = {
  title: "What is dieting?",
  image: "../media/image copy 12.png",
  link: "/topics/managing-anxiety"
}
const diet3 = {
  title: "How to Manage diet?",
  image: "../media/image copy 14.png",
  link: "/topics/managing-anxiety"
}
function Diet() {
  return (
    <div class="container my-5 p-5">
      <h1 class="text-center section-heading text-muted">The Role of Diet and Nutrition in Mental Health</h1>


      <div class="row content-section mt-5">
        <div class="col-md-6 d-flex align-items-center">
          <div className='w-50%'>
            <h3>What is a Diet?
            </h3>
            <p>The relationship between our diet and our mental health is complex. However, research shows a link between what we eat and how we feel. Eating well can help you feel better.</p>
            <p>
            The brain and gut are closely linked through a communication system known as the gut-brain axis. This network of connections allows the gut and brain to send signals to each other, affecting mood and cognitive function.
            </p>
            <p>
            Blood sugar levels can have a significant impact on mood and energy levels. Diets high in refined sugars and processed carbohydrates cause spikes and crashes in blood sugar, which can lead to mood swings, irritability, and fatigue.            </p>
          </div>
        </div>
        <div class="col-md-6 image-container">
          {/* img */}
          <img
            src={diet1.image}
            className="img-fluid rounded"
            alt={diet1.title}
            style={{ maxHeight: '80%', objectFit: 'cover', marginLeft: '80px' }}

          />
        </div>
      </div>


      <div class="row content-section">
        <div class="col-md-6 image-container">
          {/* img */}
          <img
            src={diet2.image}
            className="img-fluid rounded"
            alt={diet2.title}
            style={{ maxHeight: '400px', objectFit: 'cover', marginBottom: '70px' }}
          />


        </div>
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h3>Food and Mental Disorders:</h3>
            <p>
              <ul>
                <li>Depression: Diets low in essential nutrients can worsen depression symptoms. In particular, a lack of omega-3 fatty acids, folate, and B vitamins may increase the risk.</li>
                <li>
                Anxiety: Diets rich in magnesium and zinc have been shown to help reduce anxiety symptoms. Conversely, excessive caffeine and sugar intake can heighten anxiety.
                </li>
                <li>
                ADHD: Some studies suggest that diets high in refined sugars and unhealthy fats may contribute to ADHD symptoms. Nutrient-rich foods like fish, whole grains, and leafy greens are thought to support cognitive function in individuals with ADHD.
                </li>
              </ul>
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
            src={diet3.image}
            className="img-fluid rounded"
            alt={diet3.title}
            style={{ maxHeight: '100%', objectFit: 'cover',  }}
          />

        </div>
      </div>
    </div>

  );
}

export default Diet;
