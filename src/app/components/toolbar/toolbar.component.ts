import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Input() menuOpened = true;

  @Output() menuStateChange = new EventEmitter<boolean>();

  toggleDrawer(): void {
    this.menuOpened = !this.menuOpened;
    this.menuStateChange.emit(this.menuOpened);
  }
}
