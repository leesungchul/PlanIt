class Api::EventPicsController < ApplicationController
  def create
    @event_pic = EventPic.new(params[:event_pic])
    if @event_pic.save
      @event_pic["bigurl"] = @event_pic.photo.url(:big)
      @event_pic["smallurl"] = @event_pic.photo.url(:small)
      render :json => @event_pic
    else
      render :json => @event_pic.errors.full_messages, :status => 422
    end
  end

  def index
    @current_user = current_user
    @event_pics = []
    @current_user.events.map do |event|
      event.event_pics.each do |pic|
        @event_pics << pic
      end
    end
    render :json => @event_pics
  end

  def destroy
    @event_pic = EventPic.find(params[:id])
    @event_pic.destroy
    render :json => {}
  end
end

