(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,s){e.exports=s.p+"static/media/hi.e676fecf.ogg"},18:function(e,t,s){e.exports=s.p+"static/media/low.00ba1b64.ogg"},19:function(e,t,s){e.exports=s(30)},24:function(e,t,s){},26:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(15),r=s.n(n),l=(s(24),s(5)),o=s(6),h=s(8),d=s(7),u=s(9),c=s(12),p=s(11),m=s.n(p),g=s(16),y=s(2),f=s(4),b=s(17),v=s.n(b),w=s(18),k=s.n(w),C=(s(26),function(e){function t(e){var s;Object(l.a)(this,t);var i=["hsl(348, 100%, 61%)","hsl(348, 100%, 61%)","hsl(204, 86%, 53%)","hsl(204, 86%, 53%)"];return(s=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={tempo:100,playing:!1,ball:{animationOpacity:.7,inner:{bigRadius:25,smallRadius:10,fill:i[1],stroke:i[1],radiusEasing:y.b.easeIn},outer:{bigRadius:25,smallRadius:10,fill:i[3],stroke:i[3],radiusEasing:y.a.easeIn}},polygons:{lineWidth:2,inner:{color:i[0],sides:3},outer:{color:i[2],sides:4}},render:{origin:{x:250,y:250},width:500,height:500,innerRadius:100,outerRadius:200}},s}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.initializeTwo(),this.drawShapes();var e=this.refs.geoCanvas.children[0];e.setAttribute("viewBox","0 0 500 500"),e.setAttribute("class","geoSVG")}},{key:"componentDidUpdate",value:function(e,t){if(this.props.tempo!==e.tempo&&(this.setState({tempo:this.props.tempo}),this.stop(),this.props.handleStop()),this.props.sides1!==e.sides1){var s=Object(c.a)({},this.state.polygons);s.inner.sides=this.props.sides1,this.setState({polygons:s}),this.restart()}if(this.props.sides2!==e.sides2){var i=Object(c.a)({},this.state.polygons);i.outer.sides=this.props.sides2,this.setState({polygons:i}),this.restart()}this.props.playing!==e.playing&&(this.props.playing?this.play():this.stop())}},{key:"restart",value:function(){this.stop(),this.state.playing&&this.play()}},{key:"play",value:function(){this.setState({playing:!0}),this.initiateBeatCircles(),this.timelineSetup(),this.timeline1.play(),this.timeline2.play(),this.radiusFlash1.play(),this.radiusFlash2.play()}},{key:"stop",value:function(){"undefined"!==typeof this.timeline1&&(this.setState({playing:!1}),this.timeline1.remove(this.timeline1.getChildren()),this.timeline2.remove(this.timeline2.getChildren()),this.radiusFlash1.remove(),this.radiusFlash2.remove()),this.two.clear(),this.drawShapes()}},{key:"initializeTwo",value:function(){var e={width:this.state.render.width,height:this.state.render.height,autostart:!0};this.two=new g.a(e).appendTo(this.refs.geoCanvas)}},{key:"drawShapes",value:function(){var e=this.two.makePolygon(this.state.render.origin.x,this.state.render.origin.y,this.state.render.innerRadius,this.state.polygons.inner.sides),t=this.two.makePolygon(this.state.render.origin.x,this.state.render.origin.y,this.state.render.outerRadius,this.state.polygons.outer.sides);e.stroke=this.state.polygons.inner.color,e.linewidth=this.state.polygons.lineWidth,e.rotation=Math.PI+Math.PI/this.state.polygons.inner.sides,e.noFill(),e.points=this.getPoints(e,this.state.polygons.inner.sides),e.sides=this.state.polygons.inner.sides,t.stroke=this.state.polygons.outer.color,t.linewidth=this.state.polygons.lineWidth,t.rotation=Math.PI+Math.PI/this.state.polygons.outer.sides,t.noFill(),t.points=this.getPoints(t,this.state.polygons.outer.sides),t.sides=this.state.polygons.outer.sides,this.shape1=e,this.shape2=t}},{key:"initiateBeatCircles",value:function(){this.beatCircle1=this.two.makeCircle(this.state.render.origin.x,this.state.render.origin.y-this.state.render.innerRadius,this.state.ball.inner.bigRadius),this.beatCircle1.fill=this.state.ball.inner.fill,this.beatCircle1.stroke=this.state.ball.inner.stroke,this.beatCircle1.opacity=this.state.ball.animationOpacity,this.beatCircle2=this.two.makeCircle(this.state.render.origin.x,this.state.render.origin.y-this.state.render.outerRadius,this.state.ball.outer.bigRadius),this.beatCircle2.fill=this.state.ball.outer.fill,this.beatCircle2.stroke=this.state.ball.outer.stroke,this.beatCircle2.opacity=this.state.ball.animationOpacity}},{key:"timelineSetup",value:function(){var e=60/this.state.tempo*this.state.polygons.outer.sides,t=new m.a.Player({url:v.a}).toMaster(),s=new m.a.Player({url:k.a}).toMaster();this.timeline1=new f.a({repeat:-1}),this.timeline2=new f.a({repeat:-1}),this.radiusFlash1=new f.a({repeat:-1}),this.radiusFlash2=new f.a({repeat:-1});for(var i=this.shape1.points,a=1;a<=i.length;a++)this.timeline1.add(y.c.to(this.beatCircle1.translation,1,{x:i[a%this.shape1.sides].x,y:i[a%this.shape1.sides].y,ease:this.state.ball.inner.radiusEasing,onComplete:function(){t.start()}}));this.timeline1.duration(e);for(var n=1;n<=i.length;n++)this.radiusFlash1.add(y.c.to(this.beatCircle1,1,{radius:this.state.ball.inner.smallRadius,opacity:1,ease:y.b.easeOut})),this.radiusFlash1.add(y.c.to(this.beatCircle1,1,{radius:this.state.ball.inner.bigRadius,opacity:this.state.ball.animationOpacity,ease:this.state.ball.inner.radiusEasing}));this.radiusFlash1.duration(e);for(var r=this.shape2.points,l=1;l<=r.length;l++)this.timeline2.add(y.c.to(this.beatCircle2.translation,1,{x:r[l%this.shape2.sides].x,y:r[l%this.shape2.sides].y,ease:y.a.easeIn,onComplete:function(){s.start()}}));this.timeline2.duration(e);for(var o=1;o<=r.length;o++)this.radiusFlash2.add(y.c.to(this.beatCircle2,1,{radius:this.state.ball.outer.smallRadius,opacity:1,ease:y.b.easeOut})),this.radiusFlash2.add(y.c.to(this.beatCircle2,1,{radius:this.state.ball.outer.bigRadius,opacity:this.state.ball.animationOpacity,ease:this.state.ball.outer.radiusEasing}));this.radiusFlash2.duration(e)}},{key:"getPoints",value:function(e,t){for(var s=[],i=0;i<t;i++){var a=e.vertices[i],n=this.rotatePoints(this.state.render.origin.x,this.state.render.origin.y,this.state.render.origin.x-a.x,this.state.render.origin.y-a.y,180/t);s.push({x:n[0],y:n[1]})}return s}},{key:"rotatePoints",value:function(e,t,s,i,a){var n=Math.PI/180*a,r=Math.cos(n),l=Math.sin(n);return[r*(s-e)+l*(i-t)+e,r*(i-t)-l*(s-e)+t]}},{key:"render",value:function(){return a.a.createElement("div",{ref:"geoCanvas",className:"geoCanvas"})}}]),t}(a.a.Component)),E=(s(27),s(28),s(29),function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleStop=function(){s.setState({playing:!1})},s.handleClick=function(e){s.setState({playing:!s.state.playing})},s.handleTempo=function(e){""!==e.target.value&&s.setState({tempo:parseInt(e.target.value)})},s.handleSides1=function(e){""!==e.target.value&&(s.sides1=parseInt(e.target.value),s.sides1<3?(s.refs.sides1.value=3,s.sides1=3,s.setState({sides1:3})):(s.setState({sides1:s.sides1}),s.sides1>=s.sides2&&(s.sides2=s.sides1+1,s.refs.sides2.value=s.sides2,s.setState({sides2:s.sides2}))))},s.handleSides2=function(e){""!==e.target.value&&(s.sides2=parseInt(e.target.value),s.sides2<4?(s.refs.sides2.value=4,s.sides2=4,s.setState({sides2:4})):(s.setState({sides2:s.sides2}),s.sides2<=s.sides1&&(s.sides1=s.sides1-1,s.refs.sides1.value=s.sides1,s.setState({sides1:s.sides1}))))},s.sides1=3,s.sides2=4,s.state={tempo:100,sides1:s.sides1,sides2:s.sides2,playing:!1},s}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{class:"row"},a.a.createElement("section",{className:"section"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column vCenter"},a.a.createElement("div",{className:"box shadow"},a.a.createElement("div",{className:"bar"},a.a.createElement("h6",{class:"title is-6"},"polyrhythm metronome")),a.a.createElement("div",{className:"bar"},a.a.createElement("p",{className:"paditem"},"tempo"),a.a.createElement("input",{onInput:this.handleTempo,className:"input paditem",type:"number",defaultValue:"100",min:"3",max:"1000"}),a.a.createElement("button",{onClick:this.handleClick,className:"button is-info paditem"},this.state.playing?a.a.createElement("i",{class:"fas fa-stop"}):a.a.createElement("i",{class:"fas fa-play"}))),a.a.createElement("div",{className:"bar"},a.a.createElement("input",{ref:"sides2",onInput:this.handleSides2,className:"input is-info",type:"number",defaultValue:"4",min:"3",max:"100000"}),a.a.createElement("input",{ref:"sides1",onInput:this.handleSides1,className:"input is-danger",type:"number",defaultValue:"3",min:"3",max:"100000"})))),a.a.createElement("div",{className:"column is-three-fifths"},a.a.createElement(C,{tempo:this.state.tempo,playing:this.state.playing,sides1:this.state.sides1,sides2:this.state.sides2,handleStop:this.handleStop.bind(this)}))))),a.a.createElement("div",{class:"content has-text-centered foot"},a.a.createElement("p",null,a.a.createElement("strong",null,"made by "," ",a.a.createElement("a",{href:"https://danielrmusic.com"},"daniel rowe")))))}}]),t}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.a32235f0.chunk.js.map