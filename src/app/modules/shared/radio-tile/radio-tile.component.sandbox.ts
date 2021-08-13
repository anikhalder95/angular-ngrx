import { sandboxOf } from 'angular-playground';
import { RadioTileComponent } from './radio-tile.component';

export default sandboxOf(RadioTileComponent)
  .add('Radio tile filter', {
    template: `<app-radio-tile></app-radio-tile>`
  });
