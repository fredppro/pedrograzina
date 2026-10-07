import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Send,
} from 'lucide-react';
import { CONTACT_INFO, Translations } from '../i18n/translations';

interface QuoteContactProps {
  t: Translations;
}

interface FormValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const QuoteContact: React.FC<QuoteContactProps> = ({ t }) => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    email: '',
    service: 'customPaint',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const v = t.quote.form.validation;

    if (!values.name.trim()) {
      newErrors.name = v.nameRequired;
    }

    if (!values.phone.trim()) {
      newErrors.phone = v.phoneRequired;
    } else if (!/^[+\d\s()-]{7,20}$/.test(values.phone.trim())) {
      newErrors.phone = v.phoneInvalid;
    }

    if (!values.email.trim()) {
      newErrors.email = v.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      newErrors.email = v.emailInvalid;
    }

    if (!values.message.trim()) {
      newErrors.message = v.messageRequired;
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 350);
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.floating.prefilledWhatsappText
  )}`;

  const whatsappWithFormDetailsUrl = `https://wa.me/${
    CONTACT_INFO.whatsappNumber
  }?text=${encodeURIComponent(
    `${t.floating.prefilledWhatsappText}\n\n${t.quote.form.nameLabel}: ${values.name}\n${t.quote.form.phoneLabel}: ${values.phone}\n${t.quote.form.messageLabel}: ${values.message}`
  )}`;

  return (
    <section
      id="orcamento"
      className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-[#D5D5D5]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Location */}
          <div className="lg:col-span-5" id="contacto-direto">
            <div className="flex items-center gap-3 mb-3">
              <span
                aria-hidden="true"
                className="w-6 h-[2px] bg-[#F26A21] shrink-0"
              />
              <span className="text-xs font-semibold tracking-[0.14em] text-[#F26A21] uppercase">
                {t.quote.kicker}
              </span>
            </div>

            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              {t.quote.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#D5D5D5]/85 leading-relaxed">
              {t.quote.subtitle}
            </p>

            {/* Highlighted Direct Contact Block */}
            <div className="mt-9 pt-8 border-t border-[#D5D5D5]/12 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {t.quote.directContactTitle}
                </h3>
                <p className="mt-1 text-sm text-[#D5D5D5]/75 leading-relaxed">
                  {t.quote.directContactSubtitle}
                </p>
              </div>

              {/* Brand-integrated WhatsApp Direct Button (Orange/Black/White - NO Green) */}
              <div>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-[#1C1C1C] border border-[#F26A21]/60 hover:bg-[#F26A21] hover:border-[#F26A21] transition-all duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
                >
                  <MessageCircle className="w-5 h-5 text-[#F26A21] group-hover:text-white transition-colors" />
                  <span>{t.quote.whatsappCta}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D5D5D5] group-hover:text-white transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="mt-2 text-xs text-[#D5D5D5]/60">
                  {t.quote.whatsappDirectNote}
                </p>
              </div>

              {/* Direct Contact Channels List */}
              <div className="space-y-3.5 pt-2">
                {/* Phone */}
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#1C1C1C]/70 border border-[#D5D5D5]/10 hover:border-[#F26A21]/50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#D5D5D5]/10 flex items-center justify-center text-[#F26A21] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D5D5D5]/65">
                      {t.quote.phoneLabel}
                    </span>
                    <span className="font-mono-num text-base sm:text-lg font-bold text-white group-hover:text-[#F26A21] transition-colors">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#1C1C1C]/70 border border-[#D5D5D5]/10 hover:border-[#F26A21]/50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#D5D5D5]/10 flex items-center justify-center text-[#F26A21] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D5D5D5]/65">
                      {t.quote.emailLabel}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white group-hover:text-[#F26A21] transition-colors break-all">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Workshop Address (Leiria - Zicofa) */}
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#1C1C1C]/70 border border-[#D5D5D5]/10 hover:border-[#F26A21]/50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#D5D5D5]/10 flex items-center justify-center text-[#F26A21] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-[#D5D5D5]/65">
                      {t.quote.addressLabel}
                    </span>
                    <address className="not-italic text-sm sm:text-[15px] font-medium text-white group-hover:text-[#F26A21] transition-colors leading-snug mt-0.5">
                      {t.quote.addressValue}
                    </address>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#F26A21]">
                      <span>{t.quote.directionsLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1C1C1C]/40 border border-[#D5D5D5]/8">
                  <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#D5D5D5]/10 flex items-center justify-center text-[#D99A16] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D5D5D5]/65">
                      {t.quote.scheduleLabel}
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-white mt-0.5">
                      {t.quote.scheduleValue}
                    </span>
                    <span className="block text-xs text-[#D5D5D5]/60 mt-0.5">
                      {t.quote.scheduleWeekend}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C1C1C] border border-[#D5D5D5]/12 rounded-2xl p-6 sm:p-8 lg:p-10">
              {isSubmitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#F26A21]/15 border border-[#F26A21]/40 flex items-center justify-center mx-auto text-[#F26A21]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 max-w-lg mx-auto">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {t.quote.form.success.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#D5D5D5]/85 leading-relaxed">
                      {t.quote.form.success.message}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <a
                      href={whatsappWithFormDetailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white btn-primary-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.quote.form.success.openWhatsappNow}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setValues({
                          name: '',
                          phone: '',
                          email: '',
                          service: 'customPaint',
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-lg text-sm font-medium text-[#D5D5D5] hover:text-white bg-[#0B0B0B] border border-[#D5D5D5]/20 hover:border-[#D5D5D5]/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21]"
                    >
                      {t.quote.form.success.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-xs sm:text-sm font-semibold text-white mb-2"
                    >
                      {t.quote.form.nameLabel}{' '}
                      <span className="text-[#F26A21]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder={t.quote.form.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      className={`w-full px-4 py-3.5 rounded-lg bg-[#0B0B0B] text-white placeholder-[#D5D5D5]/40 text-sm sm:text-base border transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26A21] ${
                        errors.name
                          ? 'border-[#C62828]'
                          : 'border-[#D5D5D5]/18 hover:border-[#D5D5D5]/35'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="error-name"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#ef5350]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-xs sm:text-sm font-semibold text-white mb-2"
                      >
                        {t.quote.form.phoneLabel}{' '}
                        <span className="text-[#F26A21]" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder={t.quote.form.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? 'error-phone' : undefined
                        }
                        className={`w-full px-4 py-3.5 rounded-lg bg-[#0B0B0B] text-white placeholder-[#D5D5D5]/40 text-sm sm:text-base font-mono-num border transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26A21] ${
                          errors.phone
                            ? 'border-[#C62828]'
                            : 'border-[#D5D5D5]/18 hover:border-[#D5D5D5]/35'
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="error-phone"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#ef5350]"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-xs sm:text-sm font-semibold text-white mb-2"
                      >
                        {t.quote.form.emailLabel}{' '}
                        <span className="text-[#F26A21]" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder={t.quote.form.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? 'error-email' : undefined
                        }
                        className={`w-full px-4 py-3.5 rounded-lg bg-[#0B0B0B] text-white placeholder-[#D5D5D5]/40 text-sm sm:text-base border transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26A21] ${
                          errors.email
                            ? 'border-[#C62828]'
                            : 'border-[#D5D5D5]/18 hover:border-[#D5D5D5]/35'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#ef5350]"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection (Optional convenience) */}
                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-xs sm:text-sm font-semibold text-white mb-2"
                    >
                      {t.quote.form.serviceLabel}
                    </label>
                    <select
                      id="quote-service"
                      value={values.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg bg-[#0B0B0B] text-white text-sm sm:text-base border border-[#D5D5D5]/18 hover:border-[#D5D5D5]/35 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26A21]"
                    >
                      <option value="customPaint">
                        {t.quote.form.serviceOptions.customPaint}
                      </option>
                      <option value="crashRepair">
                        {t.quote.form.serviceOptions.crashRepair}
                      </option>
                      <option value="polishing">
                        {t.quote.form.serviceOptions.polishing}
                      </option>
                      <option value="headlights">
                        {t.quote.form.serviceOptions.headlights}
                      </option>
                      <option value="other">
                        {t.quote.form.serviceOptions.other}
                      </option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="quote-message"
                      className="block text-xs sm:text-sm font-semibold text-white mb-2"
                    >
                      {t.quote.form.messageLabel}{' '}
                      <span className="text-[#F26A21]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="quote-message"
                      rows={4}
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder={t.quote.form.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'error-message' : undefined
                      }
                      className={`w-full px-4 py-3.5 rounded-lg bg-[#0B0B0B] text-white placeholder-[#D5D5D5]/40 text-sm sm:text-base border transition-colors resize-y focus:outline-none focus:ring-2 focus:ring-[#F26A21] ${
                        errors.message
                          ? 'border-[#C62828]'
                          : 'border-[#D5D5D5]/18 hover:border-[#D5D5D5]/35'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#ef5350]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Primary Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg text-base font-semibold text-white btn-primary-orange cursor-pointer disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1C]"
                    >
                      <span>
                        {isSubmitting
                          ? t.quote.form.submittingButton
                          : t.quote.form.submitButton}
                      </span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="mt-3 text-center text-xs text-[#D5D5D5]/55">
                      {t.quote.form.responseGuarantee}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
