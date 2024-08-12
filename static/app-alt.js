// code for the server is here -> https://github.com/katendeglory/node_push_notifications

// When loggin is not required

window.addEventListener('load', async () => {
  let mode = 'DEV';
  if (mode === 'DEV') return;

  //----------------------------------- Service Worker Registration

  const workerRegistration = await registerWorker();
  await navigator.serviceWorker.ready;

  //----------------------------------- Current Subscription

  const currentSubscription = await workerRegistration.pushManager.getSubscription();

  if (currentSubscription) {
    console.log('%c 👇 We Already Have a Current Subscription 👇', 'background: #222; color: #bada55');
    console.log(currentSubscription);
  }

  //----------------------------------- Notifications Logic
  const askNotifsPermissionAfterMills = 30000;

  if (Notification.permission === 'denied') return; // Leave him or her alone!

  else if (Notification.permission === "granted") {
    if (!currentSubscription) {
      const subscription = await registerPush(workerRegistration);
      // Save this 👆 subscription to the server's database for later
      console.log('%c 👇 We Have Created a New Subscription 👇', 'background: #222; color: #bada55');
      console.log(subscription);
    }
  }

  else if (Notification.permission !== 'granted') {
    setTimeout(async () => { // Delay notifications to allow the guy to at least see the site's content
      alert("💡 To get the latest news, please allow notifications on this Website!");

      Notification.requestPermission(async permission => {
        if (permission === "granted") {
          console.log("Thanks for allow notifications on this site!");
          if (!currentSubscription) {
            const subscription = await registerPush(workerRegistration);
            // Save this 👆 subscription to the server's database for later
            console.log('%c 👇 We Have Created a New Subscription 👇', 'background: #222; color: #bada55');
            console.log(subscription);
          }
        }
      });
    }, askNotifsPermissionAfterMills);
  }
});


// ------------------------------------------------------------------------------------------

//----------------------------------- Utility Functions

async function registerWorker() {
  return await navigator.serviceWorker.register("/sw.js");
}

async function registerPush(workerRegistration) {
  const publicVapidKey = "BJR38iSDBijTfcWD_jqvoSFxu9_w6UxRPrJKXj1oiN8c4qPH-tv6qPcGAp-ZJAzJaMJ8kMKaKJHGWc6LrIAHHAU";

  const urlBase64ToUint8Array = base64String => {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
    return outputArray;
  }

  // Send the subscription returned to the server to store it for future chron mass notifications
  return await workerRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
}

async function sendPush(subscription) {
  await fetch("http://localhost:5000/notify-sub", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
}



// ------------------------------------------------------------------------------------------

window.addEventListener('appinstalled', (evt) => {
  console.log('💡 The PWA is installed on this device');
  stylesheet = document.styleSheets[0]
  stylesheet.insertRule(".pwa-btn { display: none !important;}", 0);
});

if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('💡 The PWA is installed on this device');
  stylesheet = document.styleSheets[0]
  stylesheet.insertRule(".pwa-btn { display: none !important;}", 0);
} else {
  console.log('💡 The PWA is not installed on this device');
}