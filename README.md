# jezreel-map

**Live map: https://ohguitar58.github.io/jezreel-map/**

Interactive web map for the StoryMap 「이스르엘이라 하라 2 · 예후의 행보 / Call Him Jezreel 2 · Jehu's Way」 (성경 지리 브리핑 / Bible Geography Briefing series).

- Exported from QGIS with qgis2web (OpenLayers), then patched:
  - Esri **Charted Territory** vector basemap added in `layers/layers.js` (keyless Esri style, no API key)
  - Bilingual (Korean/English) site labels and popups
  - Routes R1 (Jehu's advance, solid red) and R2 (Ahaziah's flight, dashed blue)
- Popup images: AI illustrations (AI 상상도 / AI illustration)

Same publishing workflow as https://github.com/ohguitar58/hosea-map
