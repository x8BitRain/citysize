(this.webpackJsonpcitysize=this.webpackJsonpcitysize||[]).push([[0],{28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),s=(a(33),a(34),a(7)),c=a(8),i=a(10),u=a(9),h=a(11),p=a(60),d=a(3),m=a.n(d),y=(a(35),a(36),a(14)),f=a.n(y),g=a(61),b=a(12),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"createLeafletElement",value:function(e){return m.a.mapboxGL(e)}}]),t}(g.a);j.propTypes={accessToken:f.a.string.isRequired,style:f.a.string},j.defaultProps={style:"mapbox://styles/mapbox/streets-v9"};var v,k=Object(b.b)(j),O=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return[e,e]},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){a.props.returnResult(e.target)},a.state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"searchResults"},this.props.searchResults.map((function(t){return r.a.createElement("div",{className:"searchResult",value:t.place_id,onClick:e.handleClick,key:t.place_id},r.a.createElement("h4",null,t.display_name),r.a.createElement("p",null,t.type),r.a.createElement("p",null,t.lat),r.a.createElement("p",null,t.lon))})))}}]),t}(r.a.Component),E=a(26),R=a.n(E),x={type:"Feature",name:"",properties:{},geometry:{type:"Polygon",coordinates:[[]]}},S=function(e){return"MultiPolygon"===e[0].geojson.type?v=e[0].geojson.coordinates[0][0]:"Polygon"===e[0].geojson.type&&(v=e[0].geojson.coordinates[0]),x.geometry.coordinates[0]=v,x.name=e[0].display_name.split(",")[0],x},z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSearchResultClick=function(e){var t=e.getAttribute("value"),n=a.state.searchResults.filter((function(e){return e.place_id===parseInt(t)}));S(n),a.props.addOutline(S(n),"test")},a.handleSearch=function(e){e.target.value.length>3?R.a.get("https://nominatim.openstreetmap.org/search.php?q=".concat(e.target.value,"&polygon_geojson=1&format=json&limit=5")).then((function(e){var t=e.data.filter((function(e){return e.geojson?"MultiPolygon"===e.geojson.type||"Polygon"===e.geojson.type:null}));a.setState({searchResults:t}),a.state.searchResults.length>0&&a.setState({style:{paddingBottom:"15px"}})})):e.target.value.length<3&&a.setState({searchResults:[],style:{paddingBottom:"0px"}})},a.collapseSearch=function(){console.log("test")},a.state={searchResults:[],style:{}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.refs.searchbar.onkeypress=function(e){13===(e.charCode||e.keyCode||0)&&e.preventDefault()}}},{key:"render",value:function(){return r.a.createElement("div",{id:"interface"},r.a.createElement("div",{id:"searchBox",style:this.state.style},r.a.createElement("input",{ref:"searchbar",type:"search",onChange:this.handleSearch,placeholder:"Search"}),r.a.createElement("div",{id:"searchIconContainer"},r.a.createElement("div",{id:"searchIcon"})),r.a.createElement(C,{returnResult:this.handleSearchResultClick,searchResults:this.state.searchResults})))}}]),t}(r.a.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setCity=function(e,t){e,a.addCityLayer(e,t)},a.addCityLayer=function(e,t){var n=a.refs.map.leafletElement,r=O();m.a.trueSize(e,{markerDiv:"<h2>".concat(e.name,"</h2>"),iconAnchor:[35,35],fill:!0,fillColor:r[0],fillOpacity:.15,color:"black",weight:3,opacity:1,stroke:!0}).addTo(n)},a.state={lat:30,lng:0,zoom:3,selectedCity:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleClick",value:function(e){console.log(e.latlng)}},{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{center:e,zoom:this.state.zoom,zoomSnap:"0.25",onClick:this.handleClick,ref:"map"},r.a.createElement(k,{accessToken:"pk.eyJ1IjoiZGJlbGxidHIiLCJhIjoiY2p5dTF5OXltMDFrOTNjbWxqdjZ5NmV2MCJ9.kkIqnzU12LF90W8yr-jsJw",style:"mapbox://styles/mapbox/light-v10"})),r.a.createElement(z,{addOutline:this.setCity}))}}]),t}(r.a.Component);var M=function(){return r.a.createElement(I,null)};l.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.359e9f1e.chunk.js.map