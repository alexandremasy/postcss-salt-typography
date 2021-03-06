# [WIP] Salt - Typography

> PostCSS plugin to add a collection of utilities related to font management for you CSS. This plugin is part of [Salt](https://github.com/alexandremasy/salt), a collection of tool to help you enforce a set of rule througout your application.



## Functionalities

1. **[Typography definition](#configuration)** Provide a way to declare the definition and relation of all the typographies used in an application.
   ​
2. **[Importer](https://github.com/alexandremasy/postcss-salt-typography-importer)** Import all the font available in the font definition. It handle properly diverse font provider `local`, `hosted`,  `Google`.
   ​
3. **[Parser](https://github.com/alexandremasy/postcss-salt-typography-parser)** Walk through you css declarations to find the dynamic font values and enforce a predefined one;
   ​
4. **[Default](https://github.com/alexandremasy/postcss-salt-typography-default)** Declare default typographics values for the body, html based on the typography definition. 



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

```css
@*font{
  [ name:         	<string>; ] ||
  [ family:       	<string>; ] ||
  [ fallback:	  	<string>; ] ||
  [ format:		  	[ eot || woff || svg || ttf ]# ||
  [ typefaces:		[ [ <weight> <style>? <provider> ]# ; ] ||
  [ sizes:        	[ [ <scale> [ <length> | <length> <length> ] ]#; ]# ||
  [ line-height:  	[ [ <scale> [ <length> | <length> <length> ] ]#; ]# 
};

where
	<style> = [ normal | italic | oblique ]
	<provider> = [ local(<string>) | <url> | google ]+ default? ]
```



| Property                   | Type   | Description                              |
| -------------------------- | ------ | ---------------------------------------- |
| `name` **required**        | String | The name of the font set. This is the key to use in your css file to reference a font collection. |
| `family` **required**      | String | The font-family name.                    |
| `fallback` *optional*      | String | The fallback for the given font          |
| `format` *optional*        | List   | The font format to consider while importing. Used by the `hosted` font files. If no value provided, all the format will be imported. |
| `typefaces` **required**   | List   | A map containing all the weight and associated information on how to load the font. More information in the [typefaces definition](#typefaces-definition) section. |
| `sizes` **required**       | List   | A map containing the size definition for each scale. More information in the [size definition](#sizes-definition) section |
| `line-height` **required** | List   | A map containing the line-height definition for each scale. More information in the [line-height definition](#line-height-definition) section. |



### Typefaces definition

The typefaces section contains the exhaustive definition of the fonts available in your project. It is a `Array` where each entry describe a particular variant of the same typeface. Here is the allowed keyword to define an entry:  

|           | Description                              |
| --------- | ---------------------------------------- |
| `weight`  | The [weight](#weight) of the declared font. Please find the [allowed values bellow](#weight). |
| `style`   | The [style](#style) of the declared font. Please find the [allowed values bellow](#style). |
| `default` | Set the given font as the default font. The font will be declared on the body as the font-family. |
| `local`   | Allow you to declare a local font file. The function allow one parameter, the `font-name`, the name of the font on the local system. |
| `url`     | Declare a file to load via http/https.   |
| `google`  | Will load the font from Google Fonts     |



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
  *font-family: heading;
  *font-size: xs;
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
