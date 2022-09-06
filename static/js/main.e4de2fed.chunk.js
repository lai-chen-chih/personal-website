(this.webpackJsonptb=this.webpackJsonptb||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),s=t.n(l),c=(t(16),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),h=t(7),p=t(10),d=t.n(p),E=(t(19),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.chname,this.props.data.occupation),t=(this.props.data.description,"images/"+this.props.data.image),n=(this.props.data.bio,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"  About & Contact ")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"  CV")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#research"},"  Research")),r.a.createElement("li",null,r.a.createElement("a",{href:"teaching.html"},"  Teaching ")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"  Life Philosophy")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-img"},r.a.createElement("img",{className:"profile-pic",src:t,alt:"Chen-Chih Profile Pic"})),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("h3",null,r.a.createElement("span",null,"Hi! I'm a ",a," passionate about Partial Differential Equations and Fluid Mechanics")),r.a.createElement("ul",{className:"social"},n))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Copyright 2021 ",r.a.createElement("a",{href:"https://github.com/lai-chen-chih?tab=repositories"},"Chen-Chih Lai")))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"renderText",value:function(e,a){if(void 0!==e.aboutMe){for(var t=e.aboutMe,n=t.indexOf("UBC Math Department");n>0;)a.push(t.substring(0,n)),a.push(r.a.createElement("a",{href:"https://www.math.ubc.ca"},"UBC Math Department ")),n=t.indexOf("UBC Math Department",n+2);a.forEach((function(e,n){for(var l=t.indexOf("Prof. Tai-Peng Tsai");l>0;)a.push(t.substring(0,l)),a.push(r.a.createElement("a",{href:"https://www.math.ubc.ca"},"Prof. Tai-Peng Tsai ")),l=t.indexOf("Prof. Tai-Peng Tsai",l+1)}))}return console.log(a),a}},{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a=(this.props.data.chname,this.props.data.address.department),t=(this.props.data.image,this.props.data.address.street),n=this.props.data.address.city,l=this.props.data.address.state,s=this.props.data.address.zip,c=this.props.data.office,i=this.props.data.email;this.props.data.resumedownload,this.props.data.aboutMe}return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"I am a Postdoctoral Research Scientist in the",r.a.createElement("a",{href:"https://www.math.columbia.edu"}," Department of Mathematics "),"at",r.a.createElement("a",{href:"https://www.columbia.edu"}," Columbia University "),"under the mentorship of Prof. ",r.a.createElement("a",{href:"http://www.columbia.edu/~miw2103/"},"Michael I. Weinstein"),". I received my Ph.D. in the",r.a.createElement("a",{href:"https://www.math.ubc.ca"}," Department of Mathematics "),"at the",r.a.createElement("a",{href:"https://www.ubc.ca"}," Univeristy of British Columbia (UBC) "),"in July 2021, where I investigated the Green tensor of incompressible flows in the half space and examined existence theorems of fluid-related models under the supervision of Prof. ",r.a.createElement("a",{href:"http://www.math.ubc.ca/~ttsai/"},"Tai-Peng Tsai "),"and Prof. ",r.a.createElement("a",{href:"https://www.math.ubc.ca/~jcwei/"},"Juncheng Wei"),". Previously I studied reaction-diffusion equations and synchronization problems at ",r.a.createElement("a",{href:"http://www.ncts.ntu.edu.tw"},"National Center for Theoretical Science (NCTS)")," as a Research Assistant under the supervision of Prof. ",r.a.createElement("a",{href:"http://ncts.tw/people_detail.php?gid=122&bgid=4"},"Chun-Hsiung Hsia"),". Before that, I completed my M.Sc. in the",r.a.createElement("a",{href:"http://www.math.ntu.edu.tw/en"}," Department of Mathematics "),"at",r.a.createElement("a",{href:"https://www.ntu.edu.tw/english/"}," National Taiwan University (NTU) "),", where I worked on population estimates for traveling waves of Lotka\u2013Voterra system under the supervision of Prof. ",r.a.createElement("a",{href:"http://www.math.ntu.edu.tw/en/entity_people/entity_people/21478"}," Chun-Hsiung Hsia"),", Prof. ",r.a.createElement("a",{href:"http://www.math.ntu.edu.tw/en/entity_people/entity_people/21458"}," Chiun-Chuan Chen"),", and Dr. ",r.a.createElement("a",{href:"https://www.ce.ntust.edu.tw/p/404-1024-65378.php?Lang=zh-tw"}," Li-Chang Hung"),"."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,a),r.a.createElement("br",null),r.a.createElement("span",null,t,r.a.createElement("br",null),n,", ",l," ",s),r.a.createElement("br",null),r.a.createElement("span",null,c),r.a.createElement("br",null),r.a.createElement("span",null,i)))))))}}]),a}(n.Component),w=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.employment.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.course," \u2022 ",e.date))})),a=this.props.data.education.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{key:e.degree},r.a.createElement("h1",null,e.degree),r.a.createElement("p",{className:"info"},e.school,r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated))),r.a.createElement("p",null,void 0!==e.supervisors?void 0!==e.supervisor2?"Supervisors: Prof. ":"Supervisor: Prof. ":void 0,r.a.createElement("a",{href:e.supervisorUrl,target:"_blank"}," ",e.supervisors),void 0!==e.supervisor2?" and Prof. ":void 0,r.a.createElement("a",{href:e.supervisorUrl2,target:"_blank"}," ",e.supervisor2),r.a.createElement("br",null),void 0!==e.description?"Thesis:":void 0,r.a.createElement("a",{href:e.url,target:"_blank"}," ",e.description)))})),t=this.props.data.research.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("h1",null,e.company)),r.a.createElement("div",null,e.authors,r.a.createElement("p",{className:"info"},e.publisher,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description)))})),n=this.props.data.preprints.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("h1",null,e.company)),r.a.createElement("div",null,"Authors: ",e.authors,r.a.createElement("p",{className:"info"},e.publisher,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description)))})),l=this.props.data.awards.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,r.a.createElement("a",{href:e.url})," ",e.location," \u2022 ",e.date))})),s=this.props.data.talks.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("h1",null,e.title)),r.a.createElement("p",null,r.a.createElement("a",{href:e.url})," ",e.location," \u2022 ",e.date))})),c=this.props.data.present.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("h1",null,e.title)),r.a.createElement("p",null,r.a.createElement("a",{href:e.url})," ",e.location," \u2022 ",e.date))}));this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{width:e.level},className:a}),r.a.createElement("em",null,e.name))})),this.props.data.teaching.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.course," \u2022 ",e.date))}))}return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Employment"))),r.a.createElement("div",{className:"nine columns main-col"},e)),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},a,r.a.createElement("a",{class:"anchor",id:"research"}))),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Research Interests"))),r.a.createElement("div",{className:"nine columns main-col"},"Nonlinear partial differential equations, Navier\u2013Stokes equations, Green tensor of Stokes system, dynamic free boundary problems, gas bubble dynamics, chemotaxis-fluid models, self- similar and discretely self-similar solutions, concentration and blow-up phenomena for parabolic PDEs, reaction-diffusion systems")),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Publications"))),r.a.createElement("div",{className:"nine columns main-col"},t)),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Preprints"))),r.a.createElement("div",{className:"nine columns main-col"},n)),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Awards"))),r.a.createElement("div",{className:"nine columns main-col"},l)),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Conference/Workshop Presentations"))),r.a.createElement("div",{className:"nine columns main-col"},s)),r.a.createElement("div",{className:"row research"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Seminar/Colloquium Presentations"))),r.a.createElement("div",{className:"nine columns main-col"},c)))}}]),a}(n.Component),b=(n.Component,function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)this.props.data.testimonials.map((function(e){return r.a.createElement("li",{key:e.user},r.a.createElement("blockquote",null,r.a.createElement("p",null,e.text),r.a.createElement("cite",null,e.user)))}));return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Client Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("ul",{className:"slides"},r.a.createElement("blockquote",null,r.a.createElement("p",null,"From now on,",r.a.createElement("br",null),"Should it grow and open full, the sweet clematis",r.a.createElement("br",null),"Flower bold, but there's no need for rejoicing more",r.a.createElement("br",null),"Precious life, this life, just once, it comes just one time",r.a.createElement("br",null),"Keep it close, keep it from ever just leaving you",r.a.createElement("br",null)),r.a.createElement("cite",null,"Stem (Daimy\u014d Asobi-hen) by Ringo Sheena")))))))}}]),a}(n.Component)),N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:e.url,target:"_blank",title:e.title},r.a.createElement("img",{alt:e.title,src:a,width:"20",height:"20"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title))),r.a.createElement("div",{className:"link-icon"},r.a.createElement("i",{className:"fa fa-link"})))))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some Interesting Math Websites"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},h.a.initialize("UA-110570651-1"),h.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.main}),r.a.createElement(w,{data:this.state.resumeData.resume}),r.a.createElement(N,{data:this.state.resumeData.portfolio}),r.a.createElement(b,{data:this.state.resumeData.testimonials}),r.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/personal-website",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/personal-website","/service-worker.js");y?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.e4de2fed.chunk.js.map