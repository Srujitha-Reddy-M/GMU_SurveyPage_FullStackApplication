//Gopan Doshi
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.css']
})
export class AcknowledgeComponent implements OnInit {

  mean = null;
  stdDev = null;
  list = null;


  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
    this.mean = this.router.getCurrentNavigation().extras.state.mean;
    this.stdDev = this.router.getCurrentNavigation().extras.state.std;
  }

  onClick(param) {

    console.log('param is:' + param);
    this.router.navigate(['/readSurvey'], { state: { studentid: param } });
  }
  ngOnInit(): void {
    this.appService.getStudentsID().subscribe(data => {
      this.list = data;
      });


  }

}
