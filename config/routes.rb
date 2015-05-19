Rails.application.routes.draw do
  resources :ideas, except: [:new]
  root to: "ideas#index"
  get "/all", to: "api#all"
  put "/grade", to: "api#grade"
end
