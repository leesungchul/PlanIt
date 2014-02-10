class Api::EventsController < ApplicationController
  def create
    format = "%m/%d/%Y %I:%M %p"
    @datetime = params[:deadline_date] + " " + params[:deadline_time]
    params[:event][:deadline] = DateTime.strptime(@datetime, format)
    params[:event][:creator_id] = current_user.id
    @event = Event.new(params[:event])
    @event.event_circles.new({:user_id => current_user.id})
    if @event.save
      render :json => @event.as_json(:include =>
        [:event_circles, :event_places, :time_suggestions, :date_suggestions])
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
        [:event_circles, :event_places, :time_suggestions, :date_suggestions])
  end

  def index
    @events = current_users.events
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
