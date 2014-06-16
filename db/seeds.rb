# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  u1 = User.create!({:user_name => "Dan", :password => "111111", :email => "dan.fan1988@gmail.com"})
  u2 = User.create!({:user_name => "Lloyd", :password => "111111", :email => "sungchul_lee@yahoo.com"})
  u3 = User.create!({:user_name => "Albert", :password => "111111", :email => "ahung88@gmail.com"})
  u4 = User.create!({:user_name => "Jeff", :password => "111111", :email => "damanjeff6@gmail.com"})
  u5 = User.create!({:user_name => "Wayne Rooney", :password => "111111", :email => "rooney@manchesterunited.com"})
  u6 = User.create!({:user_name => "Daniele De Rossi", :password => "111111", :email => "derossi@roma.com"})
  u7 = User.create!({:user_name => "Guest", :password => "111111", :email => "Guest@guest.com"})
  u8 = User.create!({:user_name => "Eden Hazard", :password => "111111", :email => "hazard@chelsea.com"})
  u9 = User.create!({:user_name => "Dani Alves", :password => "111111", :email => "alves@barcelona.com"})
  u10 = User.create!({:user_name => "Philip Lahm", :password => "111111", :email => "lahm@bayernmunich.com"})
  u11 = User.create!({:user_name => "Robin Van Persie", :password => "111111", :email => "vanpersie@manchesterunited.com"})
  u12 = User.create!({:user_name => "Mario Gotze", :password => "111111", :email => "gotze@bayernmunich.com"})
  u13 = User.create!({:user_name => "David Silva", :password => "111111", :email => "silva@manchestercity.com"})
  u14 = User.create!({:user_name => "Yaya Toure", :password => "111111", :email => "toure@manchestercity.com"})
  u15 = User.create!({:user_name => "Diego Costa", :password => "111111", :email => "costa@atleticomadrid.com"})
  u16 = User.create!({:user_name => "Radamel Falcao", :password => "111111", :email => "falcao@monaco.com"})
  u17 = User.create!({:user_name => "Xabi Alonso", :password => "111111", :email => "alonso@realmadrid.com"})
  u18 = User.create!({:user_name => "Sergi Aguero", :password => "111111", :email => "aguero@manchestercity.com"})
  u19 = User.create!({:user_name => "Robert Lewandowski", :password => "111111", :email => "lewandowski@borussiadortmund.com"})
  u20 = User.create!({:user_name => "Andres Iniesta", :password => "111111", :email => "iniesta@barcelona.com"})
  u21 = User.create!({:user_name => "Mesut Ozil", :password => "111111", :email => "ozil@arsenal.com"})
  u22 = User.create!({:user_name => "Xavi", :password => "111111", :email => "xavi@barcelona.com"})
  u23 = User.create!({:user_name => "Marco Reus", :password => "111111", :email => "reus@borussiadortmund.com"})
  u24 = User.create!({:user_name => "Andrea Pirlo", :password => "111111", :email => "pirlo@juventus.com"})
  u25 = User.create!({:user_name => "Zlatan Ibrahimovic", :password => "111111", :email => "ibrahimovic@parissaintgermain.com"})
  u26 = User.create!({:user_name => "Franck Ribery", :password => "111111", :email => "ribery@bayernmunich.com"})
  u27 = User.create!({:user_name => "Lionel Messi", :password => "111111", :email => "messi@barcelona.com"})
  u28 = User.create!({:user_name => "Cristiano Ronaldo", :password => "111111", :email => "ronaldo@realmadrid.com"})
  u29 = User.create!({:user_name => "Luis Suarez", :password => "111111", :email => "suarez@liverpool.com"})
end