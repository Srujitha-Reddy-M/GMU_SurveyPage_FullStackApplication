import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
  }

  record: any = {};
  likemost: any = {};
  message: any = {};

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

 ngOnInit(): void {
 }

 onSubmit(form) {
   console.log('In onsubmit in angular');
   if (form.valid) {
    this.record.likemost = Object.keys(this.likemost).filter((k: any) => this.likemost[k]).toString();

    this.appService.putRecord(this.record).subscribe(data => {
       this.message = data;

       if ( this.message[0] > 90 ) {
       this.router.navigate(['/acknowledge'], { state: { mean: this.message[0], std: this.message[1] } });
      } else if ( this.message[1] < 90) {
       this.router.navigate(['/acknowledge'], { state: { mean: this.message[0], std: this.message[1] } });
      }
      });

   } else {
     alert('Required fields must be entered');
   }

 }
}
