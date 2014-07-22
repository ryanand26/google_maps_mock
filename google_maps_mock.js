var GoogleMapsMock,
	__hasProp = {}.hasOwnProperty,
	__extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) { child[key] = parent[key]; } } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.google = {
	maps: {
		event: {
			addDomListener: function() {},
			addDomListenerOnce: function() {},
			addListener: function() {},
			addListenerOnce: function() {},
			bind: function() {},
			clearInstanceListeners: function() {},
			clearListeners: function() {},
			forward: function() {},
			removeListener: function() {},
			trigger: function() {},
			vf: function() {}
		}
	}
};

GoogleMapsMock = (function() {
	function GoogleMapsMock() {}

	GoogleMapsMock.prototype.setMap = function() {};

	GoogleMapsMock.prototype.getMap = function() {};

	return GoogleMapsMock;

})();

google.maps.LatLng = (function(_super) {
	__extends(LatLng, _super);

	function LatLng(lat, lng) {
		this.latitude = parseFloat(lat);
		this.longitude = parseFloat(lng);
	}

	LatLng.prototype.lat = function() {
		return this.latitude;
	};

	LatLng.prototype.lng = function() {
		return this.longitude;
	};

	return LatLng;

})(GoogleMapsMock);

google.maps.LatLngBounds = (function(_super) {
	__extends(LatLngBounds, _super);

	function LatLngBounds(ne, sw) {
		this.ne = ne;
		this.sw = sw;
	}

	LatLngBounds.prototype.getSouthWest = function() {
		return this.sw;
	};

	LatLngBounds.prototype.getNorthEast = function() {
		return this.ne;
	};

	LatLngBounds.prototype.extend = function() {
		return this;
	};

	return LatLngBounds;

})(GoogleMapsMock);

google.maps.OverlayView = (function(_super) {
	__extends(OverlayView, _super);

	function OverlayView() {
		return OverlayView.__super__.constructor.apply(this, arguments);
	}

	return OverlayView;

})(GoogleMapsMock);

google.maps.Marker = (function(_super) {
	__extends(Marker, _super);

	function Marker() {
		return Marker.__super__.constructor.apply(this, arguments);
	}

	Marker.prototype.getAnimation = function() {};

	Marker.prototype.getClickable = function() {};

	Marker.prototype.getCursor = function() {};

	Marker.prototype.getDraggable = function() {};

	Marker.prototype.getFlat = function() {};

	Marker.prototype.getIcon = function() {};

	Marker.prototype.getPosition = function() {};

	Marker.prototype.getShadow = function() {};

	Marker.prototype.getShape = function() {};

	Marker.prototype.getTitle = function() {};

	Marker.prototype.getVisible = function() {};

	Marker.prototype.getZIndex = function() {};

	Marker.prototype.setAnimation = function() {};

	Marker.prototype.setClickable = function() {};

	Marker.prototype.setCursor = function() {};

	Marker.prototype.setDraggable = function() {};

	Marker.prototype.setFlat = function() {};

	Marker.prototype.setIcon = function() {};

	Marker.prototype.setPosition = function() {};

	Marker.prototype.setShadow = function() {};

	Marker.prototype.setShape = function() {};

	Marker.prototype.setTitle = function() {};

	Marker.prototype.setVisible = function() {};

	Marker.prototype.setZIndex = function() {};

	Marker.prototype.setMap = function() {};

	Marker.prototype.getMap = function() {};

	Marker.prototype.set = function() {};

	Marker.prototype.get = function() {};

	return Marker;

})(GoogleMapsMock);

google.maps.MarkerImage = (function(_super) {
	__extends(MarkerImage, _super);

	function MarkerImage() {
		return MarkerImage.__super__.constructor.apply(this, arguments);
	}

	return MarkerImage;

})(GoogleMapsMock);

google.maps.Map = (function(_super) {
	__extends(Map, _super);

	function Map() {
		return Map.__super__.constructor.apply(this, arguments);
	}

	Map.prototype.fitBounds = function() {};
	Map.prototype.setCenter = function() {};
	Map.prototype.setZoom = function() {};

	return Map;

})(GoogleMapsMock);

google.maps.Point = (function(_super) {
	__extends(Point, _super);

	function Point() {
		return Point.__super__.constructor.apply(this, arguments);
	}

	return Point;

})(GoogleMapsMock);

google.maps.Size = (function(_super) {
	__extends(Size, _super);

	function Size() {
		return Size.__super__.constructor.apply(this, arguments);
	}

	return Size;

})(GoogleMapsMock);

google.maps.InfoWindow = (function(_super) {
	__extends(InfoWindow, _super);

	function InfoWindow() {
		return InfoWindow.__super__.constructor.apply(this, arguments);
	}

	return InfoWindow;

})(GoogleMapsMock);
