Rails.application.routes.draw do
  mount MagicLamp::Genie, at: "/magic_lamp" if defined? MagicLamp
  resources :ideas, except: [:new]
  root to: "ideas#index"
  get "/all", to: "api#all"
  put "/grade", to: "api#grade"
end
