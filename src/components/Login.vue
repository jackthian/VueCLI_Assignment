<template>
  <div class="hello">
    <div class="heading">
      <div class="heading_main">
        <h1>Welcome to {{name}}</h1>
        <h2>Best Point Collection System</h2>
      </div>
    </div>
    <!--------------Enter Phone Num part-------->
    <div class="phone_top">
      <div class="form">
        <div class="phone">
          <p>Enter Customer Phone Number</p>
          <input type="tel" id="customer_hp" placeholder="01x-xxxxxxx" v-model="C_Number" >
        </div>
        <!-------------Button Submission-------->
        <div class="button">
          <button id="start" v-on:click="check_num(C_Number)">Submit</button>
          <p style="font-size: 15px"><a href="">Register New Member</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
          data:function() {
return {
        name:"Lami Cafe",
            phone:"0123123123",
            C_Number:""
      };
},
      methods:{
        check_num:function (C_number){
          if (C_number===this.phone){
            alert("Success");
            this.$router.push({ path: 'point_collection' })
          }
          else{
            alert("Wrong number");
          }
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading_main
{
  text-align: center;
  background-color: whitesmoke;
  border-radius: 25px;
  width:50%;
  padding: 3px 80px;
  margin: auto;

}

.phone
{
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;

}
.phone_top
{
  padding-top: 20px;
}

.form
{
  margin: auto;
  width:50%;
  padding-bottom: 50px;
  padding-top: 50px;
  border-radius: 10px;
  background-color: orangered;
  color:white;
}

h1
{
  font-size: 60px;
}

h2
{
  font-size: 20px;
}

p
{
  font-size: 20px;
}

input[type=tel]
{
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 20px ;
}

::-webkit-input-placeholder
{
  font-size: 20px;
  text-align: center;
}

input[type=submit]
{
  background-color:green;
  font-family: Arial,sans-serif;
  font-size: 25px;
  padding:8px 20px;
  width:20%;
  color:white;
  border-radius: 10px;
}
input[type=submit]:hover{
  opacity: 70%;
}
.button
{
  text-align: center;
  padding-bottom: 20px;
}
a
{
  text-decoration: none;
  cursor: pointer;
}
a:hover
{
  opacity: 70%;
  text-decoration: underline;
}
#start
{
  background-color:green;
  font-size: 25px;
  padding:8px 20px;
  width:15%;
  color:white;
  border-radius: 5px;
}
body
{
  background-color: #FB2C03;
  font-family: Arial,sans-serif;
}

</style>
