let hihatSound: HTMLAudioElement;
let clap: HTMLAudioElement;
let boom: HTMLAudioElement;
let kick: HTMLAudioElement;
let openhat: HTMLAudioElement;
let ride: HTMLAudioElement;
let snare: HTMLAudioElement;
let tink: HTMLAudioElement;
let tom: HTMLAudioElement;

const channel1: any[] = [];
const channel2: any[] = [];
let selectedChannel: any = channel1;

appStart();
function appStart(): void {
  document.body.addEventListener("keypress", onKeyDown);
  const btnChannel1Play = document.querySelector("#btnChannel1");
  const btnChannel2Play = document.querySelector("#btnChannel2");
  const btnRecord1 = document.querySelector("#btnRecord1");
  const btnRecord2 = document.querySelector("#btnRecord2");
  btnRecord1.addEventListener("click", setRecording1);
  btnRecord2.addEventListener("click", setRecording2);
  btnChannel1Play.addEventListener("click", onPlayChanell1);
  btnChannel2Play.addEventListener("click", onPlayChanell2);
  getSounds();
}
function onPlayChanell1(): void {
  channel1.forEach((sound) => {
    setTimeout(() => playSound(sound.key), sound.time);
  });
}
function onPlayChanell2(): void {
  channel2.forEach((sound) => {
    setTimeout(() => playSound(sound.key), sound.time);
  });
}
function setRecording1(): void {
  selectedChannel = channel1;
}
function setRecording2(): void {
  selectedChannel = channel2;
}
function getSounds(): void {
  hihatSound = document.querySelector('[data-sound="hihat"]');
  clap = document.querySelector('[data-sound="clap"]');
  boom = document.querySelector('[data-sound="boom"]');
  kick = document.querySelector('[data-sound="kick"]');
  openhat = document.querySelector('[data-sound="openhat"]');
  ride = document.querySelector('[data-sound="ride"]');
  snare = document.querySelector('[data-sound="snare"]');
  tink = document.querySelector('[data-sound="tink"]');
  tom = document.querySelector('[data-sound="tom"]');
}

function onKeyDown(ev: KeyboardEvent): void {
  console.log(ev);
  const key = ev.key;
  const time = ev.timeStamp;
  if (selectedChannel == channel1) channel1.push({ key, time }); // skrocona notacja key: value
  if (selectedChannel == channel2) channel2.push({ key, time });
  playSound(key);
  const focusButton = () => {
    let btn = document.getElementById(key);
    btn.focus();
    window.setTimeout(function () {
      btn.blur();
    }, 300);
  };
  focusButton();
  console.log(channel1);
}

function playSound(key: string): void {
  // const keyboardKey = hihatSound.dataset.key
  switch (key) {
    case "q":
      hihatSound.currentTime = 0;
      hihatSound.play();
      break;
    case "w":
      clap.currentTime = 0;
      clap.play();
      break;
    case "e":
      boom.currentTime = 0;
      boom.play();
      break;
    case "r":
      kick.currentTime = 0;
      kick.play();
      break;
    case "t":
      openhat.currentTime = 0;
      openhat.play();
      break;
    case "a":
      ride.currentTime = 0;
      ride.play();
      break;
    case "s":
      snare.currentTime = 0;
      snare.play();
      break;
    case "d":
      tink.currentTime = 0;
      tink.play();
      break;
    case "f":
      tom.currentTime = 0;
      tom.play();
      break;
  }
}
