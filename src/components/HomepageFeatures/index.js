import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Esto define las propiedades de los emojis
const EmojiIcon = ({ emoji, label }) => (
  <span 
    role="img" 
    aria-label={label} 
    className="emoji-floating" // <--- Aquí aplicamos la animación
    style={{ fontSize: '8rem', display: 'block', marginBottom: '1rem' }}
  >
    {emoji}
  </span>
);

const FeatureList = [
  {
    title: 'Tu contabilidad personal, sin complicaciones',
    Svg: () => <EmojiIcon emoji="🤑" label="dinero" />,
    // img: require('@site/static/img/dashboard1.png').default,
    description: (
      <>
        Cuentas, transacciones, importación desde el banco, control de tarjetas, presupuestos y tendencias. Datos encriptados (ni nosotros podemos verlos).
      </>
    ),
  },








{
  title: 'Panel principal 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/dashboard1.webp').default,
  description: (
    <>
      Aquí puedes ver los importes de patrimonio neto, ingresos y gastos.
      Debajo un detalle de las principales categorías de ingresos y gastos.
    </>
  ),
},


{
  title: 'Desglose de subcategorías 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/categorias_subcategorias.webp').default,
  description: (
    <>
      Al pulsar en una de las categorías, se presenta el desglose de las subcategorias y una gráfica de la tendencia en los últimos 12 meses para esa categoría.
    </>
  ),
},


{
  title: 'Transacciones de la categoría o subcategoría 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/transacciones.webp').default,
  description: (
    <>
      Y aquí lo mejor: si pulsas en una categoría o subcategoría del gráfico, te lleva a las transacciones! Un "Drill Down" completo!.
    </>
  ),
},





{
  title: 'Evolución del patrimonio 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/evolucion_patrimonio.webp').default,
  description: (
    <>
      Aquí puedes ver como ha evolucionado tu patrimonio en los últimos 12 meses
    </>
  ),
},

{
  title: 'Presupuesto 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/presupuesto.webp').default,
  description: (
    <>
      Aquí puedes ver las diferentes categorías de tu presupuesto. En verde vas bien, en rojo vas mal.
    </>
  ),
},


{
  title: 'Tus tarjetas bajo control 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/grafica_tarjetas.webp').default,
  description: (
    <>
      Verás en forma gráfica cuanto deberás pagar en los próximos meses, pudiendo simular pagos totales y parciales. Y Clink Caja permite que ingreses compras en cuotas!
    </>
  ),
},


{
  title: 'Ingresos y gastos por categoría y por mes 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/tendencia_de_categoria.webp').default,
  description: (
    <>
      Selecciona una categoría/subcategoría y verás un gráfico de barras con los valores mensuales, junto con una curva que muestra los valores del período anterior para que puedas comparar.
    </>
  ),
},


{
  title: 'Ingresos vs gastos totales por mes 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/trends_i_vs_g.webp').default,
  description: (
    <>
      Dos líneas: total ingresos y total gastos por mes (últimos 12 meses), sin filtrar por categoría. Se ve de un vistazo si en cada mes hubo superávit o déficit y cómo evoluciona. Es el más claro para “¿me pasé o me sobró?”.
    </>
  ),
},


{
  title: 'Neto acumulado 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/trends_acumulado.webp').default,
  description: (
    <>
      Una sola línea: mes a mes, suma acumulada de (ingresos − gastos). Muestra “cuánto fui ahorrando (o endeudando) en el tiempo” Muy útil para ver tendencia de ahorro.
    </>
  ),
},


{
  title: 'Distribución de gastos por categoría y gráfica Sankey 🔺',
  // Aquí pasamos la ruta de la imagen
  img: require('@site/static/img/trends_dist_sankey.webp').default,
  description: (
    <>
      A la izquierda, para los últimos 12 meses se muestra en una gráfica donut qué % del gasto total va a cada categoría. A la derecha se muestra un gráfico Sankey con una vista del tipo “donde se fue el dinero”
    </>
  ),
},













  {
    title: 'Datos encriptados',
    Svg: () => <EmojiIcon emoji="🔒" label="dinero" />,
    description: (
      <>
        Tus datos están encriptados. Ni nosotros podemos verlos. Fijarás una clave maestra para encriptar tus datos. Si la olvidas, ya no podrás ingresar pues no se almacena en ningún lado.
      </>
    ),
  },
  {
    title: 'Importación CSV inteligente',
    Svg: () => <EmojiIcon emoji="🧐" label="dinero" />, 
      description: (
      <>
        Subí el export del banco, mapeá columnas una vez y guardá el perfil. Vista previa, detección de duplicados (en la base y dentro del archivo) y opción de importar igual. 
      </>
    ),
  },
  {
    title: 'Categorías y reglas',
    Svg: () => <EmojiIcon emoji="🗂️" label="dinero" />, 
    description: (
      <>
        Categorías y subcategorías. Reglas automáticas: si la descripción contiene determinado texto, se asigna la categoría. Asignación masiva por criterios. 
      </>
    ),
  },
  {
    title: 'Recurrencias',
    Svg: () => <EmojiIcon emoji="🔁" label="dinero" />, 
    description: (
      <>
        Próximos vencimientos visibles en el panel y en transacciones. Aviso cuando vence mañana. Ideal para suscripciones y pagos fijos.
      </>
    ),
  },


  {
    title: 'Totalmente en la nube',
    Svg: () => <EmojiIcon emoji="☁️" label="dinero" />, 
    description: (
      <>
        No tienes que preocuparte por nada, puedes acceder desde la compu, el celular o la tablet. Todo sincronizado! Nada se pierde! 
      </>
    ),
  },

  {
    title: 'Gratis por siempre',
    Svg: () => <EmojiIcon emoji="🆓" label="dinero" />, 
    description: (
      <>
        Puedes usar Clink Caja gratis por siempre. El único límite es el número de cuentas. Ambas versiones soportan encriptación de datos. La versión gratis permite hasta 3 cuentas. Si quieres pasarte a Premium pagas sólo USD 2.99 por mes. 
      </>
    ),
  },


















];











function Feature({img, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Lógica para decidir si mostrar Imagen o SVG */}
        {img ? (
          <img src={img} className="screenshot-style" alt={title} style={{width: 'auto', height: 'auto'}} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}



function Feature_OLD({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
