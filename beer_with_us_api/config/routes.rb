Rails.application.routes.draw do
  
  scope path: "api" do
    resources :breweries, defaults:{format: :json} do
      resources :beers, defaults: {format: :json}
    end
  end

end
