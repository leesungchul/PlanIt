class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(params[:friendship])
    if @friendship.save
      render :json => @friendship
    else
      render :json => @friendship.errors.full_messages, :status => 422
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render :json => {}
  end
end
