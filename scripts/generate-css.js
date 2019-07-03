/*
 * Prints the @font-face CSS directives for the CHTML TeX font
 */
const fs = require('fs');
const TeXFont = require('mathjax3/mathjax3/output/chtml/fonts/tex');

const CssStyles = require('mathjax3/mathjax3/output/common/CssStyles');

class myFont extends TeXFont.TeXFont {}
myFont.defaultVariants = [];
myFont.defaultDelimiters = {};
myFont.defaultChars = {};
myFont.defaultVariantClasses = {};
myFont.defaultStyles = {};

const font = new myFont({
  fontURL: '~mathjax3/mathjax3-ts/output/chtml/fonts/tex-woff-v2' // Path to fonts.
});

const styles = new CssStyles.CssStyles();
styles.addStyles(font.styles);

fs.writeFileSync('style/fonts.css', styles.cssText);
