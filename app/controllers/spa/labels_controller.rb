class Spa::LabelsController < Spa::SpaRootsController
  def index
    @labels = current_user.labels
    render json: @labels
  end
end
