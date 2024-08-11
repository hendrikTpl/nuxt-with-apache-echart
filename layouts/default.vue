<template>
    <div class="vcontainer-base">
    <v-container fluid>
        <v-main>
          <slot></slot>
        </v-main>
    </v-container>
    </div>
</template>

<style scoped>
.vcontainer-base {
  min-height: 100vh;
  height: 100%;
  background-color: #011627;
  color: aliceblue;
}

.drawer-nav {
  background-color: #011627;
  background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);

}
</style>


    
  
