import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        {/* <Header theme={this.props.theme} /> */}

        <div className="basic-education">
          {/* 顶部大帽子 + “Basic Qualification and Certifications” 整块删掉 */}
          {/* 只保留学位列表 */}
          <Educations theme={this.props.theme} />
        </div>

        {/* 如果不想显示证书列表，整个块直接删掉即可 */}
        {/* {certifications.certifications.length > 0 ? (
          <Certifications theme={this.props.theme} />
        ) : null} */}

        {/* <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}

export default Education;
