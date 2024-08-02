import React, { useState } from "react";
import axios from "axios";
import JsonInput from "./JsonInput";
import ResponseDisplay from "./ResponseDisplay";
import "./style.css";

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");
  const [visibleSections, setVisibleSections] = useState({
    numbers: true,
    characters: true,
    highestAlphabet: true,
  });

  const handleJsonChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const json = JSON.parse(jsonInput);
      const response = await axios.post(
        "https://bfhl-api.herokuapp.com/bfhl",
        json
      );
      setResponseData(response.data);
      setError("");
    } catch (err) {
      setError("Invalid JSON or request failed");
      setResponseData(null);
    }
  };

  const handleSectionChange = (e) => {
    const { name, checked } = e.target;
    setVisibleSections((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="App">
      <h1>Your Roll Number Here</h1>
      <JsonInput
        jsonInput={jsonInput}
        onJsonChange={handleJsonChange}
        onSubmit={handleSubmit}
        error={error}
      />
      {responseData && (
        <ResponseDisplay
          data={responseData}
          visibleSections={visibleSections}
          onSectionChange={handleSectionChange}
        />
      )}
    </div>
  );
}

export default App;
