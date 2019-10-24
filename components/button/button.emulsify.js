import button from './button.twig';
import code from './Code.mdx';
import style from './Style.md';
import usage from './Usage.md';

export default {
  title: 'Button',
  pages: [
    code,
    style,
    usage,
  ],
  component: button({
    button_content: 'Four Kitchens',
    button_url: 'https://fourkitchens.com',
  }),
};
