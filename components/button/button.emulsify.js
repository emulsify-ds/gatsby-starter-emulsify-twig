import button from './button.twig';
import buttonDefault from './button.yml';
import code from './Code.mdx';
import style from './Style.md';
import usage from './Usage.md';
import { resolve } from 'path';

export default {
  title: 'Button',
  pages: [
    code,
    style,
    usage,
  ],
  component: button(buttonDefault),
  assets: [
    { filepath: resolve(__dirname, 'button.js') },
    { filepath: resolve(__dirname, 'Button.css'), typeOfAsset: 'css' },
  ],
};
