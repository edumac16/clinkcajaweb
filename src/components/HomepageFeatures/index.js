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
    description: (
      <>
        Cuentas, transacciones, importación desde el banco, presupuestos y tendencias. Todo en un solo lugar y en español.
      </>
    ),
  },
  {
    title: 'Todo lo que necesitás para llevar las cuentas',
    Svg: () => <EmojiIcon emoji="💳" label="dinero" />,
    description: (
      <>
        Varias cuentas (caja, bancos, tarjetas). Saldo por cuenta y saldo acumulado. 
        Filtros por fecha, categoría y cuenta.
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
    title: 'Presupuestos',
    Svg: () => <EmojiIcon emoji="💰" label="dinero" />, 
    description: (
      <>
        Definí presupuestos por categoría (mensual o anual) y asociá qué categorías de transacciones suman a cada uno.
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
    title: 'Tendencias y evolución',
    Svg: () => <EmojiIcon emoji="📈" label="dinero" />, 
    description: (
      <>
        Gráficas de ingresos y gastos por categoría (12 meses). Evolución del patrimonio con zona positiva/negativa. Clic en una barra y vas directo a las transacciones de ese mes.
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
        Puedes usar Clink Caja gratis por siempre. El único límite es el número de cuentas. La versión gratis permite hasta 3 cuentas. Si quieres pasarte a Premium pagas sólo USD 2.99 por mes. 
      </>
    ),
  },





];















function Feature({Svg, title, description}) {
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
