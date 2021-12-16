class AddPictureToBands < ActiveRecord::Migration[6.1]
  def change
    add_column :bands, :picture, :text
  end
end
