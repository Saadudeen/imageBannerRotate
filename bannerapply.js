// This is the Left Banner Rotate.
var leftRotateCandlePix = new Array("images/flower01.jpg","images/flower02.jpg","images/flower03.jpg");
var leftCenterRotate=2;
function leftRotate(){
    leftCenterRotate+=1;
    if(leftCenterRotate==3) leftCenterRotate=0;
    document.leftFlower.src=leftRotateCandlePix[leftCenterRotate];
    setTimeout("leftRotate()",2000);
}
// This is the Right Banner Rotate.
var rightRotateFlowerPix = new Array();
rightRotateFlowerPix[0]="images/flowerRight01.jpg";
rightRotateFlowerPix[1]="images/flowerRight02.jpg";
rightRotateFlowerPix[2]="images/flowerRight03.jpg";
var rightCenterPix=2;
function rightRotate(){
    rightCenterPix+=1;
    if(rightCenterPix==3) rightCenterPix=0;
    document.rightFlower.src=rightRotateFlowerPix[rightCenterPix];
    setTimeout("rightRotate()",2000);
}

//This is screen Tip Javascript Code.
function screenTip(evnt,curElement){
    var documentobj="document.all";
    var styleobj=".style";
    if(curElement!=0){
        var DOMobj=eval(documentobj+"."+curElement+styleobj);
        var state= DOMobj.visibility;
        if(state=="visible" || state=="show"){
            DOMobj.visibility="hidden";
        }
        else{
            topVal=eval(event.y+10);
            leftVal=eval(event.x-125);
            if(leftVal<2) leftVal=2;
            DOMobj.top=topVal;
            DOMobj.left=leftVal;
            DOMobj.visibility="visible";
        }
    }
}