import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/DataService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  SearchText: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  SearchTextChanged() {
    this.dataService._SearchText = this.SearchText;
  }

}
