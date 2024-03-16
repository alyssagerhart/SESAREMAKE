import Head from 'next/head';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import '../app/page.css';
import MainNav from '@/components/Navigation/LmsNav/MainNav/MainNav';
import {Video} from '../components/SigEdge/VideoOverlay/Video';
import HorizontalLine from '@/components/SigEdge/HorizontalLine/HorizontalLine';
import InfoSnippet from '@/components/SigEdge/InfoSnippet/InfoSnippet';
import OneLiner from '@/components/SigEdge/OneLiner/OneLiner';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My page</title>
      </Head>
      <main>
        <MainNav />
        <Video />
        <OneLiner />
        <HorizontalLine />
        <InfoSnippet />
        
        </main>
    </>
  );
}
