const music = new Audio('audio/mangeshkar/Yeh Kahan Aa Gaye Hum Silsila 128 Kbps.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'A B C D Chhodo <br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/a-b-c-d-chhodo-raja-jani-500-500.jpg",
        src: "audio/mangeshkar/A B C D Chhodo Raja Jani 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Aisa Lagta Hai<br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/aaj radha ko shyam.jpeg",
        src: "audio/mangeshkar/Aaj Radha Ko Shyam (Chaand Kaa Tukdaa) - (Raag.Fm).mp3"
    },
    {
        id: 3,
        songName: 'Ae Mere Watan Ke Logon<br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/Ae mere watan ke logo.jpeg",
        src: "audio/mangeshkar/Ae Mere Watan Ke Logon - (Raag.Fm).mp3"
    },
    {
        id: 4,
        songName: 'Ajeeb Dastan Hai Yeh <br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/Ajeeb dasta hai.jpeg",
        src: "audio/mangeshkar/Ajeeb Dastan Hai Yeh - (Raag.Fm).mp3"
    },
    {
        id: 5,
        songName: 'Bahon Mein Chale Aao <br><div class= "Subtitle"> Lata Mangeshkar </div> ',
        poster: "image/Mangeshkar/bhaho mai chale.jpeg",
        src: "audio/mangeshkar/Bahon Mein Chale Aao (Anamika) - (Raag.Fm).mp3"
    },
    {
        id: 6,
        songName: 'Bhanware Ne Khilaya Phool<br><div class="Subtitle"> Lata Mangeshkara </div> ',
        poster: "image/Mangeshkar/Bhavre ne khilaya.jpeg",
        src: "audio/mangeshkar/Bhanware Ne Khilaya Phool - (Raag.Fm).mp3"
    },
    {
        id: 7,
        songName: 'Bheegi Bheegi Raaton Mein<br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/Bheegi bheegi rato.jpeg",
        src: "audio/mangeshkar/Bheegi Bheegi Raaton Mein (Ajnabee) - (Raag.Fm).mp3"
    },
    {
        id: 8,
        songName: 'Chabi Kho Jaye<br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/chabi kho jaye.jpeg",
        src: "audio/mangeshkar/Chabi Kho Jaye - (Raag.Fm).mp3"
    },
    {
        id: 9,
        songName: 'Chal Kahin Door Nikal Jayen<br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/chal kahi ddor nikal.jpeg",
        src: "audio/mangeshkar/Chal Kahin Door Nikal Jayen - (Raag.Fm).mp3"
    },
    {
        id: 10,
        songName: 'Chand Phir Nikla Magar Tum Na Aye<br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/chand fir nikla magar.jpeg",
        src: "audio/mangeshkar/Chand Phir Nikla Magar Tum Na Aye - (Raag.Fm).mp3"
    },
    {
        id: 11,
        songName: 'Dafli Wale Dafli Baja<br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/dhafli wale.jpeg",
        src: "audio/mangeshkar/Dafli Wale Dafli Baja - (Raag.Fm).mp3"
    },
    {
        id: 12,
        songName: 'Dheere Dheere Bol Koi Sun Na Le <br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/dheere dheeere bol.jpeg",
        src: "audio/mangeshkar/Dheere Dheere Bol Koi Sun Na Le (Gora Aur Kala) - (Raag.Fm).mp3"
    },
    {
        id: 13,
        songName: 'Ek Munda <br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/ek munda .jpeg",
        src: "audio/mangeshkar/Ek Munda (Karan Arjun) - (Raag.Fm).mp3"
    },
    {
        id: 14,
        songName: 'I Am Very Very Sorry <br><div class="Subtitle"> Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/I am very very.jpeg",
        src: "audio/mangeshkar/I Am Very Very Sorry (Chaand Kaa Tukdaa) - (Raag.Fm).mp3"
    },
    {
        id: 15,
        songName: 'Jai Jai Shiv Shankar<br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/jay jay shiv.jpeg",
        src: "audio/mangeshkar/Jai Jai Shiv Shankar (Aap Ki Kasam) - (Raag.Fm).mp3"
    },
    {
        id: 16,
        songName: 'Lag Ja Gale Se Phir <br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/lag ja gale.jpeg",
        src: "audio/mangeshkar/Lag Ja Gale Se Phir (Woh Kaun Thi) - (Raag.Fm).mp3"
    },
    {
        id: 17,
        songName: 'Mere Khwabon Mein <br><div class="Subtitle">Lata Mangeshkar</div> ',
        poster: "image/Mangeshkar/mere khabo mai jo aaye.jpeg",
        src: "audio/mangeshkar/Mere Khwabon Mein (Dilwale Dulhania Le Jayenge) - (Raag.Fm).mp3"
    },
    {
        id: 18,
        songName: 'Oopar Khuda Aasman Neeche <br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/opar khuda.jpeg",
        src: "audio/mangeshkar/Oopar Khuda Aasman Neeche - Female (Kachche Dhaage) - (Raag.Fm).mp3"
    },
    {
        id: 19,
        songName: 'Salame-Ishq Meri Jaan <br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/salame ishq meri.jpeg",
        src: "audio/mangeshkar/Salame-Ishq Meri Jaan (Muqaddar Ka Sikandar) - (Raag.Fm).mp3"
    },
    {
        id: 20,
        songName: 'Tere Chehre Se Nazar Nahin<br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/Tere chahre se.jpeg",
        src: "audio/mangeshkar/Tere Chehre Se Nazar Nahin - (Raag.Fm).mp3"
    },
    {
        id: 22,
        songName: 'Tere Mere Honthon Pe<br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/tere mere hotho.jpeg",
        src: "audio/mangeshkar/Tere Mere Honthon Pe - (Raag.Fm).mp3"
    },
    {
        id: 23,
        songName: 'Tu Mujhe Kabool <br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/tu muje kubool.jpeg",
        src: "audio/mangeshkar/Tu Mujhe Kabool - Lata (Khuda Gawah) - (Raag.Fm).mp3"
    },
    {
        id: 24,
        songName: 'Tum Aa Gaye Ho Noor Aa Gaya <br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/tum aagye ho.jpeg",
        src: "audio/mangeshkar/Tum Aa Gaye Ho Noor Aa Gaya (Aandhi) - (Raag.Fm).mp3"
    },
    {
        id: 25,
        songName: 'Tune O Rangeele  <br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/tune o rangele.jpeg",
        src: "audio/mangeshkar/Tune O Rangeele (Kudrat) - (Raag.Fm).mp3"
    },
    {
        id: 26,
        songName: '<h5>Khubsuroot<br><div class="Subtitle">Lata Mangeshkar</div>',
        poster: "image/Mangeshkar/yeh-kahan-aa-gaye-hum-silsila-500-500.jpg",
        src: "audio/mangeshkar/Yeh Kahan Aa Gaye Hum Silsila 128 Kbps.mp3"
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
    
