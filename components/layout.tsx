import Head from 'next/head';
import Footer from './footer';

export default function Layout(props: { [x: string]: any; children: any; }) {
    const { children, ...customMeta } = props;
    const meta = {
        title: 'Luciana Pereira – Sr. HR Manager.',
        description: `I am a seasonal HR professional and a savvy tech-woman for my realm.`,
        image: 'https://pereiraluciana.netlify.app/banner.png',
        type: 'website',
        ...customMeta
      };
    
    return (
    <main className="bg-gray-50">
      <Head>
        <title>Luciana Pereira - Sr. HR Manager</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <section id="skip" className="flex flex-col justify-center bg-gray-50">
        {children}
        <Footer />
      </section>
    </main>
  );
}
