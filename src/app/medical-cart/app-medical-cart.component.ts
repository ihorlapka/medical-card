import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-medical-cart',
  templateUrl: './app-medical-cart.component.html',
  styleUrls: ['./app-medical-cart.component.scss']
})

export class AppMedicalCartComponent implements OnInit {

  patientDataAll: any;
  selectedPatient: number;
  editMode: boolean;

  constructor(
    private api: ApiService
  ) {
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.api.getPatients().subscribe( (value) => {
      this.patientDataAll = value;
    });
  }
  patientSelected(index) {
    this.selectedPatient = this.patientDataAll[index];
  }
  addNewPatient(val: boolean) {
    console.log(val);
    this.editMode = val;
  }
}
