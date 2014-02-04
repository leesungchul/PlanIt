class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, :null => false
      t.integer :creator_id, :null => false
      t.string :final_place, :default => "To be decided"
      t.string :final_time, :default => "To be decided"
      t.boolean :current_event, :default => true
      t.datetime :deadline
      t.timestamps
    end
  end
end
