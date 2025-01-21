import React from "react";
import { Card, CardTitle, CardText, Grid, Cell} from "react-mdl";
import CourseTimeline from "./CourseTimeLine";
import ExpandableTimeline from "./ExpandableTimeLine";
import BuyNowCard from "./BuyNowCard";

function CourseOutline() {
  return (
    <div style={{ padding: "20px" }}>
      <h4 style={{ textAlign: "left", fontWeight: "bold" }}>算法课程</h4>

      {/* Section 1 */}
      <Grid>
        <Cell col={4}>
          <Card shadow={1} style={{ width: "100%", margin: "auto", marginBottom: "20px" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>0基础算法入门</span>
            </CardTitle>
            <CardText>
              {/* <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>0基础入门课程</h4> */}
              <p style={{ margin: "0" }}>
                针对0基础入门，从编程语言和基础算法入手，带您动手编写代码与调试，助您快速入门，轻松克服对编程的恐惧。
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：5周，每周3节课，每节课2-3小时
              </p>
              <ExpandableTimeline/>
              <p style={{ margin: "10px 0 0 0", color: "#757575", fontWeight: "bold", fontSize:"30px", textAlign: "center" }}>
                团购价：
                <span style={{ textDecoration: "line-through", color: "#757575" }}>$599</span>{" "}
                <span style={{ color: "#ff5722" }}>$299</span>
              </p>
              {/* <BuyNowCard/> */}
            </CardText>
          </Card>
        </Cell>

        <Cell col={4}>
          <Card shadow={1} style={{ width: "100%", margin: "auto" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>算法面试基础</span>
            </CardTitle>
            <CardText>
              {/* <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>系统基础算法课程</h4> */}
              <p style={{ margin: "0" }}>
                50% 理论知识 + 50% 实战编码，系统提升您的算法、编程与面向对象设计（OOD）能力。
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：10周，每周2节课，每节课2-3小时
              </p>
              <CourseTimeline/>
              <p style={{ margin: "10px 0 0 0", color: "#757575", fontWeight: "bold", fontSize:"30px", textAlign: "center" }}>
                团购价：
                <span style={{ textDecoration: "line-through", color: "#757575" }}>$599</span>{" "}
                <span style={{ color: "#ff5722" }}>$299</span>
              </p>  
              {/* <BuyNowCard/> */}
            </CardText>
          </Card>
        </Cell>
      
        <Cell col={4}>
          <Card shadow={1} style={{ width: "100%", margin: "auto" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>算法高频面试冲刺</span>
            </CardTitle>
            <CardText>
              {/* <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>系统基础算法课程</h4> */}
              <p style={{ margin: "0" }}>
                高覆盖顶尖科技公司（FLAGM等）最常考的技术和综合面试问题，根据市场趋势和最新的公司招聘动态，不断调整和优化题库内容。
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：10周，每周2节课，每节课2-3小时
              </p>
              <p style={{ margin: "10px 0 0 0", color: "#757575", fontWeight: "bold", fontSize:"30px", textAlign: "center" }}>
                团购价：
                <span style={{ textDecoration: "line-through", color: "#757575" }}>$599</span>{" "}
                <span style={{ color: "#ff5722" }}>$299</span>
              </p>
              {/* <BuyNowCard/> */}
            </CardText>
          </Card>
        </Cell>
      </Grid>
  
      {/* Note */}
      <div style={{ marginTop: "20px", color: "#757575", fontSize: "12px", textAlign: "left" }}>
        * 每期课程均有不同程度的修改，实际课纲以课程公布为准
      </div>

      <h4 style={{ textAlign: "left", fontWeight: "bold" }}>其他课程</h4>
      <Grid>
        <Cell col={5}>
          <Card shadow={1} style={{ width: "100%", margin: "auto" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>人工智能MLE课程</span>
            </CardTitle>
            <CardText>
              {/* <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>人工智能集训营</h4> */}
              <p style={{ margin: "0" }}>
              通过系统化的学习和项目实战，您将站在AI技术的前沿，成为抢手的AI开发人才，抓住ChatGPT风口，快速迎接市场需求！
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：Coming soon!
              </p>
            </CardText>
          </Card>
        </Cell>

        <Cell col={5}>
          <Card shadow={1} style={{ width: "100%", margin: "auto" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>MLO贷款经纪课程</span>
            </CardTitle>
            <CardText>
              {/* <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>人工智能集训营</h4> */}
              <p style={{ margin: "0" }}>
              {/* 通过系统化的学习和项目实战，您将站在AI技术的前沿，成为抢手的AI开发人才，抓住ChatGPT风口，快速迎接市场需求！ */}
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：Coming soon!
              </p>
            </CardText>
          </Card>
        </Cell>
      </Grid>
      {/* Note */}
      <div style={{ marginTop: "20px", color: "#757575", fontSize: "12px", textAlign: "left" }}>
        * 每期课程均有不同程度的修改，实际课纲以课程公布为准
      </div>
    </div>
  );
}
export default CourseOutline;