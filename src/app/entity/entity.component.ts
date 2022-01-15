import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  public header = "123";
  constructor() { }

  ngOnInit(): void {
  }

}
