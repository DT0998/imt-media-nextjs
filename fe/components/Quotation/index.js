import React from "react";
import Link from "next/link";
import { Button } from "../";
import styles from "./Quotation.module.scss";

export default function Quotation(props) {
  console.log(props.slug);
  return (
    <div
      className={styles.quotation}
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(115, 115, 115, 0.64)),
        url(${props.Background.src}) no-repeat center top`,
        backgroundSize: "cover",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <Link href={`/bao-gia/${props.slug}`}>
        <a>
          <Button type="Primary" bg="Red" size="Sm">
            Xem chi tiết
          </Button>
        </a>
      </Link>
    </div>
  );
}
