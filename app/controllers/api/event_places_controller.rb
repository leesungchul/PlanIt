class Api::EventPlacesController < ApplicationController
  def create
    @event_place = EventPlace.new(params[:event_place])
    if @event_place.save
      render :json => @event_place
    else
      render :json => @event_place.errors.full_messages, :status => 422
    end
  end

  def destroy
    @event_place = EventPlace.find(params[:id])
    @event_place.destroy
    render :json => {}
  end
end
