/*global require: false module: false */
'use strict';

var multi = require('./multi');
var denseMatrix = require('./models/denseMatrix');
var mutationVector = require('./models/mutationVector');

var fetch = multi(x => x.fetchType);

var xenaFetch = multi(x => `${x.fieldType}-${x.valueType}`); // make this fieldType?

xenaFetch.add("probes-float", denseMatrix.fetch);
xenaFetch.add("geneProbes-float", denseMatrix.fetchGeneProbes);
xenaFetch.add("genes-float", denseMatrix.fetchGene);
xenaFetch.add("clinical-float", denseMatrix.fetch);
xenaFetch.add("clinical-coded", denseMatrix.fetchFeature);
xenaFetch.add('mutation-mutation', mutationVector.fetch);

fetch.add('xena', xenaFetch);
module.exports = fetch;