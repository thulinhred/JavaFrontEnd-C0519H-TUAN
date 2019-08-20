import { Component, OnInit } from '@angular/core';
import { TimelinesService } from 'src/app/services/timelines.service';
@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
output = '';
  constructor(private timelinesService: TimelinesService) { }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.timelinesService.getDiffToNow(value);
  }

}
