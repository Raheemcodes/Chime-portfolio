export interface MetaInterface extends Card {
  keywords: string;
}

export interface Card {
  title: string;
  description: string;
  img: string;
  path: string;
}

export interface CaseStudy {
  title: string;
  img: string;
  desc: string;
  areas: string[];
  link: string;
  background: string;
}

export interface Favorite {
  musicName: string;
  spotifyLink: string;
  appleLink: string;
}

export interface Playlist {
  playlistName: string;
  artist_genre: string;
  spotifyLink: string;
  appleLink: string;
}

export interface Music {
  favorite: Favorite;
  playlists: Playlist[];
}
