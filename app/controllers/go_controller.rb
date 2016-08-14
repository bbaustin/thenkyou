class GoController < ApplicationController

# admin stuff
##########################
  post '/adminreading' do 
    @reading = Reading.create content: params['content'], difficulty: params['difficulty'], language: params['language']
    @library = Library.create reading_id: @reading['id'] 
    p 'vvvvvvvvvv this is the new library info vvvvvvvvvvvv'
    p @reading['id']
    # p @library 
    # p Library 
    # Binding.pry
    erb :adminreading
  end

  get '/adminreading' do
    erb :adminreading
  end
###
  post '/adminvocab' do
    @vocab = Vocab.create wordLang1: params['wordLang1'], wordLang2: params['wordLang2'], wordLang3: params['wordLang3'], defLang1: params['defLang1'], defLang2: params['defLang2'], defLang3: params['defLang3'], usageLang1: params['usageLang1'], usageLang2: params['usageLang2'], usageLang3: params['usageLang3'], posLang1: params['posLang1'], posLang2: params['posLang2'], posLang3: params['posLang3']
    erb :adminvocab
  end

  get '/adminvocab' do 
    erb :adminvocab
  end
# end admin stuff end! 
##########################


  get '/:id' do 
    @reading = Reading.find params['id']
    erb :reading 
  end 

  post '/' do 
    @reading_list = []
    Reading.all.each do |reading|
      @reading_list.push(["#{reading['id']}. #{reading['content']}"])
    end
    puts @reading_list
    puts "good evening"
    @reading_list.to_json
  end  

  get '/?' do    
    erb :go    
  end

end
