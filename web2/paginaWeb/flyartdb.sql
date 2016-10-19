-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2016 a las 01:47:01
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `flyartdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `nombre`, `email`, `telefono`) VALUES
(1, 'gabi', 'fda@da.com', NULL),
(2, 'fda', 'hjio', NULL),
(8, 'fdggghjj', 'fa@we', NULL),
(9, 'juop', 'dvsv', NULL),
(10, 'qwertyui', 'gdagf@dwv', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `id_profesor` int(11) DEFAULT NULL,
  `informacion` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`id`, `nombre`, `id_profesor`, `informacion`) VALUES
(1, 'baby', 3, 'esto es info df<B'),
(2, 'contemporaneo', 1, 'BFNNNGANG'),
(3, 'clasico', 1, 'hgshjjjxg\r\nnvzn\r\nnx\r\n\r\nnnn'),
(4, 'hiphop', 2, 'ngznz\r\nngzngzn\r\nn\r\nn\r\nz\r\nnnn'),
(5, 'contorsion', NULL, 'nvz'),
(6, 'teatro', 1, 'nznn'),
(7, 'hoysone', 1, 'jsghkskm'),
(8, 'altaDanza', NULL, 'holholhlfdo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripto`
--

CREATE TABLE `inscripto` (
  `rowId` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_clase` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Alumnos inscriptos en las clases.';

--
-- Volcado de datos para la tabla `inscripto`
--

INSERT INTO `inscripto` (`rowId`, `id_alumno`, `id_clase`) VALUES
(1, 1, 2),
(2, 1, 6),
(3, 2, 1),
(6, 9, 1),
(7, 10, 4),
(8, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombre`, `email`, `telefono`) VALUES
(1, 'Fernanda García', 'fer@gmail.com', '249-4256894'),
(2, 'Jacqueline Paramá', 'jparama@hotmail.com', NULL),
(3, 'Florencia Majorel', 'florm@gmail.com', '2244-56895');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `inscripto`
--
ALTER TABLE `inscripto`
  ADD PRIMARY KEY (`id_alumno`,`id_clase`),
  ADD UNIQUE KEY `rowId` (`rowId`),
  ADD KEY `id_alumno` (`id_alumno`),
  ADD KEY `id_clase` (`id_clase`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `clase`
--
ALTER TABLE `clase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `inscripto`
--
ALTER TABLE `inscripto`
  MODIFY `rowId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clase`
--
ALTER TABLE `clase`
  ADD CONSTRAINT `FK_profesor` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `inscripto`
--
ALTER TABLE `inscripto`
  ADD CONSTRAINT `FK_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumno` (`id`),
  ADD CONSTRAINT `FK_clase` FOREIGN KEY (`id_clase`) REFERENCES `clase` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
