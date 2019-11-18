<template>
  <div id="ventanaDesglose">
      <v-container
        fill-height
        fluid
        grid-list-xl>

        <v-layout
          wrap
        >
        <v-flex
          md12
        >
          <material-card class="card-tabs"
          color="orange">
          <v-flex
            slot="header"
          >
            <div>
              <v-select class="selector"
                v-bind:items="obras"
                label="Seleccione una obra"
                outlined
                v-model="obra"
                item-value="id"
                item-text="nombre"
                @input="cargarActividades(obra)"
              >
              </v-select>
            </div>
            <div>
              <v-select class ="selector"
                v-bind:items="actividades"
                label="Seleccione una actividad"
                v-model="actividad"
                item-value="id"
                item-text="descripcion"
                outlined
                @input="cargarDatosAsignados(actividad)"
              ></v-select>
            </div>
            <v-tabs
              v-model="tabs"
              color="transparent"
              slider-color="white"
            >
              <v-tab class="mr-4">
                <v-icon class="mr-2">mdi-account</v-icon>
                Empleados
              </v-tab>
              <v-tab class="mr-4">
                <v-icon class="mr-2">mdi-hammer</v-icon>
                Herramientas
              </v-tab>
              <v-tab class="mr-4">
                <v-icon class="mr-2">mdi-towing</v-icon>
                Equipos
              </v-tab>
              <v-tab class="mr-4">
                <v-icon class="mr-2">mdi-wall</v-icon>
                Materiales
              </v-tab>
            </v-tabs>
          </v-flex>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-text-field
                class = busqueda
                v-model="busquedaEmpleados"
                label="Buscar"
                append-icon="mdi-magnify"
                single-line
                hide-details
              ></v-text-field>
              <v-data-table
                :headers="headerEmpleados"
                :items= "empleadosAsignados"
                :items-per-page="5"
                :search="busquedaEmpleados"
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
                <td>{{ item.apPaterno }}</td>
                <td>{{ item.apMaterno }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.telefono }}</td>
                <td>{{ item.domicilio }}</td>
                <td>
                  <v-btn
                    color = "orange"
                    fab x-small dark
                    small
                    @click="desasignarEmpleado(item.id)"
                  >x
                  </v-btn>
                </td>
              </template>
              </v-data-table>
              <v-layout justify-center>
              <v-btn
                id = "btAsignarEmpleado"
                color="orange"
                x-small
                small
                data-toggle="modal"
                data-target="#modalAsignarEmpleado">
                Asignar Empleado
              </v-btn>
            </v-layout>
            </v-tab-item>
            <v-tab-item>
               <v-text-field
                class = busqueda
                v-model="busquedaHerramientas"
                label="Buscar"
                append-icon="mdi-magnify"
                single-line
                hide-details
              ></v-text-field>
              <v-data-table
                :headers="headerHerramientas"
                :items = "herramientasAsignadas"
                :items-per-page="5"
                :search="busquedaHerramientas"
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
                <td>{{ item.descripcion }}</td>
                <td>{{ item.actividad_herramientas.cantidad }}</td>
                 <td>
                  <v-btn
                    color = "orange"
                    fab x-small dark
                    small
                    @click="desasignarHerramienta(item.id)"
                  >x
                  </v-btn>
                </td>
              </template>
              </v-data-table>
              <v-layout justify-center>
              <v-btn
                id = "btAsignarHerramienta"
                color="orange"
                x-small
                small
                data-toggle="modal"
                data-target="#modalAsignarHerramienta">
                Asignar Herramienta
              </v-btn>
            </v-layout>
            </v-tab-item>
            <v-tab-item>
               <v-text-field
                class = busqueda
                v-model="busquedaEquipos"
                label="Buscar"
                append-icon="mdi-magnify"
                single-line
                hide-details
              ></v-text-field>
              <v-data-table
                :headers="headerEquipos"
                :items = "equiposAsignados"
                :items-per-page="5"
                :search="busquedaEquipos"
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
                <td>{{ item.descripcion }}</td>
                 <td>
                  <v-btn
                    color = "orange"
                    fab x-small dark
                    small
                    @click="desasignarEquipo(item.id)"
                  >x
                  </v-btn>
                </td>
              </template>
              </v-data-table>
              <v-layout justify-center>
              <v-btn
                id = "btAsignarEquipo"
                color="orange"
                x-small
                small
                data-toggle="modal"
                data-target="#modalAsignarEquipo">
                Asignar equipo
              </v-btn>
            </v-layout>
            </v-tab-item>
            <v-tab-item>
               <v-text-field
                class = busqueda
                v-model="busquedaMateriales"
                label="Buscar"
                append-icon="mdi-magnify"
                single-line
                hide-details
              ></v-text-field>
              <v-data-table
                :headers="headerMateriales"
                :items = "materialesAsignados"
                :items-per-page="5"
                :search="busquedaMateriales"
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
                <td>{{ item.unidad }}</td>
                <td>${{ item.precio }}</td>
                <td>{{ item.actividad_materiales.cantidad }}</td>
                 <td>
                  <v-btn
                    color = "orange"
                    fab x-small dark
                    small
                    @click="desasignarMaterial(item.id)"
                  >x
                  </v-btn>
                </td>
              </template>
              </v-data-table>
              <v-layout justify-center>
              <v-btn
                id = "btAsignarMaterial"
                color="orange"
                x-small
                small
                data-toggle="modal"
                data-target="#modalAsignarMaterial">
                Asignar Material
              </v-btn>
            </v-layout>
            </v-tab-item>
          </v-tabs-items>
          </material-card>
        </v-flex>
        </v-layout>
      </v-container>
      <div class="modal fade" id="modalAsignarEmpleado" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="tituloForm">Asignar empleado</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Empleado a asignar</label>
              <div>
              <v-autocomplete class ="selector"
                v-bind:items="empleados"
                label="Seleccione un empleado"
                v-model="empleado"
                item-value="id"
                item-text="nombre"
                outlined
                @input="establecerIDEmpleado(empleado)"
              >
              <template slot="selection" slot-scope="data">
                {{data.item.nombre}} {{data.item.apPaterno}} {{data.item.apMaterno}}
              </template>
              <template slot="item" slot-scope="data">
                {{data.item.nombre}} {{data.item.apPaterno}} {{data.item.apMaterno}}
              </template>
              </v-autocomplete>
            </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="asignarEmpleado()" data-dismiss="modal">Asignar empleado</button>
          </div>
        </div>   
      </div>
    </div>
          <div class="modal fade" id="modalAsignarHerramienta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="tituloForm">Asignar herramienta</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Herramienta a asignar</label>
              <div>
              <v-autocomplete class ="selector"
                v-bind:items="herramientas"
                label="Seleccione una herramienta"
                v-model="herramienta"
                item-value="id"
                item-text="nombre"
                outlined
                @input="establecerIDHerramienta(herramienta)"
              >
              <template slot="selection" slot-scope="data">
                {{data.item.nombre}}
              </template>
              <template slot="item" slot-scope="data">
                {{data.item.nombre}}
              </template>
              </v-autocomplete>
              <label for="inputCantidad">Cantidad</label>
              <input type = "text" v-model="cantidadHerramienta" class = "form-control" placeholder="Cantidad herramienta" required>
            </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="asignarHerramienta()" data-dismiss="modal">Asignar herramienta</button>
          </div>
        </div>   
      </div>
    </div>
      <div class="modal fade" id="modalAsignarEquipo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="tituloForm">Asignar equipo</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Equipo a asignar</label>
              <div>
              <v-autocomplete class ="selector"
                v-bind:items="equipos"
                label="Seleccione un equipo"
                v-model="equipo"
                item-value="id"
                item-text="nombre"
                outlined
                @input="establecerIDEquipo(equipo)"
              >
              <template slot="selection" slot-scope="data">
                {{data.item.nombre}}
              </template>
              <template slot="item" slot-scope="data">
                {{data.item.nombre}}
              </template>
              </v-autocomplete>
            </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="asignarEquipo()" data-dismiss="modal">Asignar equipo</button>
          </div>
        </div>   
      </div>
    </div>
     <div class="modal fade" id="modalAsignarMaterial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="tituloForm">Asignar material</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class ="form-group">
              <label for="inputNombre">Material a asignar</label>
              <div>
              <v-autocomplete class ="selector"
                v-bind:items="materiales"
                label="Seleccione un material"
                v-model="material"
                item-value="id"
                item-text="nombre"
                outlined
                @input="establecerIDMaterial(material)"
              >
              <template slot="selection" slot-scope="data">
                {{data.item.nombre}}
              </template>
              <template slot="item" slot-scope="data">
                {{data.item.nombre}}
              </template>
              </v-autocomplete>
              <label for="inputCantidad">Cantidad</label>
              <input type = "text" v-model="cantidadMaterial" class = "form-control" placeholder="Cantidad material" required>
            </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="asignarMaterial()" data-dismiss="modal">Asignar material</button>
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
  data () {
    return {
      headerMateriales: [
        {
          sortable: false,
          text: 'Nombre',
          value: 'nombre'
        },
        {
          sortable: false,
          text: 'Unidad',
          value: 'unidad'
        },
        {
          sortable: false,
          text: 'Precio',
          value: 'precio'
        },
        {
          sortable: false,
          text: 'Cantidad',
          value: 'cantidad'
        }
      ],
      headerEquipos: [
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
      ],
      headerHerramientas: [
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
          text: 'Cantidad',
          value: 'cantidad'
        }
      ],
      headerEmpleados: [
        {
          sortable: false,
          text: 'Apellido Paterno',
          value: 'apPaterno'
        },
        {
          sortable: false,
          text: 'Apellido Materno',
          value: 'apMaterno'
        },
        {
          sortable: false,
          text: 'Nombre',
          value: 'nombre'
        },
        {
          sortable: false,
          text: 'Teléfono',
          value: 'telefono'
        },
        {
          sortable: false,
          text: 'Domicilio',
          value: 'domicilio'
        }
      ],
      busquedaHerramientas: '',
      busquedaEmpleados: '',
      busquedaEquipos: '',
      busquedaMateriales: '',
      idActividad: '',
      actividad: Object,
      actividades: [],
      actividadesAsignadas: [],
      actividadAsignada: Object,
      obra: Object,
      obras: [],
      material: Object,
      materiales: [],
      materialesAsignados: [],
      materialAsignado: Object,
      equipo: Object,
      equipos: [],
      equiposAsignados: [],
      equipoAsignado: Object,
      empleadosAsignados: [],
      empleados: [],
      empleado: Object,
      empleadoAsignado: Object,
      herramientas: [],
      herramientasAsignadas: [],
      herramienta: Object,
      herramientaAsignada: Object,
      empleadoID : '',
      herramientaID: '',
      equipoID: '',
      materialID: '',
      cantidadHerramienta: '',
      cantidadMaterial: '',
      tabs: 0,
    }
  },
  mounted () {
    this.cargarObras()
    this.cargarEmpleados()
    this.cargarHerramientas()
    this.cargarEquipos()
    this.cargarMateriales()
  },
  methods: {
    cargarObras () {
       axios.get('http://localhost:3000/api/obras').then(result => {
        this.obras = result.data
      }).catch ((error) => {
        alert('No fue posible cargar las obras')
      })
    },
    cargarActividades (id) {
      axios.get(`http://localhost:3000/api/actividades/${id}`).then(result => {
        this.actividades = result.data
      }).catch((error) => {
        alert('No fue posible cargar las actividades')
      })
    },
    cargarEmpleados () {
      axios.get('http://localhost:3000/api/empleados').then(result => {
        this.empleados = result.data
      }).catch((error) => {
        alert('No fue posible cargar empleados')
      })
    },
    cargarHerramientas () {
      axios.get('http://localhost:3000/api/herramientas').then(result => {
        this.herramientas = result.data
      }).catch((error) => {
        alert('No fue posible cargar herramientas')
      })
    },
    cargarEquipos () {
      axios.get('http://localhost:3000/api/equipos').then(result => {
        this.equipos = result.data
      }).catch((error) => {
        alert('No fue posible cargar equipos')
      })
    },
    cargarMateriales () {
      axios.get('http://localhost:3000/api/materiales').then(result => {
        this.materiales = result.data
      }).catch((error) => {
        alert('No fue posible cargar materiales')
      })
    },
    cargarDatosAsignados (id) {
      this.idActividad = id; 
      axios.get(`http://localhost:3000/api/actividad_empleados/${id}`).then(result => {
        this.empleadosAsignados = result.data
      }).catch((error) => {
        console.error(error)
      })
       axios.get(`http://localhost:3000/api/actividad_herramientas/${id}`).then(result => {
        this.herramientasAsignadas = result.data
      }).catch((error) => {
        console.error(error)
      })
      axios.get(`http://localhost:3000/api/actividad_equipos/${id}`).then(result => {
        this.equiposAsignados = result.data
      }).catch((error) => {
        console.error(error)
      })
      axios.get(`http://localhost:3000/api/actividad_materiales/${id}`).then(result => {
        this.materialesAsignados = result.data
      }).catch((error) => {
        console.error(error)
      })
    },
    asignarEmpleado () {
      axios.post(`http://localhost:3000/api/actividad_empleados/${this.idActividad}/${this.empleadoID}`).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Empleado asignado!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible asignar al empleado!')
      })
    },
    asignarHerramienta () {
      axios.post(`http://localhost:3000/api/actividad_herramientas/${this.idActividad}/${this.herramientaID}`, Qs.stringify({cantidad: this.cantidadHerramienta})).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Herramienta asignada!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible asignar la herramienta!')
      })
    },
    asignarEquipo () {
      axios.post(`http://localhost:3000/api/actividad_equipos/${this.idActividad}/${this.equipoID}`).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Equipo asignado!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible asignar al empleado!')
      })
    },
    asignarMaterial () {
      axios.post(`http://localhost:3000/api/actividad_materiales/${this.idActividad}/${this.materialID}`, Qs.stringify({cantidad: this.cantidadMaterial})).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Material asignado!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible asignar al empleado!')
      })
    },
    desasignarEmpleado (idEmpleado) {
      axios.delete(`http://localhost:3000/api/actividad_empleados/${this.idActividad}/${idEmpleado}`).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Empleado desasignado!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible desasignar al empleado!')
      })
    },
    desasignarHerramienta (idHerramienta) {
      axios.delete(`http://localhost:3000/api/actividad_herramientas/${this.idActividad}/${idHerramienta}`).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Herramienta desasignada!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible desasignar la herramienta!')
      })
    },
    desasignarEquipo (idEquipo) {
      axios.delete(`http://localhost:3000/api/actividad_equipos/${this.idActividad}/${idEquipo}`).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Equipo desasignado!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible desasignar al equipo!')
      })
    },
    desasignarMaterial (idMaterial) {
      axios.delete(`http://localhost:3000/api/actividad_materiales/${this.idActividad}/${idMaterial}`).then((res) => {
        this.cargarDatosAsignados(`${this.idActividad}`)
        alert('Material desasignado!')
      }).catch((error) => {
        console.error(error)
        alert('ERROR. No fue posible desasignar el material!')
      })
    },
    establecerIDEmpleado (id) {
      this.empleadoID = id;
    },
    establecerIDHerramienta (id) {
      this.herramientaID = id;
    },
    establecerIDEquipo (id) {
      this.equipoID = id;
    },
    establecerIDMaterial (id) {
      this.materialID = id;
    },
  }
}
</script>

