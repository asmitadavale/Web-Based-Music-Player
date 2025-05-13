const music = new Audio('audio/Anirudh/Thunder Kaaran Veeran 128 Kbps.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Aao Killelle <br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/AAO-KILLELLE-Anirudh-Ravichander-500-500.jpg",
        src: "audio/Anirudh/Aao Killelle Anirudh Ravichander 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Aararaari Raaro <br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/Aararaari-Raaro-Jawan-TAMIL-500-500.jpg",
        src: "audio/Anirudh/Aararaari Raaro Jawan Tamil 128 Kbps.mp3"
    },
    {
        id: 3,
        songName: 'Anbenum <br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/anbenum-leo-500-500.jpg",
        src: "audio/Anirudh/Anbenum Leo 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Andha Kanna Paathaakaa <br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/Andha-Kanna-Paathaakaa-Master-500-500.jpg",
        src: "audio/Anirudh/Andha Kanna Paathaakaa Master 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'Arabic Kuthu<br><div class= "Subtitle">Anirudh Ravichander </div> ',
        poster: "image/Anirudh/arabic-kuthu-beast-500-500.jpg",
        src: "audio/Anirudh/Arabic Kuthu Beast 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Ayudha<br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/ayudha-pooja-devara-part-1-tamil-500-500.jpg",
        src: "audio/Anirudh/Ayudha Pooja Devara Part 1 Tamil 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Beast Mode<br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/beast-mode-beast.jpg",
        src: "audio/Anirudh/Beast Mode Beast 128 Kbps.mp3"
    },
    {
        id: 8,
        songName: 'Bloody Sweet<br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/bloody-sweet-leo-tamil-500-500.jpg",
        src: "audio/Anirudh/Bloody Sweet Leo Tamil 128 Kbps.mp3"
    },
    {
        id: 9,
        songName: 'Bujji Jagame<br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/bujji-jagame-thandhiram-500-500.jpg",
        src: "audio/Anirudh/Bujji Jagame Thandhiram 128 Kbps.mp3"
    },
    {
        id: 10,
        songName: 'Dippam Dappam<br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/dippam-dappam-kaathuvaakula-rendu-kaadhal-500-500.jpg",
        src: "audio/Anirudh/Dippam Dappam Kaathuvaakula Rendu Kaadhal 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Fear<br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/fear-devara.jpg",
        src: "audio/Anirudh/Fear Devara 128 Kbps.mp3"
    },
    {
        id: 12,
        songName: 'Hukum <br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/hukum-reloaded-rajini-the-jailer-2-500-500.jpg",
        src: "audio/Anirudh/Hukum Reloaded Rajini The Jailer 2 128 Kbps.mp3"
    },
    {
        id: 13,
        songName: 'Jawan Title <br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/Jawan-Title-Track-Anirudh-Ravichander-500-500.jpg",
        src: "audio/Anirudh/Jawan Title Track Anirudh Ravichander 128 Kbps.mp3"
    },
    {
        id: 14,
        songName: 'Jolly O Gymkhana <br><div class="Subtitle"> Anirudh Ravichander</div> ',
        poster: "image/Anirudh/jolly-o-gymkhana-beast-500-500.jpg",
        src: "audio/Anirudh/Jolly O Gymkhana Beast 128 Kbps.mp3"
    },
    {
        id: 15,
        songName: 'Kaavaalaa<br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/kaavaalaa-jailer-500-500.jpg",
        src: "audio/Anirudh/Kaavaalaa Jailer 128 Kbps.mp3"
    },
    {
        id: 16,
        songName: 'Kadhal <br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/kadhal-psycho-saaho-500-500.jpg",
        src: "audio/Anirudh/Kadhal Psycho Saaho 128 Kbps.mp3"
    },
    {
        id: 17,
        songName: 'Life Of Pazham <br><div class="Subtitle">Anirudh Ravichander</div> ',
        poster: "image/Anirudh/life-of-pazham-thiruchitrambalam-500-500.jpg",
        src: "audio/Anirudh/Life Of Pazham Thiruchitrambalam 128 Kbps.mp3"
    },
    {
        id: 18,
        songName: 'Mainaru Vetti Katti <br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/mainaru-vetti-katti-dasara-tamil-500-500.jpg",
        src: "audio/Anirudh/Mainaru Vetti Katti Dasara Tamil 128 Kbps.mp3"
    },
    {
        id: 19,
        songName: 'Marakkavillayae <br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/marakkavillayae-jersey-500-500.jpg",
        src: "audio/Anirudh/Marakkavillayae Jersey 128 Kbps.mp3"
    },
    {
        id: 20,
        songName: 'Megham Karukatha<br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/megham-karukatha-thiruchitrambalam-500-500.jpg",
        src: "audio/Anirudh/Megham Karukatha Thiruchitrambalam 128 Kbps.mp3"
    },
    {
        id: 22,
        songName: 'Natpu<br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/Natpu-From-RRR-Anirudh-Ravichander-500-500.jpg",
        src: "audio/Anirudh/Natpu Rrr Anirudh 128 Kbps.mp3"
    },
    {
        id: 23,
        songName: 'Once Upon A Time <br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/Once-Upon-a-Time-Vikram-500-500.jpg",
        src: "audio/Anirudh/Once Upon A Time Vikram 128 Kbps.mp3"
    },
    {
        id: 24,
        songName: 'Paththavaikkum <br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/paththavaikkum-devara-part-1-500-500.jpg",
        src: "audio/Anirudh/Paththavaikkum Devara Part 1 128 Kbps.mp3"
    },
    {
        id: 25,
        songName: 'Rendu Kaadhal<br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/rendu-kaadhal-kaathuvaakula-rendu-kaadhal-500-500.jpg",
        src: "audio/Anirudh/Rendu Kaadhal Kaathuvaakula Rendu Kaadhal 128 Kbps.mp3"
    },
    {
        id: 26,
        songName: 'So Baby<br><div class="Subtitle">Anirudh Ravichander</div>',
        poster: "image/Anirudh/So-Baby-Doctor-500-500.jpg",
        src: "audio/Anirudh/So Baby Doctor 128 Kbps.mp3"
    },
    {
        id: 27,
        songName: '<h5>Angaaron<br><div class="Subtitle">Shreya Ghoshal</div>',
        poster: "image/Anirudh/Theeraamal-Ranga-500-500.jpg",
        src: "audio/Angaaron.mp3"
    }
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
    
