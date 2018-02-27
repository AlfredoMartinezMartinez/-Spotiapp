import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas:any[]=[];
  urlSpotify:string= 'https://api.spotify.com/v1/';
  token:string= 'BQCymvTtgFY9hLOJzpZukDvOYA3wke5o7s7Ib68BWT_-AcRiO0ArqV5kjr2LJ3OFPq4eNZICpRitRzPHEHY';

  constructor(public http: HttpClient) {
  console.log("Servicio de Spotify");
 }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':'Bearer '+this.token
    })
    return headers;
  }
  getTop(id:string){
    let url=`${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers})
  }
  getArtista(id:string){
    let url=`${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers})
                // .map( (resp:any) =>{
                //   this.artistas=resp.artists.items
                //   return this.artistas;
                // });

  }
  getArtistas(termino:string){
    let url=`${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers})
                .map( (resp:any) =>{
                  this.artistas=resp.artists.items
                  return this.artistas;
                });
  }
}
