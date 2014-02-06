PlanIt::Application.routes.draw do
  get 'users/current', to: 'users#current_user_show'
  get 'users/find_user', to: 'users#find_user'
  resources :users, :only => [:index, :create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  namespace :api, :defaults => { :format => :json } do

    resources :events, :only => [:create, :update, :destroy, :show]
    resources :event_circles, :only => [:create, :destroy]
    resources :event_places, :only => [:create, :destroy]
    resources :event_times, :only => [:create, :destroy]
    resources :favorite_places, :only => [:create, :destroy]
    resources :friendships, :only => [:create, :destroy]
    resources :places, :only => [:create, :destroy, :show]
    resources :time_suggestions, :only => [:create, :destroy]
    get 'events/past_events/', to: 'events#past_events'
    get 'events/current_events', to: 'events#current_events'

  end
  root :to => "root#root"
end