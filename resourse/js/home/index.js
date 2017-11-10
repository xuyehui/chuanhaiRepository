

var app=angular.module("myApp",["ui.router"]);
app.controller("headController",function($scope){
	/*鼠标经过川海和新闻的显示和隐藏*/
	$scope.companDis=false;
	$scope.news=false;
	$scope.company=function(num){
		if(num==1){
			$scope.companDis=true;
		}else{
			$scope.news=true;
		}
	}
	$scope.moseout=function(num){
		if(num==1){
			$scope.companDis=false;
		}else{
			$scope.news=false;
		}
	}
	
})
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/index");
	$stateProvider.state("/index",{
		url:"/index",
		templateUrl:"resourse/page/home/index.html"
	    })
	.state("/relationOur",{
		url:"/relationOur",
		templateUrl:"resourse/page/relationOur/relationOur.html",
		redirectTo:"/relationOur.mapLela"
	 })
	.state("/relationOur.mapLela",{
		url:"/mapLela",
		templateUrl:"resourse/page/relationOur/mapLela.html"
	 })
	 .state("/relationOur.message",{
		url:"/message",
		templateUrl:"resourse/page/relationOur/message.html",
		controller:function($scope){
			$scope.num1,$scope.num2,$scope.num3,$scope.num4=false;
			$scope.fun=function(thi){
				var son2=document.getElementsByClassName("son2");
				if(son2[thi-1].value.length>0){
				}
				else
				{
					switch (thi){
							 case  1:
							  $scope.num1=true;
							  break;
							  case  2:
							  $scope.num2=true;
							  break;
							  case  3:
							  $scope.num3=true;
							  break;
							  case  4:
							  $scope.num4=true;
							  break;
					}
				}
			}
		}
	 })
	.state("/factory",{
		url:"/factory",
		templateUrl:"resourse/page/factory/factory.html"
	 })
	
	 .state("/companyJy",{
		url:"/companyJy",
		templateUrl:"resourse/page/company/companyJy.html",
		redirectTo:"/companyJy.jy",
		controller:function($scope){
		}
	 })
	 .state("/companyJy.jy",{
		url:"/jy",
		templateUrl:"resourse/page/company/jy.html"
	 })
	 .state("/companyJy.introduce",{
		url:"/introduce",
		templateUrl:"resourse/page/company/introduce.html"
	 })
	 .state("/companyJy.strategy",{
		url:"/strategy",
		templateUrl:"resourse/page/company/strategy.html"
	 })
	 .state("/companyJy.culture",{
		url:"/culture",
		templateUrl:"resourse/page/company/culture.html"
	 })
	 .state("/companyJy.framework",{
		url:"/framework",
		templateUrl:"resourse/page/company/framework.html"
	 }) 
	 .state("/companyJy.duty",{
		url:"/duty",
		templateUrl:"resourse/page/company/duty.html"
	 })
	 .state("/news",{
		url:"/news",
		templateUrl:"resourse/page/news/news.html",
		redirectTo:"/news.focus"
	 })
	 .state("/news.focus",{
		url:"/focus",
		templateUrl:"resourse/page/news/focus.html",
	 })
	 .state("/news.strategy",{
		url:"/strategy",
		templateUrl:"resourse/page/news/strategy.html",
	 })
	 .state("/comeOur",{
		url:"/comeOur",
		templateUrl:"resourse/page/comeOur/comeOur.html",
		redirectTo:"/comeOur.talents"
	 })
	 .state("/comeOur.talents",{
		url:"/talents",
		templateUrl:"resourse/page/comeOur/talents.html"
	 })
	 .state("/comeOur.welfare",{
		url:"/welfare",
		templateUrl:"resourse/page/comeOur/welfare.html"
	 })
	 .state("/comeOur.invite",{
		url:"/invite",
		templateUrl:"resourse/page/comeOur/invite.html"
	 })
	 .state("/comeOur.elegant",{
		url:"/elegant",
		templateUrl:"resourse/page/comeOur/elegant.html"
	 })
}])
/*点击左侧活动效果*/
function animationSwip(num,name){
	$(".switchImg").animate({"top":113+(num*45)+'px'},500);
	/*var changeName=document.getElementById("changeName");
	changeName.innerHTML="name";*/
	$(".changeName").text(name);
}
/*产品与服务的店家更多 滑动效果*/
var num=1;
function lostOfFac(thi){
  if(num==1){
  	//说明获取的是245  要设置的是755
  	$(".synthesize_div").animate({"height":"755px"},500);
  	num=2;
  	thi.innerHTML="︽<br />查看更多服务";
  }
  else{
  	//说明获取的是755  要设置的是245  收缩了
  	$(".synthesize_div").animate({"height":"245px"},500);
  	num=1
  	thi.innerHTML="︾<br />查看更多服务";
  }
}
setTimeout(function(){
	var mySwiper = new Swiper(".swiper-container", {
				loop: true,
				autoplay: 3000,
				autoplayDisableOnInteraction: false,
				autoplayStopOnLast: false,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next'
			})
},1000)