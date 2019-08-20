import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  profile = {
    username: 'Bob',
    email: 'abc@org.com',
    facebook: 'faceb.com',
    twitter: 'twt.com',
    tel: '123-456-789'
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(profileForm) {
    console.log(profileForm);
  }

}
