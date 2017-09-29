<template>
  <div class="customers container">
      <Alert v-if="alert" :message="alert"></Alert>
      <h1 class="page-header">用户管理系统</h1>
      <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
      <table class="table table-struped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for = "custimer in filterBy(customers,filterInput)">
            <td>{{custimer.name}}</td>
            <td>{{custimer.phone}}</td>
            <td>{{custimer.email}}</td>
            <td>
            <router-link class="btn btn-default" :to="'/customer/' + custimer.id">详情
            </router-link></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
     customers:[],
     alert:'',
     filterInput:''
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
    this.CookieData()
    this.Date()
  },
  updated(){
    this.fetchCustomers()
  },
  components:{
    Alert
  },
  methods:{
    Date(){
      var date = new Date()
      console.log(date)
      console.log(date.setDate(date.getDate()+1))
    },
    CookieData(){
      console.log(this.$cookie.get('test'))
      if(this.$cookie.get('test') == null){
        alert("未登录")
        this.$router.push('/about')
      }
    },
    filterBy(customers,value){
        return customers.filter(function(customer){
          return customer.name.match(value)
        })
    },
    fetchCustomers(){
      this.$http.get("http://localhost:3000/users")
        .then((res)=>{
          this.customers = res.data
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
