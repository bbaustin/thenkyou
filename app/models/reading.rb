class Reading < ActiveRecord::Base
  # self.table_name = 'users'
  has_many :vocab
end
