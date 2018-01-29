import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course.model';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    coursesList: Array<Course> = [];

    constructor() { }

    ngOnInit() {
        this.coursesList = [
            new Course(1, 'title 1', Date.now(), 100, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the`),
            new Course(2, 'title 2', (new Date(2018, 0, 10)).getTime(), 200, `Lorem Ipsum is simply dummy text of the printing.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the`),
            new Course(3, 'title 3', (new Date(2018, 0, 9)).getTime(), 300, `Lorem Ipsum and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the`)
        ];
    }
    deleteCourse(id) {
        console.log(`Delete item: ${id}`);
    }
}
