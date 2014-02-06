class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(params[:friendship])
    if @friendship.save
      render :json => User.find(params[:friendship][:friend_id])
    else
      render :json => @friendship.errors.full_messages, :status => 422
    end
  end

  def destroy
    @friend_id = params[:friendship][:friend_id]
    @user_id = current_user.id
    @friendship = Friendship.find_by_user_id_and_friend_id(@user_id, @friend_id)
    @friendship.destroy
    render :json => {}
  end
end
