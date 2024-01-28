import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()

async function main() {

  await prisma.role.upsert({
    where: {
      nombre: 'Administrador',
    },
    create: {
      id: 1,
      nombre: 'Administrador',
      descripcion: 'Rol para administradores con acceso completo al sistema',
    },
    update: {
      descripcion: 'Rol para administradores con acceso completo al sistema',
    },
  });

  await prisma.role.upsert({
    where: {
      nombre: 'Usuario',
    },
    create: {
      id: 2,
      nombre: 'Usuario',
      descripcion: 'Rol para usuarios con acceso limitado al sistema',
    },
    update: {
      descripcion: 'Rol para usuarios con acceso limitado al sistema',
    },
  });

  console.log('Se han creado 2 roles en la base de datos');

  // Creamos al superUsuario
  const passwordAdmin = "123";
  const hashedPassword = await bcrypt.hashSync(passwordAdmin, 10);
  await prisma.usuario.upsert({
    where: {
      email: "super@gmail.com",
    },
    create: {
      nombre: "Super",
      apellido: "Usuario",
      email: "super@gmail.com",
      password: hashedPassword,
      rol: { connect: { id: 1 }, },
    },
    update: {
      nombre: "Super",
      apellido: "Usuario",
    },
  });

  console.log('Se ha creado el SuperUsuario');

  // Creamos al superUsuario
  const passwordTest = "123";
  const hashedPasswordTest = await bcrypt.hashSync(passwordAdmin, 10);
  await prisma.usuario.upsert({
    where: {
      email: "test@gmail.com",
    },
    create: {
      nombre: "Test",
      apellido: "Usuario",
      email: "test@gmail.com",
      password: hashedPassword,
      rol: { connect: { id: 2 }, },
    },
    update: {
      nombre: "Test",
      apellido: "Usuario",
      rolId: 2
    },
  });

  console.log('Se ha creado el TestUsuario');

  // Creamos los planes
  await prisma.plan.upsert({
    where: {
      nombre: "Plan Normal",
    },
    create: {
      nombre: "Plan Normal",
      descripcion: "Este plan tiene duracion de 30 días",
      valor: 30.00,
      duracion: 30,
    },
    update: {
      nombre: "Plan Normal",
      descripcion: "Este plan tiene duracion de 30 días",
    },
  });

  await prisma.plan.upsert({
    where: {
      nombre: "Plan Promocional",
    },
    create: {
      nombre: "Plan Promocional",
      descripcion: "Este plan tiene duracion de 90 días",
      valor: 70.00,
      duracion: 90,
    },
    update: {
      nombre: "Plan Promocional",
      descripcion: "Este plan tiene duracion de 90 días",
    },
  });

  console.log('Se ha creado 2 planes');

  // Creamos 3 miembros
  await prisma.member.upsert({
    where: {
      email: "adrian@gmail.com",
    },
    create: {
      cedula: "1726258172",
      nombre: "Adrian",
      apellido: "Jacome",
      email: "adrian@gmail.com",
      telefono: "0982762512",
      telefonoEmergencia: "02245466236",
      fechaNacimiento: "2003-03-23T00:00:00Z",
      sexo: "M",
      direccion: "La Ofelia",
      nacionalidad: "Ecuatoriana",
      plan: {connect: {id: 1,},},
    },
    update: {
      nombre: "Adrian",
    },
  });

  await prisma.member.upsert({
    where: {
      email: "juan.perez@gmail.com",
    },
    create: {
      cedula: "1724356251",
      nombre: "Juan",
      apellido: "Perez",
      email: "juan.perez@gmail.com",
      telefono: "0985662513",
      telefonoEmergencia: "02245444436",
      fechaNacimiento: "2001-07-14T00:00:00Z",
      sexo: "M",
      direccion: "Conocoto",
      nacionalidad: "Ecuatoriana",
      plan: {connect: {id: 1,},},
    },
    update: {
      nombre: "Juan",
    },
  });

  await prisma.member.upsert({
    where: {
      email: "micaela.duran@gmail.com",
    },
    create: {
      cedula: "1726269172",
      nombre: "Micaela",
      apellido: "Duran",
      email: "micaela.duran@gmail.com",
      telefono: "0985662513",
      telefonoEmergencia: "022952553",
      fechaNacimiento: "2000-05-21T00:00:00Z",
      sexo: "M",
      direccion: "La Florida",
      nacionalidad: "Ecuatoriana",
      plan: {connect: {id: 1,},},
    },
    update: {
      nombre: "Micaela",
    },
  });

  console.log('Se ha creado 3 miembros');

  return;

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
