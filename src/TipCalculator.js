import { useState } from "react";
import "./TipCalculator.css";

const TipCalculator = () => {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const calculateTip = (percentage) => {
    const calculatedTip = (parseFloat(amount) * percentage) / 100;
    setTip(calculatedTip.toFixed(2));
    const calculatedTotal = parseFloat(amount) + calculatedTip;
    setTotal(calculatedTotal.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="mainContainer">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="text-center">
            <h1>Tip Calculator</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    $
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter cost here..."
                  aria-describedby="basic-addon1"
                  onChange={handleAmountChange}
                />
              </div>
              <div class="row mt-3 justify-content-center">
                <button class="btn mr-3" onClick={() => calculateTip(15)}>
                  15%
                </button>
                <button class="btn" onClick={() => calculateTip(20)}>
                  20%
                </button>
                <button class="btn ml-3" onClick={() => calculateTip(25)}>
                  25%
                </button>
              </div>
            </div>
          </form>
          <div>
            <p>Tip: ${tip}</p>
            <p>Total: ${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
