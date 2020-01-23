(this.webpackJsonpcitysize=this.webpackJsonpcitysize||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(24),l=n.n(i),r=(n(33),n(5)),s=n(6),c=n(8),u=n(7),h=n(9),d=n(60),p=n(3),f=n.n(p),m=(n(34),n(35),n(14)),g=n.n(m),y=n(59),b=n(12),v=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"createLeafletElement",value:function(e){return f.a.mapboxGL(e)}}]),t}(y.a);v.propTypes={accessToken:g.a.string.isRequired,style:g.a.string},v.defaultProps={style:"mapbox://styles/mapbox/streets-v9"};var j,k=Object(b.b)(v),E=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return[e,e]},w=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){n.props.returnResult(e.target)},n.drawResults=function(){return n.props.searchResults.map((function(e){return o.a.createElement("div",{className:"searchResult",value:e.place_id,onClick:n.handleClick,key:e.place_id},o.a.createElement("h4",null,e.display_name),o.a.createElement("p",null,"administrative"===e.type?"Administrative Border":w(e.type)),o.a.createElement("p",null,e.lat),o.a.createElement("p",null,e.lon))}))},n.state={},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.searchResults.length>0?this.drawResults():null)}}]),t}(o.a.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"loader"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))}}]),t}(o.a.Component),S=n(26),x=n.n(S),R={type:"Feature",name:"",bbox:[],properties:{},geometry:{type:"Polygon",coordinates:[[]]}},M=function(e){return console.log(e[0].geojson.coordinates),"MultiPolygon"===e[0].geojson.type?j=e[0].geojson.coordinates[0][0]:"Polygon"===e[0].geojson.type&&(j=e[0].geojson.coordinates[0]),R.geometry.coordinates[0]=j,R.name=e[0].display_name.split(",")[0],R.bbox=e[0].boundingbox,R},F=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSearchResultClick=function(e){var t=e.getAttribute("value"),a=n.state.searchResults.filter((function(e){return e.place_id===parseInt(t)}));n.props.addOutline(M(a),a[0].lat,a[0].lon,a[0].boundingbox)},n.handleSearch=function(e){e.target.value.match(/(type)/gm)&&e.target.value.length>10&&console.log("found geojson"),e.target.value.length>3?(n.setState({loading:!0}),x.a.get("https://nominatim.openstreetmap.org/search.php?q=".concat(e.target.value,"&polygon_geojson=1&format=json&limit=5&polygon_threshold=0.0001")).catch((function(e){console.log(e)})).then((function(e){var t=e.data.filter((function(e){return e.geojson?"MultiPolygon"===e.geojson.type||"Polygon"===e.geojson.type:null}));n.setState({searchResults:t,loading:!1})}))):e.target.value.length<3&&n.setState({searchResults:[]})},n.setFocus=function(e){"mouseenter"===e.type?n.setState({focused:!0}):"mouseleave"===e.type&&n.setState({focused:!1})},n.toggleUI=function(e){"blur"===e.type&&!0===n.state.focused?n.focusInput():"blur"===e.type&&!1===n.state.focused?n.setState({searchStyle:{display:"none"}}):"focus"===e.type&&n.setState({searchStyle:{display:"block"}})},n.focusInput=function(){n.refs.searchbar.focus()},n.doThing=function(){},n.state={searchResults:[],searchStyle:{display:"block"},focused:!0,loading:!1,style:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.focusInput(),this.refs.searchbar.onkeypress=function(e){13===(e.charCode||e.keyCode||0)&&e.preventDefault()}}},{key:"render",value:function(){return o.a.createElement("div",{onChange:this.handleSearch,onClick:this.collapseSearch,onMouseEnter:this.setFocus,onMouseLeave:this.setFocus,id:"interface"},o.a.createElement("div",{id:"searchBox",onMouseEnter:this.setFocus,style:this.state.style},o.a.createElement("input",{ref:"searchbar",type:"search",placeholder:"Search locations, cities, countries, states...",onMouseEnter:this.setFocus,onBlur:this.toggleUI,onFocus:this.toggleUI,onClick:this.doThing}),o.a.createElement("div",{id:"searchIconContainer"},o.a.createElement("div",{id:"searchIcon"})),o.a.createElement("div",{id:"searchResults",onMouseEnter:this.setFocus,style:this.state.searchStyle},this.state.loading?o.a.createElement(C,null):null,o.a.createElement(O,{onClick:this.focusInput,returnResult:this.handleSearchResultClick,searchResults:this.state.searchResults}))))}}]),t}(o.a.Component),I=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleDisplay=function(){n.setState({display:!1})},n.drawModal=function(){return o.a.createElement("div",{className:"modal"},o.a.createElement("div",{id:"close",onClick:n.toggleDisplay}),o.a.createElement("h4",null,"How it works:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Search for any location like a city, country or even a building."),o.a.createElement("li",null,"Select a location from the search list to add it to the map."),o.a.createElement("li",null,"Drag the outline around the map and compare it to other locations!"),o.a.createElement("li",null,"Bugs? ",o.a.createElement("a",{href:"https://github.com/x8BitRain/citysize"},"Readme!"))))},n.state={display:!0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.alreadyVisited?this.setState({display:!1}):(localStorage.alreadyVisited=!0,this.setState({display:!0}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.display?this.drawModal():null)}}]),t}(o.a.Component),z=[[-47.27922900257082,-117.42187500000001],[75.40885422846455,116.54296875000001]],A=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).setCity=function(e,t,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:z;e,n.addCityLayer(e,t,a,o)},n.addCityLayer=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];var t=arguments.length>3?arguments[3]:void 0,a=n.refs.map.leafletElement;a.fitBounds([[t[0],t[2]],[t[1],t[3]]]);var o=E();f.a.trueSize(e,{markerDiv:"<h2 style='text-shadow: 0px 0px 14px rgba(255,255,255,1);'>".concat(e.name,"</h2>"),iconAnchor:[35,35],fill:!0,fillColor:o[0],fillOpacity:.15,color:"black",weight:3,opacity:1,stroke:!0}).addTo(a)},n.handleClick=function(e){console.log(e.latlng)},n.state={lat:30,lng:0,zoom:3,selectedCity:"",focus:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{center:e,zoom:this.state.zoom,minZoom:"3",zoomSnap:"0.5",bounceAtZoomLimits:"false",wheelPxPerZoomLevel:"80",onClick:this.handleClick,ref:"map",useFlyTo:!0,attributionControl:!0},o.a.createElement(k,{accessToken:"pk.eyJ1IjoiZGJlbGxidHIiLCJhIjoiY2p5dTF5OXltMDFrOTNjbWxqdjZ5NmV2MCJ9.kkIqnzU12LF90W8yr-jsJw",style:"mapbox://styles/mapbox/light-v10",attribution:'\xa9 <a href="https://www.openstreetmap.org/">OpenStreetMap</a> | \xa9 <a href="https://www.mapbox.com/">MapBox</a> | <a href="https://github.com/x8BitRain/citysize/">GitHub</a>'})),o.a.createElement(F,{addOutline:this.setCity}),o.a.createElement(I,null))}}]),t}(o.a.Component);var B=function(){return o.a.createElement(A,null)},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/citysize",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/citysize","/service-worker.js");L?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.212c6908.chunk.js.map