import { Component, OnInit } from '@angular/core';
// import { SimplebarAngularModule } from 'simplebar-angular'


@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})


export class DetailListComponent implements OnInit {
  constructor() { }
  page = 1;
  options = { scrollbarMinSize: 30, scrollbarMaxSize: 30 };

  ngOnInit(): void {
  }

}