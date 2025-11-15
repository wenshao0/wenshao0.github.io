// src/pages/home/HomeComponent.js

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Education from "../education/EducationComponent";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { experience } from "../../portfolio";

class Home extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        <Header theme={theme} />

        <Greeting theme={theme} />
        <Education theme={theme} />
        {/* 首页里的 Experience 区块 */}
        <section
          className="home-experience-section"
          style={{ marginTop: "40px" }}
        >
          <h1
            className="heading-text"
            style={{
              color: theme.text,
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Experience
          </h1>
          {experience.sections &&
            experience.sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: "24px" }}>
                {section.experiences &&
                  section.experiences.map((exp, id2) => (
                    <ExperienceCard
                      key={id2}
                      experience={exp} // 传给卡片的 prop 名叫 experience
                      theme={theme}
                    />
                  ))}
              </div>
            ))}
        </section>

        <Skills theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
