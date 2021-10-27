import DiscoverSection from '../components/DiscoverSection';
import LatestSection from '../components/LatestSection';
import SearchArea from '../components/SearchArea';
import StateSection from '../components/StateSection';

const Home = () => {
  return (
    <>
      <SearchArea />
      <LatestSection />
      <StateSection />
      <DiscoverSection />
    </>
  );
}

export default Home;