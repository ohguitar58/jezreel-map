var wms_layers = [];

var format__sitesJehuSites_0 = new ol.format.GeoJSON();
var allFeatures__sitesJehuSites_0 = format__sitesJehuSites_0.readFeatures(json__sitesJehuSites_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
/* L1 (이스르엘 평야) is a label-only feature: no marker, no popup. */
var areaLabelFeatures__sitesJehuSites_0 = allFeatures__sitesJehuSites_0.filter(function(f){ return f.get('id') === 'L1'; });
var features__sitesJehuSites_0 = allFeatures__sitesJehuSites_0.filter(function(f){ return f.get('id') !== 'L1'; });
/* Popup images (see IMAGES.md in the map-3 package); the merged 2·5 popup adds image2 (elders at the gate) on the feature itself. */
var popupImages__ = {
  '1': '16-map3-1-v3.jpg', '2·5': '17-map3-2-v3.jpg', '3': '7-_1fW5-dYu0ib5Ngv4YvMv.png',
  '4': '18-map3-4-v4.jpg', '6': '19-map3-5-v4.jpg', '7': '20-map3-6-samaria-baal-temple.jpg'
};
features__sitesJehuSites_0.forEach(function(f){ var im = popupImages__[f.get('id')]; if (im) { f.set('image', im); } });
/* Sites split into confirmed/proposed layers so the merged legend toggles each type. */
var confirmedFeatures__sitesJehuSites_0 = features__sitesJehuSites_0.filter(function(f){ return f.get('status') === 'confirmed'; });
var proposedFeatures__sitesJehuSites_0 = features__sitesJehuSites_0.filter(function(f){ return f.get('status') !== 'confirmed'; });
var lyr_sites_confirmed = new ol.layer.Vector({
                declutter: false,
                source: new ol.source.Vector({attributions: ' ', features: confirmedFeatures__sitesJehuSites_0}),
                style: style__sitesJehuSites_0,
                popuplayertitle: '확인된 장소 / Confirmed site',
                interactive: true,
    title: '확인된 장소 / Confirmed site' });
var lyr_sites_proposed = new ol.layer.Vector({
                declutter: false,
                source: new ol.source.Vector({attributions: ' ', features: proposedFeatures__sitesJehuSites_0}),
                style: style__sitesJehuSites_0,
                popuplayertitle: '비정 / Proposed site',
                interactive: true,
    title: '비정 / Proposed site' });
var format_Jehusadvance_1 = new ol.format.GeoJSON();
var features_Jehusadvance_1 = format_Jehusadvance_1.readFeatures(json_Jehusadvance_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jehusadvance_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jehusadvance_1.addFeatures(features_Jehusadvance_1);
var lyr_Jehusadvance_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jehusadvance_1, 
                style: style_Jehusadvance_1,
                popuplayertitle: '예후 진군 경로 / Jehu\'s advance',
                interactive: false,
                title: '예후 진군 경로 / Jehu\'s advance'
            });
var format_Ahaziahsflight_2 = new ol.format.GeoJSON();
var features_Ahaziahsflight_2 = format_Ahaziahsflight_2.readFeatures(json_Ahaziahsflight_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ahaziahsflight_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ahaziahsflight_2.addFeatures(features_Ahaziahsflight_2);
var lyr_Ahaziahsflight_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ahaziahsflight_2, 
                style: style_Ahaziahsflight_2,
                popuplayertitle: '아하시야 도주 경로 / Ahaziah\'s flight',
                interactive: false,
                title: '아하시야 도주 경로 / Ahaziah\'s flight'
            });

lyr_sites_confirmed.setVisible(true);lyr_sites_proposed.setVisible(true);lyr_Jehusadvance_1.setVisible(true);lyr_Ahaziahsflight_2.setVisible(true);
/* Routes draw under the numbered site markers/labels (Jonathan, 2026-11-27). */
var layersList = [lyr_Jehusadvance_1,lyr_Ahaziahsflight_2,lyr_sites_confirmed,lyr_sites_proposed];
lyr_sites_confirmed.set('fieldAliases', {'id': 'id', 'type': 'type', 'name_ko': 'name_ko', 'name_en': 'name_en', 'certainty': 'certainty', 'ref_ko': 'ref_ko', 'ref_en': 'ref_en', 'desc_ko': 'desc_ko', 'desc_en': 'desc_en', 'label': 'label', 'status': 'status', });
lyr_sites_proposed.set('fieldAliases', {'id': 'id', 'type': 'type', 'name_ko': 'name_ko', 'name_en': 'name_en', 'certainty': 'certainty', 'ref_ko': 'ref_ko', 'ref_en': 'ref_en', 'desc_ko': 'desc_ko', 'desc_en': 'desc_en', 'label': 'label', 'status': 'status', });
lyr_Jehusadvance_1.set('fieldAliases', {'id': 'id', 'name_ko': 'name_ko', 'name_en': 'name_en', 'waypoints_ko': 'waypoints_ko', 'waypoints_en': 'waypoints_en', 'ref_ko': 'ref_ko', 'ref_en': 'ref_en', 'desc_ko': 'desc_ko', 'desc_en': 'desc_en', 'label': 'label', });
lyr_Ahaziahsflight_2.set('fieldAliases', {'id': 'id', 'name_ko': 'name_ko', 'name_en': 'name_en', 'waypoints_ko': 'waypoints_ko', 'waypoints_en': 'waypoints_en', 'ref_ko': 'ref_ko', 'ref_en': 'ref_en', 'desc_ko': 'desc_ko', 'desc_en': 'desc_en', 'label': 'label', });
lyr_sites_confirmed.set('fieldImages', {'id': '', 'type': '', 'name_ko': '', 'name_en': '', 'certainty': '', 'ref_ko': '', 'ref_en': '', 'desc_ko': '', 'desc_en': '', 'label': '', 'status': '', 'image': 'ExternalResource'});
lyr_sites_proposed.set('fieldImages', {'id': '', 'type': '', 'name_ko': '', 'name_en': '', 'certainty': '', 'ref_ko': '', 'ref_en': '', 'desc_ko': '', 'desc_en': '', 'label': '', 'status': '', 'image': 'ExternalResource'});
lyr_Jehusadvance_1.set('fieldImages', {'id': 'TextEdit', 'name_ko': 'TextEdit', 'name_en': 'TextEdit', 'waypoints_ko': 'TextEdit', 'waypoints_en': 'TextEdit', 'ref_ko': 'TextEdit', 'ref_en': 'TextEdit', 'desc_ko': 'TextEdit', 'desc_en': 'TextEdit', 'label': 'TextEdit', });
lyr_Ahaziahsflight_2.set('fieldImages', {'id': 'TextEdit', 'name_ko': 'TextEdit', 'name_en': 'TextEdit', 'waypoints_ko': 'TextEdit', 'waypoints_en': 'TextEdit', 'ref_ko': 'TextEdit', 'ref_en': 'TextEdit', 'desc_ko': 'TextEdit', 'desc_en': 'TextEdit', 'label': 'TextEdit', });
lyr_sites_confirmed.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name_ko': 'no label', 'name_en': 'no label', 'certainty': 'no label', 'ref_ko': 'no label', 'ref_en': 'no label', 'desc_ko': 'no label', 'desc_en': 'no label', 'label': 'hidden field', 'status': 'hidden field', 'image': 'no label'});
lyr_sites_proposed.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'name_ko': 'no label', 'name_en': 'no label', 'certainty': 'no label', 'ref_ko': 'no label', 'ref_en': 'no label', 'desc_ko': 'no label', 'desc_en': 'no label', 'label': 'hidden field', 'status': 'hidden field', 'image': 'no label'});
lyr_Jehusadvance_1.set('fieldLabels', {'id': 'no label', 'name_ko': 'no label', 'name_en': 'no label', 'waypoints_ko': 'no label', 'waypoints_en': 'no label', 'ref_ko': 'no label', 'ref_en': 'no label', 'desc_ko': 'no label', 'desc_en': 'no label', 'label': 'no label', });
lyr_Ahaziahsflight_2.set('fieldLabels', {'id': 'no label', 'name_ko': 'no label', 'name_en': 'no label', 'waypoints_ko': 'no label', 'waypoints_en': 'hidden field', 'ref_ko': 'inline label - visible with data', 'ref_en': 'no label', 'desc_ko': 'no label', 'desc_en': 'no label', 'label': 'no label', });

/* Charted Territory (Esri) vector basemap, same no-API-key route as the Hosea map
   (decision: hosea-web-map-basemap-route). Public Esri style item loaded anonymously. */
var lyr_ChartedTerritory_0 = new ol.layer.VectorTile({
    'title': 'Charted Territory (Esri)',
    'opacity': 1.000000,
    declutter: true
});
fetch('https://www.arcgis.com/sharing/rest/content/items/1c365daf37a744fbad748b67aa69dac8/resources/styles/root.json')
    .then(function (r) { return r.json(); })
    .then(function (style) {
        Object.keys(style.sources || {}).forEach(function (k) {
            var src = style.sources[k];
            delete src.url;
            src.tiles = ['https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf'];
        });
        return olms.applyStyle(lyr_ChartedTerritory_0, style, 'esri');
    })
    .then(function () {
        var s = lyr_ChartedTerritory_0.getSource();
        if (s && s.setAttributions) {
            s.setAttributions('Powered by Esri &middot; &copy; Esri and its data providers');
        }
    });
lyr_ChartedTerritory_0.setVisible(true);
layersList.unshift(lyr_ChartedTerritory_0);

/* Labels-only layer: shares the sites source, declutters label text only. Also holds the
   marker-less 이스르엘 평야 label. Added to the map in qgis2web.js, excluded from popups. */
/* A label hides together with its site layer (confirmed/proposed toggle). */
var labelStyleToggled__sitesJehuSites_0 = function(feature, resolution) {
    if (feature.get('id') !== 'L1') {
        var lyr = feature.get('status') === 'confirmed' ? lyr_sites_confirmed : lyr_sites_proposed;
        if (lyr && !lyr.getVisible()) { return null; }
    }
    return labelStyle__sitesJehuSites_0(feature, resolution);
};
var lyr_sites_labels = new ol.layer.Vector({
    declutter: true,
    source: new ol.source.Vector({features: features__sitesJehuSites_0.concat(areaLabelFeatures__sitesJehuSites_0)}),
    style: labelStyleToggled__sitesJehuSites_0,
    interactive: false
});
lyr_Ahaziahsflight_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
/* Jezreel Valley flat land: DEM-derived alluvial-plain polygon (Jonathan's QGIS work,
   drawn against Copernicus DEM GLO-30, <=100 m). Sits under routes/points, no popups. */
var format_Jezreelflatland_3 = new ol.format.GeoJSON();
var features_Jezreelflatland_3 = format_Jezreelflatland_3.readFeatures(json_Jezreelflatland_3,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jezreelflatland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jezreelflatland_3.addFeatures(features_Jezreelflatland_3);
var lyr_Jezreelflatland_3 = new ol.layer.Vector({
                declutter: false,
                source: jsonSource_Jezreelflatland_3,
                style: new ol.style.Style({
                    fill: new ol.style.Fill({color: 'rgba(120,180,120,0.22)'}),
                    stroke: new ol.style.Stroke({color: 'rgba(70,130,70,0.65)', width: 1.5})
                }),
                interactive: false,
                title: '이스르엘 평야 평지 / Jezreel Valley flat land'
            });
lyr_Jezreelflatland_3.setVisible(true);
layersList.splice(1, 0, lyr_Jezreelflatland_3);
