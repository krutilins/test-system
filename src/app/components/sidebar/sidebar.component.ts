import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextLink } from 'src/app/shared//models/text-link.model';
import { TEXT_LINKS } from './sidebar.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  textLinks: TextLink[] = TEXT_LINKS;
}
