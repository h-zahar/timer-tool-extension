const nameInput = document.getElementById("input-name");

const saveBtn = document.getElementById("btn-save");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name is set to: ${name}`);
  });
});

chrome.storage.sync.get(["name"], (data) => {
  //   console.log(data);
  nameInput.value = data.name ? data.name : "";
});
