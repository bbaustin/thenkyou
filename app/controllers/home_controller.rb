class HomeController < ApplicationController

###############
# admin stuff
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
# end admin stuff
###############


  get '/logout/?' do
    session[:is_logged_in] = false
    session[:user_id] = nil
    session[:native_language] = nil
    session =  nil #is this enough? or should i do each attribute?

    puts ' ------------------------- '
    puts session
    puts ' ------------------------- '
    redirect '/'
  end

  post '/login' do 
    user = User.find_by username: params['username']
    if (params['username'] == '') || (params['password'] == '')
      @login_message = "Fill in both things!"
      erb :home 
    elsif !user 
      @login_message = "Are you sure your username is right?"
      erb :home 
    elsif user 
      password = BCrypt::Password.new(user.password)
      if password == params['password']
        session[:is_logged_in] = true
        session[:user_id] = user.id 
        session[:native_language] = user.native_language
        redirect '/go'
      else
        @login_message = "Did you type your password wrong?"
        erb :home 
      end
    end
  end

  post '/?' do 
    user = User.find_by username: params['username']
    if (params['username'] == '') || (params['password'] == '') || (params['email'] == '') || (params['native_language'] == '')
      @signup_message = 'Please complete all fields!' 
      erb :home 
    elsif user 
      @signup_message =  'Username already taken T_T' 
      erb :home 
    else 
      password = BCrypt::Password.create(params['password'])
      user = User.create username: params['username'], password: password, email: params['email'], native_language: params['native_language']
      session[:is_logged_in] = true
      session[:user_id] = user.id 
      session[:native_language] = user.native_language
        puts ' -----session.id------- '
        puts session.id
        puts ' -----session[:user_id]------ '
        puts session[:user_id]
        puts ' -----session[:native_language]------'
        puts session[:native_language]
      redirect '/go'
    end
  end

  get '/?' do
    @signup_message = '' 
    p session[:native_language]
    erb :home
  end

end
