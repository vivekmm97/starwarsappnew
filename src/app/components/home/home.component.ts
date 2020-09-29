import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: MainServiceService) { }
  pageno;
  public peopleList: any = [];
  public btnnxt;
  public btnnxtcheck = false;
  public btnprv;
  public btnprvcheck = false;

  ngOnInit(): void {
  }
  getPageNo() {
    this.route.paramMap.subscribe( params => {
      this.pageno =  Number(params.get('page'));
      if (this.pageno === 0) {
        this.pageno = 1;
      }
      this.getList(this.pageno);
    });
  }
  getList(num) {
    this.api.getPeopleList(num).subscribe(data => {
      if (data) {
        this.peopleList = data;

        if (this.peopleList?.previous) {
          this.btnprv = this.pageno - 1;
        }
        if (this.peopleList?.next) {
          this.btnnxt = this.pageno + 1;
        }
      }
    });
  }
  toDisplay(event) {
    this.api.getData(event);
  }
}