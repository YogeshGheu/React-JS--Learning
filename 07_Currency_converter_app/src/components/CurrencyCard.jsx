import React from 'react';

const CurrencyCard = ({
  amount,
  currency,
  currencyList,
  onAmountChange,
  onCurrencyChange,
  isAmountDisabled = false
}) => {
  return (
    <div className="bg-gray-300 bg-opacity-70 text-gray-700 p-3 rounded-md w-96 m-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Amount</span>
        <span className="text-gray-600">Currency Type</span>
      </div>
      <div className="flex justify-between">
        <input
          value={amount}
          onChange={onAmountChange}
          type="number"
          className="px-2 border-2 border-gray-300 rounded-md w-36"
          disabled={isAmountDisabled} // Allow or prevent manual input
        />
        <select value={currency} onChange={onCurrencyChange}>
          {currencyList.length === 0 ? (
            <option value="INR">Please Wait</option>
          ) : (
            currencyList.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default CurrencyCard;
