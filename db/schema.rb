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

ActiveRecord::Schema.define(version: 20160816181614) do

  create_table "libraries", force: :cascade do |t|
    t.integer "vocab_id"
    t.integer "reading_id"
  end

  create_table "readings", force: :cascade do |t|
    t.string  "content"
    t.string  "title"
    t.string  "language"
    t.integer "difficulty"
    t.boolean "bad_words"
    t.boolean "acct_req"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "email"
    t.string "native_language"
  end

  create_table "vocabs", force: :cascade do |t|
    t.string "word_eng"
    t.string "word_ger"
    t.string "word_jpn_k"
    t.string "word_jpn_f"
    t.string "def_eng"
    t.string "def_ger"
    t.string "def_jpn"
    t.string "usage_eng"
    t.string "usage_ger"
    t.string "usage_jpn"
    t.string "pos_eng"
    t.string "pos_ger"
    t.string "pos_jpn"
  end

end
