class CreateEventPics < ActiveRecord::Migration
  def change
    create_table :event_pics do |t|
      t.integer :event_id
      t.attachment :photo
      t.timestamps
    end
  end
end
