class Api::EventCirclesController < ApplicationController
  def create
    @event_circle = EventCircle.new(params[:event_circle])
    if @event_circle.save
      render :json => @event_circle
    else
      render :json => @event_circle.errors.full_messages, :status => 422
    end
  end

  def destroy
    @event_circle = EventCircle.find(params[:id])
    @event_circle.destroy
    render :json => {}
  end
end
