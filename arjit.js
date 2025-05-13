const music = new Audio('audio/Arjit Singh/Agar Tum Saath Ho Tamasha 128 Kbps (1).mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: 'Tera Yaar Hoo Mai <br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Tera_yaar_hoo.jpeg",
        src: "audio/Arjit Singh/Tera Yaar Hoon Main Sonu Ke Titu Ki Sweety 128 Kbps.mp3"
    },
    {
        id: 2,
        songName: 'Dayaare <br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Dayaare.jpeg",
        src: "audio/Arjit Singh/Daayre Dilwale 128 Kbps.mp3"
    },
    {
        id: 3,
        songName: 'Fitoor <br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Fitoor.jpeg",
        src: "audio/Arjit Singh/Fitoor Shamshera Hindi 128 Kbps.mp3"
    },
    {
        id: 4,
        songName: 'Ve kamliya <br><div class="Subtitle">Arjit Singh Shreya Ghoshal</div> ',
        poster: "image/Arjit.Image/Ve_kamliya.jpeg",
        src: "audio/Arjit Singh/Ve Kamleya Rocky Aur Rani Kii Prem Kahaani 128 Kbps.mp3"
    },
    {
        id: 5,
        songName: 'Tujhe Kitna Chahne Lage<br><div class= "Subtitle"> Arjit Singh </div> ',
        poster: "image/Arjit.Image/Tujhe-Kitna-Chahne-Lage.jpg",
        src: "audio/Arjit Singh/Tujhe Kitna Chahne Lage Kabir Singh 128 Kbps.mp3"
    },
    {
        id: 6,
        songName: 'Ae Zindagi Gale Laga Le<br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Zindagi_gale_laga_le.jpeg",
        src: "audio/Arjit Singh/Ae Zindagi Gale Laga Le (take, 1) Dear Zindagi 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: 'Tum Kya Mile<br><div class="Subtitle">Arjit Singh Shreya Ghoshal</div> ',
        poster: "image/Arjit.Image/Tum_kya_mile.jpeg",
        src: "audio/Arjit Singh/Tum Kya Mile_16.mp3"
    },
    {
        id: 8,
        songName: 'Satranga<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/satranga.jpeg",
        src: "audio/Arjit Singh/Satranga_320(PagalWorld.com.sb).mp3"
    },
    {
        id: 9,
        songName: 'Heeriya<br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/heeriye.jpeg",
        src: "audio/Arjit Singh/Heeriye_8.mp3"
    },
    {
        id: 10,
        songName: 'Aasan Nahin Yahan<br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Aasan-Nahin-Yahan.jpg",
        src: "audio/Arjit Singh/Aasan Nahin Yahan Aashiqui 2 128 Kbps.mp3"
    },
    {
        id: 11,
        songName: 'Ae Dil Hai Mushkil<br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Ae-Dil-Hai-Mushkil.jpg",
        src: "audio/Arjit Singh/Ae Dil Hai Mushkil Title Track Pritam 128 Kbps.mp3"
    },
    {
        id: 12,
        songName: 'Agar tun sath ho <br><div class="Subtitle">Arjit Singh, Alka Yagnik</div> ',
        poster: "image/Arjit.Image/Agar_tum_sath)ho.jpeg",
        src: "audio/Arjit Singh/Agar Tum Saath Ho Tamasha 128 Kbps (1).mp3"
    },
    {
        id: 13,
        songName: 'Darkhaast <br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Darkhaast.jpeg",
        src: "audio/Arjit Singh/Darkhaast Shivaay 128 Kbps.mp3"
    },
    {
        id: 14,
        songName: 'Abaad Narnaad <br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Aabaad_Barbaad.jpeg",
        src: "audio/Arjit Singh/Aabaad Barbaad 128 Kbps.mp3"
    },
    {
        id: 15,
        songName: 'Aayat<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/Arjit.Image/Aayat.jpeg",
        src: "audio/Arjit Singh/Aayat Bajirao Mastani 128 Kbps.mp3"
    },
    {
        id: 16,
        songName: 'Satranga <br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/satranga.jpeg",
        src: "audio/Satranga_320(PagalWorld.com.sb).mp3"
    },
    {
        id: 17,
        songName: 'Bandeya re Bandeya<br><div class="Subtitle">Arjit Singh</div> ',
        poster: "image/Arjit.Image/Bandeya_re.jpeg",
        src: "audio/Arjit Singh/Bandeya Rey Bandeya Simmba 128 Kbps.mp3"
    },
    {
        id: 18,
        songName: 'Chaleya <br><div class="Subtitle">Arjit Singh. Shila Rao</div>',
        poster: "image/Arjit.Image/chaleya.jpg",
        src: "audio/Arjit Singh/Chaleya Jawan 128 Kbps.mp3"
    },
    {
        id: 19,
        songName: 'Humdard<br><div class="Subtitle">Arijit Singh</div>',
        poster: "image/Arjit.Image/Humdard.jpeg",
        src: "audio/Arjit Singh/Humdard Ek Villain 128 Kbps.mp3"
    },
    {
        id: 20,
        songName: 'Aashiqui aa gyi<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/Arjit.Image/Aashiqui_aa_gyi.jpeg",
        src: "audio/Arjit Singh/Aashiqui Aa Gayi Radhe Shyam Hindi 128 Kbps (1).mp3"
    },
    {
        id: 22,
        songName: 'O mahi<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/o-mahi.jpeg",
        src: "audio/Arjit Singh/O Mahi O Mahi_13.mp3"
    },
    {
        id: 23,
        songName: 'Ik vaari aa<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/Arjit.Image/Ik_vaari_aa.jpg",
        src: "audio/Arjit Singh/Ik Vaari Aa Raabta 128 Kbps.mp3"
    },
    {
        id: 24,
        songName: 'Kabira <br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/Arjit.Image/Kabiraa.jpeg",
        src: "audio/Arjit Singh/Kabira2.mp3"
    },
    {
        id: 25,
        songName: 'Intezaar<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/Arjit.Image/Intezaar.jpeg",
        src: "audio/Arjit Singh/Intezaar Mithoon 128 Kbps.mp3"
    },
    {
        id: 26,
        songName: 'Sajde<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/Arjit.Image/Sajde.jpeg",
        src: "audio/Arjit Singh/Sajde Kill Dil 128 Kbps.mp3"
    },
    {
        id: 27,
        songName: 'Kalank<br><div class="Subtitle">Arjit Singh</div>',
        poster: "image/Arjit.Image/Kalank.jpeg",
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
    
