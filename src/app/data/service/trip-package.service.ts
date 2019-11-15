import { Injectable } from '@angular/core';
import { TripPackageData } from "../schema/mock-data/TripPackageData";
import { TripPackage } from '../schema/TripPackage';

@Injectable({
  providedIn: 'root'
})
export class TripPackageService {

  constructor() { }

  private trips = TripPackageData;

  getTripPackages(): TripPackage[] {
    return this.trips;
  }

  deleteTripPackage(id: number) {
    this.trips = this.trips.filter(trip => trip.id != id);
    return this.trips;
  }
}
