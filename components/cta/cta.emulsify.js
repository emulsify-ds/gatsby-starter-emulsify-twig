import cta from './cta.twig';
import ctaDefault from './cta.yml';
import ctaSimple from './cta-simple.yml';
import ctaLarge from './cta-large.yml';
import code from './Code.mdx';
import style from './Style.md';
import usage from './Usage.md';

export default {
  title: 'CTA / Button and heading',
  pages: [
    code,
    style,
    usage,
  ],
  component: cta(ctaDefault),
};

export const CTASimple = cta({
  ...ctaDefault,
  ...ctaSimple
});

export const CTALarge = cta({
  ...ctaDefault,
  ...ctaLarge
});
