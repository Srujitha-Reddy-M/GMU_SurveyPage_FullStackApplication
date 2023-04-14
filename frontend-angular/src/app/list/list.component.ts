import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = null;

  constructor(private appService: AppService) {}

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.list = data;
  });


  }
}
