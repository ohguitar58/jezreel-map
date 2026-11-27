var size = 0;
var placement = 'point';

/* Arrowhead icon: a clearly arrow-shaped SVG (head + shaft), pointing up;
   rotated per segment to the segment's bearing. */
var arrowSvg_Jehusadvance_1 = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 1 L20 13 L14.8 13 L14.8 23 L9.2 23 L9.2 13 L4 13 Z' fill='rgba(219,30,42,1.0)' stroke='rgba(128,17,25,1.0)' stroke-width='1'/></svg>";
var arrowSrc_Jehusadvance_1 = 'data:image/svg+xml;utf8,' + encodeURIComponent(arrowSvg_Jehusadvance_1);

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

    /* One directional arrowhead per segment, placed mid-segment and rotated
       to the segment's bearing (clockwise from north). */
    var coords = feature.getGeometry().getCoordinates();
    for (var i = 0; i < coords.length - 1; i++) {
        var a = coords[i], b = coords[i + 1];
        var dx = b[0] - a[0], dy = b[1] - a[1];
        var rotation = Math.atan2(dx, dy);
        var t = 0.5;
        style.push(new ol.style.Style({
            geometry: new ol.geom.Point([a[0] + dx * t, a[1] + dy * t]),
            image: new ol.style.Icon({
                src: arrowSrc_Jehusadvance_1,
                rotateWithView: true,
                rotation: rotation,
                scale: 1.25
            }),
            zIndex: 9
        }));
    }

    return style;
};
