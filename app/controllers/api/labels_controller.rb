class Api::LabelsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create]

  def index
    @labels = current_user.labels
    render json: @labels
  end

  def create
    label = current_user.labels.build(label_params)
    if label.save
      render json: label
    else
      lender json: label.errors
    end
  end

  def destroy; end

  private

  def label_params
    params.require(:label).permit(:name)
  end
end
