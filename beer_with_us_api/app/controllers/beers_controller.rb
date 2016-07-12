class BeersController < ApplicationController
  def index
    beers = Beer.where({brewery: params[:brewery_id]})
    # beers = Beer.all
    render(json: beers.as_json({include: :brewery}))
  end
end
