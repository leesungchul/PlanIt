class Api::FavoritePlacesController < ApplicationController
  def create
    @user_id = current_user.id
    @place_id = params[:favorite_place][:place_id]
    @favorite_place = FavoritePlace.new({:user_id => @user_id, :place_id => @place_id})
    if @favorite_place.save
      render :json => @favorite_place
    else
      render :json => @favorite_place.errors.full_messages, :status => 422
    end
  end

  def destroy
    @favorite_place = FavoritePlace.find_by_user_id_and_place_id(params[:user_id], params[:place_id])
    @favorite_place.destroy
    render :json => {}
  end
end
