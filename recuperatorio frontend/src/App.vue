<script setup lang="ts">
// importar reactive
import { reactive } from 'vue';
// importart useThemeStore
import { useThemeStore } from '@/stores/ThemeStore';

// iconos
import { MoonIcon, SunIcon, LinkIcon } from '@heroicons/vue/24/solid'

// instanciar useThemeStore
const themeStore = useThemeStore();
// crear variable reactiva con objeto useStore
const theme = reactive(themeStore);
</script>

<template>
  <!-- usar directiva v-bind:class para asinar clase class si isDark en el store es true -->
  <div v-bind:class="theme.isDark ? 'dark' : ''" class="wrapper transition ease-linear">
    <div class="btn-wrapper">
      <div class="toggle-btn flex items-center justify-center w-full my-4">
        <label for="toggle" class="flex items-center justify-center cursor-pointer">
          <div class="relative">
            <!-- usar directiva @click para ejecutar el metodo para cambiar de dark a light o viceversa -->
            <input @click="theme.cambiarModo()" type="checkbox" id="toggle" class="sr-only" />
            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              class="dot absolute left-1 top-1 bg-black w-6 h-6 flex items-center justify-center rounded-full transition">
              <!-- usar directiva v-if  para mostrar el icono de luna o sol usando isDark como referencia -->
              <MoonIcon v-if="theme.isDark === true" class="w-4 h-4 text-white" />
              <SunIcon v-if="theme.isDark === false" class="w-full h-full text-yellow-500 p-1" />
            </div>
          </div>

          <!-- cambiar usar v-bind:class y atributo mode del ThemeState para cambiar el texto -->
          <div v-bind:class="theme.isDark === true ? 'dark' : ''" class="label-text ml-2 font-medium">
            Modo {{ theme.mode }}
          </div>
        </label>
      </div>
    </div>
    <!-- usar directiva v-bind:class para asinar clase class si isDark en el store es true -->
    <div v-bind:class="theme.isDark === true ? 'dark' : ''"
      class="img min-h-screen flex flex-col items-center transition"></div>
    <div v-bind:class="theme.isDark === true ? 'dark' : ''" class="todo flex-1 lg:w-2/3 xl:w-2/5 w-full px-7">
      <RouterView />
    </div>
  </div>
  <div
    class="absolute bottom-0 w-full h-20 flex flex-col justify-center items-center bg-slate-500 text-xl font-semibold">
    <div class="unknowncode"><span class="font-light mx-2">by</span>unknown<span
        class="text-gray-200 font-normal">code</span>44</div>
    <p class="text-sm font-normal">Matias Orellana 2024</p>
    <a class="text-sm font-normal text-white cursor-pointer flex flex-row justify-around items-center"
      href="https://github.com/unknowncode44">
      <LinkIcon class="h-3 w-3 mx-2" /> GitHub
    </a>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  background: #fff;
}

.wrapper.dark {
  background: #434343;
}

.img {
  background-image: url('https://github.com/cloworm/todo/blob/master/public/images/bg-desktop-light.jpg?raw=true');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

.img.dark {
  background: url('https://github.com/cloworm/todo/blob/master/public/images/bg-desktop-dark.jpg?raw=true');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

.btn-wrapper {
  position: absolute;
  right: 16px;
}

input:checked~.dot {
  transform: translateX(100%);
  background-color: rgb(77, 148, 255);
}

.label-text {
  color: white;
}

.label-text.dark {
  color: black;
}

.todo {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
