const nameInput = document.getElementById("input-name");
const timeNotificationElem = document.getElementById("input-notification");

const saveBtn = document.getElementById("btn-save");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const timeNotification = timeNotificationElem.value;

  chrome.storage.sync.set({ name, timeNotification });
});

chrome.storage.sync.get(["name"], (data) => {
  //   console.log(data);
  nameInput.value = data.name ? data.name : "";
  timeNotificationElem.value = data.timeNotification
    ? data.timeNotification
    : 10;
});
