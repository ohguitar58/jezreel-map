var size = 0;
var placement = 'point';
/* Marker-only style (points always render) + labels-only companion style,
   so the label layer can declutter overlapping text without hiding markers. */
function markerStyle__sitesJehuSites_0(feature) {
    var status = String(feature.get('status'));
    var num = String(feature.get('id') || '');
    function numStyle(color) {
        return new ol.style.Style({
            text: new ol.style.Text({
                text: num,
                font: "bold 21px 'Noto Sans', sans-serif",
                textAlign: 'center', textBaseline: 'middle',
                fill: new ol.style.Fill({color: color})
            }),
            zIndex: 11
        });
    }
    if (status === 'confirmed') {
        return [new ol.style.Style({
            image: new ol.style.RegularShape({radius: 16, points: 4, displacement: [0, 0],
                stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', width: 1.8}),
                fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
            zIndex: 10
        }), numStyle('#ffffff')];
    }
    /* uncertain (비정): hollow light circle with dashed dark outline */
    return [new ol.style.Style({
        image: new ol.style.Circle({radius: 16.5, displacement: [0, 0],
            stroke: new ol.style.Stroke({color: 'rgba(60,60,60,1.0)', lineDash: [5, 4], width: 2.6}),
            fill: new ol.style.Fill({color: 'rgba(235,235,235,1.0)'})}),
        zIndex: 10
    }), numStyle('#3c3c3c')];
}
var style__sitesJehuSites_0 = function(feature, resolution){ return markerStyle__sitesJehuSites_0(feature); };

/* Label sits lower-right (textAlign left) or lower-left (right) of the point,
   side chosen per site to avoid routes and neighbouring labels. */
var labelSideRight__sitesJehuSites_0 = {'1': true, '2': true, '4': true, '5': true, '6': true};
function labelStyle__sitesJehuSites_0(feature, resolution) {
    var txt = String(feature.get('label') || '').replace(/\\n/g, '\n');
    var fid = String(feature.get('id') || '');
    var isArea = fid === 'L1';
    if (!isArea && fid) { txt = fid + ' ' + txt; }
    var right = labelSideRight__sitesJehuSites_0[fid] === true;
    return new ol.style.Style({
        text: new ol.style.Text({
            text: txt,
            font: isArea ? "italic 24px 'Noto Sans CJK KR', 'Noto Sans', sans-serif" : "20px 'Noto Sans CJK KR', 'Noto Sans', sans-serif",
            textAlign: isArea ? 'center' : (right ? 'left' : 'right'), textBaseline: 'middle',
            offsetX: isArea ? 0 : (right ? 17 : -17),
            offsetY: isArea ? 0 : 21,
            overflow: false,
            fill: new ol.style.Fill({color: '#000000'}),
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.95)', width: 4})
        }),
        zIndex: isArea ? 1 : 5
    });
}
