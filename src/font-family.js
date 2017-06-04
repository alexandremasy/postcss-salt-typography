
const fontFamily =
{
  /**
   *  Constructor
   *
   *  @param {Object} options
   **/
  constructor(options)
  {
    this._options = options;
  },

  /**
   *  Set options
   *
   *  @param {Object} value
   **/
  set options(value)
  {
    this._options = value;
  },

  /**
   *  Get the match value
   *
   *  @return {String}
   *  @return {RegExp}
   **/
  match(value)
  {
    var r = new RegExp(`^(.*)$`)
    var m = value.match(r);

    return {
      family: m[1]
    }
  },

  /**
   *  Declaration processor
   *
   *  @param {Object} decl – A postcss declaration object
   **/
  process(decl)
  {

  }
}

module.exports = fontFamily;
