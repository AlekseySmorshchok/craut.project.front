import {Component, EventEmitter, Output} from "@angular/core";
import {DateModel, DatePickerOptions} from "ng2-datepicker";

@Component({
  selector: 'app-colendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {


  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    this.options = new DatePickerOptions();
    console.log(this.date);
  }

}
