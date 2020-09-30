import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MainServiceService} from 'src/app/services/main-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mainService: MainServiceService) { }
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

  // load list for each options
  
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


  // load people
  
  getPeopleList(num) {
    this.urlPath = 'people';
    this.mainService.getPeople(num).subscribe(data => {
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

  // load planets
  
  getPlanetList(num) {
    this.urlPath = 'planets';
    this.mainService.getPlanet(num).subscribe(data => {
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

  // load films
  
  getFilmList(num) {
    this.urlPath = 'film';
    this.mainService.getFilm(num).subscribe(data => {
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

  // load species
  
  getSpeciesList(num) {
    this.urlPath = 'species';
    this.mainService.getSpecies(num).subscribe(data => {
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

  // load vehicles
  
  getVehicleList(num) {
    this.urlPath = 'vehicles';
    this.mainService.getVehicle(num).subscribe(data => {
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

  // load starships
  
  getShipList(num) {
    this.urlPath = 'starships';
    this.mainService.getShip(num).subscribe(data => {
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
    this.mainService.getData(event);
  }

}
