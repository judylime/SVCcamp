import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ProjectsTemplate from "../components/ProjectsTemplate";
import FloatButton from "../components/FloatButton";
import Jingyi from "../image/Jingyi.png";
import Frank from "../image/Frank.png";
import Jeff from "../image/Jeff.jpeg";
import Cathy from "../image/Cathy.png";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="page-content">
          <h3>强大的导师团队: 在职面试官亲授直播课</h3>
          <hr></hr>
          <h5>所有导师皆任职于 全球各大顶级科技公司</h5>
          <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
            align="center"
          >
            <ProjectsTemplate
              img={Jingyi}
              projects="静翼老师"
              description="FLAGM资深工程师 - 在职Meta资深高级工程师, 斩获Google ，Facebook，Microsoft，Linkedin，Apple, Amazon等多家全家桶offer。拥有极其丰富的面试，面试官及算法教学经验。"
            />
            <ProjectsTemplate
              img={Frank}
              projects="Frank老师"
              description="FLAGM资深工程师 - Microsoft高级工程师，曾斩获Google 、Meta、Amazon等多家offer。不仅拥有丰富的面试经验，还有非常丰富的面试官经验及算法教学经验，能够在短时间内帮助大家补齐面试技能短板。"
            />
            <ProjectsTemplate
              img={Cathy}
              projects="Cathy老师"
              description="FLAGM资深工程师 - LinkedIn资深工程师，具有多年辅导经验，擅长简历修改、专业分析，具有丰富的面试官经验。"
            />
            <ProjectsTemplate
              img={Jeff}
              projects="Jeff老师"
              description="FLAGM资深工程师 - Google高级工程师, 一线面试官。曾横扫Facebook、LinkedIn、Apple、Amazon、Airbnb、Uber等多个顶级科技公司offer。"
            />
          </Grid>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="projects-grid">
        <div className="category-tabs">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()} </div>
            </Cell>
          </Grid>
        </div>
        <FloatButton />
      </div>
    );
  }
}

export default About;
