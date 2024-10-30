const messageDiv = document.querySelector(".messages");
const mainTerm = document.querySelector(".mainTerm");
const hackerMessages = [
  "Access granted",
  "Initializing sequence",
  "Bypassing security protocols",
  "Connection established",
  "Downloading files",
  "Encrypting data",
  "Running diagnostics",
  "Hacker mode activated",
  "System breach detected",
  "Executing commands",
  "Data retrieval complete",
  "Uploading to cloud storage",
  "Firewall breached",
  "Launching exploit",
  "Intrusion successful",
  "Exiting program",
];

//Delay Function 
const randomDelay = () => {
  return new Promise((resolve) => {
    let timeout = Math.floor(1 + 4 * Math.random());
    setTimeout(() => {
      console.log(timeout);
      resolve();
    }, timeout * 1000);
  });
};


// Add Items Function
const addItems = async () => {
  messageDiv.innerHTML = `<div class="message">
                <span>Initialising Hacking</span>
                <div class="blink inline">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>`;
  for (const message of hackerMessages) {
    await randomDelay();
    let newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.innerHTML = `<span>${message}</span>
      <div class="blink inline">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>`;
    messageDiv.appendChild(newMessage);
  }
  const finalMessage = document.createElement("div");
  finalMessage.classList.add("message", "final-message");
  finalMessage.innerHTML = `<span>Process complete</span>`;
  messageDiv.appendChild(finalMessage);
  setTimeout(()=>{
    showNextContent() //Call show next content
  },3000)
};

// NExt Content Function
const showNextContent = () =>{
  mainTerm.innerHTML = ``
  let video = document.createElement("VIDEO");
  video.setAttribute("src", "./vVDiWMXS.mp4");
  video.style.marginInline = 'auto'
  mainTerm.append(video);
  video.play();
}

// Universal blinking function for `.blink` elements
const applyBlinkEffect = (element) => {
  const dots = element.querySelectorAll("span");
  let count = 0;

  setInterval(() => {
    dots.forEach((dot, dotIndex) => {
      dot.style.opacity = dotIndex < count ? "1" : "0";
    });

    count++;

    if (count > 3) {
      count = 0;
      setTimeout(() => {
        dots.forEach((dot) => (dot.style.opacity = "0"));
      }, 500);
    }
  }, 500);
};

// Monitor for new `.blink` elements added to the `.messages` div (Chat GPT op)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.querySelector && node.querySelector(".blink")) {
        const blinkElement = node.querySelector(".blink");
        applyBlinkEffect(blinkElement);
      }
    });
  });
});
observer.observe(messageDiv, { childList: true, subtree: true });

addItems(); //Call additems
