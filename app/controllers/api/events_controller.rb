class Api::EventsController < ApplicationController
  def create
    format = "%m/%d/%Y %I:%M %p"
    @datetime = params[:deadline_date] + " " + params[:deadline_time]
    @startdatetime = params[:start_date] + " " + params[:start_time]
    @enddatetime = params[:end_date] + " " + params[:end_time]
    params[:event][:deadline] = DateTime.strptime(@datetime, format)
    params[:event][:start_time] = DateTime.strptime(@startdatetime, format)
    params[:event][:end_time] = DateTime.strptime(@enddatetime, format)
    params[:event][:creator_id] = current_user.id
    @event = Event.new(params[:event])
    @event.event_circles.new({:user_id => current_user.id})
    @event.time_suggestions.new({
      :start_time => params[:event][:start_time],
      :end_time => params[:event][:end_time]
    })
    @place = Place.find_by_place_name(params[:event][:final_place])
    @event.event_places.new({:place_id => @place.id})
    if params[:event_circles]
      params[:event_circles].each do |k|
        @event.event_circles.build({ :user_id => k['id'] })
      end
    end
    if @event.save
      render :json => @event.as_json(:include =>
        [:event_circles, :event_places, :time_suggestions])
    else
      render :json => @event.errors.full_messages, :status => 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render :json => {}
  end

  def index
    @events = current_user.events
    @events.each do |event|
      event.is_past_event
    end
    @events
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(params[:event])
      render :json => @event.as_json(:include =>
        [:event_circles, :event_places, :time_suggestions, :event_pics])
    else
      render :json => @event.errors.full_messages, :status => 422
    end
  end
end
