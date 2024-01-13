import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { CardComponent } from "./card/card.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormComponent, CardComponent]
})
export class AppComponent {

  title = 'Angular - Tailwind';

}
