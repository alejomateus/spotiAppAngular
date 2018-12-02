import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer QDhDHn5DTF6q_42itQic5NXq2b39iG1pX2YJXD8CkqEpAL3zLyw30tV6j10smJ1CUmTb1rngkjtEZAifq4"
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }
  getListArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }
  getArtist(id:string){
    return this.getQuery(`artists/${ id }`);
    // .pipe(
    //   map(data => data["artists"].items)
    // );
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=se`)
    .pipe(
      map(data => data["tracks"])
    );
  }
}
