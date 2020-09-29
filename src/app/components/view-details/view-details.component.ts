import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MainServiceService} from 'src/app/services/main-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: MainServiceService) { }
  pageNo;
  type;
  urlPath;
  public dataList: any = [];
  public btnNxt;
  public btnNxtCheck = false;
  public btnPrv;
  public btnPrvCheck = false;

  ngOnInit(): void {
    this.getPage();
  }
  getPage() {
    this.route.paramMap.subscribe(params => {
      this.pageNo = Number(params.get('page'));
      this.type = params.get('type');
      if (this.pageNo === 0) {
        this.pageNo = 1;
      }
      this.getList(this.pageNo, this.type);
      console.log(this.pageNo);
      console.log(this.type);
    });
  }
  getList(num, types) {
    switch (types) {
      case 'people': {
        this.getPeopleList(num);
        break;
      }
      case 'planet': {
        this.getPlanetList(num);
        break;
      }
      case 'film': {
        this.getFilmList(num);
        break;
      }
      case 'specie': {
        this.getSpeciesList(num);
        break;
      }
      case 'vehicle': {
        this.getVehicleList(num);
        break;
      }
      case 'starship': {
        this.getShipList(num);
        break;
      }
      default: {
        console.log('error');
      }
    }

  }
  getPeopleList(num) {
    this.urlPath = 'people';
    this.api.getPeopleList(num).subscribe(data => {
      if (data) {
        this.dataList = data;

        if (this.dataList?.previous) {
          this.btnPrv = this.pageNo - 1;
        }
        if (this.dataList?.next) {
          this.btnNxt = this.pageNo + 1;
        }
      }
    });
  }
  getPlanetList(num) {
    this.urlPath = 'planets';
    this.api.getPlanetList(num).subscribe(data => {
      if (data) {
        this.dataList = data;

        if (this.dataList?.previous) {
          this.btnPrv = this.pageNo - 1;
        }
        if (this.dataList?.next) {
          this.btnNxt = this.pageNo + 1;
        }
      }
    });
  }
  getFilmList(num) {
    this.urlPath = 'film';
    this.api.getFilmList(num).subscribe(data => {
      if (data) {
        this.dataList = data;

        if (this.dataList?.previous) {
          this.btnPrv = this.pageNo - 1;
        }
        if (this.dataList?.next) {
          this.btnNxt = this.pageNo + 1;
        }
      }
    });
  }
  getSpeciesList(num) {
    this.urlPath = 'species';
    this.api.getSpeciesList(num).subscribe(data => {
      if (data) {
        this.dataList = data;

        if (this.dataList?.previous) {
          this.btnPrv = this.pageNo - 1;
        }
        if (this.dataList?.next) {
          this.btnNxt = this.pageNo + 1;
        }
      }
    });
  }
  getVehicleList(num) {
    this.urlPath = 'vehicles';
    this.api.getVehicleList(num).subscribe(data => {
      if (data) {
        this.dataList = data;

        if (this.dataList?.previous) {
          this.btnPrv = this.pageNo - 1;
        }
        if (this.dataList?.next) {
          this.btnNxt = this.pageNo + 1;
        }
      }
    });
  }
  getShipList(num) {
    this.urlPath = 'starships';
    this.api.getShipList(num).subscribe(data => {
      if (data) {
        this.dataList = data;

        if (this.dataList?.previous) {
          this.btnPrv = this.pageNo - 1;
        }
        if (this.dataList?.next) {
          this.btnNxt = this.pageNo + 1;
        }
      }
    });

  }
  toDisplay(event) {
    this.api.getData(event);
  }

}
