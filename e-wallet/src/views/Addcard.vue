<template>
<div>
 <header>
     <Top :title="formHeading" />
    </header>
    <main>
      <CardForm/>
    
      </main>
  </div>
</template>

<script>
import Top from "../components/Top";
import CardForm from "../components/CardForm";
export default {
   components: {
   CardForm,
  Top
},
data()
{
  return{
   formHeading : "add a new card"
    
}
}

}
</script>

<style>

</style>