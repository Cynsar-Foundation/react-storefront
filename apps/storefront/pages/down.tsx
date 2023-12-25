import Link from "next/link";
import React from "react";
import { NotFoundSeo } from "@/components/seo/NotFoundSeo";
import { usePaths } from "@/lib/paths";

function Down() {
  const paths = usePaths();

  return (
    <>
      <NotFoundSeo />
      <div className="min-h-screen bg-gray-100">
        <div className="py-10">
          <header className="mb-4">
            <div className="container px-8 text-lg">
              We are going somewhere else, this shop and ideas no longer exist in our minds and
              match our zeals so better luck finding something else.
            </div>
          </header>
          <main>
            <div className="container px-8">
              <Link href={paths.$url()}>Go back where we come from</Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Down;
