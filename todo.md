# postcss-salt-typography

## dependencies
  - <https://github.com/GarthDB/postcss-inherit>

## functionalities
  @TODO Write some documentation

  1. font definition – OK
  Transpose the sass font definition to a json file in order to:
    - have it accessible in the postcss setup
    - have it accessible by third parties

  2. font importer
  Generate the appropriate code for font inclusion for:
    - a local provider
    - a google font
  @TODO Implement the font face local
  @TODO Implement the font face google
  @see font-magician

  3. font parser
  @TODO Write some tests
  @TODO Implement the font shortcut
  @TODO Add the responsive for the font-size

  html
  {
    font: heading regular xxs/m primary01;

    font-family: <domain>; – OK
    font-weight: <weights...>; - OK
    font-size: <scale...>; - OK
    line-height: <scale...>; - OK
    font-style: italic | oblique | none; - OK
  }


  4. Add default values for body
  @TODO Check if there are already a body tag alone
  @TODO Add the font-size default value
  @TODO Add the font-family default value
  @TODO Add the line-height default value
