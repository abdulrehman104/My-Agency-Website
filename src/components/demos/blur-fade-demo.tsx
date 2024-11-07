import Image from "next/image";
import Link from "next/link";

import BlurFade from "@/components/magicui/blur-fade";
import { works } from "@/lib/constants";

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="mt-10 grid justify-items-center gap-8 md:grid-cols-2">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full rounded-lg object-cover"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="p-4 text-lg font-semibold">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
