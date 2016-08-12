class Reading < ActiveRecord::Base
  # self.table_name = 'users'
  has_many :libraries
  has_many :vocabs, through: :libraries
end
