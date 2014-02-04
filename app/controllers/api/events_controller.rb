class Api::EventsController < ApplicationController
  def create
    @event = Event.new(params[:event])
    if @event.save
      render :json => @event
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
    render :json => @event
  end

  def current_events
    @events = current_user.events.where(:current_event => true)
    render :json => @events
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
