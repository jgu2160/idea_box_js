class IdeasController < ApplicationController
  def index

  end

  def create
    render json: Idea.create(idea_params)
  end

  def destroy
    render json: Idea.destroy(params[:id])
  end

  def update
    render json: Idea.upda
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
