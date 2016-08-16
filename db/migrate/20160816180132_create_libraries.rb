class CreateLibraries < ActiveRecord::Migration
  def change
    create_table :libraries do |t|
      t.integer :vocab_id
      t.integer :reading_id
    end    
  end
end
