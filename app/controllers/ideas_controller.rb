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
    @idea = Idea.find(params[:id])
    @idea.update(idea_params)
    redirect_to root_path
  end

  def edit
    @idea = Idea.find(params[:id])
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
