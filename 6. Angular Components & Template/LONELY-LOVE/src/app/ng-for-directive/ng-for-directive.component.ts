import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {
public names: string[] = ['Lucky', 'Love', 'Happy', 'Awesome'];
public products: any[]= [
  {
    id: 1,
    name: "alienware",
    image: "https://cnet4.cbsistatic.com/img/AO4DVqus2p80OhqjCcNUWI-TW9g=/868x488/2019/05/24/88eaa6dd-0326-4504-b594-358c16111dea/alienware-m17-1.jpg"
  },
  {
    id: 2,
    name: "macbook",
    image: "https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2018/11/macbook-1.jpg"
  },

  {
    id: 3,
    name: "razor",
    image: "https://media.wired.com/photos/5bc67212a8af293117556237/master/pass/razerblade.jpg"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
