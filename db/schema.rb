# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_24_003457) do
  create_table "antennas", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "avatar_borders", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "avatars", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "banners", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "boosts", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cars", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "crates", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "daily_items", force: :cascade do |t|
    t.string "name"
    t.string "item_type"
    t.string "rarity"
    t.string "color"
    t.integer "item_shop_date_id"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "decals", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "engine_sounds", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "goal_explosions", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "item_shop_dates", force: :cascade do |t|
    t.datetime "date"
    t.integer "cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "paint_finishes", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "toppers", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trails", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wheels", force: :cascade do |t|
    t.string "name"
    t.string "rarity"
    t.string "item_type"
    t.string "color"
    t.boolean "valid_status"
    t.string "image_uri"
    t.string "image_location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
