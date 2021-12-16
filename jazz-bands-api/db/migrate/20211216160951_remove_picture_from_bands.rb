class RemovePictureFromBands < ActiveRecord::Migration[6.1]
  def change
    remove_column :bands, :picture, :string
    remove_column :bands, :string, :string
  end
end
