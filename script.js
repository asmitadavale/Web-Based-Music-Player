const music = new Audio("audio/Khoobsurat_10.mp3");

const songs = [
  {
    id: 1,
    songName:
      'Love Me Like You Do <br><div class="Subtitle">Ellie Goulding</div> ',
    poster: "image/LMLYD.jpg",
    src: "audio/Love-Me-Like-You-Do_1.mp3",
  },
  {
    id: 2,
    songName: 'Memories <br><div class="Subtitle">Maroon 5</div> ',
    poster: "image/mamoories.jpeg",
    src: "audio/Memories---Maroon_2.mp3",
  },
  {
    id: 3,
    songName: 'Lover <br><div class="Subtitle">Taylor Swift</div> ',
    poster: "image/lover.jpeg",
    src: "audio/Lover_3.mp3",
  },
  {
    id: 4,
    songName: 'Levitating  <br><div class="Subtitle">Dua Lipa</div> ',
    poster: "image/Lavitating.jpeg",
    src: "audio/Levitating_4.mp3",
  },
  {
    id: 5,
    songName: 'Night Changes<br><div class= "Subtitle"> One Direction </div> ',
    poster: "image/night-changeg.jpeg",
    src: "audio/Night-Changes-One-Direction_5.mp3",
  },
  {
    id: 6,
    songName: 'Favorite<br><div class="Subtitle">Isabel Larosa</div> ',
    poster: "image/faovrite.jpeg",
    src: "audio/Favorite_6.mp3",
  },
  {
    id: 7,
    songName: 'Perfect<br><div class="Subtitle">Ed Sheeran</div> ',
    poster: "image/perfect.jpeg",
    src: "audio/Perfect Ed Sheeran_7.mp3",
  },
  {
    id: 8,
    songName: 'No Lie<br><div class="Subtitle">Sean Paul</div>',
    poster: "image/no-lie.jpeg",
    src: "audio/No Lie.mp3",
  },
  {
    id: 9,
    songName: 'Closer<br><div class="Subtitle">Halsey</div> ',
    poster: "image/closer.jpeg",
    src: "audio/Closer.mp3",
  },
  {
    id: 10,
    songName:
      'What Makes You Beautiful<br><div class="Subtitle">One Direction</div> ',
    poster: "image/WMYB.jpeg",
    src: "audio/What Makes You Beautiful.mp3",
  },
  {
    id: 11,
    songName: 'Steal My Girl<br><div class="Subtitle">One Direction</div> ',
    poster: "image/SMG.jpeg",
    src: "audio/Steal My Girl.mp3",
  },
  {
    id: 12,
    songName: 'Tohba Tohba <br><div class="Subtitle">Tylore Swifft</div> ',
    poster: "image/toba.jpeg",
    src: "audio/Tauba Tauba - Karan Aujla.mp3",
  },
  {
    id: 13,
    songName: 'Tainu Khabar Nahi <br><div class="Subtitle">Karan Aujla</div> ',
    poster: "image/tainu-khabar.jpeg",
    src: "audio/Tainu-Khabar-Nahi).mp3",
  },
  {
    id: 14,
    songName:
      'Tum se <br><div class="Subtitle"> Sachin-Jigar, Raghav Chaitanya, Varun Jain</div> ',
    poster: "image/tum-se.jpeg",
    src: "audio/Tum Se_320(PagalWorld.com.sb).mp3",
  },
  {
    id: 15,
    songName:
      'O Mari Laila<br><div class="Subtitle">Atif Aslam , Jyotica Tangri</div>',
    poster: "image/o-meri-laila.jpeg",
    src: "audio/O Meri Laila Radio.mp3",
  },
  {
    id: 16,
    songName: 'Satranga <br><div class="Subtitle">Arijit Singh</div>',
    poster: "image/satranga.jpeg",
    src: "audio/Satranga_320(PagalWorld.com.sb).mp3",
  },
  {
    id: 17,
    songName: 'Nadaniya <br><div class="Subtitle">Akshath Acharya</div> ',
    poster: "image/nadaniya.jpeg",
    src: "audio/Nadaaniyan_12.mp3",
  },
  {
    id: 18,
    songName: 'Heeriye <br><div class="Subtitle">Arjit Singh</div>',
    poster: "image/heeriye.jpeg",
    src: "audio/_Heeriye_8.mp3",
  },
  {
    id: 19,
    songName:
      'Apna Banale <br><div class="Subtitle">Sachin-Jigar and Arijit Singh</div>',
    poster: "image/apna-banale.jpeg",
    src: "audio/Apna-Bana-Le.mp3",
  },
  {
    id: 20,
    songName:
      'Aayi nai<br><div class="Subtitle">Sachin-Jigar,Pawan Singh,Divya Kumar</div>',
    poster: "image/aayi-nyi.jpeg",
    src: "audio/Aayi Nai_9.mp3",
  },
  {
    id: 21,
    songName: 'O mahi<br><div class="Subtitle">Arjit Singh</div>',
    poster: "image/o-mahi.jpeg",
    src: "audio/O Mahi O Mahi_13.mp3",
  },
  {
    id: 22,
    songName: 'Suniyan Suniyan <br><div class="Subtitle">Juss, MixSingh</div>',
    poster: "image/suniyan.jpeg",
    src: "audio/Suniyan Suniyan_15.mp3",
  },
  {
    id: 23,
    songName: 'Akhiya Gulab <br><div class="Subtitle">Mitraz</div>',
    poster: "image/akhiya-gulab.jpeg",
    src: "audio/Akhiyaan Gulaab_320(PagalWorld.com.sb).mp3",
  },
  {
    id: 24,
    songName:
      'Naina <br><div class="Subtitle">Badshah and Diljit Dosanjh</div>',
    poster: "image/naina.jpeg",
    src: "audio/_Naina_320(PagalWorld.com.sb).mp3",
  },
  {
    id: 25,
    songName: '<h5>Khubsuroot<br><div class="Subtitle">Vishal Mishra</div>',
    poster: "image/khoobsurat.jpeg",
    src: "audio/Khoobsurat_10.mp3",
  },
  {
    id: 26,
    songName: '<h5>Angaaron<br><div class="Subtitle">Shreya Ghoshal</div>',
    poster: "image/Shreya/Angaaron.jpeg",
    src: "audio/Angaaron.mp3",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let search_results = document.getElementsByClassName("search_results")[0];
songs.forEach((element) => {
  const { id, songName, poster } = element;

  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  card.innerHTML = `
            <img src="${poster}" alt="">
            // <div class="content">${songName}</div>`;
  
  search_results.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase().trim();
  let items = search_results.getElementsByTagName("a");

  let matchFound = false;

  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];

    if (as) {
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().includes(input_value) && input_value !== "") {
      items[index].style.display = "flex";
      matchFound = true;
    } else {
      items[index].style.display = "none";
    }

    if (input.value == 0) {
      search_results.style.display = "none";
    } else {
      search_results.style.display = "";
    }
  }
}
});

function updateMasterControls(index) {
  const currentSong = songs[index];
  title.innerHTML = currentSong.songName;
  poster_master_play.src = currentSong.poster;
  music.src = currentSong.src;
}

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

function updateMasterControls(index) {
  const currentSong = songs[index - 1];
  title.innerHTML = currentSong.songName;
  poster_master_play.src = currentSong.poster;
  music.src = currentSong.src;
}

function playSong(index) {
  if (index < 0 || index > songs.length) {
    console.error("Invalid song index:", index);
    return;
  }
  const currentSong = songs[index - 1];
  updateMasterControls(index);
  music.src = currentSong.src;
  music
    .play()
    .then(() => {
      wave.classList.add("active1");
      masterPlay.classList.remove("bi-play-circle-fill");
      masterPlay.classList.add("bi-pause-circle-fill");
    })
    .catch((err) => console.error("Playback error:", err));
}

document.getElementById("masterPlay").addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-circle-fill");
    masterPlay.classList.remove("bi-pause-circle-fill");
  }
});

function makeAllPlays() {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
}

let index = 0;
let title = document.getElementById("title");
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
Array.from(document.getElementsByClassName("playListPlay")).forEach((el, i) => {
  el.addEventListener("click", (e) => {
    makeAllPlays();
    e.target.classList.remove("bi-play-circle-fill");
    e.target.classList.add("bi-pause-circle-fill");
    index = i + 1;

    const selectedSong = songs[i];

    download_music.href = selectedSong.src;
    download_music.setAttribute(
      "download",
      selectedSong.songName.replace(/<br>.*?<\/div>/g, "").trim() + ".mp3"
    );
    playSong(index);
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  if (isNaN(music_dur)) {
    return;
  }

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1} : ${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = (music_curr / music_dur) * 100;
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${progressBar}%`;
  dot.style.left = `${progressBar}%`;
});
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol.dot");
let audio = new Audio();

vol.addEventListener("input", () => {
  let vol_value = parseInt(vol.value);
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0 && vol.value <= 50) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.volue > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_value}%`;
  vol_dot.style.left = `${vol_value}%`;
  music.volume = vol_value / 100;
});
let songIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  updateMasterControls(songIndex + 1);
  playSong(songIndex + 1);
});

document.getElementById("back").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex--;
  }
  updateMasterControls(songIndex + 1);
  playSong(songIndex + 1);
});

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});
pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

let shuffle = document.querySelector(".shuffle");

shuffle.addEventListener("click", () => {
  let mode = shuffle.getAttribute("data-mode").trim();

  switch (mode) {
    case "next":
      shuffle.classList.replace("bi-music-note-beamed", "bi-repeat");
      shuffle.setAttribute("data-mode", "repeat");
      break;

    case "repeat":
      shuffle.classList.replace("bi-repeat", "bi-shuffle");
      shuffle.setAttribute("data-mode", "random");
      break;

    case "random":
      shuffle.classList.replace("bi-shuffle", "bi-music-note-beamed");
      shuffle.setAttribute("data-mode", "next");
      break;
  }
});

let playMode = "next";

shuffle.addEventListener("click", () => {
  if (playMode === "next") {
    playMode = "repeat";
    shuffle.classList.replace("bi-music-note-beamed", "bi-repeat");
    shuffle.innerText = "repeat";
  } else if (playMode === "repeat") {
    playMode = "random";
    shuffle.classList.replace("bi-repeat", "bi-shuffle");
    shuffle.innerText = "random";
  } else {
    playMode = "next";
    shuffle.classList.replace("bi-shuffle", "bi-music-note-beamed");
    shuffle.innerText = "next";
  }
});

music.addEventListener("ended", () => {
  index++;
  let mode = shuffle.getAttribute("data-mode").trim();

  if (mode === "next") {
    songIndex = (songIndex + 1) % songs.length;
  } else if (mode === "repeat") {
    songIndex = songIndex;
  } else if (mode === "random") {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === songIndex);
    songIndex = randomIndex;
  }
  if (songIndex === 0) {
    songIndex = 0;
  }
  updateMasterControls(songIndex + 1);
  playSong(songIndex + 1);
});

