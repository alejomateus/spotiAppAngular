import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  newReleases :any[]=[];
  loading:boolean= true;
  error:boolean = false;
  messageError:string;
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data:any) => {
      this.newReleases = data;
      this.loading = false; 
    },(err)=>{
      this.loading = false; 
      this.error =true;
      this.messageError = err.error.error.message;
    });
  }
}
