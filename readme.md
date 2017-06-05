# [WIP] Salt - Typography

> PostCSS plugin to add a collection of utilities related to font management for you CSS. This plugin is part of [Salt](https://github.com/alexandremasy/salt), a collection of tool to help you enforce a set of rule througout your application.



## Functionalities

1. **[Typography definition](#configuration)** Provide a way to declare the definition and relation of all the typographies used in an application.
   ​
2. **[Font importer](https://github.com/alexandremasy/postcss-salt-typography-font-face)** Import all the font available in the font definition. It handle properly diverse font provider `local`, `hosted`,  `Google`, `Typekit`.
   ​
3. **[Font parser](https://github.com/alexandremasy/postcss-salt-typography-parser)** Walk through you css declarations to find the dynamic font values and enforce a predefined one;
   ​



## Getting started

Installation is as easy as:

```shell
npm install --save postcss-salt-typography
```



**PostCSS**

Include the plugin in you build process:

```
@TODO
```



**Gulp**

Include the plugin in your build process:

```javascript
@TODO
```



This plugins depends on :

- [PostCSS](https://github.com/postcss/postcss)
- [Salt - Typography - Helper](https://github.com/alexandremasy/postcss-salt-typography-helper)
- [Salt - Typography - Parser](https://github.com/alexandremasy/postcss-salt-typography-parser)
- [Salt - Typography - Font-Face](https://github.com/alexandremasy/postcss-salt-typography-font-face)
- [Salt - Layout - Breakpoint](https://github.com/alexandremasy/postcss-salt-layout-breakpoint)





## Configuration

### Syntax

The font definition setting is used by *[@font-face](https://github.com/alexandremasy/postcss-salt-typography-font-face)*, *[font-family](https://github.com/alexandremasy/postcss-salt-typography-parser#font-family)*, *[font-size](https://github.com/alexandremasy/postcss-salt-typography-parser#font-size)*, *[font-style](https://github.com/alexandremasy/postcss-salt-typography-parser#font-style)*, *[line-height](https://github.com/alexandremasy/postcss-salt-typography-parser#line-height)* properties. Here is the formal syntax:

```reStructuredText
{
  name:         <string>,
  family:       <string>,
  typefaces:    [
  	[<weight> <style>? default? <provider>!]#
  ],
  sizes:        {
  	[<scale>: <length> | <length> <length>]#
  },
  line-height:  {
  	[<scale>: <length> | <length> <length>]#
  }
};

where
  weight =      thin | ultra-light | light | normal | medium | semi-bold | bold | extra-bold | black
  provider =    <url> | local | google | typekit
```



| Property                   | Type   | Description                              |
| -------------------------- | ------ | ---------------------------------------- |
| `name` **required**        | String | The name of the font set. This is the key to use in your css file to reference a font collection. |
| `family` **required**      | String | The font-family name.                    |
| `typefaces` **required**   | Array  | A map containing all the weight and associated information on how to load the font. More information in the [typefaces definition](#typefaces-definition) section. |
| `sizes` **required**       | Object | A map containing the size definition for each scale. More information in the [size definition](#sizes-definition) section |
| `line-height` **required** | Object | A map containing the line-height definition for each scale. More information in the [line-height definition](#line-height-definition) section. |



### Typefaces definition

The typefaces section contains the exhaustive definition of the fonts available in your project. It is a `Array` where each entry describe a particular variant of the same typeface. Here is the allowed keyword to define an entry:  

|            | Description                              |
| ---------- | ---------------------------------------- |
| `weight`   | The [weight](#weight) of the declared font. Please find the [allowed values bellow](#weight). |
| `style`    | The [style](#style) of the declared font. Please find the [allowed values bellow](#style). |
| `default`  | Set the given font as the default font. The font will be declared on the body as the font-family. |
| `provider` | One of the supported [font providers](#font-providers). Please find the allowed values bellow. |



#### Weight

Here is the list of allowed weight. Use the values listed bellow as a key in the `typefaces` definition. 

| Value         | Description                           |
| ------------- | ------------------------------------- |
| `thin`        | Set the font-weight value to be `100` |
| `ultra-light` | Set the font-weight value to be `200` |
| `light`       | Set the font-weight value to be `300` |
| `normal`      | Set the font-weight value to be `400` |
| `medium`      | Set the font-weight value to be `500` |
| `semi-bold`   | Set the font-weight value to be `600` |
| `bold`        | Set the font-weight value to be `700` |
| `extra-bold`  | Set the font-weight value to be `800` |
| `black`       | Set the font-weight value to be `900` |



#### Style

Here is the list of the allowed font-style. 

| Value     | Description                 |
| --------- | --------------------------- |
| `normal`  | Label the font as *normal*. |
| `italic`  | Label the font as *italic*  |
| `oblique` | Label the font as *oblique* |



#### Font-providers

Here is the list of the supported font-provider. This functionnality is made available by the [@font-face](https://github.com/alexandremasy/postcss-salt-typography-font-face) postcss plugin.

| Value   | Description                              |
| ------- | ---------------------------------------- |
| google  | A font from Google Font                  |
| typekit | A font from Adobe Typekit `soon`         |
| local   | A local font file.                       |
| hosted  | A self hosted font which will be loaded via http/https. More on this subject below. |



#### Font function

This function allows you to declare a local font set. The generated font-face will output an include for each  available font format (`eot`,`woff`, `woff2`, `ttf`, `svg`) 

```scss
font($font-family, $path, $filename, $format: $salt-typography-font-formats);
```

|               | Type   | Description                              |
| ------------- | ------ | ---------------------------------------- |
| `font-family` | String | The font-family for which the font is imported. |
| `path`        | URL    | The path to the folder containing the font file. It can be relative or absolute. |
| `filename`    | String | The name of the font files without extension. Every font files must have the same name per weight, style. E.g: "roboto-light" |
| `format`      | Map    | A list containing the font format to use. |



------



#### Sizes definition

|          | Description                              |
| -------- | ---------------------------------------- |
| `scale`  | The scale for which the size is declared |
| `length` | The font-size value for the given scale. If two css [length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) are provided then the first one is used as the minimum breakpoint's boundery (<=xxs) while the second one is used as the maximum breakpoint's boundery (>xxl). Everything in between is proportional. |



------



#### Line-Height definition

|          | Description                              |
| -------- | ---------------------------------------- |
| `scale`  | The scale for which the line-height is declared |
| `length` | The line-height value for the given scale. If two css [length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) are provided then the first one is used as the minimum breakpoint's boundery (<=xxs) while the second one is used as the maximum breakpoint's boundery (>xxl). Everything in between is proportional. |



## Example

This sample:

```css
html{
  #font-family: heading;
  #font-size: xs;
}
```

With this configuration:

```javascript
var helvetica = {
  name: "heading",
  family:  "Helvetica Neue",
  typefaces: [
    "normal default",
    "bold"
  ],
  sizes:{
    xxs:    [".512rem",  ".579rem"],
    xs:     [".64rem",   ".694rem"],
    s:      [".8rem",    ".833rem"],
    m:      ["1rem",     "1rem"],
    l:      ["1.25rem",  "1.2rem"],
    xl:     ["1.563rem", "1.44rem"],
    xxl:    ["1.953rem", "1.728rem"]
  },
  lineHeight: {
    xxs:    ["1.2rem",   "1.2rem"],
    xs:     ["1.2rem",   "1.2rem"],
    s:      ["1.2rem",   "1.2rem"],
    m:      ["1.3rem",   "1.2rem"],
    l:      ["1.35rem",  "1.3rem"],
    xl:     ["1.4rem",   "1.4rem"],
    xxl:    ["1.45rem",  "1.4rem"]
  }
};
```



**will yield**:

```css
html{
  font-family: Helvetica Neue;
  font-size: .64rem;
}
```

