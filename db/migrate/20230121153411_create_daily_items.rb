class CreateDailyItems < ActiveRecord::Migration[7.0]
  def change
    create_table :daily_items do |t|
      t.string :name
      t.integer :cost
      t.string :rarity
      t.string :color
      t.datetime :date
      t.string :image

      t.timestamps
    end
  end
end
