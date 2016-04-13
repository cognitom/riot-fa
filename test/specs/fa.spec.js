describe('fa specs', function() {
  
  var appDom // mounting point
  var app // reference to the tag

  beforeEach(function() {
    // create mounting points
    appDom = document.createElement('div')
    document.body.appendChild(appDom)
  })

  afterEach(function() {
    if (app) app.unmount()
  })

  it('has a correct unicode charactor', function() {
    app = riot.mount(appDom, 'fa-spec')[0]
    var tag = app.tags.fa
    expect(tag.root.textContent.charCodeAt(0).toString(16)).to.be('f015')
  })

})
