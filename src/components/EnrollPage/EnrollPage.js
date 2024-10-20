import { useState } from "react";
import { useRouter } from "next/router";

const EnrollPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentType, setPaymentType] = useState("");
  const [submittingForm, setSubmittingForm] = useState(false);

  const router = useRouter();

  // Initialize Razorpay
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

// Function to submit form details using fetch instead of 
  const handleFormSubmit = async (PaymentId) => {
    setSubmittingForm(true);
    const formData = {
      name: name,
      email: email,
      phone: phone,
      selectedProduct: selectedProduct.name,
      selectedCoupon: selectedCoupon,
      totalPrice: totalPrice,
      paymentType: paymentType,
      PaymentId: PaymentId,
      url: router.asPath,
    };

    try {
      const response = await fetch("https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully to external endpoint!");
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmittingForm(false);
    }
  };

  // Function to make payment using Razorpay and fetch
  const makePayment = async () => {
    try {
      const res = await initializeRazorpay();
      if (!res) {
        throw new Error("Razorpay SDK failed to load");
      }

      const response = await fetch("/api/Razor_pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Razorpay details");
      }

      const data = await response.json();
      const options = {
        key: process.env.RAZORPAY_KEY,
        name: "Learnbay",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your purchase",
        image: "https://d32and0ii3b8oy.cloudfront.net/web/s3/Logo.png",
        handler: async (response) => {
          const { razorpay_payment_id } = response;
          handleFormSubmit(razorpay_payment_id); // Call the form submit function after payment
        },
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div>
      <h1>Enroll Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          makePayment(); // Trigger payment flow
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <select
          onChange={(e) => setSelectedProduct({ name: e.target.value })}
          value={selectedProduct.name}
          required
        >
          <option value="">Select Product</option>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
        </select>
        <input
          type="text"
          placeholder="Coupon Code"
          value={selectedCoupon}
          onChange={(e) => setSelectedCoupon(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Price"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          required
        />
        <select
          onChange={(e) => setPaymentType(e.target.value)}
          value={paymentType}
          required
        >
          <option value="">Select Payment Type</option>
          <option value="Razorpay">Razorpay</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" disabled={submittingForm}>
          {submittingForm ? "Submitting..." : "Enroll Now"}
        </button>
      </form>
    </div>
  );
};

export default EnrollPage;
