/* global require console process describe it */

var should = require('should')
var susser = require('../suss_detector_id')

describe('get vds id',function(){
    it('should guess vdsid'
      ,function(done){
           var vdsid = susser('600059_ML_2009.txt.gz')
           vdsid.should.eql('600059')
           return done()
       })
    it('should guess vdsid'
      ,function(done){
           var vdsid = susser('600059_ML_2009.DF.2009RData')
           vdsid.should.eql('600059')
           return done()
       })
    it('should guess vdsid'
      ,function(done){
           var vdsid = susser('1212526_FR_2009.txt.gz')
           vdsid.should.eql('1212526')
           return done()
       })
    it('should guess vdsid'
      ,function(done){
           var vdsid = susser('/D12/73/N/BEAR_2/1212489_ML_2009.txt.gz')
           vdsid.should.eql('1212489')
           return done()
       })
    it('should guess vdsid'
      ,function(done){
           var vdsid = susser('1/N/41ST_ST_EXIT_AT_HWY_1_SB_VDS_MLN/500014072_ML_2012.df.2012.RData')
           vdsid.should.eql('500014072')
           return done()
       })

})
