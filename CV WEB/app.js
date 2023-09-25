const music = new Audio('audio/7.mp3');

let activeSong = {}

const updateSongInfo = (songInfo) => {
    const songName = document.getElementById('title-cover');
    const artist = document.getElementById('artist');
    const poster = document.getElementById('img-cover');
    songName.textContent = songInfo.title;
    artist.textContent = songInfo.subtitle;    
    poster.src = songInfo.poster;
}

const songs = [
    {
        id:'0',
        title:'Petit',
        subtitle:'DZK',
        songName:` Petit
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/homeless.jpg"
    },
    {
        id:'1',
        title:'Razzia',
        subtitle:'DZK Ft.SVNKA',
        songName:`Razzia <br> 
        <div class="subtitles">Svnka ft. D.Z.K</div>`,
        poster: "img/lambo.jpg"
    },
    {
        id:'2',
        title:'Never give up',
        subtitle:'DZK',
        songName:`Never give up 
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/nevergiveup.jpg"
    },
    {
        id:'3',
        title:'Night',
        subtitle:'DZK Ft.SVNKA',
        songName: `Night
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/night.jpg"
    },
    {
        id:'4',
        title:'Broski',
        subtitle:'DZK',
        songName: `Broski 
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/broski.jpg"
    },
    {
        id:'5',
        title:'Tripes',
        subtitle:'DZK Ft.SVNKA',
        songName:` Tripes Ft.SVNKA 
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/tripes.jpg"
    },
    {
        id:'6',
        title:'Lambo',
        subtitle:'DZK Ft.SVNKA',
        songName:` Lambo Ft.SVNK
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/nosvies.jpg"
    },
    {
        id:'7',
        title:'Petit',
        subtitle:'DZK',
        songName:` Petit
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/homeless.jpg"
    },
    {
        id:'8',
        title:'Razzia',
        subtitle:'DZK Ft.SVNKA',
        songName:`Razzia <br> 
        <div class="subtitles">Svnka ft. D.Z.K</div>`,
        poster: "img/lambo.jpg"
    },
    {
        id:'9',
        title:'Never give up',
        subtitle:'DZK',
        songName:`Never give up 
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/nevergiveup.jpg"
    },
    {
        id:'10',
        title:'Night',
        subtitle:'DZK Ft.SVNKA',
        songName: `Night
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/night.jpg"
    },
    {
        id:'11',
        title:'Broski',
        subtitle:'DZK',
        songName: `Broski 
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/broski.jpg"
    },
    {
        id:'12',
        title:'Tripes',
        subtitle:'DZK Ft.SVNKA',
        songName:` Tripes Ft.SVNKA 
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/tripes.jpg"
    },
    {
        id:'13',
        title:'Lambo',
        subtitle:'DZK Ft.SVNKA',
        songName:` Lambo Ft.SVNK
        <div class="subtitles">D.Z.K</div>`,
        poster: "img/nosvies.jpg"
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    const undefined_poster = "img/comingsoon.jpg"
    if ( songs[i] && songs[i].poster !== undefined ) {
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    } else {
        e.getElementsByTagName('img')[0].src = undefined_poster
        e.getElementsByTagName('h5')[0].src = '----------'
    }

});




let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play = `img/${index}.jpg`;
        activeSong = songs[index];
        updateSongInfo(activeSong);
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        const imgCover = document.querySelector('#img-cover');
        // Modifier le texte de l'élément
        imgCover.src = songs[index].poster;
        makeAllBackground();
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }

    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    if  (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }


    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


const back = document.getElementById('back');
const next = document.getElementById('next');

// targetting the icons container
const switchSong = (direction) => {

    function wrapIndex(index) {
        const length = songs.length;
        const wrappedIndex = ((index % length) + length) % length
        return wrappedIndex
    }

    direction == 'back' ? index -= 1 : index += 1 // other approach (index += direction == 'back' ? -1 : 1)

    // checking if a song was already initiated : if not, special behavior
    index = wrapIndex(index)
    activeSong = songs[index]
    updateSongInfo(activeSong)
    if (activeSong !== {}) {
        music.src = `audio/${index}.mp3`;
        music.play()
    }
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active');
}

back.addEventListener('click', () => switchSong('back'));
next.addEventListener('click', () => switchSong('next'));

let pop_song = document.getElementsByClassName('pop_song')[0];
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

