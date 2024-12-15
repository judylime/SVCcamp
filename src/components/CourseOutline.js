import React from "react";
import { Card, CardTitle, CardText, Grid, Cell} from "react-mdl";
import CourseTimeline from "./CourseTimeLine";
import ExpandableTimeline from "./ExpandableTimeLine";

function CourseOutline() {
  return (
    <div style={{ padding: "20px" }}>
      <h4 style={{ textAlign: "left", fontWeight: "bold" }}>培训课程大纲</h4>

      {/* Section 1 */}
      <Grid>
        <Cell col={5}>
          <Card shadow={1} style={{ width: "100%", margin: "auto", marginBottom: "20px" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>第1部分</span>
            </CardTitle>
            <CardText>
              <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>0基础课程（可选）</h4>
              <p style={{ margin: "0" }}>
                从编程语言和基础算法讲起，带您在课上一起写代码、调试，帮助您快速入门，消除编程恐惧感。
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：4周，每周3节课，每节课2-3小时
              </p>
             <ExpandableTimeline/>
            </CardText>
          </Card>
        </Cell>

        <Cell col={5}>
          <Card shadow={1} style={{ width: "100%", margin: "auto" }}>
            <CardTitle style={{ background: "#2196F3", color: "#fff", padding: "15px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>第2部分</span>
            </CardTitle>
            <CardText>
              <h4 style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>系统算法提升课程</h4>
              <p style={{ margin: "0" }}>
                50%理论知识 + 50% Coding动手，系统提升您的算法、编程、OOD能力。
              </p>
              <p style={{ margin: "0", color: "#757575" }}>
                上课频率：10周，每周2节课，每节课2-3小时
              </p>
              <CourseTimeline/>
            </CardText>
          </Card>
        </Cell>
      </Grid>

      {/* Note */}
      <div style={{ marginTop: "20px", color: "#757575", fontSize: "12px", textAlign: "center" }}>
        * 每期课程均有不同程度的修改，实际课纲以课程公布为准
      </div>
    </div>
  );
}

export default CourseOutline;