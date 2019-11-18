<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              :src="logo"
              height="44"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Construction Manager
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action class ="iconDrawer">
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class = "tileText"
            v-text="link.text"
          />
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logo: 'favicon.ico',
    links: [
      {
        to: '/',
        icon: 'mdi-view-dashboard',
        text: 'Home'
      },
      {
        to: '/ventana-obras',
        icon: 'mdi-archive',
        text: 'Obras'
      },
      {
        to: '/ventana-actividades',
        icon: 'mdi-clipboard-outline',
        text: 'Actividades'
      },
      {
        to: '/ventana-desglose',
        icon: 'mdi-animation',
        text: 'Desglose'
      },
      {
        to: '/ventana-carga',
        icon: 'mdi-apple-keyboard-caps',
        text: 'Cargar elementos'
      }
      /*{
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      }*/
    ]
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
  }
}
</script>

<style lang="scss">
  .tileText:active {
    color: #eee;
    
  }
  .tileText:hover {
    color:black;
  }
  .v-list-item:hover {
    background: #eee;
    color:black;
  }
  .v-list-item:visited{
    color:black;
  }
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;
      color:#eee;
      text-decoration: none;
      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }
  }
</style>
