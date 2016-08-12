class HomeController < ApplicationController



  get '/api-library' do 
    @library = Library.all 
    @library.to_json
  end

  get '/api-reading' do 
    @reading = Reading.all
    @reading.to_json
  end

  get '/api-vocab' do 
    @vocab = Vocab.all 
    @vocab.to_json
  end

  get '/api-user' do
    @user = User.all 
    @user.to_json 
  end

  post '/?' do 
    user = User.create username: params['username'], password: params['password'], email: params['email'], nativeLanguage: params['nativeLanguage']
    redirect '/go'
  end

  get '/?' do 
    erb :home
  end

end
