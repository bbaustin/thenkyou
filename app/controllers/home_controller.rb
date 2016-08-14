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



  get '/logout/?' do
    session =  nil
    puts ' ------------------------- '
    puts session
    puts ' ------------------------- '
    redirect '/'
  end

  post '/?' do 
    user = User.find_by username: params['username']
    if (params['username'] == '') || (params['password'] == '') || (params['email'] == '') || (params['nativeLanguage'] == '')
      @signup_message = 'Please complete all fields' 
      erb :home 
    elsif user 
      @signup_message =  'Username already taken :(' 
      erb :home 
    else 
      password = BCrypt::Password.create(params['password'])
      user = User.create username: params['username'], password: password, email: params['email'], nativeLanguage: params['nativeLanguage']
      session[:is_logged_in] = true
      session[:user_id] = user.id 
        puts ' ------------------------- '
        puts session.id
        puts ' ------------------------- '
        puts session[:user_id]    
      redirect '/go'
    end
  end

  get '/?' do
    @signup_message = '' 
    erb :home
  end

end
