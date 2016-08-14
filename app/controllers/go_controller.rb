class GoController < ApplicationController

# admin stuff
##########################
  post '/adminreading' do 
    @reading = Reading.create content: params['content'], difficulty: params['difficulty'], language: params['language']
    # check language;
    # check wordLang1,2,or 3 based on above
    # by looping through @reading.content and looking for the word
    # create a library with vocab_id of the found vocab.
    @vocabs = Vocab.all 
    if @reading.language == "English"
      @vocabs.each do |v|
        # p "---------------------------------------"
        # puts @reading.content
        # p v.wordLang1
        # p v.wordLang1
        # p @reading.content.index()
        # p "---------------------------------------"
        if v.wordLang1
          if @reading.content.index(v.wordLang1) != nil 
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
      end
    elsif @reading.language == "日本語"
      @vocabs.each do |v|
        if @reading.content.include? v.wordLang3
          @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
        end
      end
    end 


    # puts stuff here if you want
    # Binding.pry
    erb :adminreading
  end

  get '/adminreading' do
    p 'yooooooo!~~~~~~~~~~~'
    @vocabs = Vocab.all 
    @vocabs.each do |v|
      puts v.wordLang1
      puts v.wordLang2
      puts v.wordLang3
    end
    erb :adminreading
  end
###
  post '/adminvocab' do
    @vocab = Vocab.create wordLang1: params['wordLang1'], wordLang2: params['wordLang2'], wordLang3: params['wordLang3'], defLang1: params['defLang1'], defLang2: params['defLang2'], defLang3: params['defLang3'], usageLang1: params['usageLang1'], usageLang2: params['usageLang2'], usageLang3: params['usageLang3'], posLang1: params['posLang1'], posLang2: params['posLang2'], posLang3: params['posLang3']
    @library = Library.create vocab_id: @vocab['id'] 
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
    puts "Why is this showing up during adminreading POST?"
    @reading_list.to_json
  end  

  get '/?' do    
    erb :go    
  end

end
