import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { 
          /*let showWarning: boolean = shouldShowWarning();
          console.log(showWarning);*/
  }

  ngOnInit() {
  }

}
