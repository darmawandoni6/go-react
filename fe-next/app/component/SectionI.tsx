import styles from "../page.module.scss";
import IsiSaldo from "../../src/images/isi-saldo.svg";
import Transfer from "../../src/images/transfer.svg";
import { useRouter } from "next/navigation";
import { memo } from "react";

const SectionI = () => {
  const router = useRouter();

  return (
    <section className={styles.section_I}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>Poket</div>
          <div className={styles.amount}>
            <span>
              Rp<strong>1.000.000</strong>
            </span>
          </div>
          <div className={styles.riwayat}>Riwayat Transaksi →</div>
        </div>
        <div className={styles.right}>
          <div className={styles.icon}>
            <div
              className={styles.feat}
              onClick={() => router.push("/isi-saldo")}
            >
              <IsiSaldo />
              <span>Isi Saldo</span>
            </div>
            <div
              className={styles.feat}
              onClick={() => router.push("/transfer")}
            >
              <Transfer />
              <span>Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SectionI);
