const nameInput = document.getElementById("input-name");

const saveBtn = document.getElementById("btn-save");

saveBtn.addEventListener("click", () => {
  console.log(nameInput.value);
});
