(this.webpackJsonpfatihsayilir=this.webpackJsonpfatihsayilir||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/FATIH_SAYILIR-CV.b5a8bd41.pdf"},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/profile.0995e47f.png"},function(e,a,t){e.exports=t.p+"static/media/web-design.6571d152.png"},function(e,a,t){e.exports=t.p+"static/media/android.d45a2e4f.png"},,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(12),c=t.n(i),r=(t(22),t(1)),s=t(2),o=t(4),m=t(3),u=(t(23),t(24),t(13)),d=t.n(u),f=t(5),h=t.n(f),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"links-left-link"},l.a.createElement("div",{className:"container-image"},l.a.createElement("img",{className:"img-profile",src:d.a,alt:"img"})),l.a.createElement("div",{className:"links-left-icon"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:function(e){e.preventDefault(),window.open("https://linkedin.com/in/fatih-sayilir-32bb91135")}},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"}),"LinkedIn"),l.a.createElement("li",{onClick:function(e){e.preventDefault(),window.open("https://github.com/fatsay/")}},l.a.createElement("i",{className:"fab fa-github-square fa-2x"}),"GitHub"),l.a.createElement("li",{onClick:function(e){e.preventDefault(),window.open("https://twitter.com/@fatih_sayilir")}},l.a.createElement("i",{className:"fab fa-twitter-square fa-2x"}),"Twitter"),l.a.createElement("li",{onClick:function(e){e.preventDefault(),window.open("https://www.instagram.com/fatihsay/")}},l.a.createElement("i",{className:"fab fa-instagram-square fa-2x"}),"Instagram"))),l.a.createElement("div",{className:"left-resume"},l.a.createElement("a",{href:h.a,download:"Fatih_Sayilir-CV"},l.a.createElement("button",{className:"btn-button"},l.a.createElement("i",{className:"fas fa-download fa-2x"}),"Download Resume"))))}}]),t}(n.Component),b=(t(25),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).openNav=function(){document.getElementById("myOverlay").style.width="100%"},e.closeNav=function(e){e.preventDefault(),document.getElementById("myOverlay").style.width="0%"},e.closeOverlay=function(){document.getElementById("myOverlay").style.width="0%"},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-navbar"},l.a.createElement("i",{className:"fa fa-bars fa-2x",id:"icon",onClick:this.openNav}),l.a.createElement("div",{className:"navbar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"left-link",href:"#home"},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{className:"left-link",href:"#about"},"ABOUT")),l.a.createElement("li",null,l.a.createElement("a",{className:"left-link",href:"#contact"},"CONTACT")))),l.a.createElement("div",{className:"overlay",id:"myOverlay"},l.a.createElement("a",{href:{javascript:void 0},className:"closeBtn",onClick:this.closeNav},"\xd7"),l.a.createElement("div",{className:"overlay-content"},l.a.createElement("a",{href:"#home",onClick:this.closeOverlay},"HOME"),l.a.createElement("a",{href:"#about",onClick:this.closeOverlay},"ABOUT"),l.a.createElement("a",{href:"#contact",onClick:this.closeOverlay},"CONTACT"))))}}]),t}(n.Component)),v=(t(26),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-header",id:"home"},l.a.createElement("div",{className:"name-header"},"Fatih Sayilir"),l.a.createElement("p",{className:"title-header"},"Software Developer"),l.a.createElement("a",{href:"mailto:work.fatih.sayilir@gmail.com"},l.a.createElement("button",{className:"btn-button"},l.a.createElement("i",{className:"fas fa-envelope"}),"Send Message")))}}]),t}(n.Component)),E=(t(27),t(28),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about-card-row"},l.a.createElement("div",{className:"about-card-column"},l.a.createElement("div",{className:"about-card"},l.a.createElement("div",{className:"about-card-icon"},l.a.createElement("img",{src:this.props.icon,alt:"icon-web"})),l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"about-content-header"},this.props.header),l.a.createElement("div",{className:"about-content-text"},this.props.text)))))}}]),t}(n.Component)),N=(t(29),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"my-skills"},l.a.createElement("div",{className:"my-skills-header"},this.props.skill),l.a.createElement("div",{className:"skill-bar-container"},l.a.createElement("div",{className:"bar",style:{width:this.props.width,backgroundColor:"chocolate"}},this.props.width>="70"&&"Skillful",this.props.width<="69"&&"Beginner")))}}]),t}(n.Component)),w=t(14),y=t.n(w),g=t(15),k=t.n(g),O=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={skills:[{skill:"Html",width:"80%"},{skill:"Css",width:"80%"},{skill:"ReactJs",width:"75%"},{skill:"NodeJs",width:"50%"},{skill:"Java",width:"75%"},{skill:"Android",width:"50%"},{skill:"Photoshop",width:"75%"}]},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-about",id:"about"},l.a.createElement("div",{className:"header-about"},l.a.createElement("i",{className:"fas fa-user-circle"}),"ABOUT"),l.a.createElement("div",{className:"text-about"},l.a.createElement("p",null,"I am self-motivated and problem-solver developer who likes to learn and always bring value to the projects I\u2019m involved in. With a positive mindset and a belief in continuous learning, I make sure that the job gets done. I like to be challenged and has no problem working outside of my comfort zone in order to achieve the best. I have a passion for web and mobile application development. I love to create web apps as well as mobile apps.")),l.a.createElement("div",{className:"container-about-card"},l.a.createElement(E,{icon:y.a,header:"Web Development",text:"I am able to develop effective web solutions, from backend to frontend. My experience in web development based on modern technologies like HTML5, responsive website development with ReactJs and backend solutions based on NodeJs."}),l.a.createElement(E,{icon:k.a,header:"Mobile Development",text:"Mobile applications have become the most powerful tool for getting easy access to expected users worldwide. Do you need help with mobile design? I can help with that. I do mobile apps development for Android devices."})),l.a.createElement("div",{className:"container-my-skills"},l.a.createElement("div",{className:"header-about"},"My Skills"),l.a.createElement("div",null,this.state.skills.map((function(e,a){return l.a.createElement(N,{key:a,skill:e.skill,width:e.width})}))),l.a.createElement("div",{className:"about-resume"},l.a.createElement("a",{href:h.a,download:"Fatih_Sayilir-CV"},l.a.createElement("button",{className:"btn-button"},l.a.createElement("i",{className:"fas fa-download"}),"Download Resume")))))}}]),t}(n.Component),j=t(16),C=(t(30),function(e){return l.a.createElement("div",{className:"alert",id:"myAlert"},l.a.createElement("span",{className:"alert-closeBtn",onClick:function(e){e.preventDefault(),document.getElementById("myAlert").style.display="none"}},"\xd7"),l.a.createElement("strong",null,e.text))}),x=t(8),I=t.n(x);t(33),t(35);I.a.initializeApp({apiKey:"AIzaSyDvmgn7ikfPEs5EZgTB2w2uzax2SiytMdI",authDomain:"cloudfunctions-39574.firebaseapp.com",databaseURL:"https://cloudfunctions-39574.firebaseio.com",projectId:"cloudfunctions-39574",storageBucket:"cloudfunctions-39574.appspot.com",messagingSenderId:"652357980908",appId:"1:652357980908:web:4e87e26fc9b2e117d18bc9"});var S=I.a,D=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(j.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var a={name:n.state.name,email:n.state.email,subject:n.state.subject,message:n.state.message};S.functions().httpsCallable("sendMail")(a).then((function(e){n.setState({emailResult:e.data})})).catch((function(e){return n.setState({error:e.message})}))},n.state={name:"",email:"",subject:"",message:"",emailResult:"",error:""},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-contact",id:"contact"},l.a.createElement("div",{className:"header-contact"},l.a.createElement("i",{className:"fas fa-id-card"}),"CONTACT"),l.a.createElement("div",{className:"container-contact-info"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-map-marker-alt"}),"Malm\xf6, SWEDEN"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-phone-alt"}),"Phone: (+46) 766 29 98 87"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-envelope"}),"Email: work.fatih.sayilir@gmail.com "))),l.a.createElement("div",{className:"container-contact-form"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"contact-form-left"},l.a.createElement("div",{className:"contact-form-group"},l.a.createElement("input",{type:"text",id:"name",value:this.state.name,onChange:this.handleChange,placeholder:"Name",required:!0})),l.a.createElement("div",{className:"contact-form-group"},l.a.createElement("input",{type:"email",id:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email",required:!0})),l.a.createElement("div",{className:"contact-form-group"},l.a.createElement("input",{type:"text",id:"subject",value:this.state.subject,onChange:this.handleChange,placeholder:"Subject",required:!0}))),l.a.createElement("div",{className:"contact-form-right"},l.a.createElement("div",{className:"contact-form-group"},l.a.createElement("textarea",{id:"message",value:this.state.message,onChange:this.handleChange,placeholder:"Message",required:!0})),l.a.createElement("div",{className:"contact-form-group",style:{float:"right"}},l.a.createElement("button",{type:"submit",className:"btn-button"},l.a.createElement("i",{className:"fas fa-paper-plane"}),"Send Message")))),this.state.emailResult.length>0&&l.a.createElement(C,{text:this.state.emailResult})))}}]),t}(n.Component),A=(t(36),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-footer"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-twitter-square fa-2x",onClick:function(e){e.preventDefault(),window.open("https://twitter.com/@fatih_sayilir")}})),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-instagram-square fa-2x",onClick:function(e){e.preventDefault(),window.open("https://www.instagram.com/fatihsay/")}})),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-linkedin fa-2x",onClick:function(e){e.preventDefault(),window.open("https://linkedin.com/in/fatih-sayilir-32bb91135")}})),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-github-square fa-2x",onClick:function(e){e.preventDefault(),window.open("https://github.com/fatsay/")}}))))}}]),t}(n.Component)),B=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-home"},l.a.createElement("div",{className:"container-left"},l.a.createElement(p,null)),l.a.createElement("div",{className:"container-right"},l.a.createElement(b,null),l.a.createElement(v,null),l.a.createElement(O,null),l.a.createElement(D,null),l.a.createElement(A,null)))}}]),t}(n.Component);var M=function(){return l.a.createElement("div",null,l.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.ab7704bc.chunk.js.map