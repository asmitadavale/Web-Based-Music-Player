const music = new Audio('audio/Papon/Bulleya.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Ae Wadi Shehzadi Shikara<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Ae-Wadi-Shehzadi-Shikara.jpg",
        src: "audio/Papon/Ae Wadi Shehzadi Shikara 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Chaav Laaga<br><div class="Subtitle">Papon5</div> ',
        poster: "image/papon/Chaav-Laaga.jpg",
        src: "audio/Papon/Chaav Laaga Sui Dhaaga Made In India 128 Kbps.mp3"
    },
    {
        id: 3,
        songName: 'Bulaave <br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Bulaave.jpg",
        src: "audio/Papon/Bulaave Kaagaz 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Chulbuli <br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Chulbuli.jpg",
        src: "audio/Papon/Chulbuli Babumoshai Bandookbaaz 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'Haaye Rabba<br><div class= "Subtitle"> Papon </div> ',
        poster: "image/papon/Haaye-Rabba.jpg",
        src: "audio/Papon/Haaye Rabba Papon 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Khatar Patar<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Khatar-Patar.jpg",
        src: "audio/Papon/Khatar Patar - Sui Dhaaga - Made In India 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Khidki<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Khidki.jpeg",
        src: "audio/Papon/Khidki - Papon.mp3"
    },
    {
        id: 8,
        songName: 'Nawazish<br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Nawazish.jpg",
        src: "audio/Papon/Nawazish Papon 128 Kbps.mp3"
    },
    {
        id: 9,
        songName: 'Sun Zara<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/sun-zara-cirkus.jpg",
        src: "audio/Papon/Sun Zara Cirkus 128 Kbps.mp3"
    },
    {
        id: 10,
        songName: 'Tu<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Tu.jpg",
        src: "audio/Papon/Tu Bobby Jasoos 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Bulleya<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Bulleya.jpeg",
        src: "audio/Papon/Bulleya.mp3"
    },
    {
        id: 12,
        songName: 'Heartquake<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Heartquake.jpeg",
        src: "audio/Papon/Heartquake - Karwaan 128 Kbps.mp3"
    },
    {
        id: 13,
        songName: 'Humnava <br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Humnava.jpg",
        src: "audio/Papon/Humnava Hamari Adhuri Kahani Original Motion Picturetrack 128 Kbps.mp3"
    },
    {
        id: 14,
        songName: 'Jiyein Kyun<br><div class="Subtitle"> Papon</div> ',
        poster: "image/papon/Jiyein-Kyun.jpg",
        src: "audio/Papon/Jiyein Kyun Dum Maaro Dum 128 Kbps.mp3"
    },
    {
        id: 15,
        songName: 'Kaun Mera<br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Kaun-Mera.jpg",
        src: "audio/Papon/Kaun Mera 1 Special 26 128 Kbps.mp3"
    },
    {
        id: 16,
        songName: 'Kyon <br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Kyon-Barfi.jpg",
        src: "audio/Papon/Kyon Barfi 128 Kbps.mp3"
    },
    {
        id: 17,
        songName: 'Mujhe Kaise Pata Na Chala<br><div class="Subtitle">Papon</div> ',
        poster: "image/papon/Muje Kaise Pta Na.jpeg",
        src: "audio/Papon/Mujhe Kaise, Pata Na Chala.mp3"
    },
    {
        id: 18,
        songName: 'Nazar Teri Toofan<br><div class="Subtitle">Papon</div>',
        poster: "image/papon/nazar-teri-toofan-merry-christmas.jpg",
        src: "audio/Papon/Nazar Teri Toofan Merry Christmas 128 Kbps.mp3"
    },
    {
        id: 19,
        songName: 'Moh Moh Ke Dhage<br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Yeh Moh Moh Ke Dhage.jpg",
        src: "audio/Papon/Moh Moh Ke Dhaage Male Dum Laga Ke Haisha 128 Kbps.mp3"
    },
    {
        id: 20,
        songName: 'Thham Sa Gaya<br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Thham-Sa-Gaya.jpg",
        src: "audio/Papon/Thham Sa Gaya - Mumbai Delhi Mumbai 128 Kbps.mp3"
    },
    {
        id: 22,
        songName: 'Tu Jo Mila <br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Tu-Jo-Mila-Reprise.jpg",
        src: "audio/Papon/Tu Jo Mila Reprise Bajrangi Bhaijaan 128 Kbps.mp3"
    },
    {
        id: 23,
        songName: 'Tum Yaad Aaye <br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Tum-Yaad-Aaye-Papon-.jpg",
        src: "audio/Papon/Tum Yaad Aaye Papon 128 Kbps.mp3"
    },
    {
        id: 24,
        songName: 'Zindagi Aisi Waisi <br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Zindagi-Aisi-Waisi-I-Am-Kalam.jpg",
        src: "audio/Papon/Zindagi Aisi Waisi I Am Kalam 128 Kbps.mp3"
    },
    {
        id: 25,
        songName: 'Zindagi<br><div class="Subtitle">Papon</div>',
        poster: "image/papon/Zindagi-Bala.jpg",
        src: "audio/Papon/Zindagi - Bala 128 Kbps.mp3"
    },
    {
        id: 26,
        songName: '<h5>Prems Theme-Moh Moh Ke Dhage<br><div class="Subtitle">Vishal Mishra</div>',
        poster: "image/papon/Yeh Moh Moh Ke Dhage.jpg",
        src: "audio/Papon/Prems Theme Dum Laga Ke Haisha 128 Kbps.mp3"
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
    
