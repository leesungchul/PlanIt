class Api::TimeSuggestionsController < ApplicationController
  def create
    @time_suggestion = TimeSuggestion.new(params[:time_suggestion])
    if @time_suggestion.save
      render :json => @time_suggestion
    else
      render :json => @time_suggestion.errors.full_messages, :status => 422
    end
  end

  def destroy
    @time_suggestion = TimeSuggestion.find(params[:id])
    @time_suggestion.destroy
    render :json => {}
  end
end
