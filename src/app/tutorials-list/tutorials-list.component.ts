import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TutorialServiceService } from '../tutorial-service.service';

@Component({
  selector: 'app-tutorials-list',
  imports: [NgFor],
  templateUrl: './tutorials-list.component.html',
  styleUrl: './tutorials-list.component.css'
})
export class TutorialsListComponent {
tutorials:any[]=[];

  constructor(private servicio:TutorialServiceService) { }
  ngOnInit(): void {
    this.servicio.getAll().subscribe((data)=>{this.tutorials=data});
    console.log(this.tutorials);
  }
}
