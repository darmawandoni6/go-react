import Pinjaman from "../../src/images/pinjaman.svg";
import styles from "../page.module.scss";
import Celengan from "../../src/images/celengan.svg";
import Pendanaan from "../../src/images/pendanaan.svg";
import { memo } from "react";

const data = [
  {
    logo: <Celengan />,
    amount: "Rp28.637.000",
    profit: "Rp350.000",
  },
  {
    logo: <Pendanaan />,
    amount: "Rp2.358.000.000",
    profit: "Rp796.123",
  },
];

const SectionII = () => {
  return (
    <section className={styles.section_II}>
      <h1>Produk Investasi</h1>
      {data.map((item, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.left}>
            {item.logo}
            <div className={styles.description}>
              <span>Total Aset</span>
              <strong>{item.amount}</strong>
              <p>
                Total Keuntungan: <span>{item.profit}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.pinjaman}>
        <div className={styles.header}>
          <strong>Pinjaman</strong>
          <span>Semua Pinjaman</span>
        </div>
        <div className={styles.pinjamanCard}>
          <div className={styles.left}>
            <Pinjaman />
          </div>
          <div className={styles.right}>
            <strong className={styles.angsuran}>Angsuran Belum Dibayar</strong>
            <p>
              Bayar <span>Rp63.000</span> sebelum <span>22 Mei 2024</span>.
            </p>
            <strong className={styles.click}>Bayar Sekarang</strong>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.header}>
          <strong>Hanya Untuk Mitra Terpilih 🎉</strong>
        </div>
        <img
          src="/Frame-427319855.webp"
          srcSet="
          /Frame-427319855.webp 320w, 
          /Frame-427319855.webp 640w, 
          /Frame-427319855.webp 960w"
          sizes="(max-width: 320px) 320px,
               (max-width: 640px) 640px,
               960px"
          width={320}
          height={145}
          alt="Frame-427319855"
        />
      </div>
    </section>
  );
};

export default memo(SectionII);
