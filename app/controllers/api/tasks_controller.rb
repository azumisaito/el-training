class Api::TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    render json: @tasks
  end

  def show
    @task = current_user.tasks.find(params[:id])
    render json: @task
  end
end
