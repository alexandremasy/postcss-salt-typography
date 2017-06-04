# postcss-salt-typography

## dependencies
  - <https://github.com/GarthDB/postcss-inherit>

## functionalities

  1. font definition
  Transpose the sass font definition to a json file in order to:
    - have it accessible in the postcss setup
    - have it accessible by third parties

  2. font importer
  Generate the appropriate code for font inclusion for:
    - a local provider
    - a google font
  @see font-magician

  3. font parser
  html
  {
    font: heading regular xxs/m primary01;

    font-family: <domain>;
    font-weight: <weights...>;
    font-size: <scale...>;
    line-height: <scale...>;
    font-style: italic | oblique | none;
  }
