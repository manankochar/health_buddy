import React from "react";

const spotlightTopic = {
  title: "Understanding and Managing Depression",
  description:
    "Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. It's important to recognize the symptoms and know that there are effective treatments available.",
  image: "./media/depression.png",
  link: "/depression",
};

function Spotlight() {
  return (
    <div
      className="container p-5 my-5"
      style={{
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        cursor: "",
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
  );
}

export default Spotlight;
