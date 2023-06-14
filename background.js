chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer"], (data) => {
    const time = data.timer ? data.timer : 0;

    chrome.storage.local.set({ timer: time + 1 });

    chrome.action.setBadgeText({ text: `${time + 1}` });

    if (time % 60 === 0) {
      this.registration.showNotification("Timer", {
        body: `${Math.floor(time / 60)} minutes passed!`,
        icon: "icon.png",
      });
    }
  });
});
