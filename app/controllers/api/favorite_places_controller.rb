class Api::FavoritePlacesController < ApplicationController
  def create
    @favorite_place = FavoritePlace.new(params[:favorite_place])
    if @favorite_place.save
      render :json => @favorite_place
    else
      render :json => @favorite_place.errors.full_messages, :status => 422
    end
  end

  def destroy
    @favorite_place = FavoritePlace.find(params[:id])
    @favorite_place.destroy
    render :json => {}
  end
end
