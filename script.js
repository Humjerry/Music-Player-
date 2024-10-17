const search = document.querySelector(".input");
const playButton = document.querySelector(".playbtn");
const nextButton = document.querySelector(".nextbtn");
const shuffleButton = document.querySelector(".shufflebtn");
const prevButton = document.querySelector(".prevbtn");
const repeatButton = document.querySelector(".exportbtn");
const audioplayer = document.getElementById("audioplayer");
const audio1 = document.querySelector(".audio1");
let currentSongIndex = 0;
const songs = document.querySelector(".trending1");
function loadSong(index) {
  const songsrc = songs[index].getAttribute("data-src");
  audioplayer.src = songsrc;
}

function playSong() {
  audioplayer.play();
}
playButton.addEventListener("click", playSong);

const displayBtn = document.querySelector(".displaybtn");
const generalBody = document.querySelector(".generalbody");
const footer = document.querySelector(".footer");
displayBtn.addEventListener("click", ()=>{
  generalBody.style.background="black";
  footer.style.background="black";
  generalBody.style.color="white";
  footer.style.color="white";
});
/* const audioPlayer = document.getElementById("audioPlayer");
const songList = document.getElementById("songList");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressBar = document.getElementById("progressBar");
const songtext = document.querySelector(".songtext");
let currentSongIndex = 0;
const songs = Array.from(songList.querySelectorAll("li"));
const li = document.querySelectorAll("li");
console.log(songs);

// Function to load a song by index
function loadSong(index) {
  const songSrc = songs[index].getAttribute("data-src");
  audioPlayer.src = songSrc;
  //   songtext.innerHTML = songs[0];
}

// Play current song
function playSong() {
  audioPlayer.play();
  pauseBtn.classList.remove("none");
  playBtn.classList.add("none");
}

// Pause current song
function pauseSong() {
  audioPlayer.pause();
  pauseBtn.classList.add("none");
  playBtn.classList.remove("none");
}

// Play next song in the list
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// Play previous song in the list
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// Update progress bar as the song plays
audioPlayer.addEventListener("timeupdate", function () {
  const duration = audioPlayer.duration;
  const currentTime = audioPlayer.currentTime;
  if (duration > 0) {
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = ${progressPercent}%;
  }
});

// Add event listener to play song when clicked
songList.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "LI") {
    currentSongIndex = songs.indexOf(e.target);
    loadSong(currentSongIndex);
    playSong();
  }
});

// Button event listeners
playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Load the first song by default
loadSong(currentSongIndex);*/

