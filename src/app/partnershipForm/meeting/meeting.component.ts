import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class meetingComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

  showInput = false;

  name: string = ''; 
  description: string = '' ; 
  socialService: string= '' ; 
 
  constructor(private sre: ServiceRealestateService){}

  toggleInput() {
    this.showInput = !this.showInput;
  }

  ngOnInit(): void {
    
  }
  onSubmit(signInForm:NgForm): void { console.log(signInForm.value) }
 
  saveSocService(signInForm:NgForm) 

  { 
    this.sre.realestateRequest._socialservices=signInForm.value
console.log( this.sre.realestateRequest);
}

}

