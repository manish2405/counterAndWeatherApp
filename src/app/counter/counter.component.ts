import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counters: { count: number }[] = [];

  addCounter() {
    this.counters.push({ count: 0 });
    this.updateCounterCount();
  }

  resetCounters() {
    this.counters = [];
    this.updateCounterCount();
  }

  incrementCounter(index: number) {
    this.counters[index].count++;
  }

  decrementCounter(index: number) {
    if (this.counters[index].count > 0) {
      this.counters[index].count--;
    }
  }

  deleteCounter(index: number) {
    this.counters.splice(index, 1);
    this.updateCounterCount();
  }

  updateCounterCount() {
    // You can use this.counters.length to get the count of counter lines
    // Update your Navbar count using this value
    console.log('Number of counters:', this.counters.length);
  }

}
