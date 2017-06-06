[![Build Status](https://travis-ci.org/advanced-rest-client/raml-main-entry-lookup.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-main-entry-lookup)  

# raml-main-entry-lookup

The `<raml-main-entry-lookup>` is an element that lookup for a main RAML file
in the list of passed files.

List of files should be either result of reading multiple files from file imput or result
of use of the `web-unzip` element.

Directories from the file input will be ignored due the missing API to read it's contents.

### Example
```html
<raml-main-entry-lookup
  files="[[files]]"
  entry="{{ramlEntry}}"
  on-entry="_entryPointFound"></raml-main-entry-lookup>
```
```javascript
this._entryPointFound: function(e) {
  var file = e.detail.entry;
  if (!file) {
    return this.notifyLackOfEntryPoint();
  }
  if (file instanceof Array) {
    this.askUserAboutMainFile(file);
  } else {
    this.processRAML(file);
  }
}
```



### Events
| Name | Description | Params |
| --- | --- | --- |
| entry | Fired when the entry was found. | file **FileEntry** - Can be FileEntry, Array of file entries or null if not found at all. |
