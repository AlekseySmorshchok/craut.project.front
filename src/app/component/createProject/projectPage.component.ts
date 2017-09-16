import { Component} from "@angular/core";
import {ImageComponent} from "../imageArea/image.component";
import {Project} from "../../model/project";
import {ProjectService} from "../../service/projectService";
import {CalendarComponent} from "./calendar/calendar.component";
import {DateModel} from "ng2-datepicker";

@Component({
  selector: 'app-project-page',
  templateUrl: './projectPage.component.html',
  styleUrls: ['./projectPage.component.css'],
})

export class ProjectPageComponent {
  protected project: Project = new Project;
  id_image: any;
  calendar:DateModel;
  loading = false;
  errorMessage: string;
  constructor(private projectService:ProjectService,protected calendarComponent:CalendarComponent) {
    this.id_image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505210950/azufvfotm2nypj55ebnm.png';
  }
  updateImg(value: any) {
    this.id_image = 'http://res.cloudinary.com/crowbanding/image/upload/v1505169254/' + value + '.jpg';
  }
  getdata()
  {
    console.log("1111"+this.calendarComponent.date);
  }
  sendData(value:any){
    this.project.image = this.id_image;
    this.projectService.sendProjectData(this.project).subscribe( error => {
      this.loading = false;
      //console.log(this.errorMessage = error);
    });
  }
}
