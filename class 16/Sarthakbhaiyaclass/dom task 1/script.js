var btn = document.querySelector("#bottom button");
var progressbar = document.querySelector("#progress h2");

var progressstatus = document.querySelector("#bottom h3");

// console.log(btn,progress,progressstatus)
var kam;
var dep = Math.floor(Math.random() * 100);
let p = 0;

btn.addEventListener("click", function () {
  kam = setInterval(function () {
    p++;
    progressbar.style.width = `${p}%`;
    progressstatus.textContent = `${p}%`;
    btn.style.pointerEvents = "none";
  }, dep);

  setTimeout(function () {
    // console.log("done")
    clearInterval(kam);
    btn.textContent = "Downloaded";
    btn.style.backgroundColor = "green";
  }, dep * 100);
});
