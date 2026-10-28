// alert("테스트");
const btn1 = document.querySelector("button");
const btns = document.querySelectorAll(".drum");

function handleclick(event) {
  //   alert("클릭됨!");
  //   console.log(event.target.textContent);
  let text = event.target.textContent;
  //   event.target.style.color = "white"; // 글자색을 흰색으로 한다
  soundDrum(text);
  console.log(text);
  animationDrum(text);
}
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", handleclick);
// }
function handlekey(event) {
  let text = event.key;
  //   document.querySelector("." + text).style.color = "white";
  animationDrum(text);
  soundDrum(text);
  console.log(text);
}

function soundDrum(text) {
  if (text === "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (text === "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (text === "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (text === "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (text === "j") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (text === "k") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (text === "l") {
    const audio = new Audio("sounds/kick.mp3");
    audio.play();
  }
}

function animationDrum(text) {
  const btn = document.querySelector("." + text);
  if (btn !== null) {
    btn.classList.add("pressed");
    setTimeout(() => {
      btn.classList.remove("pressed");
    }, 200);
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", handleclick);
});

document.addEventListener("keydown", handlekey);
