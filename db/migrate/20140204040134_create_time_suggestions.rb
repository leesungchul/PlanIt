class CreateTimeSuggestions < ActiveRecord::Migration
  def change
    create_table :time_suggestions do |t|
      t.integer :event_id
      t.time :time_suggestion
      t.timestamps
    end
  end
end
