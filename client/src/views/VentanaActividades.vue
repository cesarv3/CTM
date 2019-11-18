<template>
  <div>
    <v-container
      fill-height
      fluid
      grid-list-xl
    >  
      <v-layout
        justify-center
        wrap
      >
        <v-flex 
          m12
        >
        <material-card
            color="orange"
            title="Panel de Actividades"
            text="Actividades por obra"
        >
          <div>
            <v-select class="selector"
              v-bind:items="obras"
              label="Seleccione una obra"
              outlined
              v-model="obra"
              item-value="id"
              item-text="nombre"
              @input="cargarActividades()"
            >
            </v-select>
          </div>
          <v-data-table
              :headers="headers"
              :items="actividades"
              hide-actions
            >
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
              <span
                class="subheading font-weight-bold text-black text--darken-3"
                v-text="header.text"
              />
              </template>
              <template
                slot="items"
                slot-scope="{ item }"
              >
                <td class="tdLarge">{{ item.descripcion }}</td>
                <td class="tdLarge">
                  <v-slider
                    v-model="item.progreso"
                    :thumb-size="20"
                    thumb-label="always"
                    @click="modificarProgreso(item.descripcion,item.id,item.progreso)"
                  ></v-slider>
                </td>
                <td><v-btn
                color = "orange"
                fab x-small dark
                small
                @click="eliminarActividad(item.id)"
                >x
                </v-btn>
                <v-btn
                color = "orange"
                fab x-small dark
                small
                data-toggle="modal"
                data-target="#modificarActividad"
                @click="cargarActividadModificar(item.descripcion,item.progreso,item.id)"
                >Editar
                </v-btn></td>
              </template>
            </v-data-table>
            <v-layout justify-center>
              <v-btn
                id = "btAgregarActividad"
                color="orange"
                x-small
                small
                data-toggle="modal"
                data-target="#crearActividad">
                Nueva Actividad
              </v-btn>
          </v-layout>   
          </material-card>
          
        </v-flex>
      </v-layout>
    </v-container>
    <div class="modal fade" id="crearActividad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Agregar Actividad</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Descripcion</label>
              <input type = "text" v-model="descripcionActividad" class = "form-control" placeholder="Descripcion">
            </div>
             <div class ="form-group">
              <label for="inputNombre">Progreso </label>
              <input type = "text" v-model="progreso" class = "form-control" placeholder="Progreso" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           <button type="button" class="btn btn-primary" @click="crearActividad()" data-dismiss="modal">Crear Actividad</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modificarActividad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modificar Actividad</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Descripcion</label>
              <input type = "text" v-model="descripcionActividad" class = "form-control" placeholder="Descripcion">
            </div>
             <div class ="form-group">
              <label for="inputNombre">Progreso </label>
              <input type = "text" v-model="progreso" class = "form-control" placeholder="Progreso" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           <button type="button" class="btn btn-primary" @click="modificarActividad()" data-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  data: function() {
     return {
        headers: [
        {
          sortable: false,
          text: 'Descripción',
          value: 'descripcionActividad'
        },
        {
          sortable: false,
          text: 'Progreso',
          value: 'progresoActividad'
        }
      ],
      obras: [],
      obra: '',
      actividades: [],
      descripcionActividad: '',
      progreso: ''
    }
  },
  mounted () {
    this.mostrarObras()
  },
  methods: {
    mostrarObras () {
      axios.get('https://ctmbackend.herokuapp.com/:3000/api/obras').then(result => {
        this.obras = result.data
      })
    },
    modificarProgreso(descripcion,id,progreso) {
      console.log('a')
      axios.put(`https://ctmbackend.herokuapp.com/api/actividades/${id}}`, Qs.stringify({id: id,descripcion: descripcion, progreso:progreso}))
      .then((res) => {
        console.log('Hecho')
      }).catch((error) => {
        alert('Error: No fue posible actualizar la actividad!')
      })
    },
    cargarActividadModificar (descripcionActividad,progreso,id) {
      this.idActividad = id 
      this.descripcionActividad = descripcionActividad
      this.progreso = progreso 
    },
    cargarActividades () {
      axios.get(`https://ctmbackend.herokuapp.com/api/actividades/${this.obra}`).then(result => {
        this.actividades = result.data
      }).catch((error) => {
        console.error(error)
      })
    },
    modificarActividad () {
      axios.put(`https://ctmbackend.herokuapp.com/api/actividades/${this.idActividad}`, Qs.stringify({id: this.idActividad,descripcion: this.descripcionActividad, progreso: this.progreso}))
      .then((res) => {
        this.descripcionActividad = ''
        this.progresoActividad = ''
        this.cargarActividades(this.idObraActividad)
        alert('Actividad actualizada!')
      }).catch((error) => {
        alert('Error: No fue posible actualizar la actividad!')
      })

    },
    crearActividad () {
      axios.post('https://ctmbackend.herokuapp.com/api/actividades', Qs.stringify({idObra: this.obra, descripcion: this.descripcionActividad, progreso: this.progreso})).then((res) => {
        this.descripcionActividad = ''
        this.progreso = ''
        this.cargarActividades() 
      }).catch((error) => {
          alert('Error: No fue posible crear la actividad')
      })
    },
    eliminarActividad (id) {
      axios.delete(`https://ctmbackend.herokuapp.com/api/actividades/${id}`).then ((res) =>{
        this.cargarActividades()
      }).catch((error) => {
        alert('Error: No fue posible eliminar la actividad')
      })
    },
  }
}
</script>

<style>
.tdLarge {
  width:500px;
  word-break:break-all;
}
.btn-primary {
  background-color:orange;
  border-color:orange;
}
.custom-select {
  color:black;;
}
</style>