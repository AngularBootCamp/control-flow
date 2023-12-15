import { Component } from '@angular/core';

const meetings = [
  {
    description: 'Standup',
    participants: ['John', 'Paul', 'Ringo', 'George']
  },
  {
    description: 'Meet with the Bills',
    participants: ['Bill', 'Bill', 'Peter']
  },
  { description: 'Working lunch', participants: ['Joe', 'Jane'] }
];

const todoList = [
  'Attach cover letter to TPS report',
  'Double check decimal places',
  'Jump to conclusions'
];

enum ProfilePart {
  phone = 'Phone Number',
  email = 'Email Address',
  address = 'Address'
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  standalone: true
})
export default class UserDashboardComponent {
  ProfilePart = ProfilePart;
  profileParts = Object.values(ProfilePart);
  profilePartShown = ProfilePart.phone;
  nextMeetings = meetings;
  todos = todoList;

  addTodo() {
    this.todos.push(`Task ${this.todos.length + 1}`);
  }

  clearTodos() {
    this.todos.length = 0;
  }
}
