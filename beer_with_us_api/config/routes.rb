Rails.application.routes.draw do
  
  resources :breweries, defaults:{format: :json} do
    resources :beers, defaults: {format: :json}
  end

end
