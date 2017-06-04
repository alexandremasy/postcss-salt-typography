const abstract = require('./abtract.js');
const _ = require('underscore');
const postcss = require('postcss');

/**
 *  Font Family parser
 *
 *  @author Alexandre Masy <hello@alexandremasy.com>
 **/
class fontFamily extends abstract
{
  /**
   *  The property
   *
   *  @return {String}
   **/
  get property() { return 'font-family'; }

  /**
   *  Process the value to output the appropriate replacement
   *
   *  @param {String} decl
   **/
  process(decl)
  {
    super.process(decl);

    let value = decl.value;

    // get the def
    let family;
    family = _.findWhere(this._options, {name:value});

    if (!family)
    {
      throw decl.error('Error: The given font definition name does not exists: ' + value, { word: value, plugin: 'postcss-salt-typography' });
    }

    // apply the def to the template
    return this.apply({family:family.family});
  }

  /**
   *  Apply the given values to a template
   *
   *  @param {Object} def
   *  @return {Node}
   **/
  apply(def)
  {
    return postcss.decl({ prop: 'font-family', value: def.family });
  }
}

module.exports = new fontFamily();
