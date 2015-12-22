var GameSceneLayer;
GameSceneLayer = cc.Layer.extend({isMouseDown: false, // 鼠标反转：否
    helloImg: null,  // 设为全局变量，内容为“空”
    helloLabel: null, //设为全局变量，内容为“空”
    circle: null,  // 设为全局变量，内容为“空”
    sprite: null,  // 设为全局变量，内容为“空”
    _size: null,  // 设为全局变量，内容为“空”
    gameLayer: null,  // 设为全局变量，内容为“空”
    gameLayer02: null, // 设为全局变量，内容为“空”
    _jetSprite: null, // 设为全局变量，内容为“空”
    init: function () {this._super(); //  必须调用父类init（）方法，很多bug都是由于没有调用父类init（）方法造成的
        this._size = cc.Director.getInstance().getWinSize();
        this.gameLayer02 = cc.Layer.create();
        this.addChild(this.gameLayer02);
        this._jetSprite = cc.Sprite.create (s_Jet);
        this._jetSprite.setAnchorPoint(0.5, 0.5);
        this._jetSprite.setPosition(this._size.width / 2,this._size.height / 5);
        this._jetSprite.setScale(0.25);
        this.gameLayer02.addChild(this._jetSprite, 0);
        this.setTouchEnabled(true);  // 设置触摸模式为：可用
        this.setKeyboardEnabled(true);  // 设置键盘为：可用
        this.setMouseEnabled(true);  // 设置鼠标为：可用
        this.setPosition(new cc.Point(0, 0));},
    onMouseDragged:function (event) { // 方法：鼠标拖动事件记录
        this.processEvent(event);  // 调用方法
        processEvent
    },
    processEvent:function(event) {
        var delta = event.getDelta(); // 获得触摸位移
        var curPos = this._jetSprite.getPosition(); // 获得飞机位置
        curPos = cc.pAdd(curPos, delta); // 触摸位移+ 原本飞机位置= 新的飞机位置
        curPos = cc.pClamp(curPos, cc.POINT_ZERO, cc.p(this._size.width, this._size.height)); // 触摸范围（超出屏幕无效）
        this._jetSprite.setPosition(curPos);// 设定飞机新位置}
    }
var HelloWorldLayer;
HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        ////////////////////////////////
        //// 1. super init first
        this._super();
        //
        ///////////////////////////////
        //// 2. add a menu item with "X" image, which is clicked to quit the program
        ////    you may modify it.
        //// ask the window size
        var size = cc.winSize;
        //
        ///////////////////////////////
        //// 3. add your codes below...
        //// add a label shows "Hello World"
        //// create and initialize a label
        //var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        //// position the label on the center of the screen
        //helloLabel.x = size.width / 2;
        //helloLabel.y = size.height / 2 + 200;
        //// add the label as a child to this layer
        //this.addChild(helloLabel, 5);
        //
        //// add "HelloWorld" splash screen"
        //this.sprite = new cc.Sprite(res.HelloWorld_png);
        //this.sprite.attr({
        //    x: size.width / 2,
        //    y: size.height / 2
        //});
        //this.addChild(this.sprite, 0);
        //
        this.gameLayer = cc.Layer.create(); // 创建名为“gameLayer”的新图层
        this.addChild(this.gameLayer); //加在这个新图层
        var bg = cc.Sprite.create(res.HelloWorld_png); // 创建精灵加载图片“s_HelloWorld”
        this.gameLayer.addChild(bg, 1); //在gameLayer层上加载这个精灵
        bg.setAnchorPoint(cc.p(0.5, 0.5));// 设置锚点
        bg.setPosition(size.width / 2, size.height / 2);// 设置位置
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

