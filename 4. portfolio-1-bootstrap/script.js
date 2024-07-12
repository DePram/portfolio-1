const scriptURL = "https://script.google.com/macros/s/AKfycbyD_xi757IjUEU_t-v42Mzl4CrJcqMHzI2InAkPbp9zp7Xg_DFxvVJ_Gyqx2Jr7Zm4/exec";
const form = document.forms["dode-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // saat tombol submit di klik
  // tampilkan tombol loading dan hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // saat tombol submit di klik
      // tampilkan tombol kirim dan hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

AOS.init({
  once: true,
  duration: 1500,
});

gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { duration: 2, delay: 1, text: "Student | Ordinary Person" });
gsap.from(".jumbotron img", { duration: 1, opacity: 0, rotateY: 360 });
gsap.from(".navbar", { duration: 1, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".display-4", { duration: 1, x: "-50", opacity: 0, delay: 0.5 });
