/**
 * @Author: Caven
 * @Date: 2020-08-18 19:37:42
 */

let viewer = undefined

function initViewer() {
  viewer = new DC.Viewer('viewer-container')
  let baselayer = DC.ImageryLayerFactory.createGoogleImageryLayer({
    style: 'img'
  })
  viewer.addBaseLayer(baselayer)
}

DC.ready(initViewer)
