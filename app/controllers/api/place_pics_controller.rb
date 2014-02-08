class Api::PlacePicsController < ApplicationController
  def create
    @place_pic = PlacePic.new(params[:place_pic])
    if @place_pic.save
      render :json => @place_pic
    else
      render :json => @place_pic.errors.full_messages, :status => 422
    end
  end

  def index
    @current_user = current_user
    @place_pics = @current_user.favorites.map do |place|
      place.place_pics
    end
    render :json => @place_pics
  end

  def destroy
    @place_pic = PlacePic.find(params[:id])
    @place_pic.destroy
    render :json => {}
  end
end
