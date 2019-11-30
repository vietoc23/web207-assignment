import { Injectable } from '@angular/core';
import { TripPackageData } from "../schema/mock-data/TripPackageData";
import { TripPackage } from '../schema/TripPackage';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripPackageService {
  private tripPackages = "http://localhost:3000/trips";

  constructor(
    private http: HttpClient
  ) { }

  getTripPackages(): Observable<TripPackage[]> {
    return this.http.get<TripPackage[]>(this.tripPackages);
  }

  getTripPackage(id: number): Observable<TripPackage> {
    const url = `${this.tripPackages}/${id}`;
    return this.http.get<TripPackage>(url);
  }

  deleteTripPackage(id: number): Observable<TripPackage> {
    const url = `${this.tripPackages}/${id}`;
    return this.http.delete<TripPackage>(url);
  }

  addTripPackage(trip: TripPackage): Observable<TripPackage> {
    return this.http.post<TripPackage>(this.tripPackages, trip);
  }

  saveTripPackage(trip: TripPackage): Observable<TripPackage> {
    const url = `${this.tripPackages}/${trip.id}`;
    return this.http.put<TripPackage>(url, trip);
  }
}
