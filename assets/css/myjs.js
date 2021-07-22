
function openNav() {
    document.getElementById('nav__pc').style.transform = "translateX(0)";
    document.getElementById('nav__overlay').style.display = "block";
}

function closeNav(){
    document.getElementById('nav__pc').style.transform = "translateX(-100%)";
    document.getElementById('nav__overlay').style.display = "none";
}



function openNavCart (){
    document.getElementById('header__cart-nav').style.transform = "translateX(0)";
    document.getElementById('nav__overlay').style.display = "block";
}

function CloseNav (){
    document.getElementById('header__cart-nav').style.transform = "translateX(100%)";
    document.getElementById('nav__overlay').style.display = "none";
}



var iconRight = document.querySelectorAll('.nav__menu-list-icon')
var OpenProductList = document.querySelector('.nav__menu-list-product');

for(var i =0; i <iconRight.length; i++){
    
    iconRight[0].onclick = function(){
        var x = document.getElementById('product-list');
        if (x.style.display === 'none') {
            x.style.display = 'block';
            document.getElementById('icon-right').style.transform= "rotateZ(90deg)";
            document.getElementById('menu_icon-right').style.backgroundColor = "#e49d3b";
            document.getElementById('icon-right').style.color = "#fff";
            document.getElementById('icon-right').style.width = "51px";
        } else {
            x.style.display = 'none';
            document.getElementById('icon-right').style.transform= "rotateZ(0)";
            document.getElementById('menu_icon-right').style.backgroundColor = "#fff";
            document.getElementById('icon-right').style.color = "#000";
        }
    }

    iconRight[1].onclick = function(){
        var x = document.getElementById('nav__menu-list-product');
        if (x.style.display === 'none') {
            x.style.display = 'block';
            document.getElementById('icon-rightLike').style.transform= "rotateZ(90deg)";
            document.getElementById('menu_icon-rightLike').style.backgroundColor = "#e49d3b";
            document.getElementById('icon-rightLike').style.color = "#fff";
            document.getElementById('icon-rightLike').style.width = "51px";  
            
        } else {
            x.style.display = 'none';
            document.getElementById('icon-rightLike').style.transform= "rotateZ(0)";
            document.getElementById('menu_icon-rightLike').style.backgroundColor = "#fff";
            document.getElementById('icon-rightLike').style.color = "#000";
        }
    }

    iconRight[2].onclick = function(){
        var x = document.getElementById('nav__menu-list-productStyle');
        if (x.style.display === 'none') {
            x.style.display = 'block';
            document.getElementById('icon-rightStyle').style.transform= "rotateZ(90deg)";
            document.getElementById('menu_icon-rightStyle').style.backgroundColor = "#e49d3b";
            document.getElementById('icon-rightStyle').style.color = "#fff";
            document.getElementById('icon-rightStyle').style.width = "51px";
            
        } else {
            x.style.display = 'none';
            document.getElementById('icon-rightStyle').style.transform= "rotateZ(0)";
            document.getElementById('menu_icon-rightStyle').style.backgroundColor = "#fff";
            document.getElementById('icon-rightStyle').style.color = "#000";
          
        }
    }
}

//best sell

var bestSellLeft = document.querySelector('.best-seller__arrow-left')
var bestSellRight = document.querySelector('.best-seller__arrow-right')
var sellContainer = document.querySelector('.bestsell__product-container-list')

bestSellRight.onclick = function() {
    sellContainer.classList.toggle('selltranform')
    document.querySelector('.bestsell-dot_left span').classList.toggle('bestsell-active')
    document.querySelector('.bestsell-dot_right span').classList.toggle('bestsell-active')
}

bestSellLeft.onclick = function() {
    sellContainer.classList.toggle('selltranform')
    document.querySelector('.bestsell-dot_left span').classList.toggle('bestsell-active')
    document.querySelector('.bestsell-dot_right span').classList.toggle('bestsell-active')
}

// feedback



function feedback_in() {
    document.getElementById('feedback__member').style.transform = "translateX(100%)";
    document.getElementById('feedback__member2').style.transform = "translateX(0)";
}

function feedback_out() {
    document.getElementById('feedback__member').style.transform = "translateX(0)";
    document.getElementById('feedback__member2').style.transform = "translateX(100%)";
}



var left = document.querySelector('.feedback__arrow-left');
var right = document.querySelector('.feedback__arrow-right');
var member =  document.querySelector('.feedback__content-member-container');

var dot_1 = document.querySelector('.owl-dot1');
var dot_2 = document.querySelector('.owl-dot2');



left.onclick = function() {
    member.classList.toggle('tranform')
    dot_1.classList.toggle('noActive')
    dot_2.classList.toggle('activedot')
}

right.onclick = function(){
    member.classList.toggle('tranform')
    dot_2.classList.toggle('activedot')
    dot_1.classList.toggle('noActive')
}

// cau hoi thuong gap

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const questionItems = $$('.question-content__item')
const contentItems = $$('.ques-container')
const iconsMinus = $$('.fa-minus')
const iconsPlus = $$('.fa-plus')


questionItems.forEach((item, index) => {
    const content = contentItems[index]
    const minus = iconsMinus[index]

    
    item.onclick = function(){
        $('.ques-container.height').classList.remove('height')
        $('.fas.fa-minus.active').classList.remove('active')
       
        content.classList.add('height')
    
        if(content.classList.contains('height')){
            minus.classList.add('active')
        }
    }
});

// timer countdow

var fuT = new Date("Jul 31,2021 00:00:00").getTime()
	setInterval(function(){

		var now = new Date().getTime()
		var D = fuT - now
		var days = Math.floor(D/(1000*60*60*24))
		var hours = Math.floor(D/(1000*60*60))
		var minutes = Math.floor(D/(1000*60))
		var seconds = Math.floor(D/(1000))

		hours %= 24
		minutes %= 60
		seconds %= 60

		document.getElementById("days").innerText = days
		document.getElementById("hours").innerText = hours
		document.getElementById("minutes").innerText = minutes
		document.getElementById("seconds").innerText = seconds
	},1000)


    // moblie

    //sứ mệnh

    var sumenhLeft = document.querySelector('.sumenh__arrow-left')
    var sumenhRight = document.querySelector('.sumenh__arrow-right')
    var sumenhContainer = document.querySelector('.sumenh-halome__content-container')

    var dot1 = document.getElementById('owl-dots_1')
    var dot2 = document.getElementById('owl-dots_2')


    sumenhLeft.onclick = function() {
        sumenhContainer.classList.toggle('tranformMobile')
        dot1.classList.toggle('bestsell-active')
        dot2.classList.toggle('bestsell-active')
    }

    sumenhRight.onclick = function() {
        sumenhContainer.classList.toggle('tranformMobile')
        dot1.classList.toggle('bestsell-active')
        dot2.classList.toggle('bestsell-active')
    }

    //footer

    var icon1 = document.querySelector('#icon1')
    var icon2 = document.querySelector('#icon2')
    var icon3 = document.querySelector('#icon3')
    var ContainerIcon = document.querySelectorAll('.icon-footer')
    
    for(var i =0; i <ContainerIcon.length; i++){

        ContainerIcon[0].onclick = function() {
            var content = document.getElementById('footer-content1')
            if(content.style.height === '100%') {
                content.style.height = "0";
                icon1.style.transform = "rotateZ(0deg)";
                icon1.style.backgroundColor = "unset"
                icon1.style.color = "#fff"
                icon1.style.display = "flex"
                icon1.style.justifyContent = "center"
                icon1.style.alignItems = "center"
            }else {
                content.style.height = '100%';
                icon1.style.transform = "rotateZ(180deg)";
                icon1.style.backgroundColor = "#fff"
                icon1.style.color = "#000"
                icon1.style.display = "flex"
                icon1.style.justifyContent = "center"
                icon1.style.alignItems = "center"
            }
        }

        ContainerIcon[1].onclick = function() {
            var content = document.getElementById('footer-content2')
            
            if(content.style.height === '100%') {
                 content.style.height = "0";
                icon2.style.transform = "rotateZ(0deg)";
                icon2.style.backgroundColor = "unset"
                icon2.style.color = "#fff"
                icon2.style.display = "flex"
                icon2.style.justifyContent = "center"
                icon2.style.alignItems = "center"
                
            }else {
                content.style.height = '100%';
                icon2.style.transform = "rotateZ(180deg)";
                icon2.style.backgroundColor = "#fff"
                icon2.style.color = "#000"
                icon2.style.display = "flex"
                icon2.style.justifyContent = "center"
                icon2.style.alignItems = "center"
            }
        }

        ContainerIcon[2].onclick = function() {
            var content = document.getElementById('footer-content3')
            
            if(content.style.height === '100%') {
                 content.style.height = "0";
                icon3.style.transform = "rotateZ(0deg)";
                icon3.style.backgroundColor = "unset"
                icon3.style.color = "#fff"
                icon3.style.display = "flex"
                icon3.style.justifyContent = "center"
                icon3.style.alignItems = "center"
                
            }else {
                content.style.height = '100%';
                icon3.style.transform = "rotateZ(180deg)";
                icon3.style.backgroundColor = "#fff"
                icon3.style.color = "#000"
                icon3.style.display = "flex"
                icon3.style.justifyContent = "center"
                icon3.style.alignItems = "center"
            }
        }
    }