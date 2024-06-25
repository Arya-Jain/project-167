AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema:{
    isplaying :{
        type:"boolean",
        default:false
    }

  },
  init: function(){
    this.videoEl = this.el.getAttribute("material").src;
    this.onclick = this.onClick.bind(this);
    this.play()
  },
  play: function(){
    window.addEventListener("click", this.onClick)
  },
  onClick: function(){
    if(!this.videoEl){
        return;
    }
    var isplaying = this.el.getAttribute("play-on-click").isplaying;
    this.el.object3D.visible = true;
    if(!isplaying){
        this.el.setAttribute("play-on-click",{
            isplaying : true
        })
        this.videoEl.play()

    }
    else{
        this.el.setAtrruibute("play-on-click",{
            isplaying : false
        })
        this.videoEl.pause()
    }
  }
});
