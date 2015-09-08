require 'sinatra'
require 'sinatra/contrib/all'
require 'json'
require 'pg'
require 'pry-byebug'

get '/' do
  redirect to('/videos')
end

get '/videos' do
   # send back all items in the DB
  sql = 'select * from videos'
  @videos = run_sql(sql) 
end

if request.xhr?
    json @videos.entries
    # same as json @items.to_a
  else
    erb :index
  end
end