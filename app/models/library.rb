class Library < ActiveRecord::Base
  # self.table_name = 'users'
  belongs_to :reading
  belongs_to :vocab
end
