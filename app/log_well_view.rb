require 'net/http'
require 'las_reader'
require 'json'
require_relative 'well'

class LogWellView < Sinatra::Base

  get '/' do
     erb :index
  end

  get '/display' do
    content_type :json
    @url = params[:url]
    uri = URI(@url)
    @filename = (/[^\/]*$/.match(@url))
    File.open("#{@filename}", "w") {|f| f.write(Net::HTTP.get(uri)) }
    @worklas = CWLSLas.new("#{@filename}")
    @current_well = Well.new(@worklas)
    #Write to json file
    File.open("#{@filename}.json", "w") {|f| f.write(@current_well.welldata.to_json) }
    
    @current_well.welldata.to_json

  end

end