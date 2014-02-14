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

  def index
    @places = []
    current_user.events.each do |event|
      event.event_places.each do |ep|
        @place = Place.all.select{|place| ep.place_id == place.id}
        @places.concat(@place)
      end
    end
    @places
  end
end


