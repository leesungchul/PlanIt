class RootController < ApplicationController
  def root
    if !current_user.nil?
      render :root
    else
      render :welcome
    end
  end

  def welcome
  end
end
