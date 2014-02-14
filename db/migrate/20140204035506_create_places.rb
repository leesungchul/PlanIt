class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :place_name
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.string :phone
      t.string :url
      t.string :map

      t.timestamps
    end
  end
end
