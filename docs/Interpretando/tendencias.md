---
sidebar_position: 3
# title: Categorías
description: Cómo ver gráficos de tendencias en Clink Caja.
---

# Tendencias

Aquí verás varias gráficas cuya función explicamos a continuación.

---

## Ingresos y gastos por categoría y por mes.

![Tendencias por categoría](/img/tendencia_de_categoria.webp)

- Un **gráfico** de barras con las categorías que más gasto o más ingreso generaron junto con una **curva** que muestra la diferencia entre ingresos y gastos en el mismo mes del año anterior.
- Los importes están en la **moneda base** (usando la cotización si tenés dos monedas).

Las transferencias entre cuentas no se cuentan como ingreso ni gasto para no duplicar.

---

## Drill-down (detalle)

![Transacciones](/img/transacciones.webp)


Al hacer **clic en una barra del gráfico anterior** se abre el detalle: el listado de transacciones de esa categoría en ese período. Así podés bajar del “cuánto gasté en Supermercado” a “qué movimientos son”.

---

## Cómo usarlo

- Revisá **gastos** por categoría para ver dónde podés recortar o dónde te pasaste.
- Revisá **ingresos** por categoría si tenés varios tipos (sueldo, freelance, etc.).
- Compará períodos cambiando las fechas para ver si una categoría sube o baja en el tiempo.

:::tip[Consejo]
Si no ves una categoría, puede ser que no haya transacciones con categoría asignada en ese período; asigná categorías en Transacciones o usá [Reglas](/docs/Comenzando/reglas) para automatizar.
:::

---

## Ingresos vs gastos totales por mes (líneas)

![Transacciones](/img/trends_i_vs_g.webp)

Dos líneas: **total ingresos** y **total gastos** por mes (últimos 12 meses), `sin filtrar por categoría`. Se ve de un vistazo si cada mes hubo superávit o déficit y cómo evoluciona. Es el más claro para **“¿me pasé o me sobró?”**.

---

## Neto acumulado

![Transacciones](/img/trends_acumulado.webp)

Una sola línea: **mes a mes**, suma acumulada de (`ingresos − gastos`). Muestra **“cuánto fui ahorrando (o endeudando) en el tiempo”**
**Muy útil para ver tendencia de ahorro.**

---

## Distribución de gastos por categoría (donut) y gráfica Sankey.

![Transacciones](/img/trends_dist_sankey.webp)

A la izquierda, para los últimos 12 meses se muestra en una gráfica donut `qué % del gasto total va a cada categoría`.

A la derecha se muestra un gráfico Sankey con una vista del tipo `“donde se fue la plata”` Ahi puedes ver que categorías de gastos consumieron tus ingresos.

