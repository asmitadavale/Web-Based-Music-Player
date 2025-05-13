const music = new Audio('audio/Sunidhi/The Disco Song (Student of the Year) - (Raag.Fm).mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Adhure <br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/adhure.jpeg",
        src: "audio/Sunidhi/Adhure Mary Kom 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Aisa Kyun Maa<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/aisa kyu maa.jpeg",
        src: "audio/Sunidhi/Aisa Kyun Maa Neerja 128 Kbps.mp3"
    },
    {
        id: 3,
        songName: 'Baadal<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/baadal.jpeg",
        src: "audio/Sunidhi/Baadal Akira 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Ainvayi Ainvayi <br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/baand baja barat.jpeg",
        src: "audio/Sunidhi/Ainvayi Ainvayi Band Baaja Baaraat 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'Be Intehaan<br><div class= "Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/be intenha.jpeg",
        src: "audio/Sunidhi/Be Intehaan Race 2 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Bhage Re Mann<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/bhage re.jpeg",
        src: "audio/Sunidhi/Bhage Re Mann Chameli 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Bumbro<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/bumbro.jpeg",
        src: "audio/Sunidhi/Bumbro Mission Kashmir 128 Kbps.mp3"
    },
    {
        id: 8,
        songName: 'Chhan Ke Mohalla<br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/chan ke mohlla.jpeg",
        src: "audio/Sunidhi/Chhan Ke Mohalla Action Replayy 128 Kbps.mp3"
    },
    {
        id: 9,
        songName: 'Chhaliya<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/chhaliya.jpeg",
        src: "audio/Sunidhi/Chhaliya Tashan 128 Kbps.mp3"
    },
    {
        id: 10,
        songName: 'Chokra Jawaan<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/chokra jawan.jpeg",
        src: "audio/Sunidhi/Chokra Jawaan Ishaqzaade 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Chor Bazari<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/chor bajari.jpeg",
        src: "audio/Sunidhi/Chor Bazari Love Aaj Kal 128 Kbps.mp3"
    },
    {
        id: 12,
        songName: 'Dekho Na <br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/dekho na.jpeg",
        src: "audio/Sunidhi/Dekho Na Fanaa 128 Kbps.mp3"
    },
    {
        id: 13,
        songName: 'Desi Girl <br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/desi girl.jpeg",
        src: "audio/Sunidhi/Desi Girl Dostana Original Motion Picturetrack 128 Kbps.mp3"
    },
    {
        id: 14,
        songName: 'Dhoom Machale<br><div class="Subtitle"> Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/dhoom .jpeg",
        src: "audio/Sunidhi/Dhoom Machale Sunidhi Chauhan 128 Kbps.mp3"
    },
    {
        id: 15,
        songName: 'Aaja Nachle<br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/download.jpeg",
        src: "audio/Sunidhi/Aaja Nachle Sunidhi Chauhan 128 Kbps.mp3"
    },
    {
        id: 16,
        songName: 'Ek Nazar Mein Bhi <br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/ek najar mai bhi.jpg",
        src: "audio/Sunidhi/Ek Nazar Mein Bhi Taxi No. 9211 128 Kbps.mp3"
    },
    {
        id: 17,
        songName: 'Girls Like To Swing<br><div class="Subtitle">Sunidhi Chauhan</div> ',
        poster: "image/Sunidhi/giel like.jpeg",
        src: "audio/Sunidhi/Girls Like To Swing Dil Dhadakne Do 128 Kbps.mp3"
    },
    {
        id: 18,
        songName: 'Ishq Sufiyana <br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/ishq sufiyana.jpg",
        src: "audio/Sunidhi/Ishq Sufiyana Female The Dirty Picture 128 Kbps.mp3"
    },
    {
        id: 19,
        songName: 'Janib <br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/janib.jpeg",
        src: "audio/Sunidhi/Janib Female Dilliwaali Zaalim Girlfriend 128 Kbps.mp3"
    },
    {
        id: 20,
        songName: 'Kafirana<br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/kafirana.jpeg",
        src: "audio/Sunidhi/Kafirana (Joker) - (Raag.Fm).mp3"
    },
    {
        id: 22,
        songName: 'Mehbooba Mehbooba<br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/mehbooba .jpeg",
        src: "audio/Sunidhi/Mehbooba Mehbooba (Ajnabee) - (Raag.Fm).mp3"
    },
    {
        id: 23,
        songName: 'Punjabi Wedding Song <br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/panjabi weddinh song.jpeg",
        src: "audio/Sunidhi/Punjabi Wedding Song (Hasee Toh Phasee) - (Raag.Fm).mp3"
    },
    {
        id: 24,
        songName: 'Race Saanson Ki <br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/Race.jpeg",
        src: "audio/Sunidhi/Race Saanson Ki (Race) - (Raag.Fm).mp3"
    },
    {
        id: 25,
        songName: 'Soniye Ve <br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/soniye ve.jpeg",
        src: "audio/Sunidhi/Soniye Ve (Kismat Konnection) - (Raag.Fm).mp3"
    },
    {
        id: 26,
        songName: 'Te Amo<br><div class="Subtitle">Sunidhi Chauhan</div>',
        poster: "image/Sunidhi/Te amo.jpeg",
        src: "audio/Sunidhi/Te Amo Female Dum Maaro Dum 128 Kbps.mp3"
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
    
