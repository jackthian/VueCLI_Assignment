<template>
  <div class="redeem_top">
    <div class="redeem">
      <div class="redeem_item">
        <p> Free 1 Cup of Coffee (100 points) <b-button variant="warning" v-on:click="minus_100()">-100</b-button></p>
        <p>Free 1 piece of Cake (150 points) <b-button variant="warning" v-on:click="minus_150()">-150</b-button></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props:{
    minus_100:{type:Function},
    minus_150:{type:Function}
  },
  name: "minusPoint",
}


</script>

<style scoped>
p
{
  font-size: 30px;
}
input[type=number]
{
  width: 10%;
  padding: 10px 8px;
  font-size: 20px;
  border-radius: 10px;
}
input[type=submit]
{
  background-color:green;
  font-family: Arial,sans-serif;
  font-size: 25px;
  border-radius: 5px;
  padding:8px 20px;
  width:30%;
  color:white;
}
input[type=submit]:hover{
  opacity: 70%;
}
.redeem_top
{
  padding-top:20px;
}
.redeem
{
  margin: auto;
  width:50%;
  padding-bottom: 50px;
  padding-top: 50px;
  border-radius: 10px;
  background-color: orangered;
  color:white;

}
.redeem_item
{
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
}
table
{
  width:80%;
  font-size: 20px;
  border: 1px solid black;
}
</style>