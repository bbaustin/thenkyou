class CreateVocabs < ActiveRecord::Migration
  def change
    create_table :vocabs do |t|
      t.string :word_eng
      t.string :word_ger
      t.string :word_jpn_k
      t.string :word_jpn_f
      t.string :def_eng
      t.string :def_ger
      t.string :def_jpn
      t.string :usage_eng
      t.string :usage_ger
      t.string :usage_jpn
      t.string :pos_eng
      t.string :pos_ger
      t.string :pos_jpn
    end    
  end
end
