import { pool } from "./db.js";

async function obtenerUsuarios() {
  try {
    const resultado = await pool.query("SELECT * FROM usuarios ORDER BY id ASC");
    console.log("✅ Usuarios encontrados:", resultado.rows);
  } catch (error) {
    console.error("❌ Error al obtener usuarios:", error.message);
  }
}

async function obtenerUsuarioPorEmail(email) {
  try {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const valores = [email];

    const resultado = await pool.query(consulta, valores);

    if (resultado.rows.length === 0) {
      console.log("❌ No se encontró usuario con ese email");
    } else {
      console.log("✅ Usuario encontrado:", resultado.rows[0]);
    }
  } catch (error) {
    console.error("❌ Error al buscar usuario:", error.message);
  }
}

async function main() {
  await obtenerUsuarios();

  await obtenerUsuarioPorEmail("ana.garcia@example.com");      // existe
  await obtenerUsuarioPorEmail("correo.inexistente@email.com"); // no existe

  await pool.end(); // cierra conexión
}

main();