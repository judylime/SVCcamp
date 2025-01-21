import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import FloatButton from "../components/FloatButton";
import SV from "../image/SV.jpeg";
import techedu from "../image/image.png";

export class LandingPage extends Component {
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
              <img src={techedu} alt="avatar" className="avatar-img" />
              <img src={SV} alt="avatar" className="avatar-img" />
              <div>
                <h3>为什么选择硅谷职业技术培训？</h3>
                <hr />
                <h4>1. 良好的口碑</h4>
                <p>
                  硅谷职业技术培训始终以优质教学和卓越的求职成果著称。
                  <ol>
                    高成功率：93%的学员获得来自FLAG及其他北美一线科技公司的OFFER。
                  </ol>
                  <ol>
                    高推荐率：60%以上的学生由往届学员自发推荐而来，形成口碑相传的良性循环。
                  </ol>
                </p>
                <h4>2. 强大的导师团队</h4>
                <p>
                  我们的导师团队由北美FLAG公司的资深软件工程师及面试官组成。
                  <ul>经验丰富：导师平均拥有五年以上工作及教学经验。</ul>
                  <ul>专业指导：帮助学员掌握FLAG公司的技术要求与面试技巧。</ul>
                </p>
                <h4>3. 完善的服务体系</h4>
                <p>
                  从求职到就职，我们提供全流程支持。
                  <ol>小班教学：线上线下同步培训，精准匹配学员需求。</ol>
                  <ol>
                    终身服务：为学员提供职业发展全程支持，帮助实现长期职业目标。
                  </ol>{" "}
                </p>
                <h4>4. 完备的资源设施</h4>
                <p>
                  我们为学员打造了学习和生活一体化的支持体系：
                  <ol>学习资源库：全面覆盖求职所需的知识点和实战案例。</ol>
                  <ol>管理系统：一对一辅导预约系统、学习管理系统高效便捷。</ol>
                </p>
                <h4>5. 多样的学生群体</h4>
                <p>
                  {" "}
                  我们欢迎不同背景、不同需求的学员，提供个性化解决方案。
                  <ol>
                    广泛覆盖：无论年龄、教育背景或工作经历，我们都能助力学员跻身北美一线科技公司。
                  </ol>
                  <ol>定制服务：针对每位学员的情况，量身打造求职方案。</ol>
                </p>
                <h4>6. 专属的培训辅导</h4>
                <p>
                  小班制教学，1:5师生比例，全程无忧学习体验。
                  <ol>
                    个性化辅导：提供项目实践、简历优化、模拟面试等一对一支持。
                  </ol>
                  <ol>
                    专业团队：导师与助教协作，全方位帮助学员快速提升求职竞争力。
                  </ol>
                </p>
                <p>
                  硅谷码职业技术培训致力于用强大的导师资源、完善的服务体系和全面的学习支持，为学员提供通往北美一线科技公司的最佳路径。
                </p>
              </div>
            </Cell>
          </Grid>
        </div>
        <FloatButton />
      </div>
    );
  }
}

export default LandingPage;
