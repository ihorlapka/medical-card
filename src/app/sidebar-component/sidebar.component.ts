import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import orderBy from 'lodash-es/orderBy';
import cloneDeep from 'lodash-es/cloneDeep';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  patientsData: any;
  displayData: any;

  ngOnInit() {
    this.api.getPatients().subscribe( (value) => {
      this.patientsData = value;
      this.patientsData = orderBy(value, 'firstName', 'asc');
      this.displayData = value;
    });
  }

  onSearchChange(val) {
    this.displayData = cloneDeep(this.patientsData);
    this.displayData = this.displayData.filter((group) => {
      return group.lastName.toLowerCase().includes(val.toLowerCase()) || group.firstName.toLowerCase().includes(val.toLowerCase());
    });
  }

  createPatient(): void {
    this.router.navigate(['add-patient']);
  }


}
