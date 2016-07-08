class BeersController < ApplicationController
  def index
    beers = Beer.all
    render(json: beers.as_json({include: :brewery}))
  end
end
