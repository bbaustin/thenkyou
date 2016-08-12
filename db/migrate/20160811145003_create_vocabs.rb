class CreateVocabs < ActiveRecord::Migration
  def change
    create_table :vocabs do |t|
      t.string :wordLang1
      t.string :wordLang2
      t.string :wordLang3
      t.string :defLang1
      t.string :defLang2
      t.string :defLang3
      t.string :usageLang1
      t.string :usageLang2
      t.string :usageLang3
      t.string :posLang1
      t.string :posLang2
      t.string :posLang3
    end
  end
end
