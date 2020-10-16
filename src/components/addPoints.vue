<template>
  <div class="add">
  <div class="container_top">
    <div class="info_container">
      <div class="customer_info">
        <p>Enter Points Here</p>
        <input type="number" v-model.number="newPoints" on.focus="on" >
        <br>
        <br>
        <b-button variant="success" v-on:click="addPoints(newPoints)">Add Points</b-button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    addPoints: {type: Function},
  },
  name: "add",
  data() {
    return {
      newPoints: 0
    }
  }
}


</script>

<style scoped>
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
  width: 15%;
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