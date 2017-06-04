const abstract = require('./abtract.js');
const _ = require('underscore');
const postcss = require('postcss');

/**
 *  Font Weight parser
 *
 *  @author Alexandre Masy <hello@alexandremasy.com>
 **/
class fontWeight extends abstract
{
  /**
   *  The property
   *
   *  @return {String}
   **/
  get property() { return 'font-weight'; }

  /**
   *  The allowed values
   *
   **/
  get values() {
    return {
      "thin": 100,
      "ultra-light": 200,
      "light":300,
      "normal": 400,
      "semi-bold": 500,
      "bold": 600,
      "extra-bold": 700,
      "black": 800
    };
  }

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
    let family, weight;
    if (value.indexOf('/') != -1)
    {
      let r = new RegExp(`^(.*)\/(.*)$`)
      let m = value.match(r);

      family = _.findWhere(this._options, {name:m[1]});
      if (!family)
      {
        throw decl.error('Error: The given font definition name does not exists: ' + m[1], { word: m[1], plugin: 'postcss-salt-typography' });
      }
      weight = m[2];
    }
    else
    {
      // find the first family who has the given style
      weight = value;

      _.each(this._options, function(e)
      {
        _.each(e.typefaces, function(t)
        {
          if (t.indexOf(weight) != -1 && family == null)
          {
            family = e;
          }
        })
      }, this);

      if (family == null)
      {
        throw decl.error('Error: There are no font definition that has the given weight: ' + weight, { word: weight, plugin: 'postcss-salt-typography' });
      }
    }

    // get the values
    if (!this.values.hasOwnProperty(weight))
    {
      throw decl.error('Error: The given weight does not exists: ' + weight, { word: weight, plugin: 'postcss-salt-typography' });
    }

    weight = this.values[weight];

    // apply the def to the template
    return this.apply({family:family.family, weight});
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
    font-weight: ${def.weight};
    `;

    return postcss.parse(tpl);
  }
}

module.exports = new fontWeight();
