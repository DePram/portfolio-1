const scriptURL = "https://script.google.com/macros/s/AKfycbyD_xi757IjUEU_t-v42Mzl4CrJcqMHzI2InAkPbp9zp7Xg_DFxvVJ_Gyqx2Jr7Zm4/exec";
const form = document.forms["dode-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
