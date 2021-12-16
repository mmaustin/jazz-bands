class RemovePictureFromBands < ActiveRecord::Migration[6.1]
  def change
    remove_column :bands, :picture, :text
  end
end
