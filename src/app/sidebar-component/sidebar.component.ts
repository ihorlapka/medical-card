import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';
import { ApiService } from '../services/api.service';
import orderBy from 'lodash-es/orderBy';
import cloneDeep from 'lodash-es/cloneDeep';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit, OnChanges {

  patientsData: any;
  displayData: any;
  @Input()
  patientDataAll: any;
  @Output()
  patientSelected = new EventEmitter();
  @Output()
  addNewPatient = new EventEmitter();
  constructor(
    private router: Router
  ) { }

  ngOnChanges() {
    this.patientsData = orderBy(this.patientDataAll, 'firstName', 'asc');
    this.displayData = this.patientDataAll;
  }

  ngOnInit() {
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

  selectPatient(i) {
    this.patientSelected.emit(i);
  }
  addNew() {
    this.addNewPatient.emit(true);
  }

}
