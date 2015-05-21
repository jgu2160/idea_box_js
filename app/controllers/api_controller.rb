class ApiController < ApplicationController
  def all
    render json: Idea.order(updated_at: :desc)
  end

  def grade
    render json: Idea.update(params[:id], quality: params[:new])
  end
end
