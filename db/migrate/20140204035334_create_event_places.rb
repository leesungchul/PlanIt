class CreateEventPlaces < ActiveRecord::Migration
  def change
    create_table :event_places do |t|
      t.integer :event_id, :null => false
      t.integer :place_id, :null => false
      t.integer :place_likes_count, :default => 0
      t.timestamps
    end
    add_index :event_places, [:event_id, :place_id], :unique => true
  end
end
