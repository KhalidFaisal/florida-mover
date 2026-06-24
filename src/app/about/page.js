import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/siteData';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: `About Us | ${SITE_CONFIG.companyName}`,
  description: 'Learn more about the founders of Neat & Complete Relocation Services: Michael and Matthew Hoey. Family-owned and operated moving professionals in South Florida.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-navy-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="South Florida Moving Services"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
        </div>
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/20 rounded-full blur-[100px] z-0" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-6">
              Meet the Founders of <br />
              <span className="gold-gradient-text">Neat &amp; Complete</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              As a family-owned and operated business, we were founded on the belief that customers deserve a more personalized, stress-free moving experience at a fair price.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="btn-primary text-lg group">
                GET FREE QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-secondary text-lg">
                <Phone className="w-5 h-5" />
                CALL {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Michael Hoey Bio */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/michael-hoey.png"
                  alt="Michael Hoey - Owner of Neat & Complete Relocation Services"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="w-full lg:w-7/12">
              <div className="mb-8">
                <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-2">
                  Owner
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-2">
                  Michael Hoey
                </h2>
                <div className="w-20 h-1 bg-gold-500 rounded-full"></div>
              </div>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  My name is Michael Hoey, owner of Neat &amp; Complete Relocation Services. With over 12 years of experience in the moving industry, I have built my reputation on professionalism, reliability, and exceptional customer service.
                </p>
                <p>
                  I understand that moving can be stressful, which is why I treat every move with the care and attention it deserves. From carefully wrapping and protecting your furniture to safely transporting your belongings, I handle every item as if it were my own. My commitment to safe driving, attention to detail, and efficient moving practices helps ensure your possessions arrive at their destination safely and on time.
                </p>
                <p>
                  Whether you&apos;re moving locally or long distance, Neat &amp; Complete Relocation Services is dedicated to providing a smooth, stress-free moving experience. When you hire us, you&apos;re choosing experience, professionalism, and a team that truly cares about your belongings.
                </p>
                <p className="font-heading font-bold text-xl text-navy-900 mt-6 italic">
                  &quot;Let us do the heavy lifting while you focus on your next chapter.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matthew Hoey Bio */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Bio Content */}
            <div className="w-full lg:w-7/12">
              <div className="mb-8">
                <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-widest mb-2">
                  Co-Founder
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-2">
                  Matthew Hoey
                </h2>
                <div className="w-20 h-1 bg-gold-500 rounded-full"></div>
              </div>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  My name is Matthew Hoey, Co-Founder of Neat &amp; Complete Relocation Services. With more than 10 years of experience in delivery, dispatching, sales, and operations management, I have built my career around providing reliable service, clear communication, and exceptional customer care.
                </p>
                <p>
                  Throughout my career, I have managed multiple employees, coordinated routes and logistics across various locations, and helped ensure operations run smoothly and efficiently. My dedication to consistency, honesty, and transparency has earned recognition throughout my professional journey, including award-winning achievements and recognition from New York State.
                </p>
                <p>
                  By combining my operational and customer service experience with my brother&apos;s extensive moving industry expertise, we created a company focused on treating every customer with respect, professionalism, and care. I understand that trust is one of the most important factors when choosing a moving company. That&apos;s why I prioritize open communication, dependable service, and making sure our customers feel informed and confident throughout every step of the moving process.
                </p>
                <div className="flex items-center gap-3 mt-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p className="font-semibold text-navy-900 m-0">
                    A family-run team committed to delivering a smooth, stress-free experience backed by integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/matthew-hoey.png"
                  alt="Matthew Hoey - Co-Founder of Neat & Complete Relocation Services"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Wrapper */}
      <div id="quote">
        <QuoteForm />
      </div>
    </>
  );
}
