require 'spec_helper'

RSpec.describe LogWellView do

  def app
    LogWellView
  end

  describe "/" do
    it "returns a status message of 200" do
      get '/'
      expect(last_response).to be_ok
      expect(last_response.body).to include("Submit a url or upload a file")
    end
  end

  describe "/display" do

    before :each do
      allow(Net::HTTP).to receive(:get).and_return(File.read("#{Dir.pwd}/spec/test_files/example2US_notops.las"))
      FakeFS.activate!
      get '/display', url: :"http://example.com"
    end
    
    after :each do
      FakeFS.deactivate!
    end

    it "returns a JSON object with well data" do
      expect(last_response).to be_ok
      expect(last_response.header["Content-Type"]).to eq('application/json')
    end

    describe "JSON object structure" do
      before :each do
        @json = JSON.parse(last_response.body)
      end

      it "has 3 keys within the object US file" do
        expect(@json.keys.count).to eq(3)
      end

      it "has wellinfo,curveinfo and logdata keys" do
        expect(@json["wellinfo"]).to_not eq(nil)
        expect(@json["curveinfo"]).to_not eq(nil)
        expect(@json["logdata"]).to_not eq(nil)
      end

    end

  end

end