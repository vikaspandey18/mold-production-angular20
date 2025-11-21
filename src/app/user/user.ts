import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [Navbar, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {}
