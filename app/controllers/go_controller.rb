class GoController < ApplicationController

# admin stuff
##########################
  post '/adminreading' do 
    @reading = Reading.create content: params['content'], title: params['title'], language: params['language'], difficulty: params['difficulty'], bad_words: params['bad_words'], acct_req: params['acct_req']
    # check language;
    # check word_eng, ger, or jpn based on above
    # by looping through @reading.content and looking for the word
    # create a library with vocab_id of the found vocab.
    @vocabs = Vocab.all 
    if @reading.language == "English"
      @vocabs.each do |v|
        if v.word_eng
          if @reading.content.index(v.word_eng) != nil 
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
      end
    
    elsif @reading.language == "Deutsch"
      @vocabs.each do |v|
        if v.word_ger
          if @reading.content.index(v.word_eng) != nil 
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
      end
    
    elsif @reading.language == "日本語"
      @vocabs.each do |v|
        if v.word_jpn_f
          if @reading.content.index(v.word_jpn_f) != nil 
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
        if v.word_jpn_k
          if @reading.content.index(v.word_jpn_k) != nil 
            @library = Library.create reading_id: @reading['id'], vocab_id: v['id']
          end
        end
      end 
    # Binding.pry
    erb :adminreading
  end
end

  get '/adminreading' do
    erb :adminreading
  end
###
  post '/adminvocab' do
    if (params['word_eng'] == "") 
      params['word_eng'] = "noenglishwordprovided"
    end 
    if (params['word_ger'] == "") 
      params['word_ger'] = "nogermanwordprovided" 
    end
    if (params['word_jpn_k'] == "")
      params['word_jpn_k'] = "nojapanesekanjiprovided"    
    end  
    if (params['word_jpn_f'] == "")
      params['word_jpn_f'] = "nojapanesefuriganaprovided"
    end
    @vocab = Vocab.create word_eng: params['word_eng'], word_ger: params['word_ger'], word_jpn_k: params['word_jpn_k'], word_jpn_f: params['word_jpn_f'], def_eng: params['def_eng'], def_ger: params['def_ger'], def_jpn: params['def_jpn'], usage_eng: params['usage_eng'], usage_ger: params['usage_ger'], usage_jpn: params['usage_jpn'], pos_eng: params['pos_eng'], pos_ger: params['pos_ger'], pos_jpn: params['pos_jpn']
    
    @readings = Reading.all 
    # loop through the content of every reading
    # if word_eng, word_ger, or word_jpn_f is in the reading
    # create a Library with both of those. 
    @readings.each do |r| 
      if r.content
        ###################################################################################
        if r.content.include?(@vocab.word_eng) || r.content.include?(@vocab.word_ger) || r.content.include?(@vocab.word_jpn_k) || r.content.include?(@vocab.word_jpn_f)
          @library = Library.create reading_id: r['id'], vocab_id: @vocab['id']
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

  # post '/patch/?' do 
  #   reading = Reading.find params['id']
  # end

  post '/:id' do |id|
    @reading = Reading.find params['id']
    @vocabs = Vocab.all 
    @libraries = Library.all  
    @vocab_list = []
    @libraries.each do |lib| 
      puts "lib --> #{lib}"
      puts "lib.vocab_id --> #{lib.vocab_id}"
      if lib.reading_id == @reading.id
        @vocab_list.push(Vocab.find(lib.vocab_id)) 
      end
    end
    puts @vocab_list
    content_type :json 
    @vocab_list.to_json
  end 
   
  get '/:id' do  
    @reading = Reading.find params['id']  
    @nl = session[:native_language]
    # puts "------------------------------------------"
    # print "line 123: "
    # puts session[:native_language]
    # print "line 124: "
    # puts @nl
    # puts "------------------------------------------"    
    erb :reading 
  end 

  post '/' do 
    @reading_list = []
    Reading.all.each do |reading|
      # puts reading.acct_req
      # puts reading.language
      if session[:is_logged_in]   
        unless reading.language == session[:native_language]
          @reading_list.push(["<a href='/go/#{reading['id']}'> <div class='reading_button'>#{reading['title']}</div></a>"])
        end
      
      else #not logged in
        unless reading.acct_req
          @reading_list.push(["<a href='/go/#{reading['id']}'><div class='reading_button'> #{reading['title']}</div></a>"])
          puts @reading_list
        end
      end
    end
    # p session
    # puts session[:native_language]
    # puts "^^^ Show ^^^"
    @reading_list.to_json
  end  

  get '/?' do    
    erb :go    
  end

end
