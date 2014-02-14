class Api::TimeSuggestionsController < ApplicationController
  def create
    format = "%m/%d/%Y %I:%M %p"
    @startdatetime = params[:start_date] + " " + params[:start_time]
    @enddatetime = params[:end_date] + " " + params[:end_time]
    @start = DateTime.strptime(@startdatetime, format)
    @end = DateTime.strptime(@enddatetime, format)
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
