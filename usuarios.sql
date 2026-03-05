CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO usuarios (nombre, email) VALUES
('Ana García', 'ana.garcia@example.com'),
('Luis Fernández', 'luis.fernandez@example.com'),
('Sofía Martínez', 'sofia.martinez@example.com')
ON CONFLICT (email) DO NOTHING;