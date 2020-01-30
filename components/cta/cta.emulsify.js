import cta from './cta.twig';
import ctaDefault from './cta.yml';
import ctaSimple from './cta-simple.yml';
import ctaLarge from './cta-large.yml';
import code from './Code.mdx';
import style from './Style.md';
import usage from './Usage.md';
import button from '../button/button.emulsify.js';
import { resolve } from 'path';

export default {
  title: 'CTA / Button and heading',
  pages: [
    code,
    style,
    usage,
  ],
  component: cta(ctaDefault),
  dependencies: [button],
  assets: [
    { filepath: resolve(__dirname, './cta.css'), typeOfAsset: 'css' },
  ],
};

export const CTASimple = cta({
  ...ctaDefault,
  ...ctaSimple
});

export const CTALarge = cta({
  ...ctaDefault,
  ...ctaLarge
});
