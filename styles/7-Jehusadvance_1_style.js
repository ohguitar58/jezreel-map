var size = 0;
var placement = 'point';

var style_Jehusadvance_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,30,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    /* Direction arrowheads: solid red triangles at 1/3 and 2/3 of each segment,
       rotated to the segment's bearing. */
    var coords = feature.getGeometry().getCoordinates();
    for (var i = 0; i < coords.length - 1; i++) {
        var a = coords[i], b = coords[i + 1];
        var dx = b[0] - a[0], dy = b[1] - a[1];
        var rotation = Math.atan2(dy, dx);
        [1 / 3, 2 / 3].forEach(function (t) {
            style.push(new ol.style.Style({
                geometry: new ol.geom.Point([a[0] + dx * t, a[1] + dy * t]),
                image: new ol.style.RegularShape({
                    points: 3, radius: 9, angle: 0, rotateWithView: true,
                    rotation: -rotation,
                    fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'}),
                    stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', width: 1.2})
                }),
                zIndex: 9
            }));
        });
    }

    return style;
};
