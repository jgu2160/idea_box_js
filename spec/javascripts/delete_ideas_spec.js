var expect = chai.expect;

describe('search bar', function() {
  beforeEach(function () {
    ideas = [
      { id: 1, title: "Jeffrey", body: "Gu", quality: 0 },
      { id: 2, title: "Jamie", body: "Kawahara", quality: 1 },
      { id: 3, title: "Tino", body: "Dino", quality: 2 }
    ]
    MagicLamp.load("ideas/index");
    listIdeas(ideas);
  });

  it('works', function() {
    ideaCount = $(".idea").length;
    expect(ideaCount).to.eq(3);
  });
});
