import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  links = [
    {
      url: '/',
      text:  'Take tests'
    },
    {
      url: '/test-history-list',
      text:  'Test history'
    },
    {
      url: '/constructor',
      text: 'Constructor'
    }
  ]
  ngOnInit() {

  }
}
