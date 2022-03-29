import React from "react";
import { useRouter } from "next/router";
export default function index() {
  const router = useRouter();
  router.query.slug = "bao-gia-dich-vu-quay-phim";
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
