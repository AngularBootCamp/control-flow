import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './employee-counter.component.html',
  standalone: true
})
export default class EmployeeCounterComponent {
  n = 0;

  increment() {
    this.n++;
  }

  reset() {
    this.n = 0;
  }

  results() {
    if (this.n > 1 && this.n < 5) {
      return this.n;
    }
    return undefined;
  }
}
