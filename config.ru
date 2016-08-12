require 'bundler'
Bundler.require :default, ENV['RACK_ENV'].to_sym

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'db.sqlite3'
  )

# models
require './app/models/user'
require './app/models/reading'
require './app/models/vocab'

# controllers
require './app/controllers/application_controller'
require './app/controllers/home_controller'
require './app/controllers/go_controller'

# map controllers
map ('/go') {run GoController}
map ('/') {run HomeController}
