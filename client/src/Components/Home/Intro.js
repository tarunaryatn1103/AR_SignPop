import React from "react";

function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div className="row my-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="h2 section-heading">We've what you need!</div>
            <div className="col-lg-4 divider my-2" />
            <div className="text-center normal-text">
              A comprehensive and aesthetic Indian Sign Language toolkit. A
              minimalist yet informative interface. 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
