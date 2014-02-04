class CreateTimeSuggestions < ActiveRecord::Migration
  def change
    create_table :time_suggestions do |t|
      t.string :time_suggestion
      t.timestamps
    end
  end
end
