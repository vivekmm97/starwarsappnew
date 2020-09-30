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

  public loadData: any = [];
  public vehicleUrl: any = [];
  public urls: any = [];

  public filmsUrls: any = [];
  public loadFilms: any = [];
  public filmDetails: any = [];

  public vehiclesUrls: any = [];
  public loadVehicles: any = [];
  public vehicleDetails: any = [];

  public starshipsUrls: any = [];
  public loadStarship: any = [];
  public starshipDetails: any = [];

  public planetUrls: any = [];
  public loadPlanets: any = [];
  public planetDetails: any = [];

  public speciesUrls: any = [];
  public loadSpecies: any = [];
  public speciesDetails: any = [];

  public peopleUrls: any = [];
  public loadPeople: any = [];
  public peopleDetails: any = [];

  options = { scrollbarMinSize: 30, scrollbarMaxSize: 30 };

  constructor(private apiSrvc: MainServiceService, private http: HttpClient, private details: FetchDataService) { }

  ngOnInit(): void {
    this.byCallback();
  }

  byCallback() {
    this.apiSrvc.getByCallback((result) => {

      if (result) {

        this.loadData = result;
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

  // load films

    getFilms() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.filmsUrls?.length; i++) {
        this.details.getFilmList(this.filmsUrls[i]).subscribe(res => {
          this.loadFilms = res;
          this.filmDetails.push(this.loadFilms.title);
        });
      }
    }

  // load vehicles
  
    getVehicles() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.vehicleUrl?.length; i++) {
        this.details.getVehicleList(this.vehicleUrl[i]).subscribe(res => {
          this.loadVehicles = res;
          this.vehicleDetails.push(this.loadVehicles.name);
        });
      }
    }

  // load starships
  
    getStarship() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.starshipsUrls?.length; i++) {
        this.details.getVehicleList(this.starshipsUrls[i]).subscribe(res => {
          this.loadStarship = res;
          this.loadPlanets.push(this.loadStarship.name);
        });
      }
    }

  // load planets
  
    getPlanet() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.planetUrls?.length; i++) {
        this.details.getPlanetList(this.planetUrls[i]).subscribe(res => {
          this.loadPlanets = res;
          this.planetDetails.push(this.loadPlanets.name);
        });
      }
    }

  // load species
  
    getSpecies() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.speciesUrls?.length; i++) {
        this.details.getSpeciesList(this.speciesUrls[i]).subscribe(res => {
          this.loadSpecies = res;
          this.speciesDetails.push(this.loadSpecies.name);
        });
      }
    }

  // load people
  
    getPeople() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.peopleUrls?.length; i++) {
        this.details.getPeopleList(this.peopleUrls[i]).subscribe(res => {
          this.loadPeople = res;
          this.peopleDetails.push(this.loadPeople.name);
        });
      }
    }
  }