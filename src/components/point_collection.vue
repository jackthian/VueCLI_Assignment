<template>
  <div class="app">
    <b-container class="bv-example-row bv-example-row-flex-cols">
    <div class="info">
      <h1>Hi Jack</h1>
      <h1>HP : {{phone_num}}</h1>
      <h2>Total Visit : {{totalVisit}} times</h2>
      <h2>Total points : {{totalPoints}}</h2>
    </div>
      <addPoints :addPoints="addPoints"></addPoints>
      <minusPoints :minus_100="minus_100" :minus_150="minus_150"></minusPoints>
    </b-container>
  </div>
</template>

<script>

import addPoints from "@/components/addPoints";
import minusPoint from "@/components/minusPoint";

 export default {
   components:{
     'addPoints': addPoints,
     'minusPoints':minusPoint
   },
  data: function() {
    return {
      phone_num: 60123123123,
      totalVisit: 100,
      totalPoints: 100,
    }
  },
    methods: {

      addPoints: function (newPoints) {
        if (confirm("Are You Sure ?") === true) {
          this.totalPoints = this.totalPoints + newPoints;
        }
      },
      minus_100: function () {
        if (confirm("Are You Sure ?") === true && this.totalPoints >= 100) {
          this.totalPoints -= 100;
          this.$emit('minus100', this.totalPoints);
        } else {
          alert("not enough points");
        }
      },
      minus_150: function () {
        if (confirm("Are You Sure ?") === true && this.totalPoints >= 100) {
          this.totalPoints -= 150;
          this.$emit('minus150', this.totalPoints);
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
table
{
  width:80%;
  font-size: 20px;
  border: 1px solid black;
}

</style>