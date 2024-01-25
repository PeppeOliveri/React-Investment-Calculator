import Header from "./components/Header/Header.jsx";
import "./App.css";
import UserInput from "./components/UserInput/UserInput.jsx";
import UserTable from "./components/UserTable/UserTable.jsx";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [userInput, setUserInput] = useState({
    initialNumber: "",
    annualNumber: "",
    expectedReturn: "",
    duration: "",
  });
  const [investmentResults, setInvestmentResults] = useState([]);

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setUserInput((prevState) => {
      const updatedState = { ...prevState, [name]: value };

      const results = calculateInvestmentResults({
        initialInvestment: +updatedState.initialNumber,
        annualInvestment: +updatedState.annualNumber,
        expectedReturn: +updatedState.expectedReturn,
        duration: +updatedState.duration,
      });

      setInvestmentResults(results);

      return updatedState;
    });
  };

  return (
    <div className="app-container">
      <Header />
      <UserInput userInput={userInput} onChangeInput={inputHandler} />
      <UserTable
        investmentResults={investmentResults}
        initialInvestment={userInput.initialNumber}
        duration={userInput.duration}
      />
    </div>
  );
}

export default App;
