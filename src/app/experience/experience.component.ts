import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences: ExperienceModel[] = [
    {
      title: 'Chedda Finance',
      live: false,
      position: 'Senior Product Designer',
      image: 'chedda.png',
      link: 'https://www.chedda.finance/',
      date: {
        from: 'Oct 2023',
      },
      desc: 'Currently leading design initiatives, driving user-centric solutions for financial products and managing the entire design process from concept to execution.',
    },
    {
      title: 'Bulan',
      live: true,
      position: 'Lead Product Designer',
      image: 'bulan.png',
      link: 'https://bulan.io/',
      date: {
        from: 'Apr 2021',
      },
      desc: 'I led the design of an exceptional, user-friendly interfaces for a wide range of web and mobile applications, consistently receiving positive feedback and enhancing user experiences.',
    },
    {
      title: 'GUI INU',
      live: true,
      position: 'Product Designer',
      image: 'inu.png',
      link: 'https://bulan.io/',
      desc: 'I designed a user friendly interface for the number 1 meme coin on the Aptos blockchain, worked closely with developer and marketer to ensure the successful launch of the product.',
    },
    {
      title: 'GUI INU',
      live: true,
      position: 'Product Designer',
      image: 'foundation.jpeg',
      link: 'https://bulan.io/',
      desc: 'I designed a user friendly interface for the number 1 meme coin on the Aptos blockchain, worked closely with developer and marketer to ensure the successful launch of the product.',
    },
    {
      title: 'GUI INU',
      live: true,
      position: 'Product Designer',
      image: 'aptos.jpeg',
      link: 'https://bulan.io/',
      desc: 'I designed a user friendly interface for the number 1 meme coin on the Aptos blockchain, worked closely with developer and marketer to ensure the successful launch of the product.',
    },
    {
      title: 'GUI INU',
      live: true,
      position: 'Product Designer',
      image: 'deel.png',
      link: 'https://bulan.io/',
      desc: 'I designed a user friendly interface for the number 1 meme coin on the Aptos blockchain, worked closely with developer and marketer to ensure the successful launch of the product.',
    },
    {
      title: 'GUI INU',
      live: true,
      position: 'Product Designer',
      image: 'harborgate.png',
      link: 'https://bulan.io/',
      desc: 'I designed a user friendly interface for the number 1 meme coin on the Aptos blockchain, worked closely with developer and marketer to ensure the successful launch of the product.',
    },
    {
      title: 'MafiaZ',
      live: true,
      position: 'Lead Product Designer',
      image: 'mafiaz.png',
      link: 'https://www.mafiaz.xyz/',
      desc: 'I designed an aesthetically pleasing and intuitive user interfaces, as well as interactive prototypes, for a diverse range of mobile and web applications, enhancing user experiences and functionality.',
    },
    {
      title: 'GUI INU',
      live: true,
      position: 'Product Designer',
      image: 'misfit.png',
      link: 'https://bulan.io/',
      desc: 'I designed a user friendly interface for the number 1 meme coin on the Aptos blockchain, worked closely with developer and marketer to ensure the successful launch of the product.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
