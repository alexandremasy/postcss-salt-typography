const _ = require('underscore');
const postcss = require('postcss');

/**
 *  Font Style parser
 *
 *  @author Alexandre Masy <hello@alexandremasy.com>
 **/
class fontStyle
{
  /**
   *  The property
   *
   *  @return {String}
   **/
  get property(){ return 'font-style' }

  /**
   *  Allowed values
   *
   *  @return {Array}
   **/
  get values() { return ['normal', 'italic', 'oblique'] }

  /**
   *  Set options
   *
   *  @param {Object} value
   **/
  set options(value) { this._options = value }

  /**
   *  Process the value to output the appropriate replacement
   *
   *  @param {String} value
   **/
  process(value)
  {
    // get the def
    let r = new RegExp(`^(.*)\/(.*)$`);
    let m = value.match(r);

    let family = m[1];
    let style = m[2];

    // get the values
    let f = _.findWhere(this._options, {name:family});
    if (f)
    {
      size = f.sizes[size];
    }

    // apply the def to the template
    return this.apply(def);
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
    @media(>xs)
    {
      font-size: ${def.size};
    }
    @media(<xs)
    {
      font-size: ${def.size};
    }
    `;

    return postcss.parse(tpl);

    // return postcss.decl({ prop: 'font-size', value: def.size });
  }
}

module.exports = new fontStyle();
