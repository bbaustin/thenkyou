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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160811145003) do

  create_table "readings", force: :cascade do |t|
    t.string  "content"
    t.integer "difficulty"
    t.string  "rating"
    t.string  "language"
    t.string  "vocabConnection"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "email"
    t.string "nativeLanguage"
  end

  create_table "vocabs", force: :cascade do |t|
    t.string "wordLang1"
    t.string "wordLang2"
    t.string "wordLang3"
    t.string "defLang1"
    t.string "defLang2"
    t.string "defLang3"
    t.string "usageLang1"
    t.string "usageLang2"
    t.string "usageLang3"
    t.string "posLang1"
    t.string "posLang2"
    t.string "posLang3"
  end

end
