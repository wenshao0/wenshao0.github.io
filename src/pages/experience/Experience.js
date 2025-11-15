// src/pages/experience/Experience.js

import React, { Component } from "react";
import "./Experience.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

// 暂时把博客数据写在这里，后面换成真实链接
const blogs = [
  {
    title: "How AI is reshaping local journalism",
    date: "Nov 2025",
    tag: "AI & Journalism",
    description:
      "Reflections on reporting with AI tools in the newsroom, and what still needs human judgment.",
  },
  {
    title: "Designing interfaces for complex information",
    date: "Oct 2025",
    tag: "UX & Data Viz",
    description:
      "Thoughts on turning messy data, policy and long reports into interfaces people actually want to read.",
  },
  {
    title: "Learning to think in prototypes",
    date: "Sep 2025",
    tag: "Prototyping",
    description:
      "What I learned from building quick prototypes for storytelling, interfaces and AI experiments.",
  },
];

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-main">
        <Header theme={theme} />

        <div className="basic-experience">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Blog
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Notes on AI, design, and storytelling.
              </h3>
            </div>
          </div>

          <div className="blog-list">
            {blogs.map((blog, index) => (
              <div className="blog-card" key={index}>
                <p className="blog-meta" style={{ color: theme.secondaryText }}>
                  {blog.date} · {blog.tag}
                </p>
                <h2 className="blog-title" style={{ color: theme.text }}>
                  {blog.title}
                </h2>
                <p
                  className="blog-description"
                  style={{ color: theme.secondaryText }}
                >
                  {blog.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;
