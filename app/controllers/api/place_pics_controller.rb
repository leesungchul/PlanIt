class Api::PlacePicsController < ApplicationController
  def create
    @place_pic = PlacePic.new(params[:place_pic])
    if @place_pic.save
      @place_pic["bigurl"] = @place_pic.photo.url(:big)
      @place_pic["smallurl"] = @place_pic.photo.url(:small)
      render :json => @place_pic
    else
      render :json => @place_pic.errors.full_messages, :status => 422
    end
  end

  def index
    @current_user = current_user
    @place_pics = []
    @current_user.favorites.each do |place|
      place.place_pics.each do |pic|
        pic["bigurl"] = pic.photo.url(:big)
        pic["smallurl"] = pic.photo.url(:small)
        puts "************************"
        puts pic.photo.url(:small)
        puts pic.photo.url(:big)
        @place_pics << pic
      end
    end
    render :json => @place_pics
  end

  def destroy
    @place_pic = PlacePic.find(params[:id])
    @place_pic.destroy
    render :json => {}
  end
end
