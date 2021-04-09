class Api::TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    render json: @tasks
  end
end
