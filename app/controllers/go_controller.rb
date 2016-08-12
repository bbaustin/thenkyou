class GoController < ApplicationController



  post '/adminreading' do 
    reading = Reading.create content: params['content'], difficulty: params['difficulty'], language: params['language']
    erb :adminreading
  end


  get '/adminreading' do
    erb :adminreading
  end


  post '/adminvocab' do
    vocab = Vocab.create wordLang1: params['wordLang1'], wordLang2: params['wordLang2'], wordLang3: params['wordLang3'], defLang1: params['defLang1'], defLang2: params['defLang2'], defLang3: params['defLang3'], usageLang1: params['usageLang1'], usageLang2: params['usageLang2'], usageLang3: params['usageLang3'], posLang1: params['posLang1'], posLang2: params['posLang2'], posLang3: params['posLang3']
    erb :adminvocab
  end


  get '/adminvocab' do 
    erb :adminvocab
  end

	get '/?' do
    erb :go
  end


end
