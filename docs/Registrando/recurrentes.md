---
sidebar_position: 3
# title: Categorías
description: Cómo registrar transacciones recurrentes y facturas a pagar en Clink Caja.
---

# Recurrentes

Las **transacciones recurrentes** son movimientos que se repiten (alquiler, Netflix, sueldo). En Clink Caja podés definirlas para que la app genere o muestre las **próximas fechas** y, en algunos flujos, las cargue automáticamente o te avise.

---

## Cómo funcionan

- A partir de una **transacción base** (fecha, importe, descripción, categoría, cuenta) se crea una **serie recurrente**.
- La app calcula las **siguientes fechas** según la periodicidad (mensual, semanal, etc.) y las muestra en Recurrentes y, si está configurado, en el **sidebar** (próximas en los próximos días).

No hace falta que todas las fechas estén ya cargadas en Transacciones: la recurrencia sirve para ver “qué viene” y, si la app lo permite, para generar o pre-cargar esas transacciones.

---

## Crear una recurrente

1. Menú **Recurrentes** → **Nueva** (o desde una transacción existente: “Crear recurrente desde esta”).
2. Definí:
   - **Descripción**, **importe**, **cuenta**, **categoría** (igual que una transacción normal).
   - **Frecuencia:** mensual, quincenal, semanal, etc., según lo que ofrezca la app.
   - **Primera fecha** (o fecha de inicio) a partir de la cual se calculan las siguientes.
3. Guardá.

La app mostrará la serie y las próximas ocurrencias.

:::tip[Recordar pagar una sola factura]
Si al crear una transacción recurrente, colocas la frecuencia en **1** te sirve para que la aplicación te recuerde pagar esa factura.
Por ejemplo, tienes la factura de teléfono que vence el 14 del próximo mes, creas una transacción recurrente con la fecha de vencimiento y que se repita 1 sola vez.
:::

---

## Ver próximas

- En **Recurrentes** ves el listado de series y, para cada una, la **próxima fecha** y el importe.

:::tip[Vencimientos de los próximos 10 días]
- En el **sidebar** del inicio se muestran las que vencen en los próximos días para que no se te pasen.
:::

:::danger[Qué sucede el día del vencimiento?]
Todas las transacciones se muestran en **recurrentes** y pasan a transacciones comunes al comienzo del día del vencimiento.
Entonces, si tienes una factura con frecuencia **1**, la verás en **recurrentes** y en el **sidebar** hasta el día **ANTERIOR**, pues el mismo día del vencimiento ya formará parte de las transacciones comunes.

En la lista de transacciones, las recurrentes tienen una línea azul junto a la fecha, para que puedas identificarlas.
:::
---

## Editar o eliminar

- **Editar la serie:** cambiá importe, descripción, frecuencia o fecha de inicio. Las fechas futuras se recalculan.
- **Eliminar:** la serie desaparece; las transacciones que ya se hayan generado o cargado en Transacciones quedarán.

Si una recurrente “ya pasó” (ej. alquiler de este mes ya lo cargaste a mano), podés dejarla igual; la próxima fecha será el próximo mes. O editar la serie si el importe o la cuenta cambiaron.
