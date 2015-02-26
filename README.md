# Font Awesome icons as Riot components

## Installation

[Riot](https://muut.com/riotjs/) Font Awesome is distributed via ??? (I'm thinking which is the best...)

    % npm install riot 'cognitom/riot-fa'

## Usage

```html
<fa icon="twitter" />
```

That's it.

## Load components

### In-browser compilation

```html
<!doctype html>

<html>
  <body>

    <fa icon="twitter" />

    <script src="node_modules/riot-fa/fa.html" type="riot/tag"></script>
    <script src="node_modules/riot+compiler.min.js"></script>
    <script> riot.mount('*') </script>

  </body>
</html>
```

### Precompiled

```html
<!doctype html>

<html>
  <body>

    <fa icon="twitter" />

    <script src="node_modules/riot.min.js"></script>
    <script src="node_modules/riot-fa/fa.min.js" type="riot/tag"></script>
    <script> riot.mount('*') </script>

  </body>
</html>
```
