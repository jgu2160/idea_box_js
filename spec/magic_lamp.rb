MagicLamp.fixture(controller: IdeasController) do
  @idea = Idea.new
  render template: "ideas/index"
end
