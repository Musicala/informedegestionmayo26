/**
 * INFORME MENSUAL - MUSICALA / GMMMC
 * Archivo de datos editable
 */

const INFORME_DATA = {
  mes: "Mayo",
  anio: "2026",
  periodo: "1 al 31 de mayo de 2026",
  institucion: "Fundacion San Antonio - GMMMC",
  proyecto: "Clases extracurriculares de danza y porras",
  areas: ["Porras", "Danzas"],
  responsable: "MUSICALA",
  coordinador: "",
  fase: "Montaje coreografico y fortalecimiento tecnico",

  indicadores: {
    sesionesProgramadas: 24,
    sesionesRealizadas: 24,
    cumplimiento: "100%",
    puntualidadDocentes: "100%",
    cambiosDocente: 0,
    nnaAtendidos: 52,
    horasProgramadas: 36,
    horasRealizadas: 36,
    observacionGeneral: "Cumplimiento mensual del 100%. No se reportaron contingencias, cambios de docente ni novedades operativas que afectaran el desarrollo del proceso."
  },

  resumenEjecutivo: "Durante mayo de 2026 se dio continuidad al proceso formativo en la Fundacion San Antonio - GMMMC, con enfasis en el acompanamiento artistico, corporal y tecnico de los NNA. El periodo se caracterizo por el avance en el montaje coreografico proyectado para la presentacion del 1 de agosto, el fortalecimiento de habilidades gimnasticas y acrobaticas, y el seguimiento sistematico mediante asistencias, bitacoras, registros de puntualidad y evidencias. Se realizaron 7 sesiones (14 horas) con 52 NNA atendidos, cumplimiento del 100% y puntualidad docente del 100%.",

  avances: [
    "Inicio y consolidacion del montaje coreografico para la presentacion del 1 de agosto.",
    "Desarrollo de habilidades basicas de gimnasia y acrobacia (rollos, medialunas, arco, invertidas).",
    "Claridad progresiva en las posiciones asignadas y mejor manejo de posturas corporales.",
    "Apropiacion de grupos acrobaticos y avances con flyers en posiciones corporales.",
    "Mayor memoria corporal en las marcaciones y trabajo cooperativo durante el montaje.",
    "Mejor acondicionamiento fisico y corporal de las estudiantes."
  ],

  retos: [
    "Ausencias de estudiantes en ambos grupos que pueden generar retrasos en el montaje.",
    "Dificultad de algunas participantes para recordar posiciones trabajadas previamente.",
    "Fortalecer la atencion activa, la memoria corporal y la repeticion tecnica durante la ejecucion.",
    "Mejorar fuerza muscular, resistencia, acondicionamiento fisico, manejo del espacio y limpieza tecnica."
  ],

  novedades: [
    "Trabajo de los grupos Junior y Juvenil de forma separada para potenciar habilidades acrobaticas y gimnasticas.",
    "Reconocimiento a estudiantes del grupo Junior: Michael Estefania Lugo, Maria Camila Trilleras y Maria Alejandra Vivas.",
    "Reconocimiento a estudiantes del grupo Juvenil: Amy Luciana Hernandez, Sara Gonzales e Ivanna Olarte."
  ],

  procesosPorArea: [
    {
      area: "Porras",
      icono: "🎀",
      color: "#D43B8A",
      descripcion: "Trabajo de gimnasia, acrobacia, montaje coreografico, acondicionamiento fisico y preparacion para presentacion. Concentro la mayor cantidad de informacion cualitativa del periodo en las bitacoras docentes.",
      sesionesProgramadas: 16,
      sesionesRealizadas: 16,
      participantes: 41,
      avances: [
        "Inicio y consolidacion del montaje coreografico para la presentacion del 1 de agosto.",
        "Habilidades basicas de gimnasia: rollos, rollos con giro, cangrejo, medialunas y arco.",
        "Trabajo de posiciones acrobaticas, grupos de base y cambios de flyers con los grupos Junior y Juvenil."
      ],
      retos: [
        "Reducir ausencias y reforzar la memoria de las posiciones trabajadas.",
        "Fortalecer fuerza, resistencia, precision y limpieza tecnica de los elementos."
      ],
      proyeccion: "Finalizar la rutina antes del receso de mitad de ano, profundizando en la limpieza tecnica de los elementos gimnasticos y acrobaticos.",
      cumplimiento: "100%"
    },
    {
      area: "Danzas",
      icono: "💃",
      color: "#6B3FA0",
      descripcion: "Continuidad del proceso formativo y permanencia del grupo durante el periodo.",
      sesionesProgramadas: 8,
      sesionesRealizadas: 8,
      participantes: 11,
      avances: [
        "Continuidad del proceso formativo evidenciada en las asistencias asociadas.",
        "Permanencia del grupo durante el periodo."
      ],
      retos: [
        "Fortalecer el seguimiento pedagogico mediante bitacoras que identifiquen con mayor claridad los avances tecnicos, expresivos y corporales."
      ],
      proyeccion: "Mantener la continuidad del proceso y articular los avances del grupo con los objetivos generales de preparacion escenica.",
      cumplimiento: "100%"
    }
  ],

  cumplimientoHorarios: {
    descripcion: "Durante mayo el equipo de MUSICALA cumplio con la totalidad de las sesiones programadas, con puntualidad en llegada y preparacion del espacio. La puntualidad docente fue del 100% (11 de 11 registros reportados de manera puntual).",
    porcentajeAsistenciaDocentes: "100%",
    observaciones: "No se evidenciaron contingencias, cambios de docente ni novedades que afectaran la prestacion del servicio. Se destaca el uso de bitacoras y registros digitales como herramienta de seguimiento academico."
  },

  tablerourl: "",
  tableroTitulo: "Tablero de seguimiento GMMMC 2026",

  // "fuente" indica de qué colección de Firebase carga el modal al hacer clic.
  evidencias: [
    {
      nombre: "Galeria de fotos del mes",
      descripcion: "Fotos de gimnasia, montaje coreografico, grupos acrobaticos y acondicionamiento fisico. Inicia sesion para ver las imagenes cargadas en Firebase.",
      url: "",
      estado: "Disponible",
      tipo: "galeria",
      fuente: "fotos"
    },
    {
      nombre: "Planillas de asistencia",
      descripcion: "7 registros de asistencia de participantes por sesion.",
      url: "",
      estado: "Disponible",
      tipo: "asistencia",
      fuente: "asistencias"
    },
    {
      nombre: "Registros de puntualidad",
      descripcion: "11 registros de puntualidad, todos reportados de manera puntual (100%).",
      url: "",
      estado: "Disponible",
      tipo: "registro",
      fuente: "puntualidad"
    },
    {
      nombre: "Bitacoras docentes",
      descripcion: "16 registros de bitacoras con objetivos trabajados, dificultades observadas y proyecciones pedagogicas.",
      url: "",
      estado: "Disponible",
      tipo: "registro",
      fuente: "bitacoras"
    },
    {
      nombre: "Informe mensual docente",
      descripcion: "1 informe mensual docente con reconocimientos a estudiantes destacadas.",
      url: "",
      estado: "Disponible",
      tipo: "carpeta",
      fuente: "informes"
    }
  ],

  recomendaciones: [
    "Mantener la division por edades y niveles de proceso (Junior y Juvenil).",
    "Continuar el fortalecimiento de fuerza, flexibilidad, coordinacion y memoria corporal.",
    "Reforzar la asistencia y permanencia de las estudiantes para evitar retrasos en el montaje.",
    "Realizar repasos constantes de las posiciones ya trabajadas y avanzar en la finalizacion de la rutina antes de las vacaciones de mitad de ano.",
    "Profundizar en la limpieza tecnica de los elementos gimnasticos y acrobaticos.",
    "Mantener el uso de bitacoras, asistencias y evidencias digitales, ajustando la intensidad segun la disposicion fisica y emocional del grupo."
  ],

  comentariosFinales: "Mayo de 2026 evidencia un proceso formativo activo, con avances importantes en el montaje coreografico, el desarrollo de habilidades gimnasticas y la consolidacion de posiciones corporales para la presentacion proyectada. A pesar de los retos asociados a la asistencia, la memoria corporal y la atencion activa, el grupo mostro avances significativos en coordinacion, disciplina, trabajo cooperativo y apropiacion tecnica. El balance general es favorable, con cumplimiento total de las sesiones, puntualidad docente del 100% y ausencia de contingencias.",

  firmas: [
    {
      cargo: "Coordinacion Musicala",
      nombre: "Jimmy Alexander Caballero Moreno",
      fecha: "Bogota, mayo de 2026"
    },
    {
      cargo: "Docente - Porras",
      nombre: "Natalia Moreno",
      fecha: "Bogota, mayo de 2026"
    },
    {
      cargo: "Docente - Danzas",
      nombre: "",
      fecha: "Bogota, mayo de 2026"
    },
    {
      cargo: "Enlace GMMMC / Vo.Bo. Institucion",
      nombre: "",
      fecha: "Bogota, mayo de 2026"
    }
  ]
};
