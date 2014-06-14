class Api::TimeSuggestionsController < ApplicationController
  def create
    format = "%m/%d/%Y %I:%M %p"
    @start = Time.zone.parse(params[:event][:start_time])
    @end = Time.zone.parse(params[:event][:end_time])
    @time_suggestion = TimeSuggestion.new({
      :start_time => @start,
      :end_time => @end
    })
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

  def update
    @time_suggestion = TimeSuggestion.find(params[:id])
    @time_suggestion.time_likes += 1
    @time_suggestion.save
    render :json => @time_suggestion
  end
end
