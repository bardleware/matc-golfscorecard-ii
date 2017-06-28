import { Component, OnInit } from '@angular/core';
import { GolfService } from '../services/golf.service';

@Component({
  selector: 'app-root',
  providers: [GolfService],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class GolfNavbar {
  constructor(
    private golfService: GolfService
  ) { }
  title = 'Golf Scorecard';
  golfCourses;
  chosenCourse: Object;

  getAllCourses() {
    this.golfService.getCourseOptions()
      .subscribe(
      data => this.golfCourses = data,
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