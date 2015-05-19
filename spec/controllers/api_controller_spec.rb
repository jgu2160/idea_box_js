require 'rails_helper'

RSpec.describe ApiController, type: :controller do
  it 'should respond with a json of all objects' do
    idea = Idea.create(title: "Idea 1", body: "1 is the greatest number", quality: 0)
    get "all"
    expect(response.body).to eq([idea].to_json)
  end
end
