const abstract = require('./abtract.js');
const _ = require('underscore');
const postcss = require('postcss');

/**
 *  Font Style parser
 *
 *  @author Alexandre Masy <hello@alexandremasy.com>
 **/
class fontStyle extends abstract
{
  /**
   *  The property
   *
   *  @return {String}
   **/
  get property() { return 'font-style'; }

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
    let family, style;
    if (value.indexOf('/') != -1)
    {
      let r = new RegExp(`^(.*)\/(.*)$`)
      let m = value.match(r);

      family = _.findWhere(this._options, {name:m[1]});
      if (!family)
      {
        throw decl.error('Error: The given font definition name does not exists: ' + m[1], { word: m[1], plugin: 'postcss-salt-typography' });
      }
      style = m[2];
    }
    else
    {
      // find the first family who has the given style
      style = value;

      _.each(this._options, function(e)
      {
        _.each(e.typefaces, function(t)
        {
          if (t.indexOf(style) != -1 && family == null)
          {
            family = e;
          }
        })
      }, this);

      if (family == null)
      {
        throw decl.error('Error: There are no font definition that has the given style: ' + style, { word: style, plugin: 'postcss-salt-typography' });
      }
    }

    // get the values
    // size = family.sizes[size];

    // apply the def to the template
    return this.apply({family:family.family, style: style});
  }

  /**
   *  Apply the given values to a template
   *
   *  @param {Object} def
   *  @return {Node}
   **/
  apply(def)
  {
    var tpl = `
    font-family: ${def.family};
    font-style: ${def.style};
    `;

    return postcss.parse(tpl);
  }
}

module.exports = new fontStyle();
