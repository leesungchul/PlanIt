class CreateTimeSuggestions < ActiveRecord::Migration
  def change
    create_table :time_suggestions do |t|
      t.integer :event_id
      t.datetime :start_time
      t.datetime :end_time
      t.integer :time_likes, :default => 1
      t.timestamps
    end
  end
end
