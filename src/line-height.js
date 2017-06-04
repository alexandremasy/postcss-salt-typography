const abstract = require('./abtract.js');
const _ = require('underscore');
const postcss = require('postcss');

/**
 *  Line Height parser
 *
 *  @author Alexandre Masy <hello@alexandremasy.com>
 **/
class lineHeight extends abstract
{
  /**
   *  The property
   *
   *  @return {String}
   **/
  get property() { return 'line-height'; }

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
    let family, height;
    if (value.indexOf('/') != -1)
    {
      let r = new RegExp(`^(.*)\/(.*)$`)
      let m = value.match(r);

      family = _.findWhere(this._options, {name:m[1]});
      if (!family)
      {
        throw decl.error('Error: The given font definition name does not exists: ' + m[1], { word: m[1], plugin: 'postcss-salt-typography' });
      }
      height = m[2];
    }
    else
    {
      family = this._options[0];
      height = value;
    }

    // get the values
    height = family.lineHeight[height];

    // apply the def to the template
    return this.apply({family:family.name, height});
  }

  /**
   *  Apply the given values to a template
   *
   *  @param {Object} def
   *  @return {Node}
   **/
  apply(def)
  {
    var tpl = `line-height: ${def.height}
    @media(<xs)
    {
      line-height: ${def.height[0]};
    }
    @media(>xs)
    {
      line-height: ${def.height[1]};
    }
    `;

    return postcss.parse(tpl);
  }
}

module.exports = new lineHeight();
