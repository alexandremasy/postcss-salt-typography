# [WIP] PostCSS - Typography utility

> PostCSS plugin to add a collection of mixins, helpers related to font management for you CSS. This plugin is part of [Salt](https://github.com/alexandremasy/salt), a collection of tool to help you enforce a set of rule througout your application.



## Motivations



## Getting started

Installation is as easy as:

```shell
npm install postcss-salt-typography
```

We are dependent of :

- https://github.com/postcss/postcss
- <https://github.com/GarthDB/postcss-inherit>





## Functionalities

1.   **[Typography definition](docs/typography-definition.md)**

  Provide a way to declare the definition and relation of all the typographies used in an application. 
  ​

2. **Font importer**
   Import all the font available in the font definition. It handle properly diverse font provider `local`, `Google`, `Typekit`.
   @see font-magician.
   ​

3. **Font parser**

   Browse through you css declarations to find the dynamic font values and enforce a given value; 
 ```css
html
{
  font-family: <domain>;
  font-weight: <weights...>;
  font-size: <scale...>;
  line-height: <scale...>;
  font-styles: italic | oblique | none;
}
 ```

4. **Font utility**

   Provide the font utility to define the properties as one

```css
html
{
  font: heading regular xxs/m primary01;
}
```

