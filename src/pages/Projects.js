import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import AboutSkills from "../components/AboutSkills";
import FloatButton from "../components/FloatButton";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  render() {
    return (
      <div
        className="about-grid"
        dataAnimation="slide-in-left"
        dataDelay=".5s"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="page-content">
          <Grid>
            <Cell col={12} style={{ textAlign: "left" }}>
              <h3>培训课程计划 ： 全面备战求职的高效路径</h3>
              <hr />
              <h4>软件工程师求职流程</h4>
              {/* Progress Bar with Buffering */}
              <div
                className="progress-bar mdl-grid--no-spacing"
                style={{ margin: "0", padding: "0" }}
              >
                <Grid>
                  <Cell col={5} style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}>构建知识体系</p>
                  </Cell>
                  <Cell col={12}>
                    <AboutSkills skill="零基础 Java 入门" progress={10} />
                    <AboutSkills skill="数据结构入门" progress={20} />
                    <AboutSkills skill="算法入门" progress={30} />
                    <AboutSkills skill="算法陪练" progress={40} />
                    <AboutSkills skill="算法加强" progress={50} />
                    <AboutSkills skill="算法冲刺" progress={60} />
                    <AboutSkills skill="Java, OOD陪练" progress={65} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={5}>
                    <p style={{ textAlign: "left" }}>撰写简历，准备面试</p>
                  </Cell>
                  <Cell col={12}>
                    <AboutSkills skill="简历修改与润色" progress={70} />
                    <AboutSkills skill="BQ Review" progress={75} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={5}>
                    <p style={{ textAlign: "left" }}>巩固技巧，强化实力</p>
                  </Cell>
                  <Cell col={12}>
                    <AboutSkills skill="模拟面试" progress={85} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={5}>
                    <p style={{ textAlign: "left" }}>求职冲刺</p>
                  </Cell>
                  <Cell col={12}>
                    <AboutSkills skill="科技公司职位内推" progress={90} />
                    <AboutSkills skill="面试复盘" progress={95} />
                  </Cell>
                </Grid>
                <Grid>
                  <Cell col={5}>
                    <p style={{ textAlign: "left" }}>Offer 谈判指导 成功上岸</p>
                  </Cell>
                  <Cell col={12}>
                    <AboutSkills skill="薪资谈判" progress={98} />
                    <AboutSkills skill="选组指导" progress={100} />
                  </Cell>
                </Grid>
              </div>
            </Cell>
          </Grid>
        </div>
        <FloatButton />
      </div>
    );
  }
}

export default Projects;
