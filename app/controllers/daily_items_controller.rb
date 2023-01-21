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

    private

    def new_item_params
        params.permit(:name, :cost, :rarity, :color, :date)
    end
end
