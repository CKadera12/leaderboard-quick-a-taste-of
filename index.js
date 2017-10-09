(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,728,90],[208,92,147,90],[357,161,103,30],[357,92,146,67],[0,92,206,90]]}
];



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



(lib.leaderboardatasteoftable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardatasteof = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardcranberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardpotatoes = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardturkey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
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


(lib.trynewflavors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBJIgPgCIgEACIgFABIgCgBIgDgCQgEgDgFgMQgEgLAAgKQAAgFACgDQADgEAEABQAGAAAGALIAGAJQAFAFAGAEQAIACAIAAQAJABAFgFQAGgEgBgJQABgMgXgLIgIgEQgXgKgHgJQgIgJAAgNQAAgTANgMQANgLAUAAIAJAAIAKACIAHgCIAEgBQAHAAAHALQAGALAAANQAAAFgCACQgCADgEAAQgDAAgDgCIgIgLQgFgIgGgEQgFgDgJAAQgGAAgFAEQgGAGAAAHQAAAGAGAFQAEAFARAJIACAAQAnATAAAXQAAATgPAOQgPANgWAAg");
	this.shape.setTransform(99.8,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBGQgGgCAAgHQgBgEAHgDIAEgCQADgCACgEQABgFAAgLIAAgJIAAgMIAAgIQAAgZgBgIQgBgIgDgBIgHgDQgIgCAAgFQAAgEADgCQACgCAGgDIAUgGIAMgCQAHAAACATIAAADIABAAQAHgLAIgGQAIgGAIAAQAKAAAFAGQAGAGAAAJQAAAKgEAGQgEAGgJAAIgHgCIgFgEIgEgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgKAAgEANQgDAOAAAqQAAAMABAGQACAGAEACIAFACQAJADAAAFQAAAGgIACQgIACgTAAQgVAAgHgCg");
	this.shape_1.setTransform(88.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzA0QgTgUgBgfQAAggAWgUQAVgWAeAAQAfAAAUAVQASATABAfQAAAggVAVQgVAXgeAAQgeAAgVgWgAgagpQgIALgBATQAAAbAMATQAMASARABQANAAAIgMQAJgMAAgSQAAgbgLgTQgMgSgRAAQgOAAgIALg");
	this.shape_2.setTransform(75.1,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOA7QgJgOgTguIgIgVQgLgagGgDIgEgCQgIgEAAgFQAAgFAHgDQAHgCAXAAQATAAAHACQAHADAAAFIgBAFIgDACIgEACQgGADAAADIADALIALAbIALAbQADAGACAAQACAAACgEIAHgMIAPgjQAFgNAAgFIgBgFIgDgDIgEgCQgHgCAAgFQAAgFAHgDQAGgCARAAQAPAAAGACQAGADAAAFQAAAGgHACIgFACQgHADgMAbIgDAJIgGANQggBJgIAAQgGAAgIgOg");
	this.shape_3.setTransform(60,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZBCIgIgHIgGADQgRAMgRAAQgUAAgNgMQgNgMAAgUQAAgWARgMQAQgMAdAAQAHAAADACQAEACAAAFQAAAIgJAAQgOAAgJAGQgIAHAAAMQAAALAHAHQAIAGAMAAQANAAAGgFQAGgHAAgOIAAg1QAAgNgGgGQgFgHgJAAQgHABgGADQgGACgGAHIgDADQgIALgKAAQgFAAgDgEQgEgDAAgGQAAgOARgJQAQgIAagBQAOABAMAEQALAEAGAHQAEAGACAJQACAIAAAUIAAAtQAAAIABAEQABAEADABIAFABQAJACAAAFQAAAHgKAFQgJAGgNAAQgGAAgHgIg");
	this.shape_4.setTransform(45.3,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXBlQgHgCAAgGQAAgFAGgCIAHgEQADgDABgIIABgcIgBgWIAAgaIAAgKQAAgkgBgKQgBgLgDgBIgJgDQgJgDAAgFQAAgDADgDQADgCAKgDIATgGIANgCQAFABABACQACADAAAGIAAALQgCAzAAAyIABAvQABAKACAEIAIAEQAHACAAAGQAAAFgHACQgHACgTAAQgUAAgHgCg");
	this.shape_5.setTransform(33.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBlQgHgDgBgGQAAgGAIgDQAHgCACgDQACgCABgWIABg2IgBgzQgBgWgCgDQgCgCgHgDQgIgDAAgGQAAgFAHgCQAGgCAZAAIBVAAIAOgCIAIgBIADABIACACQADAFADAKQADAKgBAGQAAAHgBADQgDADgEAAQgFAAgGgJIgEgHQgDgEgHgDQgGgCgJAAIgTAAQgNAAgHACQgHABgDAEQgCACgBAKIgBAbIAAALQAAAHABABQABACAEAAIAWAAQAMAAAEgDQAFgDABgJIAAgDQADgOAHAAQAGAAACAHQADAIAAAbQAAAagDAHQgCAIgGAAQgIAAgCgPIAAgCQgBgJgFgDQgEgDgMAAIgWAAQgDAAgBACQgCACAAAJIAAALIABAoQABAIACACIAHADQAJADAAAGQAAAGgIADQgJACgVAAQgXAAgIgCg");
	this.shape_6.setTransform(21.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAIAPIgQgrQgIgUgHgDIgEgCQgIgEAAgFQAAgFAHgDQAHgCAWAAQATAAAHACQAHADAAAFIgBAFIgDACIgFACQgFADAAADIACAJIAMAdIAMAbQADAGACAAQACAAACgEIAHgMIAPgjQAFgNAAgFIgBgFIgDgDIgEgCQgHgCAAgFQAAgFAHgDQAGgCARAAQAPAAAGACQAGADAAAFQAAAGgHACIgFACQgHADgMAdIgEAHIgFANQggBJgKAAQgJAAgZg6gAhSAIIgEgJIgJgXQgJgYgHgDIgEgCQgIgEAAgFQAAgFAHgDQAHgCAXAAQATAAAHACQAHADAAAFIgBAFIgDACIgEACQgGADAAADIADAMIALAaIALAaQAEAHACAAQAEAAAEgIIAFgKIADgFQACgBADAAQADAAACACQACACAAADQAAAEgEAIQgOAggHALQgGALgFAAQgKAAgchBg");
	this.shape_7.setTransform(-6.4,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtA1QgUgUAAgfQAAggAUgVQAVgVAfgBQAbABARAPQAPAPAAAbQAAAJgDACQgCADgKAAIg2AAQgEAAgDgCQgCgDAAgEQAAgDACgCQADgCAEAAIAdAAIAHgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAgBQAAgNgJgJQgKgKgMAAQgQAAgJAPQgIAPAAAVQAAAVALAPQAMAQAQAAQALAAAHgBQAHgDAHgFIAFgDQAHgHAEABQADAAACABQACACAAAEQABADgEAFQgEAFgFAFQgNAJgMAFQgLAEgNABQgdAAgUgVg");
	this.shape_8.setTransform(-25.6,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANAmIgFgFIgegmIgdgkIgMgNIAAAJIAAATIAAANQAAA+ACAPQACAPAEABQAEAAAEADQAEADAAAEQAAAGgHADQgGACgRAAQgRAAgHgCQgGgDAAgGQAAgFAHgDQAIgDABgDQACgCABgUIABg4IgBg0QgBgUgCgEQgBgBgIgEQgHgDAAgFQAAgFAGgCQAHgDARAAIAQAAIAFADIAUAYIAdAkIAeAnIAWAaIAOARIABgGIAAgLIgBhFQAAgdgCgFIgCgCIgDgDQgIgDgCgCQgCgCAAgDQAAgFAGgDQAGgCATAAQARAAAGACQAGADAAAFQAAADgBACIgGADIgDACQgGACgBADQgBAGgBAcIgBBUIAAAbIABARQAAALgCADQgBACgEAAQgPAAgyhAg");
	this.shape_9.setTransform(-43.9,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBdQgGgGAAgJQAAgHAFgFQAFgFAHAAIAGABIAFADIADAGQAEAFADAAQAGAAAIgKQAHgLAAgLQABgMgLgWIgBgDIgXgxIgMgbQgDgFgIgEQgFgCgCgCQgBgCAAgDQAAgGAHgCQAIgDAUAAQAUAAAIACQAGADABAFIgCAFIgCACIgFADQgFACgBACIADALIAMAcIALAaQADAHACAAQACAAACgGIAKgXIAKgcQADgKABgDQgBgEgHgFQgJgEABgEQAAgFAGgCQAGgCAQAAQARAAAHACQAFADAAAFQABAFgJACIgFACQgJAFgIAYIgFALIgSAsQgWA7gPARQgPASgUAAQgKAAgIgGg");
	this.shape_10.setTransform(-69.7,6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqBGQgGgCgBgHQAAgEAHgDIAEgCQADgCACgEQABgFAAgLIAAgJIAAgMIAAgIQAAgZgBgIQgBgIgDgBIgHgDQgIgCAAgFQAAgEADgCQACgCAGgDIATgGIANgCQAHAAACATIAAADIABAAQAHgLAIgGQAIgGAIAAQAKAAAFAGQAGAGAAAJQAAAKgEAGQgEAGgJAAIgHgCIgFgEIgEgGQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgKAAgEANQgDAOAAAqQAAAMABAGQACAGAEACIAFACQAJADAAAFQAAAGgIACQgIACgTAAQgVAAgHgCg");
	this.shape_11.setTransform(-81.9,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBkQgIgCAAgGQAAgGAIgDQAHgDACgCQABgCABgYIABhCIAAglIgCgWQAAgEgCgBIgJgBIgGAAQgJAAgGACQgFACgEAGIgFAJIgEAKIgEAEIgFACQgEAAgCgEQgCgEAAgIQAAgTAFgLQAEgMAHAAIABABQALABARAAIBSAAQARAAAMgBIABgBQAHAAAFAMQAEALAAATQAAAIgCAEQgCAEgFAAIgEgCIgEgEIgEgKIgFgJQgEgGgFgCQgGgCgKAAIgFAAIgJABQgCABAAAEIgCAXIAAAkIABBCQABAYABACQACACAHADQAIADAAAGQAAAGgIACQgIADgWAAQgVAAgIgDg");
	this.shape_12.setTransform(-96.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.trynewflavors, new cjs.Rectangle(-108,-18.7,216,37.5), null);


(lib.tastingeventnearyou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOArQgHgDgGgFQgFgFgDgHIgCgHIgBgIIAAgXIAAgZIABgCIADgCIAEAAIACAAIAEABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAtQAAAFACAEQABAFADAEQADADAEACQAFACAEAAQAGAAAEgCQAEgCADgDQADgEABgFQACgEAAgFIAAgtQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAEgBIADgBIADABIADABIABADIAAAwIgBAIIgCAHQgDAHgFAFQgGAFgHADQgHADgIAAQgHAAgHgDg");
	this.shape.setTransform(80.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_1.setTransform(70.7,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAuIgDAAIgCAAIgCgCIAAgCIAAgeIgBgGIgCgEIgZgnIAAgBIABgCIACgCIAEgCIADgBIACABIACACIASAdIACABIABAAIACAAIACgBIARgdIACgCIAEgBIACAAIADACIAEACIABACIAAABIgBABIgZAnIgCAFIgBADIAAABIAAAfQgCADgCABg");
	this.shape_2.setTransform(61.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAtIgCgBIgBgBIgCgBIgPgXIgCgDIgEgBIgKAAIgEABIgCADIABAWQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCABIgEABIgDAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAhQQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIAlAAQAHAAAGACQAFADAFADQAEAEACAGQADAFAAAHQAAAIgEAEQgCAEgDADIgHAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIAAACIADAFIAFAHIAFAHIACAFIgBACIgDACIgDABIgDABgAgRgbQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAAUQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIADAAIASAAIAHAAIAEgDQADgBABgDQABgDABgEQAAgHgGgEIgEgCIgHgBIgSAAIgDABg");
	this.shape_3.setTransform(49.6,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjAsIgDAAIgEAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAIgFgMIgBgCIgDgBIgdAAIgBABIgBAAIgBABIgBABIgFAMIgCACIgCAAIgDABIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACgBIAEAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBSIAAABIgBABIgDABgAAAgNIgBABIgBACIgCAEIgCAFIgCAFIgCADIAAACIAAACIACABIARAAIACgBIABgCIgCgDIgDgHIgDgHIgCgEIgCgBg");
	this.shape_4.setTransform(40.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgBgCIAAhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA9AAIABACIABACIAAAEIAAACIAAADIgCACIgtAAIgDACIgBADIAAALIABAEIADABIAdAAIABABIABACIABAEIAAACQAAAEgEAAIgbAAIgDACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAtAAQACABAAADIAAAEIAAADIgBADIgCABg");
	this.shape_5.setTransform(32.3,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBACIAAAtIgDADIgFABIgFAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEABACADIAjAuIACABIACAAIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABADIAABUIgCADIgEABg");
	this.shape_6.setTransform(23,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgBgEIAAgDIABgDIABgCIADgBIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_7.setTransform(10.9,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBACIAAAtIgDADIgFABIgFAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEABACADIAjAuIACABIACAAIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABADIAABUIgCADIgEABg");
	this.shape_8.setTransform(2.7,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgBgCIAAhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIA9AAIACACIABACIAAAEIAAACIAAADIgDACIgsAAIgDACIgBADIAAALIABAEIADABIAdAAIABABIACACIAAAEIAAACQAAAEgEAAIgcAAIgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAsAAQADABAAADIAAAEIAAADIgBADIgCABg");
	this.shape_9.setTransform(-5.8,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBArIgDgGIgDgKIgGgMIgHgOIgFgNIgGgMIgDgJIgCgEIACgDIADgCIADgBIADAAIADABIACADIASArIACABIAAABQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIASgsQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIADgBIAEAAIADABIACACIACADIgCAEIgEAJIgFAMIgFANIgHAPIgGANIgEAKIgCAFIAAABIgCABQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_10.setTransform(-14.4,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgBgCIAAhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIA+AAIABACIABACIAAAEIAAACIAAADIgCACIgtAAIgDACIgBADIAAALIABAEIADABIAdAAIABABIABACIABAEIAAACQAAAEgEAAIgbAAIgDACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAtAAQACABAAADIAAAEIAAADIgBADIgCABg");
	this.shape_11.setTransform(-22.1,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAtIgIgDIgIgDIgIgGIgFgHIgFgHQgDgJAAgKIAAgIIADgJQAEgJAGgGIAIgFIAIgEIAIgDIAJgBQAFAAAFACIAKACQAJAFAHAHIAAACIgBADIgDADIgDACIgDACIgEgCIgFgEIgHgFQgEgCgGAAQgFABgGACQgFACgEAEQgFAFgCAFQgCAGAAAFQAAAGACAGQACAFAFAEQAEAEAFADQAGACAFABIAGgBIAGgBIAGgEQACgBACgDIAAgBIgBgDIgDgBIgQAAIgCgBIgBgDIAAgDIAAgDIAAgDQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAlAAIABABIABABQACADAAAFIAAADIgBAEIgHAMQgEAFgGAEQgFADgHACQgGACgHAAIgJgBg");
	this.shape_12.setTransform(-35.9,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaAuQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgjgxIgDgBIgCABIgBACIAAAtIgDADIgFABIgFAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAhSIABgDIACgBIADgBIADAAQAEABACADIAjAuIACABIACAAIABgBIAAgtIACgCIADgBIADAAIADAAQAEAAABADIAABUIgCADIgEABg");
	this.shape_13.setTransform(-45.6,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAuIgCAAQgEAAgBgDIAAhUIACgCIADgBIACAAIADAAQAEAAABADIAABTIgCADIgDABg");
	this.shape_14.setTransform(-52.1,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgDIABgDIABgCIADgBIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_15.setTransform(-57.7,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAqQgKgDgHgHIgBgCIAAgBIABgDIADgDIADgCIADgBIAEABIAGAEIAHAEQAEABAGAAIAGAAIAHgCIAFgEQACgDAAgEQAAgDgCgCQgDgDgDgBIgKgBIgJgCIgKgCQgFgBgEgCQgEgDgDgEQgCgFAAgGQAAgHADgFQAEgFAFgEQAFgDAHgBIALgCIAJABIAIACIAJADIAHAFIAAACIABABIgBADIgDADIgDACIgEABIgCAAQgFgEgFgDQgFgCgGAAIgGAAIgGACIgEAEQgCACAAAEQAAAFAEACIAKADIANACQAHABAHACQAGADAEADQAFAFAAAJQgBAIgDAGQgEAFgFAEQgGADgHACIgMACQgKAAgJgEg");
	this.shape_16.setTransform(-65.6,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjAsIgDAAIgEAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAIgFgMIgBgCIgDgBIgdAAIgBABIgBAAIgBABIgBABIgFAMIgCACIgCAAIgDABIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACgBIAEAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBSIAAABIgBABIgDABgAAAgNIgBABIgBACIgCAEIgCAFIgCAFIgCADIAAACIAAACIACABIARAAIACgBIABgCIgCgDIgDgHIgDgHIgCgEIgCgBg");
	this.shape_17.setTransform(-74.2,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgBgEIAAgDIABgDIABgCIADgBIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_18.setTransform(-82.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tastingeventnearyou, new cjs.Rectangle(-87.8,-8.4,175.6,16.9), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.leaderboarddatefive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBeQgPgFAAgJQAAgDADgDQABgCADAAIAPAFQANAEANAAQARAAAKgLQAKgLAAgTQAAgNgIgIQgIgIgUgHQgKgDgPgCQgPgEgBgEQAAgGAFgRIALgqIAHgRIADgGIAFgCIAJAAIBTAAQgEATgEAFQgFAGgNAAIguAAIgLABIgFACQgDAEgDAKQgDAKAAAIQAAAEAOADIARAEQAgAJAOANQANANgBAXQABAdgVASQgVASgfAAQgXAAgNgGg");
	this.shape.setTransform(54.6,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAPQgEAAgCgCQgCgCAAgDIABgHIADgHQACgEACgBQACgCAGAAIAHAAIAMAAIAYAAIAEgBQAEAAACACQACACAAADQAAAIgEAGQgFAHgGAAIgHAAIgIgBIgeACIgDAAg");
	this.shape_1.setTransform(34,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBrQgJAAgBgBQgBgBAAgHIAAgqIhOAAQgMAAgDgCQgCgCAAgFQAAgLAqg4IALgPIAKgOQApg5ALAAQAHAAACAEQADADAAAKIAAB6IAOAAQAFAAACABQABABAAAFIAAAKQAAAEgBABQgCABgFAAIgOAAIAAAqQAAAHgCABQgBABgJAAgAgOgOQgSAWgPAZIBEAAIAAhdQgTAVgQAZg");
	this.shape_2.setTransform(13.4,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_3.setTransform(-5.9,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOA7QgJgOgTguIgIgVQgLgagGgDIgEgCQgIgEAAgFQAAgFAHgDQAHgCAXAAQATAAAHACQAHADAAAFIgBAFIgDACIgEACQgGADAAADIADALIALAbIALAbQADAGACAAQACAAACgEIAHgMIAPgjQAFgNAAgFIgBgFIgDgDIgEgCQgHgCAAgFQAAgFAHgDQAGgCARAAQAPAAAGACQAGADAAAFQAAAGgHACIgFACQgHADgMAbIgDAJIgGANQggBJgIAAQgGAAgIgOg");
	this.shape_4.setTransform(-17,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyA0QgVgUABgfQAAggAVgUQAVgWAfAAQAeAAATAVQAUATAAAfQgBAggUAVQgVAXgeAAQgfAAgTgWgAgagpQgJALABATQAAAbALATQAMASAQABQAOAAAJgMQAIgMAAgSQAAgbgMgTQgMgSgQAAQgNAAgJALg");
	this.shape_5.setTransform(-32.3,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMAmIgEgFIgegmIgdgkIgLgNIgBAJIAAATIAAANQAAA+ACAPQABAPAFABQAEAAAEADQAEADAAAEQAAAGgHADQgHACgQAAQgRAAgGgCQgHgDAAgGQAAgFAHgDQAIgDABgDQACgCABgUIABg4IgBg0QgBgUgCgEQgBgBgIgEQgHgDAAgFQAAgFAHgCQAFgDASAAIAPAAIAGADIAUAYIAcAkIAfAnIAWAaIAPARIAAgGIAAgLIgBhFQgBgdgBgFIgCgCIgDgDQgIgDgCgCQgCgCAAgDQAAgFAGgDQAGgCATAAQASAAAFACQAGADAAAFQAAADgCACIgFADIgDACQgGACgBADQgBAGgCAcIAABUIAAAbIAAARQABALgCADQgBACgFAAQgOAAgzhAg");
	this.shape_6.setTransform(-51.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboarddatefive, new cjs.Rectangle(-64.3,-18.7,128.6,37.5), null);


(lib.foryourfeast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPArQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIACgGIAEgEIAIgPQADgHAAgDIgBgEIgFgCQgHgDgEgFQgDgFAAgIQAAgJAFgGQAGgGAJAAQAJAAAGAIQAGAIAAANQAAAJgEAKQgDAKgJAPIgHALQgEADgCAAIgHgBg");
	this.shape.setTransform(90.6,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBUQgHgBgFgGQgFgEgCgHQgCgJAAgUIAAhLIgNAAIgEgBIgBgEIAAgDQAAgFAPgNIAFgEIAGgFQAOgNAGAAIADABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIAAAbIAfAAQAEAAABACQACABAAADIAAAEQAAADgCACQgBACgEAAIgdAAIgCABIgBAEIAABFQAAARAEAFQADAFAIAAQAEgBAHgCIAKgCQADAAACACQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAHgMAIQgMAHgPAAQgIAAgHgDg");
	this.shape_1.setTransform(81.5,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBJIgPgCIgEACIgFABIgCgBIgDgCQgFgDgEgMQgEgLAAgKQAAgFACgDQADgEADABQAHAAAHALIAFAJQAFAFAGAEQAIACAHAAQAKABAFgFQAGgEgBgJQAAgMgWgLIgIgEQgWgKgIgJQgIgJAAgNQAAgTANgMQANgLAUAAIAJAAIAKACIAHgCIAEgBQAHAAAHALQAGALAAANQAAAFgCACQgCADgEAAQgDAAgDgCIgIgLQgFgIgGgEQgFgDgJAAQgGAAgFAEQgFAGgBAHQABAGAFAFQAFAFAQAJIACAAQAnATAAAXQAAATgPAOQgPANgXAAg");
	this.shape_2.setTransform(70.3,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBCIgIgHIgGADQgRAMgRAAQgUAAgNgMQgNgMAAgUQAAgWARgMQAQgMAdAAQAHAAADACQAEACAAAFQAAAIgJAAQgOAAgJAGQgIAHAAAMQAAALAHAHQAIAGAMAAQANAAAGgFQAGgHAAgOIAAg1QAAgNgGgGQgFgHgJAAQgHABgGADQgGACgGAHIgDADQgIALgKAAQgFAAgDgEQgEgDAAgGQAAgOARgJQAQgIAagBQAOABAMAEQALAEAGAHQAEAGACAJQACAIAAAUIAAAtQAAAIABAEQABAEADABIAFABQAJACAAAFQAAAHgKAFQgJAGgNAAQgGAAgHgIg");
	this.shape_3.setTransform(56.9,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtA1QgUgUAAgfQAAggAVgVQAUgVAfgBQAbABARAPQAPAPAAAbQAAAJgDACQgCADgKAAIg2AAQgFAAgCgCQgDgDAAgEQAAgDADgCQACgCAFAAIAdAAIAHgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAgBQgBgNgIgJQgKgKgMAAQgQAAgJAPQgIAPAAAVQAAAVAMAPQALAQAQAAQALAAAHgBQAIgDAGgFIAFgDQAIgHADABQADAAACABQACACAAAEQABADgEAFQgEAFgFAFQgNAJgMAFQgLAEgNABQgdAAgUgVg");
	this.shape_4.setTransform(41.8,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHBlQgIgDAAgGQABgGAHgDQAHgCACgDQACgCABgWIABg2IgBgzQgBgWgCgDQgCgCgHgDQgHgDgBgGQABgFAGgCQAHgCAYAAIBWAAIANgCIAHgBIAEABIADACQADAFACAKQACAKABAGQAAAHgCADQgDADgEAAQgFAAgGgJIgEgHQgDgEgHgDQgGgCgJAAIgUAAQgMAAgHACQgHABgCAEQgDACgBAKIgBAbIAAALQAAAHABABQABACAEAAIAXAAQALAAAEgDQAEgDACgJIAAgDQACgOAIAAQAGAAACAHQACAIAAAbQAAAagCAHQgCAIgGAAQgIAAgCgPIAAgCQgCgJgEgDQgEgDgLAAIgXAAQgDAAgBACQgCACAAAJIAAALIABAoQABAIADACIAGADQAIADABAGQgBAGgHADQgJACgWAAQgWAAgIgCg");
	this.shape_5.setTransform(26.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBGQgGgCAAgHQgBgEAHgDIAEgCQADgCACgEQABgFAAgLIAAgJIAAgMIAAgIQAAgZgBgIQgBgIgDgBIgHgDQgIgCAAgFQAAgEADgCQACgCAGgDIAUgGIAMgCQAHAAACATIAAADIABAAQAHgLAIgGQAIgGAIAAQAKAAAFAGQAGAGAAAJQAAAKgEAGQgEAGgJAAIgHgCIgFgEIgEgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgKAAgEANQgDAOAAAqQAAAMABAGQACAGAEACIAFACQAJADAAAFQAAAGgIACQgIACgTAAQgVAAgHgCg");
	this.shape_6.setTransform(4.6,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeBIQgBgDAAgEIAAgKIgBgBIAAAAQgCAAgDAEIgCABQgHAIgIADQgIADgKAAQgLAAgJgEQgJgEgHgHQgGgIgDgLQgDgMAAgdIAAgKIAAgKIAAgDQAAgMgBgDQgCgDgFgBIgFgDQgIgCAAgEQAAgEACgCQADgDAKgEIATgEIAPgDQAEABACADQABACAAAHIAAAFIgBA0QAAAcAGAMQAGAKAOABQAPAAAHgPQAHgOAAghIAAgLQAAgMgBgDQgCgDgFgBIgGgDQgHgCAAgEQAAgEACgCQADgDAKgEIATgEIAPgDQAEAAACADQABADAAAHIAAAIIgCA4IABAYIAAAKQACAFAHADIACABQAIADAAAFQAAADgCACQgDACgGADIgUAHIgPACQgEAAgCgCg");
	this.shape_7.setTransform(-9.6,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzA0QgTgUAAgfQgBggAWgUQAVgWAeAAQAfAAAUAVQASATABAfQAAAggVAVQgVAXgeAAQgeAAgVgWgAgagpQgIALAAATQgBAbAMATQAMASAQABQAOAAAJgMQAIgMAAgSQAAgbgLgTQgMgSgRAAQgOAAgIALg");
	this.shape_8.setTransform(-25.8,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBjQgIgCAAgGQAAgGAJgEIAGgDQAFgDAAg6IAAgMIgQgbIgbgqQgIgMgFgDIgHgDQgJgDAAgGQAAgFAHgDQAGgCAcAAQAbAAAGACQAHADAAAFQAAAGgLAEIgBAAIgEADIgCAEQAAADAHAKIAbAsIAYgkQAIgNAAgEQAAgEgCgCQgCgDgHgCIgHgEQgBgCAAgEQAAgFAFgDQAGgCAXAAQAXAAAGACQAGADAAAFQAAAGgIADIgKAGQgHAEgNAVQgOAUgUAjIAAAYQABAvAEADIAGADQAJAEAAAGQAAAGgIACQgIADgWAAQgVAAgIgDg");
	this.shape_9.setTransform(-42.7,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqBGQgGgCAAgHQgBgEAHgDIAEgCQAEgCABgEQACgFAAgLIAAgJIAAgMIAAgIQAAgZgCgIQgBgIgDgBIgHgDQgIgCAAgFQAAgEADgCQACgCAHgDIATgGIAMgCQAHAAACATIAAADIABAAQAHgLAIgGQAIgGAIAAQAKAAAFAGQAGAGAAAJQAAAKgEAGQgEAGgJAAIgHgCIgFgEIgEgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgKAAgDANQgEAOAAAqQAAAMABAGQACAGAEACIAGACQAIADAAAFQAAAGgIACQgIACgSAAQgWAAgHgCg");
	this.shape_10.setTransform(-64.6,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzA0QgTgUgBgfQAAggAWgUQAVgWAeAAQAfAAAUAVQASATAAAfQABAggVAVQgVAXgeAAQgeAAgVgWgAgagpQgJALAAATQABAbALATQAMASARABQANAAAIgMQAJgMAAgSQAAgbgLgTQgMgSgQAAQgPAAgIALg");
	this.shape_11.setTransform(-78.2,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBlQgGgCgBgGQABgEAGgDIADgBQAEgCACgFIABgQIAAgOIAAhDIgQAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgCgCAAgEIAAgDQAAgEACgBQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAPAAIgBgLIgBgKQAAgVANgMQANgMAWAAQAQAAAKAHQAKAHAAALQAAAHgDAEQgEADgHAAQgEAAgEgCQgDgCgDgEIgCgFQgGgKgIAAQgFAAgDAEQgDADAAAFIADAQQACAMABAKIAVAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABABAAAEIAAADQAAAEgBABQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgVAAIAABIQAAASACAFQAAAGADABIAGACQAIADAAAGQAAAFgHACQgHACgTAAQgVAAgHgCg");
	this.shape_12.setTransform(-88.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.foryourfeast, new cjs.Rectangle(-96.2,-18.7,192.5,37.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AqoZMQk7iFjyjyQjxjyiFk6QiKlFAAlkQAAljCKlFQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE6CFDyDxQDyDyCFE7QCKFFAAFjQAAFkiKFFQiFE7jyDxQjxDyk7CFQlFCKlkAAQljAAlFiKg");
	this.shape.setTransform(175,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,350,350), null);


(lib.findanevent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgbAAIAAgLIBBAAIAAALIgbAAIAABKg");
	this.shape.setTransform(41.8,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVArIgshFIAAAAIAABFIgMAAIAAhVIAPAAIArBEIABAAIAAhEIAMAAIAABVg");
	this.shape_1.setTransform(33.8,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA2AAIAAALIgqAAIAAAZIAnAAIAAAKIgnAAIAAAcIArAAIAAALg");
	this.shape_2.setTransform(25.8,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFArIghhVIANAAIAZBFIAAAAIAahFIANAAIgiBVg");
	this.shape_3.setTransform(18.1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA1AAIAAALIgqAAIAAAZIAoAAIAAAKIgoAAIAAAcIAsAAIAAALg");
	this.shape_4.setTransform(10.9,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVArIgshFIgBAAIAABFIgLAAIAAhVIAQAAIAqBEIABAAIAAhEIAMAAIAABVg");
	this.shape_5.setTransform(-0.6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdArIgJgVIgnAAIgIAVIgOAAIAlhVIAKAAIAkBVgAAQALIgQgnIgPAnIAfAAg");
	this.shape_6.setTransform(-9.5,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglArIAAhVIAeAAQAHAAAIADQAIACAGAGQAHAEAEAIQADAFABAEIABAKIgBAKQgBAFgDAEIgEAHIgHAGQgGAGgIACQgKACgFABgAgZAgIAPAAQAIAAAFgCQAHgCAEgEQAFgFADgFIACgHIAAgHIAAgHIgCgGQgDgGgFgEQgEgEgHgCQgFgCgIAAIgPAAg");
	this.shape_7.setTransform(-21,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVArIgshFIgBAAIAABFIgLAAIAAhVIAQAAIArBEIAAAAIAAhEIAMAAIAABVg");
	this.shape_8.setTransform(-30.4,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_9.setTransform(-36.7,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaArIAAhVIA1AAIAAALIgpAAIAAAbIAmAAIAAAJIgmAAIAAAmg");
	this.shape_10.setTransform(-41.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.findanevent, new cjs.Rectangle(-47.2,-9.3,94.5,18.8), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("ApXCCIAAkDISvAAIAAEDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-13,120,26);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.blackrectanglefillinbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA3tgFxIAALjMhvZAAAIAArjg");
	this.shape.setTransform(0,0,1.02,1.203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.5,-45.5,729,91);


(lib.atasteofturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardturkey();
	this.instance.parent = this;
	this.instance.setTransform(-103,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atasteofturkey, new cjs.Rectangle(-103,-45,206,90), null);


(lib.atasteoftable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardatasteoftable();
	this.instance.parent = this;
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atasteoftable, new cjs.Rectangle(-364,-45,728,90), null);


(lib.atasteofpotatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardpotatoes();
	this.instance.parent = this;
	this.instance.setTransform(-73,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atasteofpotatoes, new cjs.Rectangle(-73,-33.5,146,67), null);


(lib.atasteofcranberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardcranberries();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atasteofcranberries, new cjs.Rectangle(-51.5,-15,103,30), null);


(lib.atasteofcinnamonbuns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardatasteof();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atasteofcinnamonbuns, new cjs.Rectangle(-73.5,-45,147,90), null);


(lib.whitelogofixed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(130.4,59.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(-11.1,85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(130.6,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(-48.8,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-44.3,88.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(64.5,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(6.9,30.3);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,175,175);
	this.instance.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogofixed, new cjs.Rectangle(-175,-175,350,350), null);


// stage content:
(lib.leaderboardquickatasteoffive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(33).call(this.frame_84).wait(5));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(365.8,47.1,3.544,0.143,0,0,0,0.3,0.7);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(89));

	// black-rectangle
	this.instance = new lib.blackrectanglefillinbox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// white-logo
	this.instance_1 = new lib.whitelogofixed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(660.8,44.6,0.328,0.328,0,0,0,0.1,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:0,scaleX:0.01,scaleY:0.01},0).to({regX:0.3,scaleX:0.36,scaleY:0.36,x:660.9,alpha:1},6).to({regX:0.1,scaleX:0.33,scaleY:0.33,x:660.8},7).wait(67));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7ZBzIAAjgMA52AAAIAADgg");
	mask.setTransform(194.9,11.5);

	// tasting-event-near-you
	this.instance_2 = new lib.tastingeventnearyou();
	this.instance_2.parent = this;
	this.instance_2.setTransform(107.3,14.5);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({x:-136.1},0).to({x:117.3,alpha:1},10).to({x:107.3},6).wait(53));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A7ZGZIAAssMA52AAAIAAMsg");
	mask_1.setTransform(194.9,40.9);

	// try new flavors
	this.instance_3 = new lib.trynewflavors();
	this.instance_3.parent = this;
	this.instance_3.setTransform(127.5,38.8);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({x:-136.1},0).to({x:147.5,alpha:1},10).to({x:127.5},6).wait(43));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A7ZHBIAAt8MA52AAAIAAN8g");
	mask_2.setTransform(194.9,44.9);

	// for your feast
	this.instance_4 = new lib.foryourfeast();
	this.instance_4.parent = this;
	this.instance_4.setTransform(115.8,67.6);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({x:-207.3},0).to({x:135.8,alpha:1},10,cjs.Ease.get(1)).to({x:115.8},6,cjs.Ease.get(1)).wait(33));

	// date
	this.instance_5 = new lib.leaderboarddatefive();
	this.instance_5.parent = this;
	this.instance_5.setTransform(279.9,67.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({alpha:1},10).wait(19));

	// find-an-event
	this.instance_6 = new lib.findanevent();
	this.instance_6.parent = this;
	this.instance_6.setTransform(437.1,68.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({alpha:1},10).wait(10));

	// cta-rectangle
	this.instance_7 = new lib.ctarectangle("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(437,69);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({startPosition:0},0).to({alpha:1},10).wait(10));

	// fade-from-black
	this.instance_8 = new lib.blackwideskyscraper();
	this.instance_8.parent = this;
	this.instance_8.setTransform(366.7,50.5,4.456,0.171,0,0,0,0.6,0.6);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_8.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.2,regY:0.7,scaleY:0.16,x:364.9,y:47,alpha:0},9).wait(80));

	// cinnamon-buns
	this.instance_9 = new lib.atasteofcinnamonbuns();
	this.instance_9.parent = this;
	this.instance_9.setTransform(654.5,45);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({alpha:1},10).wait(55));

	// turkey
	this.instance_10 = new lib.atasteofturkey();
	this.instance_10.parent = this;
	this.instance_10.setTransform(508,45);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({alpha:1},10).wait(60));

	// cranberries
	this.instance_11 = new lib.atasteofcranberries();
	this.instance_11.parent = this;
	this.instance_11.setTransform(390.5,75);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({alpha:1},10).wait(65));

	// potatoes
	this.instance_12 = new lib.atasteofpotatoes();
	this.instance_12.parent = this;
	this.instance_12.setTransform(336,33.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({alpha:1},10).wait(70));

	// table
	this.instance_13 = new lib.atasteoftable();
	this.instance_13.parent = this;
	this.instance_13.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(362.2,32.2,731.8,114.8);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
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