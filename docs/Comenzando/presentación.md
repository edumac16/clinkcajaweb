---
sidebar_position: 1
title: Presentación
description: Acerca de ClinkCaja.
---

# Qué es ClinkCaja

ClinkCaja es una aplicación web que se ejecuta desde cualquier navegador y puedes colocarla como una app en tu celular.

---

## Quién es el creador de ClinkCaja?

Mi nombre es Eduardo, soy Analista de Sistemas, vivo en Uruguay, me apasiona la programación, la contabilidad y las matemáticas. Decidí crear Clink Caja después de usar decenas de aplicaciones y ver que practicamente ninguna se adaptaba a lo que yo necesitaba. Después de usar la aplicación durante algún tiempo, decidí convertirla en SaaS y publicarla. 


---

## Qué tiene de diferente a las demás aplicaciones?

Algunas características distintas:

`1.` Está enfocada exclusivamente para el mercado hispanoamericano, desarrollada totalmente en **español**.

`2.` Tiene un sistema opcional de encriptación de datos (sólo tú con una clave maestra puede ver los datos). Es una clave unidireccional, no se almacena en ningún lado, por tanto, si la olvidas, ya no podrás ingresar. Ni siquiera nosotros podemos ver tus datos.

`3.` El ingreso de transacciones puede ser manual o a través de la importación de archivos CSV desde tu banco. Los Bancos hispanoamericanos no forman parte del "Open Banking", por tanto, sistemas de importación automática como Plaid no funcionan, y por ende, tampoco ClinkCaja tiene esa característica. Me enfoqué en pulir el sistema de importación de archivos CSV.

`4.` Es bimonetaria: es común que tengamos cuentas en la divisa de nuestro país y en dólares, por lo que puedes fijar la divisa de tu país como principal y el dólar como secundaria (o usar las 2 monedas que quieras). Las cuentas en la segunda moneda se mantienen en esa moneda, mientras que las estadísticas, reportes, etc, se muestran en la moneda primaria (los valores de la moneda secundaria se convierten a la cotización que tengas configurada).

`5.` Control de **tarjetas de crédito**: En Hispanoamérica compramos a crédito con nuestras tarjetas, por lo que me enfoqué en que podamos tener controlado el saldo actual, conocer el saldo futuro, ver gráficamente que pasa si sólo pagamos el mínimo, etc.

:::tip[Pago total]
Esto es lo que ves si estás pagando el 100% de la tarjeta: no hay intereses y la deuda responde sólo a las cuotas de las compras
:::
![Esto es lo que ves si estás pagando el 100% de la tarjeta](/img/tarjetapago100.webp)


:::tip[Pago mínimo]
Esto es lo que ves si estás pagando el mínimo de la tarjeta: los intereses incrementan la deuda y ésta se mantiene en el tiempo
:::
![Esto es lo que ves si estás pagando el mínimo de la tarjeta](/img/tarjetapago10.webp)


`6.` Las categorías y subcategorías pueden recibir ingresos y egresos, lo que te permite por ejemplo gestionar los costos de tu emprendimiento (al ingresar los ingresos y los costos, Clink Caja te calcula y muestra gráficamente la ganancia en tiempo real).

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



## Quienes pueden usar ClinkCaja

La aplicación está disponible para todos los países de Hispanoamérica y España (si intentas ingresar desde otro país, te rechazará la conexión)


![Paises donde puedes usar ClinkCaja](/img/paises.webp)

---
## Es gratis?

Sí, puedes usar en forma gratuita la aplicación. La única limitación es el número de cuentas (puedes crear hasta 3 cuentas). En cualquier momento puedes pasarte a la versión Premium sin límites por sólo USD 2.99 mensuales.


---


