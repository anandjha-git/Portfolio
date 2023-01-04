import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Anand Kumar Jha'],
    ['Age', '25 Year'],
    ['Work Exp', 'Fresher'],
    ['Education', 'MCA (2022)'],
    ['Interests', 'Coding'],
  ];

  aboutMe: string[] = [
    'Hi, I am an Associate Software Engineer at Mphasis Ltd.',
    'Have a good understanding and Hands-on in Java Full Stack Development'
  ];

  constructor() {}

  ngOnInit(): void {}
}
