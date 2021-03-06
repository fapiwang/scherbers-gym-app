import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Session } from '../session.model';

interface Place {
  id: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-sessions',
  templateUrl: './add-sessions.component.html',
  styleUrls: ['./add-sessions.component.scss'],
})
export class AddSessionsComponent implements OnInit {
  @Output() pushSession: EventEmitter<any> = new EventEmitter();

  places: Place[] = [
    { id: 'gym-0', viewValue: 'Gym' },
    { id: 'eisenberg-1', viewValue: 'Eisenberg' },
    { id: 'aventura-2', viewValue: 'Aventura Spielberg' },
  ];

  newSession: Session;
  sessions: Session[] = [];

  selectedDate: Date = null;
  selectedTime = '';
  selectedPlace = '';

  correctSession = false;

  onDateChange(data) {
    this.selectedDate = data;
  }

  changePlace(data) {
    if (data === 'gym-0') {
      this.selectedPlace = 'Gym';
    }
    if (data === 'eisenberg-1') {
      this.selectedPlace = 'Eisenberg';
    }
    if (data === 'aventura-2') {
      this.selectedPlace = 'Aventura Spielberg';
    }
  }

  createSession() {
    if (this.selectedDate === null) {
      alert('Bitte gib ein Datum an.');
    } else if (!this.selectedTime.match(/[0-9:]/)) {
      alert('Bitte gib eine korrekte Uhrzeit an.');
    } else if (
      this.selectedPlace !== 'Gym' &&
      this.selectedPlace !== 'Eisenberg' &&
      this.selectedPlace !== 'Aventura Spielberg'
    ) {
      alert('Bitte wähle einen Ort aus.');
    } else {
      this.newSession = new Session(
        this.selectedDate.toLocaleDateString('de-DE', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
        this.selectedTime,
        this.selectedPlace
      );
      this.correctSession = true;
      this.pushSession.emit(this.newSession);
    }
  }

  constructor() { }

  ngOnInit() { }
}
