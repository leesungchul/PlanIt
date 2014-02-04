class CreateEventTimes < ActiveRecord::Migration
  def change
    create_table :event_times do |t|
      t.integer :event_id, :null => false
      t.integer :time_suggestion_id, :null => false
      t.integer :time_likes_count, :default => 0
      t.timestamps
    end
  end
end
