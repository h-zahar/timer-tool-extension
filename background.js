chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer"], (data) => {
    const time = data.timer ? data.timer : 0;

    chrome.storage.local.set({ timer: time + 1 });

    chrome.action.setBadgeText({ text: `${time + 1}` });

    chrome.storage.sync.get(["timeNotification"], (data) => {
      if (
        data?.timeNotification &&
        time % (data?.timeNotification ? data.timeNotification * 60 : -1) === 0
      ) {
        this.registration.showNotification("Timer", {
          body: `${Math.floor(time / 60)} minutes passed!`,
          icon: "icon.png",
        });
      }
    });
  });
});

chrome.storage.sync.get(["name", "timeNotification"], (data) =>
  console.log(data)
);
