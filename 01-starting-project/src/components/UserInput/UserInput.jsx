import "./UserInput.css";

export default function UserInput({ userInput, onChangeInput }) {
  return (
    <div className="input-container">
      <div>
        <label>INITIAL INVESTMENT</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={userInput.initialNumber}
          name="initialNumber"
        />
      </div>
      <div>
        <label>ANNUAL INVESTMENT</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={userInput.annualNumber}
          name="annualNumber"
        />
      </div>
      <div>
        <label>EXPECTED RETURN</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={userInput.expectedReturn}
          name="expectedReturn"
        />
      </div>
      <div>
        <label>DURATION</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={userInput.duration}
          name="duration"
        />
      </div>
    </div>
  );
}
