import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HotNews() {
  const marqueeRef = useRef(null);

  const pauseMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const resumeMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div className="my-6">
      <marquee
        ref={marqueeRef}
        className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] py-4 text-white"
        onMouseEnter={pauseMarquee}
        onMouseLeave={resumeMarquee}
      >
        <div>
          <Link to={"/AllNotice"}>
            <ul className="flex gap-10">
              <li>👉 এ গত ১লা জুলাই ২০২১ তারিখে ক্রাফট ইন্সট্রাক্ঘ=১৮ জন এবং ক্রাফট ইন্সট্রাক্ঘ=৩৮ জন যোগদান করেছেন ।</li>
              <li>👉  কারিগরি শিক্ষা অধিদপ্তর এর স্টাইপেন্ড এমআইএস সফটওয়্যারে উপবৃত্তির জন্য কাজ চলমান।</li>
              <li>👉  ৪ তলায় ভ্যাটিক্যাল এক্সট্রেনশসহ ৩য় তলার দুইটি রুমের কনস্ট্রাকশনের কাজ চলমান।</li>
              <li>👉  কোভিড-১৯ এর ২য় ভোজের টিকা সকল কর্মকর্তা ও কর্মচারী সম্পন্ন করেছেন।</li>
              <li>👉  ৩ দিন ব্যাপী বিগত ৪ বছরের আর্থিক অডিট সম্পন্ন হয়েছে।</li>
              <li>👉  অধ্যক্ষের বাসায় টাইলসের কাজ সম্পন্ন হয়েছে</li>
            </ul>
          </Link>
        </div>
      </marquee>
    </div>
  );
}

