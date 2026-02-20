---
sidebar_position: 4
title: Registrar facturas a pagar
description: Cómo registrar factura a pagar y que te las recuerde el día anterior.
---

# Facturas a pagar

Para registrar este tipo de facturas vamos a simular que es una transacción recurrente que se repite una sola vez.

---

## Crear el registro

1. Menú **Recurrentes** → **Nueva serie**
2. Definí:
   - **Fecha de la primera ocurrencia:** la fecha de vencimiento de la factura.
   - **Descripción**, **importe**, **cuenta**, **categoría** (igual que una transacción normal).
   :::tip
   Deja **cuenta** como `-- Sin cuenta --`, para que llegado el día del vencimiento no afecte el saldo de la cuenta hasta que no la pagues. *Desde transacciones puedes asignale la cuenta cuando realices el pago*
   :::
   - **Frecuencia:** mensual
   - **Número de transacciones:** Selecciona `1` (esto es lo más importante, pues no debe repetirse todos los meses).

3. Guardá.


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
