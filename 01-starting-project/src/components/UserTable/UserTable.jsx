import "./UserTable.css";
import { formatter } from "../../util/investment.js";

export default function UserTable({
  investmentResults,
  initialInvestment,
  duration,
}) {
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
            {investmentResults.map((results) => {
              const totalInterest =
                results.valueEndOfYear -
                results.annualInvestment * results.year -
                initialInvestment;
              const totalAmountInvested =
                results.valueEndOfYear - totalInterest;
              return (
                <tr key={results.year}>
                  <td>{results.year}</td>
                  <td>{formatter.format(results.valueEndOfYear)}</td>
                  <td>{formatter.format(results.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
