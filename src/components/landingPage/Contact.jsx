import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export function Contact() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}