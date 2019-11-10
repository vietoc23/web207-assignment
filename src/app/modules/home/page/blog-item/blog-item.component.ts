import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/data/schema/Blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blog: Blog = {
    title: 'Cruise Private Party Booking Available Now',
    date_created: '13th Dec',
    likes: 15,
    desc: 'Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops.',
    image: "assets/img/blog/h-blog1.jpg"
  }

}
