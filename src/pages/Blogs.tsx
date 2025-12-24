import { useMemo, useState } from 'react'

type Post = {
    id: number
    title: string
    date: string
    excerpt: string
    href: string
    img: string
}

const posts: Post[] = [
    {
        id: 1,
        title: 'नेपालमा शिक्षा सम्बन्धी कानुन',
        date: '७ नोभेम्बर, २०२५',
        excerpt:
            'संविधानिक प्रावधानदेखि नियामक निकायदेखि शिक्षा क्षेत्रमा लागू हुने कानुनी ढाँचा र नियमहरू अन्वेषण गर्नुहोस्...',
        href: 'https://www.nepallawyer.com/blog/education-law-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4087/conversions/Gemini_Generated_Image_sjyyrhsjyyrhsjyy-thumb.webp',
    },
    {
        id: 2,
        title: 'नेपालमा नयाँ पासपोर्ट दर्ता प्रक्रिया',
        date: '४ नोभेम्बर, २०२५',
        excerpt:
            'नेपालको MRP पासपोर्ट प्रणालीका लागि अनलाइन आवेदन, आवश्यक कागजात, शुल्क र प्रशोधन समयबारे जान्नुहोस्...',
        href: 'https://www.nepallawyer.com/blog/new-passport-registration-process-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4085/conversions/Gemini_Generated_Image_ag1vh7ag1vh7ag1v-thumb.webp',
    },
    {
        id: 3,
        title: 'नेपालमा अनलाइन NID दर्ता',
        date: '४ नोभेम्बर, २०२५',
        excerpt:
            'हाम्रो विस्तृत मार्गदर्शकले नेपालमा अनलाइन राष्ट्रिय परिचयपत्र (NID) दर्ता कसरी पूरा गर्ने भन्ने सबै प्रक्रिया बताउँछ...',
        href: 'https://www.nepallawyer.com/blog/online-nid-registration-nepal',
        img: 'https://www.nepallawyer.com/storage/4084/conversions/Gemini_Generated_Image_xfg4bxxfg4bxxfg4-thumb.webp',
    },
    {
        id: 4,
        title: 'अमेरिकाबाट NRN कार्ड कति समय लाग्छ?',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'तपाईँ अमेरिकामा बसोबास गर्दै हुनुहुन्छ र NRN कार्डको समयरेखा जान्न चाहनुहुन्छ? यो मार्गदर्शिकाले आवश्यक विवरणहरू प्रस्तुत गर्छ...',
        href: 'https://www.nepallawyer.com/blog/how-long-does-nrn-card-take-from-usa',
        img: 'https://www.nepallawyer.com/storage/4081/conversions/Gemini_Generated_Image_nlql1pnlql1pnlql-thumb.webp',
    },
    {
        id: 5,
        title: 'नेपालमा NRN को सम्पत्ति अधिकार',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'बाहिर बसोबास गर्ने नेपाली (NRN) हरूले नेपालमा सम्पत्ति खरीद गर्दा के अधिकार र प्रतिबन्धहरू लागू हुन्छन् भनेर जान्नुहोस्...',
        href: 'https://www.nepallawyer.com/blog/nrn-property-rights-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4080/conversions/Gemini_Generated_Image_i1e52oi1e52oi1e5-thumb.webp',
    },
    {
        id: 6,
        title: 'NRN का लागि सम्पत्ति कर (नेपाल)',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'NRN हरूका लागि सम्पत्ति कर सम्बन्धी दायित्वहरू र नेपालका कर सम्बन्धी प्रावधानहरूको संक्षिप्त परिचय...',
        href: 'https://www.nepallawyer.com/blog/property-tax-for-nrn-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4079/conversions/Gemini_Generated_Image_k65zl9k65zl9k65z-thumb.webp',
    },
    {
        id: 7,
        title: 'नेपालमा अनलाइन NID दर्ता',
        date: '४ नोभेम्बर, २०२५',
        excerpt:
            'हाम्रो विस्तृत मार्गदर्शिकले नेपालमा अनलाइन राष्ट्रिय परिचयपत्र (NID) दर्ता कसरी पूरा गर्ने भन्ने सबै प्रक्रिया बताउँछ...',
        href: 'https://www.nepallawyer.com/blog/online-nid-registration-nepal',
        img: 'https://www.nepallawyer.com/storage/4084/conversions/Gemini_Generated_Image_xfg4bxxfg4bxxfg4-thumb.webp',
    },
    {
        id: 8,
        title: 'अमेरिकाबाट NRN कार्ड कति समय लाग्छ?',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'तपाईँ अमेरिकामा बसोबास गर्दै हुनुहुन्छ र NRN कार्डको समयरेखा जान्न चाहनुहुन्छ? यो मार्गदर्शिकाले आवश्यक विवरणहरू प्रस्तुत गर्छ...',
        href: 'https://www.nepallawyer.com/blog/how-long-does-nrn-card-take-from-usa',
        img: 'https://www.nepallawyer.com/storage/4081/conversions/Gemini_Generated_Image_nlql1pnlql1pnlql-thumb.webp',
    },
    {
        id: 9,
        title: 'नेपालमा NRN को सम्पत्ति अधिकार',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'बाहिर बसोबास गर्ने नेपाली (NRN) हरूले नेपालमा सम्पत्ति खरीद गर्दा के अधिकार र प्रतिबन्धहरू लागू हुन्छन् भनेर जान्नुहोस्...',
        href: 'https://www.nepallawyer.com/blog/nrn-property-rights-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4080/conversions/Gemini_Generated_Image_i1e52oi1e52oi1e5-thumb.webp',
    },
    {
        id: 10,
        title: 'NRN का लागि सम्पत्ति कर (नेपाल)',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'NRN हरूका लागि सम्पत्ति कर सम्बन्धी दायित्वहरू र नेपालका कर सम्बन्धी प्रावधानहरूको संक्षिप्त परिचय...',
        href: 'https://www.nepallawyer.com/blog/property-tax-for-nrn-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4079/conversions/Gemini_Generated_Image_k65zl9k65zl9k65z-thumb.webp',
    },
    {
        id: 11,
        title: 'NRN का लागि सम्पत्ति कर (नेपाल)',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'NRN हरूका लागि सम्पत्ति कर सम्बन्धी दायित्वहरू र नेपालका कर सम्बन्धी प्रावधानहरूको संक्षिप्त परिचय...',
        href: 'https://www.nepallawyer.com/blog/property-tax-for-nrn-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4079/conversions/Gemini_Generated_Image_k65zl9k65zl9k65z-thumb.webp',
    },
    {
        id: 12,
        title: 'नेपालमा अनलाइन NID दर्ता',
        date: '४ नोभेम्बर, २०२५',
        excerpt:
            'हाम्रो विस्तृत मार्गदर्शिकले नेपालमा अनलाइन राष्ट्रिय परिचयपत्र (NID) दर्ता कसरी पूरा गर्ने भन्ने सबै प्रक्रिया बताउँछ...',
        href: 'https://www.nepallawyer.com/blog/online-nid-registration-nepal',
        img: 'https://www.nepallawyer.com/storage/4084/conversions/Gemini_Generated_Image_xfg4bxxfg4bxxfg4-thumb.webp',
    },
    {
        id: 13,
        title: 'अमेरिकाबाट NRN कार्ड कति समय लाग्छ?',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'तपाईँ अमेरिकामा बसोबास गर्दै हुनुहुन्छ र NRN कार्डको समयरेखा जान्न चाहनुहुन्छ? यो मार्गदर्शिकाले आवश्यक विवरणहरू प्रस्तुत गर्छ...',
        href: 'https://www.nepallawyer.com/blog/how-long-does-nrn-card-take-from-usa',
        img: 'https://www.nepallawyer.com/storage/4081/conversions/Gemini_Generated_Image_nlql1pnlql1pnlql-thumb.webp',
    },
    {
        id: 14,
        title: 'नेपालमा NRN को सम्पत्ति अधिकार',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'बाहिर बसोबास गर्ने नेपाली (NRN) हरूले नेपालमा सम्पत्ति खरीद गर्दा के अधिकार र प्रतिबन्धहरू लागू हुन्छन् भनेर जान्नुहोस्...',
        href: 'https://www.nepallawyer.com/blog/nrn-property-rights-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4080/conversions/Gemini_Generated_Image_i1e52oi1e52oi1e5-thumb.webp',
    },
    {
        id: 15,
        title: 'NRN का लागि सम्पत्ति कर (नेपाल)',
        date: '२५ अक्टोबर, २०२५',
        excerpt:
            'NRN हरूका लागि सम्पत्ति कर सम्बन्धी दायित्वहरू र नेपालका कर सम्बन्धी प्रावधानहरूको संक्षिप्त परिचय...',
        href: 'https://www.nepallawyer.com/blog/property-tax-for-nrn-in-nepal',
        img: 'https://www.nepallawyer.com/storage/4079/conversions/Gemini_Generated_Image_k65zl9k65zl9k65z-thumb.webp',
    },
]

export const Blogs = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [postsPerPage] = useState<number>(10) // change as needed

    const totalPages = Math.ceil(posts.length / postsPerPage)

    const visiblePosts = useMemo(() => {
        const start = (currentPage - 1) * postsPerPage
        return posts.slice(start, start + postsPerPage)
    }, [currentPage, postsPerPage])

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const renderPageButtons = () => {
        if (totalPages <= 9) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

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
        <section id="blogs" className="bg-gray-50 py-20 sm:py-22 md:py-30 dark:bg-gray-950">
            <div className="mx-auto max-w-10/12 px-6">
                <h2 className="mb-15 text-center text-2xl font-extrabold text-gray-800 sm:mb-22 sm:text-3xl md:mb-30 md:text-4xl dark:text-white">
                    ब्लगहरू
                </h2>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {visiblePosts.map(post => (
                        <article
                            key={post.id}
                            className="overflow-hidden rounded bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
                        >
                            <a href={post.href}>
                                <img className="h-56 w-full object-cover" alt={post.title} src={post.img} />
                            </a>

                            <div className="p-4">
                                <h5 className="mb-2 text-lg font-medium">
                                    <a
                                        className="text-gray-900 transition-colors hover:text-blue-600 dark:text-white"
                                        href={post.href}
                                        title={post.title}
                                    >
                                        {post.title}
                                    </a>
                                </h5>

                                <ul className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                                    <li>{post.date}</li>
                                </ul>

                                <p className="mb-4 text-gray-700 dark:text-gray-300">
                                    {post.excerpt}
                                    <a
                                        className="ml-1 text-blue-600 hover:underline dark:text-gray-300"
                                        href={post.href}
                                    >
                                        [...]
                                    </a>
                                </p>

                                <a
                                    className="float-right inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                                    href={post.href}
                                >
                                    <i className="fa fa-angle-double-right mr-1" /> थप पढ्नुहोस्
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                    <nav aria-label="Pagination">
                        <ul className="flex items-center gap-2 text-sm select-none">
                            {/* Prev */}
                            <li>
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="rounded-xl border border-gray-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700/70 dark:text-white dark:hover:bg-gray-700"
                                    aria-label="Previous Page"
                                >
                                    ‹
                                </button>
                            </li>

                            {/* Page numbers */}
                            {renderPageButtons().map((p, idx) =>
                                typeof p === 'number' ? (
                                    <li key={idx}>
                                        <button
                                            onClick={() => goToPage(p)}
                                            className={`rounded-xl px-4 py-2 font-medium transition-all ${
                                                p === currentPage
                                                    ? 'scale-110 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl'
                                                    : 'border border-gray-200 bg-white/70 text-gray-700 backdrop-blur hover:bg-white hover:shadow-md dark:border-gray-600 dark:bg-gray-700/70 dark:text-gray-200 dark:hover:bg-gray-700'
                                            }`}
                                            aria-current={p === currentPage ? 'page' : undefined}
                                        >
                                            {p}
                                        </button>
                                    </li>
                                ) : (
                                    <li key={idx} className="px-3 text-gray-400 dark:text-gray-500">
                                        …
                                    </li>
                                )
                            )}

                            {/* Next */}
                            <li>
                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="rounded-xl border border-gray-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:bg-gray-700/70 dark:text-white dark:hover:bg-gray-700"
                                    aria-label="Next Page"
                                >
                                    ›
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Blogs
