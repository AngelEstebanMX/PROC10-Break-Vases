var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["48f0135e-66ec-4861-ba99-9c0b770876b9","6b63db6c-57e8-405b-bf85-6f63af2d1a17","646e784d-9a23-4bb0-a610-137e6887b573","c3a0e489-0e54-4da7-87ed-7f94848ab577","208ff1b9-e213-45f5-8670-e1dfd236aa6b"],"propsByKey":{"48f0135e-66ec-4861-ba99-9c0b770876b9":{"name":"player124321.png_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"zB0RDstrhs81E96RtLh.ZTt3ww0wN4ic","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/48f0135e-66ec-4861-ba99-9c0b770876b9.png"},"6b63db6c-57e8-405b-bf85-6f63af2d1a17":{"name":"Jarron normal.png_1","sourceUrl":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/6b63db6c-57e8-405b-bf85-6f63af2d1a17.png","frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"AHjjiIzOJ6jqH6jGhEousK3XKHRwu9eG","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/6b63db6c-57e8-405b-bf85-6f63af2d1a17.png"},"646e784d-9a23-4bb0-a610-137e6887b573":{"name":"Jarron Calabaza","sourceUrl":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/646e784d-9a23-4bb0-a610-137e6887b573.png","frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"Od4qVAQApKD_1OLJIoDuQ7ruKY6bNVU9","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/646e784d-9a23-4bb0-a610-137e6887b573.png"},"c3a0e489-0e54-4da7-87ed-7f94848ab577":{"name":"a","sourceUrl":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/c3a0e489-0e54-4da7-87ed-7f94848ab577.png","frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"M9oueDvLb.6_pKUwmyHyQkk8Udzv1pNC","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/c3a0e489-0e54-4da7-87ed-7f94848ab577.png"},"208ff1b9-e213-45f5-8670-e1dfd236aa6b":{"name":"Game Over","sourceUrl":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/208ff1b9-e213-45f5-8670-e1dfd236aa6b.png","frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"hbr1p_qrR9t18X2B1U5.aErR0QTK7Urq","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/v3/animations/xlxHKr4hr66yvifdH07qna-UJtNNuul_bECwNseADLM/208ff1b9-e213-45f5-8670-e1dfd236aa6b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player=createSprite(20,20,10,10)
player.setAnimation("player124321.png_1")
var jarron=createSprite(250,50,40,40)
   jarron.setAnimation("Jarron Calabaza");
   var jarron1=createSprite(300,100,40,40)
   jarron1.setAnimation("a");
   var jarron2=createSprite(50,150,40,40)
   jarron2.setAnimation("Game Over");
   var jarron3=createSprite(50,200,40,40)
   jarron3.setAnimation("Jarron normal.png_1");
   var jarron4=createSprite(50,50,40,40)
   jarron4.setAnimation("Jarron normal.png_1");
   var jarron5=createSprite(100,200,40,40)
   jarron5.setAnimation("Jarron normal.png_1");
   var jarron6=createSprite(50,100,40,40)
   jarron6.setAnimation("Jarron normal.png_1");
   var jarron7=createSprite(250,100,40,40)
   jarron7.setAnimation("Game Over");
   var jarron8=createSprite(100,150,40,40)
   jarron8.setAnimation("Jarron normal.png_1");
   var jarron9=createSprite(300,50,40,40)
   jarron9.setAnimation("Jarron normal.png_1");
   var jarron10=createSprite(200,100,40,40)
   jarron10.setAnimation("Jarron normal.png_1");
   var jarron11=createSprite(200,50,40,40)
   jarron11.setAnimation("Jarron normal.png_1");
   var jarron12=createSprite(200,250,40,40)
   jarron12.setAnimation("Jarron Calabaza");
   var jarron13=createSprite(100,300,40,40)
   jarron13.setAnimation("a");
   var jarron14=createSprite(100,50,40,40)
   jarron14.setAnimation("Game Over")
   var jarron15=createSprite(150,50,40,40)
   jarron15.setAnimation("Jarron normal.png_1");
   var jarron16=createSprite(100,100,40,40)
   jarron16.setAnimation("Jarron normal.png_1");
   var jarron17=createSprite(150,100,40,40)
   jarron17.setAnimation("Jarron normal.png_1");
   var jarron18=createSprite(150,150,40,40)
   jarron18.setAnimation("Game Over");
   var jarron19=createSprite(150,200,40,40)
   jarron19.setAnimation("a");
   var jarron20=createSprite(50,250,40,40)
   jarron20.setAnimation("Jarron Calabaza");
   var jarron21=createSprite(100,250,40,40)
   jarron21.setAnimation("Jarron normal.png_1");
   var jarron22=createSprite(150,250,40,40)
   jarron22.setAnimation("Jarron normal.png_1");
   var jarron23=createSprite(250,200,40,40)
   jarron23.setAnimation("Game Over");
   var jarron24=createSprite(200,200,40,40)
   jarron24.setAnimation("Jarron normal.png_1");
   var jarron25=createSprite(250,250,40,40)
   jarron25.setAnimation("Jarron normal.png_1");
   var jarron26=createSprite(200,50,40,40)
   jarron26.setAnimation("Jarron normal.png_1");
   var jarron27=createSprite(50,300,40,40)
   jarron27.setAnimation("Jarron normal.png_1");
   var jarron28=createSprite(150,300,40,40)
   jarron28.setAnimation("Game Over");
   var jarron29=createSprite(200,50,40,40)
   jarron29.setAnimation("Jarron normal.png_1");
   var jarron30=createSprite(250,150,40,40)
   jarron30.setAnimation("Jarron normal.png_1");
   var jarron31=createSprite(200,300,40,40)
   jarron31.setAnimation("Jarron normal.png_1");
   var jarron32=createSprite(200,150,40,40)
   jarron32.setAnimation("Jarron normal.png_1");
   var jarron33=createSprite(300,250,40,40)
   jarron33.setAnimation("Jarron normal.png_1");
   var jarron34=createSprite(250,300,40,40)
   jarron34.setAnimation("Jarron normal.png_1");
   var jarron35=createSprite(300,300,40,40)
   jarron35.setAnimation("Jarron normal.png_1");
   var jarron36=createSprite(300,150,40,40)
   jarron36.setAnimation("Game Over");
   var jarron37=createSprite(300,200,40,40)
   jarron37.setAnimation("Jarron normal.png_1");
   var puntos=0
gameState="serve"
function draw() {
 background("white")
 drawSprites()
 if(gameState==="serve"){
   fill("brown")
   textSize(50)
   text("Break vases",30,380)
   fill("blue")
   textSize(20)
   text("get 125 points",140,20)
   if(keyDown("RIGHT_ARROW")){
     gameState="star"
   }
  }
 
 if(keyDown("up")){
  player.y=player.y-3 
 }
 if(keyDown("down")){
  player.y=player.y+3 
 }
 if(keyDown("right")){
  player.x=player.x+3 
 }
 if(keyDown("left")){
  player.x=player.x-3 
 }
   textSize(30)
  fill("yellow")
  text(""+puntos,340,200)
  if(player.isTouching(jarron)){
    jarron.destroy() 
    playSound("assets/Rayo-Efecto-de-sonido_160k.mp3");
    puntos-=5
  }
  if(player.isTouching(jarron20)){
    jarron20.destroy() 
    playSound("assets/Rayo-Efecto-de-sonido_160k.mp3");
    puntos-=5
  }
  if(player.isTouching(jarron12)){
    jarron12.destroy() 
    playSound("assets/Rayo-Efecto-de-sonido_160k.mp3");
    puntos-=5
  }
  if(player.isTouching(jarron1)){
    jarron1.destroy() 
    playSound("Among-us-Death-sound-green-screen-(Entre-nosotros-sonido-de-muerte-pantalla-verde)_160k.mp3");
    puntos-=10
  }
  if(player.isTouching(jarron13)){
    jarron13.destroy() 
    playSound("Among-us-Death-sound-green-screen-(Entre-nosotros-sonido-de-muerte-pantalla-verde)_160k.mp3");
    puntos-=10
  }
  if(player.isTouching(jarron19)){
    jarron19.destroy() 
    playSound("Among-us-Death-sound-green-screen-(Entre-nosotros-sonido-de-muerte-pantalla-verde)_160k.mp3");
    puntos-=10
  }
  if(player.isTouching(jarron2)){
    jarron2.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron7)){
    jarron7.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron14)){
    jarron14.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron18)){
    jarron18.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron23)){
    jarron23.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron28)){
    jarron28.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron36)){
    jarron36.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron14)){
    jarron14.destroy(); 
    playSound("assets/Explosion-sonido-efecto_160k.mp3");
    puntos-=30
  }
  if(player.isTouching(jarron3)){
    jarron3.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron4)){
    jarron4.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron5)){
    jarron5.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron6)){
    jarron6.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron8)){
    jarron8.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron9)){
    jarron9.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron10)){
    jarron10.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron11)){
    jarron11.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron15)){
    jarron15.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron16)){
    jarron16.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron17)){
    jarron17.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron20)){
    jarron20.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron21)){
    jarron21.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron22)){
    jarron22.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron24)){
    jarron24.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron25)){
    jarron25.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron26)){
    jarron26.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron27)){
    jarron27.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron29)){
    jarron29.destroy();
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron30)){
    jarron30.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron31)){
    jarron31.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron32)){
    jarron32.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron33)){
    jarron33.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron34)){
    jarron34.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron35)){
    jarron35.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(player.isTouching(jarron37)){
    jarron37.destroy(); 
    playSound("assets/Sonido-plato-rompi-ndose_160k.mp3");
    puntos+=5
  }
  if(puntos==125){
  gameState="end"
  }
  if(gameState==="end"){
  text("You win",100,350)
  player.destroy()
   }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
