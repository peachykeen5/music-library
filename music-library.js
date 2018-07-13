const util = require ('util')


class Track {
    constructor(title, rating, duration) {
        this.title = title;
        this.rating = rating;
        this.duration = duration;
    }
}

class Playlist {
    constructor(playlistName) {
        this.playlistName = playlistName;
        this.tracks = [];
    }
}

class Library {
    constructor(libraryName, creator) {
        this.libraryName = libraryName;
        this.creator = creator;
        this.playlists = [];
    }
}

Playlist.prototype.overallRating = function () {
    let overallRating = 0;
    this.tracks.forEach(track => {
        overallRating += track.rating;
    })
    return overallRating/ this.tracks.length
}

Playlist.prototype.overallDuration = function () {
    let overallDuration = 0;
    this.tracks.forEach(track => {
        overallDuration += track.duration
    })
    return overallDuration;
}

const playlist = new Playlist('happy jams');
const playlist2 = new Playlist('sad jams');
const track1 = new Track('track 1', 4, 10000);
const track2 = new Track('track 2', 5, 40000);
const library = new Library("Jams", "Leonard");
const track3 = new Track('track 3', 1, 15000);
const track4 = new Track('track 4', 2, 30000)

playlist.tracks.push(track1);
playlist.tracks.push(track2);
library.playlists.push(playlist);
playlist2.tracks.push(track3);
playlist2.tracks.push(track4);
library.playlists.push(playlist2)
console.log(util.inspect(library, {showHidden: false, depth: null}))
console.log(playlist2.overallRating())
console.log(playlist2.overallDuration())
