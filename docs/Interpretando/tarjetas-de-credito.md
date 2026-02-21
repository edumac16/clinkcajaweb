---
sidebar_position: 3
# title: Categorías
description: Cómo gestionar tus tarjetas de crédito en Clink Caja.
---

# Tarjetas de crédito

Este documento explica cómo llevar la tarjeta de crédito en Clink Caja: registrar las compras en cuotas como recurrentes, qué hacer con los estados de cuenta y cómo usar la **proyección de deuda**.

---

## 1. Registrar compras a crédito como recurrentes

Cuando hacés una compra en cuotas (por ejemplo $1200 en 12 cuotas), la forma recomendada es **no** cargar la compra como una sola transacción. En su lugar:

1. Andá a **Transacciones recurrentes** → **Nueva serie**.
2. Creá una serie con:
   - **Importe**: el valor de **cada cuota** (en el ejemplo: 100, no 1200).
   - **Frecuencia**: mensual (o semanal si aplica).
   - **Cantidad de repeticiones**: 12 (o las cuotas que correspondan).
   - **Cuenta**: la tarjeta de crédito.
   - **Descripción**: por ejemplo "Aspiradora Philips - [nombre del comercio]".

Así, cada cuota queda como una transacción futura en la tabla: una por mes (o por período), con el monto de la cuota. El saldo de la tarjeta y la proyección de deuda se calculan correctamente a partir de esas transacciones futuras.

**Resumen**: cada compra a crédito se modela como **N transacciones recurrentes** del valor de la cuota, no como una sola transacción del total.

---

## 2. Estados de cuenta e importación

Cuando te llega el estado de cuenta del banco (o descargás el CSV):

- **No** importes ni cargues manualmente las **compras en cuotas** que ya tenés cargadas como recurrentes.
- Esas compras ya están representadas por las series recurrentes (cada cuota = una transacción futura). Si las volvieras a cargar, estarías duplicando el gasto.

**Qué sí hacer**:

- Si importás desde CSV del banco, **excluí** o **no mapees** las líneas que corresponden a compras en cuotas que ya están en recurrentes.
- Si registrás a mano desde el resumen, cargá solo lo que **no** sea cuota de una compra ya cargada (por ejemplo: intereses, pagos, gastos de la tarjeta, o compras de un solo pago que no hayas pasado por recurrentes).

:::danger[Tener en cuenta]
El sistema no puede saber por sí solo qué línea del resumen es “la misma” que una cuota recurrente.
:::
---

## 3. La proyección de deuda: qué es y cómo usarla

### Dónde aparece

Cuando en el listado de cuentas de la izquierda seleccionás una **cuenta de tipo “Tarjeta de crédito”** que tenga configurados **Día de corte** y **Días para pagar** (se configuran editando la cuenta), arriba de la tabla aparece un bloque: **“Proyección de deuda (transacciones futuras)”**. Opcionalmente podés cargar el **TNA / recargo anual %** que cobra el banco sobre el saldo no pagado; si lo cargás, la gráfica muestra dos líneas (ver más abajo).

### Qué muestra

La gráfica usa **solo transacciones futuras** de esa tarjeta (las que tienen fecha mayor a hoy). Con eso simula:

- En cada **fecha de vencimiento** (corte + días para pagar, por ejemplo día 25 de cada mes):
  - Suma todo lo que “vence” hasta esa fecha (las transacciones futuras con fecha ≤ ese vencimiento).
  - Eso es la **deuda al vencimiento**.
  - Luego simula un pago (según el porcentaje que elijas) y arrastra el saldo al siguiente vencimiento.

El eje **X** son los vencimientos (por ejemplo 25/02, 25/03, …). El eje **Y** es la **deuda** en la moneda de la tarjeta (ej. UYU o USD).

**Dos líneas si configuraste TNA:** Si en la cuenta de la tarjeta cargaste el **TNA / recargo anual %** (opcional), la gráfica muestra:

- **Saldo de cuotas**: solo el capital (cuotas), sin intereses.
- **Total estimado (con intereses aprox.)**: capital + intereses aproximados sobre el saldo no pagado cada mes (fórmula mensual: saldo × TNA/12). Los intereses son **orientativos**: los bancos usan convenciones propias (tasa diaria, saldo promedio, etc.). Debajo de la gráfica se aclara: “Intereses aproximados (referencia)”.

Así ves de un vistazo cuánto suman los intereses si pagás menos del total (por ejemplo solo el mínimo).

### Slider “% del saldo que pagás cada vencimiento”

- **100 %** (por defecto): en la simulación pagás **todo** el saldo en cada vencimiento. En la gráfica cada punto es la **deuda al vencimiento** (antes de pagar): eso incluye las cuotas que vencen en ese período. Por eso la curva normalmente **no baja a cero**: en un mismo punto están “lo que debés ese mes” y las cuotas que ya entraron en ese período. Si pagás 100 %, el valor en cada mes es exactamente lo que tendrías que pagar ese mes (suma de las cuotas que vencen hasta esa fecha). La curva recién bajaría a 0 en el vencimiento inmediato posterior a la última transacción recurrente (cuando ya no hay más cuotas); ese punto queda fuera de la gráfica porque esta termina en el último vencimiento con transacciones. Sirve para ver “cuánto tendría que pagar cada mes si pago todo”.
- **Menos de 100 %** (por ejemplo **10 %**): simula que cada mes pagás solo ese porcentaje del saldo (estilo “pago mínimo”). La curva ya no baja a 0; muestra cómo se acumularía o bajaría la deuda en el tiempo si solo pagaras ese porcentaje.

Así podés comparar rápido:

- Cuánto sería el pago “ideal” (100 %) en cada vencimiento.
- Cómo quedaría la deuda si solo pagás el mínimo (por ejemplo 10 %).

### Utilidad

- **Planificación**: ver de un vistazo cuánto vas a deber en los próximos vencimientos según las cuotas que ya cargaste.
- **Simulación**: probar distintos porcentajes de pago y ver el impacto en la evolución de la deuda.
- **Costo de pagar poco**: con TNA cargada, la segunda línea (total con intereses) muestra cuánto se suman los intereses si no pagás el total cada mes.
- **Coherencia con la realidad**: la proyección se basa en lo que tenés cargado (recurrentes por cuota), no en el resumen del banco. Si cargaste bien las cuotas, la curva refleja tu situación esperada.

---

:::tip[Pago total]
Esto es lo que ves si estás pagando el 100% de la tarjeta: no hay intereses y la deuda responde sólo a las cuotas de las compras
:::
![Esto es lo que ves si estás pagando el 100% de la tarjeta](/img/tarjetapago100.webp)


:::tip[Pago mínimo]
Esto es lo que ves si estás pagando el mínimo de la tarjeta: los intereses incrementan la deuda y ésta se mantiene en el tiempo
:::
![Esto es lo que ves si estás pagando el mínimo de la tarjeta](/img/tarjetapago10.webp)




## Resumen rápido

| Qué | Cómo |
|-----|------|
| Compras en cuotas | Recurrentes por **importe de la cuota**, una transacción por cuota, en la cuenta de la tarjeta. |
| Estado de cuenta / CSV | No volver a cargar las compras en cuotas que ya están en recurrentes; solo cargar el resto (intereses, pagos, compras de un pago, etc.). |
| Proyección de deuda | Filtrar Transacciones por la tarjeta; usar la gráfica y el slider para ver deuda futura y simular % de pago (100 % = todo, menos % = tipo pago mínimo). |

