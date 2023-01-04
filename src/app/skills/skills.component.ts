import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Core Java',
      level: 'Expert',
      rating: 90,
    },
  
    {
      name: 'Spring Boot, Hibernate, JPA, Rest API, Microservice',
      level: 'Moderate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS, Bootstrap',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Angular, Angular Material, TypeScript',
      level: 'Moderate',
      rating: 65,
    },
    {
      name: 'C',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Sql',
      level: 'Moderate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
