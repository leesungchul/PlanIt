class CreateDateSuggestions < ActiveRecord::Migration
  def change
    create_table :date_suggestions do |t|
      t.integer :event_id
      t.date :date_suggestion
      t.timestamps
    end
  end
end
