class Api::EventsController < ApplicationController
  def create
    @event = Event.new(params[:event])
    @event.event_circles.new({:user_id => user_id})
    @event.event_places.new({:place_id => place_id})
    @event.event_times.new({:time_suggestion_id => time_suggestion_id})
    @event.event_circles.new({:user_id => current_user.id})
    if @event.save
      render :json => @event.as_json(:include =>
        [:event_circles, :event_places, :event_times])
    else
      render :json => @event.errors.full_messages, :status => 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render :json => {}
  end

  def show
    @event = Event.find(params[:id])
    render :json => @event.as_json(:include =>
        [:event_circles, :event_places, :event_times])
  end

  def current_events
    @events = current_user.events.where(:current_event => true)
    render :json => @events.as_json(:include =>
        [:event_circles, :event_places, :event_times])
  end

  def past_events
    @events = current_user.events.where(:current_event => false)
    render :json => @events
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(params[:event])
      render :json => @event
    else
      render :json => @event.errors.full_messages, :status => 422
    end
  end
end
