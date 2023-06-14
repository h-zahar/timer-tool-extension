const timeElem = document.getElementById("time");

const nameElem = document.getElementById("name");

const timerElem = document.getElementById("timer");

const updateTime = () => {
  const currTime = new Date().toLocaleTimeString();
  //     .split(" ")[0]
  //     .split(":")
  //     .slice(0, 2)
  //     .join(":") +
  //   " " +
  //   new Date().toLocaleTimeString().split(" ")[1];
  timeElem.textContent = `The time is: ${currTime}`;
};

setInterval(updateTime, 100);

chrome.action.setBadgeText({ text: "Time" }, () => {
  console.log("Setting Badge Text");
});

chrome.storage.sync.get(["name"], (data) => {
  nameElem.textContent = `Hello ${data.name ? data.name : "Stranger"}`;
});

const updateTimer = () => {
  chrome.storage.local.get(["timer"], (data) => {
    timerElem.textContent = `Timer: ${data.timer ? data.timer : 0} seconds`;
  });
};

updateTimer();
setInterval(updateTimer, 100);
