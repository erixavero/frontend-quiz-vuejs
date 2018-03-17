export default{
  data(){
    return{
      message: 'action loading...',
      duration: 2000,
      config: {
        show: false
      }
    }
  },
  methods: {
    getMessage(){
      return this.message;
    },
    setMessage(message){
      message = message || this.message;
      this.message = message;
    },
    getDuration(){
      return this.duration;
    },
    setDuration(duration){
      duration = duration || 3000;
      this.duration = duration;
    },
    show(){
      this.config.show = true;
      this.bindToggle();
    },
    hide(){
      this.config.show = false;
    },
    bindToggle(){
      if(this.config.show){
        setTimeOut(()=>{
          this.hide();
        },this.duration)
      }
    }
  }
}
