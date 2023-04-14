import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-read-survey',
  templateUrl: './read-survey.component.html',
  styleUrls: ['./read-survey.component.css']
})
export class ReadSurveyComponent implements OnInit {
  studentid = null;
  studentData = null;
  check = {Students: false, Location: false, Campus: false, Atmosphere: false, Dormrooms: false, Sports: false};

  tokens: String[] = null;



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {
    this.studentid = this.router.getCurrentNavigation().extras.state.studentid;
    console.log('In read-survey StudentID we got ' + this.studentid);
   }

  ngOnInit(): void {
    this.appService.getStudentData(this.studentid).subscribe(data => {

      console.log('In Angular : In the read-survey');

      this.studentData = data;
      this.tokens = this.studentData.likemost.split(',');
      this.tokens.forEach(element => {
        if (element === 'Students') {
          this.check.Students = true;
        } else if (element === 'Location') {
          this.check.Location = true;
        } else if (element === 'Campus') {
          this.check.Campus = true;
        } else if (element === 'Atmosphere') {
          this.check.Atmosphere = true;
        } else if (element === 'Dorm rooms') {
          this.check.Dormrooms = true;
        } else if (element === 'Sports') {
          this.check.Sports = true;
        }
      });
      });
  }

}
