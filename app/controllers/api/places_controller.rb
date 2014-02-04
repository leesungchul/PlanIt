class Api::PlacesController < ApplicationController
  def create
    @place = Place.new(params[:place])
    if @place.save
      render :json => @place
    else
      render :json => @place.errors.full_messages, :status => 422
    end
  end

  def destroy
    @place = Place.find(params[:id])
    @place.destroy
    render :json => {}
  end

  def show
    @place = Place.find(params[:id])
    render :json => @place
  end
end
