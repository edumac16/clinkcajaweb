---
sidebar_position: 2
# title: Categorías
description: Cómo importar un archivo CSV.
---

# Importar CSV

Importá movimientos desde un archivo CSV descargado de tu banco o de una planilla. Clink Caja te guía en el mapeo de columnas y te avisa si hay duplicados.

---

## Antes de empezar

- Tené una **cuenta** creada en Clink Caja para asignar los movimientos.
- El archivo debe tener al menos **fecha** e **importe**. Opcional: descripción, categoría.
- **Límite:** máximo **5.000 filas** por archivo. Si tu exportación es más grande, dividila o filtrá antes de subir.

---

## Paso 1: Subir el archivo

1. Entrá a **Importar** en el menú.
2. Elegí el archivo CSV (o TXT con formato CSV).
3. Marcá **"La primera fila tiene encabezados"** si la primera línea son los nombres de las columnas (Fecha, Importe, etc.).
4. Si tenés un **perfil guardado** de una importación anterior con el mismo banco, seleccionalo para rellenar el mapeo automáticamente.
5. Clic en **Analizar**.

Si el archivo supera las 5.000 filas, verás un mensaje de error y tendrás que subir un archivo más pequeño.

---

## Paso 2: Mapear columnas

![Mapear CSV](/img/mapear_csv.webp)

En la vista previa tenés que indicar **qué columna del CSV corresponde a cada dato**:

| Campo        | Obligatorio | Descripción                          |
| ------------ | ----------- | ------------------------------------ |
| **Fecha**    | Sí          | Formato según tu banco (ej. dd/mm/aaaa). |
| **Importe**  | Sí          | Número; podés usar coma o punto decimal. |
| **Descripción** | No      | Texto del movimiento.                |
| **Categoría**   | No      | Si tu CSV ya trae categoría, mapeala. |

Elegí también:

- **Formato de fecha** (dd/mm/aaaa, dd-mm-aaaa, aaaa-mm-dd, etc.).
- **Separador decimal** (coma o punto).
- **Cuenta por defecto** donde se cargarán estas transacciones.

---

## Paso 3: Revisar duplicados

La vista previa te muestra:

- **Registros a importar:** filas que no están en la base de datos y se cargarán.
- **Duplicados (ya en la base de datos):** misma fecha, importe y descripción que una transacción existente. No se importan salvo que marques "Importar igual" en alguna.
- **Duplicados dentro del archivo:** repeticiones en el mismo CSV; solo se importa una.

Revisá la tabla y, si querés, marcá duplicados puntuales para importarlos igual. Luego **Importar**.

---

## Paso 4: Resultado

Verás cuántas transacciones se importaron, cuántas se omitieron por duplicado y cuántas filas tuvieron error (por ejemplo fecha o importe inválido). Las reglas automáticas se aplican a las descripciones importadas para sugerir categorías.

---


:::tip[Consejos]
## 

- **Guardar perfil:** después de mapear, podés guardar el mapeo con un nombre (ej. "BROU movimientos") y reutilizarlo en la próxima importación.
- **Mismo banco, mismo formato:** si tu banco siempre exporta igual, con un perfil guardado solo subís el archivo y confirmás.
- Si algo no cuadra, revisá el **formato de fecha** y el **separador decimal**; suelen ser la causa de errores.
:::
