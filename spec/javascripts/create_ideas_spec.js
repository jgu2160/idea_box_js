var expect = chai.expect;

describe('save()', function() {
  //server = sinon.fakeServer.create()
  beforeEach(function () {
    console.log("hello");
    MagicLamp.load("ideas/index");
    $("#title").val("J"),
    $("#body").val("Gu")
  });

  afterEach(function () {
    //server.restore();
  });

  it('should save and display an idea', function() {
    save();
    //server.requests[0].respond(200, {"Content-Type": "application/json" });
    expect($("h3").val()).to.eq("J");
    expect($("p").val()).to.eq("Gu");
  });
});
