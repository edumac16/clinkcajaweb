---
sidebar_position: 7
title: Reglas
description: Aprende cómo categorizar las transacciones en forma automática en Clink Caja.
---

# Reglas automáticas

Las reglas asignan **categoría** (y opcionalmente subcategoría) a las transacciones según la **descripción**. Así, cada vez que importás o cargás un movimiento que contenga cierto texto, la app pone la categoría sola.

---

## Crear una regla

1. Menú **Reglas** → **Nueva regla** (o similar).
2. Definí:
   - **Nombre** (ej. *Supermercados*), para identificarla en el listado.
   - **Condición:** tipo “la descripción contiene” y el **texto a buscar** (ej. *SUPER*, *Disco*). Si la descripción incluye ese texto, la regla aplica.
   - **Acción:** categoría (y si querés subcategoría) a asignar.
   - **Activa:** marcada para que se use al importar o al guardar transacciones.
3. Guardá.

Si varias reglas coinciden, suele aplicarse la primera que matchee (o el criterio que use la app: revisá el orden en el listado de reglas).

---

## Cuándo se aplican

- Al **importar CSV**: las descripciones importadas se evalúan contra las reglas y se asigna categoría automáticamente.
- Al **guardar o editar** una transacción manual: si la descripción coincide, se puede asignar la categoría al guardar.
- En algunos flujos hay un botón **Aplicar reglas** para reprocesar transacciones ya cargadas.

---

## Orden de las reglas

Si dos reglas podrían aplicar a la misma descripción, el **orden** en el listado de reglas suele definir cuál gana. Poné las más específicas primero (ej. *nombre del supermercado* antes que *Supermercado*).

---

:::tip[Consejos]

- Usá palabras cortas y distintivas (nombre del comercio, red de la tarjeta) para no matchear de más.
- Después de importar, revisá unas cuantas transacciones para ver si las reglas asignaron bien; si no, afiná el texto de la condición o el orden.
:::