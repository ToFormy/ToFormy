<template>
  <div>
    <div class="d-flex align-center">
      <h1 class="flex-grow-1">{{ $t('message.page_about_title') }}</h1>
    </div>

    <v-card class="elevation-1" outlined>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title><strong>{{ $t('message.app_name') }}</strong></v-list-item-title>
            <p align="justify">
              {{ $t('message.page_about_description') }}
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_check_for_updates') }}</strong>
            </h3>
            <v-list-item-subtitle>
              <v-btn size="small" color="primary" @click="loading = !loading" :loading="loading">
                {{ $t('message.page_about_button_check_for_updates') }}

                <template v-slot:loader>
                  <v-progress-linear indeterminate></v-progress-linear>
                </template>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_hosting_site') }}</strong>
            </h3>
            <v-list-item-subtitle><a :href="$t('message.page_about_link_hosting_site')" target="_blank">{{
              $t('message.page_about_link_hosting_site') }}</a></v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.app_label_version') }}</strong>
            </h3>
            <v-list-item-subtitle>{{ $t('message.app_value_version') }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_repository') }}</strong>
            </h3>
            <v-list-item-subtitle>
              <a :href="$t('message.page_about_link_repository')" target="_blank">{{
                $t('message.page_about_link_repository')
                }}</a>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_title_license') }}</strong>
            </h3>
            <p align="justify">
              {{ $t("message.page_about_text_license", { app_name: $t('message.app_name') }) }}
              <a :href="$t('message.page_about_link_license')" target="_blank">{{
                $t('message.page_about_label_name_license')
                }}</a>
            </p>

          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_authors') }}</strong>
            </h3>
            <p align="justify">
              {{ $t('message.page_about_value_authors') }}
            </p>
          </v-list-item>

          <v-list-item>
            <h3>
              <strong>{{ $t('message.page_about_label_contact_email') }}</strong>
            </h3>
            <p align="justify">
              {{ $t('message.page_about_value_contact_email') }}
            </p>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

  </div>

</template>

<script>
export default {
  data() {
    return {
      loading: false,
      formatadorLista: new Intl.ListFormat('pt', { style: 'long', type: 'conjunction' }),
    };
  },
  methods: {
  },
  watch: {
    loading(val) {
      if (!val) return
      setTimeout(() => {
        this.loading = false
        window.location.reload();

      }, 2000)
    },
  },
};
</script>

<style scoped></style>
