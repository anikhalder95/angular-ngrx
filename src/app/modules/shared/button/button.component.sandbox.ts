import { sandboxOf } from 'angular-playground';
import { ButtonComponent } from './button.component';

export default sandboxOf(ButtonComponent)
  .add('Primary button', {
    template: `<app-button>Primary button</app-button>`,
  })
  .add('Secondary button', { 
    template: `<app-button>Secondary button</app-button>`,
  })
  .add('Link', { 
    template: `<app-button>Link</app-button>`,
  });