import { Component, OnInit } from '@angular/core';
import vehicleData from '../../assets/data/model-cart-data.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vehicleDetails = vehicleData.models.vehicleDetails.list;
  selectedVehicle: any;

  constructor() { }

  ngOnInit(): void {
    console.log('vehicle', vehicleData);
    
  }

  viewVehicle(vehicle:any): void {
    this.selectedVehicle = vehicle;
    console.log('selectedVehicle', this.selectedVehicle);
  }

  compareVehicle() {
    // Functionality to compare vehicles
  }

}
