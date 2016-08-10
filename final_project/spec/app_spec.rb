require 'spec_helper'
require 'sinatra'
require 'sinatra/base'
require_relative '../app/log_well_view'

RSpec.describe LogWellView do
  
  def app
    LogWellView
  end

  describe "/" do
    it "returns a status message of 200" do
      get '/'
      expect(last_response.status).to eq(200)
    end
  end

  describe "/display" do
    it "returns a JSON object with well data" do
      get '/display', url: :"http://aogweb.state.ak.us/DigLog/OffshoreFederal/55141000040000.LAS"
      expect(last_response.status).to eq(200)
      expect(last_response.header["Content-Type"]).to eq('application/json')
    end
  end

end