import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  
  constructor(private http: HttpClient) { }
  getFilmList(filmUrl) {
    return new Observable(
      observer => {
      this.http.get(filmUrl)
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
  getPlanetList(planetUrl) {
    return new Observable(
      observer => {
      this.http.get(planetUrl)
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
  getSpeciesList(speciesUrl) {
    return new Observable(
      observer => {
      this.http.get(speciesUrl)
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
  getPeopleList(peopleUrl) {
    return new Observable(
      observer => {
      this.http.get(peopleUrl)
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
  getVehicleList(vehicleUrl) {
    return new Observable(
      observer => {
      this.http.get(vehicleUrl)
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
  getShipList(shipUrl) {
    return new Observable(
      observer => {
      this.http.get(shipUrl)
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
}
