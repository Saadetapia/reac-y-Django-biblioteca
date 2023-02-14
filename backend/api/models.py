from django.db import models


# Create your models here.
class Blog(models.Model):
    body = models.CharField(max_length=50)


# base de datos para añadir usuarios


class registrousuario(models.Model):
    matricula = models.AutoField(primary_key=True)
    nombrealumno = models.CharField(max_length=100)
    edad = models.CharField(max_length=50)
    carrera = models.TextField(max_length=100)
    correo = models.EmailField()


# Datos del libro


class libro(models.Model):
    id_libro = models.AutoField(primary_key=True)
    nombrelibro = models.CharField(max_length=150)
    actor = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.ImageField()


# Inventario


class inventario(models.Model):
    id_inventario = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=150)
    autor = models.CharField(max_length=100)
    area = models.CharField(max_length=150)
    detalle = models.CharField(max_length=150)
    cantidad_po = models.CharField(max_length=150)


# responsable de la bibliotca


class responsablebibli(models.Model):
    id_responsable = models.AutoField(primary_key=True)
    nombreresponsable = models.CharField(max_length=100)


# Devoluciones
class devoluciones(models.Model):
    id_devoluciones = models.AutoField(primary_key=True)
    nombrelibro = models.CharField(max_length=150)
    fecha = models.DateField(auto_now=False, auto_now_add=False)
    acta = models.CharField(max_length=150)
    detalle = models.TextField()
    nombre_da = models.CharField(max_length=150)


# prestamos
class prestamo(models.Model):
    id_prestamo = models.IntegerField(primary_key=True)
    detalle = models.CharField(max_length=150)
    nombrealumno = models.CharField(max_length=150)
    actor = models.CharField(max_length=150)
    fecha = models.DateField(auto_now=False, auto_now_add=False)
    n_libro = models.CharField(max_length=150)
