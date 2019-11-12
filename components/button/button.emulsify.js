import button from './button.twig';
import buttonDefault from './button.yml';
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
  component: button(buttonDefault),
};
