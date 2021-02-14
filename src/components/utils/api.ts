

export async function getExchangeRateUSD() {
  const response = await fetch(
    "https://api.ratesapi.io/api/latest?symbols=USD"
  );
  const result = await response.json();
  const rate = result.rates.USD;
  console.log(rate)
  return rate;
}

