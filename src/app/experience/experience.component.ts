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
      link: 'https://www.guiinu.com/',
      desc: 'I designed a user friendly interface for the number 1 meme coin on the Aptos blockchain, worked closely with developer and marketer to ensure the successful launch of the product.',
    },
    {
      title: 'Foundation',
      live: true,
      position: 'Product Designer',
      image: 'foundation.jpeg',
      link: 'https://foundation.app/',
      date: {
        from: 'Feb 2022',
      },
      desc: 'I designed an aesthetically pleasing and intuitive user interfaces, as well as interactive prototypes, for a diverse range of mobile and web applications, enhancing user experiences and functionality.',
    },
    {
      title: 'Aptosmonkeys',
      live: true,
      position: 'Product Designer',
      image: 'aptos.jpeg',
      link: 'https://www.aptosmonkeys.club/',
      desc: 'I designed a website and a number of tools like echo, sanctuary, rafflor and stake website for Aptosmonkey, the bluechip product of Aptos blockchain in the NFT space.',
    },
    {
      title: 'Deel',
      live: true,
      position: 'Product Designer',
      image: 'deel.png',
      link: 'https://www.deel.com/',
      date: {
        from: 'Jan 2021',
      },
      desc: "Led a comprehensive user research initiative, which informed the redesign of the company's flagship product and Elevated the performance of critical features at Deel.",
    },
    {
      title: 'Harborgate',
      live: true,
      position: 'Product Designer',
      image: 'harborgate.png',
      link: 'https://harborgate.io/',
      desc: 'I designed the website of a DeFi platform where you can create tokens effortlessly. Conducted several A/B testing and usability studies, resulting in a remarkable increase in user engagement.',
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
      title: 'Misfits',
      live: true,
      position: 'Product Designer',
      image: 'misfit.png',
      link: 'https://www.misfits.land/',
      desc: 'Led design teams overseeing end-to-end design processes, from ideation to project launch and integrated user research driving more successful product outcomes.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
