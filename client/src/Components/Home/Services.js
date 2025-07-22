import React from "react";
import { Link } from "react-router-dom";
import imgConvert from "../../Assets/convert.png";
import imgLearnSign from "../../Assets/learn-sign.jpg";
import imgVideos from "../../Assets/videos.png";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6 mt-4 d-flex">
            <div className="card flex-fill h-100 d-flex flex-column justify-content-between card-background">
              <img className="card-img-top" src={imgConvert} alt="Convert Clipart" />
              <div className="card-body">
                <h5 className="card-title">Convert</h5>
                <p className="card-text">
                  Want to convert audio or text into Indian Sign Language?
                  Then, you are in the right place! Provide your audio by
                  speaking into your mic or type the text that you want to
                  convert into ISL and within a few clicks watch the magic
                  happen!
                </p>
              </div>
              <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                <Link
                  to="/sign-kit/convert"
                  className="btn btn-info w-100 p-3"
                  style={{ fontSize: "large" }}
                >
                  EXPLORE NOW!
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4 d-flex">
            <div className="card flex-fill h-100 d-flex flex-column justify-content-between card-background">
              <img className="card-img-top" src={imgLearnSign} alt="Learn Sign Clipart" />
              <hr className="m-0"></hr>
              <div className="card-body">
                <h5 className="card-title">Learn Sign</h5>
                <p className="card-text">
                  Curious about Indian Sign Language? Then, learn ISL from us!
                  Select a sign from the list, watch it as many times as you
                  want and learn ISL. Learning something is always a good
                  thing, you know!
                </p>
              </div>
              <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                <Link
                  to="/sign-kit/learn-sign"
                  className="btn btn-info w-100 p-3"
                  style={{ fontSize: "large" }}
                >
                  EXPLORE NOW!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
