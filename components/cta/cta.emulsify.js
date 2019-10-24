import cta from './cta.twig';
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
  component: cta({
    cta__heading: 'Simple Header',
    cta__button_text: 'Click here',
    cta__button_url: 'https://fourkitchens.com',
  }),
};

export const CTASimple = () => cta({
  cta__heading: 'Simple Header',
  cta__button_text: 'Click here',
  cta__button_url: 'https://fourkitchens.com',
});

export const CTALarge = () => cta({
  cta__heading: 'World\'s Largest Heading: Check Out How We Did It',
  cta__button_text: 'Learn more about creating large calls to action by clicking here.',
  cta__button_url: 'https://fourkitchens.com',
});
