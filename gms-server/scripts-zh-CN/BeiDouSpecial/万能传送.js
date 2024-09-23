/* ==================
 脚本类型: 万能传送   
 脚本作者：汉堡  
 联系方式：北斗项目组
 =====================
 */
//------------------------------------------------------------------------
var bossmaps = Array(			
		Array(230040420,380000,"鱼王BOSS                  #r（消耗38万金币）#b"), 
		Array(220080000,380000,"闹钟BOSS                  #r（消耗38万金币）#b"), 
		Array(211042300,380000,"扎昆BOSS                  #r（消耗38万金币）#b"),
        //Array(702070400,380000,"妖僧BOSS                  #r（消耗38万金币）#b"),
        //Array(541020700,380000,"树精BOSS                  #r（消耗38万金币）#b"),		
        Array(105100100,380000,"巨魔蝙蝠                  #r（消耗38万金币）#b"),			
		Array(240040700,380000,"暗黑龙王                  #r（消耗38万金币）#b"),
        Array(270000100,380000,"品克缤BOSS                #r（消耗38万金币）#b")		
		);
//------------------------------------------------------------------------

var monstermaps = Array(
		Array(104040000,500,"射手训练场#r（500金币）#b　　 　　适合 1 ~ 15 级玩家"),
		Array(101010100,580,"大木林#r（580金币）#b 　　　   　 适合 8 ~ 15 级玩家"),
        Array(103000101,680,"地铁<第1地区>#r（680金币）#b　  　适合 20 ~ 25 级玩家"),
		Array(220010500,780,"露台大厅#r（780金币）#b           适合 25 ~ 30 级玩家"),
		Array(101030001,880,"野猪的领土Ⅱ#r（880金币）#b　 　  适合 25 ~ 35 级玩家"),
		Array(103000105,980,"地铁<第4地区>#r（980金币）#b　  　适合 35 ~ 50 级玩家"), 
		Array(100040103,1080,"猴子森林Ⅱ#r（1080金币）#b 　　　 适合 35 ~ 50 级玩家"),
		Array(220040000,1180,"时间之路1#r（1180金币）#b　 　　　适合 45 ~ 60 级玩家"),
		Array(105040306,1280,"巨人之林#r（1280金币）#b　　 　 　适合 50 ~ 65 级玩家"),	
		Array(250010304,2280,"流浪熊的地盘#r（2280金币）#b 　 　适合 55 ~ 75 级玩家"),
		Array(251010402,2380,"海盗团老巢2#r（2380金币）#b　　 　适合 65 ~ 75 级玩家"),	 
		Array(541010010,2580,"幽灵船2#r（2580金币）#b　　　 　　适合 60 ~ 80 级玩家"),
		Array(600020300,2680,"狼蛛洞穴#r（2680金币）#b　　　  　适合 80 ~ 90 级玩家"),
		Array(240010500,2780,"山羊峡谷#r（2780金币）#b　　  　　适合 85 ~ 100 级玩家"), 
		Array(230040100,2880,"深海峡谷2#r（2880金币）#b　　 　　适合 90 ~ 100 级玩家"),
		Array(551030100,2980,"阴森世界入口#r（2980金币）#b　　　适合 95 ~ 120 级玩家"),
		Array(240030102,3080,"消失的树林#r（3080金币）#b　  　　适合 100 ~ 120 级玩家"),
		Array(240040511,3280,"被遗忘的龙之巢#r（3280金币）#b  　适合 105 ~ 130 级玩家"),		  
		Array(541020000,3580,"乌鲁城入口#r（3580金币）#b　　  　适合 105 ~ 150 级玩家")
		); 

//------------------------------------------------------------------------		

//------------------------------------------------------------------------

var townmaps = Array(
		//Array(910000000,520,"自由市场#r             （消耗520金币）#b"), 
		//Array(701000210,0,"大擂台"), 
		//Array(1000000,100,"彩虹岛新手村#r         （消耗1百金币）#b"), 
		Array(104000000,500,"明珠港#r               （消耗5百金币）#b"), 
		Array(100000000,800,"射手村#r               （消耗8百金币）#b"), 
		Array(101000000,800,"魔法密林#r             （消耗8百金币）#b"), 
		Array(102000000,800,"勇士部落#r             （消耗8百金币）#b"), 
		Array(103000000,800,"废弃都市#r             （消耗8百金币）#b"), 
		Array(120000000,800,"诺特勒斯号码头#r       （消耗8百金币）#b"),
		Array(105040300,1000,"林中之城#r             （消耗1千金币）#b"),
		Array(140000000,1000,"里恩#r                 （消耗1千金币）#b"),
		Array(200000000,1000,"天空之城#r             （消耗1千金币）#b"),
		Array(211000000,5000,"冰峰雪域#r             （消耗5千金币）#b"), 
		Array(230000000,1000,"水下世界#r             （消耗1千金币）#b"),  
		Array(222000000,1000,"童话村#r               （消耗1千金币）#b"), 
		Array(220000000,5000,"玩具城#r               （消耗5千金币）#b"),
		//Array(701000000,5000,"东方神州#r             （消耗5千金币）#b"),
		Array(250000000,5000,"武陵#r                 （消耗5千金币）#b"), 
		//Array(702000000,1000,"少林寺#r               （消耗1千金币）#b"), 
		//Array(500000000,500,"泰国#r                 （消耗5百金币）#b"),
		Array(260000000,500,"阿里安特#r             （消耗5百金币）#b"),  
		Array(600000000,500,"新叶城#r               （消耗5百金币）#b"), 
		Array(240000000,5000,"神木村#r               （消耗5千金币）#b"),  
		Array(261000000,1000,"马加提亚#r             （消耗1千金币）#b"), 
		Array(221000000,1000,"地球防御本部#r         （消耗1千金币）#b"), 
		Array(251000000,1000,"百草堂#r               （消耗1千金币）#b"),
		//Array(701000200,10000,"上海豫园#r             （消耗1万金币）#b"),
		Array(550000000,10000,"吉隆大都市#r           （消耗1万金币）#b"),
		Array(130000000,1000,"圣地#r                 （消耗1千金币）#b"),
		Array(551000000,1000,"甘榜村#r               （消耗1千金币）#b"),
		Array(801000000,1000,"昭和村#r               （消耗1千金币）#b"), 
		Array(540010000,1000,"新加坡机场#r           （消耗1千金币）#b"),
		Array(541000000,1000,"新加坡码头#r           （消耗1千金币）#b"),
		Array(300000000,1000,"艾林森林#r             （消耗1千金币）#b"), 
		Array(270000100,10000,"时间神殿#r             （消耗1万金币）#b"), 
		//Array(702100000,10000,"藏经阁#r               （消耗1万金币）#b"), 
		Array(800000000,10000,"古代神社#r             （消耗1万金币）#b"), 
		Array(130000200,10000,"圣地岔路#r             （消耗1万金币）#b"),
		Array(925020000,1000,"武陵道场入口#r         （消耗1千金币）#b"),
		Array(930000000,5000,"毒雾森林#r             （消耗5千金币）#b"),
		Array(930000010,1000,"森林入口#r             （消耗1千金币）#b"),	
		//Array(702090101,1000,"英语村#r               （消耗1千金币）#b"),  
		//Array(700000000,10000,"红鸾宫#r               （消耗1万金币）#b")
		//Array(749020000,0,"国庆蛋糕地图")
		);

//------------------------------------------------------------------------

var fubenmaps = Array(
        Array(109080000,0,"#b打椰子                   #r（获得北斗纪念币）#k "),
        //Array(109080010,0,"#冰地                      #r（获得北斗纪念币）#k "),
        Array(109040001,0,"#b高地跳跳                 #r（获得北斗纪念币）#k "),
		Array(109030001,0,"#b上楼                     #r（获得北斗纪念币）#k "),
		Array(109060000,0,"#b滚雪球                   #r（获得北斗纪念币）#k "),
		Array(109010000,0,"#b寻宝                     #r（获得北斗纪念币）#k "),
		Array(105040316,10,"#b森林跳跳                #r（获得北斗纪念币）#k "),	
		Array(103000900,10,"#b地铁跳跳                #r（获得北斗纪念币）#k "),    
		Array(280020000,10,"#b火山跳跳                #r（获得北斗纪念币）#k "), 
		Array(101000100,10,"#b忍苦跳跳                #r（获得北斗纪念币）#k ") 											
		);

//------------------------------------------------------------------------	
		
		
var status;

//Start
function start() 
{
	levelStart();
}

/**
 * @description 如果是sendSelectLevel，那么会根据玩家的选项自动路由到对应的level+selection方法
 */
function levelStart() {
    let text = "尊贵的GM大人，您想去哪里呢？\r\n";
    text += "#L0#BOSS地图#l\r\n";
    text += "#L1#练级地图#l\r\n";
    text += "#L2#城镇地图#l\r\n";
    text += "#L3#活动跳跳坐牢地图#l\r\n";
    cm.sendSelectLevel(text);
}

function level0() {
	let text = "#b";
    for (let i = 0; i < bossmaps.length; i++) {  
       text += "#L" + i + "#" + bossmaps[i][2] + "#l\r\n";
    }	
	cm.sendNextSelectLevel("Boss", text);
}

function level1() {
	let text = "#b";
    for (let i = 0; i < monstermaps.length; i++) {  
       text += "#L" + i + "#" + monstermaps[i][2] + "#l\r\n";
    }	
	cm.sendNextSelectLevel("LevelUp", text);
}

function level2() {
	let text = "#b";
    for (let i = 0; i < townmaps.length; i++) {  
       text += "#L" + i + "#" + townmaps[i][2] + "#l\r\n";
    }	
	cm.sendNextSelectLevel("Town", text);
}

function level3() {
	let text = "#r注意：活动地图还有bug，请谨慎前往！#k\r\n#b";
    for (let i = 0; i < fubenmaps.length; i++) {  
       text += "#L" + i + "#" + fubenmaps[i][2] + "#l\r\n";
    }	
	cm.sendNextSelectLevel("Fuben", text);
}

//----------------------------------------------------------------------------------
function levelBoss(selection) {
	cm.gainMeso(-bossmaps[selection][1]);
	cm.getPlayer().saveLocationOnWarp();
	cm.warp(bossmaps[selection][0]);
	cm.dispose();
}

function levelLevelUp(selection) {
	cm.gainMeso(-monstermaps[selection][1]);
	cm.getPlayer().saveLocationOnWarp();
	cm.warp(monstermaps[selection][0]);
	cm.dispose();
}

function levelTown(selection) {
	cm.gainMeso(-townmaps[selection][1]);
	cm.getPlayer().saveLocationOnWarp();
	cm.warp(townmaps[selection][0]);
	cm.dispose();
}

function levelFuben(selection) {
	cm.gainMeso(-fubenmaps[selection][1]);
	cm.getPlayer().saveLocationOnWarp();
	cm.warp(fubenmaps[selection][0]);
	cm.dispose();
}
//----------------------------------------------------------------------------------