const music = new Audio('audio/Shreya/Bairi Piya Devdas 128 Kbps.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Barso Re<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Barso re.jpeg",
        src: "audio/Shreya/Barso Re Guru 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Angaaron<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Angaaron.jpeg",
        src: "audio/Shreya/Angaaron.mp3"
    },
    {
        id: 3,
        songName: 'Pinga <br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Pinga.jpeg",
        src: "audio/Shreya/Pinga Bajirao Mastani 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Daata Tu<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Data tu.jpeg",
        src: "audio/Shreya/Daata Tu Tiger Zinda Hai 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'Bairi Piya<br><div class= "Subtitle"> Shreya Ghoshal </div> ',
        poster: "image/Shreya/Bairi piya.jpeg",
        src: "audio/Shreya/Bairi Piya Devdas 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Param Sundari<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Param Sundari.jpeg",
        src: "audio/Shreya/Param Sundari Mimi 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Kahe Muskay Re<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Kaha muskay rejpeg.jpeg",
        src: "audio/Shreya/Kahe Muskay Re Bhavai 128 Kbps.mp3"
    },
    {
        id: 8,
        songName: 'Ore Saawariya<br><div class="Subtitle">Shreya Ghoshal, Amitabh Bachan</div>',
        poster: "image/Shreya/Ore Saawariya.jpeg",
        src: "audio/Shreya/Ore Saawariya Aladin 128 Kbps.mp3"
    },
    {
        id: 9,
        songName: 'O Bekhabar<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/O bekhabara.jpeg",
        src: "audio/Shreya/O Bekhabar Action Replayy 128 Kbps.mp3"
    },
    {
        id: 10,
        songName: 'O Jiji<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/O JIji.jpeg",
        src: "audio/Shreya/O Jiji Vivah 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Banarasiya<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Banarasiya.jpeg",
        src: "audio/Shreya/Banarasiya Raanjhanaa 128 Kbps.mp3"
    },
    {
        id: 12,
        songName: 'Chaka Chak<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/chaka-chak.jpg",
        src: "audio/Shreya/Chaka Chak Atrangi Re 128 Kbps.mp3"
    },
    {
        id: 13,
        songName: 'Dhoom Taana<br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Dhoom Tana.jpeg",
        src: "audio/Shreya/Dhoom Taana Om Shanti Om 128 Kbps.mp3"
    },
    {
        id: 14,
        songName: 'Teri Ore <br><div class="Subtitle"> Shreya Ghoshal</div> ',
        poster: "image/Shreya/Teri-Ore.jpg",
        src: "audio/Shreya/Teri Ore Singh Is Kinng 128 Kbps.mp3"
    },
    {
        id: 15,
        songName: 'Sunn Raha Hai <br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/sun raha haina.jpg",
        src: "audio/Shreya/Sunn Raha Hai Female Aashiqui 2 128 Kbps.mp3"
    },
    {
        id: 16,
        songName: 'Piyu Bole<br><div class="Subtitle">Shreya Ghoshal, Sonu Nigam</div>',
        poster: "image/Shreya/Piyu Bole.jpeg",
        src: "audio/Shreya/Piyu Bole Parineeta 128 Kbps.mp3"
    },
    {
        id: 17,
        songName: 'Ghoomar <br><div class="Subtitle">Shreya Ghoshal</div> ',
        poster: "image/Shreya/Ghoomar.jpeg",
        src: "audio/Shreya/Ghoomar Padmaavat 128 Kbps.mp3"
    },
    {
        id: 18,
        songName: 'Hasi <br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/Hasi.jpeg",
        src: "audio/Shreya/Hasi Female Version Hamari Adhuri Kahani Original Motion Picturetrack 128 Kbps.mp3"
    },
    {
        id: 19,
        songName: 'Mannat <br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/Mannat.jpeg",
        src: "audio/Shreya/Mannat Reprise Version Daawat E Ishq 128 Kbps.mp3"
    },
    {
        id: 20,
        songName: 'Jab Saiyaan Aaye<br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/Jab saiya.jpeg",
        src: "audio/Shreya/Jab Saiyaan Gangubai Kathiawadi 128 Kbps.mp3"
    },
    {
        id: 22,
        songName: 'Manwa Laage<br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/Manwa Lage.jpeg",
        src: "audio/Shreya/Manwa Laage Happy New Year 128 Kbps.mp3"
    },
    {
        id: 23,
        songName: 'Mere Dholna<br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/Mere Dholna.jpeg",
        src: "audio/Shreya/Mere Dholna Bhool Bhulaiyaa 128 Kbps.mp3"
    },
    {
        id: 24,
        songName: 'Nagada Sang Dhol <br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/Nagada Sang.jpeg",
        src: "audio/Shreya/Nagada Sang Dhol Goliyon Ki Raasleela Ram Leela 128 Kbps.mp3"
    },
    {
        id: 25,
        songName: 'Naina <br><div class="Subtitle">Badshah and Diljit Dosanjh</div>',
        poster: "image/Shreya/Rozana.jpg",
        src: "audio/Shreya/Rozana Naam Shabana 128 Kbps.mp3"
    },
    {
        id: 26,
        songName: 'Pal Pal..Har Pal<br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Shreya/Pal Pal Har.jpeg",
        src: "audio/Shreya/Pal Pal... Har Pal Lage Raho Munna Bhai 128 Kbps.mp3"
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
    
