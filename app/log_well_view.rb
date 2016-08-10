require 'net/http'
require 'las_reader'
require 'json'
require_relative 'well'

# class LogWellView < Sinatra::Base

  get '/' do
    erb :index
  end

  get '/display/?:filename?' do
    if params[:url]
      content_type :html
      @url = params[:url]
      uri = URI(@url)
      @filename = (/[^\/]*$/.match(@url))
      File.open("#{@filename}", "w") {|f| f.write(Net::HTTP.get(uri)) }
    else
      @filename = params[:filename]
    end
    
    @worklas = CWLSLas.new("#{@filename}")
    @current_well = Well.new(@worklas)
    #Write to json file
    File.open("#{@filename}.json", "w") {|f| f.write(@current_well.welldata.to_json) }
    
    @current_well_welldata = @current_well.welldata.to_json
    
    erb :display
  end

  post '/save_file' do
    content_type :json
    @filename = params[:file][:filename]
    File.open("#{@filename}", "w") { |f| f.write(params[:file][:tempfile].read) }
    redirect "/display/#{@filename}"
  end
get '/render_file/:filename' do
  params[:filename]
end

# end
