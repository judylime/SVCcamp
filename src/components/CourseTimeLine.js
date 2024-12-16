import React, { useState } from "react";

function CourseTimeline() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonStyle = {
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
              <li>前缀和</li>
              <li>双指针</li>
            </ul>
            
            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第2周</h4>
            <ul>
              <li>区间合并</li>
              <li>快速选择</li>
              <li>归并分治</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第3周</h4>
            <ul>
            <li>位运算+状态压缩</li>
            <li>差分</li>
              <li>链表</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第4周</h4>
            <ul>
              <li>单调栈</li>
              <li>单调队列</li>

            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第5周</h4>
            <ul>
              <li>字典树</li>
              <li>并查集</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第6周</h4>
            <ul>
              <li>堆</li>
              <li>字符串哈希</li>

            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第7周</h4>
            <ul>
              <li>BFS</li>
              <li>DFS</li>

            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第8周</h4>
            <ul>
              <li>拓扑排序</li>
              <li>Dijkstra</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第9周</h4>
            <ul>
              <li>二分图染色法</li>
              <li>DP</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: "10px 0" }}>第10周</h4>
            <ul>
              <li>贪心</li>
              <li>模拟</li>
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