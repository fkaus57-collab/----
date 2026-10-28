#😎드럼키트

-TOM1, 2, 3, 4, SNARE, KICK, CRASH

[배포주소] ()
```
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
```
