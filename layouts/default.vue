<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer class="drawer-nav" v-model="drawer" :rail="rail" permanent @click="changeRail()">
        <v-list>   
        <v-list-item class="apps-bar" value="/" @click="navigateTo('/')" nav>
          <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>
      </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>       
          <v-list-item class="primary-btn" prepend-icon="mdi-view-comfy" title="Monitoring" value=""
            @click="navigateTo('/')"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-container fluid class="vcontainer-base">
        <v-main>
          <slot></slot>
        </v-main>
      </v-container>
    </v-layout>
  </v-card>
</template>

<script setup>
const drawer = ref(true);
const rail = ref(true);


function changeRail() {
  rail.value = false;
}

</script>

<style scoped>
.vcontainer-base {
  min-height: 100vh;
  height: 100%;
  background-color: #f5f7f8;
  color: aliceblue;
}

.drawer-nav {
  background-color: #E8DEF8;

}

.primary-btn{
  background-color: #6750A4;
  color:white;
}

.apps-bar{
  background-color: #E8DEF8;
  color:#6750A4;
}


</style>
