class Api::TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    render json: @tasks
  end

  def show
    @task = current_user.tasks.find(params[:id])
    render json: @task
  end

  def create
    task = current_user.tasks.build(task_params)
    if task.save
      render json: task
    else
      render json: task.errors
    end
  end

  private

  def task_params
    params.require(:task).permit(:name, :description, :end_date, :status, :priority)
  end
end
