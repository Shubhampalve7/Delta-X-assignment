import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-new-song',
  templateUrl: './add-new-song.component.html',
  styleUrls: ['./add-new-song.component.css']
})
export class AddNewSongComponent {
  name: string ="";
  artist: string ="";
  Date_Of_Release:any=""
  Rate:any=""
  // phone: string ="";
  constructor(private http: HttpClient ) 
  {
    // this.getAllStudent();
  }
  currentRate=0
  register()
  {
    let bodyData = {
      "name" : this.name,
      "artist" : this.artist,
      "Date Of Release":this.Date_Of_Release,
      "Rate":this.Rate
      // "phone" : this.phone, 
  };
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
         //this.getAllEmployee();
        this.name = '';
        this.artist = '';
        // this.getAllStudent();
    });
}
}
