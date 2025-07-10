import WalletGraph from './wallet-graph';
import WalletHero from './wallet-hero';

const WalletIndex = () => {
  return (
    <div className="flex flex-col px-3 py-5 gap-10">
      <div>
        <WalletHero />
      </div>
      <div>
        <div>
          <WalletGraph />
        </div>
      </div>
    </div>
  );
};

export default WalletIndex;
