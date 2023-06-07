import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container" style={{ margin: "20px" }}>
      <MDEditor value={value} onChange={setValue} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}

      <textarea
        value={JSON.stringify(value)}
        style={{
          minHeight: "200px",
          width: "100%",
          background: "#DEDEDE",
          marginTop: "20px",
        }}
      />

      <p>
        by{" "}
        <a href="https://www.github.com/kholostyak17" target="_blank">
          @kholostyak17
        </a>
      </p>
    </div>
  );
}
