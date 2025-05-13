const music = new Audio('audio/Rehman/Ay Hairathe Guru 128 Kbps.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Afreeda Dil Bechara<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Afreeda.jpg",
        src: "audio/Rehman/Afreeda Dil Bechara 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Aise Na Dekho<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Aise-Na-Dekho-Raanjhanaa-500-500.jpg",
        src: "audio/Rehman/Aise Na Dekho Raanjhanaa 128 Kbps.mp3"
    },
    {
        id: 3,
        songName: 'Ay Hairathe<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/ay-hairathe-guru.jpg",
        src: "audio/Rehman/Ay Hairathe Guru 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Chale Chalo <br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Chale-Chalo.jpg",
        src: "audio/Rehman/Chale Chalo Lagaan 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'Challa<br><div class= "Subtitle"> A R Rehman </div> ',
        poster: "image/Rehman/Challa.jpg",
        src: "audio/Rehman/Challa Jab Tak Hai Jaan 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Dil Se Re<br><div class="Subtitle">A R Rehman </div> ',
        poster: "image/Rehman/Dil-Se-Re.jpg",
        src: "audio/Rehman/Dil Se Re A.r. Rahman 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Choti Si Chiraiya<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Choti-Si-Chiraiya-Mimi-500-500.jpg",
        src: "audio/Rehman/Choti Si Chiraiya Mimi 128 Kbps.mp3"
    },
    {
        id: 8,
        songName: 'Enna Sona<br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Enna-Sona.jpg",
        src: "audio/Rehman/Enna Sona Ok Jaanu 128 Kbps.mp3"
    },
    {
        id: 9,
        songName: 'Heera<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Heera.jpg",
        src: "audio/Rehman/Heera Highway 128 Kbps.mp3"
    },
    {
        id: 10,
        songName: 'Hosanna<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Hosanna.jpg",
        src: "audio/Rehman/Hosanna Ar Rahman 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Hututu<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Choti-Si-Chiraiya-Mimi-500-500.jpg",
        src: "audio/Rehman/Hututu Mimi 128 Kbps.mp3"
    },
    {
        id: 12,
        songName: 'Luka Chuppi <br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Luka-Chuppi.jpg",
        src: "audio/Rehman/Luka Chuppi Rang De Basanti 128 Kbps.mp3"
    },
    {
        id: 13,
        songName: 'Inn Lamhon Ke Daaman Mein <br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Inn-Lamhon-Ke-Daaman-Mein-Jodhaa-Akbar-500-500.jpg",
        src: "audio/Rehman/Inn Lamhon Ke Daaman Mein Jodhaa Akbar 128 Kbps.mp3"
    },
    {
        id: 14,
        songName: 'Maahi Ve <br><div class="Subtitle"> A R Rehman</div> ',
        poster: "image/Rehman/Maahi-Ve-Highway-500-500.jpg",
        src: "audio/Rehman/Maahi Ve Highway 128 Kbps.mp3"
    },
    {
        id: 15,
        songName: 'Matargashti <br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Matargashti.jpg",
        src: "audio/Rehman/Matargashti Tamasha 128 Kbps.mp3"
    },
    {
        id: 16,
        songName: 'Mohenjo Mohenjo <br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Mohenjo-Mohenjo.jpg",
        src: "audio/Rehman/Mohenjo Mohenjo Mohenjo Daro 128 Kbps.mp3"
    },
    {
        id: 17,
        songName: 'Raanjhanaa<br><div class="Subtitle">A R Rehman</div> ',
        poster: "image/Rehman/Raanjhanaa.jpg",
        src: "audio/Rehman/Raanjhanaa A.r. Rahman 128 Kbps.mp3"
    },
    {
        id: 18,
        songName: 'Kun Faaya Kun <br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Rockstar.jpeg",
        src: "audio/Rehman/Kun Faaya Kun Rockstar 128 Kbps.mp3"
    },
    {
        id: 19,
        songName: 'Tum Bhi Raahi<br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Tum-Bhi-Raahi.jpg",
        src: "audio/Rehman/Tum Bhi Raahi Mili 128 Kbps.mp3"
    },
    {
        id: 20,
        songName: 'Urvashi Urvashi<br><div class="Subtitle">AR Rehman</div>',
        poster: "image/Rehman/urvashi-urvashi-hum-se-hai-muqabala-500-500.jpg",
        src: "audio/Rehman/Urvashi Urvashi Hum Se Hai Muqabala 128 Kbps.mp3"
    },
    {
        id: 22,
        songName: 'Jashn E Bahaaraa<br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Inn-Lamhon-Ke-Daaman-Mein-Jodhaa-Akbar-500-500.jpg",
        src: "audio/Rehman/Jashn E Bahaaraa Jodhaa Akbar 128 Kbps.mp3"
    },
    {
        id: 23,
        songName: 'Yeh Haseen Vadiyan Yeh Khula Aasman <br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/yeh-haseen-vadiyan-yeh-khula-aasman-roja-500-500.jpg",
        src: "audio/Rehman/Yeh Haseen Vadiyan Yeh Khula Aasman Roja 128 Kbps.mp3"
    },
    {
        id: 24,
        songName: 'Rehnuma <br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/rehnuma-heropanti-2-500-500.jpg",
        src: "audio/Rehman/Rehnuma Heropanti 2 128 Kbps.mp3"
    },
    {
        id: 25,
        songName: 'Maa Tujhe Salaam <br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Maa-tujhe-salaam.jpg",
        src: "audio/Rehman/Maa Tujhe Salaam Vande Mataram 128 Kbps.mp3"
    },
    {
        id: 26,
        songName: 'Rehna Tu<br><div class="Subtitle">A R Rehman</div>',
        poster: "image/Rehman/Rehna-Tu-Delhi-6-500-500.jpg",
        src: "audio/Rehman/Rehna Tu Delhi 6 128 Kbps.mp3"
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
    
