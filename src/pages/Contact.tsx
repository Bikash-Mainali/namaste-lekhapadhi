import { FaFacebookF } from 'react-icons/fa'
import { AnimatedBorder } from '../components/AnimatedBorder.tsx'
import { FcGoogle } from 'react-icons/fc'
import Binod from '../assets/images/binod.png'
import Madhab from '../assets/images/madhav.jpg'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation()
    // contact details are stored in i18n translation files
    const contactDetails = [
        {
            id: 1,
            name: 'contact.binod.name',
            phone: 'contact.binod.phone',
            email: 'contact.binod.email',
            imgLink: `${Binod}`,
            alt: 'contact.binod.name',
        },
        {
            id: 2,
            name: 'contact.madhav.name',
            phone: 'contact.madhav.phone',
            email: 'contact.madhav.email',
            imgLink: `${Madhab}`,
            alt: 'contact.madhav.name',
        },
    ]

    return (
        <section id="contact" className="bg-gray-50 py-20 sm:py-22 md:py-30 dark:bg-gray-950">
            <div className="mx-auto max-w-10/12 px-6">
                <h2 className="mb-15 text-center text-2xl font-extrabold text-gray-800 sm:mb-22 sm:text-3xl md:mb-30 md:text-4xl dark:text-white">
                    {t('contact.title')}
                </h2>

                {/* Top block: social icons + contacts */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                        <div className="flex flex-1 flex-col items-center space-y-6 text-center md:items-start md:text-left">
                            <div className="gradient-background relative rounded-lg">
                                <AnimatedBorder>
                                    <div className="p-2 text-lg font-bold tracking-widest sm:p-3 sm:text-xl md:p-4 md:text-2xl dark:bg-gray-800 dark:text-white">
                                        {t('contact.reachUs')}
                                    </div>
                                </AnimatedBorder>
                            </div>

                            <p className="max-w-md text-sm text-gray-600 dark:text-gray-300">
                                {t('contact.description')}
                            </p>

                            <div className="mt-4 flex justify-center space-x-5 md:justify-start">
                                {[
                                    {
                                        id: 1,
                                        icon: <FaFacebookF />,
                                        color: 'blue',
                                        href: 'https://www.facebook.com/binodkumar.mainali',
                                    },
                                    {
                                        id: 2,
                                        icon: <FcGoogle />,
                                        color: 'blue',
                                        href: 'https://share.google/efNct91hwVi1KUvOO',
                                    },
                                ].map(item => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl dark:bg-gray-700 dark:text-white bg-${item.color}-100 text-${item.color}-600 transform transition-transform duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white`}
                                        aria-label={item.icon?.type?.name || 'सामाजिक लिंक'}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>

                            <p
                                className="text-gray-700 dark:text-gray-300"
                                dangerouslySetInnerHTML={{ __html: t('contact.address') }}
                            ></p>
                        </div>

                        {/* Contacts list: centered inside right column */}
                        <div className="grid grid-cols-1 place-items-center gap-10 [@media(min-width:1050px)]:grid-cols-2">
                            {contactDetails.map(contact => (
                                <div
                                    key={contact.id}
                                    className="flex h-[250px] w-[250px] flex-col items-center justify-evenly rounded-2xl bg-white shadow-md transition hover:shadow-md dark:bg-gray-800 dark:shadow-xs dark:shadow-gray-500 [@media(min-width:1300px)]:h-[350px] [@media(min-width:1300px)]:w-[350px]"
                                >
                                    {/* Image Container */}
                                    <div className="flex h-1/2 w-1/2 items-center justify-center p-2">
                                        <img
                                            src={contact.imgLink}
                                            alt={t(contact.alt)}
                                            className="h-full w-full rounded-full border border-gray-200 object-cover"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="w-full space-y-2 border-t border-gray-300 py-2 text-center dark:border-gray-600">
                                        <p className="font-semibold text-gray-800 sm:text-lg dark:text-gray-300">
                                            {t(contact.name)}
                                        </p>
                                        <p
                                            className="text-sm text-gray-600 dark:text-gray-300"
                                            dangerouslySetInnerHTML={{ __html: t(contact.phone) }}
                                        ></p>
                                        <p
                                            className="text-sm text-gray-600 dark:text-gray-300"
                                            dangerouslySetInnerHTML={{ __html: t(contact.email) }}
                                        ></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form: placed below social icons and images (full width) */}
                    <div className="mt-20 grid grid-cols-1 gap-20 [@media(min-width:1050px)]:grid-cols-2">
                        <div className="order-2 mx-auto w-full rounded-sm shadow-2xl [@media(min-width:1050px)]:order-1">
                            <iframe
                                className="h-[400px] w-full rounded-sm [@media(min-width:1050px)]:h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8691766427214!2d85.2816587!3d27.690438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x856596ababc4e189%3A0xdd3231975c58d0e!2sNamaste%20Lekhapadhi%20%26%20Kanuni%20Sewa!5e0!3m2!1sen!2sus!4v1763266171352!5m2!1sen!2sus"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <form className="order-1 w-full space-y-6 rounded-2xl bg-white p-8 text-sm shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8 md:p-10 dark:bg-gray-800 dark:shadow-xs dark:shadow-gray-500 dark:hover:shadow-md [@media(min-width:1050px)]:order-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    {t('contact.contactForm.name.label')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-white"
                                    placeholder={t('contact.contactForm.name.placeholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-medium text-gray-700 dark:text-gray-300">
                                    {t('contact.contactForm.email.label')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-white"
                                    placeholder={t('contact.contactForm.email.placeholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-medium text-gray-700 dark:text-gray-300">
                                    {t('contact.contactForm.message.label')}
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-white"
                                    placeholder={t('contact.contactForm.message.placeholder')}
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="gradient-background w-full transform cursor-pointer rounded-md px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto"
                                >
                                    {t('contact.contactForm.submit')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
