/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import NoahNavBar from "components/Navbars/NoahNavBar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import SVGSpacer from "components/Spacers/SVGSpacer.js";
import Features from "./landingSections/Features.js";
import Cards from "./landingSections/Cards.js";
import Info from "./landingSections/Info.js";
import Email from "./landingSections/Email.js";
import Build from "./landingSections/Build.js";
import Bubbles from "components/Headers/Bubbles.js";
import TopSkewSpacer from "components/Spacers/TopSkewSpacer.js";
import HeaderText from "./landingSections/HeaderText.js";

// index page sections
// import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <NoahNavBar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <Bubbles />
              <HeaderText/>
              <div className="separator separator-bottom separator-skew">
                <SVGSpacer/>
              </div>
            </section>
          </div>
          <section className="section section-lg pb-0 mt--200">
            <Cards />
          </section>
          <section className="section section-lg">
            <Features />
          </section>
          <section className="section bg-gradient-warning pt-0">
            <TopSkewSpacer />
            <Info />
          </section>
          <section className="section section-lg bg-gradient-default pt-0">
            <Build />
            <SVGSpacer />
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Email />
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
