import icons from './icons.json'

<fa>
  <script>
    this.root.innerHTML = '&#x' + icons[opts.icon] + ';'
  </script>
  <style scoped>
    :scope {
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transform: translate(0, 0);
    }
  </style>
</fa>
