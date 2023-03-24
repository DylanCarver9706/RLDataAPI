class CreateEngineSounds < ActiveRecord::Migration[7.0]
  def change
    create_table :engine_sounds do |t|
      t.string :name
      t.string :rarity
      t.string :item_type
      t.string :color
      t.boolean :valid_status
      t.string :image_uri
      t.string :image_location
      t.string :image

      t.timestamps
    end
  end
end
