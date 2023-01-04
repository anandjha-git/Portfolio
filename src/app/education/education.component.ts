import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "ABES Engineering College, Ghaziabad",
      course: 'MCA',
      board: 'AKTU Lucknow',
      duration: '2019-2022',
      score: '78.52%',
    },
    {
      institute: 'SNSRKS College, Saharsa',
      course: 'B.Sc. Mathematics Hons.',
      board: 'BNMU Madhepura',
      duration: '2014-2018',
      score: '60.62%',
    },
    {
      institute: 'SNSRKS College, Saharsa',
      course: 'Intermediate',
      board: 'BSEB Patna',
      duration: '2012-2014',
      score: '53.2%',
    },
    {
      institute: 'High School Chainpur, Parari',
      course: 'Matriculation',
      board: 'BSEB Patna',
      duration: '2011-12',
      score: '63.6%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
