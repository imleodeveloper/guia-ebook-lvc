//SCROLLTOTOP
const sectionHome = document.getElementById("home");
const scrollToTop = document.querySelector(".scrollToTop");

const buttonScroll = document.createElement("a");
buttonScroll.setAttribute("href", "#home");
buttonScroll.setAttribute("aria-label", "Botão de voltar ao ínicio");
const iconScroll = document.createElement("i");
iconScroll.classList.add("mdi", "mdi-chevron-up");

buttonScroll.appendChild(iconScroll);
scrollToTop.appendChild(buttonScroll);
window.addEventListener("scroll", function(){
    if(window.scrollY <= sectionHome.offsetTop){
        scrollToTop.classList.add("active");
    } else{
        scrollToTop.classList.remove("active"); 
    };
});

// ALERT PROMOTION
const divAlert = document.querySelector(".alert");
const buttonsAlert = document.querySelector(".buttons-alert");

const buttonAlert1 = document.createElement("button");
buttonAlert1.textContent = "Fechar"
const buttonAlert2 = document.createElement("a");
buttonAlert2.textContent = "Comprar eBook"
buttonAlert2.setAttribute("href", "https://go.inovapag.com/vyjvz45hw1");
buttonAlert2.setAttribute("target", "_blank");
buttonAlert2.setAttribute("rel", "noopener noreferrer");

buttonAlert1.addEventListener("click", function(click){
    if(click){
        divAlert.classList.add("active");
    } else{
        divAlert.classList.remove("active");
    }
});
buttonsAlert.appendChild(buttonAlert1);
buttonsAlert.appendChild(buttonAlert2);



/* /SECTION VIDEO
const buttonPlay = document.querySelector(".button-play");
buttonPlay.addEventListener("click", (e) => {
    const video = document.getElementById("video-resume");
    const divVideo = document.querySelector(".video-resume");
    const controls = document.querySelector(".controles");

    if(video.paused){
        video.play();
        controls.classList.add("bottom");
        divVideo.classList.add("remove-after");
    } else{
        video.pause();
        controls.classList.remove("bottom");
        divVideo.classList.remove("remove-after"); 
    }
}); */


//SECTION TALK-PUBLIC

const itemFeels = [
    {
        id: 1,
        text: `
            Já tentou se organizar e criar hábitos, mas sempre acaba desistindo no
            meio do caminho?
        `,
        
    },
    {
        id: 2,
        text: `
            Acorda sem motivação e dorme com a sensação de que não fez nada do
            que queria? 
        `,
        
    },
    {
        id: 3,
        text: `
            Se sente improdutivo, desmotivado e sem energia?
        `,
        
    },
    {
        id: 4,
        text: `
            Vive adiando seus sonhos porque nunca consegue se planejar?
        `,
        
    },
    {
        id: 5,
        text: `
            Cansado de se comparar com pessoas que parecem ter tudo sob controle?
        `,
        
    },
];

const feels = document.querySelector(".feels");
feels.innerHTML = "";

itemFeels.forEach(feel => {

    feels.innerHTML += `
        <div class="item${feel.id}">
            <i class="mdi mdi-comment-question"></i><p>${feel.text}</p>
        </div>
    `;
});

// SECTION BENEFITS
const lineItens = document.querySelector(".line-itens");
const benefits = [
    {
        id: 1,
        img: "/brain.png",
        text: `Assumir o controle da sua mente e dos seus hábitos`,
    },
    {
        id: 2,
        img: "/calendar.png",
        text: `Planejar sua semana como os grandes executivos`,
    },
    {
        id: 3,
        img: "/fire.png",
        text: `Aumentar sua disciplina e manter a motivação lá em cima`,
    },
    {
        id: 4,
        img: "/muscle.png",
        text: `Cuidar do corpo e da mente com práticas comprovadas`,
    },
    {
        id: 5,
        img: "/Hourglass.png",
        text: `Fazer mais em menos tempo (e ainda com energia)`,
    },
    {
        id: 6,
        img: "/Target.png",
        text: `Parar de começar e desistir — você vai concluir o que começa!`,
    },
];

lineItens.innerHTML = "";
benefits.forEach(benefit => {
    lineItens.innerHTML += `
        <div class="item">
            <div class="img">
                <img src="${benefit.img}" title="${benefit.text}" alt="Imagem de benefícios ${benefit.id}" loading="lazy">
            </div>
            <span>
                <p>${benefit.text}</p>
            </span>
        </div>
    `;
});


// DEPOIMENTOS SECTION
const clients = document.querySelector(".clients");
const itemClient = [
    {
        id: 1,
        text: `
            “Eu nunca fui bom com rotina, mas esse eBook me fez enxergar tudo com mais
            clareza. Hoje eu tenho controle dos meus dias e isso mudou minha vida.”
        `,
        name: "Carlos R.",
        idade: "27 anos",
        image: "/carlos-r.jpg"
    },
    {
        id: 2,
        text: `
            “Já tinha lido sobre hábitos antes, mas nada tão direto e fácil de aplicar.
            Recomendo demais.”
        `,
        name: "Juliana M.",
        idade: "34 anos",
        image: "/juliana-m.jpg",

    },
    {
        id: 3,
        text: `
            "O guia é super claro e fácil de seguir. Antes eu vivia procrastinando, agora tenho metas bem definidas e disciplina para alcançá-las."
        `,
        name: "Ana P.",
        idade: "29 anos",
        image: "/ana-p.jpg",

    },
    {
        id: 4,
        text: `
            "Recomendo para todos que querem transformar seus hábitos de forma real. As dicas de planejamento são ouro!"
        `,
        name: "Bruno S.",
        idade: "31 anos",
        image: "/bruno-s.jpg",

    },
    {
        id: 5,
        text: `
            "Em poucas semanas usando as técnicas do eBook, já sinto uma diferença enorme na minha motivação e rotina!"
        `,
        name: "Laura T.",
        idade: "26 anos",
        image: "/laura-t.jpg",

    },
    {
        id: 6,
        text: `
            "Nunca pensei que mudar meus hábitos fosse tão possível. O passo a passo desse eBook foi exatamente o que eu precisava!"
        `,
        name: "Rafael M.",
        idade: "38 anos",
        image: "/rafael-m.jpg",

    },
];
clients.innerHTML = "";
itemClient.forEach(client => {
    clients.innerHTML += `
        <div class="item">
            <span class="h-item">
                <div class="photo-client">
                    <img src="${client.image}" alt="" title="" loading="lazy">
                </div>
                <div class="name-client">
                    <p>${client.name}</p>
                </div>
                <div class="feedback">
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                    <i class="mdi mdi-star"></i>
                </div>
            </span>
            <span class="content-item">
                <p>
                    ${client.text}
                </p>
            </span>
        </div>
    `
})

// ANIMAÇÕES 
document.addEventListener("DOMContentLoaded", () => {
    //Define o limite (threshold) como 35% da altura da janela
    const threshold = window.innerHeight * 0.45;
    
    //PAGE HOME
    const sectionHome = document.querySelector(".section-home");
    const h1Home = document.querySelector(".section-home div h1");
    const h2Home = document.querySelector(".section-home div h2");
    const aHome = document.querySelector(".section-home div a");

    //PAGE VIDEO
    const sectionVideo = document.querySelector(".section-first-video");
    const h2Video = document.querySelector(".section-first-video h2");
    const pVideo = document.querySelector(".section-first-video p");
    const video =  document.querySelector(".section-first-video .video-resume");
    const aVideo =  document.querySelector(".section-first-video a");

    //PAGE TALKPUBLIC
    const sectionTalkPublic = document.querySelector(".talk-public");
    const h2TalkPublic = document.querySelector(".talk-public h2");    
    const imgTalkPublic = document.querySelector(".talk-public .feels-and-img .img");
    const feelsTalkPublic = document.querySelector(".talk-public .feels-and-img .feels");    
    const pTalkPublic = document.querySelector(".talk-public .animate");    
    
    //PAGE PRESENT PRODUCT
    const sectionProduct = document.querySelector(".present-product");
    const imgProduct = document.querySelector(".present-product div img");
    const h2Product = document.querySelector(".present-product div h2");
    const h3Product = document.querySelector(".present-product div h3");
    const p1Product = document.querySelector(".present-product div .p-animate-1");
    const p2Product = document.querySelector(".present-product div .p-animate-2");
    const ulProduct = document.querySelector(".present-product div ul");
    const aProduct = document.querySelector(".present-product div a");
    
    //BENEFITS
    const sectionBenefits = document.querySelector(".benefits");
    const h2Benefits = document.querySelector(".benefits h2");
    const itemBenefits = document.querySelector(".benefits .itens .line-itens");

    //CLIENTS
    const sectionClients = document.querySelector(".testimonials");
    const h2Clients = document.querySelector(".testimonials h2");
    const itemClients = document.querySelector(".testimonials .clients");

    //REFUND
    const sectionRefund = document.querySelector(".refund");
    const h2Refund = document.querySelector(".refund .bar-guarantee div");
    const pRefund = document.querySelector(".refund .bar-guarantee p");
    const h2Buy = document.querySelector(".refund .buy h2");
    const aBuy = document.querySelector(".refund .buy .button-buy a");
    const iconsBuy = document.querySelector(".refund .buy .button-buy span");


    //Verifica visibilidade dos elementos na tela
    const checkVisibility = () => {
        //PAGE HOME
        const sectionHome_Position = sectionHome.getBoundingClientRect();
        //PAGE VIDEO
        const sectionVideo_Position = sectionVideo.getBoundingClientRect();
        //PAGE TALKPUBLIC
        const talkPublic_position = sectionTalkPublic.getBoundingClientRect();
        //PAGE PRESENT
        const sectionProduct_position = sectionProduct.getBoundingClientRect();
        //PAGE BENEFITS
        const sectionBenefits_position = sectionBenefits.getBoundingClientRect();
        //PAGE CLIENTS
        const sectionClients_position = sectionClients.getBoundingClientRect();
        //PAGE REFUND
        const sectionRefund_position = sectionRefund.getBoundingClientRect();

        //Verifica se está visivel na tela
        //Home
        if(sectionHome_Position.top < window.innerHeight - threshold &&
            sectionHome_Position.bottom > 0
        ){
            h1Home.classList.add("visible");
            h2Home.classList.add("visible");
            aHome.classList.add("visible");
        } else{
            h1Home.classList.remove("visible");
            h2Home.classList.remove("visible");
            aHome.classList.remove("visible");
        }

        //Video
        if(sectionVideo_Position.top < window.innerHeight - threshold &&
            sectionVideo_Position.bottom > 0
        ){
            h2Video.classList.add("visible");
            pVideo.classList.add("visible");
            video.classList.add("visible");
            aVideo.classList.add("visible");
        } else{
            h2Video.classList.remove("visible");
            pVideo.classList.remove("visible");
            video.classList.remove("visible");
            aVideo.classList.remove("visible");
        }

        //Talk
        if(talkPublic_position.top < window.innerHeight - threshold &&
            talkPublic_position.bottom > 0
        ){
            h2TalkPublic.classList.add("visible");
            imgTalkPublic.classList.add("visible");
            feelsTalkPublic.classList.add("visible");
            pTalkPublic.classList.add("visible");
        } else{
            h2TalkPublic.classList.remove("visible");
            imgTalkPublic.classList.remove("visible");
            feelsTalkPublic.classList.remove("visible");
            pTalkPublic.classList.remove("visible");
        }

        //Product
        if(sectionProduct_position.top < window.innerHeight - threshold &&
            sectionProduct_position.bottom > 0
        ){
            imgProduct.classList.add("visible");
            h2Product.classList.add("visible");
            h3Product.classList.add("visible");
            p1Product.classList.add("visible");
            p2Product.classList.add("visible");
            ulProduct.classList.add("visible");
            aProduct.classList.add("visible");
        } else{
            imgProduct.classList.remove("visible");
            h2Product.classList.remove("visible");
            h3Product.classList.remove("visible");
            p1Product.classList.remove("visible");
            p2Product.classList.remove("visible");
            ulProduct.classList.remove("visible");
            aProduct.classList.remove("visible");
        }
        
        //BENEFITS
        if(sectionBenefits_position.top < window.innerHeight - threshold &&
            sectionBenefits_position.bottom > 0
        ){
            h2Benefits.classList.add("visible");
            itemBenefits.classList.add("visible");
        } else{
            h2Benefits.classList.remove("visible");
            itemBenefits.classList.remove("visible");
        }
        
        //CLIENTS
        if(sectionClients_position.top < window.innerHeight - threshold &&
            sectionClients_position.bottom > 0
        ){
            h2Clients.classList.add("visible");
            itemClients.classList.add("visible");


        } else{
            h2Clients.classList.remove("visible");
            itemClients.classList.remove("visible");
        }

        //REFUND
        if(sectionRefund_position.top < window.innerHeight - threshold &&
            sectionRefund_position.bottom > 0
        ){
            h2Refund.classList.add("visible");
            pRefund.classList.add("visible");
            h2Buy.classList.add("visible");
            aBuy.classList.add("visible");
            iconsBuy.classList.add("visible");

        } else{
            h2Refund.classList.remove("visible");
            pRefund.classList.remove("visible");
            h2Buy.classList.remove("visible");
            aBuy.classList.remove("visible");
            iconsBuy.classList.remove("visible");
        }
    };
    //Chama a função na rloagem e ao carregar a página
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});