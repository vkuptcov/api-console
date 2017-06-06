[![Build Status](https://travis-ci.org/advanced-rest-client/raml-headers-form.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-headers-form)  

# raml-headers-form

A headers form to be used to rended a form of pre-defined headers with documentation comming
from the RAML definition.

### Example
```
<raml-headers-form></raml-headers-form>
```
```
var form = document.querySelector('raml-headers-form');
form.ramlHeaders = []; // Put headers property from the RAML JS parser.
form.addEventListener('value-changed', function(e) {
  var value = e.detail.value;
});
```
Note: this element mean to use `raml-js-parser` elements. This element transforms parser output
to the one recognizable by this element.

### Styling
`<raml-headers-form>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-headers-form` | Mixin applied to the element | `{}`
`--raml-headers-form-input-label-color` | Color of the lable of the `paper-input` element. | `rgba(0, 0, 0, 0.48)`
`--raml-headers-form-input-label-color-required` | Color of the lable of the `paper-input` element when it's required. | `rgba(0, 0, 0, 0.72)`
`--raml-headers-form-prodefined-name-color` | Color of the prodefined header name | `rgba(0, 0, 0, 0.87)`
`--raml-headers-form-docs-color` | Color of the description below the input field | `rgba(0, 0, 0, 0.87)`
`--primary-color` | Color of the button to add new header | `--primary-color`
`--inline-help-icon-color` | Color of the icon button to display help | `rgba(0, 0, 0, 0.24)`
`--inline-help-icon-color-hover` | Color of the icon button to display help when hovered | `--accent-color` or `rgba(0, 0, 0, 0.74)`
`--inline-documentation-color` | Color of the documentation string below the input field. Note that it will appy also `marked-element` styles to this element | `rgba(0, 0, 0, 0.87)`
`--raml-headers-form-action-button-color` | Color of the action button. | `--secondary-button-color` or `--accent-color`
`--raml-headers-form-action-button-background` | Background of the acction button | `--secondary-button-background` or `#fff`
`--secondary-button` | Theme mixin applied to the secondary button | `{}`
`--raml-headers-form-action-button-hover` | Mixin applied to the secondary button when hovered | `{}`
`--raml-headers-form-action-button-color-hover` | Color of the action button when hovered | `--secondary-button-color` or `--accent-color`
`--raml-headers-form-action-button-background-hover` | Background of the acction button when hovered | `--secondary-button-background` or `#fff`
`--secondary-button-hover` | Theme mixin applied to the secondary button when hovered | `{}`
`--raml-headers-form-action-button-hover` | Mixin applied to the secondary button when hovered | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| headers-value-changed | Fired when the headers value changed. | value **String** - The headers value. |
