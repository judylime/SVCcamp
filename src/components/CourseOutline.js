import React from "react";
import { Card, CardTitle, CardText, Grid, Cell} from "react-mdl";
import CourseTimeline from "./CourseTimeLine";
import ExpandableTimeline from "./ExpandableTimeLine";

function CourseOutline() {
  return (
    <div style={{ padding: "20px" }}>
      <h4 style={{ textAlign: "left", fontWeight: "bold" }}>算法课程大纲</h4>

      {/* Section 1 */}
      <Grid>
        <Cell col={5}>
          <Card shadow={1} style={{ width: "100%", margin: "auto", marginBottom: "20px" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>课程1</span>
            </CardTitle>
            <CardText>
              <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>0基础课程</h4>
              <p style={{ margin: "0" }}>
              从编程语言和基础算法入手，带您动手编写代码与调试，助您快速入门，轻松克服对编程的恐惧。
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：5周，每周3节课，每节课2-3小时
              </p>
             <ExpandableTimeline/>
            </CardText>
          </Card>
        </Cell>

        <Cell col={5}>
          <Card shadow={1} style={{ width: "100%", margin: "auto" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>课程2</span>
            </CardTitle>
            <CardText>
              <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>系统基础算法课程</h4>
              <p style={{ margin: "0" }}>
              50% 理论知识 + 50% 实战编码，系统提升您的算法、编程与面向对象设计（OOD）能力。
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：10周，每周2节课，每节课2-3小时
              </p>
              <CourseTimeline/>
            </CardText>
          </Card>
        </Cell>
      </Grid>
      <div style={{ marginTop: "20px", color: "#757575", fontSize: "12px", textAlign: "center" }}>
        * 每期课程均有不同程度的修改，实际课纲以课程公布为准
      </div>
      
      <h4 style={{ textAlign: "left", fontWeight: "bold" }}>人工智能课程大纲</h4>
      <Grid>
              <Cell col={5}>
                <Card shadow={1} style={{ width: "100%", margin: "auto" }}>
                  <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "bold" }}>课程1</span>
                  </CardTitle>
                  <CardText>
                    <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>人工智能集训营</h4>
                    <p style={{ margin: "0" }}>
                    通过系统化的学习和项目实战，您将站在AI技术的前沿，成为抢手的AI开发人才，抓住ChatGPT风口，快速迎接市场需求！
                    </p>
                    <p style={{ margin: "0", color: "#757575" }}>
                      上课频率：Coming soon!
                    </p>

                  </CardText>
                </Card>
              </Cell>

              {/* <Cell col={5}>
                <Card shadow={1} style={{ width: "100%", margin: "auto", marginBottom: "20px" }}>
                  <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "bold" }}>课程2</span>
                  </CardTitle>
                  <CardText>
                    <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>基于OpenAI和React的项目课程</h4>
                    <p style={{ margin: "0" }}>
                    本项目将设计并开发一套基于 OpenAI 和 React 的 AI系统，深入了解多种大语言模型及其架构。
                    </p>
                    <p style={{ margin: "0", color: "#757575" }}>
                      上课频率：5周，每周2节课，每节课2-3小时
                    </p>
                  
                  </CardText>
                </Card>
              </Cell> */}
      </Grid>
      {/* Note */}
      <div style={{ marginTop: "20px", color: "#757575", fontSize: "12px", textAlign: "center" }}>
        * 每期课程均有不同程度的修改，实际课纲以课程公布为准
      </div>
    </div>
  );
}

export default CourseOutline;