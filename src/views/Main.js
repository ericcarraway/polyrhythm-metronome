import React from "react";
import PlayButton from "../components/toolbar/PlayButton";
import PolygonAnimation from "../components/PolygonAnimation";
import SubdivisionInput from "../components/toolbar/SubdivisionInput";
import TempoInput from "../components/toolbar/TempoInput";
import MuteButton from "../components/toolbar/MuteButton";

const Main = () => {
  return (
    <div className="row">
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column vCenter">
              <div className="box shadow has-text-centered">
                <div className="bar">
                  <h6 className="title is-6">polyrhythm metronome</h6>
                </div>
                <div className="bar">
                  <p className="paditem">tempo</p>
                  <TempoInput />
                  <PlayButton />
                </div>
                <div className="bar">
                  <div className="polybar">
                    <div className="bar">
                      <SubdivisionInput side="outside" />
                      <MuteButton side="outside" />
                    </div>
                    <div className="bar">
                      <SubdivisionInput side="inside" />
                      <MuteButton side="inside" />
                    </div>
                  </div>
                </div>
                <br />
                <p>
                  &copy; 2019{" "}
                  <a href="https://danielrowetech.com">daniel rowe</a>
                </p>
              </div>
            </div>
            <div className="column is-three-fifths">
              <PolygonAnimation />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
