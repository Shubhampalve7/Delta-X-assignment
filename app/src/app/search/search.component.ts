import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  StudentArray : any[] = [
    {
      "name":"Shape of You",
      "Artist":"Ed Sheeran",
      "currentRate":"4"
    },
    {
      "name":"me tera",
      "Artist":"arijit singh",
      "currentRate":"3"
    },
    {
      "name":"Uptown Funk",
      "Artist":"Mark Ronson ft. Bruno Mars",
      "currentRate":"2"
    },
    {
      "name":"Someone Like You",
      "Artist":"Adele",
      "currentRate":"2"
    },
    {
      "name":"Despacito",
      "Artist":"Luis Fonsi ft. Daddy Yankee",
      "currentRate":"1"
    },
    {
      "name":"Billie Jean",
      "Artist":"Michael Jackson",
      "currentRate":"4"
    },
    {
      "name":"Happy",
      "Artist":"Pharrell Williams",
      "currentRate":"2"
    },
    {
      "name":"Old Town Road",
      "Artist":"lil nas",
      "currentRate":"4"
    },
    {
      "name":"Bohemian Rhapsody",
      "Artist":" Queen",
      "currentRate":"3"
    },
    {
      "name":"Rolling in the Deep",
      "Artist":"Adele",
      "currentRate":"5"
    }
   
  ];
  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }
  getAllStudent() {
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.StudentArray = resultData.data;
    });
  }
  
currentRate=0;
}
