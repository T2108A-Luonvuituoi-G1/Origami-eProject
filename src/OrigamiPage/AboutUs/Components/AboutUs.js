import React, { Component } from "react";
import AboutUsHeader from "./AboutUsHeader";
import AboutUsSlider from "./AboutUsSlider";
import AboutUsContainer from "./AboutUsContainer";
import AboutUsFooter from "./AboutUsFooter";
// import HomeFooter from "../Components/Footer";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        {/* HEADER */}
        <AboutUsHeader />

        {/* CONTAINER */}
        <AboutUsContainer />

        {/* FOOTER */}
        <AboutUsFooter />

        {/* SLIDER */}
        <AboutUsSlider />

        {/* <HomeFooter/> */}
      </>
    );
  }
}
