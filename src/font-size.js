
const fontSize =
{
  /**
   *  Constructor
   *
   *  @param {Object} config
   **/
  constructor(config)
  {
    this.config = config;
  },

  /**
   *  Set config
   *
   *  @param {Object} value
   **/
  set config(value)
  {
    this.config = config;
  },

  /**
   *  Get the match value
   *
   *  @return {String}
   *  @return {RegExp}
   **/
  get match()
  {

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

module.exports = fontSize;
