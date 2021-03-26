<template>
  <div class="app">
    <div class="info">
      <h1>Hi Jack</h1>
      <h1>HP : {{phone_num}}</h1>
      <h2>Total Visit : {{totalVisit}} times</h2>
    <!--  <h2>Total points : {{totalPoints}}</h2>
    </div>
    <!----input points--->
    <div class="container_top">
      <div class="info_container">
        <div class="customer_info">
          <p>Enter Points Here</p>
          <input type="number" v-model.number="newPoints" on.focus="on">
          <br>
          <br>
          <button id="add_points" v-on:click="addPoints(newPoints)">Add Points</button>
        </div>
      </div>
    </div>
    <!------redemption-->
    <div class="redeem_top">
      <div class="redeem">
        <div class="redeem_item">
          <p> Free 1 Cup of Coffee (100 points) <button id="minus_100" v-on:click="minus_100()">100</button></p>
          <p>Free 1 piece of Cake (150 points) <button id="minus_150" v-on:click="minus_150()">150</button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  data: function() {
return {
    phone_num: 60123123123,
    totalVisit: 100,
    totalPoints: 100,
    newPoints: 0
  };
},
  methods: {
    addPoints: function (newPoints) {
      if (confirm("Are You Sure ?")===true) {
        this.totalPoints = this.totalPoints + newPoints;
      }
    },
    minus_100: function () {
      if (confirm("Are You Sure ?")===true&&this.totalPoints >= 100) {
        this.totalPoints -= 100;
      } else {
        alert("not enough points");
      }
    },
    minus_150: function () {
      if (confirm("Are You Sure ?")===true&&this.totalPoints >= 100) {
        this.totalPoints -= 150;
      } else {
        alert("not enough points");
      }

    }

  }

}
</script>

<style scoped>
.info
{
  text-align: center;
  background-color: whitesmoke;
  border-radius: 25px;
  width:50%;
  padding: 3px 80px;
  margin: auto;
}
.customer_info
{
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
}
.info_container
{
  margin: auto;
  width:50%;
  padding-bottom: 50px;
  padding-top: 50px;
  border-radius: 10px;
  background-color: orangered;
  color:white;
}
.container_top
{
  padding-top: 20px;
}
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
#minus_100,#minus_150
{

  background-color:green;
  font-size: 25px;
  padding:8px 20px;
  width:15%;
  color:white;
  border-radius: 5px;
}
#add_points
{
  background-color:green;
  font-size: 25px;
  padding:8px 10px;
  width:20%;
  color:white;
  border-radius: 10px;
}
</style>