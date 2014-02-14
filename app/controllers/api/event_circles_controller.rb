class Api::EventCirclesController < ApplicationController
  def create
    @user_id = params[:user_id]
    @event_id = params[:event_id]
    @event_circle = EventCircle.new({:event_id => @event_id, :user_id => @user_id})
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
