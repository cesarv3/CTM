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
          md12
        >
          <material-card
            color="orange"
            title="Obras"
            text="Obras de la constructora"
          >
            <v-text-field
              class = busqueda
              v-model="busquedaObras"
              label="Buscar"
              append-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field>
            <v-data-table
              :headers="headers"
              :items="items"
              :items-per-page="5"
              :search="busquedaObras"
            >
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
                <span
                  class="subheading font-weight-bold text text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template
                slot="items"
                slot-scope="{ item }"
              >
                <td>{{ item.nombre }}</td>
                <td class="tdLarge">{{ item.descripcion }}</td>
                <td class="tdLarge">{{ item.ubicacion }}</td>
                <td>
                <v-btn
                color = "orange"
                fab x-small dark
                small
                data-toggle="modal"
                data-target="#modalEditar"
                @click="cargarObraModificar(item.id,item.nombre,item.descripcion,item.ubicacion)"
                >Editar
                </v-btn>
                <v-btn
                color = "orange"
                fab x-small dark
                small
                @click="eliminarObra(item.id)"
                >x
                </v-btn></td>
              </template>
            </v-data-table>
            <v-layout justify-center>
              <v-btn
                id = "btAgregarObra"
                color="orange"
                x-small
                small
                data-toggle="modal"
                data-target="#modalCrear"
                @click="limpiarVariables()">
                Nueva Obra
              </v-btn>
            </v-layout>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="modal fade" id="modalCrear" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="tituloForm">Nueva Obra</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Nombre de la obra</label>
              <input type = "text" v-model="nombreObra" class = "form-control" placeholder="Nombre" required>
            </div>
            <div class="form-group">
              <label for="inputDescripcion">Descripción de la obra</label>
              <textarea class="md-textarea form-control" row="3" v-model="descripcionObra" placeholder="Descripción"></textarea>
            </div>
            <div class="form-group">
              <label for="inputUbicacion">Ubicación de la obra</label>
              <textarea class="md-textarea form-control" row="3" v-model="ubicacionObra" placeholder="Ubicación"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="crearObra" data-dismiss="modal">Crear obra</button>
          </div>
        </div>
      </div>
    </div>
     <div class="modal fade" id="modalEditar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="tituloForm">Editar Obra</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Nombre de la obra</label>
              <input type = "text" v-model="nombreObra" class = "form-control" placeholder="Nombre" required>
            </div>
            <div class="form-group">
              <label for="inputDescripcion">Descripción de la obra</label>
              <textarea class="md-textarea form-control" row="3" v-model="descripcionObra" placeholder="Descripción"></textarea>
            </div>
            <div class="form-group">
              <label for="inputUbicacion">Ubicación de la obra</label>
              <textarea class="md-textarea form-control" row="3" v-model="ubicacionObra" placeholder="Ubicación"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="modificarObra()" data-dismiss="modal">Aceptar</button>
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
          text: 'Nombre',
          value: 'nombre'
        },
        {
          sortable: false,
          text: 'Descripción',
          value: 'descripcion'
        },
        {
          sortable: false,
          text: 'Ubicación',
          value: 'ubicacion'
        },
        {
          sortable: false,
          text: 'Opciones'
        }
      ],
      busquedaObras: '',
      items: [],
      mostrarVentanaAgregar: false,
      idObra: '',
      nombreObra: '',
      descripcionObra: '',
      ubicacionObra: ''
    }
  },
  mounted () {
    this.cargarObras()
  },
  methods: {
    cargarObras () {
      axios.get('http://localhost:3000/api/obras').then(result => {
        this.items = result.data
      })
    },
    limpiarVariables () {
      this.idObra = ''
      this.nombreObra = ''
      this.descripcionObra = ''
      this.ubicacionObra = ''
    },
    crearObra () {
      axios.post('http://localhost:3000/api/obras', Qs.stringify({nombre: this.nombreObra, descripcion: this.descripcionObra, ubicacion: this.ubicacionObra})).then((res) => {
        this.limpiarVariables
        this.cargarObras() 
      })
    },
    eliminarObra (id) {
      axios.delete(`http://localhost:3000/api/obras/${id}`).then ((res) =>{
        if(res.data!='error')
          alert('Obra eliminada!')
        else
          alert('Error: Esta obra esta asociada con actividades')
        this.cargarObras()
      }).catch((error) => {
        alert('Error: No fue posible eliminar la obra')
      })
    },
    cargarObraModificar (id,nombre,descripcion,ubicacion) {
      this.idObra = id
      this.nombreObra = nombre
      this.descripcionObra = descripcion
      this.ubicacionObra = ubicacion
    },
    modificarObra () {
      axios.put(`http://localhost:3000/api/obras/${this.idObra}`,Qs.stringify({nombre: this.nombreObra, descripcion: this.descripcionObra, ubicacion: this.ubicacionObra})).then((res) => {
        this.limpiarVariables()
        this.cargarObras()
      })
    }
  }
}
</script>

<style>
.tdLarge {
  width:400px;
  word-break:break-all;
}
.btn-primary {
  background-color:orange;
  border-color:orange;
}
</style>
