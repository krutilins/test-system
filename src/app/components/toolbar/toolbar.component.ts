import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() menuOpened: boolean = true
  @Output() onChangeMenuState = new EventEmitter<boolean>()

  constructor() {

  }

  ngOnInit() {

  }

  toggle() {
    this.menuOpened = !this.menuOpened
    this.onChangeMenuState.emit(this.menuOpened)
  }

}
