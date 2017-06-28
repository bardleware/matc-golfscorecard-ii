import { Component, OnInit } from '@angular/core';
import { GolfService } from './services/golf.service';

@Component({
  selector: 'app-root',
  providers: [GolfService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private golfService: GolfService
  ) { }
  title = 'Golf Scorecard';
  golfCourses;
  chosenCourse: Object;

  getAllCourses() {
    this.golfService.getCourseOptions()
      .subscribe(
      data => this.golfCourses = data.courses,
      err => console.log(`[ ERROR ]: ${err}`),
      () => console.log(this.golfCourses)
      );
  }



  getCourse(id) {
    this.golfService.getCourseInfo(id)
      .subscribe(
      data => this.chosenCourse = JSON.stringify(data),
      err => console.log(`[ ERROR ]: ${err}`),
      () => console.log("finished")
      );
  }

  ngOnInit() {
    this.getAllCourses();
    this.getCourse(11819);
  }
}
