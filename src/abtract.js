
class abstract
{
  /**
   *  Set options
   *
   *  @param {Object} value
   **/
  set options(value) { this._options = value; }

  /**
   *  Process the value to output the appropriate replacement
   *
   *  @param {String} decl
   **/
  process(decl)
  {
    if (!this._options)
    {
      throw decl.error('Error: Please provide a configuration first ', { plugin: 'postcss-salt-typography' });
    }
  }
}

module.exports = abstract;
