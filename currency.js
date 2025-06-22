const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/d9fed77734a5b61471649cb2/latest";

// Populate dropdowns with currencies
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.value = currCode;
    option.textContent = currCode;

    // Set default selections
    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      option.selected = true;
    }

    select.appendChild(option);
  }

  // Flag change
  select.addEventListener("change", (e) => updateFlag(e.target));
}

// Update flag
function updateFlag(element) {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Get and show exchange rate
async function updateExchangeRate() {
  let amount = document.querySelector(".amount input");
  let amtVal = parseFloat(amount.value);

  if (!amtVal || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const url = `${BASE_URL}/${fromCurr.value}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.result !== "success") {
      msg.textContent = "API Error: Couldn't fetch rate.";
      return;
    }

    const rate = data.conversion_rates[toCurr.value];
    const converted = (amtVal * rate).toFixed(2);
    msg.textContent = `${amtVal} ${fromCurr.value} = ${converted} ${toCurr.value}`;
  } catch (error) {
    msg.textContent = "Error fetching data.";
    console.error(error);
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
