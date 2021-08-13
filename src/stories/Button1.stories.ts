// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from 'src/app/modules/shared/button/button.component';

export default {
  title: 'edelivery/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button1',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button1',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
