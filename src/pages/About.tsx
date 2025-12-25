import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation()

    return (
        <section id="about-us" className="bg-gray-50 py-20 sm:py-22 md:py-30 dark:bg-gray-950">
            <div className="mx-auto max-w-10/12 px-6">
                <h2 className="mb-15 text-center text-2xl font-extrabold text-gray-800 sm:mb-22 sm:text-3xl md:mb-30 md:text-4xl dark:text-gray-100">
                    {t('about.title')}
                </h2>

                <p
                    className="mb-6 leading-relaxed text-gray-700 sm:text-2xl dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: t('about.content') }}
                ></p>
            </div>
        </section>
    )
}
