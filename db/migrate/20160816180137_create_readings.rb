class CreateReadings < ActiveRecord::Migration
  def change
    create_table :readings do |t|
      t.string  :content
      t.string  :title
      t.string  :language
      t.integer :difficulty
      t.boolean :bad_words 
      t.boolean :acct_req
    end
  end
end
