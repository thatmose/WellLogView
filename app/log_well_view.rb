require 'net/http'
require 'las_reader'
require 'json'
require_relative 'well'

 class LogWellView < Sinatra::Base

  get '/' do
    erb :index
  end

  get '/display/:filename' do
    @filename = params[:filename]

    #Read json file and send data
    @current_well_welldata = File.read("#{@filename}.json")

    erb :display
  end

  post '/save_file' do
    if params[:file]
      @filename = params[:file][:filename]
      File.open("#{@filename}", "w") { |f| f.write(params[:file][:tempfile].read) }
    elsif params[:url]
      @url = params[:url]
      uri = URI(@url)
      @filename = (/[^\/]*$/.match(@url))
      File.open("#{@filename}", "w") {|f| f.write(Net::HTTP.get(uri)) }
    end

    @worklas = CWLSLas.new("#{@filename}")
    @current_well = Well.new(@worklas)
    #Write to json file
    File.open("#{@filename}.json", "w") {|f| f.write(@current_well.welldata.to_json) }
    #Delete LAS file only (keep the json file)
    File.unlink("#{@filename}")

    redirect "/display/#{@filename}"
  end

 end

