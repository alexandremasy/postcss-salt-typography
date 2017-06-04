const abstract = require('./abtract.js');
const _ = require('underscore');
const postcss = require('postcss');

/**
 *  Font Size parser
 *
 *  @author Alexandre Masy <hello@alexandremasy.com>
 **/
class fontSize extends abstract
{
  /**
   *  The property
   *
   *  @return {String}
   **/
  get property() { return 'font-size'; }

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
    let family, size;
    if (value.indexOf('/') != -1)
    {
      let r = new RegExp(`^(.*)\/(.*)$`)
      let m = value.match(r);

      family = _.findWhere(this._options, {name:m[1]});
      if (!family)
      {
        throw decl.error('Error: The given font definition name does not exists: ' + m[1], { word: m[1], plugin: 'postcss-salt-typography' });
      }
      size = m[2];
    }
    else
    {
      family = this._options[0];
      size = value;
    }

    // get the values
    size = family.sizes[size];

    // apply the def to the template
    return this.apply({family:family.name, size});
  }

  /**
   *  Apply the given values to a template
   *
   *  @param {Object} def
   *  @return {Node}
   **/
  apply(def)
  {
    var tpl = `font-size: ${def.size}
    @media(<xs)
    {
      font-size: ${def.size[0]};
    }
    @media(>xs)
    {
      font-size: ${def.size[1]};
    }
    `;

    return postcss.parse(tpl);
  }
}

module.exports = new fontSize();
