class CreatePaintFinishes < ActiveRecord::Migration[7.0]
  def change
    create_table :paint_finishes do |t|
      t.string :valid_status
      t.string :boolean,
      t.string :image_uri,
      t.string :name,
      t.string :rarity,
      t.string :item_type,
      t.string :color,
      t.string :image_location,
      t.string :image

      t.timestamps
    end
  end
end
