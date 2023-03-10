class DailyItemsController < ApplicationController

    def index
        # render all instances
        render json: DailyItem.all, status: :ok
    end


    def show
        # render one instances
        item = DailyItem.find(params[:id])
        render json: item, status: 200
    end

    def create
        new_item = DailyItem.create!(new_item_params)
        # will render the activity based on the activity_id from the strong params instead of the signup json
        # do this by adding belongs_to in serializer
        render json: new_item, status: :created
    end

    # def update 
    #     item = DailyItem.find(params[:id])
    #     item.rarity = params[:rarity]
    #     item.save
    #     render json: item, status: :accepted
    #   end

    #   def update 
    #     item = DailyItem.find(params[:id])
    #     item.image_uri = params[:image_uri]
    #     item.save
    #     render json: item, status: :accepted
    #   end

    def update
        item = DailyItem.find(params[:id])
        if item.update(daily_item_params)
          render json: item, status: :accepted
        else
          render json: { error: "Unable to update item" }, status: :unprocessable_entity
        end
      end

      def destroy
        item = DailyItem.find(params[:id])
        item.destroy
        head :no_content 
      end

    private

    def new_item_params
        params.permit(:id, :image, :valid_status, :name, :image_uri, :rarity, :item_type, :image_location, :color)
    end

    def daily_item_params
        params.permit(:id, :image, :valid_status, :name, :image_uri, :rarity, :item_type, :image_location, :color)
      end
end
