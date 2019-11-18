/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [

  {
    path: '/',
    name: ' ',
    view: 'Log-in'
  },
  {
    path: '/home',
    name: ' ',
    // Relative to /src/views
    view: 'Home'
  },
  {
    path: '/ventana-actividades',
    name: 'Administrador de Actividades',
    view: 'VentanaActividades'
  },
  {
    path: '/ventana-obras',
    name: 'Administrador de Obras',
    view: 'VentanaObras'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/ventana-carga',
    name: 'Cargar elementos',
    view: 'VentanaCargar'
  },
  {
    path: '/ventana-desglose',
    name: 'Desglose de actividades',
    view: 'VentanaDesglose'
  }
]
