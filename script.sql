USE [master]
GO
/****** Object:  Database [ConApp]    Script Date: 13/5/2022 10:13:18 ******/
CREATE DATABASE [ConApp]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ConApp', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ConApp.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ConApp_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ConApp_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ConApp] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ConApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ConApp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ConApp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ConApp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ConApp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ConApp] SET ARITHABORT OFF 
GO
ALTER DATABASE [ConApp] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ConApp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ConApp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ConApp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ConApp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ConApp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ConApp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ConApp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ConApp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ConApp] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ConApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ConApp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ConApp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ConApp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ConApp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ConApp] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ConApp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ConApp] SET RECOVERY FULL 
GO
ALTER DATABASE [ConApp] SET  MULTI_USER 
GO
ALTER DATABASE [ConApp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ConApp] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ConApp] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ConApp] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ConApp] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ConApp', N'ON'
GO
ALTER DATABASE [ConApp] SET QUERY_STORE = OFF
GO
USE [ConApp]
GO
/****** Object:  User [alumno]    Script Date: 13/5/2022 10:13:18 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Opinion]    Script Date: 13/5/2022 10:13:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Opinion](
	[IdOpinion] [int] NOT NULL,
	[Opinion] [varchar](250) NOT NULL,
	[IdSolicitante] [int] NOT NULL,
	[IdPostulante] [int] NOT NULL,
 CONSTRAINT [PK_Opinion_1] PRIMARY KEY CLUSTERED 
(
	[IdOpinion] ASC,
	[IdSolicitante] ASC,
	[IdPostulante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Postulantes]    Script Date: 13/5/2022 10:13:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Postulantes](
	[Id] [int] NOT NULL,
	[ExperienciaLaboral] [varchar](250) NULL,
	[Disponibilidad] [varchar](250) NOT NULL,
	[Valoracion] [int] NULL,
 CONSTRAINT [PK_Postulantes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostulantesRubros]    Script Date: 13/5/2022 10:13:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostulantesRubros](
	[DNI] [int] NOT NULL,
	[IdRubro] [int] NOT NULL,
 CONSTRAINT [PK_PostulantesRubros] PRIMARY KEY CLUSTERED 
(
	[DNI] ASC,
	[IdRubro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rubros]    Script Date: 13/5/2022 10:13:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rubros](
	[IdRubro] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Rubros] PRIMARY KEY CLUSTERED 
(
	[IdRubro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Solicitante]    Script Date: 13/5/2022 10:13:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Solicitante](
	[Id] [int] NOT NULL,
 CONSTRAINT [PK_Solicitante] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 13/5/2022 10:13:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[DNI] [int] NOT NULL,
	[foto] [varchar](max) NULL,
	[NombreApellido] [varchar](255) NULL,
	[Celular] [int] NULL,
	[Mail] [varchar](50) NULL,
	[Password] [varchar](255) NULL,
	[FechaNacimiento] [date] NULL,
	[Opinion] [varchar](255) NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[DNI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Opinion] ([IdOpinion], [Opinion], [IdSolicitante], [IdPostulante]) VALUES (1, N'a', 46437631, 11111111)
GO
INSERT [dbo].[Postulantes] ([Id], [ExperienciaLaboral], [Disponibilidad], [Valoracion]) VALUES (11111111, N'a', N'a', 3)
GO
INSERT [dbo].[PostulantesRubros] ([DNI], [IdRubro]) VALUES (11111111, 2)
GO
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (1, N'Niniera')
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (2, N'Pintor')
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (3, N'Albanil')
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (4, N'Plomero')
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (5, N'Gasista')
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (6, N'Profesor')
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (7, N'Limpieza')
INSERT [dbo].[Rubros] ([IdRubro], [Nombre]) VALUES (8, N'Electricistas')
GO
INSERT [dbo].[Solicitante] ([Id]) VALUES (46437631)
GO
INSERT [dbo].[Usuario] ([DNI], [foto], [NombreApellido], [Celular], [Mail], [Password], [FechaNacimiento], [Opinion]) VALUES (11111111, N'https://nodejs.org/es/', N'EzeRei', 22222222, N'eze@gmail.com', N'b', CAST(N'2004-01-01' AS Date), N'2')
INSERT [dbo].[Usuario] ([DNI], [foto], [NombreApellido], [Celular], [Mail], [Password], [FechaNacimiento], [Opinion]) VALUES (46437631, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdL1FoqRZaCjSPOs00dTYK71MjsKObe6-TA&usqp=CAU', N'CAROLINAGoldbaum', 11111111, N'cachi200@gmail.com', N'a', CAST(N'2004-01-24' AS Date), N'1')
GO
ALTER TABLE [dbo].[Opinion]  WITH CHECK ADD  CONSTRAINT [FK_Opinion_Postulantes] FOREIGN KEY([IdPostulante])
REFERENCES [dbo].[Postulantes] ([Id])
GO
ALTER TABLE [dbo].[Opinion] CHECK CONSTRAINT [FK_Opinion_Postulantes]
GO
ALTER TABLE [dbo].[Opinion]  WITH CHECK ADD  CONSTRAINT [FK_Opinion_Solicitante] FOREIGN KEY([IdSolicitante])
REFERENCES [dbo].[Solicitante] ([Id])
GO
ALTER TABLE [dbo].[Opinion] CHECK CONSTRAINT [FK_Opinion_Solicitante]
GO
ALTER TABLE [dbo].[Postulantes]  WITH CHECK ADD  CONSTRAINT [FK_Postulantes_Usuario] FOREIGN KEY([Id])
REFERENCES [dbo].[Usuario] ([DNI])
GO
ALTER TABLE [dbo].[Postulantes] CHECK CONSTRAINT [FK_Postulantes_Usuario]
GO
ALTER TABLE [dbo].[PostulantesRubros]  WITH CHECK ADD  CONSTRAINT [FK_PostulantesRubros_Postulantes] FOREIGN KEY([DNI])
REFERENCES [dbo].[Postulantes] ([Id])
GO
ALTER TABLE [dbo].[PostulantesRubros] CHECK CONSTRAINT [FK_PostulantesRubros_Postulantes]
GO
ALTER TABLE [dbo].[PostulantesRubros]  WITH CHECK ADD  CONSTRAINT [FK_PostulantesRubros_Rubros] FOREIGN KEY([IdRubro])
REFERENCES [dbo].[Rubros] ([IdRubro])
GO
ALTER TABLE [dbo].[PostulantesRubros] CHECK CONSTRAINT [FK_PostulantesRubros_Rubros]
GO
ALTER TABLE [dbo].[Solicitante]  WITH CHECK ADD  CONSTRAINT [FK_Solicitante_Usuario] FOREIGN KEY([Id])
REFERENCES [dbo].[Usuario] ([DNI])
GO
ALTER TABLE [dbo].[Solicitante] CHECK CONSTRAINT [FK_Solicitante_Usuario]
GO
USE [master]
GO
ALTER DATABASE [ConApp] SET  READ_WRITE 
GO
