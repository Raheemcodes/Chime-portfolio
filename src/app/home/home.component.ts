import { Component, OnInit } from '@angular/core';
import { CaseStudy } from '../shared/shared.mdel';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  caseStudyList: CaseStudy[] = [
    {
      title: 'Student Portal Redesign',
      img: './../../assets/case-study/student-portal.png',
      desc: 'A two months long re-design project of Redeemer’s University student’s portal',
      areas: ['Product Design', 'Web Design', 'Redesign'],
      link: 'https://www.behance.net/gallery/140413829/Re-designing-of-Redeemers-University-Student-Portal ',
      background: '#F9F8F8',
    },
    {
      title: 'NFT Marketplace Mobile App',
      img: './../../assets/case-study/NFT-market.png',
      desc: 'A designing a user-friendly NFT marketplace interface to help user’s easily buy or mint their own NFTs.',
      areas: ['Product Design', 'Concept', 'Web3'],
      link: 'https://www.behance.net/gallery/141094899/NFT-Marketplace-Mobile-App',
      background: '#FF522D',
    },
    {
      title: 'Movie Ticket App',
      img: './../../assets/case-study/movie-ticket.png',
      desc: 'Designing a movie ticket app to make it easy for users to purchase tickets online.',
      areas: ['Product Design', 'Concept'],
      link: 'https://www.behance.net/gallery/140068541/Movie-Ticket-App-Casestudy',
      background: '#AFD7F8',
    },
  ];

  services: { image: string; title: string; desc: string }[] = [
    {
      image: '../../assets/icons/service.png',
      title: 'Service Design',
      desc: "Create services and procedures that satisfy your clients' needs by understanding their entire journeys.",
    },
    {
      image: '../../assets/icons/uiux.png',
      title: 'UI/UX Design',
      desc: 'Design digital touch-points that are convenient to the user experience and the business.',
    },
    {
      image: '../../assets/icons/design.png',
      title: 'Design Systems',
      desc: 'With a design system, you can assure scalability and unify your digital experience across services.',
    },
  ];

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {}
}
