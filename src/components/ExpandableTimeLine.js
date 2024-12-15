import React, { useState } from "react";

function ExpandableTimeline() {
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
      {/* Title */}

      {/* Timeline Content */}
      <div style={{ position: "relative", marginLeft: "10px" }}>

        {isExpanded && (
          <>
          <h4 style={{ color: "#2196F3", margin: 0 }}>第1周</h4>
        <ul>
          <li>Java Basics I</li>
          <li>Java Basics II</li>
          <li>Java Basics III</li>
        </ul>
            <h4 style={{ color: "#2196F3", margin: 0 }}>第2周</h4>
            <ul>
              <li>Java Basics IV</li>
              <li>Sorting Algorithms</li>
              <li>Sorting Algorithms (QuickSort)</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: 0 }}>第3周</h4>
            <ul>
              <li>Recursion I, Queue, Stack</li>
              <li>Queue & Linked List</li>
              <li>Linked List</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: 0 }}>第4周</h4>
            <ul>
              <li>Binary Search</li>
              <li>Binary Tree</li>
              <li>Binary Tree and Binary Search Tree</li>
            </ul>

            <h4 style={{ color: "#2196F3", margin: 0 }}>第5周</h4>
            <ul>
              <li>Heap</li>
              <li>Graph</li>
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

export default ExpandableTimeline;