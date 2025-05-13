const music = new Audio('audio/SonuNigam/Tumse Milke Dil Ka Main Hoon Na 128 Kbps.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Abhi Mujh Mein Kahin <br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Abhi-Mujh-Mein-Kahin.jpg",
        src: "audio/SonuNigam/Abhi Mujh Mein Kahin Agneepath 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Aisa Lagta Hai<br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Aisa-Lagta-Hai-Refugee.jpg",
        src: "audio/SonuNigam/Aisa Lagta Hai Refugee 128 Kbps.mp3"
    },
    {
        id: 3,
        songName: 'Chal Pyar Karegi<br><div class="Subtitle">Sonu Nigam, Alka Yagnik</div> ',
        poster: "image/SonuNigam/Chal-Pyar-Karegi.jpg",
        src: "audio/SonuNigam/Chal Pyar Karegi Jab Pyaar Kisise Hota Hai 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Chori Kiya Re Jiya <br><div class="Subtitle">Sonu Nigam, Shreya Ghoshal</div> ',
        poster: "image/SonuNigam/Chori-Kiya-Re-Jiya.jpg",
        src: "audio/SonuNigam/Chori Kiya Re Jiya Male Dabangg 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'Dil Main Jo Baat<br><div class= "Subtitle"> Sonu Nigam, Alka Yagnik </div> ',
        poster: "image/SonuNigam/Dil-Mein-Jo-Baat.jpg",
        src: "audio/SonuNigam/Dil Mein Jo Baat Run 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Do Pal<br><div class="Subtitle">Sonu Nigam, Lata Manegshkara </div> ',
        poster: "image/SonuNigam/Do-Pal.jpg",
        src: "audio/SonuNigam/Do Pal Veer Zaara 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Gustakh Dil Tere Liye<br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Gustakh-Dil-Tere-Liye.jpg",
        src: "audio/SonuNigam/Gustakh Dil Tere Liye Dil Maange More 128 Kbps.mp3"
    },
    {
        id: 8,
        songName: 'In Lamhon Ke Daaman Maine<br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Inn-Lamhon-Ke-Daaman-Mein.jpg",
        src: "audio/SonuNigam/Inn Lamhon Ke Daaman Mein Jodhaa Akbar 128 Kbps.mp3"
    },
    {
        id: 9,
        songName: 'Kal Ho Na Ho<br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Kal-Ho-Naa-Ho.jpg",
        src: "audio/SonuNigam/Kal Ho Naa Ho Shankar Ehsaan Loy 128 Kbps.mp3"
    },
    {
        id: 10,
        songName: 'Kasto Mazza<br><div class="Subtitle">Sonu Nigam, Shreya Ghoshal</div> ',
        poster: "image/SonuNigam/Kasto-Mazza.jpg",
        src: "audio/SonuNigam/Kasto Mazza Parineeta 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Koi Tumsa Nahi<br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Koi-Tumsa-Nahin.jpg",
        src: "audio/SonuNigam/Koi Tumsa Nahin Krrish 128 Kbps.mp3"
    },
    {
        id: 12,
        songName: 'Love Is A Waste Of Time <br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Love-Is-A-Waste-Of-Time.jpg",
        src: "audio/SonuNigam/Love Is A Waste Of Time Pk 128 Kbps.mp3"
    },
    {
        id: 13,
        songName: 'Main Agar Kahoon<br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Main-Agar-Kahoon.jpg",
        src: "audio/SonuNigam/Main Agar Kahoon Om Shanti Om 128 Kbps.mp3"
    },
    {
        id: 14,
        songName: 'Main Hoon Na<br><div class="Subtitle"> Sonu Nigam</div> ',
        poster: "image/SonuNigam/Main-Hoon-Na.jpg",
        src: "audio/SonuNigam/Main Hoon Na Sonu Nigam 128 Kbps.mp3"
    },
    {
        id: 15,
        songName: 'Saathiya <br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Saathiya.jpg",
        src: "audio/SonuNigam/Saathiya Sonu Nigam 128 Kbps.mp3"
    },
    {
        id: 16,
        songName: 'Soniyo <br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/soniyo.jpg",
        src: "audio/SonuNigam/Soniyo Raaz The Mystery Continues 128 Kbps.mp3"
    },
    {
        id: 17,
        songName: 'Sapna Jahan<br><div class="Subtitle">Sonu Nigam</div> ',
        poster: "image/SonuNigam/Sapna-Jahan.jpg",
        src: "audio/SonuNigam/Sapna Jahan Brothers 128 Kbps.mp3"
    },
    {
        id: 18,
        songName: 'Shirt Da Button<br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Shirt-Da-Button.jpg",
        src: "audio/SonuNigam/Shirt Da Button Kyaa Super Kool Hain Hum 128 Kbps.mp3"
    },
    {
        id: 19,
        songName: 'Shukran Allah <br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Shukran-Allah.jpg",
        src: "audio/SonuNigam/Shukran Allah Kurbaan 128 Kbps.mp3"
    },
    {
        id: 20,
        songName: 'Tainu Leke<br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Tainu-Leke.jpg",
        src: "audio/SonuNigam/Tainu Leke Salaam E Ishq 128 Kbps.mp3"
    },
    {
        id: 22,
        songName: 'Tere Bin<br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Tere-Bin-Dil-Toh-Baccha-Hai-Ji.jpg",
        src: "audio/SonuNigam/Tere Bin Dil Toh Baccha Hai Ji 128 Kbps.mp3"
    },
    {
        id: 23,
        songName: 'Tere Bin <br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Tere-Bin.jpg",
        src: "audio/SonuNigam/Tere Bin Wazir 128 Kbps.mp3"
    },
    {
        id: 24,
        songName: 'Tumhi Dekho Naa<br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/Tumhi-Dekho-Naa.jpg",
        src: "audio/SonuNigam/Tumhi Dekho Naa Kabhi Alvida Naa Kehna 128 Kbps.mp3"
    },
    {
        id: 25,
        songName: 'Yeh Dil Deewana <br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/yeh-dil-deewana.jpg",
        src: "audio/SonuNigam/Yeh Dil Deewana Pardes 128 Kbps.mp3"
    },
    {
        id: 26,
        songName: 'Zoobi Doobi<br><div class="Subtitle">Sonu Nigam</div>',
        poster: "image/SonuNigam/zoobi-doobi.jpg",
        src: "audio/SonuNigam/Zoobi Doobi 128 Kbps.mp3"
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
    
