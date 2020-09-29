import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainServiceService } from 'src/app/services/main-service.service';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-load-details',
  templateUrl: './load-details.component.html',
  styleUrls: ['./load-details.component.scss']
})
export class LoadDetailsComponent implements OnInit {
  public Data: any = [];
  public vehicleUrl: any = [];
  public urls: any = [];
  public filmsUrls: any = [];
  public filmdata: any = [];
  public allfilms: any = [];
  public vehiclesUrls: any = [];
  public vehicledata: any = [];
  public allvehicles: any = [];
  public starshipsUrls: any = [];
  public starshipdata: any = [];
  public allstarship: any = [];
  public planetUrls: any = [];
  public planetdata: any = [];
  public allplanet: any = [];
  public speciesUrls: any = [];
  public speciesdata: any = [];
  public allspecies: any = [];
  public peopleUrls: any = [];
  public peopledata: any = [];
  public allpeople: any = [];
  options = { scrollbarMinSize: 30, scrollbarMaxSize: 30 };

  constructor(private apiSrvc: MainServiceService, private http: HttpClient, private details: FetchDataService) { }

  ngOnInit(): void {
    this.byCallback();
  }
  byCallback() {
    this.apiSrvc.getByCallback((result) => {
      if (result) {
        this.Data = result;
        this.filmsUrls = result?.films;
        this.vehicleUrl = result?.vehicles;
        this.starshipsUrls = result?.starships;
        this.planetUrls.push(result?.homeworld);
        this.speciesUrls = result?.species;
        if (result?.people) {
          this.peopleUrls = result?.people;
        } else if (result?.residents) {
          this.peopleUrls = result?.residents;
        } else if (result?.characters) {
          this.peopleUrls = result?.characters;
        } else {
          this.peopleUrls = [];
        }
        this.getFilms();
        this.getVehicles();
        this.getStarship();
        this.getPlanet();
        this.getSpecies();
        this.getPeople();
      }
    });
  }
    getFilms() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.filmsUrls?.length; i++) {
        this.details.getFilmList(this.filmsUrls[i]).subscribe(res => {
          this.filmdata = res;
          this.allfilms.push(this.filmdata.title);
        });
      }
    }
    getVehicles() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.vehicleUrl?.length; i++) {
        this.details.getVehicleList(this.vehicleUrl[i]).subscribe(res => {
          this.vehicledata = res;
          this.allvehicles.push(this.vehicledata.name);
        });
      }
    }
    getStarship() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.starshipsUrls?.length; i++) {
        this.details.getVehicleList(this.starshipsUrls[i]).subscribe(res => {
          this.starshipdata = res;
          this.allstarship.push(this.starshipdata.name);
        });
      }
    }
    getPlanet() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.planetUrls?.length; i++) {
        this.details.getPlanetList(this.planetUrls[i]).subscribe(res => {
          this.planetdata = res;
          this.allplanet.push(this.planetdata.name);
        });
      }
    }
    getSpecies() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.speciesUrls?.length; i++) {
        this.details.getSpeciesList(this.speciesUrls[i]).subscribe(res => {
          this.speciesdata = res;
          this.allspecies.push(this.speciesdata.name);
        });
      }
    }
    getPeople() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.peopleUrls?.length; i++) {
        this.details.getPeopleList(this.peopleUrls[i]).subscribe(res => {
          this.peopledata = res;
          this.allpeople.push(this.peopledata.name);
        });
      }
    }
  }