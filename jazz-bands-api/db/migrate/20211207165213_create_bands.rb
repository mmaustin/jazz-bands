class CreateBands < ActiveRecord::Migration[6.1]
  def change
    create_table :bands do |t|
      t.string :band_name
      t.string :player_one
      t.string :player_two
      t.string :player_three
      t.string :player_four
      t.string :player_five
      t.string :signature_song

      t.timestamps
    end
  end
end
