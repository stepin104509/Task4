import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cou-details',
  templateUrl: './cou-details.component.html',
  styleUrls: ['./cou-details.component.css']
})
export class CouDetailsComponent implements OnInit {
 Courses:any;
 show:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  
  Checkcourses(){
    
    this.show=true;
   this.Courses= [
    {"courseId":"S01","courseName":"Software Development LifeCycle","durationHours":48,"passScore":55,"instructorId":102},
    {"courseId":"E01","courseName":"Embedded C Programming","durationHours":56,"passScore":55,"instructorId":101},
    {"courseId":"D01","courseName":"Programming using C#","durationHours":48,"passScore":55,"instructorId":103},
    {"courseId":"P01","courseName":"Python Programming","durationHours":56,"passScore":55,"instructorId":104},
    {"courseId":"B01","courseName":"Programming using C","durationHours":48,"passScore":55,"instructorId":107},
    {"courseId":"B02","courseName":"Programming using C++","durationHours":48,"passScore":55,"instructorId":105},
    {"courseId":"J01","courseName":"Java Programming","durationHours":48,"passScore":60,"instructorId":106},
    {"courseId":"J02","courseName":"Advance Java Programming","durationHours":48,"passScore":55,"instructorId":108},
    {"courseId":"D02","courseName":"ASP.Net Programming","durationHours":56,"passScore":55,"instructorId":103},
    {"courseId":"J03","courseName":"Front end Technologies","durationHours":56,"passScore":55,"instructorId":106},
    {"courseId":"A01","courseName":"AWS Services","durationHours":56,"passScore":55,"instructorId":100},
    {"courseId":"A02","courseName":"Azure Services","durationHours":56,"passScore":55,"instructorId":100}
  ];
  }

}
