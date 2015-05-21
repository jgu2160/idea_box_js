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
    first_idea_display = $(".idea").first()
    console.log(first_idea_display);
    showIdeas("Kawahara");
    expect(idea_count).to.eq(1);
  });
});
