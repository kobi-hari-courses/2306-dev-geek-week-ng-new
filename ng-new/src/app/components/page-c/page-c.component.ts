import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-c',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.scss']
})
export class PageCComponent {

}
