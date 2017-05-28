# Typography definition syntax

The font definition setting is used by [@font-face](font-face), [font-family](font-family), [font-size](font-size), [line-height](line-height) properties. Here is the formal syntax:

```scss
(
  [name:        <string>,]?
  family:       <string>,
  typefaces:    ([<weight> <style>? default? [font | <provider>]!]#),
  sizes:        ([<scale>: <length> | <length> <length>]#),
  line-height:  ([<scale>: <length> | <length> <length>]#)
);

where
  weight =      thin | ultra-light | light | normal | medium | semi-bold | bold | extra-bold | black
  provider =    <url> | google
  scale =       xxs | xs | s | m | l | xl | xxl
```



| Property                   | Type   | Description                              |
| -------------------------- | ------ | ---------------------------------------- |
| `name` *optional*          | String | The name of the font set. This is value used to generate the helpers. If not provided, the `family` is used. |
| `family` **required**      | String | The font-family name.                    |
| `typefaces` **required**   | List   | A map containing all the weight and associated information on how to load the font. More information in the [typefaces definition](#typefaces-definition) section. |
| `sizes` **required**       | Map    | A map containing the size definition for each scale. More information in the [size definition](#sizes-definition) section |
| `line-height` **required** | Map    | A map containing the line-height definition for each scale. More information in the [line-height definition](#line-height-definition) section. |



------



#### Typefaces definition

The typefaces section contains the exhaustive definition of the fonts available in your project. It is a `list` where each entry describe a particular variant of the same typeface. Here is the allowed keyword to define an entry:  

|            | Description                              |
| ---------- | ---------------------------------------- |
| `weight`   | The [weight](#weight) of the declared font. |
| `style`    | The [style](#style) of the declared font. |
| `default`  | Set the given font as the default font. The font will be declared on the body as the font-family. |
| `font`     | Use the [font function](#font-function) to declare your local file set. |
| `provider` | One of the supported [font provider](#font-provider). |



##### Weight

Here is the list of allowed weight. Use the values listed bellow as a key in the `typefaces` map. 

| Value         | Description                        |
| ------------- | ---------------------------------- |
| `thin`        | Set the font-weight value to `100` |
| `ultra-light` | Set the font-weight value to `200` |
| `light`       | Set the font-weight value to `300` |
| `normal`      | Set the font-weight value to `400` |
| `medium`      | Set the font-weight value to `500` |
| `semi-bold`   | Set the font-weight value to `600` |
| `bold`        | Set the font-weight value to `700` |
| `extra-bold`  | Set the font-weight value to `800` |
| `black`       | Set the font-weight value to `900` |



##### Style

Here is the list of the allowed font-style. 

| Value     | Description                 |
| --------- | --------------------------- |
| `normal`  | Label the font as *normal*. |
| `italic`  | Label the font as *italic*  |
| `oblique` | Label the font as *oblique* |



##### Font-providers

Here is the list of the supported font-provider. 

| Value   | Description                      |
| ------- | -------------------------------- |
| google  | A font from Google Font          |
| typekit | A font from Adobe Typekit `soon` |



##### Font function

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



#### Sizes definition

|          | Description                              |
| -------- | ---------------------------------------- |
| `scale`  | The scale for which the size is declared |
| `length` | The font-size value for the given scale. If two css [length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) are provided then the first one is used as the minimum breakpoint's boundery (<=xxs) while the second one is used as the maximum breakpoint's boundery (>xxl). Everything in between is proportional. |



#### Line-Height definition

|          | Description                              |
| -------- | ---------------------------------------- |
| `scale`  | The scale for which the line-height is declared |
| `length` | The line-height value for the given scale. If two css [length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) are provided then the first one is used as the minimum breakpoint's boundery (<=xxs) while the second one is used as the maximum breakpoint's boundery (>xxl). Everything in between is proportional. |



### Example

#### With a Google Font: *Rubik*

```scss
$heading: (
  name: heading,
  family:  "Rubik",
  typefaces: (
    normal default google,
    bold google,
  ),
  sizes:(
    xxs:    (.512rem,  .579rem),
    xs:     (.64rem,   .694rem),
    s:      (.8rem,    .833rem),
    m:      (1rem,     1rem),
    l:      (1.25rem,  1.2rem),
    xl:     (1.563rem, 1.44rem),
    xxl:    (1.953rem, 1.728rem)
  ),
  line-height: (
    xxs:    (1.2rem,   1.2rem),
    xs:     (1.2rem,   1.2rem),
    s:      (1.2rem,   1.2rem),
    m:      (1.3rem,   1.2rem),
    l:      (1.35rem,  1.3rem),
    xl:     (1.4rem,   1.4rem),
    xxl:    (1.45rem,  1.4rem)
  )
);

@include add-font($heading);
```

