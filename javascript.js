const nameInput = document.getElementById("nameInput");
const dateInput = document.getElementById("dateInput");
const signedInput = document.getElementById("signedInput");
const signatureOptions = document.getElementById("signatureOptions");

nameInput.addEventListener("input", () => {
  document.getElementById("nameOverlay").textContent = nameInput.value;
});

signedInput.addEventListener("input", () => {
  document.getElementById("signedOverlay").textContent = signedInput.value.toUpperCase();
});

window.toggleSignatureOptions = function () {
  signatureOptions.style.display = signatureOptions.style.display === "flex" ? "none" : "flex";
};

window.selectSignature = function (name) {
  signedInput.value = name;
  document.getElementById("signedOverlay").textContent = name.toUpperCase();
  signatureOptions.style.display = "none";
};

window.setDate = function () {
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString("fr-FR", options);
  dateInput.value = formattedDate;
  document.getElementById("dateOverlay").textContent = "Pour avoir participé à la Formation PPA réalisé par les Sheriffs le " + formattedDate + ".";
};

window.downloadImage = function () {
  const nom = nameInput.value.trim() || "non_renseigne";
  const fileName = `PPA.${nom}.png`;

  console.log("Sa marche zebi");

  html2canvas(document.getElementById("contract")).then(canvas => {
    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL();
    link.click();
  });
};
