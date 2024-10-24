(this.webpackJsonptb=this.webpackJsonptb||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),s=t.n(r),c=(t(16),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=t(7),h=t(10),p=t.n(h),E=(t(19),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.chname,this.props.data.occupation,this.props.data.description,"images/"+this.props.data.image),t=(this.props.data.bio,this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"  About & Contact ")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"  CV")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#research"},"  Research")),l.a.createElement("li",null,l.a.createElement("a",{href:"teaching.html"},"  Teaching ")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"  Life Philosophy")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-img"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Chen-Chih Profile Pic"})),l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e),l.a.createElement("h3",null," ",l.a.createElement("div",{style:{"line-height":30}},"Hi! I am Chen-Chih. ",l.a.createElement("br",null),"I am passionate about analysis of Partial Differential Equations and nonlinear dynamics in Fluid Mechanics.",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("font",{color:"#FFFF00"},l.a.createElement("font",{size:"6"},"***I am on the job market this Fall 2024***"))),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2021 ",l.a.createElement("a",{href:"https://github.com/lai-chen-chih?tab=repositories"},"Chen-Chih Lai")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"renderText",value:function(e,a){if(void 0!==e.aboutMe){for(var t=e.aboutMe,n=t.indexOf("UBC Math Department");n>0;)a.push(t.substring(0,n)),a.push(l.a.createElement("a",{href:"https://www.math.ubc.ca"},"UBC Math Department ")),n=t.indexOf("UBC Math Department",n+2);a.forEach((function(e,n){for(var r=t.indexOf("Prof. Tai-Peng Tsai");r>0;)a.push(t.substring(0,r)),a.push(l.a.createElement("a",{href:"https://www.math.ubc.ca"},"Prof. Tai-Peng Tsai ")),r=t.indexOf("Prof. Tai-Peng Tsai",r+1)}))}return console.log(a),a}},{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a=(this.props.data.chname,this.props.data.address.department),t=(this.props.data.image,this.props.data.address.street),n=this.props.data.address.city,r=this.props.data.address.state,s=this.props.data.address.zip,c=this.props.data.office,i=this.props.data.email;this.props.data.resumedownload,this.props.data.aboutMe}return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I completed my Ph.D. in ",l.a.createElement("a",{href:"https://www.math.ubc.ca"}," Department of Mathematics "),"at the",l.a.createElement("a",{href:"https://www.ubc.ca"}," Univeristy of British Columbia (UBC) "),"in 2021, under the guidance of Prof. ",l.a.createElement("a",{href:"http://www.math.ubc.ca/~ttsai/"},"Tai-Peng Tsai "),"and Prof. ",l.a.createElement("a",{href:"https://www.math.ubc.ca/~jcwei/"},"Juncheng Wei"),". From 2021 to 2024, I was a Postdoctoral Research Scientist with Prof. ",l.a.createElement("a",{href:"http://www.columbia.edu/~miw2103/"},"Michael I. Weinstein")," in the ",l.a.createElement("a",{href:"https://www.math.columbia.edu"}," Department of Mathematics ")," at",l.a.createElement("a",{href:"https://www.columbia.edu"}," Columbia University "),", and was supported, in part, by the ",l.a.createElement("a",{href:"https://www.simonsfoundation.org"},"Simons Foundation"),".",l.a.createElement("br",null),l.a.createElement("h2",null),"My primary research interests lie in the analysis of partial differential equations (PDEs) and applied mathematics, with a particular focus on problems related to fluid dynamics, physics, and biology. My current focus has been on PDE free boundary problems, particularly in the nonlinear dynamics and geometry of an evolving surface of a deforming gas bubble within a liquid. Additionally, I have developed a research program exploring boundary effects, global well-posedness, and singularity formation in fluid-related coupled systems, including Navier\u2013Stokes equations, chemotaxis\u2013fluid systems, nematic liquid crystal flows, and MHD equations."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,a),l.a.createElement("br",null),l.a.createElement("span",null,t,l.a.createElement("br",null),n,", ",r," ",s),l.a.createElement("br",null),l.a.createElement("span",null,c),l.a.createElement("br",null),l.a.createElement("span",null,i)))))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.employment.map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.course," \u2022 ",e.date))})),a=this.props.data.education.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{key:e.degree},l.a.createElement("h1",null,e.degree),l.a.createElement("p",{className:"info"},e.school,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated))),l.a.createElement("p",null,void 0!==e.supervisors?void 0!==e.supervisor2?"Supervisors: Prof. ":"Supervisor: Prof. ":void 0,l.a.createElement("a",{href:e.supervisorUrl,target:"_blank"}," ",e.supervisors),void 0!==e.supervisor2?" and Prof. ":void 0,l.a.createElement("a",{href:e.supervisorUrl2,target:"_blank"}," ",e.supervisor2),l.a.createElement("br",null),void 0!==e.description?"Thesis:":void 0,l.a.createElement("a",{href:e.url,target:"_blank"}," ",e.description)))})),t=this.props.data.research.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("h1",null,e.company)),l.a.createElement("div",null,e.authors,l.a.createElement("p",{className:"info"},e.publisher,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description)))})),n=this.props.data.preprints.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("h1",null,e.company)),l.a.createElement("div",null,e.authors,l.a.createElement("p",{className:"info"},e.publisher,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description)))})),r=this.props.data.awards.map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("h1",null,e.title)),l.a.createElement("p",null,l.a.createElement("a",{href:e.url})," ",e.location," \u2022 ",e.date))})),s=this.props.data.talks.map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("h1",null,e.title)),l.a.createElement("p",null,l.a.createElement("a",{href:e.url})," ",e.location," \u2022 ",e.date))})),c=this.props.data.present.map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("h1",null,e.title)),l.a.createElement("p",null,l.a.createElement("a",{href:e.url})," ",e.location," \u2022 ",e.date))})),i=this.props.data.organize.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("h1",null,e.company)),l.a.createElement("div",null,e.authors,l.a.createElement("p",{className:"info"},e.publisher,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description)))}));this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))})),this.props.data.teaching.map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.course," \u2022 ",e.date))}))}return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Appointments"))),l.a.createElement("div",{className:"nine columns main-col"},e)),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education and Training"))),l.a.createElement("div",{className:"nine columns main-col"},a,l.a.createElement("a",{class:"anchor",id:"research"}))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Research Interests"))),l.a.createElement("div",{className:"nine columns main-col"},"My areas of expertise are analysis of partial differential equations, nonlinear dynamics, and applied mathematics, with a particular focus on phenomena in fluid dynamics, physics, and biology. Models that I have investigated include ",l.a.createElement("br",null),"1. incompressible Navier\u2013Stokes equations, ",l.a.createElement("br",null),"2. moving interface problem of bubble models with surface tension, ",l.a.createElement("br",null),"3. self-consistent Patlak\u2013Keller\u2013Segel-Navier\u2013Stokes system, ",l.a.createElement("br",null),"4. nematic liquid crystal flows, ",l.a.createElement("br",null),"5. magnetohydrodynamics (MHD) equations, ",l.a.createElement("br",null),"6. porus media type tumor growth model, ",l.a.createElement("br",null),"7. Kuramoto model, and ",l.a.createElement("br",null),"8. Lotka\u2013Volterra system.")),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Publications"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Preprints"))),l.a.createElement("div",{className:"nine columns main-col"},n)),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Awards"))),l.a.createElement("div",{className:"nine columns main-col"},r)),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Conference/Workshop Presentations"))),l.a.createElement("div",{className:"nine columns main-col"},s)),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Seminar/Colloquium Presentations"))),l.a.createElement("div",{className:"nine columns main-col"},c)),l.a.createElement("div",{className:"row research"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Conference/Workshop (Co)-Organization"))),l.a.createElement("div",{className:"nine columns main-col"},i)))}}]),a}(n.Component),w=(n.Component,function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)this.props.data.testimonials.map((function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))}));return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},l.a.createElement("blockquote",null,l.a.createElement("p",null,"From now on,",l.a.createElement("br",null),"Should it grow and open full, the sweet clematis",l.a.createElement("br",null),"Flower bold, but there's no need for rejoicing more",l.a.createElement("br",null),"Precious life, this life, just once, it comes just one time",l.a.createElement("br",null),"Keep it close, keep it from ever just leaving you",l.a.createElement("br",null)),l.a.createElement("cite",null,"Stem (Daimy\u014d Asobi-hen) by Ringo Sheena")))))))}}]),a}(n.Component)),g=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,target:"_blank",title:e.title},l.a.createElement("img",{alt:e.title,src:a,width:"20",height:"20"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some Interesting Math Websites"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){p.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(b,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.portfolio}),l.a.createElement(w,{data:this.state.resumeData.testimonials}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(l.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/personal-website",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/personal-website","/service-worker.js");N?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.896e25be.chunk.js.map