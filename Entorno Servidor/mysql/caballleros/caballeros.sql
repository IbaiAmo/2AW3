-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-09-2024 a las 13:57:58
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `caballeroscas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caballeros`
--

CREATE TABLE `caballeros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fuerza` int(11) NOT NULL,
  `ataque` int(11) NOT NULL,
  `defensa` int(11) NOT NULL,
  `experiencia` int(11) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `caballeros`
--

INSERT INTO `caballeros` (`id`, `nombre`, `fuerza`, `ataque`, `defensa`, `experiencia`, `fecha_nacimiento`, `activo`) VALUES
(1, 'Sir Anthony', 98, 87, 45, 2138, '1324-08-26', 0),
(2, 'Guts', 999, 999, 999, 247827, '1400-05-01', 1),
(3, 'El Cid Campeador', 300, 500, 210, 88598, '1099-07-10', 0),
(4, 'Sir Anthony', 98, 87, 45, 2138, '1324-08-26', 1),
(6, 'Ibus amus', 309, 890, 223, 7839, '1444-04-17', 1),
(7, 'Maximiliano', 870, 555, 712, 9900, '1299-11-05', 0),
(8, 'Pablus maximus', 459, 908, 220, 445, '1599-02-19', 1),
(9, 'Jonis jhonson', 590, 300, 999, 21893, '1221-06-08', 1),
(10, 'Henry Percy', 690, 700, 530, 8907, '1364-05-20', 0),
(11, 'Rey Arturo', 999, 999, 999, 99999, '1200-03-12', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `caballeros`
--
ALTER TABLE `caballeros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `caballeros`
--
ALTER TABLE `caballeros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
