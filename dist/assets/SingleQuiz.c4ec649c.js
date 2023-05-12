import{d as a,g as x,o as l,c as s,e as t,t as i,u as f,F as n,h as u,l as d,m as w}from"./index.1ac4c379.js";const v={style:{background:"linear-gradient(#1d559d, #1e3a8a)"}},b={class:"w-4/5 max-w-[1500px] m-auto py-24 flex flex-col justify-center items-center"},B={class:"w-full py-20 flex flex-col xl:flex-row"},T=t("div",{class:"w-full mb-10 xl:w-1/3 xl:mb-0"},[t("p",{class:"text-5xl text-[#09EBFE] text font-semibold"},"\u8AB2\u7A0B\u6E2C\u9A57"),t("p",{class:"text-white mt-1"},"Curriculum quiz")],-1),z={class:"w-full xl:w-2/3"},g=t("p",{class:"text-[#09EBFE]"},"\u6E2C\u9A57\u4ECB\u7D39",-1),q={class:"text-white mt-1"},D=t("hr",{class:"w-full my-10 border-white"},null,-1),$={class:"w-full text-white"},C=t("p",{class:"text-[#09EBFE]"},"\u8AB2\u7A0B\u6E2C\u9A57",-1),y=t("p",null,"\u8AB2\u7A0B\u7DE8\u865F:",-1),A={key:0,class:"mt-20"},E={class:"w-full flex flex-wrap mt-6"},F=["for"],I=["id","name"],S={key:1,class:"mt-20"},V={class:"w-full flex flex-wrap mt-6"},L={class:"w-1/2"},N=["for"],j=["id"],Q=d("\u662F "),R={class:"w-1/2"},k=["for"],G=["id"],H=d("\u5426 "),J=t("div",{class:"text-end"},[t("button",{class:"w-[160px] rounded-full text-center text-white border px-4 py-1 mr-6 mt-16 font-semibold text-lg hover:bg-white hover:text-[#184D9B]"}," \u53D6\u6D88\u6E2C\u9A57 "),t("button",{class:"w-[160px] rounded-full text-center text-white border px-4 py-1 mt-16 font-semibold text-lg hover:bg-white hover:text-[#184D9B]"}," \u7E73\u4EA4\u6E2C\u9A57 ")],-1),U={__name:"SingleQuiz",setup(K){const r=a("\u9996\u5C46\u300C\u524D\u77BB VLSI IC \u5927\u8CFD\u300D\u7D93\u904E\u70BA\u671F4\u500B\u6708\u7684\u8CFD\u7A0B\uFF0C\u5169\u968E\u6BB5\u7684\u7AF6\u8CFD\uFF0C\u7531\u5143\u667A\u5927\u5B78\u7D44\u6210\u7684\u53C3\u8CFD\u968A\u4F0D\u81EA\u6C7A\u8CFD\u4E2D\u812B\u7A4E\u800C\u51FA\uFF0C\u69AE\u7372\u9996\u734E\uFF0C\u7372\u9812\u65B0\u53F0\u5E6320\u842C\u5143\u734E\u91D1\u3002\u53F0\u7A4D\u516C\u53F8\u70BA\u9F13\u52F5\u5728\u53F0\u7063\u7684\u5E74\u8F15\u5B78\u5B50\u9032\u5165\u5148\u9032\u88FD\u7A0B\u4F48\u5C40\u9818\u57DF\uFF0C\u9996\u5EA6\u8209\u8FA6\u5168\u570B\u6027\u7684\u300C\u524D\u77BB\u4F48\u5C40\u300D\u6821\u5712\u7AF6\u8CFD\uFF0C\u7372\u5F97\u5B78\u754C\u6975\u5927\u7684\u8FF4\u97FF\uFF0C\u5438\u5F15\u5927\u91CF\u7684\u5E74\u8F15\u5B78\u5B50\u6295\u8EAB\u534A\u5C0E\u9AD4\u7522\u696D"),_=a(["A","B","C","D"]),m=a([{title:"Title 1",cate:"multiple",items:["1A","1B","1C","1D"]},{title:"Title 2",cate:"t&f"},{title:"Title 3",cate:"t&f"},{title:"Title 4",cate:"t&f"},{title:"Title 5",cate:"t&f"},{title:"Title 6",cate:"multiple",items:["6A","6B","6C","6D"]},{title:"Title 7",cate:"multiple",items:["7A","7B","7C","7D"]},{title:"Title 8",cate:"multiple",items:["8A","8B","8C","8D"]},{title:"Title 9",cate:"multiple",items:["9A","9B","9C","9D"]},{title:"Title 10",cate:"multiple",items:["10A","10B","10C","10D"]}]),p=x(()=>w().params.id);return(M,O)=>(l(),s("div",v,[t("div",b,[t("div",B,[T,t("div",z,[g,t("p",q,i(r.value),1)])]),D,t("div",$,[t("div",null,[t("div",null,[C,t("p",null,"\u8AB2\u7A0B\u540D\u7A31: "+i(f(p))+" \u8AB2\u7A0B\u6E2C\u9A57",1),y]),(l(!0),s(n,null,u(m.value,(c,e)=>(l(),s(n,{key:c.name},[c.cate==="multiple"?(l(),s("div",A,[t("p",null,"\u7B2C"+i(e+1)+"\u984C: \u9019\u662F\u7B2C\u4E00\u984C\u7684\u984C\u76EE",1),t("div",E,[(l(!0),s(n,null,u(c.items,(o,h)=>(l(),s("p",{key:o,class:"w-1/2"},[t("label",{for:`quiz${e+1}${o}`},[t("input",{type:"radio",id:`quiz${e+1}${o}`,name:`quiz${e+1}`,class:"mr-4"},null,8,I),d(i(_.value[h])+": "+i(o),1)],8,F)]))),128))])])):(l(),s("div",S,[t("p",null,"\u7B2C"+i(e+1)+"\u984C: \u9019\u662F\u7B2C\u4E00\u984C\u7684\u984C\u76EE",1),t("div",V,[t("p",L,[t("label",{for:`quizT${e+1}`},[t("input",{type:"radio",id:`quizT${e+1}`,class:"mr-4"},null,8,j),Q],8,N)]),t("p",R,[t("label",{for:`quizF${e+1}`},[t("input",{type:"radio",id:`quizF${e+1}`,name:"`quiz${key + 1}`",class:"mr-4"},null,8,G),H],8,k)])])]))],64))),128)),J])])])]))}};export{U as default};