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
          required
        />
      </div>
      <div>
        <label>ANNUAL INVESTMENT</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={userInput.annualNumber}
          name="annualNumber"
          required
        />
      </div>
      <div>
        <label>EXPECTED RETURN</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={userInput.expectedReturn}
          name="expectedReturn"
          required
        />
      </div>
      <div>
        <label>DURATION</label>
        <input
          type="number"
          onChange={onChangeInput}
          value={userInput.duration}
          name="duration"
          required
        />
      </div>
    </div>
  );
}
