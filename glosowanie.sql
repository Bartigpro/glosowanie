-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Mar 2023, 12:58
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `glosowanie`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `glosowanie`
--

CREATE TABLE `glosowanie` (
  `ID` int(11) NOT NULL,
  `Pesel` varchar(11) NOT NULL,
  `kandydat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `glosowanie`
--

INSERT INTO `glosowanie` (`ID`, `Pesel`, `kandydat`) VALUES
(54, '08123674912', 'Barrack_Obamium'),
(55, '08775368131', 'Wladyslaw_Pudding'),
(56, '01723981263', 'Boe_Jiden'),
(57, '09102734621', 'Boe_Jiden'),
(58, '00000000001', 'Wladyslaw_Pudding'),
(59, '10000000000', 'Boe_Jiden'),
(60, '00011111111', 'Wladyslaw_Pudding'),
(61, '00022222222', 'Wladyslaw_Pudding'),
(62, '00044444421', 'Wladyslaw_Pudding'),
(63, '00123823132', 'Wladyslaw_Pudding'),
(64, '29138927134', 'Boe_Jiden'),
(65, '05024089017', 'Barrack_Obamium'),
(66, '13521312321', 'Boe_Jiden'),
(67, '69696942069', 'Boe_Jiden'),
(68, '07626137612', 'Wladyslaw_Pudding'),
(69, '02731283214', 'Wladyslaw_Pudding');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kandydaci`
--

CREATE TABLE `kandydaci` (
  `ID_kandydata` int(11) NOT NULL,
  `Imieinazwisko` text NOT NULL,
  `Lat` int(11) NOT NULL,
  `ilosczbrodni` int(11) NOT NULL,
  `liczbaglosow` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `kandydaci`
--

INSERT INTO `kandydaci` (`ID_kandydata`, `Imieinazwisko`, `Lat`, `ilosczbrodni`, `liczbaglosow`) VALUES
(1, 'Boe Jiden', 71, 3, 11),
(2, 'Barrack Obamium', 54, 0, 7),
(3, 'Władysław Pudding', 82, 95, 13);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `glosowanie`
--
ALTER TABLE `glosowanie`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  ADD PRIMARY KEY (`ID_kandydata`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `glosowanie`
--
ALTER TABLE `glosowanie`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  MODIFY `ID_kandydata` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
