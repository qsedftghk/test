(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.libSnowstar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// snow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfA8IAAADIgBAAIAAgDIgDAAIADgBIABgBIgEAAIgCgCIAFAAIAAgCIABAAIAAgBIgHAAIAAgBIAFgCIAAgBIAHgEIgFAAIAAgBIAHAAIAAgBIgJAAIAKgDIABgCIgGAAIAAgCIAHAAIAAgBIgDAAIAAgBIADgBIACgDIgCABIAAgBIgDADIAAgDIgHAEIADgEIgKgCIAAgCIAHAAIADgCIAAACIAEAAIAAgBIAMgDIgQgBIgBgCIAIgDIAJABIACgBIgCgBIgCABIgEgBIACgDQAGAAADgCIgDgBIAAgCIADAAIgCgEIgBACIgDAAIgBgCIgFADIABgDIgBACIgEAHQgEACgFAHIABgOIADgBIAAgBIACgCIgHAEIgKAPIgCAAIADgJIACAAIADgKIgEAAIgEAHIgCgDIAEgGIgGAGIABgEIgEACIABgCIgBgCIgCAEIgCAAIACgEIgDACIAAgCIgEAFIAAgDIgCAAIgBgCIgCAAIgEgBIACAAIAEgBIgCgBIACgBIADACIABAAIgEgGIAAgBIAGAGIACAAIgBgDIADAAIACADIAEAAIgGgJIAFACQAAAEACADIAEABIgFgKIABAAIAFAJIACAAIgBgBIADAAIAAABIADgBQAAgBgBgBQAAAAgBAAQAAgBgBABQgBAAgBAAIAAgDIACAAIAAgBIgFAAIAAgCIACAAIgCgCIgGAAIABgEIAFACIgCgCIgDAAIgDAAIAAgBIAGgCIgDgCIAAgEIAGAFIABAAIABABIgBACIAEAGIAAgDIACACQAAAAAAABQgBAAABABQAAAAAAAAQABAAABAAIAAADIABADIAGAAIgJgPIADAAIAJAJIABAIIAEAAIgDgFIADAAIAGAFIAAgCIACACIADgFIgCAAIgBgBIABgCIAAgBIgOgBQAAgBABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAFAAACgBIgOAAIAAgDIAMgBIgGgEIgEACIAAgCIgCAAIgBAEIgCAAIAAgEIgBAAIAAACIgFgCIAAAEIgBAAIgCgCIgBACIAAgEIgEgBQgGADAGgFIAFAAIgCgCIACAAIAFACIgFgHIACAAIAGAHIADAAIgDgCIABgBIADADIAEAAIgCAAIAFAAIgBgFIgGACIAAgCIAFgCIgFgBIAEgBIgLAAIgCABIgBgDIgDAAIADgBIgCAAIACgEIADACIAAACIALAAIgCgCIgFAAIAAgCIADAAIgDgBIgBgBIADAAIgDgDQgMADAGgFQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIgFgCIAFAAIgFgBIADgBIgCgEIAEAAIABgBIABAFIACABIADgDIgCAGIACABQADgDABAAIgCAGIABADIABAAIAIgKIgHAPIADADIACgDIACAAIgCAFIACACQAEgBgCgFIACACIAAgFIABAAIgBgGIABAAIACACIAAgFIACAAIAAACIAFgDIgDAGIACAAIgGAHIACAAIAAACIgFAGIAAAGIADgDIAHgJQgBAKgCABIADAAIABgCIAEADQgDgFAAgFQAGAAADAJIACAAIgCgJIgDAAIADgBIgFAAIgBgBIABgCIgBgDIgDAAIgBgCIADgBIgCAAIgBgBIADAAIgDgIIABAAIACADIABAAIADAFIACgDIgCAEIADADIACgCIABAAIgBAHIABgDIAAAFIADACIACgDIgCgIIADAAIABAFIACgBIgIgPQAFACAFAJIAAgEIACAAIgDgGIABAAQgBgEABgCIAFAFIAAgGIAEABIAAAFIACAAIAAABIgFACIAIABIAAACIgIADIACAAIAAABIgCAAIgBABIgBAAIAAACIAHACIAAABIgJAAIgCACIAGABIgHAAIABADIgCAAIAAADIACACIAAgCIAEgBIAAADIACgDIAAADIACgCIAAACIAJAAIACAAIgGACIAAABIgEgBIgBAAIAAADIgDgDIgBAAIAAADIgEgDIgIAFQAMgEACAGIgRACIAAABIAFAAIABACIAAgCIADACIgCACIADACIgDAIIAEAAQgBgFADgBIgCgDIAJgGIgFANIABAAIAGgEIAAgDIACABIADgHIgCAAIADgDIAGgFIgHARIABABIgBABIgCAEIADAAIABgCIAAACQADgFAEgDIAAADIgEAFIADAAQADgFADgBIgDAGIADAAQABgFADgBIgCAGIACAAIAFgGIAAABIgCAGIAJAAIAAACIgJAAIACAGIgFgFIgCAAIACAGIgGgGIgBAAIADAEIgCACIgDgCIgBgFIgDAAIADAJQgGgFgBgDIgDAAIgBACIAEACIABABIgCABIAAACIACAAIABABIgBAAIAAACIADADIgCAAIAEAJIgFgHIgBACIAAgEIgBABIAAgDIgDAAIABgEIgDABIACgDQgIgFgDgBIAJAMIgCADQgFgCgEgJIgCgEIgCACQAFAEgBADIAAACIgCAAIgCADIgBgCIAAACIgFAAQAFABAEgBIAJAEIAAACIgMABIAGADIAAgBIACAAIAAABIABAAIABgBIACABIANABIgPAEIAAADQgCgDgFAAIgBADIACAAIACABIgCABIALAAIAAABIgHACIAKAAIAAACIgJABIAAACIAGAAIAAABIgGAAIABABIAIAAIAAAEIgGAAIAAABIAGAAIAAACIgFABIAEAHIgFgEIgEADIgCAAIADgGIgBgBIgEACIAAgBIAEgEIAAgCIgFACIADgEIgCgBIgIAOIAEgRIgCAEIACgHIgBgCIgBACIAAgDIgCgBIgCACIACAHIgDABIgBgGIAAAFIgCAAIACAHIAAACIgDgDIgIAHQgBgEADgFIgCAAIAAgCIAIgFIgFAAIABgCIAEAAIABgDIgBABIAAgBIADgBIABgKIgBAAIgCAEIgGAHIAAgBIgDAAIAIgNIAAgCIgCAAIgEAHIgDgBIgBAAIAAgBIgBABIgDgGIgBAAIgCACQADAEAEABIAAAEIACAFIgBAFIgIgJIAAgDIgCgCIAAAIIAEABIgCABIAAACIAEACIgCABIACACIAAACIADAAIABAHIgBABIgBgBIAAABIgCgDIgBACIAAgFIgFAGIACgIIgCgCIAAABIgDAAIADgDIgDgBIAAgEIgCgCIgCACIACAFIgCgDIgCACIAEADIAAACIgFgEIADAIQADACgBADIgHgHIgCADIACAGIgDgEIgCABIAEAGIgBABIgDgEIgDADIABACIAAACgAgMgUIAIAMIgDAGIgQABIgBABIARABIAEAFIgHANIAAADIAJgPIAGACIAIAMIABAAIAAgEIgIgKIAFgHIANAAIADgBIgQAAIgFgHIAHgMIAAgCIgCABIgHAMIgFABIgIgNIgDAAgAAAAVIAEAAIAAgCIABAAIgBgCIAAgBIABAAIABgBIgBgCIgBACIgCgCIACgDIgEACIAAADIgBAAgAAKAHIADAAIAAADQABACAFAAIACgDIACAAIgDgEIgBAAIgCgEIgCAAIgBAEIgBgCgAAPgDIACAAIAEgGIgBgCIAAgEQgDAEgFAAIABAAIAAACIgDABIADAFIABAAIAAgCIABgCgAAAgMIAEAAIABgFIgBgDIgCgBIgCAAQgDABADAIg");
	this.shape.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.libSnowstar, new cjs.Rectangle(-6.6,-6,14.2,12.6), null);

(lib.указатель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C3E6").s().p("AiUA4QghgcgYgcIBHg3QBJg3AKAAQALAAgTArQgTArAKgBQBWgEAngIIANAAQAIAABDgOIAOAAQAcANATA9QgOAWAAAMIiVAAQhTgIgcgDQgHgBAVAhQAVAhgHAAQgqAAhCg3g");
	this.shape.setTransform(33.7,39.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CAE0F3").s().p("AooMUIgalWIAAgDIAAgDQgPmRgXm7QgRlXAEhRIAdABQAHApAABDQAAAdAKAdQAKAcAAAsQAAAMgKBoIAAAtQADCkAbBmIAAEFQADATAUFBQATEzACBdIgVABIgBAAQgMAAgJg0gAJEtHIAKAAIAaAAIAOAAQABAIAAAJQgPCCAAAXQAAA4AIA0QAHA0AAANQAAApgCBbQgDBZAAApQAAAbgCAHQgCAKgFAGIgICGQgMDAgGBEIAAG6IgFAPIAACHQgQAAgrAEg");
	this.shape_1.setTransform(116.5,155.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9C7E8").s().p("Ao1HGQgVlCgDgSIAAkGQgahmgEikIAAgtQAKhoAAgMQAAgsgKgcQgKgdAAgdQAAhCgGgpIAEAAIApAAIBNZxQAAAGgEAFQgEAEgGABIgRAAQgChdgTkygAI7M3QgGgBgEgEQgCgBgIgBIAAiHIAFgPIAAm6QAFhEAMjAIAIiGQAFgGADgJQACgIAAgaQAAgpAChaQADhbAAgpQAAgNgIg0QgHg0AAg3QAAgXAPiDQAAgJgCgIIAXABQANAAAGgCIgyZjQgBAGgEAEQgEAEgGAAIAAAAgAJotTIAHgBQAEAAAEACIgPgBg");
	this.shape_2.setTransform(120.1,153.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 2 copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3C3E6").s().p("ACxDrIgsAAQgPgGgPgJQg9ghgVhBQAAgDACgGIgKgWIACgOQgKgcgDgvQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQgEgQAAgLIALhMQAVhOAsgYQAAgFAcgRIACAAIAGACQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIADAAQAAADAnALQApATApA2QAxBQAOB6IAAAzQAAAKACAPQgDAagIAVQgZAegaAPIAVAAQgTAIgTAAIgZAAIgGACIgRgFgAEDC2QAOAAABgQIAAgOQgBgFgFgBIAAADQgbAXgBAEIAIADIAAgDgACYgzIAEAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAABpBDAoIAFAAQAAgHADgFQgEAAgBgnIAAgCIAFACIAAgTQgJgIgKgWIAAgDIAFADQABgLgWgcQgBgFAGgBIADABIAAAFIAIAAQAAgFgIAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIgLgVIgDAAIAFAMIgCAAQgFAAgGgTQgLgIAAgEQgLAAgHAogADZAGIACAAIAAgFIgCAAgABDhRIAAABIADALIABgBQACgQACgFIADgHIAAgBIABAAIABgCIABgBIADgJIgEgQIgCAAQgLAYAAAWgAHQDtIgMgCIg9AAQgPgJgRg3IACgEIgCgGQAAgKAPgPQAAgMBxgLQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAEgBAbgDQgHgJgjgXIACgEQgGAAgqgtQgPgPgSgdQgpg6gFgqQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgCIACgEIgCAAQACgFABgPQAagpAJAAQAAgPBPgVQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIACAAIANgDIAEADQAEgDAEAAIAHAAQANABAQAEIAFgCQA2AOAeAhQAkAVAAA2IAAAMIgOATQgwAogaAAQgMgRgFAAIACgEQgDAAgYgaQgPACAAAHIAGAEQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIACAEIAWATQACAAA/BEQAaAdAYAjQASArAJApQAAAPhVAMIhfAMIgSAJIAQAAQgSAHgSAAIgDAAgAGTDBIAAACQAFAPAMAAIAWgEIAAgCQgJAAgbgQgAJBgoIAKgCIAAgGQgHAEgGgBgAGWiLQADAJACAAIACAAQAggbAUgLQAAgEgLgEIAAgBQgjABgNAlgAj+DrQgTgDgMgEIgMACQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgYAAABgjIANgtQABgcANgyIgDgFIADgNIAAgRIgCgLQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgEgCQAEgHAAgGIAAgPQABgSgFgKIAFgCIgFgaQACgEAAgEIABgJIgCgFIACAAQgKg2gBAAQABgpgjglIAAgCIAEgHQBzAGAAAEQAeAAAUAnIAIgGIADAGIgDALQAQAxAVAbQAAADATAeIAFgCQACAAAcAhQAiASAAAUQAAApgSAcIgDAGIABACIgCAAQgSAcgRAAIgCAAQgqggg3hWIgDAAIAOBJIgDAAQAHAfgBAZIAAALIADAEQgBAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAFADAEQgDAEAAAEIAAAhIgDAcQAAADgDAFIAWAAIgPAFIgKgBIgBABgAhOAXIgCASIAEACQAKgPABAAQgNgigFAAIAFAdgAjEgVQgBAMAJAMIACAAQgBgFAJgTIAAgCIgQgCQAAAAgBAAQAAAAAAABQAAAAgBABQAAABAAABgAkqjAQAAAUAPAWIACAAQABgJANggIAAgCQgIAAgSgFQgDAAgCAGgAonDrQgSgFAAgGQgxgRgqg4QgGgMgEAAIACgFQgJgJgHgvQANhIAigfIgDgFIADAAIAFACIgUgnQgagmAAgbIAAgDQABgkAMgbIgDgFIADAAQAVgkArAAIACAAQAiABAuAaQAxAuAFArQABAEABAEIgBAGIAAAKQgBAlgWAXIAAADIADAAQBEA9AHAtIgDAAQAFAIACAiQgGBHgOAGQgbAVAAAGIgEgDQgBAFgFAAQgMAIgQAEIAHAAIgLACIgUADgApoBHQAAA1AmAXQARAWAbAAQAEAAAFgFQAAgEgEgKIADAAQgBgDgCgFIADgFQgDAAgCgQIADAAQgKgkgFgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQgNgjgXgJIgEACQgFgCgFAAQgMAAgNAhgAnRAzQAAAEAFAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAQATAwAGAAIACAAQAEAAAIgOIAAgDQgMgggdgJgAqeBYQAAAFAGAAIACAAIAAgFIgCgPIAEgMQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgHAAgBAdgApkiHIAAAUQAAAYAhAXIAFAAQAOAAALgRIgDgGQAHABABgKQAAgCgCgFQgIgLAAgEQgJgbgZgOQgUAAgEAcgAp6jBIAAADQARgHABgPQAAgEgGgBQgMAFAAATg");
	this.shape_3.setTransform(136.8,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A3C3E6").s().p("AgBAAIADAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgBgBg");
	this.shape_4.setTransform(150.8,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A9C7E8").ss(2.9,1,1).p("APencI+2APQh1ABgBh1IgEnNQgBh1B2gBIe1gPQB2gBABB1IAEHNQAAB1h1ABgAKZSUIhkgD");
	this.shape_5.setTransform(110.7,117.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqGniICSgBIBDaDIiSAHgAKZSBIhkgDIgngCIAs5nICSgBIgsZugAxOpUIgEnMQgBh2B2AAIe1gQQB2gBABB2IAEHMQAAB2h1AAI+2AQIgCAAQhzAAgBh1g");
	this.shape_6.setTransform(110.7,119.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,224.3,240.5);


(lib.луна = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGDiQhfgagxhUQgyhUAahdQAShHA4gvQA3gtBGgJQhLAxgYBXQgZBeAyBUQAxBUBeAZQAtAMAtgFQgpAagxAIQgTADgTAAQgfAAgfgIg");
	this.shape.setTransform(18.4,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHDfIgDgBQhcgcguhTIgBgCQgvhVAchbIAAgBQAVhFA4gtIACgBQA3gqBFgHQhMAvgaBVIAAABQgcBcAuBTIABABQAuBUBcAdIABAAQArAOAugEQgpAXguAHIgEABQgQACgPAAQghAAgggKg");
	this.shape_1.setTransform(17.5,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLDcIgDgCQhagegshUIAAgCQgshWAfhZIAAgBQAWhFA6gqIACgBQA4gpBEgEQhMAsgdBTIAAABQgeBbAqBUIABABQArBWBaAfIABAAQArAPAtgCQgpAWguAFIgEAAIgWACQgmAAgjgMg");
	this.shape_2.setTransform(16.5,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPDZIgDgCQhZghgohVIgBgCQgohXAhhYIAAgBQAZhCA6gpIACgBQA5gmBEgCQhNApgfBSIgBABQghBZAoBVIABABQAoBWBZAjIABAAQAqAQAtgBQgqAUguAEIgEAAIgPAAQgpAAgmgNg");
	this.shape_3.setTransform(15.6,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSDUIgDgBQhXgkgmhWIgBgCQglhXAkhXIAAgBQAbhBA8gnIABgBQA6gkBEABQhOAlgiBRIAAABQgkBYAlBWIAAABQAlBXBYAlIABAAQApARAtABQgqATgvACIgDAAIgIAAQgsAAgpgRg");
	this.shape_4.setTransform(14.6,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABGDlQgwAAgsgUIgDgBQhWgngihXIgBgCQgihYAnhVIAAgBQAdhBA8gkIACgBQA6giBFADQhQAjgkBPIAAABQgnBWAiBXIABACQAiBXBWAoIABAAQAoATAtACQgrARguABIgEAAg");
	this.shape_5.setTransform(13.7,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABFDkIgEAAQgwgCgrgVIgDgBQhUgqgfhYIgBgCQgfhYAphUIABgBQAeg/A+gjIACAAQA7ghBEAGQhRAgglBOIgBABQgpBUAeBZIABABQAfBZBUAqIABAAQAoAUAtADQgoAPgqAAIgIAAg");
	this.shape_6.setTransform(12.7,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABADjIgDAAQgwgDgqgXIgDgBQhSgtgdhYIAAgCQgchZAshTIAAgBQAhg+A+ggIACgBQA8geBEAHQhSAegoBMIAAABQgtBTAcBZIABACQAcBZBTAtIABABQAnAVAsAEQglANgmAAIgQgBg");
	this.shape_7.setTransform(11.7,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA8DjIgDAAQgwgFgqgYIgCgCQhRgvgZhaIgBgCQgZhaAvhRIAAgBQAjg8BAgfIABAAQA9gdBEAKQhTAbgqBLIgBABQgvBSAZBaIAAABQAaBbBRAvIABABQAnAWArAGQghAKgjAAIgXgBg");
	this.shape_8.setTransform(10.7,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA4DjIgDAAQgwgHgogaIgDgBQhPgzgWhaIgBgCQgWhbAyhPIAAgBQAlg8BAgcIACAAQA+gbBEAMQhUAYgtBJIgBABQgyBRAWBbIABACQAWBbBQAyIABABQAmAXArAIQgeAIgfAAQgPAAgQgCg");
	this.shape_9.setTransform(9.7,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA0DiIgDAAQgwgJgogaIgCgCQhOg1gThbIAAgCQgThcA0hOIAAgBQAng6BCgaIAAgBQBAgYBEAOQhVAWgvBHIgBABQg1BPATBcIAAACQAUBcBOA1IABABQAlAYArAJQgaAGgbAAQgUAAgTgDg");
	this.shape_10.setTransform(8.7,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvDiIgDgBQgvgKgogcIgCgCQhMg4gQhcIAAgCQgQhdA2hMIABgBQApg5BBgYIACAAQBBgXBDARQhVATgzBGIgBABQg3BNAQBdIABACQAQBdBNA4IABAAQAkAaArALQgXAEgYAAQgXAAgXgEg");
	this.shape_11.setTransform(7.7,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkDhIgDAAQgvgMgngeIgCgCQhLg6gNhdIAAgCQgNheA6hKIAAgBQArg5BDgVIABgBQBCgUBDATQhWAQg2BEIAAABQg6BNANBdIAAACQAOBeBLA6IABABQAkAbAqAMQgTADgUAAQgbAAgbgGg");
	this.shape_12.setTransform(7.4,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZDgIgDAAQgugOgngfIgCgCQhJg9gKheIAAgCQgKheA8hKIABgBQAtg2BDgUIABAAQBEgTBDAWQhYANg4BDIAAABQg9BLALBeIAAACQAKBfBKA9IABABQAjAcAqANQgQADgRAAQgfAAgegJg");
	this.shape_13.setTransform(7.1,23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAODgIgDgBQgugPglghIgDgCQhHhAgHheIAAgCQgHhgA/hHIABgBQAug2BFgRIABgBQBFgQBCAYQhYAKg6BBIgBABQg/BKAHBfIAAACQAHBgBIBAIABABQAjAdAqAPIgaACQgjAAgigLg");
	this.shape_14.setTransform(6.7,23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADDgQgvgRgmgjQhIhEgEhhQgFhhBDhHQAxg2BHgPQBFgOBDAaQhaAHg9BBQhCBIAEBhQAEBiBHBDQAiAfArARIgSAAQgoAAgmgMg");
	this.shape_15.setTransform(6.4,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,46.8);


(lib.снг = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANuEKQg6giAAgOIAAhEQAeAAAmgKIAAAKQAKAAAAgKQBNAIAAA8QgXA6gQAAgAOoD3IAKgTIgnAAIAAATIAUgKQAAAKAJAAgAK9EKQgPgCgag7IAHAAQgNgbAAgNIAGAAQgGgKAAgfIgHAAQgtB6gdAAQgZAAgqhrIgOAAQAABPgvApIgUAAQhRgJAAgmQA5hDAmiaQAAheAUAAIAvAAQAoAKAABAQAAASAbBgQANAAApjDIANgHIAoAAIApAcQAAAHgHANQAACfBKBmIAAAHQAAAwhQATgALyDbIAHAAIAHgbIgOAAgAIHg4IAHAAIAAgNIgOgHQAHANAAAHgAK2g/IAHAAIAAgNIgHAAgAAeCzQgag9AAg8QAqitBpAAIBRAAQBrA4AAB1IAAAiQgyCuh8AAQhOAAg5hXgAB2B3IAGAAIAAgOIgGAAgABvAmQANBKA9AAQA/AAALhQQgXhDg6AAIgNAAQg2AdAAAsgAD1hSQACAOAMAAIAAgHQAAgOgOAAgAk/C6QAAg9A8AAQAjhGAgiUQArgOARAAIAGAAQAACtBeBCQACgNALAAQATAEAAAyIAAAoQhLAagKAAIgHAAIAAgHIAHghIgHAAQiGAOAAAGQAAAog8AAQgLAHgWAAgAgnCfIAOAAIAAgNIgOAAgAiSCSQAAgHAHAAQgUgeAAgKQgNAAgOAvIAHAAIANgHQAAAHAHAAQAAgHAHAAQAAAHAGAAgAp5CzQgbg9AAg8QAritBpAAIBQAAQBsA4AAB1IAAAiQgyCuh9AAQhNAAg5hXgAoiB3IAHAAIAAgOIgHAAgAopAmQAOBKA8AAQA/AAALhQQgWhDg6AAIgOAAQg2AdAAAsgAmihSQACAOALAAIAAgHQAAgOgNAAgAuCEKQhGAAgGgcQAdheAAiHQAAhRgdiIQATAAAAgTQAKAAATAJQBsABBbgwIAKAAQAWAAAiByQgiAmilAUQAmB4AABXIAABpIgJAvgAtcD3IATAAIAAgTIgTAAgAtSDRIAJAAIAAgTIgJAAgAuoi9QATABAAgUIgTAAgAOVCDQhhgBAAgvQgTheAAidQgKAAAAgKIAKAAIgKgTIAAgnQAAgTBNgKQASAKAVAAIAdAAQAUD/ATB5IgTAKgAOoBcIAKAAIAAgUIgKAAg");
	this.shape.setTransform(194.6,110.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ASSEKQgPgCgZg6IAHAAQgOgcAAgNIAHAAQgHgKAAgeIgHAAQgsB5geAAQgYAAgrhsIgNAAQAABQgvAqIgVAAQhQgKAAgmQA4hEAmiYQAAhfAUAAIAvAAQApAKAABAQAAASAaBfQAOAAAojBIAOgHIAoAAIAoAbQAAAHgGANQAACeBKBnIAAAHQAAAwhRATgATIDbIAHAAIAHgbIgOAAgAPdg4IAGAAIAAgNIgNgHQAHANAAAHgASLg+IAHAAIAAgOIgHAAgAH4EKQg7gMAAgOIAAhbQAAgpgtigQAAgNBOgtIATAAQAUCbANAAQCWAAAAB1QAABRhVARQgxgHgQgHQAAAKgUAKgAHkD2IAAAHIAUAAIAGgNIgGAAQgNAHgHgBgAJZDwIAHAAQANAAAAgNIgHAAQgNACAAALgAIYCpIAaATIANAAQAKAAAKgTIgHgiIggAAQgPAAgFAigABXDQIAAgGQAzijAAgwIAAhHQAAgLA0gVIANAAQANAAAAAZIBGgMQBUAYAAA7IAAANQAAAMggA6IAGAAQAIAAAsA6QAABUgtAgQguAMAAAHQgOAAhlgaQAAAgggAAQAAgHhHgzgADlCQQAJAgAkAAQAZgGAAghQAAgfgmAAQggAPAAAXgADlgDQAMAcANADIANAAQAJABAKgUQAAgggTgFQggAAgGAZgAE+g9IAAgMIgNAAQADANAKgBgACxhXIANAAIAAgFIgNAAgAjiCzQgag+AAg7QAqitBpAAIBRAAQBqA4AAB1IAAAhQgyCvh7AAQhOAAg5hXgAiKB2IAGAAIAAgNIgGAAgAiRAmQANBJA9AAQA/AAAKhQQgWhCg6AAIgNAAQg2AdAAAsgAgLhSQACANALAAIAAgGQAAgNgNgBgApRD4QAlisAAiUIAAhuQAAgMA3gZQAYAAANCKIASAJIAuAAQASi3AlgBQAVABAQgKQAOAAAWAlQgSAuAAClIAAA1IAJATIgJAAQAkBdAABIIhAASIgJAAQgkAAgcjKQgbgkgKAAQgkAgAAAgIAAASQAAAVAJAQIgJASQAAAKAJAAIgTBtIhSAAIgTAKQAAgSgSAAgAwAEKQjNAAgckEQAAi5CDg4IBmgcQDfgBAACoQgVBlgZABIg4AAQgPgBgggtQATgeAAgaIAAgJQgTgXAAgPIgcAAQhmAAAACeQAiCCBgAAQAjAABNhBQA4AkAAAKIAAATQhiB5hYAAgAtZCHIAlAAQAAgSgSAAIgTAAgAxmg7IAAAKIAJAAQAAgOASgYIgJAAQgSAAAAAcgAuajPQAOgBAXAUIAAgKQAAgSgcAAIgJAAgALiD2QgSAAgOleIATgMIBBAAQANABAAALIAACOQAAAHAGAAQAAAHgGAAIAGAgIAACWQAAAMgNAAg");
	this.shape_1.setTransform(127.8,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,12.5,290.1,124.4);


(lib.sled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5CCEE").s().p("AgCAFQgJgEgBgJQALgDAFAHQAEAEAFAKQgMgDgDgCg");
	this.shape.setTransform(17.7,1.8,0.651,0.476,0,20.4,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5CCEE").s().p("AgBgEQAGACgBAHQgMAAAHgJg");
	this.shape_1.setTransform(21.2,4.5,0.651,0.476,0,20.4,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5CCEE").s().p("AgFgGIAFgBIAGABIAAAOQgKgHgBgHg");
	this.shape_2.setTransform(19.9,2.9,0.651,0.476,0,20.4,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5CCEE").s().p("AgEAIIAAgPQAKgCgBAHIgBAKIgIAAg");
	this.shape_3.setTransform(20.6,3.1,0.651,0.476,0,20.4,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CADFF5").s().p("AgIAEQgGgGgLACIABAAQACgFAQgHQAPgHAEACIADAEIAKAcIgaAEQgEgLgEgEg");
	this.shape_4.setTransform(18.6,1.6,0.651,0.476,0,20.4,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CADFF5").s().p("AgFAsIgSgDQgGgLgCgBQgGgFgKAGQgEADgCgDQgCgCABgFQACgHADgDQAEgEAHACQAPAGgHgPQgEgFAEgEQADgEAHABQAHABACgBQACgCAAgHQgBgGAHgEQAGgEADAEQAFAGAHADQAHACAFgCQAFgDgCgIIgDgNIAJABIAHAGQAEAEgBAFQgHAKANAAIgDASIgCANQgDAGgLgFQgEgBgCAEIgCAHQgEANgIAFQgFADgHAAIgJgBg");
	this.shape_5.setTransform(17.5,5,0.651,0.476,0,20.4,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAF1FA").s().p("Ag0BLQgBgRgJgBQgIgBgNgJQgNgIgJgBQgDAAgDgCQgDgDACgDIAFgRQAEgLAHgDQALgGAFgOQAEgMAOgKIAXgQQAFgEAXgFQAVACALgBQASgBANgGIAAAAQABAKAIAEQAFADAMACIATgDQABAJALAHIAEANQABAHgFADQgFADgHgDQgGgCgFgGQgDgEgHADQgHAEAAAHQABAHgDABQgCACgGgBQgIgBgDAEQgDADADAGQAIAOgPgFQgIgDgEAEQgCADgCAIQgBAFACACQACACAEgDQAKgGAFAFQACACAGALIg0AVQgdALgYAAIgCAAg");
	this.shape_6.setTransform(12.4,4,0.651,0.476,0,20.4,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CADFF5").s().p("AgRBQQgGgGgDgBQgEgDgFABIgJABQgUAEgKgHQgJgHgBgRQAGgBAGAFIAJAIQAHAGAFgFQAEgFgHgFQgEgEgEgJQgEgLgCgEQgCgCABgDQAAgDADgBQAIgDAOgPQANgOALgDQARgFAHgJQAIgKASgLQAVgNAHgFQAPgOAMAWQgYAEgEAEIgYARQgOAJgEAMQgEAPgLAGQgHADgEAKIgEARQgDADAEADQACADADAAQAJAAAMAJQANAIAIABQAJACABARIgLAFQgGABgFgGQgDgDgDAAQgDABgBAEQgCAFgFABIgJABIgDAAQgEAAgFgDg");
	this.shape_7.setTransform(6.3,3,0.651,0.476,0,20.4,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,7.1);


(lib.ы_хвост = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AhkESQgIgDAQgRIBBheQBChxAKhbQAFggAEgtQAIhagFg/QAaBOALBdQANBrgQBDQgTBMghAoQglAthRAjQgPAIgIAAIgCgBg");
	this.shape.setTransform(10.4,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,55);


(lib.ы_лента = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93C01C").s().p("AhjgMIC1gZIASBGIiyAFQgIAAgNgyg");
	this.shape.setTransform(24.7,103);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93C01C").s().p("ABFCyQhIgChAgfQhqg1gOiLQgGgsAGgvIAFgnIASAAQAVABASAKQgjAzAPA8QALAvAmAtQAkAtCBASQBBAJA5AAIgmA7QgZAKguAAIgNAAg");
	this.shape_1.setTransform(44.5,122.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93C01C").s().p("AlJGAQg+g6gohMQgqhPARghQAPgcAygBQAdgBBBAHQAuADA4gTQA2gSBGgpQBBgmAkg6QAig2gLggQgHgYgagHIgogMQgQgKAQgQQAOgMAvgZQBFgfCog4ICbgyIAcBUQgagBhjAKQhGAIhfAaQhaAagaARQgWAOABAHQAAACAMAKQALAKAFAIQAJAPAHAeQAIAkgxBNQgzBRhBAoQg6AlhSAFQg6ADgpgLIgwgNQgagEgXAGQgWAHAIAdQAFAPAWAkQATAgB4CBg");
	this.shape_2.setTransform(46.2,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.3,140.4);


(lib.ы_туловище2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("Ag3D+QgQgEgggSQgrgYgZgrQgcgvgBhBQgIg9ACgjQAEg9AwgoQCBgoC0hIIAOAAQAOACAEANQAHAXAHA3QAJBGgEAvQgEAugJAkQgFASgEAJQgsBghsBGQgNAKgSALQgSAHgRAAQgLAAgKgDg");
	this.shape.setTransform(20.7,25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,51.4);


(lib.ы_туловище1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECAD20").s().p("AhQBsQhBgOg9gsQgKgHhbhLIAjhaQBWAjA0AMQAhAHBxAOQCKANCegmQhKCFhDAnQg0AehMAAQg1AAhCgPg");
	this.shape.setTransform(39.7,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECAD20").s().p("AhNgTQAYgeAsAAQBHAAApBFIgFABQgtAQgXAEQgiAHg8ACIglAAQADgsAVgZg");
	this.shape_1.setTransform(67.6,46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCD03").s().p("AiQDVQhkgTiEhMIhwhJIBZjhQBbBMAJAHQA+AsBBAOQCgAkBWgzQBDgnBKiGQBagaBDAgQAeAOApApQAUAVANAfQAOAhgBAfQgCA1gFAZQgMA2gkA7QggAYglAQQgWAJg2ATQgphGhHAAQgtAAgYAeQgVAagDAsQhdgCiHgYg");
	this.shape_2.setTransform(48.9,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.9,51);


(lib.ы_передняяспереди3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AhRgEQALgGAqgMQAbgIAyAHQAZADAUAFQAYAJgXARQgLAIgRAHQhYgChUAEQADgWAVgKg");
	this.shape.setTransform(10.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,5.6);


(lib.ы_передняяспереди2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AheA4QAGgMATgIQBRgTAwhJQAMgSAOANQAPANgIALQgyA9g0AZQgdAOgnAEIgHAAQgPAAAFgLg");
	this.shape.setTransform(9.6,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,13.5);


(lib.ы_передняяспереди1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AhJC4QgJgMAQgaQAQgaAEgPQAGgQAKg3IAPhdIAFgmQADgrARgaQARgYATADQAUAEAHAiQAJAngNBCQgOBKglBEQgeA3gcAYQgOALgJAAQgGAAgEgEg");
	this.shape.setTransform(7.7,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,37.7);


(lib.ы_задняяспереди3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AhAAOQABgLAWgUQALgLAKgJIBHAxQATANgGAGQgGAHgmAAQhWAAACgYg");
	this.shape.setTransform(6.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.1,7.6);


(lib.ы_задняяспереди2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AiDA0QgBgXAogFQBSgFBVhMQAcgYASAKQASAKgLAOQgKAOgdAYQglAegoAVQgkAVgsAIIgkAEQgaAAgBgXg");
	this.shape.setTransform(13.2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.4,15);


(lib.ы_задняяспереди1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AA8CRQhTgjhFg6QhJg0gUA+QgUA5AqBBQgcgOgUgQQgpgdgVg0QgSgwADg2QAEg3AYgpQAZgrApgOIAPAHQAVAOAbAhQAyA/BAA8QBaBVA5APQBmAZANgEQAXACAQAUQAQAVgeAKIgvAPQhPgEhUgjg");
	this.shape.setTransform(28.9,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECAD20").s().p("AiyA+Qgqg/AUg6QAUg9BJAzQBFA7BTAiQBUAjBPADQheAZhWAFIgnABQhjAAhEgfg");
	this.shape_1.setTransform(30.4,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.9,39.8);


(lib.ы_задняясзади3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECAD20").s().p("AhAAOQABgLAWgVIAVgSIBHAwQATAOgGAFQgGAGgmAAQhWAAACgXg");
	this.shape.setTransform(6.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.1,7.5);


(lib.ы_задняясзади2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECAD20").s().p("AiDA0QgBgXAogFQBSgFBVhMQAcgYASALQARAKgKANQgKAOgdAYQglAegoAWQgkAUgsAIIgkAEQgaAAgBgXg");
	this.shape.setTransform(13.2,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.4,14.9);


(lib.ы_задняясзади1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECAD20").s().p("Ai2BEIgBgBIgRgYQgGgbAFgXQAKgnAogSQAtgTBWAJQAmAZAbAIQBnAaAMgEQAXACAQASQAQAVgeALIgvAOQhJAThHAIQgnAEgjAAQg4AAgugKg");
	this.shape.setTransform(20.4,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.9,15.6);


(lib.ы_ухо2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD03").s().p("AACh0QBIglBIACIkjEvQADjCCQhKg");
	this.shape.setTransform(14.6,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,30.5);


(lib.ы_ухо1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECAD20").s().p("AhDBRQgShPASgvQAUg0AvgbQAhgUAsgEQgbBGhfDjQgNgdgJgng");
	this.shape.setTransform(7.7,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,29.8);


(lib.ы_нос = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#919191").s().p("AgBAYQgWgBgHgDQgMgFgCgPQgBgMAXgHQAMgEALAAQASgCAOAKQAMAIAAAKQAAAJgPAHQgNAFgOAAIgEAAg");
	this.shape.setTransform(6.8,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxAaQgtgrABgZQAEgyBEgCQAbgBAaAMQASAJAYATQA1ArhYBrQg0gjgkgig");
	this.shape_1.setTransform(9.4,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,19.1);


(lib.ы_голова = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE3B6").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape.setTransform(79.3,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE3B6").s().p("AgHAIQgDgDAAgFQAAgEADgCQADgEAEAAQAEAAAEAEQADACAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(77.1,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3B6").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_2.setTransform(74.4,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE3B6").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_3.setTransform(72,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3B6").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_4.setTransform(69.7,36.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE3B6").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_5.setTransform(67,43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A6501F").s().p("AhrCyICol+IAuARIibGJg");
	this.shape_6.setTransform(73.3,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCD03").s().p("AC7C5QhjgEiHgCIh1gBQgsgEAWgLQAWgLA0AGQDaALByg+QAogXAOgYQAMgXgQgHQgYgMg3AoQgMAIhDA6QihgFh8hHQhBgmhhhaQg5g0AAgaQgBgWAmAIQCYAlC+gSQBzgLBogcQAdAvAmAtQA4BCBAAvIgdBDQggBJgcAhIgDACIgRAFIhhgIg");
	this.shape_7.setTransform(39.3,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECAD20").s().p("AgggHQgmgtgdgvIAVgFQBMA0BeAxIADAIIABAEQALArgUA1QhAgvg3hBg");
	this.shape_8.setTransform(69.9,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,48.9);


(lib.ы_глаз = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A520").s().p("AgEAzIgHgDQgEAAgEgCIgHgEQgOgKgHgPIgFgOQgCgHADgMQAJggAcgDQAYgDAWARQAWARAAAcQgBAZgPAKIgIAEIgFACIgLACIgLABg");
	this.shape.setTransform(7.7,6.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(19).to({_off:false},0).to({_off:true},6).wait(5));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD971C").s().p("AAAAqIgHgDQgEAAgEgCIgHgEQgOgKgHgPQgEgIAAgGQAAgHAHgVQAGgWgBAkQgCAjAYAMQAXALAYgHQAXgHgPAKIgIAEIgFACIgLACIgLABg");
	this.shape_1.setTransform(6.8,8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(19).to({_off:false},0).to({_off:true},6).wait(5));

	// зрачок
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A4982").s().p("AgTAUQgIgJAAgLIABgIIASACIgDgTQAGgCAFAAQALAAAJAIQAIAJAAAKQAAALgIAJQgJAIgLAAQgLAAgIgIg");
	this.shape_2.setTransform(6.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(30));

	// белок
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAeQgMgMAAgSQAAgRAMgMQANgNARAAQARAAANANQANAMAAARQAAASgNAMQgNANgRAAQgRAAgNgNg");
	this.shape_3.setTransform(7.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(30));

	// мешок
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECAD20").s().p("AgbA9QgSgNgRgdQgNgUACggQACggAPgFQASgIAgAHQAnAHAYAZQARATAAAqQAAAvgfAFIgTABQgdAAgWgOg");
	this.shape_4.setTransform(7.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,15.1);


(lib.Rarmниз = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWD6QjMgbACjxQABhLAVhYIAWhIIFbBpQARAOAQBGQAIAjAFAfIAJAtQAHA1gLAqQgeBwiTAAQgeAAghgEg");
	this.shape.setTransform(22.5,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE3501").s().p("Ai5AXQBWh/CHgOQBEgHAyATQA1ApgiBgQgRAxgcAoQjOg7hrgmg");
	this.shape_1.setTransform(28.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.7,64);


(lib.Rarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCDAC").s().p("ABBElQgTgPgNgTIh2ipQgQgYgDAMQgDAJAFAQQAHATBPB2QAkA2gZALQgMAFgmg1Qgfgrhzi0QhbiOAIhyQACgkANgdIALgVQArAtBLAlQCIBCCXAsQBJAVAqAGQAfADgKAJQgJAIgrAJQgnAIhFgPQg/gOgkgUQBSBfBqCSQASAYAIAbQAIAbgJACQgNAFgfgiQgPgSgyhEQgpg3gQgPQgagbgJgFQgMgHgJAEQgJAGAGAOQAGAOAaAhQBkBvAmA+QASAbAEAPQAEATgRAFQgQAFgmgrQgbgfgdgqQgvhIgyg/QgRgVgIABQgGABAAALQAAAMAvA3IAzBBQApA1ALARQAdAsgdALIgFAAQgNAAgUgQg");
	this.shape.setTransform(28.6,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.1,61.9);


(lib.Larm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCDAC").s().p("AgcCUQgIgBADgkIAIhEQADgYAMhAIAKhEQAGhAAQA2QAGAUAEAmQAFA1gFAsQgFAvgYAmQgSAggLAAIgCgBg");
	this.shape.setTransform(34,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCDAC").s().p("AgrCtQgGgBABgRQAEgWABgMQACgiAchlQAIgcATg6IASg0IAGgQQAEgHADAJQAFAOgBA0QgDA/gMA+QgNA9gdAwQgYAngKAAIgBAAg");
	this.shape_1.setTransform(27,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCDAC").s().p("AhDCfQgJgDAUg4QAGgSAshiIAuhrQAQgrAJAKQAHAIgBAhQgCAdgLAzQgNA4gSApQgRAngkAgQgdAagKAAIgCAAg");
	this.shape_2.setTransform(19.4,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCDAC").s().p("AhgBoQgJgGAFgOQAGgPATgUQAZgbCSh/QATAMgjA9QgdAwghAlQgUAYgrARQgcAMgOAAQgGAAgDgCg");
	this.shape_3.setTransform(10.3,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.5,35.9);


(lib.шапка2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABD5FC").s().p("Ag7AKIAnAaIAJgZIAgALIgCgiIAaAHIAGgzIAJBCIgXABIgDAeIgiAAIgYAQg");
	this.shape.setTransform(9.2,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9A+QgagZAAglQAAgjAagaQAagaAjAAQAkAAAaAaQAaAaAAAjQAAAlgaAZQgaAagkAAQgjAAgagag");
	this.shape_1.setTransform(8.8,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.6,17.6);


(lib.шапка_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60C00").s().p("AjuCIQB3gkCThiQB5hNBKiQQAIAEAIAIQgtB0iMCnIiCCRQgfgaiDg7g");
	this.shape.setTransform(46.3,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE3501").s().p("AlWBZQAqhICJgsQAdgJDzg7QB2gcA/ggQAfgQAHgKIAPAHQhJCQh6BOQiUBih2AkQhzg0htgpg");
	this.shape_1.setTransform(34.3,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.3,44.8);


(lib.шапка_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8D5FE").s().p("AA8BXIhQgZIAxg9Ig3g7IiNgtICGAUIBVBMIgMg/QBPAnAxAgIhKBoQgEgEgegOg");
	this.shape.setTransform(31.4,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai2AmQAehcAehDQCQAlCVBKIAMA+IhWhLIiFgVICMAtIA4A8IgyA9g");
	this.shape_1.setTransform(18.3,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,28.7);


(lib.FUpperLeg22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D7883").s().p("Ah+B+QgNgNASh+IAVh8IDoBuIgqAhQgxApglAlQgoApgmAKQgLADgJAAQgTAAgNgMg");
	this.shape.setTransform(14.4,9.3,1,1,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,26);


(lib.FUpperLeg11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9D6FF").s().p("AiOgEIA1hEIjthdID/BHIAegnIFWCAIAZAYIhECTg");
	this.shape.setTransform(75.5,141.9,1,1,-20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlPhBIBKhwIJVDiIgeAmIj/hHIDtBeIg1BEg");
	this.shape_1.setTransform(33.7,138.2,1,1,-20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE3501").s().p("AmdGNQDzirEYtwIDZBMQBoEJgUFAQgUFBh9FHg");
	this.shape_2.setTransform(30.5,79.3,1,1,-20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D70D00").s().p("AgyAgQhGkJjJkdQD9kaC7EuQCtEQAZHSQANDpgXCzIj/ADQghllhFkKg");
	this.shape_3.setTransform(72.8,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.8,148.4);


(lib.FToes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B99C1").s().p("AiGgHIAPAAQAVAFBBgMQBVgQBZgnQAAA/gdAPQh+Azh+AKg");
	this.shape.setTransform(14.1,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD2A00").s().p("ABdAUQgdgQgMgBIgDgCIgIgBIgMgBIgIgCIgEABIgJgCIgMgBIgXgCIgMAEIgDAAIgJABIgHACIgTADIgFAEQgJAHgDAAIgDgBIAKgIQAKgGAKgFQATgIAZgEIACAAIAFgBIAIgBIAAAAIASgBIAQgBIABAAIARABQAQAFANAKIACABIAJAHQAIAJAGAMIgFgDg");
	this.shape_1.setTransform(16.7,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3703").s().p("AiCBHQADhSAtgoIADABQADAAAJgHIAFgEIAUgEIAGgCIAJAAIADAAIAMgEIAWABIANACIAJABIAEAAIAJABIALACIAIACIAEACQALAAAeAQIAEADIABABIAGAMIAAABIABABIAEANIACAIIACAFIABAIQhOAmhZARQgzAJgaAAQgJAAgHgBg");
	this.shape_2.setTransform(15.2,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,23.6);


(lib.FFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B99C1").ss(0.6,1,1).p("AAJg0QgbgRgGgZQgGgXAKgHQAIgGANAFIANASQAJAZgOAegAAKg0IABAAQAIAFAJAEQAXAIAVACAAJg0IAAABQAAAAABgBQABAAACAAQgBAAgBAAAAKg0QgBAAAAAAQAAAAAAAAQABAAAAAAgAAJgzQgBABgBACQgWAsgdAOQgaAOgBgUQAAgSASgQQARgPAdgFAAJgzQgJABgHAAQAHgCAJAAAg3iFQgTAaAZAgQARAXAZACAg+BRIAkA0AgtA6IAvAoAgYAiIAzAdAgKAJIA4AXAAGgUIA1AU");
	this.shape.setTransform(13.1,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.6,1,1).p("AACg/IA1AUAhCAmIAkA1AgxAPIAvApAgcgIIAzAcAgOghIA4AXAAPhaQAEACAFACQAXAIAVAC");
	this.shape_1.setTransform(14,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#306680").ss(0.6,0,0,4).p("AjOCHQAEgCAPAKQAPAKAEgCQAEgCAAgSQABgSADgCQAEgCAQAJQAPAKAEgDQAEgCAAgSQgBgSAEgDQADgCAQAJQAQAJAEgDQAEgCgCgSQgBgSAEgDQADgCARAIQAQAIAEgDQADgCgCgSQgCgSAEgDQADgCARAHQAPAHAEgDQADgCgCgSQgDgRADgDQADgCARAGQARAGAEgDQADgCgDgSQgEgSADgDQADgCASAFQARAGADgDQADgDgEgRQgEgSADgDQADgDASAFQARAFADgDQADgDgFgRQgFgSAEgDQADgDARAEQARAFAEgDQADgDgGgSQgFgRADgDQADgDASAEQARAEADgE");
	this.shape_2.setTransform(32.6,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B99C1").s().p("Aj8CuQgIgLgFgOQDkhPDxj4IgJgIIALgMIA8AtIgjAnQguAwg1AuQiqCSi5BJg");
	this.shape_3.setTransform(28.1,37.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD0F00").s().p("AiThHIBqhBQAlAyCQCJIAJAIQgkAngqAmg");
	this.shape_4.setTransform(33.6,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3703").s().p("Ai8BoIAHAAQAigdAfgrQAWgfAig7QAYgqgMg3IgQgvIAwgaIDbDQQhjBbhuBEQhhA8hVAeQgbhAAbg9g");
	this.shape_5.setTransform(20.4,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,54.6,57.3);


(lib.FCalf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5992B").s().p("ADTGvQgDgBgBgDIgCgDQgBgDACgDQABgDADAAQADgCADACQADABABADIAAACQACACgCADQAAADgDACIgDAAIgDAAgADHGPQgDgBgBgDIgBgDQgBgDACgDQABgDADAAQADgCADACQADABABADIABADQABADgCADQgBADgDABIgDAAIgDgBgAC8FxQgDgCgBgDIgBgDQgBgDABgCQACgDADgBQADgBACABQADACABADIABADQABADgBACQgCADgDABIgCAAIgDAAgACwFSQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgCADQAAADgDACIgDAAIgDAAgACkE0QgDgBgCgDIgBgCQgBgDABgDQABgDADgBQACgCADACQADAAACADIABACQABADgBADQgBADgDABIgDABIgCAAgACWEWQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgCADQAAADgDACIgDAAIgDAAgACJD5QgDgBgCgDIgBgCQgBgDABgDQABgDADgBQACgCADACQADAAACADIABACQABADgBADQgBADgDABIgDABIgCAAgAB7DbQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgCADQAAADgDACIgDAAIgDAAgABtC+QgDgBgBgDIgBgCQgCgDABgDQABgDADgBQADgCADACQADAAABADIABACQACADgBADQgBADgDABIgDABIgDAAgABfCgQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgCADQAAADgDACIgDAAIgDAAgABRCEQgDgBgBgDIgBgCQgCgDABgDQABgDADgBQADgCADACQADAAABADIABACQACADgBADQgBADgDABIgDABIgDAAgABDBnQgDgBgCgDIgBgCQgBgCABgDQABgDADgCQACgBADABQADABACADIABACQABACgBADQgBADgDACIgDAAIgCAAgAA0BKQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgCADQAAADgDACIgDAAIgDAAgAAmAuQgDgBgCgDIgBgCQgBgDABgDQABgDADgBQACgCADACQADAAACADIABACQABADgBADQgBADgDABIgDABIgCAAgAAXARQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgCADQAAADgDACIgDAAIgDAAgAAIgKQgDgBgBgDIgBgCQgCgDACgDQAAgDADgBQADgCADACQADAAABADIABACQACADgBADQgBADgDABIgDABIgDAAgAgGgnQgDgBgBgDIgBgCQgCgCABgDQABgDADgCQADgBADABQACABABADIABACQACACgBADQgBADgCACIgDAAIgDAAgAgVhDQgDgBgBgDIgBgCQgCgDACgDQAAgDADgBIAEgBIACABQADAAABADIABACQACADgCADQAAADgDABIgDABIgDAAgAgkhgQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgBADQgBADgDACIgDAAIgDAAgAgzh8QgDgBgBgDIgBgCQgCgDABgDQABgDADgBQADgCADACQADAAABADIABACQACADgBADQgBADgDABIgDABIgDAAgAhCiYQgDgBgBgDIgBgCQgCgDACgDQAAgDADgBQADgCADACQADAAABADIABACQACADgCADQAAADgDABIgDABIgDAAgAhTi5QgDgBgBgCIgCgDQgCgDABgDQAAgDADgCQACgBADAAQAEABABACIACADQACADgBADQAAADgDACIgEABIgCAAgAhkjXQgDAAgBgDIgCgFQgCgDACgCQABgDADgBQADgBADABQADACAAADIABABQACACgBAEQAAADgDABIgEABIgCAAgAh1j1QgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgBADQgBADgDACIgDAAIgDAAgAiFkRQgDgBgBgDIgBgCQgCgDABgDQABgDADgBQADgCADACQADAAABADIABACQACADgBADQgBADgDABIgDABIgDAAgAiVkuQgDgBgBgDIgBgCQgCgCABgDQABgDADgCQADgBADABQADABABADIABACQACACgBADQgBADgDACIgDAAIgDAAgAillKQgDgBgBgDIgBgCQgCgCACgDQAAgDADgCQADgBADABQADABABADIABACQACACgCADQAAADgDACIgDAAIgDAAgAi1lmQgDgBgBgDIgBgCQgCgDACgDQAAgDADgBQADgCADACQADAAABADIABACQACADgCADQAAADgDABIgDABIgDAAgAjFmDQgDgBgCgDIgBgCQgBgCABgDQABgDADgCQACgBADABQADABACADIABACQABACgBADQgBADgDACIgDAAIgCAAgAjWmfQgDgBgBgDIgBgCQgCgDABgDIADgDIALACIABACQACADgBADQgBADgDABIgDABIgDAAg");
	this.shape.setTransform(45.6,80.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5992B").s().p("AixA5QgEgBgBgCQgBgDABgDQABgDADgBIACgBQADgCACACQAEABABADQABACgBADQgBADgCACIgDABIgBAAIgEgBgAiRAwQgDgBgBgCQgCgDABgDQABgDADgBIACgBQADgBADABQACABACADQABACgBADQgBADgDACIgBABIgDAAIgDgBgAhyAoQgEgCgBgCQgBgDABgDQABgDAEgBIACgBQACgBADABQADABABADQACACgCADQgBADgCACIgDABIgCAAIgDAAgAhSAfQgDgBgBgDQgBgDABgDQABgDACgBIACgBQADgBADABQADABACADQABACgBADQgCADgCACIgCABIgDAAIgDAAgAgyAWQgEgBgBgDQgBgDABgCQABgEADgBIACgBQADgBADABQACABACADQABACgBADQgBADgCACIgDABIgCAAIgDAAgAgTAMQgDgBgBgCQgCgDACgDQABgDADAAIACgBQACgCADABQADABACACQABADgBADQgCADgCABIgCABIgDABIgDgBgAANADQgEgBgBgCQgBgCAAgDQACgDADgBIACgBQACgCADABQADABABADQABADgBADQgBACgCABIgCABIgDABIgCgBgAAsgFQgDgBgBgCQgCgDABgDQABgDADgBIACgBQACgCADABQADABACADQABADgBADQgBADgDABIgCABIgCABIgDgBgABLgOQgEgBgBgCQgBgDABgDQABgDADgBIACgBQADgCADABQACABACAEQABACgCADQgBADgCABIgCABIgDABIgCgBgABpgXQgEgBAAgCQgCgDABgDQABgDADgBIACgBQADgCADABQADACABADQABACgBADQgBADgCABIgCABIgDABIgDgBgACIggQgDgCgBgDQgBgDABgCQABgDAEgBIADgBQACgBAEACQACABABADQABADgBADQgCACgCABIgEABIgCAAIgDAAgACpgqQgDgBAAgDQgBgDABgDQACgDADgBIADAAQADgBACABQADABABAEQABACgBADQgCADgDABIgDABIgCAAIgEgBg");
	this.shape_1.setTransform(61.7,119.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D7883").s().p("AiGAiQh+mNgWhMIgFgRQgFgbAngPQAVgJATAHQAHAEAfAUIAiAmIAAAAIAVAXQBFBwChFhQA4B5B6EWIgBABIkRA2IiUnWg");
	this.shape_2.setTransform(42.9,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004650").s().p("AgaArQjWnHhWiQQD7E+DiGbQBLCIA5B2QAvBigEABIh1AfQijlmhIicg");
	this.shape_3.setTransform(57.1,81.1,1,0.785,0,8.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCAC").s().p("AgNCMQgIgBgGgZQgJgjgHgXQgShJgyh6QA+A6ChB7QhwBigMAAIgBAAg");
	this.shape_4.setTransform(63.5,147.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDAD8D").s().p("AAaBHQhRhBgsgoIgohlIAQgEQAUgFARgCQAoBRBhBsQAwA2ApAmQgFAHgKAFQgXgOhMg+g");
	this.shape_5.setTransform(62.2,137.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,29.1,69.9,132.6);


(lib.BUpperLeg22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D7883").s().p("AA7BwQiNgGgrgHQgrgIgcgQQgdgQAGgVQAGgXAogSQAogTAngWQAngVAugXQAPgIAegSIAlAqIBQBVQAhAkAUAfQAVAfgJACQgIACghAAQgpAAhNgDg");
	this.shape.setTransform(15.4,9.2,1,1,-37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-2.1,39.8,29.3);


(lib.BUpperLeg11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUBBIiwgsIBSiCIAgAJQBzAbB1ALQBUAIBbACIgZCiIgHAAQh1AAjEgtg");
	this.shape.setTransform(26.1,102.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9D6FF").s().p("AkeBzIAjijQB3ADCTgVQBKgKA1gLIB6ghIAXCdQimAzh5AUQhKANhbAAQg5AAhAgGg");
	this.shape_1.setTransform(77,102);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D70D00").s().p("AhHHPQiRhIhUgwQghgVhOg7QCeifCQjcQCQjdAnitICRBOIDBBdIlsNSg");
	this.shape_2.setTransform(68.8,51.9,1,1,-37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE3501").s().p("AjhEeQhZhUg5hCIgCgBIgPgSQCcg6CKhWQB4hNBOhOQA7g8A+hmQAggyATgnIBxA9QAKBsiqD+QipD8hxDAQhPg8hdhYg");
	this.shape_3.setTransform(35.3,59.8,1,1,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.7,114);


(lib.BToes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B99C1").s().p("AAQBzQhMhwgmh4QA9gJAPgDIAEAPQAAAWAZA8QAiBQA6BNQgWAFgSAAQgdAAgOgPg");
	this.shape.setTransform(9.9,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD2A00").s().p("AAHBMIAAgCIADgYQABgVgDgLIgBgNQgCgSgLgUIgEgLIgIgRIAAgCIgNgYIAAAAIAGAFIAFAEIADADIAHAHIADAEIAKARIAFALIAAAAQAGANAFAPIAGAUIAAgBIACAHIABAFIAAAAIAAABIADAOIABADIgCAQIgBACIgBAEIgBAEIgBACIAAAAIgBABIgJANIgKAFIABgMg");
	this.shape_1.setTransform(24.5,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3703").s().p("AAXB5IgEgFQgyhCgihPQgdhBAAgWQBUgRAwAlIANAZIAAABIAHASIAFALQALATACATIACAMQADAMgBAVIgEAYIAAABIAAANIAJgFIAKgNIAAAAIgBACIgQAXIgFAFIgDADIAAAAIAAAAIgKAIIgDACIgDACIAAAAIgFADIgDACIgBAAIgFADIgPAIIgCgCg");
	this.shape_2.setTransform(17.5,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.7,26.1);


(lib.BFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B99C1").ss(0.6,1,1).p("AA9AUQACgEACgEQAZguANgCQAOgCAIAHQAGAGgBAMIgBALQgCAMgGAHQgRAUgrgRQgLAUgIATAgQgyQgGAbA9AgQALAHALAEAgQgyQAAAAAAgBQACgJAMgGQAJgFAJACQAUADAKAQQAOAUABAsQgVgngYgOQgOgIgSgDgAg9gRIgJA6AgXAAIgYAzAhDgxQAcgEAXADAgDAEIgCBCAAdAOIgIA4AhVgeIgsAv");
	this.shape.setTransform(32,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.6,1,1).p("ACCggIgBALAhVgxIgsAvAgXgUIgYA0AAdgEIgIA3AgDgPIgCBCAA7AFQgKARgHARAg9gkIgJA6");
	this.shape_1.setTransform(32.5,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#306680").ss(0.6,0,0,4).p("AiyipQACADgGARQgGARADADQADADASgDQARgEADAEQADADgFARQgGARADADQADAEARgFQASgEADADQADADgFASQgFARADADQAEADARgFQARgFADADQADADgEARQgEASADADQAEADARgGQARgGADADQADADgDARQgDARADADQADACARgGQAQgHADADQAEADgDASQgCASADACQAEADAQgHQAQgIAEADQAEADgCARQgCASAEADQAEACAQgIQAQgIADADQAEACgBASQgBASAEACQADADAQgJQAQgIAEACQAEADgBARQAAASADADQAEACAQgJQAPgJAEACQAEADAAARQAAASAEAC");
	this.shape_2.setTransform(26.9,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B99C1").s().p("AA0B8Qi1iFhwijIASgiQAJgKANgJQA+BiBcBZQByBuCaBXIAGgKIAPAIIgfBFQhFgjhahDg");
	this.shape_3.setTransform(24.2,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD0F00").s().p("AiABLIDJjaIA4A8QgmAshnCtIgGAKQg5ggg1glg");
	this.shape_4.setTransform(48.2,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3703").s().p("AkBiOQA4goBCANIABAGQAlAcAwAUQAlAQA/ASQAPAFAPAAQADACAFAAQAFAAADgCQAZgCAbgMQAagMAQgPIBDBIIjLDaQjIiKhwixg");
	this.shape_5.setTransform(29.8,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.9,61.1,49.1);


(lib.BCalf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 105
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5992B").s().p("AB0CSQgDgBgBgDIgBgCQgCgCABgDQABgDADgCQADgBADABQADABABADIABACQABACgBADQgBADgCACIgDAAIgDAAgABfB1IgCgCQgCgCAAgDQAAgEACgCQACgCADAAQADAAADACIACACQACACAAAEQAAADgCACQgDACgDAAQgDAAgCgCgABLBbIgCgCQgCgCAAgDQAAgEACgCQACgCADAAQADAAADACIACACQACACAAAEQAAADgCACQgDACgDAAQgDAAgCgCgAA4BCIgCgCQgDgCAAgDQAAgEADgCQACgCADAAQADAAACACIACACQACACAAAEQAAADgCACQgCACgDAAQgDAAgCgCgAAjApIgCgCQgDgCAAgDQAAgEADgCQACgCADAAQADAAACACIACACQACACAAAEQAAADgCACQgCACgDAAQgDAAgCgCgAAOAQIgCgCQgDgCAAgDQAAgEADgCQACgCADAAQADAAACACIACACQACACAAAEQAAADgCACQgCACgDAAQgDAAgCgCgAgFgIIgCgCQgDgCAAgDQAAgDADgCQACgCADAAQACAAACACIACACQACACAAADQAAADgCACQgCACgCABQgDgBgCgCgAgbghIgCgCQgDgCAAgDQAAgEADgCQACgCADAAQADAAACACIACACQACACAAAEQAAADgCACQgCACgDAAQgDAAgCgCgAgxg6IgCgCQgDgCAAgDQAAgDADgCQACgCADAAQADAAACACIACACQACACAAADQAAADgCACQgCACgDABQgDgBgCgCgAhIhSIgCgCQgCgCAAgDQAAgEACgCQACgCADAAQADAAADACIACACQACACAAAEQAAADgCACQgDACgDAAQgDAAgCgCgAhfhrIgCgCQgDgCAAgDQAAgDADgCQACgCADAAQADAAACACIACACQACACAAADQAAADgCACQgCACgDABQgDgBgCgCgAh4iDIgCgCQgDgCAAgDQAAgDADgCQACgCADAAQADAAACACIACACQACACAAADQAAADgCACQgCACgDABQgDgBgCgCg");
	this.shape.setTransform(38.3,98.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 104
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5992B").s().p("AmTF+QgDgBgCgDQgBgDABgDQABgDADgBIACgBQACgCADABQADABACADQABADgBADQgBADgDABIgCABIgDABIgCAAgAl4FsQgDAAgBgDQgCgDACgDQAAgDADgBIACgBQADgCADABQADABABADQACADgBADQgBADgDABIgCABIgDABIgDgBgAldFbQgDgBgBgDQgCgCACgDQAAgDADgCIACgBQADgBADABQADABABADQACACgBADQgBADgDACIgCABIgDAAIgDAAgAlCFJQgDgBgBgDQgCgCACgDQAAgDADgCIACgBQADgBADABQADABABADQACACgBADQgBADgDACIgCABIgDAAIgDAAgAknE2QgDAAgBgDQgCgDACgDQAAgDADgBQACgCAEgBQADABACACQACACAAADQAAADgCACIgEADIgDABIgDgBgAkQEiQgCgCAAgDQAAgDACgCIACgCQACgCAEgBQADABACACQACACAAADQAAADgCACIgCACQgCACgDAAQgEAAgCgCgAj2EPQgCgCAAgDQAAgDACgCIACgCQACgCAEgBQADABACACQACACAAADQAAADgCACIgCACQgCACgDABQgEgBgCgCgAjbD7QgCgCAAgDQAAgEACgCIACgCQACgCADAAQADAAACACQACACABAEQgBADgCACIgCACQgCACgDAAQgDAAgCgCgAjBDmQgCgCAAgDQAAgDACgCIACgCQACgCADAAQADAAACACQACACAAADQAAADgCACIgCACQgCACgDAAQgDAAgCgCgAinDSQgCgCgBgEQABgDACgCIACgCQACgCADAAQADAAACACQACACAAADQAAAEgCACIgCACQgCACgDAAQgDAAgCgCgAiOC8QgCgCAAgDQAAgDACgCIACgCQACgCADAAQAEAAACACQACACAAADQAAADgCACIgCACQgCACgEABQgDgBgCgCgAh0CnQgCgCgBgDQABgEACgCIACgCQACgCADAAQADAAACACQACACABADQgBAEgCACIgCACQgCACgDAAQgDAAgCgCgAhbCRQgCgCAAgDQAAgDACgCIACgCQACgCADgBQADABACACQACACABADQgBADgCACIgCACQgCACgDABQgDgBgCgCgAhDB7QgCgCAAgDQAAgDACgCIACgCQACgCAEAAQADAAACACQACACAAADQAAADgCACIgCACQgCACgEABQgDgBgCgCgAgrBlQgCgCAAgDQAAgDACgCIACgCQACgCADgBQAEABACACQACACAAADQAAADgCACIgCACQgCACgEAAQgDAAgCgCgAgSBOQgCgCAAgDQAAgDACgCIACgCQACgCADAAQADAAACACQACACABADQgBADgCACIgCACQgCACgDABQgDgBgCgCgAAEA4QgCgCAAgEQAAgDACgCIACgCQACgCAEAAQADAAACACQACACAAAEQAAADgCACIgCACQgCACgEAAQgDAAgCgCgAAdAhQgCgCgBgDQABgEACgCIACgCQACgCADAAQADAAACACQACACAAADQAAAEgCACIgCACQgCACgDAAQgDAAgCgCgAAxAMQgCgCAAgDQAAgDACgCIACgCQACgBAEgBQADABACABQACACAAADQAAADgCACIgCACQgCACgEAAQgDAAgCgCgABIgKQgCgCAAgDQAAgDACgCIACgCQACgCADAAQAEAAACACQACACAAADQAAADgCACIgCACQgCACgDABQgEgBgCgCgABfghQgCgCAAgDQAAgDACgCIACgCQACgCAEgBQADABACACQACACAAADQAAADgCACIgCACQgCACgDAAQgEAAgCgCgAB2g4QgCgCAAgDQAAgDACgCIACgCQACgCADAAQAEAAACACQACACAAADQAAADgCACIgCACQgCACgEABQgDgBgCgCgACNhPQgCgCAAgEQAAgDACgCIACgCQACgCAEAAQADAAACACQACACAAAEQAAADgCACIgCACQgCACgDAAQgEAAgCgCgACkhnQgCgCgBgDQABgDACgCIACgCQACgCADgBQADABACACQACACAAADQAAADgCACIgCACQgCACgDAAQgDAAgCgCgAC6h/QgCgCAAgDQAAgDACgCIACgCQACgCAEAAQADAAACACQACACAAADQAAADgCACIgCACQgCACgDABQgEgBgCgCgADQiWQgCgCAAgEQAAgDACgCIACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACIgCACQgCACgEAAQgDAAgCgCgADmiuQgCgCAAgDQAAgEACgCIACgCQACgCAEAAQADAAACACQACACAAADQAAAEgCACIgCACQgCACgDAAQgEAAgCgCgAD8jGQgCgCgBgDQABgEACgCIACgCQACgCADAAQADAAACACQACACABAEQgBADgCACIgCACQgCACgDAAQgDAAgCgCgAERjeQgCgCAAgEQAAgDACgCIACgCQACgCAEAAQADAAACACQACACAAAEQAAADgCACIgCACQgCACgEAAQgDAAgCgCgAEnj3QgCgCAAgEQAAgDACgCIACgCQACgCAEAAQADAAACACQACACAAADQAAAEgCACIgCACQgCACgDAAQgEAAgCgCgAE+kPQgDgBgBgDQgBgDACgDIABgCQABgDADAAQADgCADACQADABABADQABADgCADIgBACQgBADgDAAIgDABIgDgBgAFOkkQgCgCAAgEQAAgDACgCIABgBQACgCADAAQAEAAACACQACACAAADQAAAEgCACIgBABQgCACgEAAQgDAAgCgCgAFik8QgCgCAAgDQAAgDACgCIACgCIAEgCIACAAIABAAIAEACQACACAAADQAAADgCACIgCACQgCACgEABQgDgBgCgCgAF3lVQgCgCAAgDQAAgEACgCIACgCQACgCAEAAQADAAACACQACACAAAEQAAADgCACIgCACQgCACgDAAQgEAAgCgCgAGLluQgCgCAAgEQAAgDACgCQACgDADgBQADgBACACQADABABADQABADgBADIgDAEQgCACgDAAQgEAAgCgCg");
	this.shape_1.setTransform(69.2,54.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004650").s().p("AlvFTQEFlhDgjZQCQiLBqg+IgSAjQiwFRj7EYQh+CMhbBJg");
	this.shape_2.setTransform(76.6,73.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D7883").s().p("AnaESQHznECZh+QCah9AkgdQAkgcAWAAQAVAAAPARQAOAQAAAVQAAAjgYA7IgbA1QhqA/iQCKQjhDZkEFig");
	this.shape_3.setTransform(70.9,58.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCAC").s().p("Ag+BUQg9gwgBgIQgBgHAWgMQAhgPAVgMQBFgjBqhMQgrBKhUC5Ig9gug");
	this.shape_4.setTransform(12.5,115.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDAD8D").s().p("Ah3CaQAIgYAshZQAuheAdgzIBZg9IAIAPIAPAiQhGA5hUB2QgqA7gcAwQgIgDgHgJg");
	this.shape_5.setTransform(24.3,113.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.9,118.4,120.1);


(lib.s_подарок = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93C01C").s().p("AjWCCIF/k5IAuA4Il/E3g");
	this.shape.setTransform(30.2,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93C01C").s().p("AiUi5IA6gmIDwGNIgwAyg");
	this.shape_1.setTransform(33.6,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9195B").s().p("AjICYIEAjbIiejTIAfgVIEQFAIkQEXg");
	this.shape_2.setTransform(40,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3A7A").s().p("AjjgLIEojMICfDUIkADbg");
	this.shape_3.setTransform(22.8,31.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3A7A").s().p("AjFibIBZhFIEyF0IhSBNg");
	this.shape_4.setTransform(48.7,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.6,68.3);


(lib.п7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B64E93").s().p("AjYB6IBThbQBchhArgiQA8gvAxAHQA6AJAYBWQAVBMADA/QABAfgDAQgAiBBXID1ABIAlg2IhVgtg");
	this.shape.setTransform(60.7,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64E93").s().p("AjRBAIBbhJIABgBQBlhPAugbIABgBQA/gjAtANIABAAQA2ARALBVQAJBMgHA8IAAABQgDAdgFAPIgDAAImVhQgAh5AqIDpAlQAWgXAUgYIhLg1IjIA/g");
	this.shape_1.setTransform(59.9,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B64E93").s().p("AjSAGIBmg5IABgBQBtg9AygTIABgBQBDgZAqAVIABAAQAyAZgDBUQgDBLgQA7IAAAAQgHAbgHAOIgDABImAiOgAh4AAIDdBHIAxgnIhAhAIjOAgg");
	this.shape_2.setTransform(59.8,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B64E93").s().p("AjWgxIBugqIABgBQB4gsA1gLIABAAQBHgOAnAbIABAAQAtAhgQBUQgPBKgZA4QgMAagJANIgCABIlqjKgABWBAIA4geIg2hMIjUAAIDSBqg");
	this.shape_3.setTransform(60.1,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B64E93").s().p("AjdhnIB4gaQCDgbA3gDQBMgEAkAiQArApgeBUQgbBKgjA1QgRAagMAMgABFA8IA/gWIgshXIjZghg");
	this.shape_4.setTransform(60.6,36.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B64E93").s().p("AjWCKIAoguIAlgtIABgDQBShfApglIAFgEIABgBQA1guAvACIAFAAQA5AGAbBRIABAEQAZBKAGA+QACAegCAQIAAABImqABIgCAAgAiBBjQB6gFB5gHIAig2IhXgoIi+Bqg");
	this.shape_5.setTransform(60.4,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B64E93").s().p("AjQCeIAfg0IAegyIABgDQBEhqAjgqIADgEIABgBQAug1AugDIAGgBQA3gBAmBLIACADQAjBGAOA7QAGAdABARImiA/IAAAAgAiDBrIDsguIAZg6IhagbIirCDg");
	this.shape_6.setTransform(59.7,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B64E93").s().p("AjNCrIAag2IAZg3IACgDQA5hxAfgtIADgEIABgCQApg4AugIIAFgBQA3gFAtBHIACADQApBCAUA5QAJAdACAQIAAAAImbBoIAAAAgAiFBxIDnhEIAUg9IhegUIidCVg");
	this.shape_7.setTransform(59.2,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B64E93").s().p("AjMCxIAYg3IAXg4IABgDQA1h2AdgvIACgEIABgBQAng7AugJIAFgBQA2gIAxBFIADAEQArA/AXA4QALAdADAQImZB9IAAgBgAiGB0IDlhQIARg+IhfgPIiXCdg");
	this.shape_8.setTransform(58.9,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B64E93").s().p("AigBFQAwh8AbgxQAmhCAvgMQA5gOA3BHQAxA/AaA6QANAbADAQImVCSgAiHB3IDihbIAPhAIhhgLg");
	this.shape_9.setTransform(58.7,8.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B64E93").s().p("AjPCkIAdg0IAcg1IABgDQA/huAggrIAEgEIABgCQAsg2AugGIAFAAQA3gDApBJIADADQAlBEARA5QAIAdABARImeBUIgBgBgAiEBuIDqg5IAWg7IhcgYIikCMg");
	this.shape_10.setTransform(59.4,10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B64E93").s().p("AjSCXIAigyIAggwIACgDQBIhnAlgoIADgEIABgBQAxgyAvgCIAFAAQA4ABAiBNIACAEQAfBGALA9QAFAdAAAQIAAABImkAqIgBAAgAiDBoQB3gQB4gSIAcg5IhaggIixB7g");
	this.shape_11.setTransform(59.9,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B64E93").s().p("AjUCQIAlgwIAiguIACgDQBNhjAngnIAEgEIABgBQAzgwAvAAIAFAAQA4AEAfBPIACADQAcBJAIA9QAEAegCAQIAAABImmAWIgCgBgAiCBmQB5gLB4gNIAfg3IhYgkIi4Bzg");
	this.shape_12.setTransform(60.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_5}]},11).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B64E93").s().p("AjDABQCEiMB9AQQAxAHAgA9QASAiAUA9QAMAeACAfQABAPgBAJQhUggkyhcgACLBMIhWiaIiJAZIAfAtIDABUg");
	this.shape_13.setTransform(19.6,14.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B64E93").s().p("AjEAiQByiXB7ADQAxACAmA4QAVAfAaA6QAPAcAFAeQADAOgBAKQhVgXk0g6gAhdgeIAiAnIDEA/IhjiNg");
	this.shape_14.setTransform(19.5,16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B64E93").s().p("AjGBEQBgihB7gLQAwgEArA0QAZAdAfA2QASAaAIAdQAFAOAAAJQhWgNk3gYgAhogGIAmAjIDKApIhziCg");
	this.shape_15.setTransform(19.6,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B64E93").s().p("AAAhhQAvgJAxAvQAbAaAnAzQAVAXALAcQAGAOABAKQhYgEk5AKQBPisB5gYgAhyAOIAqAfIDOATIiBh1g");
	this.shape_16.setTransform(19.6,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B64E93").s().p("AgVhsQAvgOA3AqQAeAXAsAwQAYAVAOAbQAIANACAKQhZAGk8AsQA8i2B5gmgAh8ARIAuAbIDRgEIiNhog");
	this.shape_17.setTransform(19.6,22.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B64E93").s().p("Ai6gcQCPh9B5AcQAvALAaBAQAOAiAOA/QAJAegBAeQgBAPgCAJQhPgokjh3gAhIhGIAaAuIC0BlIhFifg");
	this.shape_18.setTransform(20.7,14.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B64E93").s().p("Aiyg5QCbhuB0ApQAuAPATBCQAKAkAIA+QAFAfgEAeQgCAPgDAJQhKgwkUiTgAgognICoB2Ig0ikIiJgDg");
	this.shape_19.setTransform(21.9,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B64E93").s().p("AirhUQCmheBwA0QAsAUANBEQAGAlABA/QADAfgHAeQgEAPgEAIQhFg3kFivgAgjg0ICcCHIgjiqIiJgQg");
	this.shape_20.setTransform(23.2,12.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B64E93").s().p("AinhvQCwhOBtBAQAqAZAGBFQADAlgFBBQgBAggKAeQgFAOgFAIQhAg+j2jMgABvBYIgSiwIiJgeIALA1ICQCZg");
	this.shape_21.setTransform(24.8,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B64E93").s().p("AiphdQCphZBvA4QAsAWAKBEQAGAkgCBBQACAfgIAeQgEAOgFAJQhDg6kAi4gAghg5ICXCNIgdisIiJgUg");
	this.shape_22.setTransform(23.6,12.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B64E93").s().p("AithLQCihkBxAxQAtASAPBDQAIAlADA/QADAfgGAeQgDAOgEAJQhGg0kKimgAgkgwICfCCIgoipIiJgLg");
	this.shape_23.setTransform(22.7,12.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B64E93").s().p("Ai3gmQCTh4B3AgQAvANAXBAQANAjAMA/QAIAegCAeQgBAPgDAJQhNgqkeiBgAhEhMIAYAvICwBrIg/ihg");
	this.shape_24.setTransform(21.1,13.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B64E93").s().p("Ai8gSQCLiDB5AZQAwAJAdA/QAPAiAQA+QAJAeAAAfQAAAPgBAJQhRglknhugAhLhBIAbAuIC3BgIhJieg");
	this.shape_25.setTransform(20.3,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},11).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B64E93").s().p("AlHgdIKagpIAEBiIqtArg");
	this.shape_26.setTransform(39.1,61.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B64E93").s().p("AhMFLIA2qhIBjALIg7Khg");
	this.shape_27.setTransform(35.4,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[]},30).wait(1));

	// Layer 3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_28.setTransform(68.6,87.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_29.setTransform(55.5,87.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_30.setTransform(42.3,87.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_31.setTransform(29.2,87);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_32.setTransform(16.1,86.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_33.setTransform(67,74.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_34.setTransform(53.9,74.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_35.setTransform(40.8,74.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_36.setTransform(27.7,74.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_37.setTransform(14.5,74);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_38.setTransform(68.2,48.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_39.setTransform(55.1,48.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_40.setTransform(42,47.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_41.setTransform(28.9,47.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DEC806").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_42.setTransform(15.7,47.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2D7983").s().p("AlWAtIAJiTIKkA8IgKCRg");
	this.shape_43.setTransform(41.4,34.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DEC806").s().p("AgMANIAGgcIADgBQAGAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgGAAQgFAAgEgEg");
	this.shape_44.setTransform(3.3,86.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#014751").s().p("AAFEOIAqnDIlFg9IAHg6IIdAvIAJIqg");
	this.shape_45.setTransform(43.6,66.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C7983").s().p("AjoDwIADgLQAEAEAFAAQAHAAAFgFQAFgFAAgHQAAgHgFgFQgFgFgHAAIgDABIBhnmIApADIgHA6IFFA+IgqHCg");
	this.shape_46.setTransform(25,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[]},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.4,96.9);


(lib.п6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#527DA4").s().p("Aq1hMIAkh4IVHFcIgCAtg");
	this.shape.setTransform(72.2,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#527DA4").s().p("Ag8DYIAcm9IA/ALIAeHAg");
	this.shape_1.setTransform(49.4,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD13D").s().p("ApvCCIElmNIO6CeIgXF5g");
	this.shape_2.setTransform(80.4,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEF5B").s().p("AjrDQICAmyIFXA5IkkGMg");
	this.shape_3.setTransform(23.6,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.8,59.4);


(lib.п5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A33A7F").s().p("AALGhIEPphIsyiuIACh9IQvCXIj4NAg");
	this.shape.setTransform(57.8,69.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B74E93").s().p("AmJE3IgSr+IBHAKIgCB9ILyCnIkPJhg");
	this.shape_1.setTransform(44.8,66.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A33A7F").s().p("AAgCVIgEjpQiggwhfgeIHHAtIhVEYg");
	this.shape_2.setTransform(100.3,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B74E93").s().p("An7BAIgKkBIMHBMQBfAeCgAwIAFDpg");
	this.shape_3.setTransform(51.8,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.1,119.2);


(lib.п4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E7CA5").s().p("AmjmnIMbA/IAsL2IqhAag");
	this.shape.setTransform(57.6,73.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D9AC3").s().p("AnbkwIGPkYIIWBBIASE4Isbg/ICmNOIjYAJg");
	this.shape_1.setTransform(47.6,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.6,117);


(lib.п3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D47C00").s().p("ADcHtIBQskIs5hQIAOh2IQOB9IgKN+g");
	this.shape.setTransform(63,51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9501").s().p("AnQGLIBotFIM5BQIhQMlg");
	this.shape_1.setTransform(46.5,56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.6,102.1);


(lib.п2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEF5A").s().p("Al9CIQh6hXhSgyQATgPAkgNQAvgTAvgBQAsgCAXA0QALAbADAbQAJgdAhgyQArhEA5g4QBvhrBTBqQBIBnBAAtQApAcBIAWQA4ASAogoQAmgngMg3QgMgxAlAFQAIACA8AYQAdAMAqAZQAtAaAZAUQgNgGgbgGIgZgFIAGAKQAHANAGARQgdgahkg8QgYgOgJAUQgGAOAAAnQAAAggtAjQgvAig8ALQg7AKgxgpQgtglgvhVQgohLg2gHQgsgHhBApQgxAegoA4IgfAxQBThpBcAJQA/AHBGA8QAdAZAQAlQAJATAHAYQhihRhDghQhCgggpAKQgkAJgcAmQgNASgfA7QB+hqA8ARQAoAMAGA+QADAigLArQgFAWgGAPgAkfBxICPAkIAagbQgdgngJgCIgBAAQgMAAh2AggAmGBYIgbhgIhTgEIAMAaIBiBKg");
	this.shape.setTransform(116.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEF5A").s().p("Al3CPQh8hThTgxQASgOAkgOQAugUAvgDQArgDAYAzQAMAbAEAaQAIgdAggyQAphFA3g5QBrhuBWBnQBLBkBAArQAqAbBIAVQA5AQAmgpQAlgogOg3QgNgwAmAEQAHACA9AWQAeALAqAYQAtAYAZAUQgNgGgbgFIgZgEIAHAKQAHANAGAQQgegZhkg5QgZgNgIATQgGAPACAnQABAggtAjQgtAkg8AMQg6AMgygoQgugjgxhTQgqhKg2gGQgsgFhAAqQgvAggnA5IgdAxQBPhqBcAGQA/AFBHA6QAeAYARAkQAJATAIAXQhkhOhDgfQhDgegpAMQgkAKgaAnQgNARgcA8QB6htA8AQQApALAGA9QAFAhgJAsQgFAWgGAPgAkbB2ICQAgIAZgdQgegmgJgBIAAAAQgNAAh1AkgAnmAZIBkBGIgdhfIhTgBg");
	this.shape_1.setTransform(115.6,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEF5A").s().p("AlyCWQh9hPhVguQASgQAjgPQAugVAugEQArgEAaAzQANAZAFAbQAGgdAeg0QAnhFA2g7QBohwBYBkQBNBiBCApQArAaBIASQA5APAlgrQAjgogPg2QgPgwAmADQAIABA9AVQAdAKArAWQAuAYAaASQgOgFgbgEIgZgEIAHAKQAIANAGARQgegahmg1QgZgNgHAUQgFAOACAoQACAggrAkQgtAlg7AOQg6ANgzgmQgugigzhSQgshIg2gEQgtgEg+AsQguAhglA5IgcAzQBMhtBcAEQA/ADBJA4QAeAXASAjQAKATAIAXQhmhLhEgdQhDgcgoANQgkALgZAnQgMASgbA9QB2hxA9AOQApAKAJA9QAEAhgIAsQgEAVgFAQgAkWB6ICQAcIAYgdQgfglgJgBIAAAAQgLAAh1AngAnwAJIANAaIBmBEIghhfg");
	this.shape_2.setTransform(115,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEF5A").s().p("AltCeQh/hMhVgsQASgQAhgQQAugWAtgFQAsgFAbAxQAOAaAEAaQAHgdAcg0QAlhHA0g8QBkhzBbBiQBQBfBCAnQAsAZBIAQQA6ANAjgqQAigqgQg2QgQgvAmACQAHABA+ASQAeAKArAVQAuAWAaASQgNgFgbgEIgZgCIAGAJQAJANAHAQQgfgYhogzQgZgLgGATQgFAPADAnQADAggqAlQgrAmg7APQg5APg0gkQgvggg2hQQgthHg3gDQgsgDg8AuQguAigjA5IgaA0QBIhuBdABQA+ABBKA2QAfAWATAjQAKASAJAXQhnhIhFgbQhEgagoAOQgjALgYApQgLASgaA9QB0h0A9ANQAoAJAKA8QAHAhgIAsQgDAWgFAPgAkSB/ICRAYIAXgeQgggkgJgBIAAAAQgLAAh0ArgAnuAUIANAaIBoBAIgjhdg");
	this.shape_3.setTransform(114.4,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEF5A").s().p("AloClQiAhIhWgpQARgRAggRQAtgXAugGQArgHAcAxQAPAZAFAaQAGgdAbg1QAihHAyg+QBih1BcBeQBTBdBDAmQAsAYBKANQA5ALAigrQAhgrgSg1QgRgvAlABQAIABA+ARQAeAIAsAUQAuAVAbARQgNgFgbgDIgagBIAIAJQAJAMAHARQgggYhogvQgagLgGAUQgEAOAEAnQAEAggpAmQgqAng6ARQg5ARg1gjQgvgfg4hOQgwhGg2gBQgsgBg8AvQgsAjghA6IgZA1QBFhwBdgCQA+AABLA0QAgAVAUAiQAKASAKAWQhphEhFgaQhFgYgoAPQgiAMgYAqQgKASgYA+QBwh3A+ALQAoAIAMA8QAHAggFAsQgEAWgEAPgAkOCEICSAUIAWgeQghgjgJgBIAAAAQgLAAhzAugAntAgIAPAZIBpA9Iglhcg");
	this.shape_4.setTransform(113.9,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFEF5A").s().p("AliCsQiChEhYgnQARgRAhgSQArgZAugHQAqgIAfAwQAOAZAHAZQAEgdAZg2QAihHAvg/QBeh4BgBcQBUBaBGAjQAsAXBKALQA5AKAhgsQAggsgUg1QgTguAmAAQAHABA/APQAeAIAtASQAvATAbARQgOgFgagCIgagBIAHAJQAJAMAJARQghgXhpgsQgagLgGAUQgEAPAFAnQAGAggpAnQgoAog6ATQg4ASg2giQgxgdg5hNQgyhEg2ABQgsgBg6AxQgrAlggA7IgYA1QBDhyBcgEQA+gCBNAyQAgAUAUAhQAMASAKAWQhrhChGgXQhFgWgoAQQghANgWAqQgKATgWA+QBsh6A9AKQApAGAOA8QAIAggEAsQgDAWgDAPgAkJCJICRAPIAWgfQgigigJAAIAAAAQgKAAhyAygAnrArIAQAZIBrA6Igphcg");
	this.shape_5.setTransform(113.3,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFEF5A").s().p("AlcCzQiFhAhZgkQARgSAggTQArgaAtgJQArgIAfAvQAPAYAIAaQADgeAYg3QAehIAwhAQBah7BiBZQBXBYBFAiQAuAVBKAKQA5AHAggtQAegtgUg0QgVgtAngBQAHAAA+ANQAfAHAtARQAwATAbAPQgNgEgbgBIgZgBIAHAJQAKAMAIAQQgigWhrgpQgagKgEAVQgEAOAHAnQAFAggmApQgoAog5AVQg4ATg3gfQgxgdg8hLQgzhCg2ACQgtABg4AyQgqAmgfA8IgVA2QA/h0BcgHQA9gEBQAwQAfATAXAhQALARALAWQhug+hGgWQhFgUgnARQgiAOgUArQgKATgUA/QBph9A9AHQApAGAQA7QAJAggDAsQgDAWgDAQgAkECNICSAMIATgfQgighgJgBQgJAAhxA1gAnpA2IAQAYIBsA4Igrhag");
	this.shape_6.setTransform(112.7,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFEF5A").s().p("AlWC8QiHg8haghQAQgTAfgUQArgbAtgLQAqgJAhAvQAQAXAJAaQACgeAWg4QAdhJAthBQBWh+BlBXQBZBWBIAfQAuATBJAJQA6AGAfgvQAdgugWgzQgWgtAmgCQAIAAA+AMQAgAGAtAPQAwARAcAPQgOgDgbgBIgZAAIAIAJQAJALAJAQQghgVhsgmQgbgJgEAVQgDAOAHAnQAGAggkAqQgnApg5AWQg3AVg3geQgzgag+hKQg1hAg2ADQgtACg3A0QgoAngdA9IgVA2QA9h1BagKQA/gFBQAtQAhASAWAgQAMARAMAVQhvg7hHgSQhGgTgnASQghAQgTAqQgJAUgTA/QBmh/A+AFQApAEARA7QAKAhgCArQgBAWgEAQgAkACUICTAHIATggQgkgfgJgBQgJAAhwA5gAnnBEIARAXIBuA0IgthZg");
	this.shape_7.setTransform(112.1,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEF5A").s().p("AlSDLQiHg5hcgfQAQgTAegVQAqgcAtgMQAqgLAiAuQASAXAIAZQACgeAVg4QAahKArhCQBTiBBnBUQBdBTBHAeQAwASBKAGQA6AFAdgwQAcgugYgzQgXgtAmgDQAHAABAAKQAfAFAuAPQAwAPAeAOQgPgDgbAAIgZABIAIAJQAKALAJAQQgigVhugjQgagIgEAVQgDAPAKAmQAGAggjArQgmAqg4AYQg2AWg5gcQgzgZhAhIQg3g/g2AEQgtAEg2A2QgoAogbA+IgTA3QA6h4BbgMQA9gHBSArQAiARAXAgQANAQAMAVQhxg3hIgSQhGgQgnASQggARgSAsQgJAUgQBAQBhiDA/AEQAoADAUA6QAKAggBAsQAAAWgDAQgAj7CgICSADIASggQglgfgIgBQgJABhuA8gAnlBWIASAXIBuAxIgvhYg");
	this.shape_8.setTransform(111.6,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEF5A").s().p("AoyCEQAPgTAegWQAqgeAsgNQAqgMAjAtQASAXAJAZQACgeASg5QAZhLAphEQBQiDBqBRQBfBRBIAbQAvASBLAEQA7ADAbgxQAbgvgagzQgXgrAlgFQAIAABAAIQAfAEAvAOQAxAOAdANQgOgDgbABIgaACIAJAIQAKALAKAPQgjgThvggQgbgHgDAUQgCAQAKAlQAIAggjAtQgkArg4AZQg2AYg6gaQgzgYhDhGQg5g+g2AGQgsAFg1A3QgmApgZA/IgSA4QA2h5BbgPQA9gJBTApQAiAQAZAfQANAQANAVQhzg1hIgPQhHgOgmATQggASgRAtQgIATgPBBQBeiGA/ACQApACAVA6QALAgABAsQAAAWgCAQIkeAGQiKg1hcgdgAnkBkIATAXIBxAuIgyhWgAj3CoICTgBIARghQglgegJAAQgJABhtA/g");
	this.shape_9.setTransform(111,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFEF5A").s().p("AovCVQAOgUAegYQAogeAsgPQAqgNAlAsQASAWAKAZQABgeARg6QAXhLAnhFQBMiGBsBPQBiBOBKAZQAvAQBMACQA6ACAbgyQAZgwgbgyQgZgrAmgGQAHgBBBAHQAfAEAvALQAyANAdAMQgOgCgbACIgZACIAIAIQALALAKAPQgkgShvgdQgcgHgCAVQgCAPALAmQAJAgghAuQgkAsg3AbQg2AZg6gZQg0gWhFhFQg7g8g2AIQgsAFgzA6QgmAqgXBAIgRA5QAzh8BbgRQA9gLBVAnQAiAPAaAeQANAQAOAVQh0gyhJgNQhIgNglAVQggATgRAtQgHAUgMBCQBaiJA+AAQAqAAAXA6QAMAgACAsQABAWgCAQIkeAOQiNgxhcgagAnhByIATAXIByArIg1hWgAjzCwICUgGIAQghQgngdgIAAQgJABhsBDg");
	this.shape_10.setTransform(110.4,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFEF5A").s().p("AotB4QAPgTAfgVQApgcArgMQAqgMAiAtQASAXAIAZQACgeAUg4QAZhJAqhCQBRiABnBSQBcBRBIAdQAuASBJAFQA6AEAcgvQAbgvgYgyQgXgrAmgEQAHAAA+AJQAgAFAtAOQAxAOAcAOQgOgDgbAAIgZABIAIAJQALALAIAPQghgThtgiQgagIgEAVQgDAPAKAlQAHAggjArQgkAqg4AYQg2AXg4gcQgzgYhAhHQg3g+g2AGQgrADg1A2QgnAogaA+IgSA3QA3h4BagMQA9gIBRAqQAhAQAYAgQAMAQANAUQhwg2hHgQQhGgPgmASQggARgRAsQgJATgPBAQBfiDA9AEQApACAUA5QAKAgAAAsQAAAVgDAQIkZABQiHg3hbgegAj3ChICRACIASggQglgfgIAAQgJABhtA8gAnfBaIASAXIBuAwIgwhXg");
	this.shape_11.setTransform(110.7,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFEF5A").s().p("AlWCtQiBhAhWgkQAQgSAggSQAqgZAsgJQAqgHAeAuQAPAYAHAZQAEgdAXg2QAfhFAug+QBZh4BfBZQBVBWBDAiQAsAVBIAKQA5AIAfgsQAegrgUgzQgTgtAlAAQAHAAA9AOQAeAHAsARQAuASAbAPQgOgDgagCIgZgBIAIAJQAJAMAIAQQgggWhogqQgZgJgFATQgEAPAGAmQAFAfgmAoQgnAng4ATQg3ASg1gfQgwgcg5hKQgyhBg1ABQgrAAg4AxQgpAkgeA7IgWA0QA/hwBZgGQA9gDBMAvQAgATAUAgQALARALAWQhqg+hEgWQhEgUgmAQQghAOgVApQgJATgUA9QBnh5A8AIQAoAFAPA6QAIAggEArQgCAVgDAPgAkACIICPANIATgeQghghgIgBQgJAAhwAzgAneAxIAQAYIBpA3IgphZg");
	this.shape_12.setTransform(111.6,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFEF5A").s().p("AlgCXQh6hJhTgrQASgQAfgPQAtgUArgFQAqgFAbAvQANAZAFAZQAFgcAcgyQAkhEAyg5QBhhvBYBfQBMBcBAAmQAqAXBHAQQA2ANAjgoQAggpgPg0QgPgtAkACQAIABA6ASQAdAJAqAVQAtAVAZARQgNgEgagEIgYgDIAHAKQAHAMAHAQQgegYhjgxQgZgLgGATQgFAOADAlQACAggoAjQgqAkg5APQg2AOgzgjQgtgggzhNQgshEg0gDQgqgDg8AsQgrAggiA4IgbAyQBHhrBZACQA8ABBIA0QAeAWASAiQAJARAJAWQhkhFhCgbQhBgZgnANQghALgYAnQgLARgYA7QBvhvA6ANQAoAIAKA6QAFAggGAqQgEAVgFAPgAkJB6ICMAXIAWgcQgegjgJgBIAAAAQgKAAhxApgAndASIANAZIBjA/Igghbg");
	this.shape_13.setTransform(112.5,17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFEF5A").s().p("AlrCCQh0hThOgvQASgPAigNQAtgRAsgCQAqgBAXAxQALAaACAZQAIgbAggwQAphAA2g1QBqhnBPBlQBEBiA9ArQAoAbBEAVQA2ARAlgnQAkgkgMg1QgLguAlAFQAGABA6AXQAcAMAoAXQAqAZAYATQgNgGgZgGIgYgEIAGAKQAHAMAFAQQgbgZhgg5QgXgNgIATQgGANAAAmQAAAegqAhQgtAhg6AKQg4AJgvgnQgrgigshRQgmhIg0gHQgpgGg/AnQguAdgmA1IgeAvQBPhkBYAIQA7AGBEA6QAbAYAPAjQAJASAHAWQhdhNhAgfQg/gfgoAKQghAJgcAkQgMARgdA5QB4hlA5AQQAmALAFA7QADAggKAqQgFAUgGAOgAkSBsICJAiIAYgaQgcglgHgCIgBAAQgNAAhwAfgAnRAOIBeBGIgahcIhQgDg");
	this.shape_14.setTransform(113.4,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFEF5A").s().p("Al1BtQhuhchKg2QATgNAjgKQAvgOAsACQAqACASA0QAJAZABAaQALgbAigtQAvg9A6gxQByheBHBrQA8BoA7AvQAlAfBCAaQA0AWApgkQAngigHg1QgIgwAkAJQAGABA4AcQAcAOAlAZQApAdAWAVQgMgHgZgIIgXgGIAEAKQAHANADARQgZgchbg/QgWgPgJARQgHANgDAlQgCAfgvAeQguAdg7AGQg4AEgsgqQgogmgmhVQghhKgygMQgrgJhAAhQgxAagqAyIgiAsQBYhdBWAPQA8ALA+A/QAaAaAMAkQAHATAFAXQhYhUg8glQg9gjgoAHQgjAFgeAiQgOAQghA3QCAhcA4AVQAlAOABA8QAAAggOApQgGAUgHAOgAkaBeICGAtIAagYQgZgngIgDIgCAAQgRAAhsAVgAnTgOIBZBMIgThdIhPgKg");
	this.shape_15.setTransform(114.2,21.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFEF5A").s().p("AmABYQhmhkhHg9QAVgLAjgIQAwgKAtAFQAqAGAOA2QAHAagBAaQAMgZAngsQAzg6BAgtQB6hVA9BxQA2BtA2A0QAjAiBCAgQAyAaAsghQAqgfgDg3QgEgvAjALQAHACA2AfQAaAQAkAeQAnAgAUAXQgMgIgYgKIgXgIIAEALQAFANADASQgYgfhWhIQgVgQgLARQgIAMgGAmQgFAfgwAaQgyAag7ABQg6AAgoguQglgqgghYQgahNgzgQQgpgNhEAdQgzAWgvAvIglAqQBfhYBXAXQA6AQA6BEQAYAdAJAlQAGATADAYQhRhcg7gqQg5gogqADQgjADghAgQgPAPgmA0QCIhSA3AaQAkARgEA8QgDAggQAoQgJAUgIANgAkjBRICDA4IAdgXQgWgpgIgDIgGgBQgYAAhkAMgAnUgrIBTBUIgLhgIhPgQg");
	this.shape_16.setTransform(115.1,23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFEF5A").s().p("AmKBEQhghuhDhDQAWgKAkgFQAygGAsAJQAqAIALA4QAEAcgDAaQAPgZArgqQA4g2BEgoQCChOA1B4QAuBzAzA4QAhAmBAAlQAxAeAvgdQAsgdACg4QAAgwAjANQAGADA0AkQAZATAjAhQAkAjATAZQgLgJgYgMIgXgKIAEALQAEAPABASQgWghhRhQQgUgSgNAQQgIAMgKAmQgHAfgzAWQg1AXg8gEQg6gEglgyQgjgtgYhcQgXhQgwgUQgpgQhHAXQg1ASg0AtIgoAoQBnhSBWAeQA6AUA1BKQAWAfAGAmQAFAUABAZQhLhkg4gvQg4gugqABQgjAAglAfQgQANgqAyQCQhJA1AfQAkAUgJA8QgFAggUAoQgKATgJANgAksBDICBBDIAegUQgTgsgHgEQgEgBgaAAQghAAhGACgAnVhIIBNBcIgDhiIhPgXg");
	this.shape_17.setTransform(116,25.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFEF5A").s().p("AmSA7QhdhzhChHQAXgJAlgEQAzgEAtAKQAqALAIA5QAEAcgEAbQAQgaAtgoQA7g1BGgnQCHhKAyB8QArB2AxA8QAgAnA/AoQAxAgAwgcQAvgbAEg5QACgyAiAPQAHADAzAoQAZATAiAjQAjAlATAaQgLgJgYgOIgXgKIADALQADAPABASQgUgihQhUQgUgTgNAQQgKAMgKAmQgJAfg0AVQg2AVg9gGQg7gGgkg1QgigvgVheQgUhSgwgWQgpgShKAVQg2ARg2ArIgrAnQBshPBWAhQA6AXAzBNQAWAgAFAnQADAUABAaQhIhpg4gxQg2gwgrgBQgkgBgmAdQgRAOgtAwQCVhEA1AgQAjAWgLA9QgGAhgWAnQgLATgKANgAiyCGIAggTQgSgtgHgFQgIgDh/AAgAnYhWIBLBgIgBhjIhPgag");
	this.shape_18.setTransform(116.7,26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFEF5A").s().p("AmPBGQhihvhDhEQAWgKAlgFQAygHAtAJQArAJAKA4QAGAcgEAbQAPgaAsgqQA4g3BEgpQCEhOA2B5QAvB0AzA5QAiAlBAAmQAyAfAwgfQAtgdABg4QAAgxAjANQAHADA0AlQAaASAjAiQAlAjATAZQgMgJgYgMIgXgKIAEALQAEAPACASQgXghhShQQgVgTgMARQgJAMgJAmQgIAggzAXQg1AWg9gDQg6gEgngzQgigtgahdQgWhRgygUQgpgQhJAYQg1ASgzAtIgqApQBohTBXAdQA7AVA2BKQAWAfAHAnQAEAUACAZQhMhkg5gwQg5gugqABQglABgjAfQgRANgrAyQCRhJA2AeQAlAUgJA+QgFAggUAoQgLAUgJANgAkvBFICBBDIAggUQgTgtgIgDQgEgCgaAAQgiAAhGADgAnahHIBNBcIgEhjIhQgWg");
	this.shape_19.setTransform(116.7,25.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFEF5A").s().p("AmMBRQhlhrhHhBQAWgLAlgGQAygJAtAHQArAHAMA4QAHAcgDAaQAOgaApgrQA3g5BDgsQB/hTA7B2QA0ByA1A3QAjAkBCAkQAzAcAtggQAtgfgBg4QgCgxAjANQAHACA2AiQAaARAkAhQAnAhAUAYQgMgIgZgLIgYgJIAFALQAEAOACATQgWghhWhNQgVgRgMARQgJAMgHAnQgGAfgzAZQgzAZg9gBQg7gCgogxQgkgsgdhbQgahRgygRQgqgPhHAbQg1AUgyAvIgnApQBkhWBZAbQA7ASA5BIQAYAeAHAmQAFAUACAZQhPhhg6gtQg7gsgpADQglABgjAhQgQAOgpA0QCPhQA2AdQAmATgHA9QgDAhgTAoQgJAUgKAOgAksBMICEA+IAegVQgVgsgHgDIgLgBQgcAAhfAHgAndg5IBSBZIgIhiIhQgUg");
	this.shape_20.setTransform(116.6,24.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFEF5A").s().p("AmKBcQhphnhIg+QAVgMAlgHQAwgLAuAFQArAGAPA3QAHAbgBAaQAMgaAogtQA0g7BBguQB9hYA/B0QA4BwA4A0QAkAjBDAhQA0AaAtgiQAqgggDg4QgEgxAkALQAHADA4AfQAaARAlAeQAnAhAWAXQgMgIgagKIgXgIIAEALQAGAOACASQgYgfhYhKQgWgQgLARQgIAMgGAnQgFAggyAbQgyAbg9ABQg7AAgqgvQgmgrgghaQgchPgzgQQgrgNhGAeQg0AWgwAxIgmArQBhhaBaAXQA7AQA8BGQAZAdAJAmQAGATADAZQhTheg8grQg8gpgqAEQgkADgiAhQgPAPgmA2QCKhVA5AaQAkASgEA9QgCAhgRApQgIAVgJANgAkqBUICHA5IAdgXQgXgrgHgDIgGgBQgVAAhrANgAnfgrIBUBWIgLhiIhRgQg");
	this.shape_21.setTransform(116.5,23.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFEF5A").s().p("AmHBnQhthkhKg6QAUgNAkgJQAxgMAuADQArAEARA3QAIAbAAAaQALgbAnguQAyg+A+gwQB5hdBGByQA7BtA6AzQAlAhBEAeQA1AYAsgjQApgigFg4QgGgxAkAKQAHACA5AfQAbAPAnAcQAoAfAXAWQgNgHgZgJIgYgHIAEAKQAGAOADASQgZgehchFQgVgRgLASQgIANgEAmQgEAhgwAcQgyAdg9ADQg6AEgsguQgogpgkhZQgfhOg0gOQgrgLhEAgQgzAYgvAzIgkAsQBehdBZATQA9AOA+BDQAbAcAKAmQAHATAFAZQhYhbg9goQg9gngrAFQgkAFggAiQgOAQgmA3QCIhaA6AYQAlAQgBA+QgCAhgOApQgJAVgHAOgAknBbICIA0IAcgZQgYgpgHgDIgEgBQgTAAhuASgAnigcIBZBSIgQhhIhSgNg");
	this.shape_22.setTransform(116.4,23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFEF5A").s().p("AmDByQhxhfhOg4QAUgNAkgLQAxgPAtACQAsACATA2QAJAaABAbQALgcAkgvQAwg/A9gzQB1hiBLBvQA/BrA8AxQAmAgBGAbQA2AWApglQApgkgHg3QgJgxAlAJQAHABA6AdQAcAOAoAcQAqAcAXAWQgMgHgagIIgZgHIAFALQAGAOAFARQgbgdhehCQgXgPgKASQgHAOgDAmQgDAggvAfQgwAfg9AFQg6AGgvgsQgpgogohXQghhOg1gLQgrgKhEAjQgyAbgsA0IgjAuQBahiBbAQQA9AMBBBBQAbAbANAlQAHATAFAZQhbhYg/gmQg+gkgrAHQgkAGgeAjQgPARgiA4QCEhfA6AWQAnAOABA+QAAAhgOArQgHAUgGAPgAklBiICMAvIAbgaQgagogIgDIgDAAQgRAAhxAWgAnjgOIBbBPIgThhIhSgKg");
	this.shape_23.setTransform(116.3,22.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFEF5A").s().p("AmAB9Qh2hbhPg1QATgOAkgMQAwgRAuAAQAsAAAVA2QAKAaACAbQAKgdAigwQAuhCA7g1QByhnBOBtQBEBpA+AuQAoAeBHAaQA3AUApgnQAngmgKg3QgKgxAlAHQAHACA8AaQAcANApAbQArAaAYAVQgNgHgagHIgZgFIAGAKQAHAOAFASQgcgdhhg+QgYgPgJATQgGAOgCAmQgBAhgvAhQgvAgg9AIQg6AIgwgrQgrgmgrhWQglhMg2gJQgsgJhCAmQgxAdgqA2IghAvQBWhlBcANQA+AIBEA/QAcAaAOAlQAIATAGAYQhfhUhAgjQhBgjgpAJQglAIgdAlQgNARghA6QCBhlA7ATQAoAOADA9QABAigMArQgGAVgHAPgAkiBpICNAqIAbgbQgcgogIgCIgCAAQgPAAhzAbgAnmAAIBfBMIgXhgIhTgHg");
	this.shape_24.setTransform(116.2,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{rotation:0,x:116.1,y:20.3,regX:0,regY:0}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape,p:{rotation:-17.7,x:109.9,y:8.1,regX:0,regY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape,p:{rotation:17.7,x:78.4,y:33.3,regX:-35.8,regY:13.9}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape,p:{rotation:0,x:116.1,y:20.3,regX:0,regY:0}}]},1).to({state:[]},3).wait(1));

	// Layer 6
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFEF5A").s().p("AqWjnIAaguIUTHiIgOBJg");
	this.shape_25.setTransform(75,79);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).to({_off:true},30).wait(1));

	// Layer 7
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFEF5A").s().p("AhrEyIB6p6IBdAcIiMJ0g");
	this.shape_26.setTransform(72.9,62.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).to({_off:true},30).wait(1));

	// Layer 3
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CEC201").s().p("AqahHICIjnIStFgIgmD9g");
	this.shape_27.setTransform(82.7,48.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).to({_off:true},30).wait(1));

	// Layer 4
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BCAE00").s().p("AD7EWICNjTItok1IifiFIT+FQIg9Gfg");
	this.shape_28.setTransform(80.3,77.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CEC201").s().p("ApVAUIDNllIB7AkIgFB3INoE2IiODSg");
	this.shape_29.setTransform(59.8,71.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[]},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.7,115.5);


(lib.п1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAGAFABAJQADgLASABQATACgCAXQgCAWgYALIgXAGQgQgRgFgIg");
	this.shape.setTransform(138.3,84.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAGAFABAJQADgLASACQATABgCAXQgCAWgYALIgXAGQgQgQgFgJg");
	this.shape_1.setTransform(122.7,80.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAFAFACAJQAEgKARABQATABgDAYQgCAVgXALIgXAGQgQgQgFgJg");
	this.shape_2.setTransform(107.1,76.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004651").s().p("AgfAPQgKgQAIgSQAPgUALAKQAFAFACAJQAEgLARABQATABgDAYQgCAXgbAKg");
	this.shape_3.setTransform(91.5,72.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004651").s().p("AgjgGIAAgCQAPgVALAKQAGAFACAJQADgLASACQASABgCAWQgBAIgDAGg");
	this.shape_4.setTransform(76,67.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004651").s().p("AgHgDQAKgBAFAIg");
	this.shape_5.setTransform(62.9,62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004651").s().p("AAIgdQAMAEgCAUQgCAbghAIg");
	this.shape_6.setTransform(13.2,4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004651").s().p("AggALQgJgQAIgQQAKgOAIAAIAIAEQAFAEACAJQACgEAGgDIAdANIAAAJQgCAWgYALIgWAGQgQgRgFgIg");
	this.shape_7.setTransform(26.2,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004651").s().p("AgegTIA9AZQgKAIgOAEIgLACQgZgWgBgRg");
	this.shape_8.setTransform(41.2,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004651").s().p("AgfARIAVgwQAEAEABAGQAEgLARABQASABgCAYQgCAVgYALIgXAGg");
	this.shape_9.setTransform(8.6,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAGAFABAJQADgLASACQATABgCAXQgCAWgYALIgXAGQgQgQgFgJg");
	this.shape_10.setTransform(22.8,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004651").s().p("AgagQIA2AXQgJAGgMACIgJACQgVgTgDgOg");
	this.shape_11.setTransform(131,50.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004651").s().p("AgfAGQgJgQAIgRIACgCIBDAdQgGAQgVAJIgUAFQgPgPgGgJg");
	this.shape_12.setTransform(116.2,45.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAGAFABAJQADgLASACQATABgCAYQgCAVgYALIgXAGQgQgQgFgJg");
	this.shape_13.setTransform(100.7,41);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004651").s().p("AggALQgJgPAIgRQAPgUALAKQAGAEABAJQADgKASABQATABgCAYQgCAVgYALIgXAGQgQgQgFgJg");
	this.shape_14.setTransform(85.1,37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAFAFACAJQADgLASABQATACgDAXQgCAWgXALIgXAGQgQgRgFgIg");
	this.shape_15.setTransform(69.5,33.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAFAFACAJQADgLASACQATABgDAXQgCAWgYALIgWAGQgQgQgFgJg");
	this.shape_16.setTransform(53.9,29.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAFAFACAJQAEgKARABQATABgDAYQgCAVgXALIgXAGQgQgQgFgJg");
	this.shape_17.setTransform(38.5,25.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004651").s().p("AglAAQABgHADgGQAPgUALAKQAFAFACAJQAEgLARABQATABgDAXQgBAOgKAJg");
	this.shape_18.setTransform(3.9,34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004651").s().p("AgRAfQgcgcAMgYQAOgUAMAKQAFAFACAJQADgLASABQATABgDAYQgDAegoAHg");
	this.shape_19.setTransform(18.8,39);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004651").s().p("AgJgDQAMgRAKAEIgZAhQgBgLAEgJg");
	this.shape_20.setTransform(156.6,70.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004651").s().p("AggAMQgJgQAIgRQAOgUAMAKQAFAEACAJQAEgKARABQATABgDAYQgCAVgYALIgWAGQgQgQgFgIg");
	this.shape_21.setTransform(143.4,68.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004651").s().p("AggALQgJgQAIgQQAOgVAMAKQAFAFACAJQADgLASACQATABgDAXQgCAWgYALIgWAGQgQgRgFgIg");
	this.shape_22.setTransform(127.8,64.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#004651").s().p("AggALQgJgQAIgQQAOgVAMAKQAFAFACAJQADgLASACQATABgDAYQgCAVgYALIgWAGQgQgQgFgJg");
	this.shape_23.setTransform(112.2,60.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#004651").s().p("AgfALQgKgQAIgQQAPgVALAKQAGAFABAJQAEgKASABQASABgCAYQgDAVgXALIgXAGQgPgQgFgJg");
	this.shape_24.setTransform(96.6,56.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAGAFABAJQADgLASABQATABgCAYQgCAWgYALIgXAGQgQgQgFgJg");
	this.shape_25.setTransform(81,53.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAGAFABAJQADgLASACQATABgCAXQgCAWgYALIgXAGQgQgQgFgJg");
	this.shape_26.setTransform(65.4,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#004651").s().p("AggALQgJgQAIgQQAPgVALAKQAGAFABAJQADgLASACQATABgCAYQgCAVgYALIgXAGQgQgQgFgJg");
	this.shape_27.setTransform(49.8,45.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#004651").s().p("AggALQgJgPAIgRQAPgUALAKQAGAEABAJQADgKASABQATABgCAYQgCAVgYALIgXAGQgPgPgGgKg");
	this.shape_28.setTransform(34.4,41.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#268B6B").s().p("AgHgGIAPAGQgGACgCAFQgCgIgFgFg");
	this.shape_29.setTransform(26.2,5.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#268B6B").s().p("AnDiSIATgtIN0F/g");
	this.shape_30.setTransform(50.3,37.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#268B6B").s().p("AgbBnQjui4iajRINHFpIipDcQiKhOiMhug");
	this.shape_31.setTransform(120,56.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#43A989").s().p("ArUiGIAyh4IOIFSIt1l/IBNizIJ4EQQCaDQDuC5QCOBuCKBOIhQBog");
	this.shape_32.setTransform(72.6,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,95.9);


(lib.рот = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C60800").s().p("AhGAVQAtgBA1gaQAagOARgOQgUAmgkAdIgYACQglAAgYgOg");
	this.shape.setTransform(19.9,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC3403").s().p("AhEgCIgmgiQAMAIARAGQAjAMA0AEIAKAAQAgASA3gGQgfAagiAEIgNABQgqAAg3gng");
	this.shape_1.setTransform(10.7,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,10);


(lib.зрачок_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080204").s().p("AgMANQgFgGAAgHIAAgBIARABIgDgRIADAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(2.1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4DA98D").s().p("AgRASQgIgHAAgLIABgHIAQACIgCgSQAEgCAGAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgHgIg");
	this.shape_1.setTransform(2.6,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.3,5.3);


(lib.зрачок_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080204").s().p("AgLANQgGgGAAgHIAAgBIARABIgCgRIACAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgFgFg");
	this.shape.setTransform(2.1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4DA98D").s().p("AgRATQgIgIAAgLIABgHIAQACIgDgSQAHgDAEABQALgBAIAJQAHAHABAKQgBALgHAIQgIAHgLABQgKgBgHgHg");
	this.shape_1.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.3,5.3);


(lib.волосы = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B4A17").s().p("Ag8AHQAKgCAIgEQAyAFA1gPQgpATgtAAQgRAAgSgDg");
	this.shape.setTransform(42.1,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B4A17").s().p("AgBBZQhfgZgZhPQgHgZAAgcIACgXIAKgBIgDAtQAFAzAmAmQArAqBKACQAvABApgNQgpATguAAQgVAAgWgEg");
	this.shape_1.setTransform(27.5,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD5422").s().p("AgkBpQgrgKgrgpQgggfgLg+QgJg1AGgFQAVgQAjAEIA7AIQAdADAaA9QAcA8gCAMQgCAMAIgGQAEgCAVghQAEBXBtAEQhgAOg5AAQgjAAgUgGg");
	this.shape_2.setTransform(33.6,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B4A17").s().p("AADgfQAjgXAggOQADABgEAFQgIAKgjAUQgiATgjArIgbAnQAGg1BDgvg");
	this.shape_3.setTransform(8.8,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD521F").s().p("Ah9A5IgLgCIA2g3QBAg5AzgKQA0gJAgARQAPAJAFALQgHgIgNgFQgZgKgZAMQgVAJgaASQgzAkgnA6Ig3gOg");
	this.shape_4.setTransform(13.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,22.6);


(lib.zzz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E9F4FF"],[0.557,1],-369.5,-1073.3,369.5,1073.2).s().p("EgMECw/QxKhLwqkfQwfkbvZngQvXngtqqSQtyqXrgszUgX5gaogLwgiHQhpkxhVktQhGj4g1jfUgHvggbAEogg9UAEfggDAPkgchQPp8oYq1JUAZjgV3AgEgLCQTamsUOiGQTqiCTqCYQTSCWSYGfQSRGcQdKNQZmP4S2XUQTgYIKMdnQDsKsCRK3UAGsAf7gFKAgKQlCfZvobxQvub74XUlQ5OVU/fK1Q8PJv9UAAQmGAAmLgcg");
	this.shape.setTransform(1135.6,1135.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2271.2,2270.9);


(lib.e5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BABDB").s().p("Ai7FWQgPgHgegbQgogkgpgyQg0hBgvh3QgrhugciAQgMg5AHgDQAFgCAWAgQBCBhAVAFQAoAKgOgyIgPgsQgIgaABgMQABgSA8A2QBHBAAagFQgQgdgPgfQgeg+AUgKQACgBBUA4QBSAzgCgbQgJhAgBgXQAAglAiAWQAsAdArAXQA+AegegkQg0hABzAeIBNAVQAgAHgQgQQgegeAoABQAbAABcAGQAhgBBAgUQAygQADAHQAGAPgpAXQg2AfgQAUQgIALg8BfQgcAsgHgXQgTg5ggAyQgbAogKA0QgEAVgYgDQgYgCgNgdQgWgxgTBNQgKAngJA7QgMAbgfghQgkgmgKAFQgpAUgHBGQgEAnACBKQAAAQglg3Qgpg/gNAQQg0BDANBIQADARAJAXQADAKgCAAIgBAAg");
	this.shape.setTransform(164.2,226.4,1,1,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EBFE4").s().p("AlaL8QgggTg7hRQhMhohDiOQiyl2jUoUQgohkAMgMQAJgJAwAuIBjBiQA/A7AjANQAyARAGgXQAFgSgWgyIgrheQgYg4AAgdQABgeAjAfQASAOBDBLQCOCZA4gIQgmhIgjhLQhFiXApgTQAEgCC4CTQC0CGgHg+QgHg8g9iPQgSgpAEgHQAFgJAqAhQBPA/CCBCQCWBOhDhdQhFhfAsgHQAggFBpAuICbBEQA/AZgjgoQgogtAVgOQASgLBEAHICUAVQBmAOBDABQBQAABcg6IA3gkQAWgOAFAGQAUAYg/BVQhXBrglA5QiGDNgKAOQhBBTgUg7QgviJg/BvQgyBZgRB5QgGAwgbgIQgcgIgehHQg1h5g3CyQgcBagaCIQgNAlgPgUQgLgOgSg2QgWhBgJgUQgTgmgRAIQguAWgYA2QgSAogNBKQgSBpgDAOQgQBAgcAfQgUAWgUgYQgNgPgVgxQgWg0gJgMQgRgZgPAVQhlCSAHDBQABAbAKBRQADAfgHAAIgDgBg");
	this.shape_1.setTransform(110.6,96.1,1,1,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.5,262.1);


(lib.e4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BABDB").s().p("AGmF0Qg3gbgagBQgOgBhwAEQg0ACAPgUQAkgwg7ACQgvABgyAVQgTAIgLgUQgMgWAQgaQAdgvhKAdQhUAmgIACQgdAFAJgtQALgzgKgFQgogXg+AiQhDAugaAQQgPAJAag+QAchFgUgCQhVgFg0A0QghAwgCgLQgCgQAFgoQAHg1ASg+QAYhPBIhqQBChhBbhhQAogqAHAEQAEAEgOAkQgqBuAHATQAPAmAhgoIAcglQARgVAKgGQAQgJgLBRQgOBeAUASQABACAfg9QAjg7ASALQACABABBkQAFBhAUgRQAYgSAqgnQAfgWABApQAAA0AIAxQAJBEANgtQAYhOAoBuIAaBMQAMAeAEgWQAIgqAXAiQAOAWAwBPQATAcA0ApQApAggEAGQgDAGgJAAQgNAAgagNg");
	this.shape.setTransform(197.8,36.6,1,1,-6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BABDB").s().p("AGmF0Qg3gbgagBQgMgBhyAFQg0ACAPgUQAkgwg7ABQgwACgxAVQgTAIgMgVQgLgWAQgaQAcguhJAcQhUAmgIACQgdAFAJgsQALg0gKgFQgogXg+AiIhdA+QgPAJAag+QAchFgUgBQhVgFg0AzQghAwgCgKQgCgRAFgoQAHg1ASg9QAYhQBIhqQBDhiBahfQAogqAHAEQAEADgOAkQgqBuAHATQAPAmAhgnIAcglQARgWAKgGQAQgJgLBRQgOBeAUASQABACAfg9QAig7ATALQACABABBkQAFBhAUgRQAYgSAqgnQAfgWABApQABA1AGAwQAKBEANgtQAYhOAoBuIAaBMQAMAeAEgWQAIgqAXAjQAOAWAvBOQAUAcA0ApQApAggEAGQgDAGgJAAQgNAAgagNg");
	this.shape_1.setTransform(47.7,334.6,1,1,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EBFE4").s().p("AGuMPQhpgFAlgzQBVh1iAANQhlALhtA4QgqAWgJgaQgKgcAnhBQBFhxiwA6Qg1ARhTAkIhQAjQgmAKAIgYQAFgQAigvQAog3AKgTQAVgmgQgKQgtgZg7AMQgqAIhEAhIhuA0Qg9AYgpgFQgfgDAIgfQAFgUAcgtQAegwAFgOQALgcgaAAQizABiZB2QgWARg8A2QgcAZgBgNQgDglAhhgQAph5BMiJQDPlvE0nbQA6haAQACQANACgJBCIgXCKQgLBWAKAjQAOAyAWgIQARgGAdgvIAzhZQAgg1AYgQQAagRgFAvQgCAWgVBiQgsDNAnAoQADADBLiTQBRiPAoAWQAEACgNDrQgFDgAvgpQAsgoBRiEQAYgnAIgBQAKgBgDA1QgFBmAVCPQAYCnAkhsQAmhvAfAhQAXAXAYBvQANA9AUBpQARBDAMg1QAOg6AYAJQATAHAhA8QAUAlAxBgQAvBcAnA2QAuBCBlAqIA9AXQAYAKgCAIQgJAehpgDQiJgIhFACQjeAKgjAAIgFAAg");
	this.shape_2.setTransform(152.6,191.5,1,1,-3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2CBE7").s().p("AGvMPQhqgFAlgzQBVh1h/ANQhmALhtA4QgqAWgJgaQgKgcAohBQBEhxiwA6Qg1AShSAjIhRAjQgmALAIgZQAFgQAigvQAog3AKgTQAVgmgQgJQgsgZg8ALQgqAJhEAgIhuA0Qg9AYgpgFQgfgDAIgfQAFgUAcgsQAegwAFgPQALgcgaAAQiyABiZB3QgWAQg8A3QgcAZgBgOQgEgkAhhgQAph5BNiJQDOlvE0ncQA7haAQACQANACgKBCIgXCKQgLBWAKAjQAOAyAWgIQASgGAcgvQAQgaAjg/QAgg0AYgQQAagRgFAuQgCAXgVBiQgsDNAnAoQADADBLiTQBSiQAoAWQADACgNDrQgFDhAvgqQAsgnBRiFQAYgnAIgBQAKgBgDA1QgFBlAVCQQAYCnAkhsQAmhvAfAhQAXAXAYBvQANA9AUBqQARBCAMg1QAOg6AYAJQATAIAhA8QAVAkAwBgQAwBcAmA2QAuBCBlAqIA9AXQAYAKgCAIQgJAehpgDQiJgIhFADQjhAJggAAIgEAAg");
	this.shape_3.setTransform(112.9,272.8,1,1,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.5,373.8);


(lib.e3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BABDB").s().p("AnqFUQgHgOAqgYQA2geAPgVQAJgLA7hfQAcgsAIAYQATA5AggyQAagpAKg0QAEgUAYACQAYACANAdQAWAxAThNQAQhaADgHQAMgcAfAhQAkAlAKgEQApgVAHhFIABhxQABgQAlA4QAqA+AMgQQA0hDgNhIQgVg2AJAEQAPAHAeAbQAnAjAqAyQA1BBAvB3QArBtAcCBQAMA5gHADQgFACgWggQhDhhgUgFQgogKAOAzQAEAOALAeQAIAagBAMQgBASg9g3QhGhAgaAFQgCABAhA7QAdA+gTAKIhWg3QhTgyACAaQACAeAIA5QABAmgigXQgsgdgrgWQg+geAdAkQA0BAhygeQg5gRgUgDQgggIAQAQQARASgDAGQgDAGgVAAQhHgHgwABQghABhAATQgjALgMAAQgFAAgBgCg");
	this.shape.setTransform(52.8,33.2,1,1,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77A1D5").s().p("ABzJmQhSg9hPguQhxhAA5BIQA8BMgoAJQgeAHhdgfQhngmgjgKQg5gRAfAhQAhAjgGAMQgEALgmgDQh9gUhSgCQg6gBhsAgQhVAZgGgNQgOgdBEgpQBag2AYgmQAbgrAfg/IAthcQAVgqAMgKQAPgLAKAbQAqBvAxhdQAmhKALhkQAEgoApAHQArAHAbA4QAuBiAViUQAOiuAEgNQAKgfAWAIQAQAHAdAfQApAvAGAEQAZAYAOgHQBDgkACiGQABgrgHhHIgJhmQgBgZAWAcQAIALArBBQBSB7ATgdQBQh9giiMQgIgggSgtQgKgYAIAEQAcAQA4A3QBLBIBPBkQBmCBBkDqQBcDXBFD7QAfBvgNAFQgJADgrg/QhKhvgLgOQg1hHgdgJQhHgWAhBiQAJAbAXA7QATAzAAAWQAAAZgigaQgRgNg/g+QiFiBgsAIQgDABBCB1QA9B6ghARQhSg9hMg1QiYhoAIAzQAIA6AXBuQAEAsgVAAQgOAAgZgSg");
	this.shape_1.setTransform(82.6,122.4,1,1,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EBFE4").s().p("AvgMSQgVgYA8hWQBThuAjg7QB/jTAKgNQA9hVAXA7QAzCHA7hxQAvhbANh6QAFgwAaAHQAdAIAhBFQA4B3Axi0QAPg1APhYIAQhXQAMglAQAUQALANAUA2QAYBAAKATQAUAmARgIQAtgXAXg4QAQgoAKhLQAOhqADgOQANhAAbggQAUgYAVAYQAOAPAWAwQAYAzAJAMQASAYAOgVQBhiWgPjBQgCgcgMhPQgGglAMAGQAhASA+BQQBPBlBICLQDAF0DlIJQArBigLAMQgJAKgxgsQhDg/gkggQhBg5gjgLQgygPgGAXQgEARAYAxIAuBdQAaA3AAAdQABAeglgdQgRgOhGhIQiTiVg3AKQgEABBRCQQBKCUgoAVQhkhKhdhBQi5h/AJA+QAJA6BCCOQAUApgEAHQgFAJgrggQhRg8iEg+QiZhHBHBZQBIBdgsAIQghAGhqgpQh2gygngOQhAgXAlAoQApAsgVAOQgRAMhEgFQjQgbhuADQhQAChaA9QgWAPggAXQgPALgHAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(117.3,151.4,1,1,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.2,237.7);


(lib.e2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BABDB").s().p("AC4FuQgGgDAMgkQAlhwgJgUQgQglggAqIgZAnQgQAXgKAFQgPAKAHhRQAHhegVgSQgNAfgPAeQgfA+gUgKQgDg1gGgxQgJhfgUARQgtAvgRAOQgdAYgEgpQgDg1gKgwQgNhDgLAtQgTBQgvhsIgehJQgOgegDAWQgDAZgHABQgHABgMgSQgng8gdgkQgVgbg3gmQgrgeAEgHQAHgOAsATQA6AYAZAAQAKAAB0gLQA0gFgPAVQghAxA7gEQAwgFAwgXQATgKAMAUQANAVgPAcQgZAvBHggQAmgQA0gdQAcgHgGAtQgIAzAKAGQApAUA8glQAigVA4gvQAOgJgWA/QgYBGAUABQBVAAAyg2QALgNAMgVQAHgLABAFQAEAPgDApQgEA1gPA/QgTBRhBBuQg9BlhVBlQgjApgIAAIgBgBg");
	this.shape.setTransform(47.9,310.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BABDB").s().p("AgLG7QgEgEAVggQBDhigDgUQgFgogqAfIgjAdQgVARgMAEQgRAFAdhMQAhhYgNgXQgVAagYAZQguAygRgQQAMgzAIgwQARhfgYALQg4AhgVAIQgiAOAIgoQAMg1AEgvQAGhEgXAoQgpBHgNh0IgIhQQgFgfgKAUQgKAWgHgBQgGAAgIgUQgThFgSgsQgNgfgpg0QghgpAFgFQALgLAlAeQAwAnAZAHIB8AZQAyAKgTAQQguAmA6AMQAvAKA0gKQAVgDAGAXQAHAXgWAXQgnAmBPgKQAogFA6gNQAdABgSApQgXAwAJAHQAiAfBDgSQAmgLBDgdQAQgFgmA2QgrA+ATAFQBRAYA/gmQAOgJATgQQAJgJAAAFQgBARgOAmQgTAxggA4QgqBIheBXQhXBQhuBIQgqAcgJAAIgCgBg");
	this.shape_1.setTransform(251.8,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EBFE4").s().p("AB+NIQgNgEARhAQAZhYAMgvQAUhUgHgkQgJg0gXAGQgRAFghArQgoA4gVAcQglAwgYAOQgbAOAJgtQAFgWAfhgQA/jHgigsQgrBEgxBDQhhCGglgbQAUh6AOhwQAcjegzAkQgwAiheB8QgcAkgIABQgKgBAIg0QAQhlgGiQQgGipgwBnQgwBqgcgiQgVgagMhyQgKh/gFgpQgKhEgSAzQgUA5gWgLQgTgKgag/QhIjFg1hhQgnhGhgg0Ig7gdQgWgOACgHQAMgcBoANIDMAbQD0APASADQBoAQgqAvQhhBrCBABQBmgBBygsQAsgSAHAcQAGAcguA9QhPBpC0gnQBdgUCDgtQAngHgKAYQgHAPgmAsQguAygNASQgYAjAQAMQApAdA8gFQArgEBGgaQBmgkANgDQA/gSApAJQAeAGgLAeQgHATggAqQgjAtgHAOQgNAaAZADQCyARClhlQAXgPBCgwQAdgWAAAOQAAAkgrBcQg1B1haCAQj0FXlkG5QhBBQgRAAIgBAAg");
	this.shape_2.setTransform(133.7,162.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9EBFE4").s().p("Ag4OEQgMgFAZg+QAkhUAQgtQAfhRgCgkQgDg0gXACQgRACgmAnIhHBMQgrArgbALQgcAKAPgsQAHgVArhbQBZi9gdgwQg0A+g5A8QhxB5gigfQAkh3AchuQA4jZg4AeQg0AchtBvQggAggIAAQgKgCAPgzQAchhANiRQAOiog8BgQg9BkgXgmQgRgdAChxQAGiAgBgpQgBhFgYAxQgbA1gUgOQgSgMgShCQgvjMgphnQgdhJhZhAIg2glQgVgPAEgHQAPgbBmAaIDHA1QDxAuAQAFQBlAcgvApQhuBfCAAQQBlANB3geQAugMADAbQADAdg2A3QhcBfC5gRQBegICIgcQAngCgNAWQgJAPgrAmQg0AsgOARQgdAgAOANQAlAhA8ACQArACBJgQQBpgXAOgCQBBgJAnAOQAdAKgPAcQgJASglAlQgoAogJANQgQAZAZAGQCuAnCwhQQAZgLBHgoQAggSgBAOQgGAkg1BWQhEBshqB0QkaE0maGMQhGBEgTAAIgDAAg");
	this.shape_3.setTransform(207.1,98.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303.2,347.2);


(lib.e1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BABDB").s().p("AkPHnQg6gDgBgIQAAgFAkgNQBwgmAKgSQATgkg0AAIguADQgbABgMgFQgQgGBEgrQBRgzABgbQggAJgiAGQhDAMgEgWQgBgCBMhCQBGhDgZgFQhCgHgVgGQgkgJAegcQAoghAhglQAugzgrATQhLAhA7hnIAohFQAPgcgTALQgWAMgFgFQgFgFAGgUQAahDAMguQAHgggBhDQgDg0AIgBQAPgDAMAuQAPA9AQAUQAHAJBOBVQAhAmgZACQg6ADAnAsQAfAjAwAYQATAKgJAVQgJAYgfAFQg0AIBFAmQAjATA3AYQAWATgoAWQguAZACALQAJAtBCAaQAkAOBIARQAQAFhAAVQhGAXALAQQAzBEBJAGQARACAYgCQANgBgDADQgKANgjAWQgsAdg7AaQhNAih/ANQhLAIhRAAQguAAgvgDg");
	this.shape.setTransform(33.1,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BABDB").s().p("AgjHlQh2gMiAgiQg4gPABgIQAAgGAngEQB1gOAOgRQAagegzgLIgugHQgbgFgKgGQgPgJBMgdQBaghAGgaQghABgigBQhFgCABgWQAAgCBYgxQBTgygYgLQg+gVgVgKQgigQAkgUQAtgYAqgeQA3gpguAJQhRASBPhYIA2g7QAVgZgVAGQgoANATgkQAng8AUgqQAOgeAMhCQAJgzAHAAQAQABACAvQACA+AMAYQAEAKA7BjQAaAtgZgEQg7gJAdAzQAYAqAqAhQAQANgMAUQgOAVgfgCQg2gDA8AzQAfAbAwAjQASAXgsANQgyAPAAALQgBAuA7AmQAhAWBCAfQAPAJhDAHQhKAIAIASQAkBNBGAWQARAFAYACQANACgEADQgNAKgmAOQgyATg/ANQgvAKg8AAQgvAAg2gGg");
	this.shape_1.setTransform(349.7,123);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7BABDB").s().p("AojMxQhzgIgBgNQAAgKBKgUQCCgiAQgFQBVgaASgZQAsg7hngCIhcACQg2ABgWgIQgXgIAkgXQASgLBQgoQCmhSAGgsQhBALhDAJQiHARgFglQgBgDCghsQCVhsgzgKQh/gQgqgKQhHgSBBgsQBVg6BGg7QBihVhYAfQhbAeAFgpQAEgdA8hOIBbhyQAigwgpARQgsATgJgIQgJgIAPgjIAphRQAfg9ARguQAVg2AFhwQAFhZAOgCQAggDAQBOQAWBnAbAjQAgAnAwAyIBJBJQAgAiAFAPQAFASgdAAQh1AEBHBMQA5A+BbAqQAkARgVAkQgUAng+AHQhrALCEBFQBEAiBoAsQAaAUgQARQgLANgoARIg/AcQgfAPACAQQALBNB+AtQBHAbCKAfQAYAHgiALQgNAFhLATQiPAkAVAbQBaB2CQAOQAiAEAvgDQAbgCgHAHQgYAVhGAjQhdAuh5AqQicA1j9ARQhsAHhyAAQiEAAiLgKg");
	this.shape_2.setTransform(119.3,115.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#77A1D5").s().p("AhIMwQjqgVj9g7QhwgZABgNQABgKBMgIQCFgNASgDQBYgMAWgWQA0g0hlgSIhbgMQg2gIgUgKQgWgMAngRQATgIBVgbQCxg3AOgsQhDAChDgCQiIgEABglQAAgECvhRQCjhUgwgSQh7gjgogRQhDgcBHgiQBZgpBSgyQBuhEhbAQQhfAQALgoQAIgdBIhDIBrhjQAqgqgrALQgvAMgIgKQgHgJAUggIA1hKQAog4AZgqQAcgzAWhuQAShXAPABQAUABAIAYQAGAQABApQAFBoAXAnQAYAsApA6IA9BTQAaAmADAQQADASgdgEQh2gPA7BXQAvBFBUA5QAgAWgZAhQgbAig+gDQhsgFB4BYQA+AtBgA7QAWAYgSAPQgNALgpAKIhEARQggAMgBAPQgBBOB1BBQBBAkCFA1QAVAKgiAHQgOAChNAHQiTANARAfQBHCBCMAlQAgAJAwAFQAaACgIAGQgaARhLAYQhjAfh+AVQhaARh3AAQhfAAhvgLg");
	this.shape_3.setTransform(245.3,102);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9EBFE4").s().p("AruPIQgHgLA8gfQAigTBagsQBMgqAWgdQAggqgTgMQgPgKg3AEQhEAJgjADQg9AFgbgKQgcgLAogYQATgLBcgpQC/hVAKg3QhRANhSAIQilATgFguQgBgEDGiAQC3iBg9gNQg6gNibAOQgtADgGgGQgGgGAsgeQBVg3BohnQB4h2hsAjQhwAkAIgtQAGggBLhVIByh9QAtg1gzAVQg3AYgGgZQgGgUAdg+QARgmAyhgQAthdAVg/QAahLgahrQgNgvgEgQQgGgaAIgCQAdgKA8BVIB1CqQCZDAAIAOQA7BXg/ABQiQABBVBfQBEBLBuA3QArAVgPAXQgRAYhNAGQiEAMCYBtQBOA2B5BDQAfAYgYAJQgRAFg5AAQhEABgWACQgrAGACATQAHAyAsApQAgAdBCAkIBqA6QA4AjAUAkQAQAbgdALQgUAIg0AEQg5AEgOAEQgdAJAPAVQBrCOC5A3IBqAYQAlAIgLAIQgbAYhhAfQh6AnicATQmeAyo5AgQggACgXAAQg2AAgFgKg");
	this.shape_4.setTransform(195,97.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9EBFE4").s().p("AFWPJQmhgGo5gvQhrgJgGgPQgFgMBAgXICEgtQBRgfAagZQAlglgSgQQgNgMg2gDIhogCQg9gEgZgNQgbgPArgSQAVgIBggdQDJg6ARg1QhRAChTgDQilgFAAgtQAAgEDWhkQDHhmg6gWQg4gUibgIQgugDgEgHQgGgIAwgWQBcgsB1hXQCIhkhxATQh0AUAOgqQAKggBXhKICDhsQAygug0AOQg6APgDgZQgDgUAlg6QAXgjA+hYQA6hWAeg7QAjhIgLhsIgIhCQgCgaAHgBQAegHAvBeIBdC4QB8DQAJASQAtBfg+gIQiQgTBIBqQA6BUBlBFQAnAbgSAUQgUAWhMgEQiFgHCICAQBFBBBvBTQAbAdgZAFQgRADg5gIQhEgJgWAAQgrgBgBATQAAAzAmAuQAbAiA9AsQBXA/AKAKQAzAqAQAnQALAcgfAIQgUAFg1gEQg4gDgPACQgeAEANAXQBVCcCxBPQAaAMBMAaQAiANgLAHQgfAUhjASQhvATiGAAIgmgBg");
	this.shape_5.setTransform(287,108);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383.5,205);


(lib.земля_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9DC0E5","#ABC9E9","#F0F7FF"],[0,0.714,1],0,0,0,0,0,1138.4).s().p("EgP2CwsQxIhjwjk1QwakyvNn1QvOn1tbqkQtkqqrOtDUgXVgbIgLBgiXQhik0hPkuQg6jgg3j5UgHBggmAFUgg1QFL/9QL8LQQQ8TZH0lUAZ/gVVAgUgKWQTjmRUQhqQTshnTmCyQTPCwSQG4QSHG1QPKkQZQQbSWXtQS+YjJkd0QDcKtCDK+UAGAAgEgF1AgDQltfRwPbbQwUbl4yUEQ5rUw/uKLQ6nIi7YAAQn+AAoCgvg");
	this.shape.setTransform(1283.2,1279.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0D2EE").s().p("ADqEKQgFgCAFgfQAOhfgKgOQgSgcgTAmQgeA7gCACQgLAKgGhCQgHhNgTgLQgBAAgNA1QgRA1gRgFQgKgqgLgmQgVhKgOAPQgPAUgaAmQgUAXgIggQgKgrgPgkQgUg0gCAmQgEBCg0hQQgZgpgKgOQgPgWABATQABAigYgXQgngrgdgZQgUgSgxgYQgmgSACgFQAEgNAlAJQAyALAUgDIBkgaQAogLgIASQgUAtAvgMQAmgKAigaQAOgKANAOQANAPgIAZQgOApA1gkQAcgSAmgeQAVgKABAlQABArAJADQAkAKArgmQAYgVAngtQAJgKgIA2QgKA8AQgDQBEgLAggzQAIgLAHgTQAEgKACAEQAFAMADAhQAEArgDA1QgFBEglBgQgjBag3BcQgWAngGAAIgBAAg");
	this.shape_1.setTransform(157.5,980.6,1,1,-5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CAE0F3").s().p("AKHI2QgThIgLgmQgUhDgUgXQgbgggOANQgLALgFAsIgIBTQgGAygMAUQgNAVgNgkQgFgRgShQQglimgqgRQgDgBgGCGQgNCGglgDQgkheglhVQhIingVAuQgTAsgPB+QgFAlgFADQgHAEgQgoQgfhNg/hkQhKhzAJBcQAKBfgigNQgZgKg3hLQg8hVgVgaQgjgsAJArQAJAwgUABQgRABgtghQiDhshOgtQg3ghhZADIg2ADQgVABgBgGQgDgaBOghICbhBQCvhaAPgGQBPgggKAyQgXB0Bag1QBIgqA9hPQAYgeAQAQQAQARgHA+QgNBrBvhnQAhgfAxg2IAwg1QAZgUACAUQACAOgJAuQgWBrAWABQBDAGBShiQA4hDAIgIQAkgnAhgKQAXgIAFAZQADARgFAqQgGAuABAMQACAZATgJQCDg9BKiMQAKgTAag9QAMgcAGAKQAOAaAJBSQAKBogKB/QgcFRhEHMQgNBWgNAEIgBAAQgKAAgOgxg");
	this.shape_2.setTransform(85.2,1148.4,1,1,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CAE0F3").s().p("AG8IYQgDhKgDgnQgFhHgOgaQgUgmgQAKQgNAIgOAqIgaBQQgRAvgQARQgRASgFgmQgCgSAAhSQABiqgmgaQgCgCgkCCQgqCAgjgLQgPhkgRhaQgii0geApQgcAngqB4QgNAjgGACQgIACgGgrQgNhSgphvQgwiAgKBbQgLBfgfgUQgWgQglhTQgohggPgfQgYgygBAsQgCAxgUgDQgQgDglgqQhpiHhBg9QgvgthYgQIg1gJQgVgDABgHQACgZBUgQIClgeQDBgxAOgCQBUgOgVAuQgvBsBjggQBPgZBNhAQAegYAMATQAMAVgVA6QgjBmCChMQBDgnBahEQAdgOgCAVQgCANgTArQgsBkAVAGQBAAUBlhNIBPg8QAsgdAigEQAngDgeBTQgQAsgCAMQgDAYAUgEQCOgfBmh4QAOgRAng1QASgZADALQAJAcgKBSQgMBngmB6QhmFGimGvQgfBSgOABIAAAAQgKAAgDg2g");
	this.shape_3.setTransform(112.3,1041.1,1,1,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B0D2EE").s().p("AjIEIQgMgHgWgZQgdgfgdgsQgmg5gdhkQgahbgNhrQgFgvAFgCQAFgBAPAbQAuBUARAGQAfAKgIgpQgLhBAAgDQADgPAsAxQA0A6AWgDIgUgzQgUg0ARgHQACAAA/A0QA/AvABgWQgDg1ABgSQACgfAaAVQAjAcAgAVQAwAdgVggQgmg3BbAhIA8AWQAaAJgMgPQgWgaAhAEIBfANQAbACA1gLQAqgIACAFQAFANgkAPQguAVgOAPIhABRQgZAhgFgTQgLgwgeAmQgYAegMAqQgFAQgTgDQgUgEgIgYQgOgqgVA9QgLAfgMAvQgMAVgWgdQgagigJADQgjAOgLA4QgGAfgEA8QgBANgagwQgdg1gLAMQgvAyAFA8QABANAFATQADAJgDAAIgBAAg");
	this.shape_4.setTransform(2333.2,808.8,1,1,-6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CAE0F3").s().p("AhALHQgcgLg8g4QhLhIhLhnQjIkUj3mHQgvhKAIgLQAFgJAuAeIBeBAQA7AmAeAEQAqAHABgTQACgPgZglQghgtgQgYQgbgpgEgXQgEgZAhAUQAQAJBBAxQCIBmArgPQgpg0gng3QhNhuAegWQADgCCoBaQCkBQgOgwQgOgvhGhpQgVgfACgGQADgHAmAUQBJAmByAiQCDAnhEg/QhFhCAigMQAagJBaAVICGAgQA3ALgjgcQgmgeAPgOQAMgMA4gEQAhgCBYgDQBUgFA1gJQBAgMBCg8IAmglQAQgOAEAEQAUARgmBMIhLCWQhLC3gHAOQgoBMgZgtQg5hmgiBiQgbBPAFBkQABAmgWgCQgYgCgjg0Qg8hZgRCWQgJBNAABwQgFAggQgOQgKgKgXgpQg1hfgSANQg2AoACB/IAABjQgDA1gRAdQgVAigwhLQgZgmgJgJQgRgRgJATQg8CEAjCZQAFAWAUA/QAIAZgHAAIgDAAg");
	this.shape_5.setTransform(2180.5,538.4,1,1,-5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CAE0F3").s().p("AmIJoQgYgSgqhHQg1hagrh4Qh0k/iBm9QgZhUALgJQAIgHAjApIBJBXQAuA1AbANQAnASAHgSQAFgOgOgqQgTg1gIgbQgQgvADgXQADgZAbAcQAMANAyBBQBmCIAugCQgZg9gWhAQgth/AjgNQAEgBCJCFQCHB6AAgzQgBgwgmh4QgMgkAEgFQAFgGAfAdQA8A6BjA/QBzBKgvhPQgwhTAkgCQAbgBBRAsIB4BEQAxAZgZgjQgdgoASgJQAPgIA3ALQAhAHBWAVQBRAUA2AFQBBAHBPgoIAvgZQATgKAEAGQAOAVg6BAQhOBQgjArQh7CcgLAKQg7A/gLgyQgbhyg8BVQgvBDgYBhQgJAlgUgIQgXgJgTg6Qghhmg7CLQgdBHgfBsQgOAdgLgSQgHgLgLguQgZhqgUAIQg/AXghB7IgbBfQgSAygZAXQgcAbgbhVQgOgsgGgMQgLgVgOAQQheBvgJCdQgBAWABBCQABAZgGAAIgDgBg");
	this.shape_6.setTransform(2334.5,748.3,1,1,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0D2EE").s().p("AAzEAQghgbgigVQgvgdAVAfQAlA4haggQgugSgPgFQgagIAMAOQAWAbghgEQg5gLgmgCQgcgCg0ALQgqAJgCgFQgEgNAjgQQAugVAOgPQAIgIA3hJQAagiAEAUQAMAvAdgmQAYgfAMgpQAFgQATADQAUAEAIAYQAPAqAUg9QAUhIADgGQALgVAWAdQAbAhAJgDQAjgOAKg4IAKhbQABgNAbAvQAcA2ALgMQAvgzgFg7QgNgtAHAEQAMAGAWAZQAeAfAdAsQAmA4AdBlQAcBbANBqQAFAvgFACQgFACgPgcQgvhUgQgFQgggLAIAqQAMBBAAADQgCAOgtgxQg0g4gWACQgCABAXAyQATA0gRAHQgigbgfgYQg/gvgBAWQAAAZACAuQgBASgKAAQgGAAgLgIg");
	this.shape_7.setTransform(197.8,1685.4,1,1,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CAE0F3").s().p("AsOLJQgTgRAmhNQA0hiAVg0QBMi5AGgMQAnhNAZAtQA6BmAhhiQAbhPgFhkQgCgnAWADQAYACAjAzQA9BZARiXQAFgsABhJIABhHQAFggAQAOQAKAJAXApQA2BfASgNQA2gogDh/IgBhjQADg1ARgeQAUghAyBKQAYAnAJAIQASARAIgTQA7iEgjiZQgFgVgUhAQgJgdAKAEQAcAKA8A4QBMBIBLBmQDLEUD4GFQAvBKgHALQgGAJgugeQg9gqghgVQg7glgegFQgqgGgBATQgCAPAZAkIAxBFQAcApAEAXQAEAZghgTQgQgKhBgwQiJhmgrAPQgDACBTBpQBOBugdAWQhZgwhTgoQilhPAPAxQAOAuBHBpQAVAfgCAGQgDAHgmgUQhKgmhxghQiDgmBDA/QBFBBghAMQgaAJhagUQhlgZghgGQg3gKAjAbQAmAegPAOQgMAMg3AEQirAFhYAQQhAALhBA9IgmAlQgMAMgGAAIgDgBg");
	this.shape_8.setTransform(346.7,1961.9,1,1,-2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CAE0F3").s().p("AC1JRQg8g5hlg/QhzhJAwBPQAwBSgkACQgbAChRgtQhag0gegPQgygYAaAjQAdAogSAJQgPAIg3gLQilgrhagJQhAgGhQAoIguAZQgTAKgEgFQgOgWA5g/QBOhQAjgsQB8ieAIgJQA7g/AMAyQAcBzA7hWQAvhFAXhgQAJglAUAIQAXAIATA6QAiBnA6iLQARgrAVhGIAVhEQAOgdALASQAIAMAKAtQAaBqATgHQA/gYAhh7QAXhUAEgLQARgzAZgXQAcgaAcBVQAOAsAGALQALAVAOgQQBdhvAIidQABgXgBhBQgBgfAJAHQAYARAqBHQA2BaAsB3QB3FECCG3QAZBUgKAJQgIAHgkgpIhJhXQgvg0gbgNQgngRgHASQgFANAOAqIAcBQQAPAvgCAXQgDAZgagcQgNgNgyhBQhniHguADQgDAAAzB8QAtB/gjANQhIhGhFg9QiIh6ABAzQABAwAnB5QALAjgDAFIgDABQgIAAgZgYg");
	this.shape_9.setTransform(193.8,1741.5,1,1,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B0D2EE").s().p("AFdFhQgrghgWgFQgMgDhhgRQgtgIAQgNQAoghgzgKQgqgHguAIQgSAEgGgUQgGgTATgTQAhghhFAKQhQAQgHAAQgagBARgjQATgogIgHQgegZg8AQQhDAagZAIQgOAFAhguQAlg0gRgFQhIgSg3AgQglAhABgJQAAgNAMggQAQgpAcgwQAjg9BShKQBLhEBgg/QArgbAEAFQADADgSAbQg5BSADASQAFAiAkgbIA7grQAPgEgZBAQgbBLAMASQABACAmgtQApgqAOANQACABgSBTQgOBQAVgKQAYgLAsgZQAegMgHAiQgJArgDApQgEA5ATgiQAjg7AOBhIAJBDQAEAbAIgSQAPghANAhQAIAUAbBJQAMAaAlArQAdAjgEAEQgDADgFAAQgLAAgYgSg");
	this.shape_10.setTransform(2178,1998.4,1,1,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B0D2EE").s().p("AKIItQhUgjgoACQgTABiwAZQgpAGgNgEQgQgEAOgVQA6hThcAMQhIAKhOApQgeARgRggQgRghAbgtQAuhPh0A5QiEBMgMADQgtAOAQhKIANg5QAEgcgMgGQg9gehhBAQggAVgvAmIhFA4QgRANAJgdQADgLAZg8QAuh0gfABQiCAFhTBcQgUAVgWAiQgMATgBgIQgEgaALhCQANhVAfhnQApiFB0i2QBrioCRipQA/hKAKAGQAHAEgXA8IguB4QgXBGAIAZQAVA7A1hGQAPgTAfgtQAbgmAQgLQASgMgCAkQgBASgMBJQgYCaAdAbQACACAyhnQA3hlAdAOQADACgDCiQADCZAhgcQAlgiBDhGQAxgogBBCQgBBXAIBLQAMBsAWhKQAYhOAbAYQAUARAaBOIAkB2QASAvAHglQAJgnALgCQAKgCASAbIAmBDQAdA0AYAhQAdApBOA6QA+AugGAKQgHALgRAAQgUAAgjgOg");
	this.shape_11.setTransform(2344.9,1789.6,1,1,-4.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CAE0F3").s().p("AFDJYQBFhmhvAQQhZANheAzQgkAUgJgVQgKgXAgg5QA4hhiZA3QgvARhGAhIhGAgQghAKAGgVQAEgOAcgoQAhgwAIgQQARghgPgHQhCgfh5A+IhfAvQg1AXglgDQgbgBAGgaQADgRAXgnQAYgpAEgNQAIgXgWABQidAHiDBpQgTAPgyAvQgXAXgCgMQgEgfAZhRQAehoA+h1QCjk2D+mfQAvhOAPABQALACgFA4IgOB0QgHBIALAdQAPAqATgIQAPgFAWgoIAqhNQAagtAUgPQAWgPgCAnQgBATgOBTQgeCuAkAgQADACA7h+QBDh7AjARQAEACgCDFQAGC8AngkQAlgjBChyQAUgiAGgBQAJgBAAAtQAABUAZB4QAdCMAbhcQAcheAdAaQAVATAaBbIAlCLQARA3AJgtQAKgxAVAGQARAGAgAxQATAeAvBPQAvBLAkAtQArA1BbAfIA3ASQAWAHgCAHQgGAZhdACQh5gCg9AEQjWASgQAAQhdAAAegsg");
	this.shape_12.setTransform(2375.3,1720.3,1,1,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CAE0F3").s().p("AMYKXQh5gJg9ACQjWAFgRgBQhdgFAhgqQBLhihwAKQhaAHhgAuQgmASgIgWQgIgYAkg2QA9heicAuQgvAOhJAdIhHAcQgiAJAHgVQAFgNAegnQAkguAJgQQATgfgOgIQg/gjh+A3IhhAqQg2ATglgEQgbgEAHgZQAFgRAZglQAbgoAEgMQAKgYgXAAQidgBiJBhQgTAOg2AtQgYAUgBgLQgDgfAehQQAlhmBFhxQC6kyEUmKQA1hLAOACQALACgJA3IgVB0QgLBIAIAdQANArATgHQAQgFAZgnIAuhKQAdgsAVgNQAXgOgFAnQgCATgTBSQgpCrAiAjQACACBEh6QBKh4AjAUQADACgODFQgGC8ApgiQAoghBJhuQAVghAHAAQAJAAgDAsQgGBVASB4QAUCNAghaQAihdAcAcQAUAUAUBdQALAzARBZQAOA4ALgsQANgxAVAJQARAGAdAzQARAfAqBRQApBOAiAuQAnA4BZAkIA2AVQAVAJgCAGQgHAWhGAAIgXgBg");
	this.shape_13.setTransform(2316.3,1856.3,1,1,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Layer 7
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B0D2EE").s().p("AkeGHQgMgHAOgjQATgwgBgVQAAgHgLhfQgFgqARALQApAbgFgwQgEgngUgnQgIgPAQgKQARgLAXAMQAnAUgcg6QglhCgCgGQgGgXAlAEQArAGADgJQAQgigfgwIg5hHQgIgLA0AQQA6ASgBgQQgBhFgtgnQgpgXAIgCQANgEAhACQArADAzAKQBCAOBbA0QBUAvBTBEQAlAdgDAGQgCAEgfgJQhcgcgPAHQgeAPAjAYQA2AmABADQAJAMhCgEQhNgEgOARQgBABAzAVQAyAXgHARIhSAJQhNAKANAPQARASAjAgQATAXghADQgqAEgoAJQg2ANAlAHQBBAOhXAoIg7AaQgYAMASACQAiADgaAVIhNA5QgVARgeAtQgWAigGAAIgBAAg");
	this.shape_14.setTransform(804.2,2330.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0D2EE").s().p("Ai6KiQgagEAEhBQAEhVgPghQgGgOhRiRQgkhBAnAJQBeAWgphLQggg8g/g1QgZgUAXgZQAYgaAzAIQBWANhZhQQhwhZgHgJQgbgiBIgLIA4gIQAbgHACgMQAHg/hag+QgcgUgzgcIhJgoQgRgLAcgCIBLAAQB4ABgLgaQgvhuhugpQgagKgmgIQgVgEAHgEQAWgLA/gOQBSgRBogIQCGgJDKAmQC8AkDIBEQBZAegDAKQgBAIg+AAQhtAAgPABQhIAEgTAPQgvAmBRAWQAWAHAyALQArAKAQALQARALghAKQgRAGhGAOQiUAfgPAiQgBACBuAJQBtAOgDAfQhOAbhGAbQiMA3AmASQArAVBVAjQA0Abg9AVQhOAchDAhQhfAvBLgGQBOgFgMAfQgJAXg/AwIheBIQglAeAjgFQAmgGAGAJQAFAIgTAYIgwA3QglAqgXAgQgcAngbBXQgVBDgLAAIgBAAg");
	this.shape_15.setTransform(1028.1,2431.1,1,1,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3D0ED").s().p("AmaKiQgYgJAPg/QAUhSgJgkQgEgQg0idQgYhHAlARQBYAngahRQgVhBg0hAQgUgYAbgUQAdgVAwAQQBTAdhKhfQhdhsgFgKQgUgnBIAEIA5ABQAcgBAEgMQASg8hMhOQgZgZgtgkQg2gtgKgJQgPgNAdADQAKABA/ANQB2AXgGgcQgah1hlg9QgXgOgkgOQgUgIAHgDQAYgHBBgCQBUgBBnALQCGAPDABMQCxBGC5BoQBRAtgEAKQgDAIg9gMIh5gWQhIgKgWAMQg1AcBLAmIBEAeQApASANANQAOAOgiAFQgRAChIABQiXADgVAeQgBADBqAdQBpAigJAdQhSAMhKAOQiTAcAhAZQAnAcBNAxQAuAlg/AKQhWAPhEATQhlAbBKAJQBNAJgSAcQgNAVhGAkIhqA1QgqAXAkABQAnABAEAKQADAJgXAUIg6AuQgtAjgcAbQgiAhgrBQQggA9gLAAIgCgBg");
	this.shape_16.setTransform(907.2,2394.1,1,1,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CAE0F3").s().p("AizLWQglhpgZgzQhWi0gEgNQgfhQAyAMQBzAZgyhbQgohIhOhAQgegYARgPQASgRA9AJQBrAPhkhwQgegjg2gyIgzgxQgUgZAUgCQAOgCAuALQBqAYACgWQAHhDhfhUIhKhBQgmgmgKghQgLglBZANQAtAHANAAQAYgCgIgTQg7iFiJhNQgUgLg7gbQgcgNAKgFQAagOBTgGQBogJB+AOQFZAlHCBOQBWAPADANQADAKg1AOQhIARgmAKQhEATgXATQghAbANAOQAKAKAsAHIBUAJQAxAIAUAMQAVAOglALQgRAGhQAQQinAggSAqQgBADCGAKQCFAQgEAlQhfAihVAiQipBEAuAWQArAUB+ATQAlAFADAGQADAHgoAPQhOAchlA9Qh1BIBcgIQBggIgPAiQgKAZhMA2IhyBOQgsAhArgHQAxgIAAAUQABARgjAsQgUAbg4BDQg1BBgdAuQgiA3ABBZIACA1QAAAWgGAAIgCAAQgYAAgfhMg");
	this.shape_17.setTransform(1100.7,2451.9,1,1,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CAE0F3").s().p("AkILbQgfhrgWg0QhLi6gEgMQgZhSAxAOQBxAhgtheQgjhKhKhFQgcgaARgOQATgPA9AMQBpAWhdh3Qgcgkgyg1Igxg0QgSgaAVgBQAOgBAtANQBoAfAEgWQALhChbhaIhGhGQgjgogIghQgJgmBYATQAtAKAMAAQAZAAgHgUQgyiIiFhVQgSgMg7gfQgbgPAKgEQAbgNBTgBQBogCB+AVQFJA4HJBrQBVAUADANQACAKg1ALQhKAMgmAIQhFAPgYARQgjAZANAPQAJAMArAIQAaAGA5AJQAxAKATAOQAUAPglAJQgSAFhRALQioAWgVApQgBADCFASQCFAYgHAkQhhAchXAdQitA6AtAZQAqAXB8AaQAlAHACAGQAEAHgqANQhPAXhoA3Qh6BBBdgCQBggCgRAhQgMAYhOAxIh3BHQgtAfAsgFQAvgFAAAUQgBARglAqQgVAZg8BAQg5A+ggAsQglA1gEBZIgCA1QgBAVgGABIgBAAQgZAAgahQg");
	this.shape_18.setTransform(958.8,2429.2,1,1,3.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CAE0F3").s().p("An/M8QgagEgIhVQgHhvgJg4QghjDgBgPQgHhVAtAYQBnA5gXhlQgThSg5hSQgWgfAUgKQAWgLA5AZQBiAshBiIQgTgpgmg/Igkg9QgMgeAVAEQANACApAXQBgA0AIgUQAZg+hFhsIg1hTQgZgvgBgiQAAgnBRAlQAqAUAMADQAYAFgDgVQgTiQhvhvQgQgQgygrQgXgUALgCQAdgHBRARQBmAVB3AwQE7CBGgDJQBPAmAAAOQAAAKg3gBQhKgEgnAAQhHgBgbAMQgnARAIARQAHANApASIBNAgQAuAVAPASQAQASgmABQgSABhSgHQipgPgdAjQgCADB+AuQB9A1gOAiQhlAGhbAKQi2ATAmAgQAkAgB0A0QAiAPABAHQACAIgrADQhTAGhyAfQiDAlBaASQBdATgXAdQgRAVhXAeQhjAggfAMQg0ATArAFQAxAGgFATQgEARgtAhQgbAUhJAxQhGAwgoAkQgwArgXBWIgNA0QgFATgGAAIgBAAg");
	this.shape_19.setTransform(855.6,2381.5,1,1,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B0D2EE").s().p("AggGGQhfgPhmghQgtgOABgGQABgFAfgCQBggHAMgNQAWgYgpgKQhAgQgCgCQgMgIA/gUQBKgYAGgVIg3gCQg3gFABgSQAAgBBKgkQBFgmgTgJQgygUgQgJQgagOAdgPQAogTAhgWQAugfglAGQhDALBEhEIAuguQARgUgQAFQgiAJARgdIA0hQQANgYAMg1QAKgpAFAAQAOACgBAmQAAAyAIAUQAEAKArBRQATAlgUgEQgvgJAVArQARAhAhAeQANALgLAQQgMAQgZgDQgsgEAvAsQAYAXAmAeQAOATgkAJQgqALAAAJQgDAlAvAiQAZASA1AcQALAIg2ADQg9AEAGAPQAaBAA4AUQANAFAUADQALACgEACQgLAIgfAKQgpANg0AIQgbAFgiAAQgwAAg9gKg");
	this.shape_20.setTransform(1334.2,109.3,1,1,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B0D2EE").s().p("Am5KjQhdgCgBgLQgBgIA8gSIB1gmQBEgYAOgVQAigyhUACIhLAFQgsADgSgFQgTgGAcgUQAOgKBAgjQCDhJAEglQg0AMg3AKQhtATgFgeQgBgCB+heQB1hegpgGQhogIgjgHQg6gLAzgnQBCgxA3gzQBNhJhGAcQhJAdADgiQACgZAthBIBFhgQAbgpghAQQgjASgIgHQgHgGALgdQAthcAUhAQAPgtAAhcQAAhIAMgCQAagEAQA/QAVBTAYAcQAMANB2BxQA2AzgoADQhfAHA8A7QAwAwBMAfQAdANgOAeQgQAggyAIQhWANBtAzQA5AaBWAfQAkAZhCAfIgzAZQgYAOACAMQAMA+BoAhQA6ASByAVQATAFgbAKIhGAXQhzAiASAWQBOBcB1AGQAbABAngEQAWgCgGAGQgSASg4AfQhJAphhAmQh9AxjNAYQiZARioAAIhRgBg");
	this.shape_21.setTransform(1101,103.5,1,1,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3D0ED").s().p("Ag5KaQi+gOjQgsQhbgUABgKQABgIA+gHIB6gPQBHgMASgSQAqgrhTgNIhKgJQgsgFgRgJQgSgJAggOQAPgHBFgXQCPgvALgkQg2ACg3AAQhvgCAAgeQAAgDCNhFQCEhGgngOQhlgbgggNQg3gWA5gcQBKgkBAgpQBYg5hJAOQhNAPAIghQAHgYA5g3IBVhSQAigjgjAKQgmALgHgJQgFgHAQgaIApg9QAhguATgjQAWgpARhaQANhHAMABQAaABAEBAQAGBVASAgQAIANBhCHQAXAfACAMQACAQgXgDQhggLAxBGQAnA3BFAtQAbASgVAbQgVAdgygCQhYgDBjBFQAyAlBPAvQAfAfhHASIg2APQgbAKAAAMQAAA/BgA0QA2AcBsAqQASAIgcAFIhJAJQh4ANAOAYQA7BpBzAcQAaAGAnAEQAWACgHAEQgVAOg9AVQhQAahmAUQhTAQhwAAQhDAAhLgGg");
	this.shape_22.setTransform(1225.6,90.5,1,1,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CAE0F3").s().p("ApVMhQgGgJAugdIBhg6QA7gmARgZQAXgkgQgJQgNgIgsAHIhSAQQgyAIgWgHQgYgGAfgWQAPgKBIgnQCWhRAEguQhAAQhCAMQiFAYgHgkQAAgDCYh0QCOhzgzgHQgwgHh9AUQglAGgEgFQgGgGAigaQBCgyBOhZQBbhnhWAjQhZAkAEglQACgbA5hJIBVhsQAhgugoAUQgrAWgHgTQgGgQAUg0QBFicAWhXQARg/gchVIgSgyQgGgUAGgDQAXgKA2BCIBpCDQCICTAIAKQAzBEgzAEQh0AJBLBIQA8A6BcAlQAkAOgLAUQgMAUg+AKQhpASCABPQBCAoBnAuQAaASgTAIQgNAGguADQhtAJAEAVQANBCB1A0IBaApQAvAZATAcQAOAUgXAMQgPAHgqAHQguAHgMAEQgWAIANAQQBfBuCaAgQAWAFBBAJQAfADgIAIQgVAVhNAfQhhAnh9AZQlIBBnRA9QgrAGgXAAQgYAAgDgGg");
	this.shape_23.setTransform(1037.7,121.1,1,1,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CAE0F3").s().p("AphMXQgGgKAwgaIBlg1QA9giASgYQAagigQgKQgNgIgsAEIhUALQgxAEgWgHQgYgIAhgUQAPgKBLgiQCahIAHgtQhBAMhDAIQiFAQgFglQgBgDCfhqQCVhrgygKQgvgKh/ANQglADgEgEQgFgHAjgYQBFguBThUQBhhhhYAeQhbAeAGgkQAEgbA9hGQAhgmA7hBQAjgrgpARQgtAUgFgUQgFgQAXgzQBOiYAchVQAUg+gXhWIgOgzQgGgVAGgCQAYgJAyBFIBhCJQB+CaAHALQAxBHgzABQh1ADBGBMQA5A9BaArQAjAQgNATQgNAUg+AGQhqALB7BXQBAArBjA1QAaATgUAHQgNAFgvABQhtACADAWQAJBCBxA7QBOAoAKAGQAtAcASAdQATAihYAIQguAEgMADQgXAIAMAQQBYBzCYAqQAWAGBAANQAeAFgIAIQgXAUhOAZQhjAhh+ARQlTAvnMAgQgeACgUAAQgnAAgEgHg");
	this.shape_24.setTransform(1170.9,80.3,1,1,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CAE0F3").s().p("AERMaQlQgdnNhFQhWgNgEgNQgDgKA1gPIBtgeQBEgUAWgTQAhgcgOgNQgKgLgsgFQg4gFgcgDQgxgGgUgNQgVgNAkgMQARgGBQgRQCmglARgqQhCgDhDgGQiGgOADglQABgDCyhFQCohIgvgVQgsgTh+gQQglgEgCgGQgEgHAogQQBNgeBjg/QB0hKhcAJQhfAKAOgiQAKgZBKg3QAogeBIgzQAsgigsAIQgwAKgBgVQgBgRAigtQAUgbA3hEQAzhCAbgvQAhg4gDhZIgDg1QAAgVAGgBQAZgEAhBPIBBCaQBZCwAGAPQAgBQgygKQhzgXA0BZQAqBIBPA+QAeAXgQAQQgRAQg+gHQhrgNBmBvQA1A5BVBJQAVAZgVACQgOACgugJQhqgWgCAWQgGBDBiBSIBLBAQAnAlAKAgQAIAYgZAFQgRADgqgGQgugGgNABQgYACAJATQA9CDCLBKQAUALA8AaQAcAMgKAFQgaAPhSAIQgyAFg5AAQg7AAhBgFg");
	this.shape_25.setTransform(1279,79.9,1,1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,0,2464.2,2532.2);


(lib.сновымгодом = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.снг("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(156.3,78.7,1,1,0,0,0,156.3,78.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1,x:156.5,y:79.6},0).wait(1).to({scaleY:0.99,skewX:0.3,x:156.7,y:80.5},0).wait(1).to({scaleY:0.99,x:156.9,y:81.4},0).wait(1).to({scaleY:0.98,skewX:0.5,x:157.1,y:82.3},0).wait(1).to({scaleY:0.98,skewX:0.6,x:157.3,y:83.2},0).wait(1).to({scaleY:0.98,skewX:0.8,x:157.5,y:84},0).wait(1).to({scaleY:0.97,skewX:1,x:157.7,y:84.9},0).wait(1).to({scaleY:0.97,x:157.9,y:85.8},0).wait(1).to({scaleY:0.96,skewX:1.3,x:158.1,y:86.7},0).wait(1).to({scaleY:0.96,x:158.3,y:87.6},0).wait(1).to({scaleY:0.96,skewX:1.5,x:158.5,y:88.5},0).wait(1).to({scaleY:0.95,skewX:1.8,x:158.6,y:89.4},0).wait(1).to({scaleY:0.95,x:158.8,y:90.3},0).wait(1).to({regY:78.8,scaleY:0.94,skewX:2,x:159,y:91.2},0).wait(1).to({regY:78.7,scaleY:0.94,skewX:2.2,x:159.2,y:92},0).wait(1).to({regX:156.4,scaleY:0.94,skewX:2.3,x:159.7,y:91.1},0).wait(1).to({regX:156.3,scaleY:0.95,x:160,y:90.3},0).wait(1).to({regX:156.4,scaleY:0.95,x:160.4,y:89.4},0).wait(1).to({scaleY:0.96,skewX:2.5,x:160.8,y:88.5},0).wait(1).to({regX:156.3,scaleY:0.96,x:161.2,y:87.6},0).wait(1).to({scaleY:0.96,x:161.6,y:86.7},0).wait(1).to({regX:156.4,scaleY:0.97,skewX:2.6,x:162,y:85.8},0).wait(1).to({scaleY:0.97,skewX:2.8,x:162.4,y:85},0).wait(1).to({scaleY:0.98,x:162.8,y:84},0).wait(1).to({regX:156.3,regY:78.8,scaleY:0.98,x:163.1,y:83.3},0).wait(1).to({regY:78.7,scaleY:0.99,skewX:3,x:163.5,y:82.3},0).wait(1).to({regY:78.8,scaleY:0.99,x:163.9,y:81.4},0).wait(1).to({regY:78.7,scaleY:0.99,x:164.2,y:80.5},0).wait(1).to({regX:156.4,scaleY:1,skewX:3.1,x:164.7,y:79.6},0).wait(1).to({regX:156.3,scaleY:1,skewX:3.3,x:165.1,y:78.7},0).wait(1).to({scaleY:1,skewX:3.1,x:165,y:79.3},0).wait(1).to({scaleY:0.99,skewX:3,x:164.9,y:79.8},0).wait(1).to({scaleY:0.99,y:80.4},0).wait(1).to({scaleY:0.99,x:164.8,y:81},0).wait(1).to({scaleY:0.98,skewX:2.8,x:164.7,y:81.5},0).wait(1).to({scaleY:0.98,y:82.1},0).wait(1).to({scaleY:0.97,x:164.6,y:82.6},0).wait(1).to({scaleY:0.97,skewX:2.6,x:164.5,y:83.2},0).wait(1).to({scaleY:0.96,skewX:2.5,y:83.8},0).wait(1).to({scaleY:0.96,x:164.4,y:84.4},0).wait(1).to({scaleY:0.96,x:164.3,y:84.9},0).wait(1).to({scaleY:0.95,skewX:2.3,y:85.4},0).wait(1).to({scaleY:0.95,x:164.2,y:86},0).wait(1).to({scaleY:0.94,x:164.1,y:86.5},0).wait(1).to({scaleY:0.94,skewX:2.2,y:87.1},0).wait(1).to({regY:78.8,scaleY:0.94,skewX:2,x:163.6,y:86.6},0).wait(1).to({regX:156.4,scaleY:0.95,skewX:1.8,x:163.1,y:86.1},0).wait(1).to({regY:78.7,scaleY:0.95,x:162.6,y:85.4},0).wait(1).to({scaleY:0.96,skewX:1.5,x:162.1,y:84.9},0).wait(1).to({regX:156.3,scaleY:0.96,skewX:1.3,x:161.4,y:84.3},0).wait(1).to({scaleY:0.96,x:160.9,y:83.8},0).wait(1).to({scaleY:0.97,skewX:1,x:160.4,y:83.2},0).wait(1).to({regX:156.4,scaleY:0.97,skewX:0.8,x:159.9,y:82.6},0).wait(1).to({regX:156.3,scaleY:0.98,x:159.4,y:82.1},0).wait(1).to({regX:156.4,scaleY:0.98,skewX:0.5,x:158.9,y:81.5},0).wait(1).to({scaleY:0.98,x:158.4,y:81},0).wait(1).to({regX:156.3,scaleY:0.99,skewX:0.3,x:157.9,y:80.3},0).wait(1).to({scaleY:0.99,skewX:0,x:157.3,y:79.8},0).wait(1).to({regX:156.4,regY:78.8,scaleY:1,x:156.9,y:79.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.7,157.4);


(lib.всеследы = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sled copy 2
	this.instance = new lib.sled1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(718,487.5,3.698,1,-2.8,0,0,10.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:3.7,rotation:-2.1,x:724.7},0).wait(1).to({rotation:-1.5,x:731.5,y:487.4},0).wait(1).to({rotation:-0.8,x:738.4,y:487.3},0).wait(1).to({scaleX:3.7,rotation:-0.3,x:745.2,y:487.2},0).wait(1).to({rotation:0.3,x:752,y:487.1},0).wait(1).to({rotation:0.8,x:758.9},0).wait(1).to({regY:3.7,scaleX:3.7,rotation:1.5,x:765.8},0).wait(1).to({scaleX:3.7,rotation:2.2,x:772.7,y:487},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// sled copy 2
	this.instance_1 = new lib.sled1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(449.8,533.2,3.698,1,-11.2,0,0,10.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:3.7,scaleY:1,rotation:-11,x:457.5,y:531.1},0).wait(1).to({x:465.3,y:529},0).wait(1).to({x:473,y:526.9},0).wait(1).to({rotation:-10.8,x:480.7,y:524.9},0).wait(1).to({x:488.4,y:522.8},0).wait(1).to({x:496.1,y:520.7},0).wait(1).to({x:503.8,y:518.6},0).wait(1).to({regY:3.7,scaleX:3.7,scaleY:1,rotation:-10.7,x:511.6,y:516.5},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-10,x:523.5,y:514.1},0).wait(1).to({regY:3.6,rotation:-9.3,x:535.2,y:511.5},0).wait(1).to({rotation:-8.8,x:547.1,y:509.1},0).wait(1).to({scaleY:1,rotation:-8,x:558.8,y:506.7},0).wait(1).to({rotation:-7.3,x:570.6,y:504.3},0).wait(1).to({rotation:-6.8,x:582.5,y:501.9},0).wait(1).to({regY:3.7,scaleX:3.7,rotation:-6.2,x:594.3,y:499.6},0).wait(1).to({regY:3.6,scaleX:3.7,rotation:-5.8,x:602.3,y:498.6},0).wait(1).to({regY:3.7,rotation:-5.5,x:610.2,y:497.7},0).wait(1).to({rotation:-5.1,x:618.3,y:496.8},0).wait(1).to({rotation:-4.8,x:626.1,y:495.7},0).wait(1).to({rotation:-4.5,x:634.1,y:494.8},0).wait(1).to({scaleX:3.7,rotation:-4.1,x:642,y:493.8},0).wait(1).to({rotation:-3.8,x:649.9,y:492.9},0).wait(1).to({regY:3.6,scaleX:3.7,rotation:-3.5,x:657.8,y:491.9},0).wait(1).to({regY:3.7,scaleX:3.7,rotation:-3.3,x:666.4,y:491.4},0).wait(1).to({regY:3.6,x:675,y:490.6},0).wait(1).to({rotation:-3,x:683.6,y:489.9},0).wait(1).to({x:692.2,y:489.3},0).wait(1).to({scaleX:3.7,rotation:-2.8,x:700.8,y:488.7},0).wait(1).to({scaleX:3.7,x:709.4,y:488.1},0).wait(1));

	// sled copy 3
	this.instance_2 = new lib.sled1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.9,619.4,2.332,1,-13.9,0,0,10.6,3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({scaleX:2.67,scaleY:1,rotation:-14.1,x:177.7,y:619.5},0).wait(1).to({scaleX:3.01,rotation:-14.5,x:175.5,y:619.7},0).wait(1).to({scaleX:3.35,rotation:-15,x:173.3,y:620},0).wait(1).to({regX:10.7,regY:3.6,scaleX:3.7,scaleY:1,rotation:-15.4,x:171.2,y:620.1},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-15.3,x:198.6,y:612.4},0).wait(1).to({scaleX:3.69,rotation:-15.5,x:226,y:604.5},0).wait(1).to({x:253.4,y:596.8},0).wait(1).to({rotation:-15.6,x:280.7,y:589},0).wait(1).to({rotation:-15.8,x:308.1,y:581.2},0).wait(1).to({x:335.6,y:573.4},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-16,x:362.8,y:565.6},0).wait(1).to({regY:3.7,scaleX:3.73,scaleY:1,rotation:-15.6,x:367.5,y:563.7},0).wait(1).to({scaleX:3.76,rotation:-15.3,x:372.1,y:561.8},0).wait(1).to({regY:3.6,scaleX:3.79,rotation:-15.1,x:376.7,y:559.7},0).wait(1).to({regY:3.7,scaleX:3.82,rotation:-14.8,x:381.3,y:557.8},0).wait(1).to({scaleX:3.85,rotation:-14.5,x:385.9,y:555.9},0).wait(1).to({scaleX:3.88,rotation:-14.3,x:390.5,y:553.9},0).wait(1).to({regY:3.6,scaleX:3.91,rotation:-14,x:395.1,y:551.9},0).wait(1).to({regX:10.6,regY:3.8,scaleX:3.95,scaleY:1,rotation:-13.9,x:399.6,y:550},0).wait(1).to({scaleX:3.91,scaleY:1,rotation:-13.3,x:406.8,y:547.7},0).wait(1).to({scaleX:3.87,rotation:-13,x:414,y:545.2},0).wait(1).to({regY:3.9,scaleX:3.84,rotation:-12.6,x:421.3,y:542.9},0).wait(1).to({regY:3.8,scaleX:3.8,rotation:-12.3,x:428.3,y:540.4},0).wait(1).to({scaleX:3.76,rotation:-11.8,x:435.6,y:538},0).wait(1).to({scaleX:3.73,rotation:-11.5,x:442.7,y:535.6},0).wait(1));

	// sled
	this.instance_3 = new lib.sled1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(544.1,549.5,3.698,1,-10.2,0,0,10.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:3.7,scaleY:1,rotation:-10,x:550.1,y:548.5},0).wait(1).to({rotation:-9.8,x:556,y:547.6},0).wait(1).to({rotation:-9.5,x:562,y:546.5},0).wait(1).to({scaleX:3.7,scaleY:1,x:567.9,y:545.6},0).wait(1).to({regY:3.5,scaleX:3.7,scaleY:1,x:577,y:543.9},0).wait(1).to({scaleX:3.7,rotation:-9.8,x:585.9,y:542.3},0).wait(1).to({regY:3.6,scaleX:3.7,x:594.8,y:540.8},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-10.2,x:603.6,y:539.1},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-9.3,x:611.5,y:537.7},0).wait(1).to({rotation:-8.8,x:619.5,y:536.1},0).wait(1).to({scaleY:1,rotation:-8,x:627.5,y:534.7},0).wait(1).to({rotation:-7.3,x:635.4,y:533.3},0).wait(1).to({rotation:-6.8,x:643.4,y:531.8},0).wait(1).to({rotation:-6,x:651.5,y:530.4},0).wait(1).to({regX:10.8,scaleX:3.7,rotation:-5.5,x:659.7,y:528.9},0).wait(1).to({scaleX:3.7,rotation:-5.1,x:666.3,y:527.8},0).wait(1).to({rotation:-4.8,x:673.1,y:526.7},0).wait(1).to({rotation:-4.5,x:679.8,y:525.6},0).wait(1).to({scaleX:3.7,rotation:-4.3,x:686.6,y:524.4},0).wait(1).to({rotation:-4,x:693.4,y:523.3},0).wait(1).to({rotation:-3.8,x:700.2,y:522.3},0).wait(1).to({regY:3.7,rotation:-3.5,x:706.9,y:521.2},0).wait(1).to({regX:10.7,regY:3.6,scaleX:3.7,rotation:-3.2,x:713.6,y:520.1},0).wait(1).to({scaleX:3.7,rotation:0,skewX:-3,skewY:-2.8,x:721.2,y:519.4},0).wait(1).to({rotation:-2.8,skewX:0,skewY:0,x:728.8,y:518.6},0).wait(1).to({rotation:-2.5,x:736.6,y:517.8},0).wait(1).to({rotation:-2.3,x:744.2,y:517.1},0).wait(1).to({rotation:-2,x:751.9,y:516.3},0).wait(1).to({rotation:-1.8,x:759.6,y:515.5},0).wait(1));

	// sled
	this.instance_4 = new lib.sled1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(361.2,595.7,3.698,1,-15.4,0,0,10.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:3.69,scaleY:1,rotation:-14.8,x:362.8,y:595.1},0).wait(1).to({scaleX:3.7,rotation:-14.5,x:364.6,y:594.2},0).wait(1).to({rotation:-14,x:366.3,y:593.4},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-13.7,x:368.1,y:592.7},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-13.8,x:374.6,y:589.9},0).wait(1).to({rotation:-14,x:380.9,y:587.3},0).wait(1).to({regY:3.5,rotation:-14.3,x:387.3,y:584.4},0).wait(1).to({regY:3.6,scaleX:3.7,scaleY:1,rotation:-14.5,x:393.8,y:581.8},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-14.3,x:401.8,y:579.9},0).wait(1).to({rotation:-14,x:409.6,y:578},0).wait(1).to({rotation:-13.8,x:417.6,y:576.2},0).wait(1).to({rotation:-13.6,x:425.6,y:574.3},0).wait(1).to({rotation:-13.5,x:433.4,y:572.4},0).wait(1).to({rotation:-13.3,x:441.4,y:570.6},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-13.2,x:449,y:568.7},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-12.8,x:454.2,y:567.1},0).wait(1).to({rotation:-12.6,x:459.2,y:565.6},0).wait(1).to({rotation:-12.3,x:464.3,y:564.1},0).wait(1).to({rotation:-12.1,x:469.4,y:562.6},0).wait(1).to({rotation:-11.8,x:474.5,y:561},0).wait(1).to({rotation:-11.6,x:479.6,y:559.5},0).wait(1).to({rotation:-11.3,x:484.6,y:558},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-11.2,x:489.7,y:556.5},0).wait(1).to({scaleX:3.7,scaleY:1,rotation:-11,x:497.6,y:555.5},0).wait(1).to({rotation:-10.8,x:505.3,y:554.5},0).wait(1).to({scaleX:3.69,rotation:-10.6,x:513.1,y:553.5},0).wait(1).to({rotation:-10.5,x:520.8,y:552.5},0).wait(1).to({rotation:-10.3,x:528.6,y:551.5},0).wait(1).to({scaleX:3.7,x:536.4,y:550.5},0).wait(1));

	// sled
	this.instance_5 = new lib.sled1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(238.4,626.2,2.995,1,-10.4,0,0,10.7,3.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).wait(1).to({scaleX:3.09,scaleY:1,rotation:-11,x:255.9,y:621.8},0).wait(1).to({scaleX:3.19,rotation:-11.8,x:273.5,y:617.5},0).wait(1).to({scaleX:3.29,rotation:-12.3,x:291,y:613.1},0).wait(1).to({regY:3.8,scaleX:3.39,rotation:-13.1,x:308.5,y:608.8},0).wait(1).to({scaleX:3.49,rotation:-13.8,x:326.1,y:604.5},0).wait(1).to({regY:3.6,scaleX:3.6,rotation:-14.6,x:343.7,y:600},0).wait(1));

	// sled4 copy 2
	this.instance_6 = new lib.sled1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(597.3,535.7,0.731,0.803,-15.7,0,0,10.7,3.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(1).to({scaleY:0.8,rotation:-14.6,x:605.9,y:533.4},0).wait(1).to({rotation:-13.6,x:614.5,y:531},0).wait(1).to({rotation:-12.6,x:623.2,y:528.8},0).wait(1).to({rotation:-11.6,x:631.8,y:526.5},0).wait(1).to({rotation:-10.6,x:640.4,y:524.1},0).wait(1).to({rotation:-9.6,x:649,y:521.8},0).wait(1).to({regX:10.8,scaleY:0.8,rotation:-8.7,x:657.7,y:519.5},0).wait(1).to({scaleY:0.8,rotation:-7.3,x:664.1,y:518.1},0).wait(1).to({scaleY:0.8,rotation:-5.8,x:670.7,y:516.8},0).wait(1).to({rotation:-4.3,x:677.2,y:515.5},0).wait(1).to({rotation:-3,x:683.8,y:514.2},0).wait(1).to({regX:10.7,rotation:-1.5,x:690.3,y:512.8},0).wait(1).to({rotation:-0.3,x:696.8,y:511.4},0).wait(1).to({regX:10.8,rotation:1,x:703.4,y:510.1},0).wait(1).to({rotation:2.5,x:709.9,y:508.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// sled3 copy 2
	this.instance_7 = new lib.sled1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(582.2,546.2,0.695,0.718,-15.7,0,0,10.7,3.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).wait(1).to({scaleX:0.68,scaleY:0.76,rotation:-14,x:590.6,y:544.2},0).wait(1).to({scaleX:0.66,scaleY:0.8,rotation:-12.3,x:598.9,y:542.2},0).wait(1).to({regX:10.8,scaleX:0.65,scaleY:0.84,rotation:-10.8,x:607.3,y:540.2},0).wait(1).to({regX:10.9,scaleX:0.63,scaleY:0.88,rotation:-9.2,x:615.6,y:538.2},0).wait(1).to({rotation:-8,x:624.1,y:536.2},0).wait(1).to({regX:10.8,rotation:-7,x:632.7,y:534.3},0).wait(1).to({rotation:-6,x:641.3,y:532.3},0).wait(1).to({rotation:-5,x:649.8,y:530.3},0).wait(1).to({regX:10.9,rotation:-4,x:658.4,y:528.2},0).wait(1).to({rotation:-3,x:667,y:526.4},0).wait(1).to({regX:10.6,rotation:-2.2,x:675.5,y:524.3},0).wait(1).to({rotation:-0.8,x:682,y:523.4},0).wait(1).to({regY:3.7,rotation:0.5,x:688.3,y:522.6},0).wait(1).to({regX:10.7,regY:3.6,rotation:2,x:694.8,y:521.6},0).wait(1).to({regX:10.6,regY:3.7,rotation:3.3,x:701.1,y:520.7},0).wait(1).to({rotation:4.8,x:707.4,y:519.8},0).wait(1).to({regX:10.5,regY:3.8,rotation:6.1,x:713.8,y:518.9},0).wait(1).to({regX:10.7,regY:3.6,rotation:7.5,x:720.2,y:517.9},0).wait(1).to({regX:10.8,rotation:9,x:726.6,y:516.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// sled4
	this.instance_8 = new lib.sled1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(657.7,519.5,0.731,0.803,-8.7,0,0,10.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:-7,x:665.1,y:518},0).wait(1).to({rotation:-5.3,x:672.6,y:516.5},0).wait(1).to({rotation:-3.8,x:680.1,y:514.9},0).wait(1).to({regY:3.5,rotation:-2.3,x:687.5,y:513.3},0).wait(1).to({regY:3.6,rotation:-0.5,x:695.1,y:511.8},0).wait(1).to({regX:10.7,rotation:0.8,x:702.4,y:510.3},0).wait(1).to({regX:10.8,rotation:2.5,x:709.9,y:508.8},0).to({_off:true},1).wait(15).to({_off:false,regX:10.7,rotation:-15.7,x:597.3,y:535.7},0).wait(1).to({scaleY:0.8,rotation:-14.6,x:605.9,y:533.4},0).wait(1).to({regX:10.6,rotation:-13.5,x:614.5,y:531.1},0).wait(1).to({regX:10.7,rotation:-12.5,x:623.2,y:528.7},0).wait(1).to({rotation:-11.5,x:631.8,y:526.5},0).wait(1).to({rotation:-10.5,x:640.4,y:524.1},0).wait(1).to({rotation:-9.6,x:649,y:521.8},0).wait(1));

	// sled3
	this.instance_9 = new lib.sled1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(675.5,524.3,0.63,0.876,-2.2,0,0,10.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:10.7,rotation:-0.5,x:682.9,y:523.2},0).wait(1).to({rotation:1,x:690.2,y:522.2},0).wait(1).to({regY:3.7,rotation:2.5,x:697.5,y:521.2},0).wait(1).to({regX:10.6,rotation:4.1,x:704.6,y:520.1},0).wait(1).to({regY:3.6,rotation:5.8,x:712,y:519},0).wait(1).to({rotation:7.3,x:719.3,y:518},0).wait(1).to({regX:10.8,rotation:9,x:726.6,y:516.9},0).to({_off:true},1).wait(11).to({_off:false,regX:10.7,scaleX:0.7,scaleY:0.72,rotation:-15.7,x:582.2,y:546.2},0).wait(1).to({scaleX:0.68,scaleY:0.76,rotation:-14,x:590.6,y:544.2},0).wait(1).to({scaleX:0.66,scaleY:0.8,rotation:-12.3,x:598.9,y:542.2},0).wait(1).to({regX:10.8,scaleX:0.65,scaleY:0.84,rotation:-10.8,x:607.3,y:540.2},0).wait(1).to({regX:10.9,scaleX:0.63,scaleY:0.88,rotation:-9.2,x:615.6,y:538.2},0).wait(1).to({rotation:-8,x:624.2,y:536.2},0).wait(1).to({regX:10.8,rotation:-7,x:632.7,y:534.3},0).wait(1).to({regX:10.7,rotation:-6,x:641.2,y:532.4},0).wait(1).to({regX:10.9,rotation:-5,x:649.9,y:530.3},0).wait(1).to({regX:11,rotation:-4,x:658.4,y:528.3},0).wait(1).to({regX:10.9,rotation:-3,x:667,y:526.4},0).wait(1));

	// sled2 copy
	this.instance_10 = new lib.sled1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(608.8,540.4,1,1,-7.7,0,0,10.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:-6.3,x:615.1,y:539},0).wait(1).to({regY:3.7,rotation:-5.1,x:621.4,y:537.7},0).wait(1).to({regX:10.8,regY:3.6,rotation:-3.8,x:627.8,y:536.3},0).wait(1).to({regX:10.7,rotation:-2.8,x:634,y:534.9},0).wait(1).to({regY:3.7,rotation:-1.5,x:640.3,y:533.6},0).wait(1).to({rotation:-0.3,x:646.6,y:532.2},0).wait(1).to({regY:3.6,rotation:0.8,x:653,y:530.8},0).wait(1).to({regY:3.5,rotation:2.2,x:659.2,y:529.5},0).wait(1).to({regY:3.6,rotation:3.1,x:667.9,y:528.3},0).wait(1).to({regY:3.5,rotation:4.1,x:676.5,y:527.1},0).wait(1).to({regY:3.6,rotation:5.1,x:685.3,y:525.9},0).wait(1).to({regY:3.5,rotation:6.1,x:694,y:524.7},0).wait(1).to({regY:3.4,rotation:7.1,x:702.6,y:523.2},0).wait(1).to({regY:3.5,rotation:8.1,x:711.3,y:522.1},0).wait(1).to({regX:10.6,rotation:9.2,x:720,y:520.9},0).to({_off:true},1).wait(14));

	// sled1 copy
	this.instance_11 = new lib.sled1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(625.3,544.4,1,1,-7.7,0,0,10.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:3.7,rotation:-6.3,x:631.6,y:543.6},0).wait(1).to({regY:3.6,rotation:-5.1,x:637.7,y:542.4},0).wait(1).to({rotation:-3.8,x:644,y:541.3},0).wait(1).to({regY:3.7,rotation:-2.8,x:650.2,y:540.4},0).wait(1).to({regX:10.7,regY:3.6,rotation:-1.5,x:656.5,y:539.3},0).wait(1).to({regX:10.6,regY:3.7,rotation:-0.3,x:662.6,y:538.4},0).wait(1).to({rotation:0.8,x:668.8,y:537.4},0).wait(1).to({regY:3.6,rotation:2.2,x:675,y:536.4},0).wait(1).to({rotation:3.1,x:683.5,y:535.4},0).wait(1).to({regX:10.7,rotation:4.1,x:692.1,y:534.5},0).wait(1).to({regX:10.6,rotation:5.1,x:700.6,y:533.6},0).wait(1).to({rotation:6.1,x:709.1,y:532.6},0).wait(1).to({rotation:7.1,x:717.6,y:531.6},0).wait(1).to({rotation:8.1,x:726.1,y:530.6},0).wait(1).to({regX:10.5,rotation:9.2,x:734.7,y:529.7},0).to({_off:true},1).wait(14));

	// sled2 copy
	this.instance_12 = new lib.sled1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(530.8,555.4,1,1,-15.7,0,0,10.8,3.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.6,y:555.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.7,y:555.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.8,x:537.3,y:553.6},0).wait(1).to({rotation:-12.1,x:543.8,y:551.8},0).wait(1).to({rotation:-10.3,x:550.2,y:549.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.7,x:556.8,y:548.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.5,x:564.2,y:547},0).wait(1).to({rotation:-8.3,x:571.6,y:546},0).wait(1).to({rotation:-8.1,x:579.1,y:544.9},0).wait(1).to({rotation:-8,x:586.5,y:543.8},0).wait(1).to({rotation:-7.8,x:593.9,y:542.7},0).wait(1).to({scaleX:1,scaleY:1,x:601.3,y:541.6},0).wait(1));

	// sled1 copy
	this.instance_13 = new lib.sled1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(547.8,557,1,1,-15.7,0,0,10.7,3.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.7},0).wait(1).to({regX:10.8,scaleX:1,scaleY:1,rotation:-13.8,x:554.3,y:555.7},0).wait(1).to({regY:3.6,rotation:-12.1,x:560.7,y:554.5},0).wait(1).to({regX:10.7,regY:3.5,rotation:-10.3,x:567,y:553},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.7,x:573.5,y:551.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.5,x:580.8,y:550.7},0).wait(1).to({regX:10.6,rotation:-8.3,x:588.1,y:549.6},0).wait(1).to({regX:10.7,regY:3.6,rotation:-8.1,x:595.6,y:548.7},0).wait(1).to({regY:3.5,rotation:-8,x:603.1,y:547.6},0).wait(1).to({rotation:-7.8,x:610.5,y:546.4},0).wait(1).to({scaleX:1,scaleY:1,x:617.9,y:545.5},0).wait(1));

	// sled2
	this.instance_14 = new lib.sled1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(530.8,555.4,1,1,-15.7,0,0,10.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({scaleX:1,scaleY:1,rotation:-15.6,y:555.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.7,y:555.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.8,x:537.3,y:553.6},0).wait(1).to({rotation:-12.1,x:543.8,y:551.8},0).wait(1).to({rotation:-10.3,x:550.2,y:549.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.7,x:556.8,y:548.1},0).wait(1).to({rotation:-8.5,x:564.3,y:547},0).wait(1).to({rotation:-8.3,x:571.6,y:546},0).wait(1).to({x:579,y:544.8},0).wait(1).to({rotation:-8,x:586.5,y:543.8},0).wait(1).to({x:594,y:542.7},0).wait(1).to({rotation:-7.8,x:601.3,y:541.6},0).wait(1).to({regX:10.7,rotation:-7.7,x:608.8,y:540.4},0).wait(1).to({rotation:-6.3,x:615.1,y:539},0).wait(1).to({regY:3.7,rotation:-5.1,x:621.4,y:537.7},0).wait(1).to({regX:10.8,regY:3.6,rotation:-3.8,x:627.8,y:536.3},0).wait(1).to({regX:10.7,rotation:-2.8,x:634,y:534.9},0).wait(1).to({regY:3.7,rotation:-1.5,x:640.3,y:533.6},0).wait(1).to({rotation:-0.3,x:646.6,y:532.2},0).wait(1).to({regY:3.6,rotation:0.8,x:653,y:530.8},0).wait(1).to({regY:3.5,rotation:2.2,x:659.2,y:529.5},0).wait(1).to({rotation:3,x:667.9,y:528.3},0).wait(1).to({rotation:4,x:676.6,y:527.1},0).wait(1).to({regY:3.6,scaleX:1,scaleY:1,rotation:5,x:685.3,y:526},0).wait(1).to({regY:3.5,rotation:6,x:693.9,y:524.6},0).wait(1).to({rotation:7,x:702.5,y:523.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.1,x:711.3,y:522.1},0).wait(1));

	// sled1
	this.instance_15 = new lib.sled1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(547.8,557,1,1,-15.7,0,0,10.7,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({scaleX:1,scaleY:1,rotation:-15.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.7},0).wait(1).to({regX:10.8,scaleX:1,scaleY:1,rotation:-13.8,x:554.3,y:555.7},0).wait(1).to({regY:3.6,rotation:-12.1,x:560.7,y:554.5},0).wait(1).to({regX:10.7,regY:3.5,rotation:-10.3,x:567,y:553},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.7,x:573.5,y:551.8},0).wait(1).to({regX:10.6,rotation:-8.5,x:580.7,y:550.7},0).wait(1).to({rotation:-8.3,x:588.2,y:549.7},0).wait(1).to({regX:10.7,x:595.6,y:548.5},0).wait(1).to({rotation:-8,x:603.1,y:547.6},0).wait(1).to({x:610.5,y:546.5},0).wait(1).to({rotation:-7.8,x:617.9,y:545.5},0).wait(1).to({regX:10.6,regY:3.6,rotation:-7.7,x:625.3,y:544.4},0).wait(1).to({regY:3.7,rotation:-6.3,x:631.6,y:543.6},0).wait(1).to({regY:3.6,rotation:-5.1,x:637.7,y:542.4},0).wait(1).to({rotation:-3.8,x:644,y:541.3},0).wait(1).to({regY:3.7,rotation:-2.8,x:650.2,y:540.4},0).wait(1).to({regX:10.7,regY:3.6,rotation:-1.5,x:656.5,y:539.3},0).wait(1).to({regX:10.6,regY:3.7,rotation:-0.3,x:662.6,y:538.4},0).wait(1).to({rotation:0.8,x:668.8,y:537.4},0).wait(1).to({regY:3.6,rotation:2.2,x:675,y:536.4},0).wait(1).to({rotation:3,x:683.5,y:535.4},0).wait(1).to({regX:10.7,regY:3.5,rotation:4,x:692.1,y:534.5},0).wait(1).to({regX:10.6,regY:3.6,scaleX:1,scaleY:1,rotation:5,x:700.6,y:533.6},0).wait(1).to({regY:3.5,rotation:6,x:709.1,y:532.5},0).wait(1).to({regY:3.6,rotation:7,x:717.6,y:531.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.1,x:726.1,y:530.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(323.3,483.1,434.4,124.4);


(lib.собака = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s_подарок
	this.instance = new lib.s_подарок("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.3,101.3,1,1,0,0,0,50.3,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-6,x:44.4,y:100.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.3,x:38.4,y:100.2},0).wait(1).to({regY:14.6,rotation:-18.5,x:32.4,y:99.5},0).wait(1).to({regX:50.2,regY:14.7,scaleX:1,scaleY:1,rotation:-24.7,x:26.4,y:98.9},0).wait(1).to({regY:14.8,scaleX:1,scaleY:1,rotation:-32.1,x:34.6,y:87.5},0).wait(1).to({regX:50.1,regY:14.7,scaleX:1,scaleY:1,rotation:-39.6,x:42.6,y:76.1},0).wait(1).to({rotation:-47.1,x:50.8,y:64.7},0).wait(1).to({regX:50.3,regY:14.8,scaleX:1,scaleY:1,rotation:-54.4,x:59.1,y:53.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-52.6,x:57.6,y:57.8},0).wait(1).to({rotation:-50.6,x:56,y:62.4},0).wait(1).to({regX:50.1,regY:14.7,scaleX:1,scaleY:1,rotation:-48.8,x:54.4,y:67},0).wait(1).to({scaleX:1,scaleY:1,rotation:-33.3,x:53.7,y:73},0).wait(1).to({rotation:-18,x:53,y:79.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.5,x:52.3,y:85.1},0).wait(1).to({regX:50.3,regY:14.8,rotation:12.7,x:51.7,y:91.1},0).wait(1).to({rotation:0.5,x:45.3,y:93},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.3,x:39.1,y:95},0).wait(1).to({rotation:-23.3,x:32.7,y:97},0).wait(1).to({regY:14.7,scaleX:1,scaleY:1,rotation:-35.4,x:26.5,y:98.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-30.6,x:34.2,y:84.5},0).wait(1).to({rotation:-25.6,x:42,y:70},0).wait(1).to({rotation:-20.8,x:49.7,y:55.7},0).wait(1).to({regX:50.2,scaleX:1,scaleY:1,rotation:-16,x:57.5,y:41.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-26.8,x:56.4,y:49.8},0).wait(1).to({regX:50.3,rotation:-37.8,x:55.5,y:58.4},0).wait(1).to({regX:50.1,scaleX:1,scaleY:1,rotation:-48.8,x:54.4,y:67},0).wait(1).to({scaleX:1,scaleY:1,rotation:-36.6,x:53.5,y:75.6},0).wait(1).to({regX:50.2,scaleX:1,scaleY:1,rotation:-24.3,x:52.4,y:84.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.1,x:51.4,y:92.7},0).wait(1));

	// ы_глаз
	this.instance_1 = new lib.ы_глаз("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.7,81.6,1,1,0,0,0,7.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-1.5,x:68.2,y:80.3,startPosition:1},0).wait(1).to({rotation:-3.3,x:61.7,y:79.1,startPosition:2},0).wait(1).to({regX:7.5,rotation:-5,x:55.1,y:77.8,startPosition:3},0).wait(1).to({rotation:-6.7,x:48.4,y:76.5,startPosition:4},0).wait(1).to({regX:7.6,rotation:-2.8,x:58,y:66.7,startPosition:5},0).wait(1).to({regX:7.5,rotation:0.6,x:67.3,y:56.9,startPosition:6},0).wait(1).to({regX:7.6,rotation:4.3,x:76.9,y:47.1,startPosition:7},0).wait(1).to({regX:7.5,rotation:8.2,x:86.1,y:37.3,startPosition:8},0).wait(1).to({rotation:8.8,x:85.2,y:43,startPosition:9},0).wait(1).to({regX:7.6,scaleX:1,scaleY:1,rotation:9.5,x:84.4,y:48.7,startPosition:10},0).wait(1).to({rotation:10,x:83.5,y:54.4,startPosition:11},0).wait(1).to({regX:7.5,rotation:10.8,x:82.5,y:60,startPosition:12},0).wait(1).to({rotation:11.3,x:81.6,y:65.8,startPosition:13},0).wait(1).to({regX:7.6,rotation:12,x:80.8,y:71.5,startPosition:14},0).wait(1).to({regX:7.4,scaleX:1,scaleY:1,rotation:12.7,x:79.8,y:77.1,startPosition:15},0).wait(1).to({regY:7.6,rotation:7.8,x:71.9,startPosition:16},0).wait(1).to({regY:7.5,rotation:3,x:64.1,y:76.8,startPosition:17},0).wait(1).to({regY:7.7,rotation:-1.8,x:56.3,startPosition:18},0).wait(1).to({regX:7.5,regY:7.5,rotation:-6.7,x:48.4,y:76.5,startPosition:19},0).wait(1).to({regX:7.6,rotation:0.3,x:58.3,y:65.4,startPosition:20},0).wait(1).to({rotation:7.5,x:68.1,y:54.4,startPosition:21},0).wait(1).to({regX:7.5,scaleX:1,scaleY:1,rotation:14.8,x:77.8,y:43.3,startPosition:22},0).wait(1).to({scaleX:1,scaleY:1,rotation:22,x:87.6,y:32.1,startPosition:23},0).wait(1).to({scaleX:1,scaleY:1,rotation:18.8,x:85.7,y:39.2,startPosition:24},0).wait(1).to({rotation:15.6,x:83.8,y:46.3,startPosition:25},0).wait(1).to({regX:7.6,rotation:12.5,x:82.1,y:53.4,startPosition:26},0).wait(1).to({regX:7.5,rotation:9.3,x:80.1,y:60.4,startPosition:27},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.1,x:78.3,y:67.5,startPosition:28},0).wait(1).to({regX:7.6,rotation:3,x:76.6,y:74.6,startPosition:29},0).wait(1));

	// ы_ухо2
	this.instance_2 = new lib.ы_ухо2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.9,75.7,1,1,0,0,0,0.1,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0.2,scaleX:1,scaleY:1,rotation:10.3,x:81.2,y:74.2},0).wait(1).to({regX:0.1,rotation:20.6,x:74.3,y:72.6},0).wait(1).to({rotation:31.1,x:67.4,y:71},0).wait(1).to({scaleX:1,scaleY:1,rotation:41.5,x:60.6,y:69.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:45.4,x:70.9,y:60.7},0).wait(1).to({rotation:49.2,x:81.1,y:52.2},0).wait(1).to({rotation:53.1,x:91.3,y:43.7},0).wait(1).to({regX:0.3,scaleX:1,scaleY:1,rotation:56.9,x:101.4,y:35.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:50.6,x:100.5,y:40.8},0).wait(1).to({regY:30.3,rotation:44.4,x:99.4,y:46.4},0).wait(1).to({regY:30.4,rotation:38.1,x:98.4,y:52},0).wait(1).to({scaleX:1,scaleY:1,rotation:31.6,x:97.2,y:57.6},0).wait(1).to({rotation:25.3,x:96.2,y:63.2},0).wait(1).to({rotation:19,x:95.1,y:68.8},0).wait(1).to({regX:0.1,scaleX:1,scaleY:1,rotation:12.7,x:94,y:74.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.8,x:85.6,y:73.1},0).wait(1).to({rotation:27.1,x:77.3,y:71.9},0).wait(1).to({regX:0.2,scaleX:1,scaleY:1,rotation:34.3,x:69,y:70.6},0).wait(1).to({regX:0.1,scaleX:1,scaleY:1,rotation:41.5,x:60.6,y:69.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:48.9,x:71.2,y:60.5},0).wait(1).to({regX:0.2,rotation:56.1,x:81.9,y:51.5},0).wait(1).to({regX:0.1,scaleX:1,scaleY:1,rotation:63.4,x:92.4,y:42.6},0).wait(1).to({regX:0.2,scaleX:1,scaleY:1,rotation:70.7,x:103,y:33.7},0).wait(1).to({regX:0.3,scaleX:1,scaleY:1,rotation:60.7,x:100.9,y:39.7},0).wait(1).to({regX:0.2,rotation:50.4,x:98.7,y:45.7},0).wait(1).to({rotation:40.4,x:96.5,y:51.7},0).wait(1).to({regX:0.1,rotation:30.1,x:94.3,y:57.7},0).wait(1).to({rotation:20.1,x:92.1,y:63.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:10,x:90,y:69.7},0).wait(1));

	// ы_ухо1
	this.instance_3 = new lib.ы_ухо1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.6,71,1,1,0,0,0,3.1,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:7.5,x:74.7,y:69.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.3,x:67.8,y:68.1},0).wait(1).to({rotation:22.8,x:61,y:66.6},0).wait(1).to({regY:29.4,scaleX:1,scaleY:1,rotation:30.7,x:54.1,y:65.2},0).wait(1).to({regY:29.3,scaleX:1,scaleY:1,rotation:43.9,x:64.3,y:55.9},0).wait(1).to({regY:29.4,scaleX:1,scaleY:1,rotation:57.1,x:74.3,y:46.5},0).wait(1).to({rotation:70.2,x:84.4,y:37.2},0).wait(1).to({regX:3,scaleX:1,scaleY:1,rotation:83.4,x:94.4,y:28},0).wait(1).to({regX:2.9,regY:29.3,scaleX:1,scaleY:1,rotation:73.4,x:93.7,y:33.7},0).wait(1).to({regX:3,rotation:63.2,x:93,y:39.5},0).wait(1).to({regY:29.4,scaleX:1,scaleY:1,rotation:53.1,x:92.1,y:45.3},0).wait(1).to({rotation:43.1,x:91.3,y:51},0).wait(1).to({regY:29.3,scaleX:1,scaleY:1,rotation:32.8,x:90.5,y:56.8},0).wait(1).to({rotation:22.8,x:89.8,y:62.6},0).wait(1).to({regX:3.1,regY:29.4,scaleX:1,scaleY:1,rotation:12.7,x:88.8,y:68.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:17.1,x:80.2,y:67.6},0).wait(1).to({regX:3.2,regY:29.3,rotation:21.6,x:71.6,y:66.8},0).wait(1).to({regX:3.1,regY:29.4,rotation:26.1,x:62.8,y:66},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.7,x:54.1,y:65.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:47.4,x:65,y:55.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:63.9,x:76,y:45.1},0).wait(1).to({rotation:80.5,x:87,y:35},0).wait(1).to({regX:2.9,regY:29.3,scaleX:1,scaleY:1,rotation:97.1,x:97.9,y:25},0).wait(1).to({regY:29.4,rotation:83.2,x:95.5,y:31.6},0).wait(1).to({regY:29.3,scaleX:1,scaleY:1,rotation:69.4,x:93.3,y:38.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:55.4,x:90.9,y:44.8},0).wait(1).to({rotation:41.6,x:88.6,y:51.3},0).wait(1).to({regY:29.4,rotation:27.6,x:86.2,y:58},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.8,x:83.9,y:64.6},0).wait(1));

	// ы_нос
	this.instance_4 = new lib.ы_нос("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(21.2,75.1,1,1,0,0,0,14,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:14.4,rotation:-5.8,x:14.4,y:75.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.5,x:7.7,y:76.4},0).wait(1).to({regY:14.3,rotation:-17.3,x:0.8,y:77},0).wait(1).to({regY:14.4,scaleX:1,scaleY:1,rotation:-23.2,x:-6,y:77.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24.6,x:4.1,y:64.6},0).wait(1).to({rotation:-26.1,x:14,y:51.5},0).wait(1).to({regY:14.5,rotation:-27.6,x:24.1,y:38.5},0).wait(1).to({regY:14.3,scaleX:1,scaleY:1,rotation:-29.2,x:34,y:25.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-23.1,x:33.3,y:30.1},0).wait(1).to({rotation:-17.1,x:32.6,y:34.9},0).wait(1).to({rotation:-11.1,x:32,y:39.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-5.1,x:31.1,y:44.5},0).wait(1).to({regY:14.2,rotation:0.8,x:30.4,y:49.3},0).wait(1).to({rotation:6.8,x:29.8,y:54.1},0).wait(1).to({regY:14.3,rotation:12.7,x:29,y:59},0).wait(1).to({rotation:4.3,x:20.3,y:63.7},0).wait(1).to({rotation:-3.8,x:11.5,y:68.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12,x:2.8,y:73.1},0).wait(1).to({regX:13.9,regY:14.4,scaleX:1,scaleY:1,rotation:-20.4,x:-6,y:77.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.8,x:5.5,y:60.2},0).wait(1).to({regX:14,rotation:-25.1,x:17.1,y:42.8},0).wait(1).to({regX:13.9,regY:14.5,rotation:-27.3,x:28.5,y:25.3},0).wait(1).to({regX:14,regY:14.4,scaleX:1,scaleY:1,rotation:-29.7,x:40,y:7.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-25.3,x:37.3,y:17.4},0).wait(1).to({rotation:-21.1,x:34.6,y:27},0).wait(1).to({rotation:-16.8,x:31.9,y:36.6},0).wait(1).to({rotation:-12.5,x:29.2,y:46.3},0).wait(1).to({regY:14.3,rotation:-8.3,x:26.6,y:55.9},0).wait(1).to({regY:14.4,scaleX:1,scaleY:1,rotation:-4.1,x:23.8,y:65.5},0).wait(1));

	// ы_голова
	this.instance_5 = new lib.ы_голова("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(93.6,96.5,1,1,0,0,0,74.2,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-1.5,x:87.4,y:94.7},0).wait(1).to({regX:74.3,regY:26.3,rotation:-3.3,x:81.3,y:92.9},0).wait(1).to({regX:74.2,regY:26.2,rotation:-5,x:75,y:90.9},0).wait(1).to({regX:74.1,rotation:-6.7,x:68.9,y:89.1},0).wait(1).to({rotation:-2.8,x:77.3,y:80.4},0).wait(1).to({rotation:0.6,x:85.7,y:71.9},0).wait(1).to({regX:74,rotation:4.3,x:94.1,y:63.3},0).wait(1).to({regX:74.2,rotation:8.2,x:102.6,y:54.8},0).wait(1).to({regY:26.1,rotation:8.8,x:101.6,y:60.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.5,x:100.4,y:66.5},0).wait(1).to({regY:26.2,rotation:10,x:99.3,y:72.5},0).wait(1).to({regY:26.1,rotation:10.8,x:98.2,y:78},0).wait(1).to({regY:26.2,rotation:11.3,x:97.2,y:84},0).wait(1).to({rotation:12,x:96,y:89.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.7,x:94.9,y:95.8},0).wait(1).to({rotation:7.8,x:88.4,y:94.1},0).wait(1).to({regY:26.3,rotation:3,x:81.9,y:92.5},0).wait(1).to({regY:26.2,rotation:-1.8,x:75.3,y:90.8},0).wait(1).to({regX:74.1,rotation:-6.7,x:68.9,y:89.1},0).wait(1).to({regX:74.2,rotation:0.3,x:76.6,y:80.1},0).wait(1).to({regX:74.1,rotation:7.5,x:84.1,y:70.9},0).wait(1).to({regX:74,scaleX:1,scaleY:1,rotation:14.8,x:91.7,y:61.9},0).wait(1).to({regX:74.1,scaleX:1,scaleY:1,rotation:22,x:99.4,y:53},0).wait(1).to({regX:74.2,regY:26.1,scaleX:1,scaleY:1,rotation:18.8,x:98.7,y:59.2},0).wait(1).to({regX:74.1,rotation:15.6,x:97.7,y:65.4},0).wait(1).to({regX:74.2,regY:26.2,rotation:12.5,x:97.1,y:71.7},0).wait(1).to({regX:74.1,rotation:9.3,x:96.1,y:77.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.1,x:95.3,y:84.1},0).wait(1).to({regX:74.2,regY:26.1,rotation:3,x:94.5,y:90.3},0).wait(1));

	// ы_лента
	this.instance_6 = new lib.ы_лента("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(49.4,103.2,1,1,0,0,0,16.2,103.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleY:0.98,rotation:-1.5,x:43.5,y:102.6},0).wait(1).to({scaleY:0.96,rotation:-3.3,x:37.6,y:102},0).wait(1).to({scaleY:0.93,rotation:-5,x:31.7,y:101.4},0).wait(1).to({regX:16.1,regY:103.1,scaleY:0.91,rotation:-6.7,x:25.7,y:100.8},0).wait(1).to({scaleY:0.93,rotation:2,x:36.3,y:88.6},0).wait(1).to({regX:16.2,scaleX:1,scaleY:0.96,rotation:10.8,x:46.9,y:76.3},0).wait(1).to({scaleY:0.98,rotation:19.5,x:57.5,y:64.1},0).wait(1).to({regX:25.8,regY:98.6,scaleX:1,scaleY:1,rotation:28.3,x:68.1,y:51.8},0).wait(1).to({regX:25.7,scaleX:1,scaleY:1,rotation:30.8,x:65.1,y:57.2},0).wait(1).to({regX:25.8,rotation:33.4,x:62.2,y:62.6},0).wait(1).to({regY:98.5,scaleX:1,scaleY:1,rotation:36,x:59.3,y:68.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:34.4,x:57,y:74.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.8,x:54.8,y:80.4},0).wait(1).to({rotation:31.3,x:52.6,y:86.5},0).wait(1).to({regX:16.3,regY:103.1,scaleX:1,scaleY:1,rotation:29.7,x:50.4,y:92.6},0).wait(1).to({regY:103.2,scaleX:1,scaleY:0.98,rotation:20.5,x:44.3,y:94.6},0).wait(1).to({scaleY:0.96,rotation:11.3,x:38.1,y:96.7},0).wait(1).to({scaleX:1,scaleY:0.93,rotation:2.3,x:31.9,y:98.7},0).wait(1).to({regX:16.1,regY:103.1,scaleY:0.91,rotation:-6.7,x:25.7,y:100.8},0).wait(1).to({scaleY:0.93,rotation:-3.5,x:36,y:86.1},0).wait(1).to({regX:16.2,scaleY:0.96,rotation:-0.5,x:46.3,y:71.3},0).wait(1).to({scaleY:0.98,rotation:2.5,x:56.4,y:56.6},0).wait(1).to({regX:25.8,regY:98.5,scaleY:1,rotation:5.7,x:66.7,y:41.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.3,x:64.3,y:50.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:21,x:61.8,y:59.4},0).wait(1).to({regY:98.4,scaleX:1,scaleY:1,rotation:28.8,x:59.3,y:68.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:21.5,x:56.8,y:76.9},0).wait(1).to({rotation:14.3,x:54.4,y:85.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.1,x:51.9,y:94.5},0).wait(1));

	// ы_хвост
	this.instance_7 = new lib.ы_хвост("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(192,74.9,1,1,81.2,0,0,2.6,54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1,scaleY:1,rotation:72.2,x:186.3,y:74},0).wait(1).to({rotation:63.2,x:180.5,y:73.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:174.8,y:72.3},0).wait(1).to({regX:2.7,scaleX:1,scaleY:1,rotation:45.2,x:169.1,y:71.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:45.1,x:175.8,y:74.1},0).wait(1).to({rotation:44.9,x:182.5,y:76.8},0).wait(1).to({x:189.2,y:79.5},0).wait(1).to({regX:2.9,scaleX:1,scaleY:1,rotation:44.8,x:195.9,y:82.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:50.1,x:195.3,y:81.1},0).wait(1).to({rotation:55.2,x:194.7,y:80.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:60.4,x:194.2,y:79.1},0).wait(1).to({rotation:65.7,x:193.7,y:78.1},0).wait(1).to({rotation:70.9,x:193.1,y:77},0).wait(1).to({regY:54.8,rotation:76,x:192.5,y:76},0).wait(1).to({regX:2.6,regY:54.9,scaleX:1,scaleY:1,rotation:81.2,x:192,y:74.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:72.2,x:186.3,y:74},0).wait(1).to({rotation:63.2,x:180.5,y:73.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:174.8,y:72.3},0).wait(1).to({regX:2.7,scaleX:1,scaleY:1,rotation:45.2,x:169.1,y:71.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:45.1,x:175.8,y:74.1},0).wait(1).to({rotation:44.9,x:182.5,y:76.8},0).wait(1).to({x:189.2,y:79.5},0).wait(1).to({regX:2.9,scaleX:1,scaleY:1,rotation:44.8,x:195.9,y:82.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:50.1,x:195.3,y:81.2},0).wait(1).to({rotation:55.2,x:194.7,y:80.2},0).wait(1).to({regX:3,regY:54.8,rotation:60.4,x:194.4,y:79.1},0).wait(1).to({regX:2.9,regY:54.9,rotation:65.7,x:193.6,y:78.1},0).wait(1).to({rotation:70.9,x:193,y:77.1},0).wait(1).to({regY:54.8,scaleX:1,scaleY:1,rotation:76,x:192.5,y:76},0).wait(1));

	// ы_задняя спереди3
	this.instance_8 = new lib.ы_задняяспереди3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(256.4,95.8,1,1,0,0,0,2.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:1,scaleY:1,rotation:36.3,x:232,y:123},0).wait(1).to({scaleX:1,scaleY:1,rotation:72.6,x:207.7,y:150.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.3,x:177.5,y:155.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:142.3,x:147.3,y:160.5},0).wait(1).to({regY:5.6,scaleX:1,scaleY:1,rotation:119.1,x:165.6,y:159.1},0).wait(1).to({regY:5.5,scaleX:1,scaleY:1,rotation:96,x:184,y:157.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:72.9,x:201.9,y:154.7},0).wait(1).to({regX:2.2,scaleX:1,scaleY:1,rotation:49.7,x:219.8,y:151.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:42.6,x:224.9,y:144.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:35.4,x:230,y:136.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:28.3,x:235.3,y:129},0).wait(1).to({regX:2.1,scaleX:1,scaleY:1,rotation:21.1,x:240.5,y:120.6},0).wait(1).to({rotation:14.1,x:245.8,y:112.4},0).wait(1).to({regX:2.2,scaleX:1,scaleY:1,rotation:7,x:251.1,y:104.1},0).wait(1).to({regX:2.1,scaleX:1,scaleY:1,rotation:0,x:256.4,y:95.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.3,x:232,y:123},0).wait(1).to({scaleX:1,scaleY:1,rotation:72.6,x:207.7,y:150.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.3,x:177.5,y:155.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:142.3,x:147.3,y:160.5},0).wait(1).to({regY:5.6,scaleX:1,scaleY:1,rotation:119.1,x:165.6,y:159.1},0).wait(1).to({regY:5.5,scaleX:1,scaleY:1,rotation:96,x:184,y:157.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:72.9,x:201.9,y:154.7},0).wait(1).to({regX:2.2,scaleX:1,scaleY:1,rotation:49.7,x:219.8,y:151.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:42.6,x:224.9,y:144.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:35.4,x:230,y:136.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:28.3,x:235.3,y:129},0).wait(1).to({scaleX:1,scaleY:1,rotation:21.1,x:240.6,y:120.6},0).wait(1).to({rotation:14,x:245.7,y:112.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:7,x:251.1,y:104.1},0).wait(1));

	// ы_задняя спереди2
	this.instance_9 = new lib.ы_задняяспереди2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(236.4,106.8,1,1,0,0,0,4,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:12.8,scaleX:1,scaleY:1,rotation:36.3,x:213.9,y:120.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:72.6,x:191.3,y:134.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.3,x:173.9,y:137.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:142.3,x:156.5,y:139.6},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:121.3,x:167.2,y:139.8},0).wait(1).to({regY:12.8,scaleX:1,scaleY:1,rotation:100.3,x:178.2,y:140},0).wait(1).to({rotation:79.2,x:189.1,y:140.2},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:58.2,x:199.9,y:140.4},0).wait(1).to({regY:12.8,scaleX:1,scaleY:1,rotation:49.9,x:205.1,y:135.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:41.6,x:210.2,y:131.5},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:33.3,x:215.3,y:127.2},0).wait(1).to({rotation:24.8,x:220.5,y:122.2},0).wait(1).to({rotation:16.6,x:225.9,y:117.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.3,x:231.1,y:112},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:236.4,y:106.8},0).wait(1).to({regY:12.8,scaleX:1,scaleY:1,rotation:36.3,x:213.9,y:120.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:72.6,x:191.3,y:134.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.3,x:173.9,y:137.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:142.3,x:156.5,y:139.6},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:121.3,x:167.2,y:139.8},0).wait(1).to({regY:12.8,scaleX:1,scaleY:1,rotation:100.3,x:178.2,y:140},0).wait(1).to({rotation:79.2,x:189.1,y:140.2},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:58.2,x:199.9,y:140.4},0).wait(1).to({regY:12.8,scaleX:1,scaleY:1,rotation:49.9,x:205.1,y:135.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:41.6,x:210.2,y:131.5},0).wait(1).to({regY:12.9,scaleX:1,scaleY:1,rotation:33.3,x:215.3,y:127.2},0).wait(1).to({regX:3.9,scaleX:1,scaleY:1,rotation:24.8,x:220.5,y:122.2},0).wait(1).to({regX:4,scaleX:1,scaleY:1,rotation:16.5,x:225.9,y:117.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.3,x:231.1,y:112},0).wait(1));

	// ы_задняя спереди1
	this.instance_10 = new lib.ы_задняяспереди1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(187.8,89.9,1,1,0,0,0,5,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleX:1,scaleY:1,rotation:19.6,x:172.2,y:87.7},0).wait(1).to({regX:4.9,scaleX:1,scaleY:1,rotation:39.4,x:163.4,y:89.4},0).wait(1).to({regX:5,regY:16.2,scaleX:1,scaleY:1,rotation:53.7,x:158.7,y:86.1},0).wait(1).to({regX:4.9,regY:16.1,scaleX:1,scaleY:1,rotation:68.6,x:154.8,y:86.5},0).wait(1).to({regX:5,scaleX:1,scaleY:1,rotation:62.9,x:160.5,y:88.3},0).wait(1).to({regX:4.9,rotation:56.9,x:166.1,y:90},0).wait(1).to({rotation:51.1,x:171.8,y:91.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:45.1,x:177.5,y:93.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:38.6,x:179,y:93},0).wait(1).to({rotation:32.1,x:180.4,y:92.4},0).wait(1).to({regX:4.8,scaleX:1,scaleY:1,rotation:25.8,x:181.9,y:92},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.3,x:183.4,y:91.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.8,x:184.8,y:91},0).wait(1).to({rotation:6.3,x:186.3,y:90.4},0).wait(1).to({regX:5,scaleX:1,scaleY:1,rotation:0,x:187.8,y:89.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.6,x:172.2,y:87.7},0).wait(1).to({regX:4.9,scaleX:1,scaleY:1,rotation:39.4,x:163.4,y:89.4},0).wait(1).to({regX:5,regY:16.2,scaleX:1,scaleY:1,rotation:53.7,x:158.7,y:86.1},0).wait(1).to({regX:4.9,regY:16.1,scaleX:1,scaleY:1,rotation:68.6,x:154.8,y:86.5},0).wait(1).to({regX:5,scaleX:1,scaleY:1,rotation:62.9,x:160.5,y:88.3},0).wait(1).to({regX:4.9,rotation:56.9,x:166.1,y:90},0).wait(1).to({rotation:51.1,x:171.8,y:91.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:45.1,x:177.5,y:93.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:38.6,x:179,y:93},0).wait(1).to({rotation:32.1,x:180.4,y:92.4},0).wait(1).to({regX:4.8,scaleX:1,scaleY:1,rotation:25.8,x:181.9,y:92},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.3,x:183.4,y:91.5},0).wait(1).to({rotation:12.8,x:184.8,y:91},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.3,x:186.3,y:90.4},0).wait(1));

	// ы_передняя спереди3
	this.instance_11 = new lib.ы_передняяспереди3("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(114.9,164.3,1,1,0,0,0,17.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:2.5,rotation:-7.5,x:111.1,y:162.4},0).wait(1).to({regY:2.6,scaleX:1,scaleY:1,rotation:-15.3,x:107.2,y:160.6},0).wait(1).to({rotation:-22.8,x:103.3,y:158.7},0).wait(1).to({regX:17.7,regY:2.5,scaleX:1,scaleY:1,rotation:-30.5,x:99.4,y:156.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24.8,x:87.3,y:155.6},0).wait(1).to({regY:2.6,rotation:-9.6,x:75.5,y:144.3},0).wait(1).to({regX:17.6,regY:2.5,rotation:-13.8,x:71.1,y:132},0).wait(1).to({regX:17.7,scaleX:1,scaleY:1,rotation:-8.2,x:68.4,y:114.5},0).wait(1).to({regX:17.8,scaleX:1,scaleY:1,rotation:-7,x:71.7,y:124.9},0).wait(1).to({regX:17.7,scaleX:1,scaleY:1,rotation:-5.8,x:78.2,y:131.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:84.1,y:140.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.3,x:90.3,y:147.1},0).wait(1).to({rotation:-2.3,x:98.4,y:153.7},0).wait(1).to({regY:2.4,rotation:-1,x:107.5,y:157.7},0).wait(1).to({regX:17.8,regY:2.6,rotation:0,x:114.9,y:164.3},0).wait(1).to({regY:2.5,rotation:-7.5,x:111.1,y:162.4},0).wait(1).to({regY:2.6,scaleX:1,scaleY:1,rotation:-15.3,x:107.2,y:160.6},0).wait(1).to({rotation:-22.8,x:103.3,y:158.7},0).wait(1).to({regX:17.7,regY:2.5,scaleX:1,scaleY:1,rotation:-30.5,x:99.4,y:156.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24.8,x:87.3,y:155.6},0).wait(1).to({regY:2.6,rotation:-9.6,x:75.5,y:144.3},0).wait(1).to({regX:17.6,regY:2.5,rotation:-13.8,x:71.1,y:132},0).wait(1).to({regX:17.7,scaleX:1,scaleY:1,rotation:-8.2,x:68.4,y:114.5},0).wait(1).to({regX:17.8,scaleX:1,scaleY:1,rotation:-7,x:71.7,y:124.9},0).wait(1).to({regX:17.7,scaleX:1,scaleY:1,rotation:-5.8,x:78.2,y:131.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:84.1,y:140.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.3,x:90.3,y:147.1},0).wait(1).to({rotation:-2.3,x:98.4,y:153.7},0).wait(1).to({regY:2.4,rotation:-1,x:107.5,y:157.7},0).wait(1));

	// ы_передняя спереди2
	this.instance_12 = new lib.ы_передняяспереди2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(127.1,154.9,1,1,0,0,0,17.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({rotation:-7.5,x:121.7,y:151.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.3,x:116.3,y:148.3},0).wait(1).to({regY:2,rotation:-22.8,x:110.7,y:145.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-30.5,x:105.4,y:141.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24.8,x:95.1,y:140.3},0).wait(1).to({rotation:-9.6,x:86.2,y:132.6},0).wait(1).to({rotation:-13.8,x:81,y:119.6},0).wait(1).to({regX:17.5,scaleX:1,scaleY:1,rotation:-8.2,x:79.7,y:103},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7,x:83.9,y:113.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-5.8,x:89.8,y:120.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:95.7,y:130},0).wait(1).to({regX:17.4,scaleX:1,scaleY:1,rotation:-3.3,x:102,y:136.8},0).wait(1).to({regX:17.6,rotation:-2.3,x:110.5,y:143.8},0).wait(1).to({regX:17.4,rotation:-1,x:119.5,y:148.1},0).wait(1).to({regY:2.1,rotation:0,x:127.1,y:154.9},0).wait(1).to({rotation:-7.5,x:121.7,y:151.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.3,x:116.3,y:148.3},0).wait(1).to({regY:2,rotation:-22.8,x:110.7,y:145.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-30.5,x:105.4,y:141.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24.8,x:95.1,y:140.3},0).wait(1).to({rotation:-9.6,x:86.2,y:132.6},0).wait(1).to({rotation:-13.8,x:81,y:119.6},0).wait(1).to({regX:17.5,scaleX:1,scaleY:1,rotation:-8.2,x:79.7,y:103},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7,x:83.9,y:113.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-5.8,x:89.8,y:120.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:95.7,y:130},0).wait(1).to({regX:17.4,scaleX:1,scaleY:1,rotation:-3.3,x:102,y:136.8},0).wait(1).to({regX:17.6,rotation:-2.3,x:110.5,y:143.8},0).wait(1).to({regX:17.4,rotation:-1,x:119.5,y:148.1},0).wait(1));

	// ы_передняя спереди1
	this.instance_13 = new lib.ы_передняяспереди1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(137.1,121.3,1,1,0,0,0,12.3,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({rotation:-7.5,x:127.1,y:117.9},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-15.3,x:117.1,y:114.6},0).wait(1).to({regX:12.3,rotation:-22.8,x:107,y:111.2},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-30.5,x:97,y:107.9},0).wait(1).to({rotation:-7,x:101.5,y:105.4},0).wait(1).to({regY:1.9,scaleX:1,scaleY:1,rotation:16.3,x:106,y:102.8},0).wait(1).to({regY:2,scaleX:1,scaleY:1,rotation:39.8,x:110.3,y:100.3},0).wait(1).to({regX:12.5,scaleX:1,scaleY:1,rotation:63.3,x:114.9,y:97.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:118.1,y:101.1},0).wait(1).to({rotation:45.1,x:121.3,y:104.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.1,x:124.4,y:107.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:27.1,x:127.6,y:111.2},0).wait(1).to({rotation:18,x:130.8,y:114.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,x:134,y:117.9},0).wait(1).to({regX:12.3,scaleX:1,scaleY:1,rotation:0,x:137.1,y:121.3},0).wait(1).to({rotation:-7.5,x:127.1,y:117.9},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-15.3,x:117.1,y:114.6},0).wait(1).to({regX:12.3,rotation:-22.8,x:107,y:111.2},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-30.5,x:97,y:107.9},0).wait(1).to({rotation:-7,x:101.5,y:105.4},0).wait(1).to({regY:1.9,scaleX:1,scaleY:1,rotation:16.3,x:106,y:102.8},0).wait(1).to({regY:2,scaleX:1,scaleY:1,rotation:39.8,x:110.3,y:100.3},0).wait(1).to({regX:12.5,scaleX:1,scaleY:1,rotation:63.3,x:114.9,y:97.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:118.1,y:101.1},0).wait(1).to({rotation:45.1,x:121.3,y:104.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.1,x:124.4,y:107.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:27.1,x:127.6,y:111.2},0).wait(1).to({rotation:18,x:130.8,y:114.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,x:134,y:117.9},0).wait(1));

	// ы_туловище2
	this.instance_14 = new lib.ы_туловище2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(155.5,104.4,1,1,0,0,0,0.7,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({rotation:0.3,x:149.4,y:103.1},0).wait(1).to({regX:0.8,rotation:0.8,x:143.3,y:101.8},0).wait(1).to({regX:0.7,rotation:1.3,x:137.2,y:100.6},0).wait(1).to({regY:31.8,rotation:2,x:131.1,y:99.3},0).wait(1).to({regX:0.6,rotation:7,x:135.5,y:98.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:140,y:97.2},0).wait(1).to({regX:0.7,regY:31.7,rotation:17.5,x:144.4,y:96},0).wait(1).to({scaleX:1,scaleY:1,rotation:22.7,x:148.9,y:94.9},0).wait(1).to({regX:0.8,regY:31.8,scaleX:1,scaleY:1,rotation:19.3,x:149.9,y:96.4},0).wait(1).to({regX:0.7,rotation:16.1,x:150.7,y:97.8},0).wait(1).to({regY:31.7,rotation:12.8,x:151.7,y:99},0).wait(1).to({rotation:9.6,x:152.6,y:100.4},0).wait(1).to({regX:0.8,scaleX:1,scaleY:1,rotation:6.3,x:153.6,y:101.8},0).wait(1).to({regX:0.7,rotation:3.1,x:154.6,y:103.1},0).wait(1).to({rotation:0,x:155.5,y:104.4},0).wait(1).to({rotation:0.3,x:149.4,y:103.1},0).wait(1).to({regX:0.8,rotation:0.8,x:143.3,y:101.8},0).wait(1).to({regX:0.7,rotation:1.3,x:137.2,y:100.6},0).wait(1).to({regY:31.8,rotation:2,x:131.1,y:99.3},0).wait(1).to({regX:0.6,rotation:7,x:135.5,y:98.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:140,y:97.2},0).wait(1).to({regX:0.7,regY:31.7,rotation:17.5,x:144.4,y:96},0).wait(1).to({scaleX:1,scaleY:1,rotation:22.7,x:148.9,y:94.9},0).wait(1).to({regX:0.8,regY:31.8,scaleX:1,scaleY:1,rotation:19.3,x:149.9,y:96.4},0).wait(1).to({regX:0.7,regY:31.7,rotation:16.1,x:150.8,y:97.7},0).wait(1).to({regX:0.8,rotation:12.8,x:151.8,y:99},0).wait(1).to({rotation:9.5,x:152.7,y:100.5},0).wait(1).to({regX:0.7,regY:31.8,rotation:6.3,x:153.6,y:101.9},0).wait(1).to({regY:31.7,scaleX:1,scaleY:1,rotation:3.1,x:154.6,y:103.1},0).wait(1));

	// ы_туловище1
	this.instance_15 = new lib.ы_туловище1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(95.3,97.7,1,1,0,0,0,8.9,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({rotation:0.3,x:89.2,y:95.9},0).wait(1).to({regY:17.6,rotation:0.8,x:83.2,y:94.2},0).wait(1).to({regY:17.5,rotation:1.3,x:77.2,y:92.3},0).wait(1).to({regY:17.6,rotation:2,x:71.1,y:90.5},0).wait(1).to({regX:8.8,rotation:9,x:78.5,y:81.7},0).wait(1).to({regX:8.9,regY:17.5,scaleX:1,scaleY:1,rotation:16.3,x:86,y:72.9},0).wait(1).to({regX:9,regY:17.6,rotation:23.3,x:93.5,y:64.1},0).wait(1).to({regX:8.8,regY:17.5,scaleX:1,scaleY:1,rotation:30.7,x:100.8,y:55.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:26.3,x:100,y:61.3},0).wait(1).to({rotation:21.8,x:99.2,y:67.5},0).wait(1).to({regY:17.4,rotation:17.5,x:98.4,y:73.5},0).wait(1).to({regY:17.5,rotation:13,x:97.6,y:79.6},0).wait(1).to({rotation:8.8,x:96.8,y:85.6},0).wait(1).to({regY:17.6,scaleX:1,scaleY:1,rotation:4.3,x:96,y:91.8},0).wait(1).to({regX:8.9,regY:17.5,rotation:0,x:95.3,y:97.7},0).wait(1).to({rotation:0.3,x:89.2,y:95.9},0).wait(1).to({regY:17.6,rotation:0.8,x:83.2,y:94.2},0).wait(1).to({regY:17.5,rotation:1.3,x:77.2,y:92.3},0).wait(1).to({regY:17.6,rotation:2,x:71.1,y:90.5},0).wait(1).to({regX:8.8,rotation:9,x:78.5,y:81.7},0).wait(1).to({regX:8.9,regY:17.5,scaleX:1,scaleY:1,rotation:16.3,x:86,y:72.9},0).wait(1).to({regX:9,regY:17.6,rotation:23.3,x:93.5,y:64.1},0).wait(1).to({regX:8.8,regY:17.5,scaleX:1,scaleY:1,rotation:30.7,x:100.8,y:55.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:26.3,x:100,y:61.4},0).wait(1).to({rotation:21.8,x:99.2,y:67.4},0).wait(1).to({rotation:17.3,x:98.4,y:73.5},0).wait(1).to({rotation:13,x:97.5,y:79.6},0).wait(1).to({rotation:8.6,x:96.8,y:85.7},0).wait(1).to({regY:17.6,scaleX:1,scaleY:1,rotation:4.3,x:96,y:91.8},0).wait(1));

	// ы_задняя сзади3
	this.instance_16 = new lib.ы_задняясзади3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(232,80.7,1,1,0,0,0,2.3,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({scaleX:1,scaleY:1,rotation:18,x:219.1,y:100.1},0).wait(1).to({regY:5.6,scaleX:1,scaleY:1,rotation:36.1,x:207.8,y:117.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:195.1,y:133.1},0).wait(1).to({regX:2.2,scaleX:1,scaleY:1,rotation:72.4,x:182.2,y:148.5},0).wait(1).to({regX:2.3,regY:5.5,scaleX:1,scaleY:1,rotation:90.8,x:177.3,y:150.2},0).wait(1).to({regX:2.2,regY:5.6,rotation:109.3,x:172.3,y:151.5},0).wait(1).to({regX:2.3,regY:5.5,scaleX:1,scaleY:1,rotation:127.9,x:168.4,y:153.3},0).wait(1).to({regX:2.1,scaleX:1,scaleY:1,rotation:146.6,x:164.5,y:154.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:127.3,x:179.8,y:153.2},0).wait(1).to({rotation:108,x:194.7,y:150.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:88.7,x:210.4,y:146.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:69.6,x:215.5,y:131.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:46.4,x:221,y:114.5},0).wait(1).to({regY:5.6,rotation:23.1,x:226.4,y:97.7},0).wait(1).to({regX:2.3,regY:5.5,scaleX:1,scaleY:1,rotation:0,x:232,y:80.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:18,x:219.1,y:100.1},0).wait(1).to({regY:5.6,scaleX:1,scaleY:1,rotation:36.1,x:207.8,y:117.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:195.1,y:133.1},0).wait(1).to({regX:2.2,scaleX:1,scaleY:1,rotation:72.4,x:182.2,y:148.5},0).wait(1).to({regX:2.3,regY:5.5,scaleX:1,scaleY:1,rotation:90.8,x:177.3,y:150.2},0).wait(1).to({regX:2.2,regY:5.6,rotation:109.3,x:172.3,y:151.5},0).wait(1).to({regX:2.3,regY:5.5,scaleX:1,scaleY:1,rotation:127.9,x:168.4,y:153.3},0).wait(1).to({regX:2.1,scaleX:1,scaleY:1,rotation:146.6,x:164.5,y:154.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:127.3,x:179.8,y:153.2},0).wait(1).to({rotation:108,x:194.7,y:150.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:88.7,x:210.4,y:146.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:69.6,x:215.5,y:131.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:46.4,x:221.1,y:114.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:23.1,x:226.6,y:97.6},0).wait(1));

	// ы_задняя сзади2
	this.instance_17 = new lib.ы_задняясзади2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(210.2,92,1,1,0,0,0,2.4,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:2.3,scaleX:1,scaleY:1,rotation:18,x:198.4,y:104.3},0).wait(1).to({regY:13,scaleX:1,scaleY:1,rotation:36.1,x:187.2,y:113.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:176.2,y:122.4},0).wait(1).to({regX:2.5,scaleX:1,scaleY:1,rotation:72.4,x:165,y:131.2},0).wait(1).to({regY:13.1,scaleX:1,scaleY:1,rotation:82,x:163.6,y:131},0).wait(1).to({regY:13,scaleX:1,scaleY:1,rotation:91.5,x:162.4,y:130.8},0).wait(1).to({regY:13.1,scaleX:1,scaleY:1,rotation:100.7,x:161.8},0).wait(1).to({regX:2.4,regY:13,scaleX:1,scaleY:1,rotation:110.7,x:161.7,y:130.7},0).wait(1).to({regX:2.3,rotation:81.9,x:166.5,y:134.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:62.9,x:175.6,y:136.8},0).wait(1).to({regX:2.4,scaleX:1,scaleY:1,rotation:52.8,x:188.4,y:135.6},0).wait(1).to({regX:2.5,scaleX:1,scaleY:1,rotation:42.6,x:193.9,y:125.3},0).wait(1).to({rotation:28.3,x:199.3,y:114.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:14.1,x:204.8,y:103.1},0).wait(1).to({regX:2.4,regY:13.1,scaleX:1,scaleY:1,rotation:0,x:210.2,y:92},0).wait(1).to({regX:2.3,scaleX:1,scaleY:1,rotation:18,x:198.4,y:104.3},0).wait(1).to({regY:13,scaleX:1,scaleY:1,rotation:36.1,x:187.2,y:113.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:176.2,y:122.4},0).wait(1).to({regX:2.5,scaleX:1,scaleY:1,rotation:72.4,x:165,y:131.2},0).wait(1).to({regY:13.1,scaleX:1,scaleY:1,rotation:82,x:163.6,y:131},0).wait(1).to({regY:13,scaleX:1,scaleY:1,rotation:91.5,x:162.4,y:130.8},0).wait(1).to({regY:13.1,scaleX:1,scaleY:1,rotation:100.7,x:161.8},0).wait(1).to({regX:2.4,regY:13,scaleX:1,scaleY:1,rotation:110.7,x:161.7,y:130.7},0).wait(1).to({regX:2.3,rotation:81.9,x:166.5,y:134.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:62.9,x:175.6,y:136.8},0).wait(1).to({regX:2.4,scaleX:1,scaleY:1,rotation:52.8,x:188.4,y:135.6},0).wait(1).to({regX:2.5,scaleX:1,scaleY:1,rotation:42.6,x:193.9,y:125.1},0).wait(1).to({regY:13.1,scaleX:1,scaleY:1,rotation:28.3,x:199.3,y:114.1},0).wait(1).to({regY:13,scaleX:1,scaleY:1,rotation:14.1,x:204.8,y:102.9},0).wait(1));

	// ы_задняя сзади1
	this.instance_18 = new lib.ы_задняясзади1("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(178.6,92.1,1,1,0,0,0,3.3,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({scaleX:1,scaleY:1,rotation:18,x:172.7,y:94.4},0).wait(1).to({regY:9.1,scaleX:1,scaleY:1,rotation:36.1,x:167,y:96.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:161.1,y:98.8},0).wait(1).to({regX:3.2,regY:9.3,scaleX:1,scaleY:1,rotation:72.4,x:155.1,y:101},0).wait(1).to({regY:9.2,scaleX:1,scaleY:1,rotation:87.5,x:162.7,y:101.3},0).wait(1).to({regX:3.3,regY:9.3,rotation:102.3,x:170.1,y:101.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:118.3,x:178.3,y:101},0).wait(1).to({regY:9.2,scaleX:1,scaleY:1,rotation:133.3,x:185.5,y:105.7},0).wait(1).to({regY:9.3,scaleX:1,scaleY:1,rotation:118.7,x:183.2,y:103.2},0).wait(1).to({rotation:98,x:180.2,y:101.7},0).wait(1).to({regX:3.2,scaleX:1,scaleY:1,rotation:74.3,x:178.8,y:102},0).wait(1).to({scaleX:1,scaleY:1,rotation:55.7,x:176.7,y:98.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:37.1,x:177,y:96.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:18.5,x:177.3,y:93.9},0).wait(1).to({regX:3.3,regY:9.2,scaleX:1,scaleY:1,rotation:0,x:177.6,y:91.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:18,x:172.7,y:94.4},0).wait(1).to({regY:9.1,scaleX:1,scaleY:1,rotation:36.1,x:167,y:96.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:161.1,y:98.8},0).wait(1).to({regX:3.2,regY:9.3,scaleX:1,scaleY:1,rotation:72.4,x:155.1,y:101},0).wait(1).to({regY:9.2,scaleX:1,scaleY:1,rotation:87.5,x:162.8,y:102},0).wait(1).to({regX:3.3,regY:9.3,rotation:102.3,x:170.3,y:102.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:118.3,x:177.8,y:103.5},0).wait(1).to({regY:9.2,scaleX:1,scaleY:1,rotation:133.3,x:185.5,y:105.7},0).wait(1).to({regY:9.3,scaleX:1,scaleY:1,rotation:118.7,x:183.2,y:104.5},0).wait(1).to({rotation:98,x:181,y:103.2},0).wait(1).to({regX:3.2,scaleX:1,scaleY:1,rotation:74.3,x:178.8,y:102},0).wait(1).to({scaleX:1,scaleY:1,rotation:55.7,y:99.6},0).wait(1).to({regX:3.3,scaleX:1,scaleY:1,rotation:37.1,y:97.1},0).wait(1).to({regX:3.2,scaleX:1,scaleY:1,rotation:18.5,x:178.6,y:94.6},0).wait(1));

	// ы_передняя сзади1
	this.instance_19 = new lib.ы_передняяспереди3("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(100.3,159.1,1,1,0,0,0,17.8,2.6);
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 236, 173, 32, 0)];
	this.instance_19.cache(-2,-2,25,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:97.8,y:161.3},0).wait(1).to({x:97.6,y:160.9},0).wait(1).to({x:100.3,y:159.1},0).wait(1).to({regX:17.9,rotation:-17.1,x:92.7,y:155.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.4,x:84.4,y:153.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-33.9,x:94.1,y:151.6},0).wait(1).to({rotation:-27.9,x:86.9,y:142.5},0).wait(1).to({regX:17.7,regY:2.5,rotation:-8.2,x:57.8,y:106.8},0).wait(1).to({regX:17.8,scaleX:1,scaleY:1,rotation:-7,x:58.4,y:119.1},0).wait(1).to({regX:17.7,scaleX:1,scaleY:1,rotation:-5.8,x:63.7,y:126.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:69.5,y:135.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.3,x:75.8,y:141.9},0).wait(1).to({rotation:-2.3,x:83.9,y:148.6},0).wait(1).to({regY:2.4,rotation:-1,x:93,y:152.5},0).wait(1).to({regX:17.8,regY:2.6,rotation:0,x:100.3,y:159.1},0).wait(1).to({x:97.8,y:161.3},0).wait(1).to({x:97.6,y:160.9},0).wait(1).to({x:100.3,y:159.1},0).wait(1).to({regX:17.9,rotation:-17.1,x:92.7,y:155.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.4,x:84.4,y:153.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-33.9,x:94.1,y:151.6},0).wait(1).to({rotation:-27.9,x:86.9,y:142.5},0).wait(1).to({regX:17.7,regY:2.5,rotation:-8.2,x:57.8,y:106.8},0).wait(1).to({regX:17.8,scaleX:1,scaleY:1,rotation:-7,x:58.4,y:119.1},0).wait(1).to({regX:17.7,scaleX:1,scaleY:1,rotation:-5.8,x:63.7,y:126.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:69.5,y:135.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.3,x:75.8,y:141.9},0).wait(1).to({rotation:-2.3,x:83.9,y:148.6},0).wait(1).to({regY:2.4,rotation:-1,x:93,y:152.5},0).wait(1));

	// ы_передняя сзади2
	this.instance_20 = new lib.ы_передняяспереди2("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(112.5,149.7,1,1,0,0,0,17.4,2.1);
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 236, 173, 32, 0)];
	this.instance_20.cache(-2,-2,23,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({scaleX:1,scaleY:1,rotation:-22.6,x:107.1,y:147.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-45.4,x:101.2,y:144.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-70.9,x:96.3,y:141.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-68.2,x:90.7,y:137.2},0).wait(1).to({rotation:-73.2,x:80.6,y:135.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-68.2,x:91.6,y:133.8},0).wait(1).to({x:84.8,y:124},0).wait(1).to({regX:17.5,regY:2,rotation:-8.2,x:69.1,y:95.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7,x:70.6,y:107.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-5.8,x:75.2,y:115.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:81.1,y:124.8},0).wait(1).to({regX:17.4,scaleX:1,scaleY:1,rotation:-1.8,x:87.8,y:132.1},0).wait(1).to({regX:17.6,rotation:-2.3,x:95.9,y:138.6},0).wait(1).to({regX:17.4,rotation:-1,x:105,y:143},0).wait(1).to({regY:2.1,rotation:0,x:112.5,y:149.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.6,x:107.1,y:147.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-45.4,x:101.2,y:144.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-70.9,x:96.3,y:141.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-68.2,x:90.7,y:137.2},0).wait(1).to({rotation:-73.2,x:80.6,y:135.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-68.2,x:91.6,y:133.8},0).wait(1).to({x:84.8,y:124},0).wait(1).to({regX:17.5,regY:2,rotation:-8.2,x:69.1,y:95.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7,x:70.6,y:107.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-5.8,x:75.2,y:115.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:81.1,y:124.8},0).wait(1).to({regX:17.4,scaleX:1,scaleY:1,rotation:-1.8,x:87.8,y:132.1},0).wait(1).to({regX:17.6,rotation:-2.3,x:95.9,y:138.6},0).wait(1).to({regX:17.4,rotation:-1,x:105,y:143},0).wait(1));

	// ы_передняя сзади3
	this.instance_21 = new lib.ы_передняяспереди1("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(122.5,116.1,1,1,0,0,0,12.3,2);
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 236, 173, 32, 0)];
	this.instance_21.cache(-2,-2,19,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({rotation:-7.5,x:112.5,y:112.8},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-15.3,x:102.4,y:109.4},0).wait(1).to({regX:12.3,rotation:-22.8,x:92.4,y:106.1},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-30.5,x:82.5,y:102.7},0).wait(1).to({rotation:-7,x:87,y:100.3},0).wait(1).to({regY:1.9,scaleX:1,scaleY:1,rotation:-16.7,x:91.4,y:97.6},0).wait(1).to({regY:2,scaleX:1,scaleY:1,rotation:3.6,x:97.3,y:90.9},0).wait(1).to({regX:12.5,scaleX:1,scaleY:1,rotation:63.3,x:104.3,y:90},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:104.8,y:95.3},0).wait(1).to({rotation:45.1,x:106.7,y:99.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.1,x:109.9,y:102.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:27.1,x:113,y:106.1},0).wait(1).to({rotation:18,x:116.2,y:109.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,x:119.4,y:112.7},0).wait(1).to({regX:12.3,scaleX:1,scaleY:1,rotation:0,x:122.5,y:116.1},0).wait(1).to({rotation:-7.5,x:112.5,y:112.8},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-15.3,x:102.4,y:109.4},0).wait(1).to({regX:12.3,rotation:-22.8,x:92.4,y:106.1},0).wait(1).to({regX:12.4,scaleX:1,scaleY:1,rotation:-30.5,x:82.5,y:102.7},0).wait(1).to({rotation:-7,x:87,y:100.3},0).wait(1).to({regY:1.9,scaleX:1,scaleY:1,rotation:-16.7,x:91.4,y:97.6},0).wait(1).to({regY:2,scaleX:1,scaleY:1,rotation:3.6,x:97.3,y:90.9},0).wait(1).to({regX:12.5,scaleX:1,scaleY:1,rotation:63.3,x:104.3,y:90},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.2,x:104.8,y:95.3},0).wait(1).to({rotation:45.1,x:106.7,y:99.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:36.1,x:109.9,y:102.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:27.1,x:113,y:106.1},0).wait(1).to({rotation:18,x:116.2,y:109.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,x:119.4,y:112.7},0).wait(1));

	// тень4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAeIgWgDQhdgRgegOIgKgIIAEgSQAFgUAvAIIBmATIAgAEIBKAkQAqgMgDAoIgPAAQgrAAhagPgAhQgZQAAgBgIABIgOgFQAUAKACgFg");
	this.shape.setTransform(231.7,159.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAcIgBAAIgTgCQhVgMgcgOIgBAAIgIgFIADgRIABgBQAFgSAoAGIABAAIBdANIAdADIADACIBBAcIADAAQAjgLgBAjIgFACIgSAAQgnAAhJgJg");
	this.shape_1.setTransform(222.2,159.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAaIgBAAIgQgBQhOgHgagMIAAAAIgIgGIgBAAIADgNIAAgCQAEgRAlAEIABAAIBUAIIAaABIACABIA8AYIACAAQAfgKABAeIgDACQgOACgXAAQggAAgxgEg");
	this.shape_2.setTransform(212.6,158.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAXIgBAAIgOAAQhGgDgYgJIAAgBIgHgEIgBAAIACgMIAAgCQACgQAiABIABAAIBLAEIAXgBIACABIA2ATIACAAQAbgLACAaIgBADQgWAGg0AAIgggBg");
	this.shape_3.setTransform(203.1,158.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(208,231,252,0.4)").s().p("AhbAPIgIgDIABgNQABgPAegBQBKgBAOgDIAzAQQAZgPADAdQgZAIhHADIglACQgqAAgQgHgAg3gIIgFACIgKgCQAOAFABgFg");
	this.shape_4.setTransform(193.5,158.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(208,231,252,0.4)").s().p("AhcAPIgHgEIAAgNQACgQAfAAQBKgBANgCIA0ARQAYgPADAdQgZAJhHACIgeABQgwAAgSgHgAg3gIIgOgBQANAFABgEg");
	this.shape_5.setTransform(186.3,158.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(208,231,252,0.4)").s().p("AhcAPIgHgFIABgNQABgRAfAAQBKABAOgCIAzASQAZgPACAeQgZAIhHACIgdAAQgxAAgSgHgAg3gJIgPAAQAOAFABgFg");
	this.shape_6.setTransform(179.1,159.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(208,231,252,0.4)").s().p("AhdAPIgHgFIACgOQACgRAeAAQBMABANgCIAzATQAZgPACAfQgaAIhHACIgTAAQg5AAgVgIgAg3gKIgOAAQANAFABgFg");
	this.shape_7.setTransform(171.8,159.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(208,231,252,0.4)").s().p("AhdAPIgHgGIACgPQACgRAfABQBLABANgBIAzAUQAZgPACAfQgaAIhIABIgMAAQg/AAgVgIgAg3gLIgFABIgJgBQANAFABgFg");
	this.shape_8.setTransform(164.6,159.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(208,231,252,0.4)").s().p("AADAYIAAAAIgOAAQhCAAgXgIIgBgBIgGgFIAAgBIABgLIAAgEIAAAAQADgQAcgBIAFAAIABAAIBEABIAXgBIACAAIAAAAIA1ATIADABQAZgOAEAbIgBAFQgdAHhLACIgBAAgAhKgLIAEABIgFgBg");
	this.shape_9.setTransform(182.4,160.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(208,231,252,0.4)").s().p("AhsAQIgHgGIABgNIAAgEQAEgQAfAAIAEAAIBLAAIAYgBIACAAIA5AUIADAAQAbgOADAdIgCADQgeAJhPABIgCAAIgOAAIgIABQhBAAgYgJgAhAgLIgRgBQAQAGABgFg");
	this.shape_10.setTransform(200.1,160.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(208,231,252,0.4)").s().p("AAGAaIgCAAIgBAAIgPgBQhMgCgagKIgBgBIgHgFIgBAAIACgOIABgEQAFgPAgAAIAFABIBOADIABAAIAaAAIABAAIABAAIA8AWIABAAIACAAQAdgNADAeIAAABIgDACQgbAHg+AAIgagBg");
	this.shape_11.setTransform(206.1,161.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(208,231,252,0.4)").s().p("AAGAcIgCAAIgBAAIgQgBIgBAAQhQgFgbgMIgBAAIgHgGIgBAAIACgPIABgEQAGgPAjACIAAAAIAGAAIBSAGIAAAAIAcABIABAAIABAAIA/AYIABAAIACAAQAfgMACAfIAAACIgEACQgTAEglAAQgbAAgmgCg");
	this.shape_12.setTransform(212.1,162.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(208,231,252,0.4)").s().p("AAGAdIgCAAIgBAAIgRgCIgBAAQhUgIgdgMIgBgBIgHgFIgBgBIADgPIABgFQAHgPAlAEIAGAAIBWAJIAAAAIAdABIABAAIACABIBCAbIABAAIACgBQAhgLABAgIAAACIgEACQgPACgaAAQgiAAg1gEgAhKgRQgNAAgHgDQAPAGAFgDg");
	this.shape_13.setTransform(218.1,163.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(208,231,252,0.4)").s().p("AAGAdIgCAAIgBAAIgSgCIgBAAQhYgKgegOIgBAAIgKgGIAEgRIABgFQAJgPAmAFIABAAIAGABIBaALIABAAIAeADIABAAIACABIBFAdIABAAIACgBQAjgKABAhIAAADIgFABQgMABgQAAQgnAAhEgIgAhOgUQgOgBgHgCQASAIADgFg");
	this.shape_14.setTransform(224.1,164.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAeIgVgDQhegNgfgOIgKgHIAEgSQAFgUAvAHIBmAPIAhADIBLAhQApgNgCAoIgYABQgsAAhRgLgAhRgXIgIABIgOgFQAUAKACgGg");
	this.shape_15.setTransform(230.1,165);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAcIgBAAIgTgCQhWgKgcgNIgKgFIADgRIABgCQAFgRApAFIABAAIBcALIAeACIABABIBEAcQAlgNAAAkIgDABQgMACgTAAQgmAAg/gHgAhLgTIgUgDQATAJABgGg");
	this.shape_16.setTransform(221,163.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAaIgCAAIgRgBQhMgGgagLIgJgGIACgOIAAgBQAEgRAmADIAAAAIBUAHIAbAAIAAABIA/AXQAggMACAgIgCABQgSADgfAAQgeAAgpgCgAhEgPIgTgCQASAIABgGg");
	this.shape_17.setTransform(211.8,161.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAXIgCAAIgPgBQhFgBgXgKIgIgEIABgNIAAgBQADgQAiABIABAAIBLACIAXAAIA5AUQAcgOADAcIgBADQgYAGg7AAIgYAAgAg+gLIgQgBQAPAFABgEg");
	this.shape_18.setTransform(202.7,160.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAZIgBAAIgOAAQg+gDgYgIIgDgBIgHgHIACgLIAAgEIABAAQACgQAcABIAEAAIACAAIBEADIAWAAIAEABIAzAUIADAAIACAAQAYgLACAcIgBADIgBAAQgYAFg2AAIgYAAgAhQgNIgCADIACACQAIACAQADIAFAAIALACIASAAQABgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBgGACIgNgGIgHAAIgUgEIgFgBQgEAAgCACg");
	this.shape_19.setTransform(174.2,159.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAaIAAAAIgCAAIgNgBQhFgEgZgKIgCgBIAAAAIgHgGIgBgBIADgMIABgEIAAAAQAEgQAeACIAEAAIABAAIBIAGIAZABIADAAIA3AXIAEAAIABAAQAagLACAeIgBACIgCAAQgUAEglAAIg0gCgAhcgPIgCAFIADADQAMAFAgAEIAHABIATADQAUABALgBQABgFgCgBQgCgDgIADIgagLIgLgCIgkgGIgHAAQgIAAgDAEg");
	this.shape_20.setTransform(183.8,159.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAbIAAAAIgBAAIgQgBQhJgHgagLIgBAAIgBgBIgHgGIgBgBIADgNIABgEIAAAAQAFgQAhADIADABIACAAIBNAIIAaABIAEABIA5AZIAEAAIABAAQAcgLABAfIgCACIgCAAQgPADgaAAQgeAAgsgEgAhogSIgCAJIAFAEQAQAGAtAHIAMACIAaADQAcADASgBQABgIgDgDQgEgEgNADIgjgQIgRgCIgzgJIgKAAQgMAAgEAGg");
	this.shape_21.setTransform(193.3,159.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAcIAAAAIgCAAIgQgCQhOgJgbgLIgBgBIgBAAIgHgGIgBgBIADgPIABgDIAAgBQAGgPAjAEIAEAAIACAAIBRALIAcACIADABIA9AbIADAAIABAAQAfgKAAAgIgCACIgCAAIgbABQgjAAg8gGgAh0gUIgDALIAHAGQAVAJA7AJIAPACIAgAEQAnAFAYgCQAAgKgDgFQgGgHgRAFIgwgWIgUgCIhCgLIgMgCQgQAAgGAKg");
	this.shape_22.setTransform(202.9,159.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAdIgBAAIgCAAIgRgDQhTgLgcgNIgBAAIgBgBIgIgFIgBgBIAEgQIABgEIAAgBQAIgPAkAGIAFAAIACAAIBVANIAdADIAEABIA5AaQgGAAgJACIg7gbIgZgDIhSgNQghgGgIAQIgEAOIAJAHQAZALBKAMIASACIAoAGQAwAFAdgCQABgNgFgGIgCgCIAAAAQAhgLgBAkIgCABIgDAAIgUABQgmAAhFgJgABlALIgHgDQAHAAAEADIgBAAIgDAAgABeAIg");
	this.shape_23.setTransform(212.5,159.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAeIgBAAIgTgDQhYgOgdgNIgBgBIgJgHIgBgBIAEgQIACgFQAIgPAnAHIAFAAIBcAQIAfADIADACIBDAfIAFAAQAjgKgCAkIgGABIgOAAQgpAAhQgLg");
	this.shape_24.setTransform(222.1,159.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	// тень3
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAeIgVgEQhegQgegOIgKgIIAFgSQAFgUAvAIIBlATIAhAEIBKAkQApgMgDAoIgOAAQgsAAhagPgAhQgZQAAgBgHABIgOgFQATAKACgFg");
	this.shape_25.setTransform(241.1,167.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAcIgBAAIgSgDQhWgLgcgOIgBAAIgIgFIAEgRIAAgBQAGgSAoAGIACAAIBbANIAeADIADABIBBAdIACAAQAjgLgBAjIgFACIgRAAQgnAAhKgJg");
	this.shape_26.setTransform(217.8,166.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAaIgBAAIgRgBQhNgHgagMIAAAAIgJgGIADgNIABgCQAEgRAkAEIACAAIBSAIIAcABIACABIA7AYIADAAQAegKABAeIgDACQgOACgXAAQggAAgxgEg");
	this.shape_27.setTransform(194.5,166.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(208,231,252,0.4)").s().p("AAGAXIgBAAIgQAAQhFgDgXgJIAAgBIgIgEIABgMIAAgCQADgQAhABIABAAIBJAEIAagBIABABIA2ATIADAAQAbgLACAaIgBADQgXAGg0AAIgfgBg");
	this.shape_28.setTransform(171.3,165.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(208,231,252,0.4)").s().p("AhbAPIgIgDIABgNQABgPAegBQBKgBAOgDIAzAQQAZgPADAdQgZAIhHADIglACQgqAAgQgHgAg3gIIgFACIgKgCQAOAFABgFg");
	this.shape_29.setTransform(148,165.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(208,231,252,0.4)").s().p("AhgAPIgHgFIABgNQABgRAgAAQBNAAAOgCIA1ATQAbgQACAfQgaAJhKABIgYABQg4AAgUgIgAg5gKIgPAAQAOAFABgFg");
	this.shape_30.setTransform(165,165);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(208,231,252,0.4)").s().p("AhkAOIgIgFIACgPQACgSAhAAQBRADAOgCIA3AVQAcgQACAiQgcAIhNABQhOAAgagLgAg7gMIgQAAQAPAGABgGg");
	this.shape_31.setTransform(181.9,165);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAbQhRgBgbgMIgIgGIACgQQADgUAiACQBUAEAPgCIA5AYQAdgQABAkQgZAHhEAAIgQAAgAg+gOIgQAAQAPAGABgGg");
	this.shape_32.setTransform(198.9,164.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAeQhVgDgcgNIgIgHIACgSQAEgVAkADQBXAGAPgBIA8AZQAegQAAAnQgXAGg3AAIgjAAgAhAgPIgFABIgLgCQAPAHABgGg");
	this.shape_33.setTransform(215.8,164.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(208,231,252,0.4)").s().p("AAJAeIgGAAIgMAAQhOgFgagMIgJgHIADgPIABgEQAEgTAgACIAFAAIBNAGIAcABIABAAIA6AYIAEACQAbgMAFAbIgCAJQgVAEgrAAIgwgBgAhDgQQgJABgHgCQAOAHACgGg");
	this.shape_34.setTransform(219.2,165.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(208,231,252,0.4)").s().p("AAIAeIgFAAIgOgBQhQgGgbgNIgIgHIACgPIABgEQAFgSAiACIAFABIBRAHQAUACAIgBIACABIA8AZIAEABQAdgLACAdIgDAHQgSAEghAAQgbAAgmgDg");
	this.shape_35.setTransform(222.6,167);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(208,231,252,0.4)").s().p("AAHAeIgFAAIgOgBQhSgIgdgNIgJgHIAEgPIABgEQAFgSAjADIAGABIBTAJIAeABIACABIA+AaIAEABQAfgLACAfIgGAGQgPACgYAAQghAAgwgEg");
	this.shape_36.setTransform(226.1,168.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(208,231,252,0.4)").s().p("AAHAfIgGgBIgOgBQhWgKgcgNIgKgGIAEgRIABgEQAGgQAlADIAGABIBWAKIAeACIAEABIA/AcIAFAAQAggLABAgIgHAFQgOACgTAAQgkAAg3gFg");
	this.shape_37.setTransform(229.5,169.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(208,231,252,0.4)").s().p("AAGAeIgGAAIgOgCQhZgLgdgOIgKgFIAEgSIABgEQAIgQAlAFIAHAAIBZAMIAfACIAEACIBCAcIAEAAQAhgKABAiIgJADIgZABQgmAAhBgHg");
	this.shape_38.setTransform(232.9,170.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAeIgFgBIgQgCQhbgMgegOIgKgGIAEgSIACgEQAIgPAnAFIAHABIBcANIAgACIAEACIBEAeIAFgBQAjgKgBAkIgLADIgRAAQgpAAhKgJgAhVgWIgPgDQASAIgDgFg");
	this.shape_39.setTransform(236.3,171.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAeIgVgDQhegNgfgOIgKgHIAEgSQAFgUAvAHIBmAPIAgADIBLAhQApgMgBAnIgXABQgrAAhTgLgAhRgXIgIAAIgOgEQAUAKACgGg");
	this.shape_40.setTransform(239.8,172.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAcIgTgCQhVgKgcgNIgBAAIgKgFIAEgRIAAgBQAFgRAoAEIACAAIBdAMIAdABIACABIBDAcIABAAQAkgMAAAjIgEABIgdABQgmAAhBgGgAhRgTIgOgDQARAIgDgFg");
	this.shape_41.setTransform(216.8,170.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAaIgSgBQhNgGgagLIAAAAIgJgFIACgPIAAgBQAEgRAlADIABAAIBVAHIAaAAIABABIA+AXIAAAAQAggMABAfIgCACQgSADgfAAQgdAAgpgCg");
	this.shape_42.setTransform(193.9,168.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAXIgQAAQhEgCgYgKIgIgEIACgNIAAgBQACgQAiABIABAAIBLADIAYgBIAAAAIA4AUQAcgNADAbIgBADQgaAGg/AAIgTAAg");
	this.shape_43.setTransform(171,166.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(208,231,252,0.4)").s().p("AhfANIgIgEIABgOQACgRAgABQBNACAOgCIA1ATQAagPACAfQgaAIhKAAIgMAAQhBAAgWgJgAg4gLIgQAAQAPAFABgFg");
	this.shape_44.setTransform(165,165);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(208,231,252,0.4)").s().p("AADAaQhOgDgZgLIgHgFIACgPQACgSAhABQBQAGAPgCIA2AWQAdgOABAhQgWAGgyAAIgiAAgAg7gNIgPgBQAPAHAAgGg");
	this.shape_45.setTransform(181.9,164.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(208,231,252,0.4)").s().p("AADAcQhRgFgagNIgIgGIADgRQADgTAjADQBTAIAPgBIA4AZQAegOAAAlQgRAEgjAAQgYAAgigCgAg8gQIgQgBQAOAHACgGg");
	this.shape_46.setTransform(198.8,164.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(208,231,252,0.4)").s().p("AADAeQhVgIgbgOIgHgHIADgSQAEgUAkAEQBWAMAQgBIA6AcQAfgOgBAnQgOADgaAAQgeAAgsgEgAg+gSIgGABIgLgDQAPAIACgGg");
	this.shape_47.setTransform(215.8,164.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(208,231,252,0.4)").s().p("AAKAfIgGgBIgCAAIgKgBQhPgJgagNIgIgHIACgOIACgFIAAgBQAGgRAfADIAFAAQAzAIAaACIAbADIACAAIA4AbIAFACQAcgMACAdIgCAIIAAAAQgNADgWAAQgeAAgtgFgAhYgVIgBADIACABQAIAEARADIAEAAIALACIATAAIACAAIAAgCQgBgDgGABIgPgEIgHgBIgWgFIgFgBQgEAAgCACg");
	this.shape_48.setTransform(219.4,165.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(208,231,252,0.4)").s().p("AAIAfIgFgBIgCAAIgLgBQhRgLgbgNIgIgHIADgPIABgEIAAgBQAHgRAgAEIAHABIBPALIAcACIADABIA6AcIAEABQAegKABAdIgDAHIgBABQgLABgQAAQghAAg3gGgAhjgWIgCAFIAFAEQANAFAeAFIAIABIATADIAeABIADgBIAAgCQgBgIgKADIgbgKIgMgCIglgIIgHgBQgIAAgEAFg");
	this.shape_49.setTransform(223,165.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(208,231,252,0.4)").s().p("AAHAfIgFgBIgCAAIgLgCQhUgLgbgOIgJgHIADgPIABgFIABgBQAHgQAiAEIAIABIBRAMQAVADAIAAIADABIAAAAIA8AeIAFAAQAfgKAAAfIgFAGIgBAAIgXACQgjAAg9gIgAhtgXIgDAIIAIAFQARAIArAGIAMABIAcAFQAaACAPAAIAFgBIAAgFQgBgLgRAEIglgQIgRgDIg1gKIgJAAQgNAAgEAHg");
	this.shape_50.setTransform(226.6,165.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(208,231,252,0.4)").s().p("AAGAfIgFgBIgBAAIgNgCQhWgMgcgPIgJgGIAEgQIABgFIAAgBQAIgQAjAFIAJACIBTANIAeADIAEABIABAAIA+AfIAEAAQAhgKgBAhIgHAFIgBAAIgRAAQglAAhFgJgAh4gYIgEALIAKAHQAXAJA4AJIAPACIAjAFQAkAFATgBIAHgBIAAgHQgCgPgXAEIgxgWIgVgCIhEgNIgMgBQgQAAgGAKg");
	this.shape_51.setTransform(230.2,166.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(208,231,252,0.4)").s().p("AAFAeIgFgBIgBAAIgNgCQhZgNgdgOIgJgIIAEgQIACgFIAAgBQAIgPAlAGIAJACIBXAOIAeADIAEABIABAAIA2AbQgGAAgIACIg8gdIgagDIhUgPQgggFgKAQIgEAOIANAKQAbAKBGALIASADIArAGQAsAGAYgBIAIgCIAAgIQgBgGgDgEIACAAQAigJgCAiIgIADIgCABIgIAAQgoAAhPgMgABpANIgKgFQAJAAAEAFIgDAAg");
	this.shape_52.setTransform(233.8,166.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(208,231,252,0.4)").s().p("AAEAeIgFgBIgPgCQhbgPgegOIgJgIIAEgRIACgFQAJgPAnAGIAJACIBZAPIAgAEIAEACIBDAhIAFgBQAjgJgCAkIgKACIgIABQgpAAhUgOg");
	this.shape_53.setTransform(237.5,166.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(1));

	// тень2
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(208,231,252,0.4)").s().p("AiPAUIgLgGIABgRQACgVAwAAQBzgBAUgCIBQAWQAngTAEAmQgnALhuADIgsAAQhMAAgdgIgAhWgLIgIABIgPgCQAWAHABgGg");
	this.shape_54.setTransform(112,165.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(208,231,252,0.4)").s().p("AiBAUIgLgGIABgRQABgVAsAAQBpgBATgCIBIAWQAjgTAEAmQgkALhjADIgoAAQhGAAgZgIgAhOgLIgVgBQAUAHABgGg");
	this.shape_55.setTransform(107.9,165.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(208,231,252,0.4)").s().p("Ah1AUIgKgGIACgRQABgVAnAAQBfgBARgCIBBAWQAggTAEAmQghALhZADIglAAQg+AAgYgIgAhHgLIgSgBQASAHAAgGg");
	this.shape_56.setTransform(103.9,165.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(208,231,252,0.4)").s().p("AhoAUIgIgGIABgRQAAgVAkAAQBTgBAQgCIA6AWQAdgTADAmQgdALhQADIggAAQg4AAgVgIgAg/gLIgQgBQAPAHABgGg");
	this.shape_57.setTransform(99.8,165.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(208,231,252,0.4)").s().p("AhbAUIgIgGIABgRQABgVAfAAQBKgBANgCIAzAWQAZgTADAmQgZALhHADIgcAAQgxAAgSgIgAg3gLIgFABIgJgCQAOAHAAgGg");
	this.shape_58.setTransform(95.7,165.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(208,231,252,0.4)").s().p("AhaATIgFgJQAAgLAKgHQAXgQAagCIBRADQAaADAVATQALgMgTAeQgoAKg7AAIgPAAQgrAAgRgIgAgygLIgPAAQAPAGAAgGg");
	this.shape_59.setTransform(84.9,165.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(208,231,252,0.4)").s().p("AgtAaQgmAAgOgHIgEgMQABgOASgGQAsgMAYgBQAzAEAXAEQAagEAQAYQgCgDgoAWQgoAGgjAAIgegBgAhFgKQAPAGAAgHg");
	this.shape_60.setTransform(75.1,165.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(208,231,252,0.4)").s().p("AhMAZQgWgBgJgFIgCgQQABgRAbgEIBVgJQAqAHAaAHQAcgMAKAfIhOASQglAEgcAAQgZAAgSgDgAhMgKQAPAGABgGg");
	this.shape_61.setTransform(65.4,166);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(208,231,252,0.4)").s().p("AhsAYIgJgGIAAgSQABgVAkgCQBXgDAQgDIA9AUQAdgUAFAnQgeALhTAGQggADgZAAQgnAAgRgGgAhCgKIgGACIgLgBQAQAFABgGg");
	this.shape_62.setTransform(55.7,166.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(208,231,252,0.4)").s().p("AhYAZQgVgCgJgEIgBgRQABgTAfgCQBMgGASgDQAsAJAdAIQAegPAKAiQgUAHhGALQgkADgdAAQggAAgVgEgAhUgJQARAGABgHg");
	this.shape_63.setTransform(63.5,166);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(208,231,252,0.4)").s().p("AhFAZQgjgBgOgGIgDgPQABgQAagEQA/gIAZgCQA2AHAcAGQAfgLAPAeIhEATQgoAEghAAQgbAAgXgDgAhUgKQARAGABgGg");
	this.shape_64.setTransform(71.2,165.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(208,231,252,0.4)").s().p("AgxAaQg0gBgRgGIgGgNQABgPAWgFQAygLAegCQBCAGAaAFQAhgHAUAaQgBgBgsAUQgrAGgpAAQgXAAgVgCgAhBgKIgUAAQASAGACgGgAB8ADIAAAAIAAAAg");
	this.shape_65.setTransform(78.9,165.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(208,231,252,0.4)").s().p("AgfAaQhCABgXgIIgHgLQABgNAQgGQAngNAhgCQBPAEAZADQAjgCAZAWQAJgFghAYQguAHg3AAIgggBgAhWgKQATAGABgHg");
	this.shape_66.setTransform(86.7,165.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(208,231,252,0.4)").s().p("Ah9ATIgIgJQABgMALgHQAagPAmgCIBzAEQAlACAdATQATgKgUAdQg1AJhVgBIgXABQg/AAgYgIgAhGgLIgVAAQAUAGABgGg");
	this.shape_67.setTransform(94.8,165.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(208,231,252,0.4)").s().p("AiEASIgKgHQABgLAGgHQAOgSArgBQBnABAWgBQAmAHAjAPQAdgPgIAiQguAKhhABIgfABQhIAAgbgJgAhMgMIgWAAQAVAGABgGg");
	this.shape_68.setTransform(103.2,165.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(208,231,252,0.4)").s().p("AhYAZQgUgCgKgEIgBgRQABgTAfgCQBMgGASgDQAsAJAdAIQAegPAKAiQgTAHhHALQgkADgdAAQggAAgVgEgAhCgJQgLABgHgBQAOAEAEgEg");
	this.shape_69.setTransform(63.5,166);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(208,231,252,0.4)").s().p("AhFAZQgjgBgOgGIgDgPQABgQAagEQA/gIAZgCQA2AHAcAGQAfgLAPAeIhEATQgoAEghAAQgbAAgXgDgAhCgKQgMABgGgBIAAAAQANAEAFgEg");
	this.shape_70.setTransform(71.2,165.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(208,231,252,0.4)").s().p("AgxAaQgzgBgSgGIgGgNQABgPAWgFQAzgLAdgBQBCAFAaAFQAigHATAaQgBgBgsAUQgqAFgoAAQgYAAgWgBgAhBgKQgMACgHgCIAAAAQAMADAHgDgAB8ADIAAAAIAAAAg");
	this.shape_71.setTransform(78.9,165.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(208,231,252,0.4)").s().p("AgfAaQhCABgXgIIgHgLQABgNAQgGQAngNAhgCQBPAEAZADQAjgCAZAWQAJgFghAYQguAHg3AAIgggBg");
	this.shape_72.setTransform(86.7,165.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(208,231,252,0.4)").s().p("Ah8ASIgJgJQABgLALgIQAagPAngBIByADQAlACAdAUQATgLgUAeQg1AJhVgBIgQABQhFAAgYgJg");
	this.shape_73.setTransform(94.8,165.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54}]}).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_68}]},1).wait(1));

	// тень1
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(208,231,252,0.4)").s().p("AiPALIgLgDIACgJQABgMAvAAQB0gBAVgBIBPAMQAmgKAFAVQgnAGhtACIgqAAQhOAAgegFgAhWgGIgIABIgOgBQAVADABgDg");
	this.shape_74.setTransform(99,160.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(208,231,252,0.4)").s().p("AiCANIgKgDIABgMQABgOAsAAQBpAAATgCIBIAPQAjgNAEAaQgjAHhkACIgoAAQhGAAgagGg");
	this.shape_75.setTransform(94.6,163.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(208,231,252,0.4)").s().p("Ah1APIgKgEIACgNQABgRAnAAQBfAAARgCIBBARQAggPAEAeQghAJhaACIggAAQhCAAgYgHgAhVgNQgWAAgCAHIgBAGIABAAIAFABQASAEA2AAQA0AAAQgLQgGgFgMAEIglgHQgLABg3AAg");
	this.shape_76.setTransform(94.6,162.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(208,231,252,0.4)").s().p("AhoASIgJgFIACgQQABgSAiAAQBVgBAPgCIA6ATQAdgQADAiQgdAKhQACIgfAAQg5AAgVgHgAg/gKIgQAAQAQAFAAgFg");
	this.shape_77.setTransform(94.6,160.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(208,231,252,0.4)").s().p("AhaAWIgIgDIAAgOQgBgQAegCQBKgIAOgDIA0AMQAXgQAGAdQgYALhGAIQgpAFgZAAQgUAAgKgDgAg4gEIgFABIgKgBQAPAEAAgEg");
	this.shape_78.setTransform(86.3,161.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(208,231,252,0.4)").s().p("AhaATIgFgJQAAgLAKgIQAWgQAbgBIBRADQAaADAVASQALgLgTAeQgoAKg7gBIgPABQgrAAgRgIg");
	this.shape_79.setTransform(77,160.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(208,231,252,0.4)").s().p("AgtAaQgmAAgOgHIgEgMQABgOASgGQAtgMAWgBQA0AEAXAEQAbgEAPAYQgCgDgoAWQgoAGgjAAIgegBgAhGgKQAPAGABgHg");
	this.shape_80.setTransform(91.1,159.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(208,231,252,0.4)").s().p("AhMAZQgWgBgJgFIgCgQQABgRAbgDIBVgKQAqAHAaAHQAcgMAKAfIhOASQglAEgcAAQgZAAgSgDgAg8gKQgKACgGgBIAAAAQAMACAEgDg");
	this.shape_81.setTransform(81.9,159.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(208,231,252,0.4)").s().p("AhsAYIgJgGIAAgSQABgVAkgCQBXgDAQgDIA9AUQAdgUAFAnQgeALhTAGQggADgZAAQgnAAgRgGgAhCgKIgGACIgLgBQAQAFABgGg");
	this.shape_82.setTransform(53.6,159.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(208,231,252,0.4)").s().p("AhZAXQgTgCgKgEIgBgRQABgRAfgCQBMgFASgCQAsAIAdAJQAegRAKAiQgUAJhGAIQghACgbAAQgkAAgXgEgAhUgIQARAFABgGg");
	this.shape_83.setTransform(59.8,159.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(208,231,252,0.4)").s().p("AhFAWQgjgCgOgEIgDgOQABgQAagCIBYgIQA2AHAcAHQAfgNAPAdQgKAFg6ALQgjADgdAAQggAAgbgDgAhUgIQARAFABgGg");
	this.shape_84.setTransform(65.9,159.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(208,231,252,0.4)").s().p("AgyAVQgygBgTgEIgEgNQABgNAUgDQAzgHAdgCQBDAGAbAFQAhgJATAZQAAACguANQgjADgjAAQgdAAgdgCgAhVgHQASAEABgFg");
	this.shape_85.setTransform(72.1,159.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(208,231,252,0.4)").s().p("AgfATQhCAAgXgFIgHgJQABgMAQgDQAngJAhAAQBPADAZAEQAjgFAZATQAJgBghAQQgnADgvAAIgvgBgAhCgIIgUAAQATAFABgFg");
	this.shape_86.setTransform(78.4,159.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(208,231,252,0.4)").s().p("AgPASQhSABgcgGIgIgHQABgJALgEQAagKAmAAIBzAEQAlgBAdAOQATgDgUARQgqAEhAAAIggAAgAhGgHIgVAAQAUAEABgEg");
	this.shape_87.setTransform(84.9,160.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(208,231,252,0.4)").s().p("AiEAMIgKgFQABgHAGgFQAOgKArgBIB9ABQAmADAjALQAdgIgIAUQguAGhhAAIgQAAQhUAAgegFg");
	this.shape_88.setTransform(91.8,160.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(208,231,252,0.4)").s().p("AhZAXQgTgCgKgEIgBgQQABgSAfgCQBMgFASgCQAsAIAdAJQAegQAKAhQgUAIhGAJQgiACgcAAQgiAAgXgEgAhagIIgBACIABAAIABABQAJABAUABIAIAAIATgDIgCAAIgPgCIgbgBIgNABg");
	this.shape_89.setTransform(59.8,159.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(208,231,252,0.4)").s().p("AhFAWQgjgCgOgEIgDgOQABgQAagCIBYgIQA2AHAcAHQAfgNAPAdQgKAFg6ALQgjADgdAAQggAAgbgDgAhggHQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIABAAIADABQANACAkAAIAOAAIAjgCIgEgDQgNgDgOgBIgvgBIgEAAQgMAAgFADg");
	this.shape_90.setTransform(65.9,159.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(208,231,252,0.4)").s().p("AgyAVQgygCgTgEIgEgMQABgNAUgDQA0gHAcgCQBDAGAbAFQAhgJATAYQAAACgtANQgmAEglAAQgaAAgcgCgAhngHQgDADAAAEIAAAAIAFABQASADAzAAIAUAAQAhgBASgCQACAAgKgFQgSgFgTgBIhDgCQgXAAgHAFg");
	this.shape_91.setTransform(72.1,159.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(208,231,252,0.4)").s().p("AgfATQhCAAgXgFIgHgJQABgMAQgDQAngJAhAAQBPADAZAEQAjgFAZATQAJgBghAQQgnADgvAAIgvgBgAhvgGQgEADgBAEIABAAIAGAEQAXADBCAAIAaAAQArgBAXgCQADAAgLgIQgYgGgbgCIhVgCQgdAAgKAHg");
	this.shape_92.setTransform(78.4,159.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(208,231,252,0.4)").s().p("AgPASQhSAAgbgFIgJgIQABgIALgFQAagIAngCIByAFQAlgBAdAOQATgDgUARQgnAFg7AAIgogBgAh6gFQgEAEgBAFIAIAEQAcAFBSAAIAfAAQA0gBAegEQAEAAgPgKQgdgIgggDIhqgBQgkAAgMAJg");
	this.shape_93.setTransform(84.9,160.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74}]}).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_88}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.3,171.8);


(lib.шапка3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.шапка_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(24.1,14.3,1,1,0,0,0,24.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,28.7);


(lib.шапка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.шапка3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(24.1,51.7,1,1,0,0,0,24.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

	// Layer 3
	this.instance_1 = new lib.шапка2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.5,8.8,1,1,0,0,0,8.8,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// Layer 4
	this.instance_2 = new lib.шапка_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.9,34,1,1,0,0,0,35.1,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.3,66.1);


(lib.голова = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB590").s().p("ABbA/QgDABgDgBIgGgCQgNgFgJgKIgGgLQgDgGAAgKQABgbAVgJQARgIAVAJQAUAJAFAWQAFAVgKAMIgFAEIgEAEIgIAEIgIADIgGABgAhaAVQgDABgEgBIgGgCQgNgFgIgLIgHgJQgCgGgBgKQABgcAVgJQASgJAUAJQAVAJAFAXQAEAWgKAKIgFAFIgDADIgIAFIgIADIgGABg");
	this.shape.setTransform(25.4,25.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).to({_off:true},5).wait(12));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E48647").s().p("ABbA0QgDABgDgCIgGgCQgNgEgJgLQgEgGgBgFQgCgGACgSQAAgTAGAdQAGAeAVADQAUAEAQgKQARgMgKAMIgFAEIgEAEIgHAEIgJADIgFABgAhaAJQgDABgEgBIgGgCQgMgFgJgKQgEgGgCgFQgBgFABgTQABgUAGAeQAFAeAVADQAUAEARgKQARgLgLALIgEAFIgEADIgIAEIgIADIgGABg");
	this.shape_1.setTransform(25.1,27);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14).to({_off:false},0).to({_off:true},5).wait(12));

	// зрачок_1
	this.instance = new lib.зрачок_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.2,27.1,1,1,0,0,0,2.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({startPosition:0},0).to({x:35,y:28.7},8).to({_off:true},9).wait(1));

	// зрачок_2
	this.instance_1 = new lib.зрачок_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.8,22.6,1,1,0,0,0,2.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({startPosition:0},0).to({x:16.6,y:24.2},8).to({_off:true},9).wait(1));

	// глаз2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAdQgMgNABgQQgBgQAMgLQAMgMAQgBQARABAMAMQALALABAQQgBAQgLANQgMAMgRgBQgQABgMgMg");
	this.shape_2.setTransform(34.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},30).wait(1));

	// глаз1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAcQgNgLAAgRQAAgQANgMQALgLAQAAQARAAALALQAMAMAAAQQAAARgMALQgLANgRAAQgQAAgLgNg");
	this.shape_3.setTransform(16.1,23);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},30).wait(1));

	// брови
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#953C06").ss(0.6,1,1).p("AgzAJIAOgKQATgLAVACQAYACAOAJQAEADAGAI");
	this.shape_4.setTransform(16.4,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB590").s().p("AgWAKQgcADAAAHIgEgTQgFgTACgBQAugPAnAMQAUAGAKAIQgFAIgYAcQgUgVgfADg");
	this.shape_5.setTransform(17.6,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},30).wait(1));

	// волосы
	this.instance_2 = new lib.волосы("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,1.7,1,1,0,0,0,19.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:19.1,regY:1.8,rotation:13.3},9).to({regX:19.2,regY:1.7,rotation:0},9).to({_off:true},12).wait(1));

	// брови
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#953C06").ss(0.6,1,1).p("Ag0AMIAPgMQATgNAWACQAYACANAJQAFADAHAI");
	this.shape_6.setTransform(34.3,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB590").s().p("AgQALQgZACgBAGQgBADgQgnQAxgSAnAQQAUAHALAMIgcAcQgTgUgdADg");
	this.shape_7.setTransform(35.2,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},30).wait(1));

	// рот
	this.instance_3 = new lib.рот("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.6,53.4,1,1,0,0,0,13.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:15,x:16.7,y:51.7},9).to({rotation:0,x:18.6,y:53.4},9).to({_off:true},12).wait(1));

	// нос
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECAD8D").s().p("AgqBpQgOgBgJgOQgIgOAGgaQAHgdAVgdQAggvBDgvQAOgJgFAeQgFAegRAkQgoBTgXAZQgMAMgNAAIgBAAg");
	this.shape_8.setTransform(18.4,34.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECAD8D").s().p("Ag/BbQgJgNAGgbQAGgdAVgdQAfgwBCgvQAOgKgEAeQgEAegRAlQgnBTgWAZQgNANgNAAQgOgBgJgOg");
	this.shape_9.setTransform(18.5,34.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECAD8D").s().p("Ag9BdQgJgOAGgbQAFgcAUgeQAfgwBBgxQANgKgDAfQgEAdgQAlQglBUgWAaQgNAMgNAAQgOAAgJgNg");
	this.shape_10.setTransform(18.7,34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECAD8D").s().p("Ag7BeQgJgOAFgaQAFgdATgfQAegwBAgyQAOgKgDAfQgEAdgPAmQgkBUgWAaQgLANgOAAQgOAAgJgNg");
	this.shape_11.setTransform(18.8,34.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ECAD8D").s().p("Ag6BfQgJgNAFgbQAEgdATgfQAdgwA/gzQAOgLgDAfQgDAegOAlQgjBVgVAaQgMAOgNAAQgOAAgKgNg");
	this.shape_12.setTransform(19,34.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECAD8D").s().p("Ag4BgQgJgNAEgbQAEgdASgfQAcgxA/g0QANgKgCAeQgDAegNAlQghBWgVAbQgMANgNABIgBAAQgNAAgKgNg");
	this.shape_13.setTransform(19.2,35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECAD8D").s().p("Ag2BiQgKgNAEgbQAEgdASggQAbgyA9g1QANgKgBAeQgCAegNAmQggBWgUAbQgMAOgNABIgBAAQgOAAgJgMg");
	this.shape_14.setTransform(19.3,35.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECAD8D").s().p("Ag0BiQgKgNADgaQADgeASggQAagyA9g2QANgLgBAfQgCAegMAmQgeBXgVAbQgKAOgOABIgCAAQgNAAgJgMg");
	this.shape_15.setTransform(19.5,35.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECAD8D").s().p("AgyBkQgKgNADgbQACgdARggQAZgzA8g3QANgLgBAfQgBAegLAmQgdBXgUAcQgKAOgNABIgDAAQgNAAgJgLg");
	this.shape_16.setTransform(19.6,35.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECAD8D").s().p("AgxBlQgKgNACgbQACgdARghQAYgzA7g4QANgLAAAeQgBAegLAnQgbBYgTAcQgLAOgNACIgDAAQgMAAgKgLg");
	this.shape_17.setTransform(19.8,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},12).wait(1));

	// лицо
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E9977D").s().p("AgJBAQgdgIgMglQgLghAKgcQAHgVAegBQAOAAAOADQA8AKgYA9QgJAYgSAQQgPAPgMAAIgFgBg");
	this.shape_18.setTransform(35,41.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E9977D").s().p("AAPg7QAOAGADAPQAEAVgFARQgFAZgSANQgcAUgNACQAXhAAZg3g");
	this.shape_19.setTransform(7.5,34.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECCAB").s().p("AgPGDQiJgXgZhvQgRhLAliEIAQgxQAGgRAOgkQAQgmANgcQAuhjA5hPQAdgnAUgUQA+g+A5AwQADA/gFBsQgFBogLBhQgQCHAmDxQgtAUhAAAQgpAAgwgIg");
	this.shape_20.setTransform(18.3,40.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EBAF8D").s().p("AhVgCQALhhAGhoQAFhsgEg/QAPANAPAUQAgAqAOBcQAMBJgEAQQAfg2AYARQAVAQgDAnQgCAcgWAeQgTAagdAUQAKBogCBWQgDBTgNAbQgWAxgzAWQgljyAPiHg");
	this.shape_21.setTransform(43,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[]},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,80);


(lib.земля_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.земля_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1231.8,1257.1,1,1,0,0,0,1231.8,1257.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.3,y:1257.2},0).wait(1).to({rotation:0.8,x:1231.9,y:1257.1},0).wait(1).to({rotation:1.3,x:1231.8,y:1257.2},0).wait(1).to({rotation:1.8,x:1231.9,y:1257.1},0).wait(1).to({rotation:2.1,x:1231.8},0).wait(1).to({regY:1257.2,rotation:2.5,x:1231.9,y:1257.3},0).wait(1).to({regY:1257.1,rotation:3,x:1231.8,y:1257.1},0).wait(1).to({rotation:3.5},0).wait(1).to({rotation:4,x:1231.9},0).wait(1).to({rotation:4.3,x:1231.8},0).wait(1).to({rotation:4.8,y:1257.2},0).wait(1).to({rotation:5.3},0).wait(1).to({rotation:5.8},0).wait(1).to({regX:1231.9,rotation:6.1,x:1231.9,y:1257.1},0).wait(1).to({regX:1231.8,rotation:6.5,x:1231.8,y:1257.2},0).wait(1).to({rotation:7,x:1231.9,y:1257.1},0).wait(1).to({rotation:7.5,x:1231.8},0).wait(1).to({rotation:8,x:1231.9},0).wait(1).to({regY:1257.2,rotation:8.3,x:1231.8,y:1257.3},0).wait(1).to({regY:1257.1,rotation:8.8,y:1257.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.3,y:1257.1},0).wait(1).to({rotation:9.8},0).wait(1).to({rotation:10.1,y:1257.2},0).wait(1).to({rotation:10.6,y:1257.1},0).wait(1).to({rotation:11,x:1231.9,y:1257.2},0).wait(1).to({rotation:11.5,y:1257.1},0).wait(1).to({rotation:12,x:1231.8},0).wait(1).to({rotation:12.3,x:1231.9},0).wait(1).to({rotation:12.8,y:1257.2},0).wait(1).to({rotation:13.3,x:1231.8},0).wait(1).to({rotation:13.8,x:1231.9,y:1257.1},0).wait(1).to({regY:1257.2,rotation:14.1,x:1231.8,y:1257.2},0).wait(1).to({regY:1257.1,rotation:14.6},0).wait(1).to({rotation:15,y:1257.1},0).wait(1).to({rotation:15.5},0).wait(1).to({rotation:16,x:1231.9,y:1257.2},0).wait(1).to({rotation:16.3,y:1257.1},0).wait(1).to({rotation:16.8,x:1231.8},0).wait(1).to({rotation:17.3},0).wait(1).to({rotation:17.8,y:1257.2},0).wait(1).to({regY:1257.2,rotation:18.1},0).wait(1).to({regY:1257.1,rotation:18.6,y:1257.1},0).wait(1).to({rotation:19.1},0).wait(1).to({rotation:19.5,x:1231.9},0).wait(1).to({rotation:20,x:1231.8},0).wait(1).to({rotation:20.3,x:1231.9},0).wait(1).to({rotation:20.8},0).wait(1).to({rotation:21.3,x:1231.8},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:22.1,x:1231.9},0).wait(1).to({regY:1257.2,rotation:22.6,x:1231.8,y:1257.2},0).wait(1).to({regY:1257.1,rotation:23.1},0).wait(1).to({rotation:23.6},0).wait(1).to({rotation:24,y:1257.1},0).wait(1).to({rotation:24.3,x:1231.9},0).wait(1).to({rotation:24.8},0).wait(1).to({rotation:25.3,x:1231.8},0).wait(1).to({regX:1231.9,rotation:25.8,x:1231.9,y:1257.2},0).wait(1).to({regX:1231.8,rotation:26.3,x:1231.8,y:1257.1},0).wait(1).to({rotation:26.6,x:1231.9},0).wait(1).to({regY:1257.2,rotation:27.1,x:1231.8,y:1257.2},0).wait(1).to({regY:1257.1,rotation:27.6,x:1231.9},0).wait(1).to({regX:1231.9,rotation:28.1,y:1257.1},0).wait(1).to({regX:1231.8,rotation:28.4,x:1231.8},0).wait(1).to({rotation:28.8,x:1231.9},0).wait(1).to({rotation:29.3,x:1231.8,y:1257.2},0).wait(1).to({rotation:29.8,x:1231.9,y:1257.1},0).wait(1).to({rotation:30.3,x:1231.8},0).wait(1).to({rotation:30.6},0).wait(1).to({regX:1231.9,rotation:31.1,x:1232,y:1257.2},0).wait(1).to({regX:1231.8,regY:1257.2,rotation:31.6,x:1231.8},0).wait(1).to({regY:1257.1,rotation:32.1,x:1231.9,y:1257.1},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:32.4,y:1257.2},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:32.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:33.3,y:1257.1},0).wait(1).to({rotation:33.8,x:1231.8},0).wait(1).to({regY:1257.2,rotation:34.3,y:1257.2},0).wait(1).to({regY:1257.1,rotation:34.6,x:1231.9,y:1257.1},0).wait(1).to({rotation:35.1,x:1231.8},0).wait(1).to({rotation:35.6,y:1257.2},0).wait(1).to({regX:1231.9,rotation:36.1,x:1231.9},0).wait(1).to({regX:1231.8,rotation:36.4,x:1231.8},0).wait(1).to({rotation:36.9,x:1231.9,y:1257.1},0).wait(1).to({rotation:37.4,x:1231.8},0).wait(1).to({rotation:37.8,x:1231.9},0).wait(1).to({rotation:38.3,x:1231.8,y:1257.2},0).wait(1).to({rotation:38.6,y:1257.1},0).wait(1).to({rotation:39.1,x:1231.9},0).wait(1).to({rotation:39.6},0).wait(1).to({rotation:40.1},0).wait(1).to({regX:1231.9,rotation:40.4,y:1257.2},0).wait(1).to({regX:1231.8,rotation:40.9},0).wait(1).to({rotation:41.4,y:1257.1},0).wait(1).to({regY:1257.2,rotation:41.9,x:1231.8,y:1257.2},0).wait(1).to({regY:1257.1,rotation:42.3,x:1231.9,y:1257.1},0).wait(1).to({rotation:42.6,x:1231.8},0).wait(1).to({rotation:43.1},0).wait(1).to({rotation:43.6,x:1231.9},0).wait(1).to({rotation:44.1,y:1257.2},0).wait(1).to({regX:1231.9,rotation:44.6},0).wait(1).to({regX:1231.8,rotation:44.9,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:45.4,x:1231.9,y:1257.2},0).wait(1).to({regX:1231.8,rotation:45.9,x:1231.8,y:1257.1},0).wait(1).to({rotation:46.4},0).wait(1).to({rotation:46.7},0).wait(1).to({rotation:47.1},0).wait(1).to({regY:1257.2,rotation:47.6,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:48.1,x:1231.8,y:1257.1},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:48.9},0).wait(1).to({rotation:49.4,y:1257.2},0).wait(1).to({rotation:49.9,y:1257.1},0).wait(1).to({regY:1257.2,rotation:50.4,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:50.7,x:1231.8,y:1257.1},0).wait(1).to({rotation:51.2},0).wait(1).to({rotation:51.6},0).wait(1).to({rotation:52.1},0).wait(1).to({rotation:52.6,y:1257.2},0).wait(1).to({regY:1257.2,rotation:52.9,x:1231.7},0).wait(1).to({regY:1257.1,rotation:53.4,x:1231.9},0).wait(1).to({regY:1257.2,rotation:53.9,x:1231.7},0).wait(1).to({regY:1257.1,rotation:54.4,x:1231.8,y:1257.1},0).wait(1).to({rotation:54.7},0).wait(1).to({rotation:55.2,y:1257.2},0).wait(1).to({regX:1231.9,rotation:55.7,x:1231.9},0).wait(1).to({regX:1231.8,rotation:56.1,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:56.6,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:56.9,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,scaleX:1,scaleY:1,rotation:57.4,y:1257.2},0).wait(1).to({regX:1231.8,rotation:57.9,y:1257.1},0).wait(1).to({rotation:58.4,y:1257.2},0).wait(1).to({rotation:58.7,x:1231.9},0).wait(1).to({rotation:59.2,x:1231.8,y:1257.1},0).wait(1).to({rotation:59.7},0).wait(1).to({regY:1257.2,rotation:60.2,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:60.6,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:60.9,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:61.4,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:61.9,x:1231.9,y:1257.3},0).wait(1).to({regX:1231.8,rotation:62.4,x:1231.8,y:1257.1},0).wait(1).to({rotation:62.7},0).wait(1).to({rotation:63.2},0).wait(1).to({regX:1231.9,rotation:63.7,y:1257.2},0).wait(1).to({regX:1231.8,rotation:64.2,y:1257.1},0).wait(1).to({rotation:64.7},0).wait(1).to({rotation:65},0).wait(1).to({rotation:65.4},0).wait(1).to({rotation:65.9},0).wait(1).to({rotation:66.4},0).wait(1).to({rotation:66.7},0).wait(1).to({regX:1231.9,rotation:67.2,y:1257.2},0).wait(1).to({regX:1231.8,rotation:67.7,y:1257.1},0).wait(1).to({rotation:68.2},0).wait(1).to({rotation:68.7},0).wait(1).to({regX:1231.9,rotation:69,y:1257.2},0).wait(1).to({regX:1231.8,rotation:69.5,y:1257.1},0).wait(1).to({rotation:69.9},0).wait(1).to({rotation:70.4},0).wait(1).to({regX:1231.9,rotation:70.9,y:1257.3},0).wait(1).to({regX:1231.8,rotation:71.2,y:1257.1},0).wait(1).to({regY:1257.2,rotation:71.7,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:72.2,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:72.7,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:73,x:1231.8,y:1257.1},0).wait(1).to({rotation:73.5},0).wait(1).to({rotation:74},0).wait(1).to({regY:1257.2,rotation:74.4,x:1231.7},0).wait(1).to({rotation:74.9},0).wait(1).to({regY:1257.1,rotation:75.2,x:1231.8},0).wait(1).to({rotation:75.7},0).wait(1).to({regY:1257.2,rotation:76.2,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:76.7,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:77,y:1257.2},0).wait(1).to({regX:1231.8,rotation:77.5,y:1257.1},0).wait(1).to({rotation:78},0).wait(1).to({rotation:78.4},0).wait(1).to({rotation:78.9},0).wait(1).to({regX:1231.9,rotation:79.2,y:1257.2},0).wait(1).to({rotation:79.7,y:1257.3},0).wait(1).to({regX:1231.8,rotation:80.2,y:1257.1},0).wait(1).to({rotation:80.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:81},0).wait(1).to({rotation:81.5},0).wait(1).to({rotation:82},0).wait(1).to({rotation:82.5},0).wait(1).to({rotation:82.9},0).wait(1).to({rotation:83.2},0).wait(1).to({regX:1231.9,rotation:83.7,y:1257.2},0).wait(1).to({regX:1231.8,rotation:84.2},0).wait(1).to({rotation:84.7,y:1257.1},0).wait(1).to({rotation:85},0).wait(1).to({rotation:85.5},0).wait(1).to({rotation:86},0).wait(1).to({rotation:86.5},0).wait(1).to({regY:1257.2,rotation:86.9,x:1231.7,y:1257.2},0).wait(1).to({rotation:87.2,y:1257.1},0).wait(1).to({regY:1257.1,rotation:87.7,x:1231.8},0).wait(1).to({rotation:88.2},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:88.7,x:1231.7,y:1257.2},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:89.2,x:1231.8,y:1257.1},0).wait(1).to({rotation:89.5,y:1257.2},0).wait(1).to({rotation:90,y:1257.1},0).wait(1).to({rotation:90.3},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:90.8,y:1257.2},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:91.1},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:92},0).wait(1).to({regX:1231.9,rotation:92.5,y:1257.3},0).wait(1).to({rotation:93,y:1257.2},0).wait(1).to({rotation:93.3,y:1257.3},0).wait(1).to({rotation:93.8,y:1257.2},0).wait(1).to({regX:1231.8,rotation:94.3,y:1257.1},0).wait(1).to({rotation:94.8},0).wait(1).to({rotation:95.1,x:1231.9,y:1257.2},0).wait(1).to({rotation:95.5,x:1231.8},0).wait(1).to({rotation:96},0).wait(1).to({regX:1231.9,rotation:96.5},0).wait(1).to({regX:1231.8,rotation:97,y:1257.1},0).wait(1).to({regY:1257.2,rotation:97.3,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:97.8,x:1231.8},0).wait(1).to({rotation:98.3},0).wait(1).to({rotation:98.8},0).wait(1).to({regY:1257.2,rotation:99.1,x:1231.7,y:1257.1},0).wait(1).to({regY:1257.1,scaleX:1,scaleY:1,rotation:99.5,x:1231.8},0).wait(1).to({rotation:100,y:1257.2},0).wait(1).to({rotation:100.5,y:1257.1},0).wait(1).to({rotation:101,y:1257.2},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:101.8,y:1257.1},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:102.3,x:1231.7,y:1257.2},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:102.8,x:1231.9},0).wait(1).to({rotation:103.1,x:1231.8,y:1257.1},0).wait(1).to({rotation:103.6,y:1257.2},0).wait(1).to({rotation:104,y:1257.1},0).wait(1).to({rotation:104.5},0).wait(1).to({rotation:105,y:1257.2},0).wait(1).to({rotation:105.3},0).wait(1).to({regY:1257.2,rotation:105.8,x:1231.7,y:1257.1},0).wait(1).to({regY:1257.1,rotation:106.3,x:1231.8,y:1257.2},0).wait(1).to({rotation:106.8},0).wait(1).to({rotation:107.1},0).wait(1).to({rotation:107.6,y:1257.1},0).wait(1).to({rotation:108.1,y:1257.2},0).wait(1).to({rotation:108.5},0).wait(1).to({rotation:109,y:1257.1},0).wait(1).to({rotation:109.3,y:1257.2},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:110.3,y:1257.1},0).wait(1).to({regY:1257.2,rotation:110.8,x:1231.7},0).wait(1).to({regX:1231.9,rotation:111.1,y:1257.2},0).wait(1).to({regY:1257.1,rotation:111.6,x:1231.8},0).wait(1).to({regX:1231.8,rotation:112.1},0).wait(1).to({rotation:112.5},0).wait(1).to({regX:1231.9,rotation:113},0).wait(1).to({regX:1231.8,rotation:113.3,y:1257.1},0).wait(1).to({rotation:113.8},0).wait(1).to({rotation:114.3,y:1257.2},0).wait(1).to({rotation:114.8},0).wait(1).to({rotation:115.3,y:1257.1},0).wait(1).to({rotation:115.6,y:1257.2},0).wait(1).to({rotation:116.1,y:1257.1},0).wait(1).to({rotation:116.6,x:1231.9,y:1257.2},0).wait(1).to({regY:1257.2,rotation:117,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.1,rotation:117.3},0).wait(1).to({rotation:117.8,y:1257.2},0).wait(1).to({rotation:118.3},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:118.8,x:1231.7},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:119.3,x:1231.8},0).wait(1).to({rotation:119.6,x:1231.9,y:1257.1},0).wait(1).to({rotation:120.1,x:1231.8},0).wait(1).to({rotation:120.6,y:1257.2},0).wait(1).to({rotation:121.1,y:1257.1},0).wait(1).to({rotation:121.4,y:1257.2},0).wait(1).to({rotation:121.8,y:1257.1},0).wait(1).to({rotation:122.3,y:1257.2},0).wait(1).to({rotation:122.8,y:1257.1},0).wait(1).to({regX:1231.9,scaleX:1,scaleY:1,rotation:123.3,x:1231.7,y:1257.2},0).wait(1).to({regX:1231.8,rotation:123.6,x:1231.8},0).wait(1).to({rotation:124.1,y:1257.1},0).wait(1).to({rotation:124.6,y:1257.2},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:125.4},0).wait(1).to({rotation:125.9,y:1257.1},0).wait(1).to({rotation:126.3},0).wait(1).to({rotation:126.8},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:127.6,y:1257.2},0).wait(1).to({regX:1231.9,rotation:128.1,x:1231.7,y:1257.3},0).wait(1).to({rotation:128.6,y:1257.2},0).wait(1).to({regX:1231.8,rotation:129.1,x:1231.8,y:1257.1},0).wait(1).to({rotation:129.4,x:1231.9,y:1257.2},0).wait(1).to({rotation:129.9,x:1231.8},0).wait(1).to({rotation:130.4,y:1257.1},0).wait(1).to({regX:1231.9,rotation:130.9,x:1231.7,y:1257.2},0).wait(1).to({regY:1257.2,rotation:131.3,y:1257.1},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:131.6,x:1231.8},0).wait(1).to({regY:1257.2,rotation:132.1,x:1231.7},0).wait(1).to({rotation:132.6},0).wait(1).to({regY:1257.1,rotation:133.1,x:1231.8,y:1257.2},0).wait(1).to({rotation:133.6,y:1257.1},0).wait(1).to({regX:1231.9,rotation:133.9,y:1257.2},0).wait(1).to({regX:1231.8,rotation:134.4,y:1257.1},0).wait(1).to({regX:1231.9,rotation:134.9,y:1257.2},0).wait(1).to({regX:1231.8,rotation:135.4,x:1231.9,y:1257.1},0).wait(1).to({regY:1257.2,rotation:135.7,x:1231.8,y:1257},0).wait(1).to({regY:1257.1,rotation:136.1,y:1257.1},0).wait(1).to({regX:1231.9,rotation:136.6,y:1257.2},0).wait(1).to({regX:1231.8,rotation:137.1,y:1257.1},0).wait(1).to({rotation:137.6},0).wait(1).to({rotation:137.9},0).wait(1).to({rotation:138.4},0).wait(1).to({regX:1231.9,rotation:138.9,y:1257.2},0).wait(1).to({regX:1231.8,rotation:139.4,x:1231.9,y:1257.1},0).wait(1).to({regX:1231.9,rotation:139.7,x:1231.7,y:1257.2},0).wait(1).to({regX:1231.8,rotation:140.2,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:140.6,y:1257},0).wait(1).to({regY:1257.1,rotation:141.1,y:1257.1},0).wait(1).to({rotation:141.6},0).wait(1).to({rotation:141.9},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:142.9},0).wait(1).to({rotation:143.4},0).wait(1).to({rotation:143.7},0).wait(1).to({rotation:144.2},0).wait(1).to({rotation:144.7},0).wait(1).to({rotation:145.1},0).wait(1).to({regY:1257.2,rotation:145.6,x:1231.7,y:1257},0).wait(1).to({regY:1257.1,rotation:145.9,x:1231.8,y:1257.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:146.4,x:1231.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:146.9,x:1231.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:147.4},0).wait(1).to({regY:1257.2,rotation:147.7,y:1257},0).wait(1).to({regY:1257.1,rotation:148.2,y:1257.1},0).wait(1).to({rotation:148.7},0).wait(1).to({rotation:149.2},0).wait(1).to({rotation:149.6},0).wait(1).to({rotation:149.9},0).wait(1).to({rotation:150.4},0).wait(1).to({regY:1257.2,rotation:150.9,y:1257},0).wait(1).to({regY:1257.1,rotation:151.4,y:1257.1},0).wait(1).to({regY:1257.2,rotation:151.7,x:1231.7,y:1257},0).wait(1).to({regY:1257.1,rotation:152.2,x:1231.8,y:1257.1},0).wait(1).to({rotation:152.7},0).wait(1).to({regY:1257.2,rotation:153.2,x:1231.7,y:1257},0).wait(1).to({regY:1257.1,rotation:153.7,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:154,y:1257.2},0).wait(1).to({regX:1231.8,rotation:154.4,y:1257.1},0).wait(1).to({rotation:154.9},0).wait(1).to({rotation:155.4,y:1257.2},0).wait(1).to({rotation:155.7,y:1257.1},0).wait(1).to({rotation:156.2},0).wait(1).to({regX:1231.9,rotation:156.7,x:1231.7,y:1257.2},0).wait(1).to({regX:1231.8,rotation:157.2,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:157.7,x:1231.7},0).wait(1).to({regX:1231.8,rotation:158,x:1231.8},0).wait(1).to({regY:1257.2,rotation:158.5,x:1231.7,y:1257},0).wait(1).to({regY:1257.1,rotation:158.9,x:1231.8,y:1257.1},0).wait(1).to({rotation:159.4,x:1231.9},0).wait(1).to({regX:1231.9,rotation:159.9,x:1231.7,y:1257.2},0).wait(1).to({regX:1231.8,rotation:160.2,x:1231.8,y:1257.1},0).wait(1).to({rotation:160.7},0).wait(1).to({regX:1231.9,rotation:161.2,x:1231.7},0).wait(1).to({regX:1231.8,regY:1257.2,rotation:161.7,x:1231.8,y:1257},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:162,x:1231.7,y:1257.1},0).wait(1).to({regX:1231.8,rotation:162.5,x:1231.8},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:163,x:1231.7,y:1257},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:163.4,x:1231.8,y:1257.1},0).wait(1).to({rotation:163.9,x:1231.9},0).wait(1).to({rotation:164.2,x:1231.8},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:165.2,x:1231.9},0).wait(1).to({rotation:165.7,x:1231.8},0).wait(1).to({rotation:166},0).wait(1).to({rotation:166.5},0).wait(1).to({regY:1257.2,rotation:167,y:1257},0).wait(1).to({regY:1257.1,rotation:167.4,y:1257.1},0).wait(1).to({rotation:167.9},0).wait(1).to({rotation:168.2},0).wait(1).to({regX:1231.9,rotation:168.7},0).wait(1).to({regX:1231.8,rotation:169.2},0).wait(1).to({rotation:169.7},0).wait(1).to({rotation:170},0).wait(1).to({rotation:170.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:171},0).wait(1).to({rotation:171.5},0).wait(1).to({rotation:171.9},0).wait(1).to({rotation:172.2},0).wait(1).to({rotation:172.7},0).wait(1).to({regY:1257.2,rotation:173.2,y:1257},0).wait(1).to({regY:1257.1,rotation:173.7,y:1257.1},0).wait(1).to({rotation:174},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:175},0).wait(1).to({rotation:175.5,x:1231.9},0).wait(1).to({rotation:175.9,x:1231.8},0).wait(1).to({rotation:176.2},0).wait(1).to({rotation:176.7},0).wait(1).to({rotation:177.2},0).wait(1).to({rotation:177.7},0).wait(1).to({regY:1257.2,rotation:178,y:1257},0).wait(1).to({rotation:178.5},0).wait(1).to({regY:1257.1,rotation:179,y:1257.1},0).wait(1).to({rotation:179.5},0).wait(1).to({regX:1231.9,rotation:179.9},0).wait(1).to({regX:1231.8,rotation:180.1},0).wait(1).to({rotation:180.5},0).wait(1).to({rotation:181},0).wait(1).to({rotation:181.5},0).wait(1).to({rotation:182},0).wait(1).to({rotation:182.3},0).wait(1).to({rotation:182.8},0).wait(1).to({rotation:183.3},0).wait(1).to({regY:1257.2,rotation:183.8,y:1257},0).wait(1).to({regY:1257.1,rotation:184.1,y:1257.1},0).wait(1).to({rotation:184.5,y:1257.2},0).wait(1).to({regX:1231.9,rotation:185,x:1231.7,y:1257.1},0).wait(1).to({regX:1231.8,rotation:185.5,x:1231.8},0).wait(1).to({rotation:186},0).wait(1).to({rotation:186.3},0).wait(1).to({regX:1231.9,rotation:186.8,x:1231.7},0).wait(1).to({regX:1231.8,rotation:187.3,x:1231.8},0).wait(1).to({rotation:187.8},0).wait(1).to({regY:1257.2,rotation:188.1,y:1257},0).wait(1).to({regY:1257.1,rotation:188.5,y:1257.1},0).wait(1).to({rotation:189},0).wait(1).to({scaleX:1,scaleY:1,rotation:189.5},0).wait(1).to({rotation:190},0).wait(1).to({rotation:190.3},0).wait(1).to({rotation:190.8},0).wait(1).to({regY:1257.2,rotation:191.3,x:1231.9},0).wait(1).to({regY:1257.1,rotation:191.8,x:1231.8},0).wait(1).to({rotation:192.1},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:192.6,x:1231.7,y:1257},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:193,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:193.5,x:1231.7},0).wait(1).to({regX:1231.8,rotation:194,x:1231.8},0).wait(1).to({rotation:194.3},0).wait(1).to({rotation:194.8},0).wait(1).to({rotation:195.3},0).wait(1).to({regX:1231.9,rotation:195.8,x:1231.7},0).wait(1).to({regX:1231.8,regY:1257.2,rotation:196.1,x:1231.9},0).wait(1).to({regY:1257.1,rotation:196.6,x:1231.8},0).wait(1).to({rotation:197,x:1231.7},0).wait(1).to({regX:1231.9,rotation:197.5},0).wait(1).to({regX:1231.8,rotation:198,x:1231.8},0).wait(1).to({rotation:198.3},0).wait(1).to({rotation:198.8},0).wait(1).to({rotation:199.3},0).wait(1).to({regX:1231.9,rotation:199.8,x:1231.7},0).wait(1).to({regX:1231.8,rotation:200.1,x:1231.9},0).wait(1).to({rotation:200.6,x:1231.8},0).wait(1).to({rotation:201.1},0).wait(1).to({rotation:201.5},0).wait(1).to({regX:1231.9,rotation:202,x:1231.7},0).wait(1).to({regX:1231.8,rotation:202.3,x:1231.8},0).wait(1).to({regY:1257.2,rotation:202.8,x:1231.9,y:1257},0).wait(1).to({regY:1257.1,rotation:203.3,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:203.8},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:204.3,x:1231.7},0).wait(1).to({regX:1231.8,rotation:204.6,x:1231.8},0).wait(1).to({regY:1257.2,rotation:205.1,x:1231.9,y:1257},0).wait(1).to({regY:1257.1,rotation:205.6,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:206,x:1231.9},0).wait(1).to({regY:1257.1,rotation:206.3,x:1231.8},0).wait(1).to({regX:1231.9,rotation:206.8,x:1231.7,y:1257},0).wait(1).to({regX:1231.8,rotation:207.3,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:207.8,x:1231.7},0).wait(1).to({regX:1231.8,rotation:208.3,x:1231.8},0).wait(1).to({rotation:208.6},0).wait(1).to({rotation:209.1,y:1257.2},0).wait(1).to({rotation:209.6,y:1257.1},0).wait(1).to({rotation:210.1},0).wait(1).to({rotation:210.4},0).wait(1).to({rotation:210.8},0).wait(1).to({regX:1231.9,rotation:211.3,x:1231.7},0).wait(1).to({regX:1231.8,rotation:211.8,x:1231.8},0).wait(1).to({regX:1231.9,rotation:212.3,x:1231.7},0).wait(1).to({regX:1231.8,regY:1257.2,rotation:212.6,x:1231.9,y:1257},0).wait(1).to({regY:1257.1,scaleX:1,scaleY:1,rotation:213.1,x:1231.8,y:1257.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:213.6,y:1257.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:214.1},0).wait(1).to({rotation:214.4},0).wait(1).to({rotation:214.9},0).wait(1).to({rotation:215.3},0).wait(1).to({regY:1257.2,rotation:215.8,y:1257},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:216.3,x:1231.7},0).wait(1).to({regX:1231.8,rotation:216.6,x:1231.8,y:1257.2},0).wait(1).to({rotation:217.1,y:1257.1},0).wait(1).to({rotation:217.6},0).wait(1).to({rotation:218.1},0).wait(1).to({rotation:218.4},0).wait(1).to({regY:1257.2,rotation:218.9,x:1231.9,y:1257},0).wait(1).to({regY:1257.1,rotation:219.4,x:1231.8,y:1257.1},0).wait(1).to({rotation:219.8},0).wait(1).to({rotation:220.3},0).wait(1).to({rotation:220.6},0).wait(1).to({rotation:221.1},0).wait(1).to({rotation:221.6},0).wait(1).to({rotation:222.1},0).wait(1).to({rotation:222.4},0).wait(1).to({rotation:222.9},0).wait(1).to({rotation:223.4},0).wait(1).to({rotation:223.9},0).wait(1).to({rotation:224.3,x:1231.9},0).wait(1).to({regY:1257.2,rotation:224.6},0).wait(1).to({regY:1257.1,rotation:225.1,x:1231.8},0).wait(1).to({regX:1231.9,rotation:225.6,y:1257},0).wait(1).to({regX:1231.8,rotation:226.1,y:1257.1},0).wait(1).to({regY:1257.2,rotation:226.4,x:1231.9},0).wait(1).to({regY:1257.1,rotation:226.9,x:1231.8},0).wait(1).to({rotation:227.4},0).wait(1).to({rotation:227.9,x:1231.9},0).wait(1).to({rotation:228.4,x:1231.8},0).wait(1).to({rotation:228.7},0).wait(1).to({rotation:229.1,x:1231.9},0).wait(1).to({rotation:229.6,x:1231.8},0).wait(1).to({rotation:230.1,y:1257.2},0).wait(1).to({rotation:230.6,x:1231.9,y:1257.1},0).wait(1).to({regY:1257.2,rotation:230.9},0).wait(1).to({regY:1257.1,rotation:231.4},0).wait(1).to({rotation:231.9,x:1231.8},0).wait(1).to({rotation:232.4},0).wait(1).to({rotation:232.7,x:1231.9},0).wait(1).to({rotation:233.2},0).wait(1).to({regY:1257.2,rotation:233.7,y:1257},0).wait(1).to({regY:1257.1,rotation:234.1,x:1231.8,y:1257.1},0).wait(1).to({rotation:234.6,y:1257.2},0).wait(1).to({rotation:234.9,y:1257.1},0).wait(1).to({rotation:235.4,x:1231.9},0).wait(1).to({rotation:235.9,x:1231.8},0).wait(1).to({regX:1231.9,rotation:236.4,y:1257},0).wait(1).to({regX:1231.8,rotation:236.7,y:1257.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:237.2,x:1231.9},0).wait(1).to({rotation:237.7},0).wait(1).to({regX:1231.9,rotation:238.2,x:1231.8,y:1257},0).wait(1).to({rotation:238.6,y:1257.1},0).wait(1).to({regX:1231.8,rotation:238.9},0).wait(1).to({rotation:239.4,x:1231.9},0).wait(1).to({regX:1231.9,rotation:239.9,x:1231.8,y:1257},0).wait(1).to({regX:1231.8,rotation:240.4,y:1257.1},0).wait(1).to({regY:1257.2,rotation:240.7,x:1231.9},0).wait(1).to({regY:1257.1,rotation:241.2,x:1231.8},0).wait(1).to({rotation:241.7,x:1231.9},0).wait(1).to({rotation:242.2},0).wait(1).to({rotation:242.7,x:1231.8},0).wait(1).to({rotation:243,x:1231.9},0).wait(1).to({rotation:243.4},0).wait(1).to({rotation:243.9,x:1231.8},0).wait(1).to({rotation:244.4,x:1231.9},0).wait(1).to({rotation:244.7,x:1231.8},0).wait(1).to({regX:1231.9,rotation:245.2,y:1257},0).wait(1).to({regX:1231.8,rotation:245.7,x:1231.9,y:1257.1},0).wait(1).to({regY:1257.2,rotation:246.2,x:1232},0).wait(1).to({regY:1257.1,rotation:246.7,x:1231.9},0).wait(1).to({rotation:247,x:1231.8,y:1257.2},0).wait(1).to({rotation:247.5,x:1231.9},0).wait(1).to({rotation:247.9,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:248.4,x:1231.9},0).wait(1).to({regY:1257.1,rotation:248.9},0).wait(1).to({rotation:249.2,x:1231.8},0).wait(1).to({rotation:249.7},0).wait(1).to({rotation:250.2,x:1231.9},0).wait(1).to({rotation:250.7},0).wait(1).to({regX:1231.9,rotation:251,x:1231.8,y:1257},0).wait(1).to({rotation:251.5,y:1257.1},0).wait(1).to({regX:1231.8,rotation:251.9,x:1231.9},0).wait(1).to({rotation:252.4,x:1231.8},0).wait(1).to({rotation:252.9},0).wait(1).to({rotation:253.2,x:1231.9},0).wait(1).to({rotation:253.7},0).wait(1).to({rotation:254.2},0).wait(1).to({regY:1257.2,rotation:254.7},0).wait(1).to({regY:1257.1,rotation:255,x:1231.8},0).wait(1).to({rotation:255.5},0).wait(1).to({regY:1257.2,rotation:256,x:1231.9},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:256.4},0).wait(1).to({regX:1231.8,rotation:256.9,x:1231.8},0).wait(1).to({rotation:257.2,x:1231.9},0).wait(1).to({rotation:257.7,x:1231.8},0).wait(1).to({rotation:258.2,x:1231.9},0).wait(1).to({rotation:258.7,x:1231.8},0).wait(1).to({rotation:259,x:1231.9},0).wait(1).to({rotation:259.5},0).wait(1).to({rotation:260},0).wait(1).to({regX:1231.9,rotation:260.5,x:1231.8,y:1257},0).wait(1).to({regX:1231.8,scaleX:1,scaleY:1,rotation:260.9,y:1257.1},0).wait(1).to({rotation:261.2,x:1231.9},0).wait(1).to({rotation:261.7,x:1231.8},0).wait(1).to({regX:1231.9,rotation:262.2,x:1231.9,y:1257},0).wait(1).to({regX:1231.8,rotation:262.7,y:1257.1},0).wait(1).to({rotation:263,x:1231.8},0).wait(1).to({rotation:263.5,x:1231.9},0).wait(1).to({rotation:264},0).wait(1).to({regX:1231.9,rotation:264.5,x:1231.8,y:1257},0).wait(1).to({regX:1231.8,rotation:264.9,y:1257.1},0).wait(1).to({rotation:265.2},0).wait(1).to({regY:1257.2,rotation:265.7,x:1231.9},0).wait(1).to({regY:1257.1,rotation:266.2,x:1231.8},0).wait(1).to({rotation:266.7,x:1231.9},0).wait(1).to({rotation:267,x:1231.8},0).wait(1).to({rotation:267.5,x:1231.9},0).wait(1).to({rotation:268,x:1231.8},0).wait(1).to({regX:1231.9,rotation:268.5,y:1257},0).wait(1).to({regX:1231.8,rotation:268.9,y:1257.1},0).wait(1).to({rotation:269.2},0).wait(1).to({rotation:269.7,x:1231.9},0).wait(1).to({regY:1257.2,rotation:270},0).wait(1).to({regY:1257.1,rotation:270.5,x:1231.8},0).wait(1).to({rotation:270.8},0).wait(1).to({rotation:271.3,x:1231.9},0).wait(1).to({rotation:271.8,x:1231.8},0).wait(1).to({rotation:272.3},0).wait(1).to({rotation:272.8,x:1231.9},0).wait(1).to({regX:1231.9,rotation:273.1,y:1257},0).wait(1).to({rotation:273.5},0).wait(1).to({regX:1231.8,rotation:274,x:1231.8,y:1257.1},0).wait(1).to({rotation:274.5},0).wait(1).to({regY:1257.2,rotation:275,x:1231.9},0).wait(1).to({regY:1257.1,rotation:275.3,x:1231.8},0).wait(1).to({rotation:275.8},0).wait(1).to({rotation:276.3,x:1231.9},0).wait(1).to({rotation:276.8,x:1231.8},0).wait(1).to({rotation:277.1},0).wait(1).to({rotation:277.5},0).wait(1).to({regY:1257.2,rotation:278,x:1231.9},0).wait(1).to({regY:1257.1,rotation:278.5,x:1231.8},0).wait(1).to({rotation:279},0).wait(1).to({regX:1231.9,scaleX:1,scaleY:1,rotation:279.3,x:1231.9,y:1257},0).wait(1).to({regX:1231.8,regY:1257.2,rotation:279.8,y:1257.1},0).wait(1).to({regY:1257.1,rotation:280.3},0).wait(1).to({rotation:280.8,x:1231.8},0).wait(1).to({rotation:281.1},0).wait(1).to({regY:1257.2,rotation:281.6,x:1232},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:282,x:1231.8,y:1257},0).wait(1).to({rotation:282.5,x:1231.9},0).wait(1).to({regX:1231.8,rotation:283,x:1231.8,y:1257.1},0).wait(1).to({rotation:283.3},0).wait(1).to({rotation:283.8,x:1231.9,y:1257},0).wait(1).to({rotation:284.3,x:1231.8,y:1257.1},0).wait(1).to({rotation:284.8},0).wait(1).to({rotation:285.1},0).wait(1).to({rotation:285.6},0).wait(1).to({rotation:286},0).wait(1).to({rotation:286.5},0).wait(1).to({rotation:287},0).wait(1).to({rotation:287.3,x:1231.9},0).wait(1).to({rotation:287.8,x:1231.8},0).wait(1).to({rotation:288.3,x:1231.9,y:1257},0).wait(1).to({rotation:288.8,x:1231.8,y:1257.1},0).wait(1).to({rotation:289.1},0).wait(1).to({regX:1231.9,rotation:289.6,x:1231.9,y:1257},0).wait(1).to({regX:1231.8,rotation:290.1,x:1231.8,y:1257.1},0).wait(1).to({rotation:290.5,x:1231.9},0).wait(1).to({rotation:291,x:1231.8,y:1257},0).wait(1).to({rotation:291.3,y:1257.1},0).wait(1).to({regX:1231.9,rotation:291.8,x:1231.9,y:1257},0).wait(1).to({regX:1231.8,rotation:292.3,x:1231.8,y:1257.1},0).wait(1).to({rotation:292.8},0).wait(1).to({rotation:293.3,x:1231.9},0).wait(1).to({rotation:293.6,x:1231.8},0).wait(1).to({rotation:294.1},0).wait(1).to({rotation:294.6,x:1231.9},0).wait(1).to({rotation:295,x:1231.8},0).wait(1).to({rotation:295.3,x:1231.9},0).wait(1).to({rotation:295.8},0).wait(1).to({regY:1257.2,rotation:296.3},0).wait(1).to({regY:1257.1,rotation:296.8,x:1231.8},0).wait(1).to({rotation:297.3},0).wait(1).to({rotation:297.6},0).wait(1).to({regY:1257.2,rotation:298.1,x:1231.9},0).wait(1).to({regY:1257.1,rotation:298.6},0).wait(1).to({rotation:299.1,x:1231.8},0).wait(1).to({rotation:299.4},0).wait(1).to({rotation:299.8,x:1231.9},0).wait(1).to({rotation:300.3,x:1231.8},0).wait(1).to({rotation:300.8},0).wait(1).to({regX:1231.9,regY:1257.2,rotation:301.3,x:1232},0).wait(1).to({regX:1231.8,regY:1257.1,rotation:301.6,x:1231.8},0).wait(1).to({rotation:302.1},0).wait(1).to({rotation:302.6,y:1257},0).wait(1).to({scaleX:1,scaleY:1,rotation:303.1,y:1257.1},0).wait(1).to({regX:1231.9,rotation:303.4,x:1231.9,y:1257},0).wait(1).to({regX:1231.8,rotation:303.9,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:304.3,x:1231.9,y:1257.2},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:304.8,y:1257},0).wait(1).to({regX:1231.8,rotation:305.3,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:305.6,x:1232,y:1257.2},0).wait(1).to({regY:1257.1,rotation:306.1,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:306.6,x:1231.9,y:1257.2},0).wait(1).to({regY:1257.1,rotation:307.1,y:1257.1},0).wait(1).to({rotation:307.4,x:1231.8},0).wait(1).to({rotation:307.9},0).wait(1).to({rotation:308.4},0).wait(1).to({rotation:308.8},0).wait(1).to({rotation:309.3},0).wait(1).to({rotation:309.6,y:1257},0).wait(1).to({rotation:310.1,x:1231.9,y:1257.1},0).wait(1).to({rotation:310.6,x:1231.8},0).wait(1).to({regY:1257.2,rotation:311.1,x:1231.9,y:1257.2},0).wait(1).to({rotation:311.4},0).wait(1).to({regY:1257.1,rotation:311.9,x:1231.8,y:1257.1},0).wait(1).to({rotation:312.4,y:1257.2},0).wait(1).to({rotation:312.9,y:1257.1},0).wait(1).to({rotation:313.3,y:1257.2},0).wait(1).to({rotation:313.6,x:1231.9,y:1257.1},0).wait(1).to({rotation:314.1,x:1231.8},0).wait(1).to({rotation:314.6},0).wait(1).to({rotation:315.1},0).wait(1).to({rotation:315.4},0).wait(1).to({rotation:315.9},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:316.9,y:1257.2},0).wait(1).to({regX:1231.9,rotation:317.4,x:1231.9,y:1257},0).wait(1).to({rotation:317.7,y:1257.1},0).wait(1).to({regX:1231.8,rotation:318.1,x:1231.8},0).wait(1).to({rotation:318.6},0).wait(1).to({rotation:319.1},0).wait(1).to({rotation:319.6},0).wait(1).to({rotation:319.9},0).wait(1).to({rotation:320.4},0).wait(1).to({rotation:320.9,y:1257.2},0).wait(1).to({regX:1231.9,rotation:321.4,x:1231.9,y:1257},0).wait(1).to({regX:1231.8,rotation:321.7,x:1231.8,y:1257.1},0).wait(1).to({rotation:322.2,y:1257.2},0).wait(1).to({regX:1231.9,rotation:322.6,x:1231.9,y:1257.1},0).wait(1).to({regX:1231.8,rotation:323.1,x:1231.8},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:323.9,x:1231.9,y:1257.2},0).wait(1).to({rotation:324.4,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:324.9,x:1231.9,y:1257.2},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:325.4,y:1257.1},0).wait(1).to({regX:1231.8,rotation:325.7,x:1231.8},0).wait(1).to({rotation:326.2},0).wait(1).to({rotation:326.7,y:1257.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:327.1,x:1231.9,y:1257.1},0).wait(1).to({rotation:327.6,y:1257.2},0).wait(1).to({rotation:327.9,x:1231.8,y:1257.1},0).wait(1).to({regY:1257.2,rotation:328.4,x:1231.9,y:1257.2},0).wait(1).to({regY:1257.1,rotation:328.9,x:1231.8},0).wait(1).to({regX:1231.9,rotation:329.4,x:1231.9,y:1257.1},0).wait(1).to({regX:1231.8,rotation:329.7},0).wait(1).to({rotation:330.2,x:1231.8},0).wait(1).to({regY:1257.2,rotation:330.7,x:1231.9,y:1257.2},0).wait(1).to({regY:1257.1,rotation:331.2,y:1257.1},0).wait(1).to({regX:1231.9,rotation:331.6},0).wait(1).to({rotation:331.9},0).wait(1).to({regX:1231.8,rotation:332.4,x:1231.8},0).wait(1).to({regX:1231.9,rotation:332.9,x:1231.9},0).wait(1).to({regX:1231.8,rotation:333.4},0).wait(1).to({rotation:333.7},0).wait(1).to({regY:1257.2,rotation:334.2,y:1257.2},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:334.7,y:1257.1},0).wait(1).to({rotation:335.2},0).wait(1).to({regX:1231.8,regY:1257.2,rotation:335.7,y:1257.2},0).wait(1).to({regY:1257.1,rotation:336,x:1231.8,y:1257.1},0).wait(1).to({regX:1231.9,rotation:336.4,x:1232},0).wait(1).to({regX:1231.8,rotation:336.9,x:1231.9},0).wait(1).to({rotation:337.4,y:1257.2},0).wait(1).to({regX:1231.9,rotation:337.9,y:1257.1},0).wait(1).to({regX:1231.8,rotation:338.2,x:1231.8,y:1257.2},0).wait(1).to({rotation:338.7},0).wait(1).to({rotation:339.2},0).wait(1).to({rotation:339.7},0).wait(1).to({regY:1257.2,rotation:340,x:1231.9,y:1257.3},0).wait(1).to({regY:1257.1,rotation:340.5,x:1231.8,y:1257.2},0).wait(1).to({regY:1257.2,rotation:340.9,x:1231.9},0).wait(1).to({regY:1257.1,rotation:341.4,x:1231.8},0).wait(1).to({rotation:341.9,x:1231.9,y:1257.1},0).wait(1).to({rotation:342.2,x:1231.8},0).wait(1).to({rotation:342.7,y:1257.2},0).wait(1).to({rotation:343.2,y:1257.1},0).wait(1).to({regX:1231.9,rotation:343.7,x:1231.9},0).wait(1).to({regX:1231.8,regY:1257.2,rotation:344,y:1257.2},0).wait(1).to({regY:1257.1,rotation:344.5},0).wait(1).to({regY:1257.2,rotation:345,x:1231.8,y:1257.3},0).wait(1).to({regX:1231.9,regY:1257.1,rotation:345.4,x:1232,y:1257.1},0).wait(1).to({regX:1231.8,rotation:345.9,x:1231.8},0).wait(1).to({rotation:346.2},0).wait(1).to({rotation:346.7,x:1231.9},0).wait(1).to({rotation:347.2,y:1257.2},0).wait(1).to({rotation:347.7,x:1231.8},0).wait(1).to({rotation:348,x:1231.9},0).wait(1).to({regX:1231.9,rotation:348.5,y:1257.1},0).wait(1).to({regX:1231.8,rotation:349,x:1231.8,y:1257.2},0).wait(1).to({rotation:349.4},0).wait(1).to({rotation:349.9,y:1257.1},0).wait(1).to({rotation:350.2},0).wait(1).to({regX:1231.9,rotation:350.7,x:1231.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:351.2},0).wait(1).to({regX:1231.8,rotation:351.7,x:1231.8,y:1257.2},0).wait(1).to({regY:1257.2,rotation:352,x:1231.9,y:1257.3},0).wait(1).to({regY:1257.1,rotation:352.5,y:1257.2},0).wait(1).to({rotation:353,x:1231.8},0).wait(1).to({regY:1257.2,rotation:353.5,y:1257.3},0).wait(1).to({regY:1257.1,rotation:353.9,y:1257.1},0).wait(1).to({rotation:354.2,y:1257.2},0).wait(1).to({rotation:354.7,y:1257.1},0).wait(1).to({rotation:355.2,x:1231.9},0).wait(1).to({rotation:355.7,x:1231.8,y:1257.2},0).wait(1).to({rotation:356,y:1257.1},0).wait(1).to({rotation:356.5},0).wait(1).to({rotation:357,x:1231.9},0).wait(1).to({rotation:357.5,x:1231.8,y:1257.2},0).wait(1).to({rotation:357.9,y:1257.1},0).wait(1).to({rotation:358.2,x:1231.9},0).wait(1).to({rotation:358.7},0).wait(1).to({rotation:359.2,x:1231.8,y:1257.2},0).wait(1).to({rotation:359.7,y:1257.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,0,2464.2,2532.2);


(lib.земля_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// земля
	this.instance = new lib.zzz("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1135.9,1291.3,1,1,0,0,0,1135.6,1135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},699).wait(1));

	// e1
	this.instance_1 = new lib.e1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1040.4,159.9,1,1,0,0,0,197.3,168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:192.7,regY:172,rotation:18,guide:{path:[1040.4,159.8,1086.2,156.1,1132.5,156,1214.7,155.7,1293.1,166.8,1337,173,1380.1,182.5]}},35).to({_off:true},1).wait(209).to({_off:false,regX:199.3,regY:153,rotation:-39.3,x:332,y:489.4},0).to({regX:197.8,regY:178.7,rotation:10.7,guide:{path:[332.2,489.3,377.6,443.7,427.9,403.6,648.4,227.2,921.5,175.9,1025.5,156.3,1132.6,156.1,1214.8,155.8,1293.2,166.9,1325.9,171.5,1358.3,178]}},110).to({_off:true},1).wait(263).to({_off:false,regX:197.3,regY:168.8,rotation:-43.1,x:323.2,y:498.2},0).to({regY:168.9,rotation:-0.5,guide:{path:[323.3,498.3,372.6,447.7,427.9,403.6,648.3,227.2,921.5,175.9,975.5,165.7,1030.3,160.8]}},80).wait(1));

	// e2
	this.instance_2 = new lib.e2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(307.1,515.3,1,1,3.7,0,0,162.8,179.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:172.4,regY:183.7,rotation:62.5,guide:{path:[307.2,515.2,363.5,455,427.9,403.6,648.4,227.3,921.5,175.9,1025.5,156.4,1132.6,156.1,1214.8,155.9,1293.2,166.9,1327.1,171.7,1360.7,178.5]}},114).to({_off:true},1).wait(576));

	// указатель
	this.instance_3 = new lib.указатель("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(397.8,428.5,1,1,-40.9,0,0,114.9,169.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({regX:114.8,rotation:6.1,guide:{path:[397.8,428.4,412.6,415.8,427.8,403.6,648.3,227.1,921.5,175.9,1025.4,156.3,1132.5,156.1,1210,155.9,1284.1,165.7]}},93).to({_off:true},1).wait(144).to({_off:false,regX:114.9,rotation:-40.9,x:397.8,y:428.5},0).to({regX:114.8,rotation:6.1,guide:{path:[397.8,428.4,412.6,415.8,427.8,403.6,648.3,227.1,921.5,175.9,1025.4,156.3,1132.5,156.1,1210,155.9,1284.1,165.7]}},93).to({_off:true},1).wait(128).to({_off:false,regX:114.9,rotation:-40.9,x:397.8,y:428.5},0).to({regX:114.8,rotation:6.1,guide:{path:[397.8,428.4,412.6,415.8,427.8,403.6,648.3,227.1,921.5,175.9,1025.4,156.3,1132.5,156.1,1210,155.9,1284.1,165.7]}},93).to({_off:true},1).wait(64));

	// e3
	this.instance_4 = new lib.e3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(352.6,469.3,1,1,75,0,0,126.1,126.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({_off:false},0).to({regX:145.2,regY:112.6,rotation:127.1,guide:{path:[352.7,469.2,388.8,434.8,427.9,403.6,648.3,227.2,921.5,175.9,1025.5,156.3,1132.6,156.1,1205.4,155.9,1275.3,164.5]}},100).to({_off:true},1).wait(455));

	// e4
	this.instance_5 = new lib.e4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(304.2,518.4,1,1,-165,0,0,113.6,175.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(380).to({_off:false},0).to({regX:113.7,regY:175.4,rotation:-105,guide:{path:[304.3,518.3,361.8,456.3,427.9,403.6,648.4,227.3,921.5,175.9,1025.5,156.4,1132.6,156.1,1214.8,155.9,1293.2,166.9,1319.8,170.7,1346.1,175.6]}},113).to({_off:true},1).wait(206));

	// e5
	this.instance_6 = new lib.e5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(342.4,479.2,1,1,-101.8,0,0,93.8,138.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(500).to({_off:false},0).to({regX:113.7,regY:132.6,rotation:-45.6,guide:{path:[342.4,479.2,383.2,439.3,427.8,403.6,648.4,227.3,921.5,175.9,1025.4,156.4,1132.5,156.1,1214.7,155.9,1293.1,166.9,1299.5,167.8,1305.9,168.8]}},103).to({_off:true},1).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-8.9,2271.2,2435.6);


(lib.человек = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// L.arm
	this.instance = new lib.Larm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.9,363,1,1,-13.6,0,0,17.5,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:29.2,scaleX:1,scaleY:1,rotation:-13.5,x:363,y:367.5},0).wait(1).to({x:364.1,y:371.9},0).wait(1).to({x:365.1,y:376.2},0).wait(1).to({regX:17.4,regY:29.1,scaleX:1,scaleY:1,rotation:-13.6,x:366.1,y:380.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.8,x:364.9,y:383.2},0).wait(1).to({rotation:-20.1,x:363.7,y:385.8},0).wait(1).to({rotation:-23.3,x:362.4,y:388.4},0).wait(1).to({regX:17.6,scaleX:1,scaleY:1,rotation:-26.7,x:361.2,y:391},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24.8,x:361.3,y:387.1},0).wait(1).to({regY:29.2,rotation:-22.8,x:361.4,y:383.1},0).wait(1).to({rotation:-21,x:361.5,y:379},0).wait(1).to({regY:29.1,rotation:-19.1,x:361.6,y:375.1},0).wait(1).to({rotation:-17.3,x:361.8,y:371},0).wait(1).to({rotation:-15.3,x:361.9,y:367},0).wait(1).to({regX:17.5,scaleX:1,scaleY:1,rotation:-13.6,y:363},0).wait(1).to({regY:29.2,scaleX:1,scaleY:1,rotation:-13.5,x:363,y:367.5},0).wait(1).to({x:364.1,y:371.9},0).wait(1).to({x:365.1,y:376.2},0).wait(1).to({regX:17.4,regY:29.1,scaleX:1,scaleY:1,rotation:-13.6,x:366.1,y:380.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.8,x:364.5,y:383.8},0).wait(1).to({regX:17.5,rotation:-16.1,x:363.1,y:387},0).wait(1).to({regX:17.4,rotation:-17.3,x:361.5,y:390.3},0).wait(1).to({regX:17.7,regY:29.2,scaleX:1,scaleY:1,rotation:-18.8,x:360,y:393.6},0).wait(1).to({regX:17.6,scaleX:1,scaleY:1,rotation:-18,x:360.3,y:389.3},0).wait(1).to({regX:17.7,regY:29.1,rotation:-17.3,x:360.6,y:384.7},0).wait(1).to({rotation:-16.5,x:360.8,y:380.4},0).wait(1).to({rotation:-15.8,x:361.2,y:376},0).wait(1).to({regY:29.2,rotation:-15,x:361.4,y:371.7},0).wait(1).to({rotation:-14.3,x:361.7,y:367.4},0).wait(1));

	// R.arm
	this.instance_1 = new lib.Rarm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(174.8,277.7,1,1,-13.6,0,0,6.9,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1,rotation:-14.6,x:175.9,y:282.1},0).wait(1).to({rotation:-15.8,x:177,y:286.4},0).wait(1).to({regY:11,rotation:-16.8,x:178.1,y:290.7},0).wait(1).to({regX:7,regY:10.9,scaleX:1,scaleY:1,rotation:-18.1,x:179.1,y:295.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-21.3,x:174.1,y:309.2},0).wait(1).to({rotation:-24.8,x:169.2,y:323.2},0).wait(1).to({rotation:-28.3,x:164.2,y:337.3},0).wait(1).to({regX:6.9,regY:10.8,scaleX:1,scaleY:1,rotation:-31.7,x:159.2,y:351.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-29.1,x:161.6,y:340.7},0).wait(1).to({regX:7,rotation:-26.5,x:163.8,y:330.1},0).wait(1).to({regX:6.9,rotation:-23.8,x:166,y:319.6},0).wait(1).to({regX:7,rotation:-21.3,x:168.2,y:309.1},0).wait(1).to({rotation:-18.6,x:170.5,y:298.6},0).wait(1).to({rotation:-16.1,x:172.8,y:288.1},0).wait(1).to({regX:6.9,regY:11.1,scaleX:1,scaleY:1,rotation:-13.6,x:174.8,y:277.7},0).wait(1).to({regY:11,scaleX:1,scaleY:1,rotation:-13.5,x:175.9,y:282},0).wait(1).to({x:177,y:286.4},0).wait(1).to({x:178,y:290.8},0).wait(1).to({regX:7,scaleX:1,scaleY:1,rotation:-13.6,x:179.1,y:295.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.5,x:174.2,y:309.3},0).wait(1).to({rotation:-19.6,x:169.2,y:323.2},0).wait(1).to({regY:10.9,rotation:-22.6,x:164.3,y:337.2},0).wait(1).to({regX:6.9,regY:10.8,scaleX:1,scaleY:1,rotation:-25.7,x:159.3,y:351.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24,x:161.5,y:340.8},0).wait(1).to({regX:7,rotation:-22.3,x:163.8,y:330.3},0).wait(1).to({rotation:-20.5,x:166,y:319.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-18.8,x:168.1,y:309.1},0).wait(1).to({regX:6.9,rotation:-17,x:170.4,y:298.7},0).wait(1).to({regX:7,regY:10.7,scaleX:1,scaleY:1,rotation:-15.3,x:172.6,y:288.1},0).wait(1));

	// п1
	this.instance_2 = new lib.п1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(363.8,355.8,1,1,-13.6,0,0,107,78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:107.1,scaleX:1,scaleY:1,rotation:-13.5,x:364.9,y:360.1},0).wait(1).to({x:366,y:364.5},0).wait(1).to({x:367.1,y:368.9},0).wait(1).to({regX:107,regY:79,scaleX:1,scaleY:1,rotation:-13.6,x:368,y:373.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.8,x:366.8,y:375.8},0).wait(1).to({rotation:-18.3,x:365.6,y:378.4},0).wait(1).to({rotation:-20.8,x:364.4,y:381},0).wait(1).to({regX:107.1,regY:78.9,scaleX:1,scaleY:1,rotation:-23.3,x:363.2,y:383.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-21.8,x:363.3,y:379.5},0).wait(1).to({regY:79,rotation:-20.3,x:363.4,y:375.6},0).wait(1).to({rotation:-19,x:363.5,y:371.7},0).wait(1).to({regY:78.9,rotation:-17.6,x:363.6,y:367.7},0).wait(1).to({regY:79,rotation:-16.3,x:363.7,y:363.8},0).wait(1).to({regY:78.9,rotation:-14.8,x:363.8,y:359.7},0).wait(1).to({regX:107,scaleX:1,scaleY:1,rotation:-13.6,y:355.8},0).wait(1).to({regX:107.1,scaleX:1,scaleY:1,rotation:-13.5,x:364.9,y:360.1},0).wait(1).to({x:366,y:364.5},0).wait(1).to({x:367.1,y:368.9},0).wait(1).to({regX:107,regY:79,scaleX:1,scaleY:1,rotation:-13.6,x:368,y:373.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.8,x:366.2,y:376.5},0).wait(1).to({regX:107.1,rotation:-16.1,x:364.6,y:379.7},0).wait(1).to({regX:107,rotation:-17.3,x:362.7,y:382.9},0).wait(1).to({regX:107.1,regY:78.9,scaleX:1,scaleY:1,rotation:-18.8,x:361.1,y:386.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-18,x:361.5,y:381.8},0).wait(1).to({rotation:-17.3,x:361.8,y:377.5},0).wait(1).to({rotation:-16.5,x:362.3,y:373.2},0).wait(1).to({regY:79,rotation:-15.8,x:362.7,y:368.9},0).wait(1).to({regY:78.9,rotation:-15,x:363.1,y:364.5},0).wait(1).to({regX:107,rotation:-14.3,x:363.4,y:360.2},0).wait(1));

	// п2
	this.instance_3 = new lib.п2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(356.2,317.6,1,1,-13.6,0,0,65.3,90.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:357.3,y:321.9,startPosition:1},0).wait(1).to({x:358.4,y:326.3,startPosition:2},0).wait(1).to({x:359.4,y:330.7,startPosition:3},0).wait(1).to({regX:65.5,scaleX:1,scaleY:1,rotation:-13.6,x:360.5,y:335.1,startPosition:4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.5,x:356.8,y:339.4,startPosition:5},0).wait(1).to({rotation:-19.6,x:352.9,y:343.6,startPosition:6},0).wait(1).to({regX:65.4,regY:90.9,rotation:-22.6,x:349.1,y:348.1,startPosition:7},0).wait(1).to({regX:65.3,regY:90.7,scaleX:1,scaleY:1,rotation:-25.7,x:345.2,y:352.2,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24,x:346.8,y:347.2,startPosition:9},0).wait(1).to({regY:90.8,rotation:-22.3,x:348.4,y:342.4,startPosition:10},0).wait(1).to({regY:90.7,rotation:-20.5,x:349.9,y:337.4,startPosition:11},0).wait(1).to({regX:65.2,rotation:-18.8,x:351.4,y:332.5,startPosition:12},0).wait(1).to({regX:65.3,rotation:-17,x:353.1,y:327.5,startPosition:13},0).wait(1).to({rotation:-15.3,x:354.7,y:322.6,startPosition:14},0).wait(1).to({regY:90.8,scaleX:1,scaleY:1,rotation:-13.6,x:356.2,y:317.6,startPosition:15},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:357.3,y:321.9,startPosition:16},0).wait(1).to({x:358.4,y:326.3,startPosition:17},0).wait(1).to({x:359.4,y:330.7,startPosition:18},0).wait(1).to({regX:65.5,scaleX:1,scaleY:1,rotation:-13.6,x:360.5,y:335.1,startPosition:19},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.3,x:354.9,y:339.3,startPosition:20},0).wait(1).to({rotation:-15.3,x:349.2,y:343.3,startPosition:21},0).wait(1).to({rotation:-16.1,x:343.7,y:347.6,startPosition:22},0).wait(1).to({regX:65.3,regY:90.7,scaleX:1,scaleY:1,rotation:-17,x:337.9,y:351.6,startPosition:23},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.5,x:340.6,y:346.7,startPosition:24},0).wait(1).to({rotation:-16,x:343.1,y:341.9,startPosition:25},0).wait(1).to({rotation:-15.5,x:345.8,y:337,startPosition:26},0).wait(1).to({regY:90.6,rotation:-15,x:348.3,y:332.2,startPosition:27},0).wait(1).to({regY:90.7,rotation:-14.5,x:351,y:327.4,startPosition:28},0).wait(1).to({rotation:-14,x:353.6,y:322.6,startPosition:29},0).wait(1));

	// п5
	this.instance_4 = new lib.п5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,270.6,1,1,-13.6,0,0,46.5,107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:365.1,y:275},0).wait(1).to({x:366.2,y:279.4},0).wait(1).to({x:367.3,y:283.7},0).wait(1).to({regY:107.5,scaleX:1,scaleY:1,rotation:-13.6,x:368.2,y:288},0).wait(1).to({regX:46.6,scaleX:1,scaleY:1,rotation:-14.8,x:362,y:292.2},0).wait(1).to({regX:46.5,regY:107.6,rotation:-16,x:355.6,y:296.5},0).wait(1).to({rotation:-17.3,x:349.2,y:300.5},0).wait(1).to({regX:46.6,regY:107.5,scaleX:1,scaleY:1,rotation:-18.5,x:343,y:304.6},0).wait(1).to({regX:46.5,scaleX:1,scaleY:1,rotation:-17.8,x:345.9,y:299.7},0).wait(1).to({regX:46.6,rotation:-17,x:349,y:294.8},0).wait(1).to({rotation:-16.3,x:352,y:290},0).wait(1).to({rotation:-15.6,x:355,y:285.1},0).wait(1).to({regX:46.5,rotation:-14.8,x:357.9,y:280.2},0).wait(1).to({regX:46.6,rotation:-14.3,x:361.1,y:275.4},0).wait(1).to({regX:46.5,regY:107.6,scaleX:1,scaleY:1,rotation:-13.6,x:364,y:270.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:365.1,y:275},0).wait(1).to({x:366.2,y:279.4},0).wait(1).to({x:367.3,y:283.7},0).wait(1).to({regY:107.5,scaleX:1,scaleY:1,rotation:-13.6,x:368.2,y:288},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.3,x:359.8,y:292.6},0).wait(1).to({rotation:-11,x:351.2,y:297.1},0).wait(1).to({rotation:-9.8,x:342.7,y:301.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.7,x:334.2,y:306.1},0).wait(1).to({regY:107.6,scaleX:1,scaleY:1,rotation:-9.3,x:338.5,y:301.1},0).wait(1).to({regY:107.5,rotation:-10,x:342.8,y:295.9},0).wait(1).to({rotation:-10.8,x:347,y:290.8},0).wait(1).to({rotation:-11.3,x:351.3,y:285.7},0).wait(1).to({regY:107.6,rotation:-12,x:355.5,y:280.8},0).wait(1).to({regY:107.5,rotation:-12.8,x:359.8,y:275.6},0).wait(1));

	// п6
	this.instance_5 = new lib.п6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(244.7,229.5,1,1,-13.6,0,0,65.3,51.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:51.8,scaleX:1,scaleY:1,rotation:-13.5,x:245.8,y:234},0).wait(1).to({x:246.9,y:238.3},0).wait(1).to({x:247.9,y:242.7},0).wait(1).to({regY:51.5,scaleX:1,scaleY:1,rotation:-13.6,x:249,y:246.9},0).wait(1).to({regY:51.6,scaleX:1,scaleY:1,rotation:-13,x:238.7,y:254.9},0).wait(1).to({regX:65.4,rotation:-12.5,x:228.7,y:262.8},0).wait(1).to({regY:51.5,rotation:-12,x:218.5,y:270.7},0).wait(1).to({regX:65.5,regY:51.6,scaleX:1,scaleY:1,rotation:-11.6,x:208.3,y:278.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.8,x:213.5,y:271.6},0).wait(1).to({rotation:-12,x:218.7,y:264.6},0).wait(1).to({rotation:-12.3,x:224,y:257.5},0).wait(1).to({rotation:-12.6,x:229.2,y:250.5},0).wait(1).to({rotation:-12.8,x:234.3,y:243.5},0).wait(1).to({rotation:-13.3,x:239.6,y:236.5},0).wait(1).to({regX:65.3,regY:51.7,scaleX:1,scaleY:1,rotation:-13.6,x:244.7,y:229.5},0).wait(1).to({regY:51.8,scaleX:1,scaleY:1,rotation:-13.5,x:245.8,y:234},0).wait(1).to({x:246.9,y:238.3},0).wait(1).to({x:247.9,y:242.7},0).wait(1).to({regY:51.5,scaleX:1,scaleY:1,rotation:-13.6,x:249,y:246.9},0).wait(1).to({regX:65.4,regY:51.6,scaleX:1,scaleY:1,rotation:-16.5,x:241.3,y:257.6},0).wait(1).to({regX:65.3,rotation:-19.6,x:233.3,y:268.2},0).wait(1).to({regY:51.5,rotation:-22.6,x:225.5,y:278.9},0).wait(1).to({regX:65.5,regY:51.6,scaleX:1,scaleY:1,rotation:-25.7,x:217.7,y:289.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24,x:221.6,y:280.9},0).wait(1).to({rotation:-22.3,x:225.4,y:272.4},0).wait(1).to({regY:51.5,rotation:-20.5,x:229.4,y:263.7},0).wait(1).to({regY:51.6,scaleX:1,scaleY:1,rotation:-18.8,x:233.3,y:255.2},0).wait(1).to({rotation:-17,x:237.1,y:246.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.3,x:241,y:238.1},0).wait(1));

	// п3
	this.instance_6 = new lib.п3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(277.8,305.4,1,1,-13.6,0,0,53.8,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:278.8,y:309.7},0).wait(1).to({x:279.9,y:314.1},0).wait(1).to({x:280.9,y:318.4},0).wait(1).to({regX:53.9,scaleX:1,scaleY:1,rotation:-13.6,x:282,y:322.8},0).wait(1).to({regX:53.8,scaleX:1,scaleY:1,rotation:-16.5,x:276.5,y:329.8},0).wait(1).to({regX:53.9,rotation:-19.6,x:271.1,y:336.8},0).wait(1).to({rotation:-22.6,x:265.5,y:343.8},0).wait(1).to({regX:53.8,scaleX:1,scaleY:1,rotation:-25.7,x:260,y:350.7},0).wait(1).to({regY:92.1,scaleX:1,scaleY:1,rotation:-24,x:262.6,y:344.2},0).wait(1).to({regX:53.9,regY:92,rotation:-22.3,x:265.1,y:337.8},0).wait(1).to({rotation:-20.5,x:267.7,y:331.2},0).wait(1).to({regX:53.8,rotation:-18.8,x:270.1,y:324.8},0).wait(1).to({regY:92.1,rotation:-17,x:272.7,y:318.4},0).wait(1).to({rotation:-15.3,x:275.2,y:311.9},0).wait(1).to({regY:92,scaleX:1,scaleY:1,rotation:-13.6,x:277.8,y:305.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:278.8,y:309.7},0).wait(1).to({x:279.9,y:314.1},0).wait(1).to({x:280.9,y:318.4},0).wait(1).to({regX:53.9,scaleX:1,scaleY:1,rotation:-13.6,x:282,y:322.8},0).wait(1).to({regX:53.8,scaleX:1,scaleY:1,rotation:-16.5,x:278,y:331.3},0).wait(1).to({regX:53.9,rotation:-19.6,x:274.1,y:339.8},0).wait(1).to({rotation:-22.6,x:270,y:348.3},0).wait(1).to({regX:53.8,scaleX:1,scaleY:1,rotation:-25.7,x:266,y:356.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24,x:267.7,y:349.3},0).wait(1).to({regX:53.9,rotation:-22.3,x:269.4,y:342},0).wait(1).to({rotation:-20.5,x:271.1,y:334.7},0).wait(1).to({regX:53.8,scaleX:1,scaleY:1,rotation:-18.8,x:272.7,y:327.3},0).wait(1).to({regX:53.9,rotation:-17,x:274.5,y:320.1},0).wait(1).to({regX:53.8,scaleX:1,scaleY:1,rotation:-15.3,x:276,y:312.8},0).wait(1));

	// п4
	this.instance_7 = new lib.п4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(249.5,321.5,1,1,-13.6,0,0,58.9,108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:250.5,y:325.9},0).wait(1).to({x:251.6,y:330.2},0).wait(1).to({x:252.6,y:334.6},0).wait(1).to({regX:58.8,scaleX:1,scaleY:1,rotation:-13.6,x:253.7,y:339},0).wait(1).to({regX:58.7,scaleX:1,scaleY:1,rotation:-12.3,x:247.6,y:351.2},0).wait(1).to({regX:58.8,rotation:-11,x:241.5,y:363.3},0).wait(1).to({rotation:-9.8,x:235.4,y:375.4},0).wait(1).to({regX:58.7,scaleX:1,scaleY:1,rotation:-8.5,x:229.2,y:387.6},0).wait(1).to({rotation:-9.1,x:232.1,y:378.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.8,x:234.9,y:368.6},0).wait(1).to({regX:58.6,regY:108.6,rotation:-10.5,x:237.7,y:359.4},0).wait(1).to({regX:58.8,regY:108.5,rotation:-11.3,x:240.8,y:349.9},0).wait(1).to({regX:58.6,rotation:-12,x:243.5,y:340.4},0).wait(1).to({regX:58.7,rotation:-12.8,x:246.5,y:330.9},0).wait(1).to({regX:58.9,scaleX:1,scaleY:1,rotation:-13.6,x:249.5,y:321.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:250.5,y:325.9},0).wait(1).to({x:251.6,y:330.2},0).wait(1).to({x:252.6,y:334.6},0).wait(1).to({regX:58.8,scaleX:1,scaleY:1,rotation:-13.6,x:253.7,y:339},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.5,x:250.7,y:348.9},0).wait(1).to({regY:108.4,rotation:-19.6,x:247.6,y:358.8},0).wait(1).to({regY:108.5,rotation:-22.6,x:244.7,y:368.6},0).wait(1).to({regX:58.6,scaleX:1,scaleY:1,rotation:-25.7,x:241.6,y:378.6},0).wait(1).to({regX:58.7,regY:108.4,scaleX:1,scaleY:1,rotation:-24,x:242.8,y:370.4},0).wait(1).to({regX:58.6,regY:108.5,rotation:-22.3,x:243.7,y:362.3},0).wait(1).to({regX:58.7,rotation:-20.5,x:245.1,y:354.2},0).wait(1).to({regX:58.6,scaleX:1,scaleY:1,rotation:-18.8,x:246.2,y:346},0).wait(1).to({rotation:-17,x:247.2,y:337.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.3,x:248.3,y:329.7},0).wait(1));

	// п7
	this.instance_8 = new lib.п7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(240.1,190.4,1,1,-13.6,0,0,35.3,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:241.1,y:194.8,startPosition:1},0).wait(1).to({x:242.2,y:199.2,startPosition:2},0).wait(1).to({x:243.2,y:203.5,startPosition:3},0).wait(1).to({regX:35.2,scaleX:1,scaleY:1,rotation:-13.6,x:244.2,y:207.9,startPosition:4},0).wait(1).to({regX:35.1,scaleX:1,scaleY:1,rotation:-17,x:234.3,y:214.2,startPosition:5},0).wait(1).to({regX:35.2,rotation:-20.5,x:224.4,y:220.3,startPosition:6},0).wait(1).to({rotation:-24,x:214.5,y:226.6,startPosition:7},0).wait(1).to({regX:35.3,scaleX:1,scaleY:1,rotation:-27.5,x:204.6,y:232.8,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-23.6,x:208,y:225.7,startPosition:9},0).wait(1).to({rotation:-19.8,x:211.3,y:218.6,startPosition:10},0).wait(1).to({regY:95.4,rotation:-16,x:214.6,y:211.4,startPosition:11},0).wait(1).to({regY:95.5,rotation:-12.3,x:218,y:204.3,startPosition:12},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.3,x:221.3,y:197.3,startPosition:13},0).wait(1).to({rotation:-4.5,x:224.8,y:190.1,startPosition:14},0).wait(1).to({rotation:-0.9,x:228.1,y:183.1,startPosition:15},0).wait(1).to({regY:95.4,rotation:-4,x:231,y:189.3,startPosition:16},0).wait(1).to({regY:95.5,rotation:-7.1,x:234.1,y:195.5,startPosition:17},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.3,x:237.2,y:201.7,startPosition:18},0).wait(1).to({regX:35.2,scaleX:1,scaleY:1,rotation:-13.6,x:240.2,y:207.9,startPosition:19},0).wait(1).to({regX:35.1,scaleX:1,scaleY:1,rotation:-16.5,x:231.2,y:219,startPosition:20},0).wait(1).to({regX:35.2,rotation:-19.6,x:222.5,y:230.1,startPosition:21},0).wait(1).to({rotation:-22.6,x:213.6,y:241.3,startPosition:22},0).wait(1).to({regX:35.3,scaleX:1,scaleY:1,rotation:-25.7,x:204.9,y:252.3,startPosition:23},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24,x:209.9,y:243.5,startPosition:24},0).wait(1).to({rotation:-22.3,x:214.9,y:234.7,startPosition:25},0).wait(1).to({rotation:-20.5,x:220,y:225.9,startPosition:26},0).wait(1).to({regY:95.4,scaleX:1,scaleY:1,rotation:-18.8,x:225,y:216.9,startPosition:27},0).wait(1).to({regY:95.5,rotation:-17,x:230,y:208.1,startPosition:28},0).wait(1).to({regX:35.4,scaleX:1,scaleY:1,rotation:-15.3,x:235.1,y:199.3,startPosition:29},0).wait(1));

	// R.arm низ
	this.instance_9 = new lib.Rarmниз("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(188.3,251.9,1,1,-13.6,0,0,34.6,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:34.5,scaleX:1,scaleY:1,rotation:-13.5,x:189.2,y:256.2},0).wait(1).to({x:190.3,y:260.6},0).wait(1).to({x:191.3,y:265},0).wait(1).to({regY:11.3,scaleX:1,scaleY:1,rotation:-13.6,x:192.4,y:269.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.5,x:186.1,y:283},0).wait(1).to({rotation:-19.6,x:179.9,y:296.4},0).wait(1).to({rotation:-22.6,x:173.4,y:309.9},0).wait(1).to({regX:34.6,regY:11.2,scaleX:1,scaleY:1,rotation:-25.7,x:167.1,y:323.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24,x:170.2,y:313.2},0).wait(1).to({regY:11.3,rotation:-22.3,x:173.3,y:303},0).wait(1).to({regY:11.2,rotation:-20.5,x:176.2,y:292.8},0).wait(1).to({rotation:-18.8,x:179.3,y:282.5},0).wait(1).to({rotation:-17,x:182.2,y:272.3},0).wait(1).to({regY:11.3,rotation:-15.3,x:185.2,y:262.2},0).wait(1).to({regY:11.2,scaleX:1,scaleY:1,rotation:-13.6,x:188.3,y:251.9},0).wait(1).to({regX:34.5,scaleX:1,scaleY:1,rotation:-13.5,x:189.2,y:256.2},0).wait(1).to({x:190.3,y:260.6},0).wait(1).to({x:191.3,y:265},0).wait(1).to({regY:11.3,scaleX:1,scaleY:1,rotation:-13.6,x:192.4,y:269.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.5,x:186.1,y:283},0).wait(1).to({rotation:-19.6,x:179.9,y:296.4},0).wait(1).to({rotation:-22.6,x:173.4,y:309.9},0).wait(1).to({regX:34.6,regY:11.2,scaleX:1,scaleY:1,rotation:-25.7,x:167.1,y:323.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-24,x:170.2,y:313.2},0).wait(1).to({rotation:-22.3,x:173.2,y:303},0).wait(1).to({regY:11.3,rotation:-20.5,x:176.2,y:292.8},0).wait(1).to({regY:11.2,scaleX:1,scaleY:1,rotation:-18.8,x:179.2,y:282.6},0).wait(1).to({rotation:-17,x:182.3,y:272.4},0).wait(1).to({regY:11.3,scaleX:1,scaleY:1,rotation:-15.3,x:185.2,y:262.2},0).wait(1));

	// шапка
	this.instance_10 = new lib.шапка("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(295.7,129.5,1,1,-26.5,0,0,19.6,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleX:1,scaleY:1,rotation:-23.3,x:299.9,y:132.6,startPosition:1},0).wait(1).to({regX:19.7,rotation:-20,x:304.3,y:135.5,startPosition:2},0).wait(1).to({regX:19.6,rotation:-16.8,x:308.5,y:138.7,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.6,x:312.7,y:141.7,startPosition:4},0).wait(1).to({regY:57.4,scaleX:1,scaleY:1,rotation:-14,x:299,y:149.6,startPosition:5},0).wait(1).to({regX:19.5,regY:57.5,rotation:-14.6,x:285.3,y:157.5,startPosition:6},0).wait(1).to({regX:19.6,regY:57.4,rotation:-15.3,x:271.7,y:165.3,startPosition:7},0).wait(1).to({regX:19.7,regY:57.6,scaleX:1,scaleY:1,rotation:-15.8,x:258.1,y:173.2,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-17.3,x:263.4,y:167,startPosition:9},0).wait(1).to({rotation:-18.8,x:268.9,y:160.6,startPosition:10},0).wait(1).to({regX:19.8,rotation:-20.3,x:274.3,y:154.5,startPosition:11},0).wait(1).to({rotation:-21.8,x:279.7,y:148.2,startPosition:12},0).wait(1).to({regX:19.7,rotation:-23.3,x:284.9,y:141.9,startPosition:13},0).wait(1).to({rotation:-25,x:290.3,y:135.7,startPosition:14},0).wait(1).to({regX:19.6,regY:57.5,scaleX:1,scaleY:1,rotation:-26.5,x:295.7,y:129.5,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-23.3,x:299.9,y:132.6,startPosition:1},0).wait(1).to({regX:19.7,rotation:-20,x:304.3,y:135.5,startPosition:2},0).wait(1).to({regX:19.6,rotation:-16.8,x:308.5,y:138.7,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.6,x:312.7,y:141.7,startPosition:4},0).wait(1).to({regY:57.4,scaleX:1,scaleY:1,rotation:-14,x:299,y:149.6,startPosition:5},0).wait(1).to({regX:19.5,regY:57.5,rotation:-14.6,x:285.3,y:157.5,startPosition:6},0).wait(1).to({regX:19.6,regY:57.4,rotation:-15.3,x:271.7,y:165.3,startPosition:7},0).wait(1).to({regX:19.7,regY:57.6,scaleX:1,scaleY:1,rotation:-15.8,x:258.1,y:173.2,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-17.3,x:263.5,y:167,startPosition:9},0).wait(1).to({regX:19.8,rotation:-18.8,x:268.9,y:160.7,startPosition:10},0).wait(1).to({regX:19.7,scaleX:1,scaleY:1,rotation:-20.3,x:274.3,y:154.4,startPosition:11},0).wait(1).to({rotation:-21.8,x:279.6,y:148.2,startPosition:12},0).wait(1).to({rotation:-23.5,x:284.9,y:141.9,startPosition:13},0).wait(1).to({scaleX:1,scaleY:1,rotation:-25,x:290.3,y:135.7,startPosition:14},0).wait(1));

	// head
	this.instance_11 = new lib.голова("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(314.3,191.7,1,1,-26.5,0,0,21.7,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:75.9,scaleX:1,scaleY:1,rotation:-23.3,x:315,y:195.5,startPosition:1},0).wait(1).to({regY:75.8,rotation:-20,x:315.7,y:199.1,startPosition:2},0).wait(1).to({rotation:-16.8,x:316.3,y:202.9,startPosition:3},0).wait(1).to({regX:21.8,regY:76,scaleX:1,scaleY:1,rotation:-13.6,x:316.9,y:206.7,startPosition:4},0).wait(1).to({regY:75.9,scaleX:1,scaleY:1,rotation:-16.5,x:306.7,y:213.9,startPosition:5},0).wait(1).to({regX:21.9,rotation:-19.6,x:296.5,y:221.1,startPosition:6},0).wait(1).to({regX:21.8,regY:76,rotation:-22.6,x:286.2,y:228.6,startPosition:7},0).wait(1).to({regX:21.7,scaleX:1,scaleY:1,rotation:-25.8,x:275.9,y:235.7,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,x:281.3,y:229.4,startPosition:9},0).wait(1).to({rotation:-26,x:286.7,y:223.2,startPosition:10},0).wait(1).to({regX:21.8,rotation:-26.1,x:292.4,y:216.9,startPosition:11},0).wait(1).to({regX:21.7,x:297.9,y:210.5,startPosition:12},0).wait(1).to({rotation:-26.3,x:303.3,y:204.3,startPosition:13},0).wait(1).to({regY:75.9,x:308.7,y:197.9,startPosition:14},0).wait(1).to({regY:75.8,scaleX:1,scaleY:1,rotation:-26.5,x:314.3,y:191.7,startPosition:15},0).wait(1).to({regY:75.9,scaleX:1,scaleY:1,rotation:-23.3,x:315,y:195.5,startPosition:16},0).wait(1).to({regY:75.8,rotation:-20,x:315.7,y:199.1,startPosition:17},0).wait(1).to({rotation:-16.8,x:316.3,y:202.9,startPosition:18},0).wait(1).to({regX:21.8,regY:76,scaleX:1,scaleY:1,rotation:-13.6,x:316.9,y:206.7,startPosition:19},0).wait(1).to({regY:75.9,scaleX:1,scaleY:1,rotation:-16.5,x:306.7,y:213.9,startPosition:20},0).wait(1).to({regX:21.9,rotation:-19.6,x:296.5,y:221.1,startPosition:21},0).wait(1).to({regX:21.8,regY:76,rotation:-22.6,x:286.2,y:228.6,startPosition:22},0).wait(1).to({regX:21.7,scaleX:1,scaleY:1,rotation:-25.8,x:275.9,y:235.7,startPosition:23},0).wait(1).to({scaleX:1,scaleY:1,x:281.4,y:229.5,startPosition:24},0).wait(1).to({x:286.8,y:223.2,startPosition:25},0).wait(1).to({rotation:-26.1,x:292.3,y:216.9,startPosition:26},0).wait(1).to({x:297.8,y:210.5,startPosition:27},0).wait(1).to({x:303.3,y:204.3,startPosition:28},0).wait(1).to({regY:75.9,scaleX:1,scaleY:1,rotation:-26.3,x:308.7,y:197.9,startPosition:29},0).wait(1));

	// F. Toes
	this.instance_12 = new lib.FToes("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(400.8,619.2,1,1,3.2,0,0,26.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({rotation:3.8,x:401.3},0).wait(1).to({rotation:4.5,x:401.7},0).wait(1).to({rotation:5.1,x:402.1,y:619.1},0).wait(1).to({regX:26.6,rotation:5.9,x:402.5,y:619.2},0).wait(1).to({rotation:0,x:373.5,y:624},0).wait(1).to({rotation:-5.7,x:344.6,y:628.6},0).wait(1).to({regX:26.5,rotation:-4.5,x:314.9,y:634.3},0).wait(1).to({regX:26.6,regY:6.7,rotation:-4.2,x:288.3,y:638.6},0).wait(1).to({regY:6.6,scaleX:1,scaleY:1,rotation:5.8,x:265.3,y:633.2},0).wait(1).to({regX:26.5,rotation:16,x:246.1,y:626.1},0).wait(1).to({regX:26.6,regY:6.7,scaleX:1,scaleY:1,rotation:21.9,x:226.1,y:618.6},0).wait(1).to({regX:26.5,regY:6.5,scaleX:1,scaleY:1,rotation:32.8,x:205.7,y:609.9},0).wait(1).to({regX:26.6,scaleX:1,scaleY:1,rotation:41.6,x:186.3,y:600.7},0).wait(1).to({regX:26.5,regY:6.7,rotation:48.1,x:169.6,y:591.9},0).wait(1).to({regY:6.5,scaleX:1,scaleY:1,rotation:65,x:152.4,y:582.2},0).wait(1).to({regY:6.4,scaleX:1,scaleY:1,rotation:48.8,x:175.8,y:600.9},0).wait(1).to({rotation:35.9,x:202.5,y:620.2},0).wait(1).to({rotation:27.6,x:227.8,y:637.5},0).wait(1).to({regX:26.3,scaleX:1,scaleY:1,rotation:19.6,x:253.3,y:654.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.6,x:260.8,y:651.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:17.4,x:267.8,y:650.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:20.6,x:275,y:648.2},0).wait(1).to({regX:26.6,regY:6.5,scaleX:1,scaleY:1,rotation:21.9,x:282.2,y:646.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.3,x:299.3,y:642.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:10.3,x:316,y:639.3},0).wait(1).to({regX:26.4,rotation:9.8,x:332.9,y:635.9},0).wait(1).to({regX:26.6,rotation:3.8,x:349.9,y:631.7},0).wait(1).to({rotation:1.3,x:366.9,y:627.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.1,x:383.8,y:623.4},0).wait(1));

	// F. Foot
	this.instance_13 = new lib.FFoot("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(405.9,574.9,1,1,-11.2,0,0,22,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({scaleX:1,scaleY:1,rotation:-12.3,x:405,y:574.8},0).wait(1).to({regX:21.9,regY:4.5,rotation:-13.5,x:404.1,y:574.7},0).wait(1).to({regY:4.6,rotation:-14.8,x:403.2,y:574.6},0).wait(1).to({regX:22.2,regY:4.7,scaleX:1,scaleY:1,rotation:-16,x:402.5},0).wait(1).to({regY:4.8,scaleX:1,scaleY:1,rotation:-11.8,x:377.4,y:580.5},0).wait(1).to({regY:4.7,scaleX:1,scaleY:1,rotation:-7.8,x:352.4,y:586.2},0).wait(1).to({regY:4.8,rotation:-3.8,x:327.3,y:592.1},0).wait(1).to({rotation:0.1,x:302.3,y:597.9},0).wait(1).to({regY:4.7,scaleX:1,scaleY:1,rotation:9.3,x:287.1,y:594.9},0).wait(1).to({regY:4.8,rotation:18.3,x:271.9,y:592},0).wait(1).to({rotation:27.6,x:256.7,y:589},0).wait(1).to({regY:4.7,scaleX:1,scaleY:1,rotation:36.8,x:241.6,y:586.1},0).wait(1).to({rotation:45.9,x:226.4,y:583.1},0).wait(1).to({regY:4.8,rotation:55.2,x:211.1,y:580.3},0).wait(1).to({regY:4.5,scaleX:1,scaleY:1,rotation:64.3,x:196.1,y:577.3},0).wait(1).to({regX:22.1,regY:4.6,scaleX:1,scaleY:1,rotation:53.4,x:217.3,y:588.2},0).wait(1).to({regX:22.2,regY:4.5,rotation:42.4,x:238.7,y:599.1},0).wait(1).to({rotation:31.6,x:260.2,y:610.1},0).wait(1).to({regY:4.7,scaleX:1,scaleY:1,rotation:20.6,x:281.4,y:621},0).wait(1).to({scaleX:1,scaleY:1,rotation:20.8,x:288.8,y:619.2},0).wait(1).to({rotation:21.1,x:296.1,y:617.3},0).wait(1).to({rotation:21.5,x:303.6,y:615.4},0).wait(1).to({regY:4.6,scaleX:1,scaleY:1,rotation:21.8,x:310.8,y:613.5},0).wait(1).to({regY:4.5,scaleX:1,scaleY:1,rotation:17,x:324.5,y:607.9},0).wait(1).to({regX:22.1,regY:4.7,rotation:12.3,x:337.8,y:602.6},0).wait(1).to({rotation:7.6,x:351.4,y:597},0).wait(1).to({regX:22.2,regY:4.6,scaleX:1,scaleY:1,rotation:3,x:365.1,y:591.3},0).wait(1).to({regY:4.7,rotation:-1.5,x:378.7,y:585.9},0).wait(1).to({regY:4.6,rotation:-6.3,x:392.3,y:580.3},0).wait(1));

	// F. Calf
	this.instance_14 = new lib.FCalf("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(313.2,446.7,1,1,-13.6,0,0,5,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({scaleX:1,scaleY:1,rotation:-15.6,x:307.6,y:450.6},0).wait(1).to({rotation:-17.8,x:301.9,y:454.6},0).wait(1).to({regY:3.8,rotation:-20,x:296.2,y:458.7},0).wait(1).to({regX:4.9,regY:3.6,scaleX:1,scaleY:1,rotation:-22.3,x:290.5,y:462.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-17.3,x:276.7,y:460.9},0).wait(1).to({regY:3.5,rotation:-12.3,x:263,y:459.1},0).wait(1).to({regY:3.6,scaleX:1,scaleY:1,rotation:-7.3,x:249.1,y:457.4},0).wait(1).to({rotation:-2.3,x:235.2,y:455.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.8,x:239,y:449.3},0).wait(1).to({rotation:12,x:242.7,y:442.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.3,x:246.8,y:438.8},0).wait(1).to({regX:5,rotation:26.6,x:251,y:434.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:33.8,x:255.1,y:435},0).wait(1).to({scaleX:1,scaleY:1,rotation:41.1,x:259.1,y:435.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:48.4,x:263.3,y:435.7},0).wait(1).to({regX:4.9,scaleX:1,scaleY:1,rotation:44.9,x:276.4,y:442.6},0).wait(1).to({rotation:41.6,x:289.5,y:449.7},0).wait(1).to({rotation:38.1,x:302.7,y:456.7},0).wait(1).to({regY:3.8,scaleX:1,scaleY:1,rotation:34.7,x:315.8,y:463.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.6,x:317.2,y:461.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.3,x:318.8,y:459.9},0).wait(1).to({rotation:28.3,x:320.2,y:458},0).wait(1).to({regX:5,regY:3.7,scaleX:1,scaleY:1,rotation:26.2,x:321.7,y:456},0).wait(1).to({regY:3.6,scaleX:1,scaleY:1,rotation:20.5,x:320.6,y:454.6},0).wait(1).to({regY:3.7,rotation:14.8,x:319.3,y:453.4},0).wait(1).to({regX:5.1,rotation:9.1,x:318.1,y:452.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.5,x:316.9,y:450.8},0).wait(1).to({rotation:-2,x:315.7,y:449.5},0).wait(1).to({regX:5,rotation:-7.8,x:314.4,y:448.1},0).wait(1));

	// F. Upper Leg1
	this.instance_15 = new lib.FUpperLeg11("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(320.5,352.9,1,1,0,0,0,49.9,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:49.8,rotation:3.5,x:320.3,y:357.2},0).wait(1).to({regX:49.9,rotation:7.3,x:320.2,y:361.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:11,x:320.1,y:365.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:14.7,x:320,y:369.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:17.6,x:320.2,y:373.8},0).wait(1).to({regX:49.8,rotation:20.5,x:320.3,y:377.5},0).wait(1).to({rotation:23.5,x:320.4,y:381.3},0).wait(1).to({regX:50,scaleX:1,scaleY:1,rotation:26.5,x:320.6,y:385.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:25,x:320.4,y:383},0).wait(1).to({regX:49.9,rotation:23.6,x:320.3,y:380.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:22,x:320,y:377.7},0).wait(1).to({rotation:20.6,x:319.7,y:374.6},0).wait(1).to({rotation:19.1,x:319.8,y:371},0).wait(1).to({regY:45.5,rotation:17.6,x:320,y:367.4},0).wait(1).to({regX:50,regY:45.6,scaleX:1,scaleY:1,rotation:16.3,x:320.2,y:363.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.8,x:320.1,y:366.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.5,y:369.5},0).wait(1).to({rotation:6.3,x:320,y:372.5},0).wait(1).to({regX:49.9,regY:45.7,scaleX:1,scaleY:1,rotation:2.9,x:320.1,y:375.4},0).wait(1).to({rotation:4.3,x:319.1,y:375.2},0).wait(1).to({regX:49.8,regY:45.6,rotation:5.6,x:318.2,y:374.9},0).wait(1).to({regX:49.9,rotation:7,x:317.3},0).wait(1).to({regX:49.8,rotation:8.5,x:316.3,y:374.7},0).wait(1).to({rotation:7.3,x:317,y:371.6},0).wait(1).to({rotation:6,x:317.5,y:368.5},0).wait(1).to({rotation:4.8,x:318.1,y:365.4},0).wait(1).to({regX:49.9,rotation:3.5,x:318.7,y:362.2},0).wait(1).to({regX:49.8,rotation:2.3,x:319.3,y:359.1},0).wait(1).to({rotation:1.1,x:319.9,y:356},0).wait(1));

	// F. Upper Leg2
	this.instance_16 = new lib.FUpperLeg22("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(333.3,471.9,1,1,0,0,0,10,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regY:21.8,rotation:-3.6,x:328.3,y:474.7},0).wait(1).to({rotation:-7.3,x:323.3,y:477.5},0).wait(1).to({regY:21.9,scaleX:1,scaleY:1,rotation:-11.1,x:318.3,y:480.4},0).wait(1).to({regX:10.1,scaleX:1,scaleY:1,rotation:-15,x:313.3,y:483.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.5,x:297.6,y:483.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.5,x:281.7,y:482.8},0).wait(1).to({regX:10,scaleX:1,scaleY:1,rotation:9.8,x:265.9,y:482.7},0).wait(1).to({rotation:18.2,x:250.1,y:482.5},0).wait(1).to({regX:10.1,scaleX:1,scaleY:1,rotation:19.3,x:250.2,y:477.3},0).wait(1).to({regX:10,rotation:20.5,y:472.1},0).wait(1).to({regY:21.8,scaleX:1,scaleY:1,rotation:21.6,x:250.4,y:470.1},0).wait(1).to({regY:21.9,scaleX:1,scaleY:1,rotation:22.8,x:250.7,y:468.1},0).wait(1).to({rotation:24,x:251.1,y:466.8},0).wait(1).to({rotation:25.3,x:251.5,y:465.4},0).wait(1).to({regX:10.1,scaleX:1,scaleY:1,rotation:26.5,x:252,y:464},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.3,x:266.9,y:471.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:12,x:281.7,y:479.1},0).wait(1).to({regX:10,rotation:4.8,x:296.6,y:486.6},0).wait(1).to({regX:10.1,scaleX:1,scaleY:1,rotation:-2.5,x:311.6,y:494.1},0).wait(1).to({rotation:-7,x:314.2,y:492.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.6,x:316.6,y:491.1},0).wait(1).to({regX:10,rotation:-16.3,x:319,y:489.5},0).wait(1).to({regX:10.1,scaleX:1,scaleY:1,rotation:-20.9,x:321.5,y:488.1},0).wait(1).to({regX:10,scaleX:1,scaleY:1,rotation:-17.8,x:323.1,y:485.9},0).wait(1).to({regX:10.1,rotation:-14.8,x:324.9,y:483.4},0).wait(1).to({rotation:-11.8,x:326.6,y:481.2},0).wait(1).to({rotation:-8.8,x:328.3,y:478.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-5.8,x:329.9,y:476.6},0).wait(1).to({rotation:-2.8,x:331.6,y:474.2},0).wait(1));

	// B. Toes
	this.instance_17 = new lib.BToes("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(89.8,550.5,1,1,-3.9,0,0,20.3,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:20.2,scaleX:1,scaleY:1,rotation:-14,x:118.2,y:574},0).wait(1).to({regY:21.6,scaleX:1,scaleY:1,rotation:-24.3,x:147.6,y:596.7},0).wait(1).to({regX:20.3,rotation:-34.6,x:177.3,y:617.9},0).wait(1).to({regX:20.2,scaleX:1,scaleY:1,rotation:-45,x:206.8,y:638.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-48.1,x:208,y:640},0).wait(1).to({regY:21.5,rotation:-51.2,x:209.2,y:641.5},0).wait(1).to({rotation:-54.4,x:210.6,y:642.8},0).wait(1).to({regX:20.3,regY:21.7,scaleX:1,scaleY:1,rotation:-57.5,x:211.8,y:644.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-62.1,x:239.9,y:636.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-66.7,x:267.8,y:627.9},0).wait(1).to({regX:20.4,regY:21.6,scaleX:1,scaleY:1,rotation:-71.4,x:295.7,y:619.4},0).wait(1).to({regX:20.3,scaleX:1,scaleY:1,rotation:-74.2,x:323.6,y:610.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-78.9,x:351.6,y:602.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-84.2,x:379.4,y:592.7},0).wait(1).to({regX:20.4,scaleX:1,scaleY:1,rotation:-89.4,x:407.2,y:583.4},0).wait(1).to({rotation:-85.7,x:407.5,y:583.2},0).wait(1).to({rotation:-82,x:407.7,y:582.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-78.2,x:408,y:582.6},0).wait(1).to({regX:20.3,scaleX:1,scaleY:1,rotation:-74.5,x:408.2,y:582.4},0).wait(1).to({regY:21.5,scaleX:1,scaleY:1,rotation:-77.2,x:383.3,y:590.7},0).wait(1).to({regX:20.4,regY:21.6,rotation:-79.7,x:358.5,y:598.9},0).wait(1).to({regX:20.3,regY:21.5,scaleX:1,scaleY:1,rotation:-74.9,x:333.8,y:606.7},0).wait(1).to({regX:20.4,scaleX:1,scaleY:1,x:309.3,y:612.9},0).wait(1).to({regX:20.3,scaleX:1,scaleY:1,rotation:-65.4,x:283.4,y:611.6},0).wait(1).to({regY:21.4,scaleX:1,scaleY:1,rotation:-58.2,x:257,y:609.9},0).wait(1).to({regX:20.4,scaleX:1,scaleY:1,rotation:-50.8,x:230.8,y:607.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-39.1,x:193.2,y:603.8},0).wait(1).to({rotation:-27.3,x:157.5,y:592.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.5,x:122,y:571.3},0).wait(1));

	// B. Foot
	this.instance_18 = new lib.BFoot("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(135.7,554,1,1,-3.9,0,0,54.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({scaleX:1,scaleY:1,rotation:-14,x:162.7,y:568.3},0).wait(1).to({rotation:-24.3,x:189.6,y:582.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-34.6,x:216.7,y:596.7},0).wait(1).to({regY:12,scaleX:1,scaleY:1,rotation:-45,x:243.7,y:610.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-48.1,x:243.2,y:610.5},0).wait(1).to({rotation:-51.2,x:242.8,y:610.1},0).wait(1).to({regX:54.2,rotation:-54.4,x:242.2,y:609.9},0).wait(1).to({regX:54.3,scaleX:1,scaleY:1,rotation:-57.5,x:241.9,y:609.5},0).wait(1).to({regX:54.2,scaleX:1,scaleY:1,rotation:-62.2,x:266.5,y:599.3},0).wait(1).to({rotation:-66.7,x:291.1,y:589.1},0).wait(1).to({regX:54.3,rotation:-71.2,x:315.8,y:578.8},0).wait(1).to({regY:11.9,rotation:-75.7,x:340.3,y:568.7},0).wait(1).to({regY:12,rotation:-80.4,x:365,y:558.5},0).wait(1).to({regX:54.2,scaleX:1,scaleY:1,rotation:-85,x:389.6,y:548.4},0).wait(1).to({regY:11.8,rotation:-89.4,x:414.3,y:538.2},0).wait(1).to({regX:54.3,rotation:-92.8,x:411,y:537.7},0).wait(1).to({regX:54.2,rotation:-96.3,x:407.8,y:537.5},0).wait(1).to({regX:54.1,scaleX:1,scaleY:1,rotation:-99.6,x:404.5,y:537.2},0).wait(1).to({regX:54.4,regY:11.9,scaleX:1,scaleY:1,rotation:-103.1,x:401.2,y:536.6},0).wait(1).to({regY:11.8,rotation:-95.3,x:383.1,y:545.4},0).wait(1).to({rotation:-87.7,x:365.1,y:554.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-80,x:347.1,y:563.1},0).wait(1).to({regX:54.1,regY:12,scaleX:1,scaleY:1,rotation:-72.2,x:329.2,y:572.1},0).wait(1).to({regX:54.2,regY:11.9,scaleX:1,scaleY:1,rotation:-64.5,x:306.8,y:574},0).wait(1).to({regX:54.1,scaleX:1,scaleY:1,rotation:-56.9,x:284.2,y:575.9},0).wait(1).to({regY:12,scaleX:1,scaleY:1,rotation:-49.1,x:261.8,y:577.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-37.8,x:230.3,y:580.7},0).wait(1).to({regY:11.9,rotation:-26.5,x:198.7,y:577.4},0).wait(1).to({regX:54.2,scaleX:1,scaleY:1,rotation:-15.1,x:167.3,y:565.7},0).wait(1));

	// B. Calf
	this.instance_19 = new lib.BCalf("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(237,430.5,1,1,-3.9,0,0,120.5,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({scaleX:1,scaleY:1,rotation:-13.8,x:238.5,y:435.1},0).wait(1).to({regY:2.8,rotation:-23.8,x:240,y:439.7},0).wait(1).to({regY:2.9,rotation:-33.6,x:241.6,y:444.4},0).wait(1).to({regY:3.1,scaleX:1,scaleY:1,rotation:-43.7,x:243.2,y:449.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-46.9,x:233.8,y:451.5},0).wait(1).to({rotation:-50.1,x:224.6,y:453.8},0).wait(1).to({regX:120.4,rotation:-53.4,x:215.2,y:456.1},0).wait(1).to({regX:120.7,regY:2.9,scaleX:1,scaleY:1,rotation:-56.6,x:205.9,y:458.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-62.9,x:217.2,y:457.4},0).wait(1).to({rotation:-69,x:228.3,y:456.6},0).wait(1).to({rotation:-75.2,x:239.4,y:455.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-81.5,x:250.5,y:454.7},0).wait(1).to({rotation:-87.7,x:261.7,y:453.7},0).wait(1).to({rotation:-93.6,x:272.8,y:452.8},0).wait(1).to({regX:120.5,regY:3,rotation:-99.9,x:283.9,y:451.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-102,x:278.4,y:457.8},0).wait(1).to({rotation:-104.1,x:272.9,y:463.5},0).wait(1).to({rotation:-106.3,x:267.5,y:469.3},0).wait(1).to({regX:120.6,scaleX:1,scaleY:1,rotation:-108.4,x:262.1,y:475},0).wait(1).to({scaleX:1,scaleY:1,rotation:-103.5,x:251.6,y:473.5},0).wait(1).to({regX:120.5,rotation:-98.8,x:241.1,y:472.1},0).wait(1).to({regY:2.9,scaleX:1,scaleY:1,rotation:-94,x:230.6,y:470.6},0).wait(1).to({regX:120.6,rotation:-89.3,x:220.2,y:469},0).wait(1).to({regX:120.7,scaleX:1,scaleY:1,rotation:-80.7,x:215.4,y:455.6},0).wait(1).to({regX:120.6,scaleX:1,scaleY:1,rotation:-71.9,x:210.8,y:442.5},0).wait(1).to({rotation:-63.1,x:206,y:429.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-48.4,x:213.7,y:429.4},0).wait(1).to({regY:2.8,rotation:-33.6,x:221.4,y:429.8},0).wait(1).to({rotation:-18.6,x:229.2,y:430.1},0).wait(1));

	// B. Upper Leg1
	this.instance_20 = new lib.BUpperLeg11("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(308,346,1,1,6.2,0,0,70.3,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({rotation:7.3,x:307.7,y:351.1},0).wait(1).to({rotation:8.5,x:307.4,y:356.2},0).wait(1).to({regY:30,scaleX:1,scaleY:1,rotation:9.8,x:307,y:361.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:10.9,x:306.7,y:366.3},0).wait(1).to({regY:30.1,scaleX:1,scaleY:1,rotation:12.3,x:304.2,y:374.2},0).wait(1).to({rotation:14,x:301.8,y:381.9},0).wait(1).to({regY:30,rotation:15.5,x:299.4,y:389.6},0).wait(1).to({rotation:17.1,x:296.9,y:397.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:16.8,x:299.6,y:391.7},0).wait(1).to({x:302.3,y:386.1},0).wait(1).to({regY:30.1,rotation:16.6,x:305,y:380.6},0).wait(1).to({regY:29.9,rotation:16.5,x:307.6,y:374.8},0).wait(1).to({regY:30.1,rotation:16.3,x:310.3,y:369.4},0).wait(1).to({regX:70.4,regY:30,x:313.1,y:363.7},0).wait(1).to({regX:70.3,regY:30.1,scaleX:1,scaleY:1,x:315.7,y:358.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.8,x:314.9,y:362.6},0).wait(1).to({rotation:11.5,x:314,y:367.1},0).wait(1).to({rotation:9,x:313.3,y:371.5},0).wait(1).to({regY:30.2,rotation:6.8,x:312.4,y:376.1},0).wait(1).to({rotation:9.3,x:306.6,y:377.6},0).wait(1).to({regY:30.1,scaleX:1,scaleY:1,rotation:12,x:300.8,y:379},0).wait(1).to({regY:30.2,rotation:14.8,x:295,y:380.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:17.5,x:289.2,y:382},0).wait(1).to({regY:30.1,rotation:19.8,x:291,y:379.1},0).wait(1).to({regX:70.2,regY:30.2,rotation:22,x:292.6,y:376.4},0).wait(1).to({regX:70.3,regY:29.9,scaleX:1,scaleY:1,rotation:24.4,x:294.4,y:373.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.8,x:297.8,y:368.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.3,x:301.2,y:360.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:10.8,x:304.7,y:353.5},0).wait(1));

	// B. Upper Leg2
	this.instance_21 = new lib.BUpperLeg22("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(232.2,440.2,1,1,0,0,0,4.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({rotation:-3,x:235.8,y:445},0).wait(1).to({rotation:-6.3,x:239.5,y:449.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.5,x:243.1,y:454.5},0).wait(1).to({regY:23.3,scaleX:1,scaleY:1,rotation:-12.8,x:246.9,y:459.3},0).wait(1).to({regX:4.7,scaleX:1,scaleY:1,rotation:-8,x:238.1,y:462},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.5,x:229.4,y:464.7},0).wait(1).to({regX:4.8,rotation:1,x:220.8,y:467.4},0).wait(1).to({regX:4.7,scaleX:1,scaleY:1,rotation:5.7,x:212,y:470},0).wait(1).to({rotation:-1.1,x:224.1,y:468.1},0).wait(1).to({rotation:-8,x:236.1,y:466.2},0).wait(1).to({rotation:-15,x:248.1,y:464.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22,x:260.1,y:462.4},0).wait(1).to({rotation:-29,x:272.1,y:460.5},0).wait(1).to({rotation:-35.9,x:284,y:458.6},0).wait(1).to({regY:23.2,scaleX:1,scaleY:1,rotation:-42.9,x:296.1,y:456.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-40.1,x:290.6,y:461.2},0).wait(1).to({rotation:-37.1,x:285.2,y:465.7},0).wait(1).to({rotation:-34.1,x:279.7,y:470.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-31.4,x:274.2,y:474.7},0).wait(1).to({regX:4.6,scaleX:1,scaleY:1,rotation:-28.3,x:263.5,y:474.5},0).wait(1).to({regX:4.7,rotation:-25.6,x:252.8,y:474.1},0).wait(1).to({rotation:-22.6,x:242.2,y:473.8},0).wait(1).to({regX:4.6,scaleX:1,scaleY:1,rotation:-19.8,x:231.5,y:473.4},0).wait(1).to({rotation:-12.5,x:225.7,y:461.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-5.3,x:219.8,y:450.5},0).wait(1).to({regX:4.7,regY:23.3,scaleX:1,scaleY:1,rotation:1.7,x:213.9,y:439},0).wait(1).to({rotation:1.3,x:218.5,y:441.3},0).wait(1).to({rotation:0.8,x:223.1,y:440.8},0).wait(1).to({rotation:0.3,x:227.6,y:440.4},0).wait(1));

	// дорога2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(208,231,252,0.502)").s().p("AmFBbIgDgTQgCgVB5gZQEig9A0gNIDQgWQBcgmAYAjQhgAfkUA8QkcBAhgAJgAj1AjIglAGQA2gFACgHIgTAGg");
	this.shape.setTransform(413.5,625.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(208,231,252,0.502)").s().p("Al2BbIgCgTQgCgVB0gZQEXg9AxgNIDIgWQBZgmAWAjQhcAfkJA8QkRBAhcAJgAkPApQA0gFACgHg");
	this.shape_1.setTransform(412,625.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(208,231,252,0.502)").s().p("AlmBbIgCgTQgCgVBvgZQELg9AwgNIDAgWQBUgmAWAjQhYAfj+A8QkGBAhYAJgAkDApQAygFACgHg");
	this.shape_2.setTransform(410.5,626);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(208,231,252,0.502)").s().p("AlXBbIgCgTQgBgVBqgZQEAg9AtgNIC3gWQBSgmAUAjQhUAfjzA8Qj7BAhUAJgAj4ApQAwgFABgHg");
	this.shape_3.setTransform(409.1,626.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(208,231,252,0.502)").s().p("AlHBbIgCgTQgCgVBmgZQD0g9ArgNICvgWQBOgmATAjQhQAfjoA8QjvBAhRAJgAjOAjIgfAGQAugFABgHIgQAGg");
	this.shape_4.setTransform(407.6,626.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(208,231,252,0.502)").s().p("AlYBMQgCgVBqgbQD/g/AtgOIC4gXQBRgnAUAjQhTAgjzA+Qj6BChUAKIgbAAgAj4ArQAwgFACgHg");
	this.shape_5.setTransform(381.4,633.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(208,231,252,0.502)").s().p("AlnBPQgCgVBugcQEKhCAvgOIDAgZQBUgoAWAjQhXAhj+BBQkEBEhYALIgcAAgAkDAtQAygGACgHg");
	this.shape_6.setTransform(355.2,640.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(208,231,252,0.502)").s().p("Al2BSQgCgVBzgdQEVhEAxgOIDHgbQBYgpAXAjQhbAhkIBDQkOBHhcAMIgdAAgAkOAwQA0gHACgHg");
	this.shape_7.setTransform(328.9,647.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(208,231,252,0.502)").s().p("AmFBVQgCgUB3geQEghHAzgPIDQgdQBbgpAYAiQheAjkTBFQkZBKhgAMIgeABgAj0ArIgkAHQA2gHABgHIgTAHg");
	this.shape_8.setTransform(302.7,654.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(208,231,252,0.502)").s().p("AmBBhQgDgUB2giQEdhQAygQIDOgkQBZgsAaAhQhdAmkQBOQkVBShfAPIgeACg");
	this.shape_9.setTransform(288.6,658.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(208,231,252,0.502)").s().p("Al8BtQgEgUB1gmQEZhZAygSIDLgqQBYgvAbAgQhcApkLBXQkTBbheASIgeADg");
	this.shape_10.setTransform(274.4,661.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(208,231,252,0.502)").s().p("Al4B5QgFgUB0gqQEVhiAxgTIDKgyQBWgxAcAfQhaAskIBfQkPBlheAVIgdAEg");
	this.shape_11.setTransform(260.3,665.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(208,231,252,0.502)").s().p("Al0CFQgFgUBygtQEShsAwgVIDJg3QBUg1AdAfQhZAukFBoQkLBthdAZIgdAFg");
	this.shape_12.setTransform(246.1,669.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(208,231,252,0.502)").s().p("AlwCRQgGgTBxgxQEPh1AvgXIDHg+QBSg4AfAeQhYAxkCBxQkHB2hdAcIgdAGg");
	this.shape_13.setTransform(232,673.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(208,231,252,0.502)").s().p("AlrCdQgGgTBug1QEMh+AvgYIDEhFQBSg7AfAdQhWA0j+B6QkFB/hcAfIgcAHg");
	this.shape_14.setTransform(217.8,676.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(208,231,252,0.502)").s().p("AlnCpQgHgTBtg5QEIiHAugaIDDhMQBQg9AgAcQhUA3j7CDQkBCIhbAiIgdAHgAjkBeIgiAQQA0gTgBgHIgRAKg");
	this.shape_15.setTransform(203.7,680.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(208,231,252,0.502)").s().p("AlvCSQgGgUBxgxQEOh1AvgXIDHg/QBSg3AeAeQhXAxkBBxQkHB3hdAcIgdAFg");
	this.shape_16.setTransform(219.7,676.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(208,231,252,0.502)").s().p("Al3B6QgFgUBzgpQEVhkAxgTIDJgyQBWgyAcAfQhaAskHBgQkOBlheAWIgdAEg");
	this.shape_17.setTransform(235.7,672.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(208,231,252,0.502)").s().p("Al/BiQgDgUB2giQEbhSAygQIDNglQBYgsAaAhQhdAmkNBPQkUBUhfAPIgeADgAkUA7QA1gIABgIg");
	this.shape_18.setTransform(251.6,668.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(208,231,252,0.502)").s().p("AmHBMQgCgVB5gbQEig/AzgNIDQgYQBcgnAXAjQhfAgkUA+QkbBChgAKIgeAAgAj0AlIglAGQA2gFACgHIgTAGg");
	this.shape_19.setTransform(267.6,665);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(208,231,252,0.502)").s().p("AmHBMQgCgVB5gbQEig/AzgNIDQgYQBcgnAXAjQhfAgkUA+QkbBChgAKIgeAAg");
	this.shape_20.setTransform(274.9,662);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(208,231,252,0.502)").s().p("AmHBLQgCgVB4gaQEjg/AzgNIDQgYQBcgnAXAjQhfAgkUA+QkbBChgAJIgeABgAkaArQAwgFAIgHQgkAJgUADg");
	this.shape_21.setTransform(313.4,649);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(208,231,252,0.502)").s().p("AmEBdIgDgSQgCgVB5gaQEig/AzgNIDQgXQBcgnAXAjQhfAgkUA9QkbBChgAJg");
	this.shape_22.setTransform(330.1,645.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(208,231,252,0.502)").s().p("AmHBKQgCgVB4gaQEjg+AzgNIDQgXQBcgnAXAjQhfAgkUA9QkbBBhgAJIgeABg");
	this.shape_23.setTransform(346.8,641.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(208,231,252,0.502)").s().p("AmHBKQgCgVB4gaQEjg+AzgNIDQgXQBcgnAYAkQhgAfkUA9QkbBBhgAJIgeAAg");
	this.shape_24.setTransform(363.4,637.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(208,231,252,0.502)").s().p("AmFBcIgCgTQgCgVB4gZQEig+AzgNIDRgXQBcgmAXAjQhfAfkUA9QkcBBhgAJg");
	this.shape_25.setTransform(380.1,633.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(208,231,252,0.502)").s().p("AmFBbIgCgSQgCgVB4gaQEjg9AzgNIDQgWQBcgnAYAkQhgAfkUA8QkcBAhgAJgAkaApQA3gFACgHg");
	this.shape_26.setTransform(396.8,629.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19,p:{x:267.6,y:665}}]},1).to({state:[{t:this.shape_20,p:{x:274.9,y:662}}]},1).to({state:[{t:this.shape_20,p:{x:282.2,y:658.9}}]},1).to({state:[{t:this.shape_20,p:{x:289.4,y:655.9}}]},1).to({state:[{t:this.shape_19,p:{x:296.7,y:652.9}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(1));

	// дорога
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(208,231,252,0.502)").s().p("AjnB5QgHgUBGgpQCphiAegTICAgyQAwgxAZAfQg1ArigBfQikBjg8AVIgTAFgAiTBBIgWAKQAhgMAAgGIgLAIg");
	this.shape_27.setTransform(121.7,674.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(208,231,252,0.502)").s().p("AkLB7IgEgMQgFgRA5gcIAWgLIADgCIDphsIADgBICQgrIAGgDQA3gqAZAdIgBADQhAAoi5BWIgHACIg9AdQiKBAg5APIgGABIgQADgAisA7IgSAHIATgGIAMgIIgNAHg");
	this.shape_28.setTransform(147.1,668.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(208,231,252,0.502)").s().p("AkyBzIgEgOIAAAAQgEgRBCgbIAbgKIACgBQDghSArgRIADgBICiglIAIgDQBBgoAZAdIAAADQhJAmjUBOIgIADIhIAaQieA6hBAOIgGABIgSACgAjhA9QARgEAMgEIAAAAIABAAIAHgDIgIADIgdAIg");
	this.shape_29.setTransform(172.5,662.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(208,231,252,0.502)").s().p("AlbBrIgDgQIAAgBQgDgRBLgZIAfgJIABAAQD8hKAygQIADgBIC0gfIAJgCQBNgnAZAeIABACQhUAjjvBIIgJACIhRAZQiyA0hJAMIgHABIgUABgAjcAuIghAIIAggHIAQgGg");
	this.shape_30.setTransform(198,656.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(208,231,252,0.502)").s().p("AmGBQQgCgRBVgXIAigJQEihDAzgOIDQgaQBbgoAYAjQhfAhkTBBIhcAXQjPAxhPAJIgeAAgAj0AnIglAHQAcgDAOgDQANgDABgEIgTAGg");
	this.shape_31.setTransform(223.5,651.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(208,231,252,0.502)").s().p("AmFBQQgCgRBVgXIAigJQEchBA3gPIADgBIDLgZIAFgBQBVgmAaAeIACADQhfAhkMBAIgIACIhaAWQjPAxhPAJIgeAAgAjzAoIglAGIAAAAQAVgCAWgFQAKgCACgCIAAAAIgSAFg");
	this.shape_32.setTransform(224,650.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(208,231,252,0.502)").s().p("AmCBiIgDgSQgCgSBVgXIAigIQEdhCA2gPIAEAAIDLgZIAFgCQBWglAZAeIgBAEQhgAgkLBAIgIACIhZAWQjOAxhPAJIgeAAgAj7ApIAHgBIABAAIAGgCIAMgEIgSAGIgIABg");
	this.shape_33.setTransform(224.7,650.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(208,231,252,0.502)").s().p("AmDBiIgDgSQgCgSBWgXIAigIQEfhDA0gOIAEAAIDMgaIAFgBQBWgmAZAhIgEACQhhAhkKBAIgIACIhYAVQjOAxhPAJIgeAAgAkZAuIABAAIABAAIAjgGIATgHIgNAEIgpAJIgCAAg");
	this.shape_34.setTransform(225.4,649.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(208,231,252,0.502)").s().p("AmGBQQgDgVB4gcQEhhDA0gOIDQgaQBbgoAYAjQhfAhkTBBQkbBGhfALIgeAAgAj1AnIgkAHQA2gGACgHIgUAGg");
	this.shape_35.setTransform(226.1,649.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(208,231,252,0.502)").s().p("AmGBQQgDgVB4gcQEhhDA0gOIDQgaQBbgoAYAjQhfAhkTBCQkbBFhfALIgeABgAkZAuQA2gGACgHg");
	this.shape_36.setTransform(254.5,641.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(208,231,252,0.502)").s().p("AmGBQQgDgVB4gcQEhhDA0gOIDQgaQBbgoAYAjQhfAhkTBBQkbBGhfALIgeAAgAkZAuQA2gGACgHg");
	this.shape_37.setTransform(282.9,633.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(208,231,252,0.502)").s().p("AmGBQQgDgVB4gcQEhhDA0gOIDQgaQBbgoAYAjQhfAhkTBCQkbBFhfALIgeABgAj1AoIgkAGQA2gGACgHIgUAHg");
	this.shape_38.setTransform(425,593.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(208,231,252,0.502)").s().p("AlwBeIgCgSQgCgVBygbQESg/AxgOIDFgXQBXgoAXAkQhbAfkFA/QkNBChaAKgAkLArQA0gFACgHg");
	this.shape_39.setTransform(422.4,592.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(208,231,252,0.502)").s().p("AlcBaIgDgTQgBgVBsgZQEEg8AugNIC7gVQBSgmAVAjQhWAfj3A7Qj/A/hWAJgAj8AoQAwgFACgHg");
	this.shape_40.setTransform(419.8,591.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(208,231,252,0.502)").s().p("AlJBVIgCgTQgBgVBmgXQD2g5ArgMICwgTQBOglATAjQhRAejqA5QjwA7hRAIgAjuAlQAugFACgHg");
	this.shape_41.setTransform(417.2,590.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(208,231,252,0.502)").s().p("Ak2BRIgBgTQgBgVBggWQDng1ApgMIClgQQBKgkARAjQhMAdjcA1QjiA4hMAHgAjCAdIgeAFQAsgEABgHIgPAGg");
	this.shape_42.setTransform(414.7,589.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(208,231,252,0.502)").s().p("AlJBVIgCgSQgBgVBmgYQD2g5ArgMICwgTQBOglATAkQhRAejqA4QjwA7hRAIgAjuAlQAugEACgHg");
	this.shape_43.setTransform(391.8,596.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(208,231,252,0.502)").s().p("AlcBaIgDgTQgBgVBsgZQEEg8AugNIC7gVQBSgmAVAjQhWAfj3A7Qj/A/hWAJgAj8AoQAxgFABgHg");
	this.shape_44.setTransform(369,603.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(208,231,252,0.502)").s().p("AlyBMQgCgVBygbQEThAAwgNIDFgXQBXgoAWAkQhZAgkGA+QkMBChbAKIgdAAgAkLArQA0gFACgHg");
	this.shape_45.setTransform(346.2,610.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(208,231,252,0.502)").s().p("AmGBQQgCgVB4gcQEhhDAzgOIDQgaQBbgoAYAjQheAhkTBBQkbBGhgALIgeAAgAj0AnIglAHQA3gGACgHIgUAGg");
	this.shape_46.setTransform(323.3,618);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(208,231,252,0.502)").s().p("AlvBWQgDgVBwgeQERhIAwgOIDEgdQBVgqAYAiQhYAjkDBGQkJBJhbANIgdABgAkJAyQAxgGAEgHg");
	this.shape_47.setTransform(294.5,626.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(208,231,252,0.502)").s().p("AlYBcQgEgVBpgfQEAhMAsgQIC6ggQBOgrAZAiQhTAjjyBKQj5BOhWAOIgaACgAj5A3QAugHADgHg");
	this.shape_48.setTransform(265.7,634.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(208,231,252,0.502)").s().p("AlCBhQgEgUBigiQDuhQAqgQICugkQBIgsAZAhQhMAljiBOQjoBShRAQIgZACgAjpA7QAsgJACgHg");
	this.shape_49.setTransform(236.9,642.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(208,231,252,0.502)").s().p("AkrBnQgFgUBbgjQDdhVAngRICignQBCguAZAhQhGAnjSBSQjXBWhLARIgYADgAjZA/QApgJACgHg");
	this.shape_50.setTransform(208.1,650.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(208,231,252,0.502)").s().p("AkUBtQgGgUBUglQDMhZAjgSICYgrQA7gvAaAhQhBAojBBWQjHBbhGASIgWAEgAjKBDQAngKABgHg");
	this.shape_51.setTransform(179.3,658.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(208,231,252,0.502)").s().p("Aj9BzQgHgUBNgnQC7heAggSICMguQA2gwAZAfQg7AqiwBaQi2BfhBAUIgUAEgAi5BHQAkgLAAgHg");
	this.shape_52.setTransform(150.5,666.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:254.5,y:641.4}}]},1).to({state:[{t:this.shape_37,p:{x:282.9,y:633.4}}]},1).to({state:[{t:this.shape_36,p:{x:311.3,y:625.4}}]},1).to({state:[{t:this.shape_37,p:{x:339.8,y:617.5}}]},1).to({state:[{t:this.shape_36,p:{x:368.2,y:609.5}}]},1).to({state:[{t:this.shape_37,p:{x:396.6,y:601.5}}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.2,49.9,384.6,638.3);


// stage content:
(lib._11111111111111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// с новым годом
	this.instance = new lib.сновымгодом();
	this.instance.parent = this;
	this.instance.setTransform(167.3,105.7,1,1,0,0,0,156.3,78.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));



	// человек
	this.instance_2 = new lib.человек();
	this.instance_2.parent = this;
	this.instance_2.setTransform(383.2,355,1,1,0,0,180,371.4,380.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// собака
	this.instance_3 = new lib.собака();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.9,471.3,1,1,0,15.7,-164.3,133.6,83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// все следы
	this.instance_4 = new lib.всеследы();
	this.instance_4.parent = this;
	this.instance_4.setTransform(289.3,350,1,1,0,0,180,406.2,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// луна
	this.instance_5 = new lib.луна();
	this.instance_5.parent = this;
	this.instance_5.setTransform(641.2,35.6,1,1,0,0,180,18.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// земля_11
	this.instance_6 = new lib.земля_11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10.3,1519.6,1,1,0,0,180,1143.9,1275.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// земля_22
	this.instance_7 = new lib.земля_22();
	this.instance_7.parent = this;
	this.instance_7.setTransform(474.4,1365.7,1,1,0,0,180,1231.8,1257.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// fon2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#9DC0E5"],[0,0.667],-2.7,-50.5,3.9,76.2).s().p("A4VAnQFgiXGThRQGfhTG2AAQGYAAGEBIQF4BGFPCEQsNEXtGAAQsCAArWjug");
	this.shape.setTransform(356.2,700);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#9DC0E5","#3E80C2"],[0,0.667,1],0,529.8,0,-529.7).s().p("EgkGBKgQweoArnuPQo4q5kxtJQk8tnAAuoQAAlQAplJQB6vHHKtaQG/tGLIp4QLLp7N4lZQOXlkPiAAQQ1AAPZGgQO2GSLeLdQLdLeGSO2QGgPZAAQ0QAACRgICXQgGBmgLB9QhhPfnDN2Qm3NdrNKOQrQKRuFFkQumFxv1AAQzEAAxCoRg");
	this.shape_1.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-767.2,170.3,2817.7,2850.3);
// library properties:
lib.properties = {
	id: '76556311BF7CB949BD5BE262E87A6129',
	width: 700,
	height: 700,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['76556311BF7CB949BD5BE262E87A6129'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;