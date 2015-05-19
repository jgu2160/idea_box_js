class ApiController < ApplicationController
  def all
    render json: Idea.all
  end

  def grade
    render json: Idea.update(params[:id], quality: params[:new])
  end
end
