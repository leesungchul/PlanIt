class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name, :null => false
      t.string :password_digest, :null => false
      t.string :session_token
      t.string :email, :null => false
      t.string :grav_url
      t.timestamps
    end

    add_index :users, :user_name, :unique => true
    add_index :users, :email, :unique => true
  end
end
