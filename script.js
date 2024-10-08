let music = document.getElementById('audio');
    let play = document.getElementById('play');
    let title = document.getElementById('title');
    let artist = document.getElementById('artist');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let img = document.getElementById('img');
    let progress = document.getElementById('progress');

    let songs = [
        {
            name: '1',
            title: "One Love",
            artist: "Shubh",
        },
        {
            name: '2',
            title: "Beqadara",
            artist: "Nehaal Naseem",
        },
        {
            name: '3',
            title: "Standing By You",
            artist: "Nxsh X Arjit Singh",
        },
        {
            name: '4',
            title: "Pehle Bhi Main",
            artist: "Vishal Mishra, Raj Shekhar",
        },
        {
            name: '5',
            title: "Safar",
            artist: "Juss",
        },
        {
            name: '6',
            title: "Teri Khair Mangdi",
            artist: "Bilal Saeed",
        },
    ];

    let isPlaying = false;

    let playMusic = () => {
        music.play();
        isPlaying = true;
        play.classList.replace("fa-play", "fa-pause");
        img.classList.add("anime");
    };

    let pauseMusic = () => {
        music.pause();
        isPlaying = false;
        play.classList.replace("fa-pause", "fa-play");
        img.classList.remove("anime");
    };

    play.addEventListener("click", () => {
        isPlaying ? pauseMusic() : playMusic();
    });

    let loadSongs = (songs) => {
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src = "media/" + songs.name + ".mp3";
        img.src = "media/" + songs.name + ".png";
    };

    loadSongs(songs[0]);
    let songIndex = 0;

    let nextSong = () => {
        songIndex = (songIndex + 1) % songs.length;
        loadSongs(songs[songIndex]);
        playMusic();
    };

    let prevSong = () => {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSongs(songs[songIndex]);
        playMusic();
    };

    music.addEventListener('timeupdate', () => {
        let currentTime = music.currentTime;
        let duration = music.duration;

        if (duration) {
            let progressPercent = (currentTime / duration) * 100;
            progress.value = progressPercent;
        }
    });


    progress.addEventListener('input', () => {
        let duration = music.duration;
        let seekTime = (progress.value / 100) * duration;
        music.currentTime = seekTime;
    });

    next.addEventListener("click", nextSong);
    prev.addEventListener("click", prevSong);