const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");

function addMessage(sender, message) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

document.getElementById("send").onclick = () => {
  const msg = input.value.trim();
  if (!msg) return;
  addMessage("You", msg);
  input.value = "";
  getBotResponse(msg);
};

function getBotResponse(msg) {
  let response = "Sorry, I don't understand.";
  msg = msg.toLowerCase();

  if (msg.includes("python")) response = "Python is a high-level programming language known for its readability.";
  else if (msg.includes("html")) response = "HTML stands for HyperText Markup Language. It's used to structure web pages.";
  else if (msg.includes("variable")) response = "A variable stores a value, like `x = 10` in Python.";
  else if (msg.includes("loop")) response = "Loops are used to repeat actions. In Python: `for i in range(5): print(i)`.";

  setTimeout(() => addMessage("Bot", response), 500);
}
