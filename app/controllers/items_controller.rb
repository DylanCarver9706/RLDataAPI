class ItemsController < ApplicationController
    def index
        # render all instances
        render json: Item.all, status: :ok
    end


    def show
        # render one instances
        item = Item.find(params[:id])
        render json: item, status: 200
    end

    def create
        new_item = Item.create!(new_item_params)
        # will render the activity based on the activity_id from the strong params instead of the signup json
        # do this by adding belongs_to in serializer
        render json: new_item, status: :created
    end

    def update
        item = Item.find(params[:id])
        if item.update(item_params)
          render json: item, status: :accepted
        else
          render json: { error: "Unable to update item" }, status: :unprocessable_entity
        end
      end

      def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content 
      end

    private

    def new_item_params
        params.permit(:id, :image, :valid_status, :name, :image_uri, :rarity, :item_type, :image_location, :color)
    end

    def item_params
        params.permit(:id, :image, :valid_status, :name, :image_uri, :rarity, :item_type, :image_location, :color)
      end
end

