class CreatePlacePics < ActiveRecord::Migration
  def change
    create_table :place_pics do |t|
      t.integer :place_id
      t.attachment :photo
      t.timestamps
    end
  end
end
