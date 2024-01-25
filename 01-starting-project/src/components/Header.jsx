import Logo from "../assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="Application logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
