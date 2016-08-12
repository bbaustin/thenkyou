class HomeController < ApplicationController



  post '/?' do 
    user = User.create username: params['username'], password: params['password'], email: params['email'], nativeLanguage: params['nativeLanguage']
    redirect '/go'
  end

  get '/?' do 
    erb :home
  end

end
