<template>
  <div id="VentanaCargar">
    <v-container
      fill-height
      fluid
      grid-list-x1>
      <v-layout
        justify-center
        wrap>
        <v-flex
          md12
        >
        <material-card
            color="orange"
            title="Cargar elementos"
            text="Selecciona el tipo de archivo y archivo que cargarás"
          >
          <h5> Tipo de archivo </h5>
          <div class="custom-select">
            <select class ="select" v-model="elemento">
              <option selected v-for="elemento in elementos" v-bind:key="elemento.index">{{elemento}}</option>
            </select>
          </div>
          <br>
          <br>
          <text-reader class ="text-reader" @load="text = $event"></text-reader>
          <v-layout justify-center>
            <v-btn
              id = "btCargar"
              color="orange"
              x-small
              small
              data-toggle="modal"
              data-target="#modalCrear"
              @click="dividirCadena(text,elemento)">
              Cargar
            </v-btn>
          </v-layout>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TextReader from './TextReader'
import axios from 'axios'
import Qs from 'qs'
export default {
  name: 'VentanaCargar',
  data () {
    return {
      text: '',
      empleados: [],
      atributosEmpleados: [],
      herramientas: [],
      atributosHerramientas: [],
      materiales: [],
      atributosMateriales: [],
      equipos: [],
      atributosEquipos: [],
      elemento: '',
      elementos: ['Empleados', 'Herramientas', 'Materiales', 'Equipos']
    }
  },
  components: {
    TextReader
  },
  methods: {
    dividirCadena (text,elemento) {
      if (elemento === 'Empleados') {
        this.empleados = text.split('\n')
        for (var i = 0; i < this.empleados.length; i++) {
          this.atributosEmpleados = this.empleados[i].split('|')
          axios.post('http://localhost:3000/api/empleados', Qs.stringify({apPaterno: this.atributosEmpleados[0], apMaterno: this.atributosEmpleados[1], nombre: this.atributosEmpleados[2], telefono: this.atributosEmpleados[3], domicilio: this.atributosEmpleados[4]})).then((res) => {
          }).catch((error) => {
          })
        }
      }
      if (elemento === 'Herramientas') {
        this.herramientas = text.split('\n')
        for (i = 0; i < this.herramientas.length; i++) {
          this.atributosHerramientas = this.herramientas[i].split('|')
          axios.post('http://localhost:3000/api/herramientas', Qs.stringify({nombre: this.atributosHerramientas[0], descripcion: this.atributosHerramientas[1]})).then((res) => {
          }).catch((error) => {
          })
        }
      }
      if (elemento === 'Materiales') {
        this.materiales = text.split('\n')
        for (i = 0; i < this.materiales.length; i++) {
          this.atributosMateriales = this.materiales[i].split('|')
          axios.post('http://localhost:3000/api/materiales', Qs.stringify({nombre: this.atributosMateriales[0], precio: this.atributosMateriales[1], unidad: this.atributosMateriales[2]})).then((res) => {
          }).catch((error) => {     
          })
        }
      }
      if (elemento === 'Equipos') {
        this.equipos = text.split('\n')
        for (i = 0; i < this.equipos.length; i++) {
          this.atributosEquipos = this.equipos[i].split('|')
          axios.post('http://localhost:3000/api/equipos', Qs.stringify({nombre: this.atributosEquipos[0], descripcion: this.atributosEquipos[1]})).then((res) => {
          }).catch((error) => {
          })
        }
      }
      alert('Operación realizada')
    }
  }
}
</script>

<style>
  .custom-select {
    width:135px;
    color:black;;
  }
  h5 {
    display: inline;
  }
  .text-reader {
    padding-left: 10px;
  }
</style>
