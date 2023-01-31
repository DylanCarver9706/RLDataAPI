class CreateDailyItems < ActiveRecord::Migration[7.0]
  def change
    create_table :daily_items do |t|
      t.string :name
      t.string :item_type
      t.integer :cost
      t.string :rarity
      t.string :color
      t.integer :item_shop_date_id
      t.string :image_location
      t.string :image

      t.timestamps
    end
  end
end
