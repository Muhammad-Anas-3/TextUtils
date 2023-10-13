import React from "react";

export default function Textform(props) {

  return (
    <div>
      <div className="container my-1">
        <div className="mb-2">
          <label
            htmlFor="textArea"
            className="form-label"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control py-2 px-3 fs-5"
            rows="6"
            value={props.text}
            onChange={props.handleOnChange}
            id="myBox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "rgb(34 52 78)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>

        <div className="btn btn-primary mx-2 py-2" onClick={props.handleUpClick}>
          Convert to UpperCase
        </div>
        <div className="btn btn-primary mx-2 py-2" onClick={props.handleLoClick}>
          Convert to LowerCase
        </div>
        <div className="btn btn-primary mx-2 py-2" onClick={props.handleCopy}>
          Copy Text
        </div>
        <div className="btn btn-primary mx-2 py-2" onClick={props.handleClear}>
          Clear Text
        </div>
        <div className="btn btn-primary mx-2 py-2" onClick={props.removeExtraSpaces}>
          Remove Extra spaces
        </div>
      </div>

      <div className="container">
        <h3 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Your Text Summary
        </h3>
        <h6 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {props.text.length} characters
        </h6>
        <h6 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {0.008 * props.text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to Read
        </h6>
        <h2
          className="my-1"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          Preview
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>{props.text.length > 0 ? props.text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
