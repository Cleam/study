/*** *** ***  全局变量  *** *** ***/
var canvasWidth=480;//画布的宽
var canvasHeight=650;//画布的高
var canvas=document.getElementById("canvas");
canvas.width=canvasWidth;
canvas.height=canvasHeight;
var ctx=canvas.getContext("2d");
const PHASE_DOWNLOAD=1;//1.图片下载阶段
const PHASE_READY=2;//2.就绪阶段
const PHASE_LOADING=3;//3.游戏加载阶段
const PHASE_PLAY=4;//4.游戏进行阶段
const PHASE_PAUSE=5;//5.游戏暂停阶段
const PHASE_GAMEOVER=6;//6.游戏结束阶段

var curPhase=PHASE_DOWNLOAD;

var heroCount=3;//剩余当前可用的英雄数量
var heroScore=0;//当前英雄得分；

/*** *** ***  1.图片下载阶段  *** *** ***/
//游戏所需的所有图片
var imgBackground,imgBullet1,imgGamePauseNor,
    imgsEnemy1=[],//小号敌机爆炸
    imgsEnemy2=[],//中号敌机爆炸
    imgsEnemy3=[],//大号敌机爆炸
    imgsGameLoading=[],//游戏界面加载所有图片
    imgsHero=[],//英雄所有图片
    imgStart;//就绪阶段

download();//开始下载


/**********阶段一：下载******************/
function download(){
    var progress=0;//下载进度
    ctx.font="54px Helvetica";
    function drawProgress(){
        ctx.clearRect(0,0,canvasWidth,canvasWidth);
        var txt=progress+"%";
        var w=ctx.measureText(txt).width;
        ctx.fillText(txt,canvasWidth/2-w/2,canvasHeight/2+80/2);
        ctx.strokeText(txt,canvasWidth/2-w/2,canvasHeight/2+80/2);
        if(progress>=100){//所有图片加载完成
            startGame();
        }
    }
    imgBackground=new Image();
    imgBackground.src="img/background.png";
    imgBackground.onload=function(){
        progress+=4;
        drawProgress();
    }
    imgBullet1=new Image();
    imgBullet1.src="img/bullet1.png";
    imgBullet1.onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy1[0]=new Image();
    imgsEnemy1[0].src="img/enemy1.png";
    imgsEnemy1[0].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy1[1]=new Image();
    imgsEnemy1[1].src="img/enemy1_down1.png";
    imgsEnemy1[1].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy1[2]=new Image();
    imgsEnemy1[2].src="img/enemy1_down2.png";
    imgsEnemy1[2].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy1[3]=new Image();
    imgsEnemy1[3].src="img/enemy1_down3.png";
    imgsEnemy1[3].onload=function(){
        progress+=3;
    }
    imgsEnemy1[4]=new Image();
    imgsEnemy1[4].src="img/enemy1_down4.png";
    imgsEnemy1[4].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy2[0]=new Image();
    imgsEnemy2[0].src="img/enemy2.png";
    imgsEnemy2[0].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy2[1]=new Image();
    imgsEnemy2[1].src="img/enemy2_down1.png";
    imgsEnemy2[1].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy2[2]=new Image();
    imgsEnemy2[2].src="img/enemy2_down2.png";
    imgsEnemy2[2].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy2[3]=new Image();
    imgsEnemy2[3].src="img/enemy2_down3.png";
    imgsEnemy2[3].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy2[4]=new Image();
    imgsEnemy2[4].src="img/enemy2_down4.png";
    imgsEnemy2[4].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy3[3]=new Image();
    imgsEnemy3[3].src="img/enemy3_hit.png";
    imgsEnemy3[3].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy3[4]=new Image();
    imgsEnemy3[4].src="img/enemy3_down1.png";
    imgsEnemy3[4].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy3[5]=new Image();
    imgsEnemy3[5].src="img/enemy3_down2.png";
    imgsEnemy3[5].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy3[6]=new Image();
    imgsEnemy3[6].src="img/enemy3_down3.png";
    imgsEnemy3[6].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy3[7]=new Image();
    imgsEnemy3[7].src="img/enemy3_down4.png";
    imgsEnemy3[7].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy3[8]=new Image();
    imgsEnemy3[8].src="img/enemy3_down5.png";
    imgsEnemy3[8].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsEnemy3[9]=new Image();
    imgsEnemy3[9].src="img/enemy3_down6.png";
    imgsEnemy3[9].onload=function(){
        progress+=3;
        drawProgress();
    }

    imgsEnemy3[1]=new Image();
    imgsEnemy3[1].src="img/enemy3_n1.png";
    imgsEnemy3[1].onload=function(){
        progress+=3;
    }
    imgsEnemy3[2]=new Image();
    imgsEnemy3[2].src="img/enemy3_n2.png";
    imgsEnemy3[2].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsGameLoading[0]=new Image();
    imgsGameLoading[0].src="img/game_loading1.png";
    imgsGameLoading[0].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsGameLoading[1]=new Image();
    imgsGameLoading[1].src="img/game_loading2.png";
    imgsGameLoading[1].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsGameLoading[2]=new Image();
    imgsGameLoading[2].src="img/game_loading3.png";
    imgsGameLoading[2].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsGameLoading[3]=new Image();
    imgsGameLoading[3].src="img/game_loading4.png";
    imgsGameLoading[3].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgGamePauseNor=new Image();
    imgGamePauseNor.src="img/game_pause_nor.png";
    imgGamePauseNor.onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsHero[2]=new Image();
    imgsHero[2].src="img/hero_blowup_n1.png";
    imgsHero[2].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsHero[3]=new Image();
    imgsHero[3].src="img/hero_blowup_n2.png";
    imgsHero[3].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsHero[4]=new Image();
    imgsHero[4].src="img/hero_blowup_n3.png";
    imgsHero[4].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsHero[5]=new Image();
    imgsHero[5].src="img/hero_blowup_n4.png";
    imgsHero[5].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsHero[0]=new Image();
    imgsHero[0].src="img/hero1.png";
    imgsHero[0].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgsHero[1]=new Image();
    imgsHero[1].src="img/hero2.png";
    imgsHero[1].onload=function(){
        progress+=3;
        drawProgress();
    }
    imgStart=new Image();
    imgStart.src="img/start.png";
    imgStart.onload=function(){
        progress+=3;
        drawProgress();
    }
}


/*** *** *** 阶段二.就绪阶段  *** *** ***/
var sky;
function startGame(){
    curPhase=PHASE_READY;
    sky=new Sky(imgBackground);//创建天空对象
    logo=new Logo(imgStart);
    startEngine();//启动定时器，游戏引擎
    canvas.onclick=function(){
        if(curPhase==PHASE_READY){
            curPhase=PHASE_LOADING;
            loading=new Loading(imgsGameLoading);
        }
    }
}
function Sky(img){
    this.x1=0;//第一张背景图坐标
    this.y1=0;
    this.x2=0;//第二张背景图坐标
    this.y2=-img.height;
    this.draw=function(){
        ctx.drawImage(img,this.x1,this.y1);
        ctx.drawImage(img,this.x2,this.y2);
    }
    this.move=function(){//移动天空对象
        this.y1++;//图片向下移动
        this.y2++;
        if(this.y1>=canvasHeight){
            this.y1=this.y2-img.height;
        }
        if(this.y2>=canvasHeight){
            this.y2=this.y1-img.height;
        }
    }
}
function Logo(img){
    this.x=canvasWidth/2-img.width/2;
    this.y=canvasHeight/2-img.height/2;
    this.draw=function(){
        ctx.drawImage(img,this.x,this.y);
    }
}


/*** *** ***阶段三：游戏加载阶段  *** *** ***/
var loading=new Loading(imgsGameLoading);
function Loading(imgs){
    this.x=0;
    this.y=canvasHeight-imgs[0].height;
    this.index=0;
    this.draw=function(){
        ctx.drawImage(imgs[this.index],this.x,this.y);
    }
    this.counter=0 //记录了move函数的调用次数；
    this.move=function(){
        this.counter++;//只有move函数被调用n次以后才会执行
        if(this.counter%6===0){
            this.index++;
            if(this.index>=imgs.length){
                curPhase=PHASE_PLAY;
                //进入游戏，创建我方英雄
                hero=new Hero(imgsHero);
                bulletList=new BulletList();
                enemyList=new EnemyList();
            }
        }
    }
}


/*** *** ***阶段四：游戏进行阶段  *** *** ***/
var hear;//不能new
//我方英雄飞机的构造方法
function  Hero(imgs){
    //我方飞机默认初始出现在屏幕下方中央
    this.x=canvasWidth/2-imgs[0].width/2;
    this.y=canvasHeight-imgs[0].height;
    this.width=imgs[0].width;
    this.height=imgs[0].height;
    this.index=0;//待绘制的是数组中的哪个图片
    this.crashed=false;//当前是否开始坠毁
    this.draw=function(){
        ctx.drawImage(imgs[this.index],this.x,this.y);
    }
    this.counter=0;
    this.counter1=0;
    this.move =function(){
        this.counter++;
        this.counter1++;
        if(this.counter%3===0){
            if(!this.crashed){
                if(this.index===0){
                    this.index=1;
                }else if(this.index===1){
                    this.index=0;
                }
            }else{//开始撞毁程序
                if(this.counter1%2===0){
                    if(this.index===0||this.index===1){
                        this.index=2;
                    }else if(this.index<imgs.length-1){
                        this.index++;
                    }else{//撞毁程序结束，血减一，创建新英雄
                        heroCount--;
                        if(heroCount>0){//还有血继续创建新英雄
                            hero=new Hero(imgsHero);
                        }else{//没有血了，游戏结束
                            curPhase=PHASE_GAMEOVER;
                        }
                    }
                }
            }
        }
        //边移动，边发射子弹
        if(this.counter%1===0){//此处的10指定每两发子弹的间隔，间隔越小发射的越快
            this.fire();
        }
    }
    this.fire=function(){//发射子弹
        var b= new Bullet(imgBullet1);
        bulletList.add(b);
        //var b1= new Bullet(imgBullet1);
        //bulletList.add(b1);
        //b1.x+=20;
        //var b2= new Bullet(imgBullet1);
        //bulletList.add(b2);
        //b2.x-=20;
        //var b3= new Bullet(imgBullet1);
        //bulletList.add(b3);
        //b3.x+=40;
        //var b4= new Bullet(imgBullet1);
        //bulletList.add(b4);
        //b4.x-=40;
        //var b5= new Bullet(imgBullet1);
        //bulletList.add(b5);
        //b5.x+=60;
        //var b6= new Bullet(imgBullet1);
        //bulletList.add(b6);
        //b6.x-=60;
        //var b7= new Bullet(imgBullet1);
        //bulletList.add(b7);
        //b7.x+=80;
        //var b8= new Bullet(imgBullet1);
        //bulletList.add(b8);
        //b8.x-=80;
    }
}
//当鼠标在画布上方移动是，修改我方飞机的位置
canvas.onmousemove= function (event) {
    if(curPhase===PHASE_PLAY){
        var x=event.offsetX;//鼠标相对于画布左上角的偏移量
        var y=event.offsetY;
        hero.x=x - imgsHero[0].width/2;
        hero.y=y - imgsHero[0].height/2;
    }
}
//子弹对象的构造方法
function Bullet(img){
    this.x=hero.x+(imgsHero[0].width/2-img.width/2);
    this.y=hero.y-img.height;
    this.width=img.width;
    this.height=img.height;
    this.removable=false;//当前子弹能否被删除
    this.draw=function(){
        ctx.drawImage(img,this.x,this.y);
    }
    this.move=function(){
        this.y-=30;  //此处指定子弹的移动速度，可以设置为全局变量；
        //若飞出画布的上边界、或打中敌机应该消失，子弹消失；
        if(this.y<=-img.height){//添加子弹
            this.removable=true;
        }

    }
}
//子弹列表对象，其中保存当前的所有子弹
var bulletList;
function BulletList(){
    this.arr= [];//画布上所有的子弹
    this.add=function(bullet){
        this.arr.push(bullet);
    }
    this.remove=function(i){//删除子弹
        this.arr.splice(i,1);
    }
    this.draw= function () {//绘制每一个子弹
        for(var i in this.arr){
            this.arr[i].draw();
        }
    }
    this.move=function(){
        for(var i in this.arr){
            this.arr[i].move();//让每一个子弹都移动
            if(this.arr[i].removable){
                this.remove(i);
            }
        }
    }
}

//小号敌机
function Enemy1(imgs){
    this.x=Math.random()*(canvasWidth-imgs[0].width);
    this.y=-imgs[0].height;
    this.width=imgs[0].width;
    this.height=imgs[0].height;
    this.index=0;//当前绘制的图片在数组中的下标
    this.speed=7;//小敌机每42ms移动的距离
    this.removable=false;//可以删除了吗
    this.blood=2;//小敌机只有2滴血
    this.crashed=false;//是否被撞毁
    this.draw= function () {
        ctx.drawImage(imgs[this.index],this.x,this.y);
    }
    this.counter=0;
    this.move=function(){
        this.counter++;
        this.y+=this.speed;
        this.checkHit();//碰撞检查
        //若飞出下边界或炸毁了，可以删除了；
        if(this.crashed &&this.counter%3===0){
            if(this.index===0)this.index=1;
            else if(this.index<imgs.length-1)this.index++;
            else {this.removable=true;
            heroScore+=2;}
        }
        if(this.y>=canvasHeight){//飞出下边界
            this.removable=true;
        }
    }
    //碰撞检验
    /*obj1.x+obj1.width>=obj2.x
    * obj2.x+obj2.width>=obj1.x
    * obj1.y+obj1.height>=obj2.y
    * boj2.y+obj2.height>=obj1.y*/
    this.checkHit = function(){
    //每个敌机必须和我方所有的子弹/英雄做判断
        for(var i in bulletList.arr){
            var b= bulletList.arr[i];
            if( (this.x+this.width>= b.x)&& (b.x+ b.width>=this.x)&& (this.y+this.height>= b.y)&& (b.y+ b.height>=this.y) ){
                this.blood--;
                if(this.blood<=0){//没有血了 开始撞毁程序
                    this.crashed = true;
                }
                b.removable=true;
            }
        }
        if((this.x+this.width>=hero.x)&&
            (hero.x+hero.width>=this.x)&&
            (this.y+this.height>=hero.y)&&
            (hero.y+hero.height>=this.y)){
                hero.crashed=true;
        }

    }

}
//中号敌机
function Enemy2(imgs){
    this.x=Math.random()*(canvasWidth-imgs[0].width);
    this.y=-imgs[0].height;
    this.width=imgs[0].width;
    this.height=imgs[0].height;
    this.index=0;//当前绘制的图片在数组中的下标
    this.speed=6;//小敌机每42ms移动的距离
    this.removable=false;//可以删除了吗
    this.blood=5;//中敌机只有4滴血
    this.crashed=false;//是否被撞毁
    this.draw= function () {
        ctx.drawImage(imgs[this.index],this.x,this.y);
    }
    this.counter=0;
    this.move=function(){
        this.counter++;
        this.y+=this.speed;
        this.checkHit();//碰撞检查
        //若飞出下边界或炸毁了，可以删除了；
        if(this.crashed &&this.counter%3===0){
            if(this.index===0)this.index=1;
            else if(this.index<imgs.length-1)this.index++;
            else {this.removable=true;heroScore+=4;}
        }
        if(this.y>=canvasHeight){//飞出下边界
            this.removable=true;
        }
    }
    this.checkHit = function(){
        //每个敌机必须和我方所有的子弹/英雄做判断
        for(var i in bulletList.arr){
            var b= bulletList.arr[i];
            if( (this.x+this.width>= b.x)&&
                (b.x+ b.width>=this.x)&&
                (this.y+this.height>= b.y)&&
                (b.y+ b.height>=this.y) ){
                this.blood--;
                if(this.blood<=0){//没有血了 开始撞毁程序
                    this.crashed = true;
                }
                b.removable=true;
            }
        }
        if((this.x+this.width>=hero.x)&&
            (hero.x+hero.width>=this.x)&&
            (this.y+this.height>=hero.y)&&
            (hero.y+hero.height>=this.y)){
            hero.crashed=true;
        }
    }

}
//大号敌机
function Enemy3(imgs){
    this.x=Math.random()*(canvasWidth-imgs[1].width);
    this.y=-imgs[1].height;
    this.width=imgs[1].width;
    this.height=imgs[1].height;
    this.index=1;//当前绘制的图片在数组中的下标
    this.speed=3;//大敌机每42ms移动的距离
    this.removable=false;//可以删除了吗
    this.blood=10;//中敌机只有4滴血
    this.crashed=false;//是否被撞毁
    this.draw= function () {
        ctx.drawImage(imgs[this.index],this.x,this.y);
    }
    this.counter=0;//move函数被调用的次数
    this.counter1=0;
    this.move=function(){
        this.counter++;
        this.counter1++;
        this.y+=this.speed;
        this.checkHit();//碰撞检查
        if(this.counter%6===0){
            if(this.index===1)this.index=2;
            else if(this.index===2)this.index=1;
        }
        //若飞出下边界或炸毁了，可以删除了；
        if(this.crashed &&this.counter1%4===0){
            if(this.index===1||this.index===2)this.index=3;
            else if(this.index<imgs.length-1)this.index++;
            else {this.removable=true;heroScore+=6;}
        }
        if(this.y>=canvasHeight){//飞出下边界
            this.removable=true;
        }
    }
    this.checkHit = function(){
        //每个敌机必须和我方所有的子弹/英雄做判断
        for(var i in bulletList.arr){
            var b= bulletList.arr[i];
            if( (this.x+this.width>= b.x)&&
                (b.x+ b.width>=this.x)&&
                (this.y+this.height>= b.y)&&
                (b.y+ b.height>=this.y) ){
                this.blood--;
                if(this.blood<=0){//没有血了 开始撞毁程序
                    this.crashed = true;
                }
                b.removable=true;
            }
        }
        if((this.x+this.width>=hero.x)&&
            (hero.x+hero.width>=this.x)&&
            (this.y+this.height>=hero.y)&&
            (hero.y+hero.height>=this.y)){
            hero.crashed=true;
        }
    }

}
//所有敌机组成的列表
var enemyList;
var ss=100,l=1;//初始的速度
function EnemyList(){
    this.arr=[];//保存所有的敌机
    this.add=function(enemy){//增加新敌机
        this.arr.push(enemy);
    }
    this.remove=function(i){//删除敌机
        this.arr.splice(i,1);
    }
    this.draw =function () {//绘制所有的敌机
        for (var i in this.arr){
            this.arr[i].draw();
        }
    }
    this.move=function (){//让所有的敌机移动
        if(heroScore>(100*l)&&(ss>20)){//判断多少分数加一级别
           ss-=20;
            l++;
            console.log("1");
        }
        this.generate();//生成新的敌人
        for (var i in this.arr){
            var e =this.arr[i];
            e.move();
            if(e.removable){
                this.remove(i);
            }
        }
    }
    //随机生成一个敌机
    this.generate = function () {
        /*敌机生成的要求：
        * 何时生成敌机是随机的，不是定时或者连续的
        * 小号敌机的规律最大，中号其次，大号最少
        * 思路：0~99随机数，小号0/1/2/3/4/5/ 中号 6/7/8/  大号9/  其他值不出敌机*/
        //进一步扩展 6 9 10 设置为变量设置游戏的难度v


        var num=Math.floor(Math.random()*ss);
        if(num<6){
            this.add(new Enemy1(imgsEnemy1));
        }else if(num<9){
            this.add(new Enemy2(imgsEnemy2));
        }else if(num<10){
            this.add(new Enemy3(imgsEnemy3));
        }
    }
}

//绘制当前的分和英雄神域数
function drawStat(){//绘制统计数据
    ctx.font="15px Helvetica";
    ctx.fillStyle="#333"
    var score="Score:"+heroScore;
    ctx.fillText(score,10,35);
    var heros="Heros"+heroCount;
    var w=ctx.measureText(heros).width;
    ctx.fillText(heros,canvas.width-w-10,35);

}

/*** *** ***阶段五：游戏暂停阶段  *** *** ***/
canvas.onmouseout= function () {
    if(curPhase===PHASE_PLAY){
        curPhase=PHASE_PAUSE;
    }
}
canvas.onmouseover = function(){
    if(curPhase===PHASE_PAUSE){
        curPhase=PHASE_PLAY;
    }
}
function drawPause(){
    var x=canvasWidth/2-imgGamePauseNor.width/2;
    var y=canvasHeight/2-imgGamePauseNor.height/2;
    ctx.drawImage(imgGamePauseNor,x,y);
}

/*** *** ***阶段六：游戏结束阶段  *** *** ***/
function drawGameover(){
    ctx.font="60px Helvetica";
    ctx.fillStyle="#ccc";
    ctx.strokeStyle="#333";
    var txt="ZZ I LOVE YOU";
    var w=ctx.measureText(txt).width;
    var x=canvasWidth/2- w/2;
    var y=canvasHeight/2+60/2;
    ctx.fillText(txt,x,y);
    ctx.strokeText(txt,x,y);
}

/*** *** ***  游戏的主引擎--主定时器  *** *** ***/
function startEngine(){
    setInterval(function(){
        sky.draw();
        sky.move();
        switch(curPhase){
            case PHASE_READY:logo.draw();
                break;
            case PHASE_LOADING:
                loading.draw();
                loading.move();
                break;
            case PHASE_PLAY:
                hero.draw();
                hero.move();
                bulletList.draw();
                bulletList.move();
                enemyList.draw();
                enemyList.move();
                drawStat();
                break;
            case PHASE_PAUSE:
                hero.draw();
                bulletList.draw();
                enemyList.draw();
                drawStat();
                drawPause();
                break;
            case PHASE_GAMEOVER:
                drawGameover()
                break;
        }
    },42);
}