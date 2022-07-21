//1ST APPROACH
//accessing the button
let btn = document.querySelector("button");
//Accessing the <div id="msg">
let msgID = document.getElementById("msg");
//Accessing last element child of the <div id="msg">: 3rd <p> tag
let msgIDLastChild = msgID.lastElementChild;
btn.onclick = () => {
  if (btn.textContent == "Expand") {
    // msgClass.style.height = "180px";
    msgID.style.height = "20%";
    msgID.style.backgroundColor = "aliceblue";
    btn.textContent = "Collapse";
    msgIDLastChild.style.display = "none";
  } else {
    msgIDLastChild.style.display = "block";
    msgID.style.backgroundColor = "white";
    // msgClass.style.height = "280px";
    msgID.style.height = "50%";
    btn.textContent = "Expand";
  }
};