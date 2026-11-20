import type { MDXComponents } from "mdx/types";

/** Tipografía de las notas técnicas (content/notas/*.mdx). */
const components: MDXComponents = {
  h2: (p) => <h2 className="font-serif mt-14 mb-5 text-[28px] sm:text-[34px] leading-tight text-[#F0F4FB]" {...p} />,
  h3: (p) => <h3 className="mt-10 mb-3 text-xl font-semibold text-[#F0F4FB]" {...p} />,
  p: (p) => <p className="my-5 text-[17px] leading-[1.8] text-[#C5CFE2]" {...p} />,
  ul: (p) => <ul className="my-5 pl-6 list-disc space-y-2 text-[17px] leading-[1.75] text-[#C5CFE2] marker:text-[#4A8BFF]" {...p} />,
  ol: (p) => <ol className="my-5 pl-6 list-decimal space-y-2 text-[17px] leading-[1.75] text-[#C5CFE2] marker:text-[#8D9AB3]" {...p} />,
  strong: (p) => <strong className="font-semibold text-[#F0F4FB]" {...p} />,
  em: (p) => <em className="text-[#F5B544] not-italic" {...p} />,
  a: (p) => <a className="text-[#4A8BFF] underline underline-offset-4 hover:text-[#7FA2FF]" {...p} />,
  blockquote: (p) => <blockquote className="my-8 pl-5 border-l-2 border-[#4A8BFF] text-[19px] leading-relaxed text-[#F0F4FB]" {...p} />,
  code: (p) => <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-[#C5CFE2]" {...p} />,
  hr: () => <hr className="my-12 border-white/10" />,
  table: (p) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-left text-[15px] text-[#C5CFE2]" {...p} />
    </div>
  ),
  th: (p) => <th className="border-b border-white/15 py-2 pr-4 font-mono text-xs uppercase tracking-wider text-[#8D9AB3]" {...p} />,
  td: (p) => <td className="border-b border-white/5 py-2 pr-4 tabular-nums" {...p} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
