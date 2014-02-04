class CreateEventCircles < ActiveRecord::Migration
  def change
    create_table :event_circles do |t|
      t.integer :user_id, :null => false
      t.integer :event_id, :null => false
      t.timestamps
    end
    add_index :event_circles, [:user_id, :event_id], :unique => true
  end
end
