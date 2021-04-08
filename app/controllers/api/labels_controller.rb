class Api::LabelsController < ApplicationController
  def index
    @labels = current_user.labels
    render json: @labels
  end
end
