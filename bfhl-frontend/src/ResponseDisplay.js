import React from "react";

function ResponseDisplay({ data, visibleSections, onSectionChange }) {
  return (
    <div className="response-display">
      <div className="multiselect">
        <label>
          <input
            type="checkbox"
            name="characters"
            checked={visibleSections.characters}
            onChange={onSectionChange}
          />
          Characters
        </label>
        <label>
          <input
            type="checkbox"
            name="numbers"
            checked={visibleSections.numbers}
            onChange={onSectionChange}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            name="highestAlphabet"
            checked={visibleSections.highestAlphabet}
            onChange={onSectionChange}
          />
          Highest Alphabet
        </label>
      </div>
      <div className="dropdown">
        {visibleSections.characters && (
          <div>
            <h3>Characters</h3>
            <p>{data.alphabets.join(", ")}</p>
          </div>
        )}
        {visibleSections.numbers && (
          <div>
            <h3>Numbers</h3>
            <p>{data.numbers.join(", ")}</p>
          </div>
        )}
        {visibleSections.highestAlphabet && (
          <div>
            <h3>Highest Alphabet</h3>
            <p>{data.highest_alphabet.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResponseDisplay;
