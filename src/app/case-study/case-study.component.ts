import { Component, OnInit } from '@angular/core';
import { CaseStudy } from '../shared/shared.mdel';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss'],
})
export class CaseStudyComponent implements OnInit {
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
    {
      title: 'DailyUI Challenge',
      img: './../../assets/case-study/daily-ui.png',
      desc: 'I Designed 100 UI interfaces for 100 days.',
      areas: ['Product Design', 'Challenge'],
      link: 'https://www.behance.net/gallery/139783315/DailyUI-Project',
      background: '#188AEC',
    },
    {
      title: 'College Search Company',
      img: './../../assets/case-study/college-search.png',
      desc: 'Designing a website to make it easier for high school students to search for and find out more information about their preferred schools.',
      areas: ['Product Design', 'Concept'],
      link: 'https://www.behance.net/gallery/141023679/Responsive-Website-for-a-college-searching-company',
      background: '#B3C2D8',
    },
    {
      title: 'Whatsapp Revamp',
      img: './../../assets/case-study/whatsapp-revamp.png',
      desc: 'Revamping and adding new features to help user experience.',
      areas: ['Product Design', 'Revamp'],
      link: 'https://www.behance.net/gallery/142837009/Whatsapp-Revamp',
      background: '#0E7E6D',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
