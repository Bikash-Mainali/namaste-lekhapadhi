import { useEffect, useMemo, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'

type Gallery = {
    id: number
    title: string
    img: string
}

const galleries: Gallery[] = [
    {
        id: 1,
        title: 'नेपालमा शिक्षा सम्बन्धी कानुन',
        img: 'https://www.nepallawyer.com/storage/4087/conversions/Gemini_Generated_Image_sjyyrhsjyyrhsjyy-thumb.webp',
    },
    {
        id: 2,
        title: 'नेपालमा नयाँ पासपोर्ट दर्ता प्रक्रिया',
        img: 'https://www.nepallawyer.com/storage/4085/conversions/Gemini_Generated_Image_ag1vh7ag1vh7ag1v-thumb.webp',
    },
    {
        id: 3,
        title: 'नेपालमा अनलाइन NID दर्ता',
        img: 'https://www.nepallawyer.com/storage/4084/conversions/Gemini_Generated_Image_xfg4bxxfg4bxxfg4-thumb.webp',
    },
    {
        id: 4,
        title: 'अमेरिकाबाट NRN कार्ड कति समय लाग्छ?',
        img: 'https://www.nepallawyer.com/storage/4081/conversions/Gemini_Generated_Image_nlql1pnlql1pnlql-thumb.webp',
    },
    {
        id: 5,
        title: 'नेपालमा NRN को सम्पत्ति अधिकार',
        img: 'https://www.nepallawyer.com/storage/4080/conversions/Gemini_Generated_Image_i1e52oi1e52oi1e5-thumb.webp',
    },
    {
        id: 6,
        title: 'NRN का लागि सम्पत्ति कर (नेपाल)',
        img: 'https://www.nepallawyer.com/storage/4079/conversions/Gemini_Generated_Image_k65zl9k65zl9k65z-thumb.webp',
    },
]

export function Gallery() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [postsPerPage] = useState<number>(10)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImg(null)
        }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = selectedImg ? 'hidden' : ''
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [selectedImg])

    const totalPages = Math.max(1, Math.ceil(galleries.length / postsPerPage))

    const visiblePosts = useMemo(() => {
        const start = (currentPage - 1) * postsPerPage
        return galleries.slice(start, start + postsPerPage)
    }, [currentPage, postsPerPage])

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const renderPageButtons = () => {
        if (totalPages <= 9) return Array.from({ length: totalPages }, (_, i) => i + 1)

        const pages: (number | string)[] = []
        const left = Math.max(2, currentPage - 2)
        const right = Math.min(totalPages - 1, currentPage + 2)

        pages.push(1)
        if (left > 2) pages.push('...')
        for (let p = left; p <= right; p++) pages.push(p)
        if (right < totalPages - 1) pages.push('...')
        pages.push(totalPages)

        return pages
    }

    return (
        <section id="gallery" className="bg-gray-50 py-20 sm:py-22 md:py-30 dark:bg-gray-950">
            <div className="mx-auto max-w-10/12 px-6">
                <h2 className="mb-15 text-center text-2xl font-extrabold text-gray-800 sm:mb-22 sm:text-3xl md:mb-30 md:text-4xl dark:text-white">
                    ग्यालरी
                </h2>
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {visiblePosts.map(post => (
                        <div
                            key={post.id}
                            className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-700"
                        >
                            <button
                                onClick={() => setSelectedImg(post.img)}
                                className="block w-full focus:outline-none"
                                aria-label={`खोल्नुहोस् ${post.title}`}
                            >
                                <img src={post.img} alt={post.title} className="block h-full w-full object-cover" />
                            </button>
                            <div className="border-t px-3 py-2 text-center text-sm text-gray-700 sm:text-base dark:text-white">
                                {post.title}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                    <nav aria-label="Pagination">
                        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm select-none">
                            <li>
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="rounded-xl border border-gray-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700/70 dark:text-white dark:hover:bg-gray-700"
                                    aria-label="अघिल्लो पृष्ठ"
                                >
                                    ‹
                                </button>
                            </li>

                            {renderPageButtons().map((p, idx) =>
                                typeof p === 'number' ? (
                                    <li key={idx}>
                                        <button
                                            onClick={() => goToPage(p)}
                                            className={`rounded-lg px-3 py-2 font-medium transition-all ${
                                                p === currentPage
                                                    ? 'scale-105 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                                                    : 'border border-gray-200 bg-white/80 text-gray-700 hover:shadow-md'
                                            }`}
                                            aria-current={p === currentPage ? 'page' : undefined}
                                        >
                                            {p}
                                        </button>
                                    </li>
                                ) : (
                                    <li key={idx} className="px-2 text-gray-400">
                                        …
                                    </li>
                                )
                            )}

                            <li>
                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="rounded-xl border border-gray-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700/70 dark:text-white dark:hover:bg-gray-700"
                                    aria-label="अर्को पृष्ठ"
                                >
                                    ›
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center border border-red-500 bg-black/80 p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="relative mx-auto w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImg(null)}
                            className="absolute top-2 right-2 z-50 cursor-pointer rounded-full p-2 text-white transition-transform duration-300 hover:scale-120 focus:outline-none"
                            aria-label="छवि बन्द गर्नुहोस्"
                        >
                            <FaWindowClose className="text-2xl sm:text-3xl" />
                        </button>

                        <img
                            src={selectedImg}
                            alt="पूर्ण दृश्य"
                            className="block h-full w-full rounded object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
