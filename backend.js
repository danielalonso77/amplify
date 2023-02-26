import firebase from 'firebase/app';

const alumnosRef = firebase.firestore().collection('alumnos');

// agregarAlumno

export const addAlumnos = alumnosRef.add({
    matricula:'IA-0001',
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    correo : 'juanperez@mail.com',
    telefono: '1234567890'}
)

// obtenerAlumnos
alumnosRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

//crear una collection para asistencia de alumnos
const asistenciaRef = firebase.firestore().collection('asistencia');

// agregarAsistencia
asistenciaRef.add({
    matricula:'IA-0001',
    fecha: '2021-09-01',
    asistencia: true
})