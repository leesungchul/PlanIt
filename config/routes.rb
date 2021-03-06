PlanIt::Application.routes.draw do
  resource :session, :only => [:create, :destroy, :new]
  get 'users/current', to: 'users#current_user_show'
  get 'users/find_user', to: 'users#find_user'
  resources :users, :only => [:index, :create, :new, :show]


  namespace :api, :defaults => { :format => :json } do
    resources :event_pics, :only => [:create, :destroy, :index]
    resources :place_pics, :only => [:create, :destroy, :index]
    resources :events, :only => [:create, :update, :destroy, :index]
    resources :event_circles, :only => [:create, :destroy]
    resources :event_places, :only => [:create, :destroy, :update]
    resources :favorite_places, :only => [:create, :destroy]
    resources :friendships, :only => [:create, :destroy]
    resources :places, :only => [:create, :destroy, :index]
    resources :time_suggestions, :only => [:create, :destroy, :update]

    resources :event_times, :only => [:create, :destroy, :update]
  end

  post 'contact_email', to: 'static_pages#contact_email'
  root :to => "root#root"
end
