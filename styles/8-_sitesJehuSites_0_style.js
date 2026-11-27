var size = 0;
var placement = 'point';
/* Marker-only style (points always render) + labels-only companion style,
   so the label layer can declutter overlapping text without hiding markers. */
function markerStyle__sitesJehuSites_0(feature) {
    var status = String(feature.get('status'));
    if (status === 'confirmed') {
        return new ol.style.Style({
            image: new ol.style.RegularShape({radius: 9.5, points: 4, displacement: [0, 0],
                stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', width: 1.8}),
                fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
            zIndex: 10
        });
    }
    /* uncertain (비정): hollow light circle with dashed dark outline */
    return new ol.style.Style({
        image: new ol.style.Circle({radius: 10.5, displacement: [0, 0],
            stroke: new ol.style.Stroke({color: 'rgba(60,60,60,1.0)', lineDash: [5, 4], width: 2.6}),
            fill: new ol.style.Fill({color: 'rgba(235,235,235,1.0)'})}),
        zIndex: 10
    });
}
var style__sitesJehuSites_0 = function(feature, resolution){ return [markerStyle__sitesJehuSites_0(feature)]; };

function labelStyle__sitesJehuSites_0(feature, resolution) {
    var txt = String(feature.get('label') || '').replace(/\\n/g, '\n');
    var isArea = feature.get('id') === 'L1';
    return new ol.style.Style({
        text: new ol.style.Text({
            text: txt,
            font: isArea ? "italic 17px 'Noto Sans CJK KR', 'Noto Sans', sans-serif" : "14px 'Noto Sans CJK KR', 'Noto Sans', sans-serif",
            textAlign: 'center', textBaseline: 'middle',
            offsetY: isArea ? 0 : 30,
            overflow: false,
            fill: new ol.style.Fill({color: isArea ? '#5b3a1a' : '#172033'}),
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.95)', width: 3.2})
        }),
        zIndex: isArea ? 1 : 5
    });
}
