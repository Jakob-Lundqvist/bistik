const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
form.addEventListener("invalid", cancelPopup, true);

const nameOutput = document.querySelector("#full_name_output");
const ageOutput = document.querySelector("#age_output");
const timeOutput = document.querySelector("#time_output");
const locationOutput = document.querySelector("#location_output");
const beeCountOutput = document.querySelector("#beeCount_output");
const epipenJaOutput = document.querySelector("#epipen_ja_output");
const descriptionOutput = document.querySelector("#description_output");

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const name = formData.get("name");
  const age = formData.get("age");
  const time = formData.get("time");
  const location = formData.get("location");
  const beeCount = formData.get("beeCount");
  const epipenJa = formData.getAll("epipen");
  const description = formData.get("description");

  // 2. Vis værdierne i de rigtige output-felter
  nameOutput.textContent = name;
  ageOutput.textContent = age;
  timeOutput.textContent = time;
  locationOutput.textContent = location;
  beeCountOutput.textContent = beeCount;
  epipenJaOutput.textContent = epipenJa;
  descriptionOutput.textContent = description;

  //form.reset();
}
form.addEventListener("submit", handleSubmit);
