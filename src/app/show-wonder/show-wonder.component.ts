import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-wonder',
  templateUrl: './show-wonder.component.html',
  styleUrls: ['./show-wonder.component.css']
})
export class ShowWonderComponent implements OnInit {
  dynamicStyle:any;
  paletteData:any;
  rndInt: number;
  strSplitArr : string[];
  counter:number;
  ownerName:string;
  token_id:string;
  imageUrl:string;
  colors = [];
  permaLink:string;
  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.paletteData = data;
      this.getRandomPalette();
    });
  }

  getRandomPalette(){
    
    const randomNum = this.randomIntFromInterval(1, 10000);
    this.fetchData(randomNum).subscribe((data:any) => {
      
      const currentPalette = this.paletteData.filter((data) => {return data.name == randomNum})[0];
      this.colors = currentPalette.colors;
      this.ownerName= data.owner.user.username;
      this.token_id = data.token_id;
      this.imageUrl = data.image_thumbnail_url;
      this.permaLink = data.permalink; 
      console.log(this.permaLink);
      if(this.colors.length > 0){
      this.dynamicStyle = {
        'background-image': `linear-gradient(270deg , ${this.colors[0]}, ${this.colors[1]}, ${this.colors[2]}, ${this.colors[3]}, ${this.colors[4]})`,
        'height': '100%',
        "position": "absolute",
        "-webkit-animation": "rainbow 10s ease infinite",
        "-z-animation": "rainbow 10s ease infinite",
        "-o-animation": "rainbow 10s ease infinite",
        "animation": "rainbow 10s ease infinite"
      }
  }
  
})
}

fetchData(num:number){
  return this.httpClient.get("https://api.opensea.io/api/v1/asset/0x1308c158e60d7c4565e369df2a86ebd853eef2fb/"+ num);
}

   randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

navigateToOpenSea(link){
  window.open(link);
}
}
