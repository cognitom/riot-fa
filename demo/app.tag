import icons from '../src/icons.json'

<app>

  <header>
    <h1>Riot FA</h1>
  </header>

  <article>
    <p>A simple component for Font Awesome on Riot.js. <a href="https://github.com/cognitom/riot-fa">See our repo</a> on GitHub.</p>
  </article>

  <section>
    <ul>
      <li each={ icons }>
        <fa icon={ id } />
        <code>&lt;fa icon="{ id }"/&gt;</code>
      </li>
    </ul>
  </section>

  <footer>
    <p>
      Maintained by <a href="https://github.com/cognitom">@cognitom</a> with the help of our contributors.<br>
      Code licensed under MIT, documentation under CC BY 3.0
    </p>
  </footer>

  <script>
    this.icons = Object.keys(icons).map(id => {
      const unicode = icons[id]
      return { id, unicode }
    })
  </script>

  <style scoped>
    :scope {
      display: block;
    }
    code {
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
      padding: 2px 4px;
      font-size: 90%;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }
    header {
      background: #333;
      color: white;
      padding: 2em;
    }
    :scope > *:not(header):not(footer) {
      padding: 2em;
      border-bottom: 1px solid #eee;
    }
    h2 {
      margin: 0;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      margin: 5px;
      padding: 0;
      list-style: none;
      display: inline-block;
      width: 200px;
      text-align: center;
      background: #f7f7f7;
    }
    li > fa {
      margin: 1em;
      font-size: 200%;
    }
    li > code {
      display: block;
      font-size: 80%;
    }
    footer {
      font-size: 90%;
      line-height: 1.4em;
      color: #999;
      padding: 2em;
    }
  </style>

</app>
