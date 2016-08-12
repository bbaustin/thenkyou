class Vocab < ActiveRecord::Base
  # self.table_name = 'users'
  has_many :libraries
  has_many :readings, through: :libraries
end
