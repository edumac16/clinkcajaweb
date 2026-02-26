---
sidebar_position: 5
# title: Categorías
description: Aprende cómo funcionan las categorías en ClinkCaja.
---

# Categorías

Las categorías sirven para ordenar ingresos y gastos (Supermercado, Servicios, Sueldo, etc.). Podés tener subcategorías para afinar más.

:::tip[Categorías como contenedores]
En ClinkCaja, las categorías y subcategorías aceptan tanto ingresos como gastos. Esto facilita que puedas ingresar devoluciones de gastos como un ingreso, un costo de mercadería como un gasto, etc.

Puedes tener algo así:

- `MI NEGOCIO` (**categoría como contenedor, aquí no registras nada**)

    -- `💵 Ventas` (subcategoría donde registras las **ventas como ingresos** y las **devoluciones como egresos**)

    -- `Compra de mercadería` (subcategoría donde registras las **compras como gastos**)

    -- `Insumos` (subcategoría)

    -- `Energía eléctrica` (subcategoría)

    -- `Impuestos` (subcategoría)


Entonces, en la categoría `MI NEGOCIO` tendrás las ganancias o pérdidas netas, en `Ventas` las ventas brutas, en las demás los gastos. Si la suma de todos los ingresos son mayores a la suma de los gastos, la categoría `MI NEGOCIO` se mostrará bajo INGRESOS, de lo contrario, se mostrará bajo GASTOS, y verás el detalle de cada una.    

![Categorias](/img/categorias_negocios.webp)

:::

---

## Crear categorías

1. Menú **Categorías** → **Nueva categoría** (o desde el botón correspondiente).
2. Nombre (ej. *Alimentación*, *Transporte*).
3. Orden opcional para que aparezcan en el orden que quieras en los listados y en los reportes.

Las categorías se usan en **Transacciones** (al cargar o editar), en **Reglas** (para asignar automáticamente por descripción), en **Presupuestos** y en **Tendencias**.

:::tip[Transferencias]
Para que una categoría sea tomada como transferencia, el nombre debe comenzar por `<>`
Cuando asignas una categoría de transferencia a una transacción, ésta se toma en cuenta solo para los saldos de las cuentas, pero no afecta las gráficas, ni los ingresos y gastos.
:::


---

## Subcategorías

Dentro de una categoría podés crear **subcategorías** (ej. dentro de Alimentación: *Supermercado*, *Restaurantes*). Al cargar una transacción elegís categoría y, si querés, subcategoría. Eso permite reportes más detallados y presupuestos por categoría o subcategoría.

---

## Orden y uso

![Categorias](/img/dashboard1.webp)


- Al pulsar en una categoría, te muestra la subcategoría con una gráfica de tendencia en los últimos 12 meses.

![De categoría a subcategorías](/img/categorias_subcategorias.webp)

- Y al pulsar en un sector del gráfico de torta te muestra las transacciones que originaron ese ingreso o gasto.

![Transacciones](/img/transacciones.webp)



- En muchos listados las categorías se ordenan por **cantidad de uso** (las más usadas primero) y por el orden que definiste.
- No podés borrar una categoría que tenga transacciones asignadas sin antes reasignarlas o borrarlas; la app te avisará si hay restricciones.

---

## Transferencias

Las transferencias entre cuentas pueden usar una categoría especial o quedar sin categoría, según cómo lo tengas configurado. En reportes de ingresos y gastos suelen excluirse o mostrarse aparte para no duplicar el dinero.
