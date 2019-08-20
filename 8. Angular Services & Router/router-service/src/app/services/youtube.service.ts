import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    { id: '234tVVC_63A', song: '[Teaser] Lả Lướt - JustaTee ft. (?)' },
    { id: 'KhTCatAKVpk', song: 'JustaTee - Love you too much (Official MV)' },
    { id: 'j4zP5saRZqg', song: 'SÓNG GIÓ | K-ICM x JACK | HƯƠNG LY COVER' },
    { id: 'aGUQsb31TEw', song: 'BIGDADDY x EMILY - Mượn Rượu Tỏ Tình (Official M/V)' },
    { id: 'iE52-XXnQqs', song: 'AMEE x B RAY - ANH NHÀ Ở ĐÂU THẾ | Official Music Video' }
  ]
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
