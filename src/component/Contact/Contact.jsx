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
      className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-[85vh] scale-90 mx-auto max-w-5xl"
      style={{ transformOrigin: "top center" }}
    >
      <div className="px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-amber-400 mb-12 drop-shadow-[0_4px_8px_rgba(255,184,0,0.6)]">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div
            className="bg-gradient-to-tr from-gray-700/80 to-gray-900/90 backdrop-blur-lg p-7 rounded-3xl border border-amber-600
            shadow-[12px_12px_24px_rgba(0,0,0,0.8),-12px_-12px_24px_rgba(255,184,0,0.3)]
            hover:shadow-[8px_8px_18px_rgba(0,0,0,0.7),-8px_-8px_18px_rgba(255,184,0,0.5)]
            transition-shadow duration-500"
          >
            <h2 className="text-2xl font-bold mb-7 text-amber-300 drop-shadow-md">
              Get in Touch
            </h2>

            <div className="space-y-7">
              <ContactInfo
                icon={<MapPin className="text-amber-400" />}
                title="Our Location"
                text="123 Business Avenue, Suite 500, San Francisco, CA 94107"
              />
              <ContactInfo
                icon={<Phone className="text-amber-400" />}
                title="Phone Number"
                text="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<Mail className="text-amber-400" />}
                title="Email Address"
                text="Tacticaltitans127@gmail.com"
              />
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4 text-amber-300 drop-shadow-sm">
                Business Hours
              </h3>
              <div className="grid grid-cols-2 gap-3 text-gray-300 font-medium">
                <TimeSlot day="Monday - Friday" time="9:00 AM - 6:00 PM" />
                <TimeSlot day="Saturday" time="10:00 AM - 4:00 PM" />
                <TimeSlot day="Sunday" time="Closed" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-gradient-to-tr from-gray-800/80 to-gray-900/90 backdrop-blur-lg p-7 rounded-3xl border border-amber-600
            shadow-[12px_12px_24px_rgba(0,0,0,0.8),-12px_-12px_24px_rgba(255,184,0,0.3)]
            hover:shadow-[8px_8px_18px_rgba(0,0,0,0.7),-8px_-8px_18px_rgba(255,184,0,0.5)]
            transition-shadow duration-500"
          >
            <h2 className="text-2xl font-bold mb-7 text-amber-300 drop-shadow-md">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-green-600/20 border border-green-400 text-green-300 p-4 rounded-xl flex items-center gap-3 shadow-md">
                <CheckCircle className="h-6 w-6" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-600/20 border border-red-400 text-red-300 p-4 rounded-xl mb-5 shadow-md">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                      className="block text-sm font-medium text-gray-300 mb-2 tracking-wide"
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
                      className="w-full px-5 py-3 border border-amber-500 bg-black/60 rounded-xl text-white placeholder-amber-300
                      focus:ring-4 focus:ring-amber-500 focus:outline-none resize-none shadow-inner shadow-amber-600"
                      style={{ fontSize: "1rem" }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className={`flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600
                    text-black font-bold py-3 rounded-xl transition duration-300 transform
                    shadow-lg hover:shadow-amber-400/70 active:scale-[0.98] ${
                      sending ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                    style={{ fontSize: "1.1rem" }}
                  >
                    <Send className="h-6 w-6 mr-3" />
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

// Reusable components with updated styles
const ContactInfo = ({ icon, title, text }) => (
  <div className="flex items-center space-x-4">
    <div className="text-amber-400 drop-shadow-md">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-white tracking-wide">
        {title}
      </h3>
      <p className="text-gray-300 text-sm tracking-wide">{text}</p>
    </div>
  </div>
);

const TimeSlot = ({ day, time }) => (
  <div>
    <p className="font-semibold text-white text-sm tracking-wide">{day}:</p>
    <p className="text-gray-400 text-sm tracking-wide">{time}</p>
  </div>
);

const InputField = ({ id, label, type, value, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-300 mb-2 tracking-wide"
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
      className="w-full px-5 py-2 border border-amber-500 bg-black/60 rounded-xl text-white placeholder-amber-300
      focus:ring-4 focus:ring-amber-500 focus:outline-none shadow-inner shadow-amber-600"
      style={{ fontSize: "1rem" }}
    />
  </div>
);

export default Contact;
