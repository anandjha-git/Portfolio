import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'KRISHISAMADHAN - WEB APPLICATION',
      technologies: 'HTML, CSS, JS, Bootstrap, PHP, MySql',
      description: [
       'Aim of project to provide the all necessary information for farmers in Hindi language as well they will able to purchase the farming products.',
       'The Sellers would have to right to add and edit the products which they want to sell on that platform.',
       'The Mandi’s Owners will able to add and modify the rates of fruits and vegetables which they want to purchase from the farmers.'
      ],
    },
    {
      title: 'Manual Testing of Resume Builder and NBA Web Application.',
      technologies: 'UiPath Studio, Excel',
      description: [
        'Worked as a team lead to complete the testing',
        'Got a chance to work in the team',
        'Worked on live project of my college',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
