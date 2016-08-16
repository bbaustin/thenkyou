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
        if v.wordLang1
          if @reading.content.index(v.wordLang1) != nil 
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
      end
    elsif @reading.language == "Deutsch"
      @vocabs.each do |v|
        if v.wordLang2
          if @reading.content.index(v.wordLang1) != nil 
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
      end
    else # @reading.language == "日本語"
      @vocabs.each do |v|
        if v.wordLang3 
          if @reading.content.index(v.wordLang3) != nil
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
      end
    end 
    # Binding.pry
    erb :adminreading
  end

  get '/adminreading' do
    erb :adminreading
  end
###
  post '/adminvocab' do
    if (params['wordLang1'] == "") 
      params['wordLang1'] = "noenglishwordprovided" 
    elsif (params['wordLang2'] == "") 
      params['wordLang2'] = "nogermanwordprovided" 
    elsif (params['wordLang3'] == "")
      params['wordLang3'] = "nojapanesewordprovided"
    end
    @vocab = Vocab.create wordLang1: params['wordLang1'], wordLang2: params['wordLang2'], wordLang3: params['wordLang3'], defLang1: params['defLang1'], defLang2: params['defLang2'], defLang3: params['defLang3'], usageLang1: params['usageLang1'], usageLang2: params['usageLang2'], usageLang3: params['usageLang3'], posLang1: params['posLang1'], posLang2: params['posLang2'], posLang3: params['posLang3']
    @readings = Reading.all 
    # loop through the content of every reading
    # if wordLang1, wordLang2, or wordLang3 is in the reading
    # create a Library with both of those. 
    @readings.each do |r| 
      if r.content
        if r.content.include?(@vocab.wordLang1) || r.content.include?(@vocab.wordLang2) || r.content.include?(@vocab.wordLang3) 
          @library = Library.create reading_id: r['id'], vocab_id: @vocab['id']
        else 
          puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~...nope!"
        end
      end
    end
    erb :adminvocab
  end

  get '/adminvocab' do 
    erb :adminvocab
  end
# end admin stuff end! 
##########################


  post '/:id' do |id|
    @reading = Reading.find params['id']
    @vocabs = Vocab.all 
    @libraries = Library.all 
    # puts @libraries[58].vocab_id
    # puts '~~~~~~~~~~~~~~~~~~~~~~~~~~'
    # puts @vocabs[@libraries[58].vocab_id].wordLang1
    @vocab_list = []
    @libraries.each do |lib| 
      if lib.reading_id == @reading.id
        @vocab_list.push(@vocabs[(lib.vocab_id - 1)])
        puts "lib.id: #{lib.id}"
        puts "@reading.id: #{@reading.id}"
        puts "lib.vocab_id: #{lib.vocab_id}"
      end
    end  
    puts @vocab_list
    content_type :json 
    @vocab_list.to_json
  end 
   
  get '/:id' do  
    @reading = Reading.find params['id']    
    erb :reading 
  end 

  post '/' do 
    @reading_list = []
    Reading.all.each do |reading|
      @reading_list.push(["#{reading['id']}. <a href='/go/#{reading['id']}'> #{reading['content']}</a>"])
    end
    puts "Why is this showing up during adminreading POST?"
    @reading_list.to_json
  end  

  get '/?' do    
    erb :go    
  end

end
