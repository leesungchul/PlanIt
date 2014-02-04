# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140204041813) do

  create_table "event_circles", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "event_id",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "event_circles", ["user_id", "event_id"], :name => "index_event_circles_on_user_id_and_event_id", :unique => true

  create_table "event_places", :force => true do |t|
    t.integer  "event_id",                         :null => false
    t.integer  "place_id",                         :null => false
    t.integer  "place_likes_count", :default => 0
    t.datetime "created_at",                       :null => false
    t.datetime "updated_at",                       :null => false
  end

  add_index "event_places", ["event_id", "place_id"], :name => "index_event_places_on_event_id_and_place_id", :unique => true

  create_table "event_times", :force => true do |t|
    t.integer  "event_id",                          :null => false
    t.integer  "time_suggestion_id",                :null => false
    t.integer  "time_likes_count",   :default => 0
    t.datetime "created_at",                        :null => false
    t.datetime "updated_at",                        :null => false
  end

  create_table "events", :force => true do |t|
    t.string   "title",                                      :null => false
    t.integer  "creator_id",                                 :null => false
    t.string   "final_place",   :default => "To be decided"
    t.string   "final_time",    :default => "To be decided"
    t.boolean  "current_event", :default => true
    t.datetime "deadline"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

  create_table "favorite_places", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "place_id",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "favorite_places", ["user_id", "place_id"], :name => "index_favorite_places_on_user_id_and_place_id", :unique => true

  create_table "friendships", :force => true do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "friendships", ["user_id", "friend_id"], :name => "index_friendships_on_user_id_and_friend_id", :unique => true

  create_table "places", :force => true do |t|
    t.string   "place_name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "time_suggestions", :force => true do |t|
    t.string   "time_suggestion"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "user_name",       :null => false
    t.string   "password_digest", :null => false
    t.string   "session_token"
    t.string   "email",           :null => false
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["user_name"], :name => "index_users_on_user_name", :unique => true

end
