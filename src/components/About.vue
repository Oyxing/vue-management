<template>
  <div class="about container">
    <form @submit="formGet">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="fromData.email" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="fromData.name" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">phone</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="fromData.phone" placeholder="phone">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      fromData:{}
    }
  },
  created(){
    // this.DelCookie()
  },
  methods:{
    DelCookie(){
      console.log("删除")
      this.$cookie.delete('test');
    },
    formGet(e){
        const seft = this
         this.$http.post("http://localhost:3000/users",this.fromData)
            .then((res,req)=>{
              console.log('res')
             seft.$cookie.set('test', 'Hello world!');
             if(res.status == 201){
                  this.$router.push('/')
             }
              console.log(res)
            })
            .catch((error)=>{
              console.log(error)
            })
          e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
