import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularattempttwo';
  submitForm(name: string, email: string, message: string) {
    // You can implement form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // For example, you can make an HTTP request to submit the form data
  }
}
