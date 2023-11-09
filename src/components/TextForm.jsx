import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import PrintedView from "./PrintedView";

const TextForm = (props) => {
  const [text, setText] = useState("Enter text here"); //CCapture user's input as they type it in
  const [printedText, setPrintedText] = useState("");

  const wordCount = text.split(" ").length;
  const averageReadingTime = 0.008 * wordCount; // In minutes
  const formattedReadingTime =
    averageReadingTime < 1
      ? `${Math.round(averageReadingTime * 60)} seconds`
      : `${Math.floor(averageReadingTime)} minutes`;

  const handleOnChange = (event) => {
    console.log("onchnage");
    setText(event.target.value);
  };

  const handlePrint = () => {
    setPrintedText(text);
    window.print({ text });
  };

  const handleCopy = () => {
    let text = document.getElementById("myTextBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text has been copied", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myTextBox" className="form-label">
            {props.subHeading}
          </label>
          <textarea
            className="form-control border border-4 border-primary-subtle border-opacity-50 "
            id="myTextBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          className="btn btn-primary me-3 mb-3"
          onClick={() => {
            setText(text.toUpperCase());
            props.showAlert("Converted to Uppercase", "success");
          }}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-info me-3 mb-3"
          onClick={() => {
            setText(text.toLowerCase());
            props.showAlert("Converted to Lowercase", "success");
          }}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary me-3 mb-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary me-3 mb-3"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary me-3 mb-3" onClick={handlePrint}>
          Print
        </button>
        {printedText && <PrintedView printedText={printedText} />}
        <button
          className="btn btn-danger me-3 mb-3"
          onClick={() => {
            setText("");
            props.showAlert("Text cleared", "success");
          }}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>
          {wordCount} words & {text.length} characters
        </p>
        <p>The average reading time is {formattedReadingTime}</p>
        <h2>Preview</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {text === "Enter text here" || text.length === 0
            ? "Enter your text above for a preview."
            : text}
        </p>
      </div>
    </>
  );
};

export default TextForm;

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Example Heading",
  subHeading: "Example Subheading",
};