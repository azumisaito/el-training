Rails.application.routes.draw do
  root 'tasks#index'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  namespace :admin do
    resources :users do
      resources :tasks, only: :index
    end
  end

  resources :tasks do
    resources :task_labels, only: %i[create destroy]
  end
  resources :labels, only: %i[index create destroy]

  # https://qiita.com/ryosuketter/items/9240d8c2561b5989f049
  namespace 'spa' do
    root to: 'spa_roots#show'
    get '*path', to: 'spa_roots#show'
  end

  namespace :api do
    resources :tasks, only: %i[index show]
    resources :labels, only: %i[index create destroy]
  end

  get '*path', to: 'application#routing_error'
end
