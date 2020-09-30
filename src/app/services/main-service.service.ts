import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {urls} from 'src/app/constants/url';
import { Observable } from 'rxjs/internal/Observable'
import {BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  
    private dataSource = new BehaviorSubject<any>(undefined);
    dataSrc$ = this.dataSource.asObservable();
    public myData;
    constructor(private http: HttpClient) { }

// load film details 

    getFilm(page: number) {
      return new Observable(
        observer => {
          this.http.get(urls.films + '?page=' + page)
            .subscribe((response: any) => {
              observer.next(response);
              observer.complete();
            }, (error: any) => {
              observer.error(error);
              observer.complete();
            });
        }
      );
    }

    // load planet details 

    getPlanet(page: number) {
      return new Observable(
        observer => {
          this.http.get(urls.planets + '?page=' + page)
            .subscribe((response: any) => {
              observer.next(response);
              observer.complete();
            }, (error: any) => {
              observer.error(error);
              observer.complete();
            });
        }
      );
    }

    // load species details 

    getSpecies(page: number) {
      return new Observable(
        observer => {
          this.http.get(urls.species + '?page=' + page)
            .subscribe((response: any) => {
              observer.next(response);
              observer.complete();
            }, (error: any) => {
              observer.error(error);
              observer.complete();
            });
        }
      );
    }

    // load people details 

    getPeople(page: number) {
      return new Observable(
        observer => {
          this.http.get(urls.people + '?page=' + page)
            .subscribe((response: any) => {
              observer.next(response);
              observer.complete();
            }, (error: any) => {
              observer.error(error);
              observer.complete();
            });
        }
      );
    }

    // load vehicle details 

    getVehicle(page: number) {
      return new Observable(
        observer => {
          this.http.get(urls.vehicles + '?page=' + page)
            .subscribe((response: any) => {
              observer.next(response);
              observer.complete();
            }, (error: any) => {
              observer.error(error);
              observer.complete();
            });
        }
      );
    }

    // load starship details 

    getShip(page: number) {
      return new Observable(
        observer => {
          this.http.get(urls.starship + '?page=' + page)
            .subscribe((response: any) => {
              observer.next(response);
              observer.complete();
            }, (error: any) => {
              observer.error(error);
              observer.complete();
            });
        }
      );
    }

    getData(myevent: any) {
      this.myData = myevent;
    }
    
    getByCallback(callbacks) {
      callbacks(this.myData);
    }
  }