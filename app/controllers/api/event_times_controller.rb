class Api::EventTimesController < ApplicationController
  def create
    @event_time = EventTime.new(params[:event_time])
    if @event_time.save
      render :json => @event_time
    else
      render :json => @event_time.errors.full_messages, :status => 422
    end
  end

  def destroy
    @event_time = EventTime.find(params[:id])
    @event_time.destroy
    render :json => {}
  end
end
