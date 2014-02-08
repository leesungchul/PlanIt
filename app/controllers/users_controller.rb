class UsersController < ApplicationController
  before_filter :require_current_user!, :only => [:index, :show]
  before_filter :require_no_current_user!, :only => [:create, :new]

  def index
    @users = Kaminari.paginate_array(User.all)
      .page(params[:page]).per(12)
    render :json => {
      :models => @users,
      :page => params[:page],
      :total_pages => @users.total_pages
    }
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
    @user = User.find(params[:id])
    render :json => @user
  end

  def current_user_show
    @current_user = current_user
    render :json => @current_user.as_json(:include =>
      [:all_friends, :favorites])
  end

  def find_user
    @search_str = params[:search_str]
    @users = User.all.select{ |user| /^#{@search_str}/.match(user.user_name)}
    render :json => @users
  end
end