class CreateReadings < ActiveRecord::Migration
  def change
    create_table :readings do |t|
      t.string   :content
      t.integer  :difficulty 
      t.string   :language
      
    end
  end
end
