const music = new Audio('audio/Ajay_Atual/Man Udhan Varyache Song   Shankar Mahadevan  Ajay Atul  Lyric video.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Abhi Mujh Mein Kahin <br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/O-Saiyyan-Agneepath-500-500.jpg",
        src: "audio/Ajay_Atual/Abhi Mujh Mein Kahin Agneepath 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Baadal Se Dosti<br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/Baadal-Se-Dosti-Jhund-500-500.jpg",
        src: "audio/Ajay_Atual/Baadal Se Dosti Jhund 128 Kbps.mp3"
    },
    {
        id: 3,
        songName: 'Maula Maula<br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/Maula-Maula.jpg",
        src: "audio/Ajay_Atual/Maula Maula Singham 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Nach Le Nach Le<br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/Nach-Le-Nach-Le-Bol-Bachchan-500-500.jpg",
        src: "audio/Ajay_Atual/Nach Le Nach Le Bol Bachchan 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'O Saiyyan<br><div class= "Subtitle"> Ajay-Atul </div> ',
        poster: "image/Ajay_Atual/O-Saiyyan-Agneepath-500-500.jpg",
        src: "audio/Ajay_Atual/O Saiyyan Agneepath 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Rampage<br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/Rampage-Notes-Gayab-500-500.jpg",
        src: "audio/Ajay_Atual/Rampage Notes Gayab 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Tharki Chokro<br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/Tharki-Chokro-PK-500-500.jpg",
        src: "audio/Ajay_Atual/Tharki Chokro Pk 128 Kbps.mp3"
    },
    {
        id: 8,
        songName: 'Tu Hai Sheetal Dhaara<br><div class="Subtitle">Ajay-Atul</div>',
        poster: "image/Ajay_Atual/Tu-Hai-Sheetal-Dhaara-Adipurush-500-500.jpg",
        src: "audio/Ajay_Atual/Tu Hai Sheetal Dhaara Adipurush 128 Kbps.mp3"
    },
    {
        id: 9,
        songName: 'Maay Bhavani <br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/tahaji.jpg",
        src: "audio/Ajay_Atual/Maay Bhavani  Tanhaji_ The Unsung Warrior  Ajay, Kajol  Sukhwinder S, Shreya G.mp3"
    },
    {
        id: 10,
        songName: 'Deva Shree Ganesha <br><div class="Subtitle">Ajay-Atul</div> ',
        poster: "image/Ajay_Atual/O-Saiyyan-Agneepath-500-500.jpg",
        src: "audio/Ajay_Atual/Deva Shree Ganesha Agneepath 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Aatach Baya Ka Baavarla<br><div class="Subtitle">Ajay Atul  Nagraj Popatrao Manjule</div> ',
        poster: "image/Ajay_Atual/sairat.jpeg",
        src: "audio/Ajay_Atual/Aatach Baya Ka Baavarla - Official Full Video  Sairat  Ajay Atul  Nagraj Popatrao Manjule.mp3"
    },
    {
        id: 12,
        songName: 'Apsara Aali <br><div class="Subtitle">Sonalee Kulkarni, Ajay - Atul</div> ',
        poster: "image/Ajay_Atual/apsra aali.jpeg",
        src: "audio/Ajay_Atual/Apsara Aali Full Song  Natarang  Sonalee Kulkarni, Ajay Atul  Marathi Songs.mp3"
    },
    {
        id: 13,
        songName: 'Chandra <br><div class="Subtitle">Ajay - Atul, Shreya Ghoshal</div> ',
        poster: "image/Ajay_Atual/chandra.jpeg",
        src: "audio/Ajay_Atual/Chandra Official Song  Chandramukhi  Marathi Song 2022  Ajay - Atul feat. Shreya Ghoshal  Amruta.mp3"
    },
    {
        id: 14,
        songName: 'Lallati Bhandar <br><div class="Subtitle"> Ajay-Atul, Mukta BarveUpendra, LimayeKishor Kadam</div> ',
        poster: "image/Ajay_Atual/lallati bhandar.jpeg",
        src: "audio/Ajay_Atual/Lallati Bhandar - Jogwa Full Song Ajay-Atul Mukta BarveUpendra LimayeKishor Kadam.mp3"
    },
    {
        id: 15,
        songName: 'Man Udhan Varyache<br><div class="Subtitle">Shankar Mahadevan,  Ajay - Atul</div>',
        poster: "image/Ajay_Atual/man udhan .jpeg",
        src: "audio/Ajay_Atual/Man Udhan Varyache Song   Shankar Mahadevan  Ajay Atul  Lyric video.mp3"
    },
    {
        id: 16,
        songName: 'Sairat Zaala Ji<br><div class="Subtitle">Ajay - Atul,  Nagraj Popatrao Manjule</div>',
        poster: "image/Ajay_Atual/sairat.jpeg",
        src: "audio/Ajay_Atual/Sairat Zaala Ji - Official Full Video  Sairat  Ajay Atul  Nagraj Popatrao Manjule.mp3"
    },
    {
        id: 17,
        songName: 'Sukh Kalale <br><div class="Subtitle">Ajay - Atual</div> ',
        poster: "image/Ajay_Atual/ved.jpeg",
        src: "audio/Ajay_Atual/Sukh Kalale  Riteish Deshmukh  Genelia Deshmukh  Mumbai Film Company  30th December.mp3"
    },
    {
        id: 18,
        songName: 'Tula Japnar Aahe <br><div class="Subtitle">Ajay - Atual, Amitraj,  Adarsh Shinde,  Ronkini Gupta</div>',
        poster: "image/Ajay_Atual/tula japnar aahe.jpeg",
        src: "audio/Ajay_Atual/Tula Japnar Aahe  Khari Biscuit  Amitraj  Adarsh Shinde  Ronkini Gupta.mp3"
    },
    {
        id: 19,
        songName: 'Turururu Chalu Nako <br><div class="Subtitle">Sachin-Jigar and Arijit Singh</div>',
        poster: "image/Ajay_Atual/turu turu.jpeg",
        src: "audio/Ajay_Atual/Turururu Chalu Nako.mp3"
    },
    {
        id: 20,
        songName: 'Umagaya Baap Ra<br><div class="Subtitle">Ajay Gogavale, Guru Thakur,  Vijay Gavande</div>',
        poster: "image/Ajay_Atual/umang baap.jpeg",
        src: "audio/Ajay_Atual/Umagaya Baap Ra Official Song  Ajay Gogavale  Guru Thakur  Vijay Gavande  बपलयक 1st Sep 2023.mp3"
    },
    {
        id: 22,
        songName: 'Vaat Disu De<br><div class="Subtitle">Ajay Gogavale, Yogita Godbole</div>',
        poster: "image/Ajay_Atual/vat disu de.jpeg",
        src: "audio/Ajay_Atual/Vaat Disu De  Jaundya Na Balasaheb  Ajay Gogavale & Yogita Godbole  Ajay - Atul.mp3"
    },
    {
        id: 23,
        songName: 'Devak Kalaji Re <br><div class="Subtitle">Ajay Gogavale, Vijay Gavande</div>',
        poster: "image/Ajay_Atual/deva kalji ghe.jpeg",
        src: "audio/Ajay_Atual/दवक कळज र Devak Kalaji Re  Emotional Song  Ajay Gogavale  Vijay Gavande  Redu Marathi Movie.mp3"
    },
    {
        id: 24,
        songName: ' Galavar Khali <br><div class="Subtitle">Swapnil Bandodkar, Ajay Atul</div>',
        poster: "image/Ajay_Atual/gala var khali.jpeg",
        src: "audio/Ajay_Atual/गलवर खळ  Galavar Khali Lyrics Video   Swapnil Bandodkar  Ajay Atul  Sagarika Marathi.mp3"
    },
    {
        id: 25,
        songName: 'Zingaat <br><div class="Subtitle">Nagraj Manjule, Ajay - Atul</div>',
        poster: "image/Ajay_Atual/sairat.jpeg",
        src: "audio/Ajay_Atual/Zingaat - Sairat  Official Full Video with English subtitles  Nagraj Manjule  Ajay Atul.mp3"
    },
    {
        id: 26,
        songName: 'Cham Cham Karta <br><div class="Subtitle">Ajay - Atul, Vaishali Samant</div>',
        poster: "image/Ajay_Atual/man udhan .jpeg",
        src: "audio/Ajay_Atual/Cham Cham Karta  Ajay Atul  Vaishali Samant   Sonali Bendre  Hit Song.mp3"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

function updateMasterControls(index) {
    const currentSong = songs[index];
    title.innerHTML = currentSong.songName;
    poster_master_play.src = currentSong.poster;
    music.src = currentSong.src;
}

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

function updateMasterControls(index) {
    const currentSong = songs[index - 1];
    title.innerHTML = currentSong.songName;
    poster_master_play.src = currentSong.poster;
    music.src = currentSong.src;
}


function playSong(index) {
    if (index < 1 || index > songs.length) {
        console.error('Invalid song index:', index);
        return;
    }
    const currentSong = songs[index - 1];
    updateMasterControls(index);
    music.play().then(() => {
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    }).catch(err => console.error('Playback error:', err));
}

document.getElementById('masterPlay').addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
    }
});

function makeAllPlays() {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}

let index = 0;
let title = document.getElementById('title');
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
Array.from(document.getElementsByClassName('playListPlay')).forEach((el, i) => {
    el.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        index = i + 1;

        const selectedSong = songs[i];

        download_music.href = selectedSong.src;
        download_music.setAttribute('download', selectedSong.songName.replace(/<br>.*?<\/div>/g, '').trim() + '.mp3')
        playSong(index);
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
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
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol.dot');
let audio = new Audio();

vol.addEventListener('input', () => {
    let vol_value = parseInt(vol.value);
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.volue > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_value}%`;
    vol_dot.style.left = `${vol_value}%`;
    music.volume = vol_value / 100;
});
let songIndex = 0;


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex++;
    }
    updateMasterControls(songIndex + 1);
    playSong(songIndex + 1);
});


document.getElementById('back').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex--;
    }
    updateMasterControls(songIndex + 1);
    playSong(songIndex + 1);
});


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});



let shuffle = document.querySelector('.shuffle');

shuffle.addEventListener('click', () => {
    let mode = shuffle.getAttribute('data-mode').trim();

    switch (mode) {
        case "next":
            shuffle.classList.replace('bi-music-note-beamed', 'bi-repeat');
            shuffle.setAttribute('data-mode', 'repeat');
            shuffle.innerText = 'repeat';
            break;

        case "repeat":
            shuffle.classList.replace('bi-repeat', 'bi-shuffle');
            shuffle.setAttribute('data-mode', 'random');
            shuffle.innerText = 'random';
            break;

        case "random":
            shuffle.classList.replace('bi-shuffle', 'bi-music-note-beamed');
            shuffle.setAttribute('data-mode', 'next');
            shuffle.innerText = 'next';
            break;
    }
});

let playMode = 'next'; 

shuffle.addEventListener('click', () => {
    if (playMode === 'next') {
        playMode = 'repeat';
        shuffle.classList.replace('bi-music-note-beamed', 'bi-repeat');
        shuffle.innerText = 'repeat';
    } else if (playMode === 'repeat') {
        playMode = 'random';
        shuffle.classList.replace('bi-repeat', 'bi-shuffle');
        shuffle.innerText = 'random';
    } else {
        playMode = 'next';
        shuffle.classList.replace('bi-shuffle', 'bi-music-note-beamed');
        shuffle.innerText = 'next';
    }
});
music.addEventListener('ended', ()=>{
    index++; 
    let mode = shuffle.getAttribute('data-mode').trim();

    if (mode === "next") {
        songIndex = (songIndex + 1) % songs.length;
    } 
    else if (mode === "repeat") {
        songIndex = songIndex;
    } 
    else if (mode === "random") {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === songIndex);
        songIndex = randomIndex;
    }
    updateMasterControls(songIndex + 1);
    playSong(songIndex + 1);
}); 
    
const playPauseBtn = document.getElementById('playPause');
const song = document.getElementById('audioPlayer');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'PAUSE';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'PLAY';
  }
});
