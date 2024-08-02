import React from "react";

function JsonInput({ jsonInput, onJsonChange, onSubmit, error }) {
  return (
    <div className="json-input">
      <textarea
        value={jsonInput}
        onChange={onJsonChange}
        placeholder='Enter JSON here, e.g., {"data": ["A","C","z"]}'
        rows={5}
        cols={40}
      />
      <button onClick={onSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default JsonInput;
