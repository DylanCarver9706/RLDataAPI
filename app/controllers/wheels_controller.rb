class WheelsController < ApplicationController
    def index
        # render all instances
        render json: Wheel.all, status: :ok
    end
end
