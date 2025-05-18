import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init("yvWd1LOmDczF0qLHF");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      await emailjs.send("service_zp3xqtf", "template_7h6ed92", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Email send error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen"
    >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-amber-400 mb-12 text-center drop-shadow-lg">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-xl transition hover:scale-[1.02] duration-300 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-amber-300">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <ContactInfo
                icon={<MapPin />}
                title="Our Location"
                text="123 Business Avenue, Suite 500, San Francisco, CA 94107"
              />
              <ContactInfo
                icon={<Phone />}
                title="Phone Number"
                text="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<Mail />}
                title="Email Address"
                text="Tacticaltitans127@gmail.com"
              />
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3 text-amber-300">
                Business Hours
              </h3>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                <TimeSlot day="Monday - Friday" time="9:00 AM - 6:00 PM" />
                <TimeSlot day="Saturday" time="10:00 AM - 4:00 PM" />
                <TimeSlot day="Sunday" time="Closed" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 bg-opacity-90 backdrop-blur p-8 rounded-xl shadow-xl transition hover:scale-[1.02] duration-300 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-amber-300">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-green-200/10 border border-green-500 text-green-400 p-4 rounded-md flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-200/10 border border-red-500 text-red-400 p-4 rounded-md mb-4">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {["name", "email", "subject"].map((field) => (
                    <InputField
                      key={field}
                      id={field}
                      label={
                        field === "name"
                          ? "Full Name"
                          : field[0].toUpperCase() + field.slice(1)
                      }
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-black/50 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className={`flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded-md transition duration-300 ${
                      sending ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable components
const ContactInfo = ({ icon, title, text }) => (
  <div className="flex items-start">
    <div className="text-amber-400 mt-1">{icon}</div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  </div>
);

const TimeSlot = ({ day, time }) => (
  <div>
    <p className="font-semibold text-white">{day}:</p>
    <p className="text-gray-300">{time}</p>
  </div>
);

const InputField = ({ id, label, type, value, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-300 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border border-gray-600 bg-black/50 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
    />
  </div>
);

export default Contact;
