grunt-ogel
==========

Grunt task that leverages the <a href="https://github.com/XpressiveCode/ogel" target="_blank" title="ogel">ogel</a> templating system.

## Installation

`npm install grunt-ogel --save-dev`

## Usage

The task requires that 3 options be set.

1. src: this is where your html files reside
2. dest: this is where you want ogel to put the final output
3. templateDir: this is where your template files reside

## Example

```js
//gruntfile.js

grunt.initConfig({
    ogel: {
        main: {
            options: {
                src: 'src',
                templateDir: 'src/templates',
                dest: 'build'
            }
        }
    }
});
```



