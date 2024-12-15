import React, { useState } from "react";

function CourseTimeline() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonStyle = {
    // border: "2px solid #1976D2", // Blue border
    backgroundColor: "#E3F2FD", // Light blue background
    borderRadius: "8px",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    margin: "20px auto",
  };

  const arrowStyle = {
    color: "#1976D2",
    fontSize: "18px",
    lineHeight: "1",
    transition: "transform 0.3s ease",
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Course Introduction */}
      {/* Timeline Content */}
      <div style={{ position: "relative", marginLeft: "20px" }}>
  

        {isExpanded && (
          <>
                <h4 style={{ color: "#2196F3", margin: "0 0 10px 0" }}>第1周</h4>
        <ul>
          <li>二分</li>
          <li>前缀和+差分</li>
        </ul>
            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第2周</h4>
            <ul>
              <li>双指针+滑窗</li>
              <li>排序+分治</li>
              
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第3周</h4>
            <ul>
            <li>位运算+状态压缩</li>
              <li>BFS</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第4周</h4>
            <ul>
              <li>DFS</li>
              <li>Dijkstra</li>

            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第5周</h4>
            <ul>
              <li>拓扑排序</li>
              <li>链表</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第6周</h4>
            <ul>
              <li>栈+队列+堆</li>
              <li>Tree</li>

            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第7周</h4>
            <ul>
              <li>Trie+字符串哈希</li>
              <li>并查集</li>

            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第8周</h4>
            <ul>
              <li>数据结构设计</li>
              <li>数论基础</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第9周</h4>
            <ul>
              <li>线性DP</li>
              <li>背包DP</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第10周</h4>
            <ul>
              <li>区间DP+状态机DP+记忆化搜索</li>
              <li>贪心+模拟</li>
            </ul>
          </>
        )}
      </div>

      {/* Expand/Collapse Button */}
      <div style={buttonStyle} onClick={toggleExpand}>
        <span style={arrowStyle}>▼</span>
      </div>
    </div>
  );
}

export default CourseTimeline;