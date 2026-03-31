'use client'

interface Props {
  pdfUrl: string
  title: string
  slug: string
}

export function PdfDownloadButton({ pdfUrl, title, slug }: Props) {
  return (
    <div className="mb-10 flex flex-col items-start gap-2">
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c9a84c] to-[#e8d5a0] text-[#0a0f1e] font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(201,168,76,0.5)] text-sm md:text-base"
        onClick={() => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'file_download', {
              file_name: pdfUrl.split('/').pop(),
              file_extension: 'pdf',
              location_name: title,
              location_slug: slug,
              link_url: pdfUrl,
            })
          }
        }}
      >
        <span>⬇</span>
        Download Scouting Report PDF
      </a>
      <p className="text-[rgba(255,255,255,0.3)] text-xs tracking-wide pl-1">
        High-resolution photography &middot; Professional documentation
      </p>
    </div>
  )
}
