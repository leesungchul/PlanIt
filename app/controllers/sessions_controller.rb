class SessionsController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  before_filter :require_current_user!, :only => [:destroy]

  def create
    user = User.find_by_credentials(
      params[:user][:user_name],
      params[:user][:password]
    )

    if user.nil?
      flash[:errors] = ["Invalid username or password!"]
      redirect_to "/"
    else
      self.current_user = user
      redirect_to "/"
    end
  end

  def destroy
    logout_current_user!
    redirect_to "/"
  end

  def new
  end
end
