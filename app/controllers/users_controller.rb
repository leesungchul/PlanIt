class UsersController < ApplicationController
  before_filter :require_current_user!, :only => [:index, :show]
  before_filter :require_no_current_user!, :only => [:create, :new]

  def index
    @users = User.all
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      self.current_user = @user
      redirect_to "/"
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
  end

  def show
    if params.include?(:id)
      @user = User.find(params[:id])
    else
      redirect_to user_url(current_user)
    end
  end

  def current_user_show
    @current_user = current_user
    render :json => @current_user.as_json(:include =>
      [:methods => :all_friends, :favorite_places])
  end
end