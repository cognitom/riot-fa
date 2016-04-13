# Font Awesome icons for Riot.js

## Installation

A simple component for [Font Awesome](https://fortawesome.github.io/Font-Awesome/) on [Riot.js](https://muut.com/riotjs/).

```bash
$ npm install riot-fa
```

## Usage

```html
<fa icon="twitter" />
```

That's it.

## Load components

### IIFE

```html
<!doctype html>

<html>
  <head>
    <!-- Loads font separately -->
    <style>@font-face { font-family: FontAwesome; src: url('fa.woff') format('woff') }</style>
  </head>

  <body>
    <fa icon="twitter" />

    <script src="riot.js"></script>

    <!-- Loads Riot FA -->
    <script src="riot-fa.js"></script>

    <script> riot.mount('*') </script>
  </body>
</html>
```

### Rollup / Browserify / WebPack

```html
<!doctype html>

<html>
  <head>
    <!-- Loads font separately -->
    <style>@font-face { font-family: FontAwesome; src: url('fa.woff') format('woff') }</style>
  </head>

  <body>
    <fa icon="twitter" />

    <script src="bundle.js"></script>
  </body>
</html>
```

```javascript
import riot from 'riot'
import 'riot-fa'

riot.mount('*')
```
