import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(
    private api: ApiService
  ) {
  }
  ngOnInit() {
    console.log(22222222222);
    this.api.getPatients().subscribe( (value) => {
      console.log(34444);
      console.log(value);
    });
  }
}
