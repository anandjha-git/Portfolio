import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Associate Software Engineer',
      company: 'Mphasis Ltd.',
      duration: 'June 2022 - Now',
      description: [
        'Trained in Java Full Stack Development include Hands-on',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'S2Infinitum Softech Pvt. Ltd. Noida',
      duration: 'April 2022 - June 2022',
      description: [
        'Trained and Hands on with Html, CSS, JavaScript, Bootstrap, Angular.',
      ],
    },
    
  ];
  constructor() { }

  ngOnInit(): void { }
}
