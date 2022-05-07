class Spotify {
    constructor(id, secret) {
      this.id = id
      this.secret = secret
      this.headers = this.getHeaders() // this is a promise
    }
    
    getHeaders() {
      const headers = {"Content-Type": "application/x-www-form-urlencoded", Authorization: "Basic " + btoa(`${this.id}:${this.secret}`)}
    
      return fetch("https://accounts.spotify.com/api/token", {method: "POST", headers, mode: "cors", body: "grant_type=client_credentials"})
    .then(response => response.json()).then(json => ({"Content-Type": "application/x-www-form-urlencoded", Authorization: "Bearer " + json.access_token}))
    }
    
    search(artist) {
      const data = new URLSearchParams({
        q: artist, 
        type: "artist", 
        limit: 50,
        include_external: "audio"
      })
    
      return this.headers.then(headers => fetch("https://api.spotify.com/v1/search?" + data.toString(), {method: "GET", headers, mode: "cors"})).then(response => response.json()).then(json => ({id: json.artists.items[0].uri.split(":")[2], name: json.artists.items[0].name, photo: json.artists.items[0].images[0].url, followers: json.artists.items[0].followers.total, link: json.artists.items[0].external_urls.spotify}))
    }
    
    artist(id) {
      return this.headers.then(headers => fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,
      {method: "GET", 
       headers, 
       mode: "cors"}))
        .then(response => response.json())
        .then(json => json.tracks.splice(0, 5).reduce((tracks, track) => tracks.concat({album: track.album.name, 
                                                                                        song: track.name, 
                                                                                        sample: track.preview_url, 
                                                                                        link: track.external_urls.spotify, 
                                                                                        photo: track.album.images[0].url, 
                                                                                        date: track.album.release_date}), []))
    }
    
  }
   
  const spotify = new Spotify("9c7a69529e274677a0db4486a5d83fd4", "0a9d5bb1c80345b19c74a1ae4a008375")
  
  function searchButton() {
    
     spotify.search(searchSong.value)
       .then(artist => spotify.artist(artist.id))
       .then(tracks => {
       //const firstTrack = tracks[0]
       one.innerText = tracks[0].song;
       two.innerText = tracks[1].song;
       three.innerText = tracks[2].song;
       four.innerText = tracks[3].song;
       five.innerText = tracks[4].song;
       
       first.href = tracks[0].link;
       second.href = tracks[1].link;
       third.href = tracks[2].link;
       fourth.href = tracks[3].link;
       fifth.href = tracks[4].link;
       
       o.src = tracks[0].photo;
       t.src = tracks[1].photo;
       th.src = tracks[2].photo;
       f.src = tracks[3].photo;
       fi.src = tracks[4].photo;
       
       a.innerText = tracks[0].date;
       b.innerText = tracks[1].date;
       c.innerText = tracks[2].date;
       d1.innerText = tracks[3].date;
       e1.innerText = tracks[4].date;
       
       // console.log(tracks)
     })                              
    
  }