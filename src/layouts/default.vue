<template>
  <v-app id="inspire">

    <v-app-bar class="">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>ToFormy</v-app-bar-title>

      <v-spacer></v-spacer>




      <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
            <v-icon style="margin-right: 5px;">
              {{ selectedLanguage === 'en' ? 'mdi-translate' : 'mdi-translate' }}</v-icon> {{ locale }}
          </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(option, index) in languageOptions"
          :value="index"
          :key="option.value" @click="setLanguage(option.value)"
        >
          <v-list-item-title>{{ option.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn icon @click="toggleTheme">
        <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>


    </v-app-bar>

    <v-navigation-drawer v-model="drawer">

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, link_url] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
          @click="() => $router.push(link_url)"

        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-0 px-6"
        fluid
      >
      <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>

  <v-footer class="d-flex flex-column align-items-center justify-content-center">
  <div class="px-4 py-2 bg-primary text-center w-100">
    <p>All rights reserved. ToFormy. Copyright © {{ new Date().getFullYear() }}</p>
  </div>

</v-footer>

</template>

<script setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'

  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();
  const selectedLanguage = ref(localStorage.getItem('preferredLanguage') || 'pt');

  const languageOptions = [
    { text: 'en_US', value: 'en' },
    { text: 'pt_BR', value: 'pt' },
  ];

  const setLanguage = (language) => {
    selectedLanguage.value = language;
    locale.value = language;
    localStorage.setItem('preferredLanguage', language);
  };

  locale.value = selectedLanguage.value;

  const links = [
    // Home page
    ['mdi-home', 'Home', '/'],
    // My Surveys
    ['mdi-form-select', 'My Surveys', '/survey/list'],
    // Archived
    ['mdi-archive', 'Archived', '/survey/archived'],
    // Settings
    ['mdi-cog', 'Settings', '/settings'],
    // About
    ['mdi-information', 'About', '/about'],
  ]

  const drawer = ref(null)
  const theme = useTheme()

  // Toggle theme
  function toggleTheme () {
    if (theme.global.current.value.dark) {
      theme.global.name.value = 'light'
      localStorage.setItem('theme', 'light')
    } else {
      theme.global.name.value = 'dark'
      localStorage.setItem('theme', 'dark')
    }
  }
  // Verify if the user has a theme preference
  if (localStorage.getItem('theme')) {
    let themeValue = localStorage.getItem('theme')
    if (themeValue === 'dark') {
      theme.global.name.value = 'dark'
    } else {
      theme.global.name.value = 'light'
      localStorage.setItem('theme', 'light')
    }
  }


</script>
