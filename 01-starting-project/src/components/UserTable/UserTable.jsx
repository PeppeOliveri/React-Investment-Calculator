import "./UserTable.css";
import { formatter } from "../../util/investment.js";

export default function UserTable({
  investmentResults,
  initialInvestment,
  duration,
}) {
  const totalInterest = investmentResults.map((results) => {
    return (
      results.valueEndOfYear -
      results.annualInvestment * results.year -
      initialInvestment
    );
  });
  const totalAmountInvested = investmentResults.map((results, index) => {
    return results.valueEndOfYear - totalInterest[index];
  });

  return (
    <>
      {+duration === 0 || +duration < 0 ? (
        <p style={{ fontSize: "20px", marginTop: "2rem" }}>
          Please enter a duration greater than zero.
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Year</td>
              <td>Investment Value</td>
              <td>Interest(Year)</td>
              <td>Total Interest</td>
              <td>Invested Capital</td>
            </tr>
          </thead>
          <tbody>
            {investmentResults.map((results, index) => {
              return (
                <tr key={results.year}>
                  <td>{results.year}</td>
                  <td>{formatter.format(results.valueEndOfYear)}</td>
                  <td>{formatter.format(results.interest)}</td>
                  <td>{formatter.format(totalInterest[index])}</td>
                  <td>{formatter.format(totalAmountInvested[index])}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
