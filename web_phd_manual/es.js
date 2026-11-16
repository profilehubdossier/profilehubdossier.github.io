// es.js: TODO el texto del manual está aquí, no hay texto escrito dentro del diseño de la página.
// Nota: no traduzcas las claves, los id, los iconos ni los nombres de las imágenes.

window.MANUAL_TEXT = {
  lang: "es",

  // El botón de Inicio. Déjalo en "" hasta que tengas un dominio real y luego pon aquí la dirección de la página principal de la app.
  homeUrl: "",

  page: {
    docTitle: "Manual de usuario | Profile Hub Dossier",
    brand: "Profile Hub Dossier",
    title: "Manual de usuario",
    lede: "Todo lo que necesitas para usar PHD en la web, paso a paso."
  },

  // Los 3 botones que se mantienen arriba. target = el id de la sección a la que se desplaza.
  nav: {
    label: "Secciones del manual",
    profiles: { text: "Perfiles", icon: "badge", target: "profiles" },
    home: { text: "Inicio", icon: "home" },
    features: { text: "Funciones", icon: "widgets", target: "features" }
  },

  ui: {
    iconHint: "Toca un icono para ver dónde está en la app.",
    language: "Idioma",
    close: "Cerrar",
    tapOutside: "Toca fuera de la imagen para cerrarla.",
    screenshotSoon: "Captura de pantalla próximamente",
    homeSoon: "El enlace de la app se añadirá pronto.",
    guideSoon: "Esta guía estará disponible pronto."
  },

  footer: {
    support: "Soporte:",
    email: "profilehubdossier@gmail.com",
    copy: "© 2026 Fryinocean, Profile Hub Dossier"
  },

  sections: [
    // ───────────────────────── 1. GENERAL ─────────────────────────
    {
      id: "general",
      icon: "info",
      title: "General",
      blocks: [
        { type: "sub", text: "Primera vez aquí" },
        {
          type: "steps",
          items: [
            "Introduce tu correo electrónico. Te enviamos un enlace de inicio de sesión, así que no hay contraseña que recordar.",
            "Elige tu plan y completa el pago en la página siguiente.",
            "Toca Comenzar con un archivo nuevo si eres nuevo en PHD. Luego llegarás a la página de inicio.",
            "Antes que nada, añade un contacto (toca el icono de ajustes de persona y luego añadir contacto o importar). Importar solo acepta archivos de contactos, como archivos .vcf."
          ]
        },

        {
          type: "icons",
          items: [
            {
              id: "person",
              icon: "manage_accounts",
              label: "Ajustes de persona",
              title: "Ajustes de persona",
              image: "img/general-person-x.webp",
              alt: "La página de inicio con el icono de ajustes de persona encima de la barra Nuevo, a la derecha",
              caption: "Ajustes de persona es el icono del extremo derecho, justo encima de la barra Nuevo. Tócalo para añadir o importar un contacto.",
              mark: { x: 87.3, y: 85.9, w: 8, h: 4.9 }
            },
            {
              id: "contact",
              icon: "person",
              label: "Contacto",
              title: "Contacto",
              image: "img/general-contact.webp",
              alt: "El menú de contacto con los iconos Añadir e Importar",
              caption: "Toca el icono de ajustes de persona y luego Contacto. Elige Añadir para crear un contacto o Importar para traer contactos desde un archivo .vcf.",
              mark: [
                { x: 7.2, y: 89.4, w: 8.5, h: 5.9 },
                { x: 31.5, y: 89.4, w: 9.5, h: 5.9 }
              ]
            },
            {
              id: "close",
              icon: "close",
              label: "X",
              title: "El icono X",
              image: "img/general-person-x.webp",
              alt: "La página de inicio con el icono X encima de la barra Nuevo, a la izquierda",
              caption: "Toca X cuando hayas terminado y luego elige Confirmar (descargar y quedarse) o Finalizar y cerrar sesión (descargar y salir).",
              mark: { x: 5.2, y: 85.9, w: 8, h: 4.9 }
            },
            {
              id: "new",
              icon: "queue_play_next",
              label: "Nuevo",
              title: "El botón Nuevo",
              image: "img/general-new.webp",
              alt: "El menú Nuevo con las filas Acción, Perfil y Contacto",
              caption: "Toca Nuevo en la parte inferior de la página de inicio para abrir este menú. Elige una acción, un perfil y un contacto, y luego toca Fecha.",
              mark: { x: 13, y: 54.3, w: 73.5, h: 9.3 }
            }
          ]
        },

        { type: "sub", text: "Uso diario" },
        {
          type: "steps",
          items: [
            "Inicia sesión si es necesario, luego toca Elegir archivo y selecciona tu archivo más reciente.",
            "Toca Nuevo y luego elige una de estas acciones según lo que quieras hacer: Añadir, Editar, Resumen, Gestionar, Cita o Informe. Cita e Informe son solo para el plan Business.",
            "Elige un perfil, como Cosmético, Educación o Moneyflow.",
            "Elige un contacto.",
            "Toca Fecha. Añadir y Cita usan una sola fecha. Editar, Resumen, Gestionar e Informe usan el rango de fechas del calendario en la parte superior de la página de inicio.",
            "Haz tu trabajo, toca X y luego finaliza como se describe a continuación."
          ]
        },

        { type: "sub", text: "Cuando hayas terminado" },
        {
          type: "pair",
          items: [
            {
              icon: "close",
              title: "Toca X, luego Confirmar",
              text: "Permaneces en la app. Tus cambios se descargan como archivos."
            },
            {
              icon: "logout",
              title: "Toca X, luego Finalizar y cerrar sesión",
              text: "Tus archivos se descargan y vuelves a la página de inicio de sesión con correo electrónico."
            }
          ]
        },
        { type: "p", text: "Cancelar cierra el mensaje y permaneces en la app." },

        { type: "sub", text: "Tus archivos" },
        {
          type: "p",
          text: "Cada nombre de archivo tiene la fecha y hora en que fue creado: año, mes, día, y luego hora, minuto y segundo. Por ejemplo, 20261010_170833 significa 2026-10-10 a las 17:08:33."
        },
        {
          type: "files",
          items: [
            {
              name: "20261010_170833_phdweb.db",
              text: "Tu archivo de base de datos con todos tus registros. Se descarga cuando cambias registros."
            },
            {
              name: "20261010_170833.ics",
              text: "Tus citas. Se descarga cuando añades una cita. Ábrelo para añadir los eventos a tu calendario y luego bórralo."
            },
            {
              name: "Aisha_Jackson_20261114_221727_invoice.pdf",
              text: "Tu factura (plan Business). Después de tocar Confirmar en la vista previa, se guarda primero en tu dispositivo y luego se descarga cuando tocas X. El nombre es el nombre del contacto, luego la fecha y hora en que se creó, y luego invoice."
            },
            {
              name: "20261010_170833.phdcos",
              text: "Un estilo cosmético que exportaste con Transferencia de estilo (plan Business). Impórtalo para llevar el estilo a otro contacto."
            }
          ]
        },

        { type: "sub", text: "Bueno saber" },
        {
          type: "list",
          items: [
            "Un mensaje que te pide elegir desaparece por sí solo después de 3 a 5 segundos.",
            "El calendario en la parte superior de la página de inicio establece el rango de fechas para Editar, Resumen y Gestionar."
          ]
        },

        {
          type: "note",
          icon: "lock",
          text: "Trabajamos duro para proteger tu privacidad. Tus registros viven en un archivo en tu propio dispositivo, no en nuestros servidores. Por eso hay algunos pasos adicionales: descarga tu archivo, conserva tu archivo más reciente y borra los archivos ics después de añadirlos a tu calendario."
        },

        {
          type: "accordion",
          icon: "tune",
          title: "Uso avanzado",
          sub: "Mover archivos y usar más de un dispositivo",
          blocks: [
            { type: "sub", text: "Dónde van tus archivos" },
            {
              type: "list",
              items: [
                "Teléfonos, tabletas, Safari y Firefox: los archivos van a tu carpeta de descargas y la app te pide confirmar cada archivo.",
                "Chrome o Edge en una computadora: el archivo de base de datos se guarda donde elijas la primera vez, y los guardados posteriores reemplazan ese archivo. Los archivos de calendario preguntan dónde guardar cada vez."
              ]
            },
            { type: "sub", text: "Tu archivo más reciente y más de un dispositivo" },
            {
              type: "list",
              items: [
                "La próxima vez que inicies sesión, abre tu archivo de base de datos más reciente. Comprueba la fecha y hora en el nombre.",
                "No hay sincronización entre dispositivos. Mueve tu archivo más reciente al otro dispositivo antes de empezar, o podrías sobrescribir trabajo más reciente.",
                "La app compara tu archivo con tu último guardado y te avisa si puede existir uno más reciente."
              ]
            },
            { type: "sub", text: "Mantén todo ordenado" },
            {
              type: "list",
              items: [
                "Copia tu archivo a una carpeta segura antes de reemplazarlo, para tener siempre una copia de seguridad.",
                "Borra los archivos de calendario antiguos después de añadir los eventos a tu calendario, para no añadirlos dos veces."
              ]
            }
          ]
        }
      ]
    },

    // ───────────────────────── 2. PROFILES ─────────────────────────
    {
      id: "profiles",
      icon: "badge",
      title: "Perfiles",
      intro: [
        "Toca un perfil para abrir su guía. Editar, Gestionar, Resumen e Informe usan los registros dentro del rango de fechas que elijas en el calendario.",
        "Editar y Gestionar pueden encontrar más de un resultado. Todos se muestran en la página de selección {icon:selection}, así que toca el que quieras.",
        "¿Guardar está en gris? Toca el icono de información {icon:info} para ver qué falta. Tócalo de nuevo para ocultar el mensaje."
      ],
      inline: {
        selection: {
          icon: "list_alt",
          label: "Página de selección",
          title: "La página de selección",
          image: "img/profiles-selection.webp",
          alt: "La página de selección con una lista de estilos, el primero marcado",
          caption: "Editar y Gestionar muestran cada coincidencia aquí. Toca la que quieras.",
          mark: { x: 9.4, y: 16.4, w: 81.3, h: 19 }
        },
        info: {
          icon: "info",
          label: "Icono de información",
          title: "El icono de información",
          image: "img/profiles-info.webp",
          alt: "El botón Guardar en gris con el icono de información arriba a la derecha",
          caption: "Si Guardar está en gris, toca el icono de información para ver qué falta. Tócalo de nuevo para ocultar el mensaje.",
          mark: { x: 89.9, y: 40.9, w: 5.3, h: 14.5 }
        }
      },
      blocks: [
        {
          type: "accordion",
          accent: "cosmetic",
          icon: "self_care",
          title: "Cosmético",
          sub: "Perfiles de estilo, artículos y citas",
          blocks: [
            {
              type: "icons",
              hint: "Toca un icono para ver la pantalla **COSMÉTICO**.",
              items: [
                {
                  id: "cosAdd",
                  icon: "create_new_folder",
                  label: "Añadir",
                  title: "Añadir Cosmético",
                  image: "img/cosmetic-add.webp",
                  alt: "El formulario Añadir Cosmético con el nombre del contacto marcado arriba",
                  caption: "Cada registro pertenece a un contacto, como tú mismo, un ser querido, un amigo o un cliente. Completa la información y luego toca Guardar. Cuando hayas terminado, toca X para descargar tu(s) archivo(s).",
                  mark: { x: 9.1, y: 5.3, w: 40.5, h: 6.3 }
                },
                {
                  id: "cosManage",
                  icon: "database_search",
                  label: "Gestionar",
                  title: "Gestionar Cosmético",
                  image: "img/cosmetic-manage.webp",
                  alt: "El cuadro de búsqueda de Gestionar Cosmético con nombre del artículo, nombre del estilo y estado de la cita",
                  caption: "Introduce tus datos de búsqueda para encontrar tus registros. Cuantos más cuadros rellenes, más específica será la lista. Luego toca Buscar."
                },
                {
                  id: "cosAppt",
                  icon: "calendar_clock",
                  label: "Cita",
                  title: "Cita",
                  image: "img/cosmetic-appt.webp",
                  alt: "El formulario de Cita",
                  caption: "Completa la información de la cita y luego toca Guardar. Solo plan Business."
                }
              ]
            },
            {
              type: "steps",
              items: [
                {
                  label: "Añadir Cosmético:",
                  text: "Elige una sola fecha en el calendario en la parte superior de la página de inicio. Esta es la fecha de entrada del registro de compra para ti, un ser querido, un amigo o un cliente, y puedes verla en la esquina superior derecha del encabezado de la página. Completa la información y luego toca Guardar. Cuando hayas terminado, toca X para descargar tu archivo."
                },
                {
                  label: "Editar Cosmético:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. El rango de fechas debe incluir la fecha que introdujiste cuando añadiste el registro. ¿La olvidaste? Elige un rango amplio, como todo el mes. Si hay más de un resultado en ese rango, toca el que quieras en la página de selección. Cambia la información y luego toca Guardar. Cuando hayas terminado, toca X para descargar tus cambios."
                },
                {
                  label: "Resumen:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. Resumen usa cada registro cuya fecha de entrada esté dentro de ese rango. Muestra tus 3 estilos más costosos, tus 3 artículos más frecuentes y tus 3 artículos más costosos, además de cada estilo con sus artículos y un gráfico circular de los costos."
                },
                {
                  label: "Gestionar Cosmético:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio.\n\nPara buscar por nombre de artículo o nombre de estilo, el rango de fechas debe incluir la fecha de entrada del registro.\n\nPara buscar por estado de cita, el rango de fechas debe incluir la fecha y hora de la cita, NO la fecha de entrada.\n\nLuego introduce tus datos de búsqueda (cuantos más cuadros rellenes, más específica será la lista), toca Buscar, toca un resultado, cambia la información y luego toca Guardar."
                },
                {
                  label: "Cita (plan Business):",
                  text: "Elige una fecha en el calendario para anotar el registro. Esta NO es la fecha de la cita. Completa la información de la cita, luego toca el cuadro Fecha y hora y elige la fecha y hora reales de la cita en el calendario emergente. Toca Guardar. ¿Quieres una factura? Toca el icono Factura en la hoja inferior, elige al artista en la ventana emergente, revisa la vista previa y luego toca Confirmar. Cuando hayas terminado, toca X para descargar. Si cambiaste registros, añadiste una cita e hiciste una factura, se descargan tres archivos (consulta Tus archivos en la sección General)."
                },
                {
                  label: "Informe de citas (plan Business):",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. Informe de citas usa cada cita cuya fecha y hora estén dentro de ese rango, NO la fecha de entrada. Muestra tu actividad de citas (citas, horas, tarifas de servicio), el estado de reserva (pagado, pendiente, reservado), tarifas y saldo (tarifa de desplazamiento, depósito, saldo pendiente) y una tarjeta por cada cita."
                }
              ]
            }
          ]
        },
        {
          type: "accordion",
          accent: "money",
          icon: "money_bag",
          title: "Moneyflow",
          sub: "Gastos por persona, tienda y categoría",
          blocks: [
            {
              type: "icons",
              hint: "Toca un icono para ver la pantalla **MONEYFLOW**.",
              items: [
                {
                  id: "monAdd",
                  icon: "create_new_folder",
                  label: "Añadir",
                  title: "Añadir Moneyflow",
                  image: "img/moneyflow-add.webp",
                  alt: "El formulario Añadir Moneyflow con el nombre del contacto marcado arriba",
                  caption: "Registra los gastos de tus seres queridos, familia, amigos, clientes, empresa y más. Completa la información y luego toca Guardar. Cuando termines todo, toca X en la página de inicio de la app para descargar tu(s) archivo(s).",
                  mark: { x: 9.2, y: 5.4, w: 41, h: 6.2 }
                },
                {
                  id: "monEdit",
                  icon: "bookmark_manager",
                  label: "Editar",
                  title: "Editar Moneyflow",
                  image: "img/moneyflow-edit.webp",
                  alt: "La página de selección con una lista de tiendas",
                  caption: "Si hay más de un resultado en tu rango de fechas, todos se muestran aquí. Toca el que quieras editar."
                },
                {
                  id: "monManage",
                  icon: "database_search",
                  label: "Gestionar",
                  title: "Gestionar Moneyflow",
                  image: "img/moneyflow-manage.webp",
                  alt: "El cuadro de búsqueda de Gestionar Moneyflow con un nombre de tienda y una lista de categorías",
                  caption: "Introduce tus datos de búsqueda para encontrar tus registros. Cuantos más cuadros rellenes, más específica será la lista. Luego toca Buscar."
                }
              ]
            },
            {
              type: "steps",
              items: [
                {
                  label: "Añadir Moneyflow:",
                  text: "Elige una sola fecha en el calendario en la parte superior de la página de inicio. Esta es la fecha de entrada del registro de gasto, y puedes verla en la esquina superior derecha del encabezado de la página. Completa la información para registrar gastos para ti, tus seres queridos, familia, amigos, clientes, empresa y más, y luego toca Guardar. Cuando hayas terminado, toca X para descargar tu archivo."
                },
                {
                  label: "Editar Moneyflow:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. El rango de fechas debe incluir la fecha que introdujiste cuando añadiste el registro. ¿La olvidaste? Elige un rango amplio, como todo el mes. Si hay más de un resultado en ese rango, toca el que quieras en la página de selección. Cambia la información y luego toca Guardar. Cuando hayas terminado, toca X para descargar tus cambios."
                },
                {
                  label: "Resumen:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. Resumen usa cada registro cuya fecha de entrada esté dentro de ese rango. Muestra tus 3 tiendas con mayor gasto y tus 3 artículos más costosos, además de cada tienda con sus categorías y un gráfico circular de los costos."
                },
                {
                  label: "Gestionar Moneyflow:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. El rango de fechas debe incluir la fecha de entrada del registro. ¿La olvidaste? Elige un rango amplio, como todo el mes. Luego introduce tus datos de búsqueda, como la tienda o la categoría (cuantos más cuadros rellenes, más específica será la lista), toca Buscar, toca un resultado, cambia la información y luego toca Guardar."
                }
              ]
            }
          ]
        },
        {
          type: "accordion",
          accent: "edu",
          icon: "school",
          title: "Educación",
          sub: "Matrícula, libros, materiales y otros gastos escolares",
          blocks: [
            {
              type: "icons",
              hint: "Toca un icono para ver la pantalla **EDUCACIÓN**.",
              items: [
                {
                  id: "eduAdd",
                  icon: "create_new_folder",
                  label: "Añadir",
                  title: "Añadir Educación",
                  image: "img/education-add.webp",
                  alt: "El formulario Añadir Educación con el nombre del contacto y los 3 puntos marcados",
                  caption: "Completa la información y luego toca Guardar. Toca los 3 puntos en el cuadro de fecha y hora para añadir el evento a la memoria de tu dispositivo. Cuando termines todo, toca X en la página de inicio de la app para descargar tu(s) archivo(s).",
                  mark: [
                    { x: 9.1, y: 5.5, w: 43, h: 6.3 },
                    { x: 26.6, y: 44.9, w: 5.4, h: 3.6 }
                  ]
                },
                {
                  id: "eduEdit",
                  icon: "bookmark_manager",
                  label: "Editar",
                  title: "Editar Educación",
                  image: "img/education-edit.webp",
                  alt: "La página de selección con una lista de escuelas",
                  caption: "Si hay más de un resultado en tu rango de fechas, todos se muestran aquí. Toca el que quieras editar."
                },
                {
                  id: "eduManage",
                  icon: "database_search",
                  label: "Gestionar",
                  title: "Gestionar Educación",
                  image: "img/education-manage.webp",
                  alt: "El cuadro de búsqueda de Gestionar Educación con escuela y objetivos de aprendizaje",
                  caption: "Introduce tus datos de búsqueda para encontrar tus registros. Cuantos más cuadros rellenes, más específica será la lista. Luego toca Buscar."
                }
              ]
            },
            {
              type: "steps",
              items: [
                {
                  label: "Añadir Educación:",
                  text: "Elige una sola fecha en el calendario en la parte superior de la página de inicio. Esta es la fecha de entrada del registro, NO la fecha programada, y puedes verla en la esquina superior derecha del encabezado de la página. Completa la información. Toca el cuadro de fecha y hora y elige la fecha y hora programadas en el calendario emergente (Guardar permanece en gris hasta que lo hagas). Luego toca Guardar. Para añadir el horario a tu calendario, toca los 3 puntos junto a la fecha y hora. Esto guarda el evento en la memoria del dispositivo. Cuando hayas terminado con todo, toca X para descargar tus archivos. Si cambiaste registros y añadiste un evento, se descargan dos archivos (consulta Tus archivos en la sección General)."
                },
                {
                  label: "Editar Educación:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. El rango de fechas debe incluir la fecha y hora programadas del cuadro de fecha y hora, NO la fecha de entrada. ¿La olvidaste? Elige un rango amplio, como todo el año. Si hay más de un resultado en ese rango, toca el que quieras en la página de selección. Cambia la información y luego toca Guardar. Cuando hayas terminado, toca X para descargar tus cambios."
                },
                {
                  label: "Resumen:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. Resumen usa cada registro cuya fecha y hora programadas estén dentro de ese rango, NO la fecha de entrada. Muestra tus escuelas con mayor gasto y tus objetivos de aprendizaje más costosos, además de cada escuela con sus objetivos de aprendizaje y un gráfico circular de los costos."
                },
                {
                  label: "Gestionar Educación:",
                  text: "Elige un rango de fechas en el calendario en la parte superior de la página de inicio. El rango de fechas debe incluir la fecha y hora programadas del cuadro de fecha y hora, NO la fecha de entrada. ¿La olvidaste? Elige un rango amplio, como todo el año. Luego introduce tus datos de búsqueda, como la escuela o el objetivo de aprendizaje (cuantos más cuadros rellenes, más específica será la lista), toca Buscar, toca un resultado, cambia la información y luego toca Guardar."
                }
              ]
            }
          ]
        }
      ]
    },

    // ───────────────────────── 3. FEATURES ─────────────────────────
    {
      id: "features",
      icon: "widgets",
      title: "Funciones",
      intro: "Herramientas adicionales para tu archivo y tu plan.",
      inline: {
        person: {
          icon: "manage_accounts",
          label: "Ajustes de persona",
          title: "Ajustes de persona",
          image: "img/general-person-x.webp",
          alt: "La página de inicio con el icono de ajustes de persona encima de la barra Nuevo, a la derecha",
          caption: "Ajustes de persona es el icono del extremo derecho, justo encima de la barra Nuevo.",
          mark: { x: 87.3, y: 85.9, w: 8, h: 4.9 }
        },
        exportImport: {
          icon: "modeling",
          label: "Exportar / Importar datos",
          title: "Exportar / Importar datos",
          image: "img/ex-import-feature.webp",
          alt: "La barra de ajustes de persona con Contacto, Exportar / Importar datos y Administración",
          caption: "Toca Exportar / Importar datos para abrir la página. Solo plan Business.",
          mark: { x: 40.5, y: 20, w: 20, h: 50 }
        },
        exportBtn: {
          label: "Exportar",
          title: "Exportar un estilo",
          image: "img/export-feature.webp",
          alt: "La página Exportar / Importar datos con un contacto y un estilo seleccionados",
          caption: "Elige el contacto en De, elige el Estilo y luego toca Exportar."
        },
        transferBtn: {
          label: "Transferir",
          title: "Transferir un estilo",
          image: "img/transfer-feature.webp",
          alt: "La página Exportar / Importar datos con Transferir seleccionado",
          caption: "Elige el contacto en De, elige el Estilo, luego toca Transferir y elige el contacto en Para."
        },
        importBtn: {
          label: "Seleccionar archivo de respaldo",
          title: "Importar un estilo",
          image: "img/import-feature.webp",
          alt: "La parte de Importar de la página con un archivo seleccionado, Para y Contraseña",
          caption: "Elige el archivo .phdcos, elige el contacto en Para, escribe la contraseña y luego toca Confirmar."
        },
        admin: {
          icon: "settings_alert",
          label: "Administración",
          title: "Administración",
          image: "img/ex-import-feature.webp",
          alt: "La barra de ajustes de persona con Contacto, Exportar / Importar datos y Administración",
          caption: "Toca Administración para abrir la página de la cuenta.",
          mark: { x: 85, y: 20, w: 8, h: 50 }
        },
        manageSub: {
          icon: "theater_comedy",
          label: "Gestionar suscripción",
          title: "Gestionar suscripción",
          image: "img/feature-manage-subscription.webp",
          alt: "El botón Gestionar suscripción con el estado del plan debajo del título",
          caption: "Toca Gestionar suscripción para abrir la página de tu plan."
        },
        subStatus: {
          label: "estado de la suscripción",
          title: "Estado de la suscripción",
          image: "img/feature-manage-subscription.webp",
          alt: "El botón Gestionar suscripción con el estado del plan marcado",
          caption: "El estado de tu plan aparece debajo del título, por ejemplo cuándo finaliza tu plan.",
          mark: { x: 32, y: 52, w: 37, h: 11 }
        },
        cardPay: {
          label: "pagar con tarjeta",
          title: "Pagar con tarjeta",
          image: "img/feature-stripe-pay.webp",
          alt: "La página de Stripe con la opción de pago con Tarjeta marcada",
          caption: "Elige Tarjeta y luego introduce los datos de tu tarjeta.",
          mark: { x: 59, y: 53, w: 37, h: 7 }
        }
      },
      blocks: [
        {
          type: "accordion",
          icon: "modeling",
          title: "Exportar e Importar",
          sub: "Comparte un estilo cosmético con otro dispositivo o contacto",
          blocks: [
            { type: "p", text: "Toca el icono de ajustes de persona {icon:person} y luego toca Exportar / Importar datos {icon:exportImport}." },
            { type: "sub", text: "Exportar" },
            {
              type: "steps",
              items: [
                "En el cuadro De, toca y escribe el nombre del contacto, luego elige el contacto de la lista. Haz lo mismo en el cuadro Estilo para elegir el estilo.",
                "Toca {link:exportBtn}, crea una contraseña y luego toca Confirmar.",
                "Se descarga un archivo .phdcos. Úsalo para importar el estilo en otro dispositivo."
              ]
            },
            { type: "sub", text: "Transferir" },
            {
              type: "steps",
              items: [
                "En De, elige el contacto. Luego elige el nombre del Estilo.",
                "Toca {link:transferBtn}, elige el contacto que recibe el estilo en Para y luego toca Confirmar. No se necesita contraseña.",
                "Transferir copia los últimos detalles de los artículos a ese contacto. Todas las cantidades se establecen en 1, así que revisa y actualiza los detalles después de la transferencia."
              ]
            },
            { type: "sub", text: "Importar" },
            {
              type: "steps",
              items: [
                "Toca {link:importBtn} y elige el archivo .phdcos.",
                "En Para, elige el contacto que recibe el estilo.",
                "Escribe la contraseña que creaste cuando exportaste y luego toca Confirmar."
              ]
            },
            {
              type: "note",
              icon: "lock",
              text: "Tus datos se cifran con AES-256 antes de exportar. Guarda tu archivo de respaldo y tu contraseña en un lugar seguro; necesitas ambos para restaurar."
            }
          ]
        },
        {
          type: "accordion",
          icon: "theater_comedy",
          title: "Administración > Gestionar suscripción",
          sub: "Plan, prueba gratuita y cancelar",
          blocks: [
            {
              type: "steps",
              items: [
                "Toca el icono de ajustes de persona {icon:person}, luego toca Administración {icon:admin} y luego toca Gestionar suscripción {icon:manageSub}.",
                "Debajo del título, puedes ver tu {link:subStatus}, como cuándo finaliza tu plan.",
                "Se te llevará a una página de Stripe. Esto puede tardar un momento, según tu conexión, así que por favor espera.",
                "Elige Apple Pay o Google Pay si tu dispositivo lo ofrece, o {link:cardPay}."
              ]
            }
          ]
        }
      ]
    }
  ]
};
