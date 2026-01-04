import styles from "@/components/modules/Companies.module.css";

import SpaceX from "@/components/icons/SpaceX";
import Tesla from "@/components/icons/Tesla";
import Apple from "@/components/icons/Apple";
import Binance from "@/components/icons/Binance";

function Companies() {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;