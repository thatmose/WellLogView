class Well

  attr_reader :welldata

  def initialize(lasobject)
   @welldata = {}
   
  # Well Information
    @welldata[:wellinfo] = {
    wellname: lasobject.well_name,
    uwi: lasobject.uwi,
    start_depth: lasobject.start_depth,
    stop_depth: lasobject.stop_depth,
    unit: lasobject.depth_unit,
    step: lasobject.step,
    location: lasobject.location,
    company: lasobject.company_name,
    field: lasobject.field_name,
    country: lasobject.country,
    state: lasobject.state,
    province: lasobject.province,
    county: lasobject.county,
    service_company: lasobject.service_company,
    date: lasobject.log_date
    }
  # Curve Information
    @curves = lasobject.curve_names
    @curveinfo = {}
    @curves.each do |curve|
    curve_name = lasobject.curve("#{curve}")
    @curveinfo[:"#{curve_name.name}"] = {
              "unit": curve_name.unit,
              "description": curve_name.description
      }
    end
    @welldata[:curveinfo] = @curveinfo
    

  # Curve Data
    @logdata = {}
    @curves.each do |curve|
    curve_name = lasobject.curve("#{curve}")
    @logdata[:"#{curve_name.name}"] = curve_name.log_data
    end
    @welldata[:logdata] = @logdata
    
    end

end
