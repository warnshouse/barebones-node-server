document.querySelector("#flip-button").addEventListener("click", makeReq);

// Promise chaining
/*
function makeReq() {
  fetch("/api?flip=coin")
    .then(res => res.json())
    .then(data => document.querySelector("#result").textContent = data.result)
    .catch(err => console.log(err));
}
*/

// async and await
async function makeReq() {
  try {
    const res = await fetch("/api?flip=coin");
    const data = await res.json();
    document.querySelector("#result").textContent = data.result;
  }
  catch (err) {
    console.log(err);
  }
}