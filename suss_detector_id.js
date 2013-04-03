var vdsid_regex = /(\d{6,7})/;
var wim_regex = /(wim\.\d+\.[N,S,E,W])/;

function suss_detector_id(fname){
    // given some filename, find a detector id embedded in it

    // first the easiest case is vdsid
    var match = vdsid_regex.exec(fname)
    if(match && match[1]){
        return match[1]
    }
    // now try wim
    match = wim_regex.exec(fname)
    if(match && match[1]){
        return match[1]
    }
    return null
}

module.exports=suss_detector_id
